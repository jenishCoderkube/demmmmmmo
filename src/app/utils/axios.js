import axios from "axios";
import { getToken, clearToken } from "./constant";

export const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
console.log("BASE URL:<<<<<<<<<<<", baseURL);
// Create Axios instance
const axiosInstance = axios.create({
  baseURL: `${baseURL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.defaults.withCredentials = true;

/* -------------------------------------------------
   REQUEST INTERCEPTOR → Attach auth token
---------------------------------------------------*/
axiosInstance.interceptors.request.use(
  (config) => {
    // Only add auth token if skipAuthInterceptor is not explicitly set to true
    if (config.headers?.skipAuthInterceptor !== true) {
      const token = getToken();
      if (token) config.headers.Authorization = `Bearer ${token}`;
    }

    // Remove skipAuthInterceptor from headers before sending (internal use only)
    if (config.headers?.skipAuthInterceptor !== undefined) {
      delete config.headers.skipAuthInterceptor;
    }

    // Handle FormData - let browser set Content-Type with boundary
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
      return config;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

/* -------------------------------------------------
   RESPONSE INTERCEPTOR → Handle errors
---------------------------------------------------*/
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      clearToken();
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
