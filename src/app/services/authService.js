import api from "../utils/axios";

// Common reusable request handler
export const handleRequest = async (
  method,
  url,
  payload = {},
  options = {},
) => {
  try {
    const config = {
      method,
      url,
      headers: {
        skipAuthInterceptor: options.skipAuthInterceptor !== false,
        ...options.headers,
      },
    };

    // Only attach data if method supports body
    if (method !== "get") {
      config.data = payload;
    } else {
      config.params = payload;
    }

    const response = await api(config);

    return {
      success: response.data?.success,
      message: response.data?.message,
      data: response.data?.data,
    };
  } catch (error) {
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.message,
    };
  }
};

// Auth endpoints
const AUTH_ENDPOINTS = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  VERIFY_TOKEN: "/auth/verifyToken",
  CHECK_EMAIL: "/auth/checkEmail",
  FORGOT_PASSWORD: "/auth/forgotPassword",
  RESET_PASSWORD: "/auth/resetPassword",
};

export const authService = {
  login: (payload) => handleRequest("post", AUTH_ENDPOINTS.LOGIN, payload),

  register: (payload) =>
    handleRequest("post", AUTH_ENDPOINTS.REGISTER, payload),

  checkEmail: (email) =>
    handleRequest("post", AUTH_ENDPOINTS.CHECK_EMAIL, { email }),

  checkUsername: (username) =>
    handleRequest("post", AUTH_ENDPOINTS.CHECK_EMAIL, { username }),

  verifyToken: () => handleRequest("get", AUTH_ENDPOINTS.VERIFY_TOKEN),

  forgotPassword: (email) =>
    handleRequest(
      "post",
      AUTH_ENDPOINTS.FORGOT_PASSWORD,
      { email },
      { skipAuthInterceptor: false },
    ),

  resetPassword: (token, new_password) =>
    handleRequest(
      "post",
      AUTH_ENDPOINTS.RESET_PASSWORD,
      { token, new_password },
      { skipAuthInterceptor: true },
    ),
};










