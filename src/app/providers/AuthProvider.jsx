"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeLogoLoader from "@/components/Home/HomeLogoLoader";
import { authService } from "@/app/services/authService";
import {
  login,
  logout,
  setInitialized,
} from "@/app/store/slices/auth/authSlice";
import { getToken } from "@/app/utils/constant";

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const initialized = useSelector((state) => state.auth.initialized);

  useEffect(() => {
    // Global loader helpers
    window.showLoader = () => {
      const el = document.getElementById("global-loader");
      if (el) el.style.display = "flex";
    };

    window.hideLoader = () => {
      const el = document.getElementById("global-loader");
      if (el) el.style.display = "none";
    };

    const initAuth = async () => {
      if (typeof window !== "undefined") {
        window.showLoader();
      }

      const token = getToken();

      if (!token) {
        dispatch(logout());
        dispatch(setInitialized());
        if (typeof window !== "undefined") {
          window.hideLoader();
        }
        return;
      }

      const res = await authService.verifyToken();

      if (typeof window !== "undefined") {
        window.hideLoader();
      }

      if (res.success) {
        dispatch(login({ user: res.data.user, token }));
      } else {
        dispatch(logout());
      }

      dispatch(setInitialized());
    };

    initAuth();
  }, [dispatch]);

  const loaderOverlay = (
    <div
      id="global-loader"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 999999,
        display: "none",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <HomeLogoLoader />
    </div>
  );

  if (!initialized) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HomeLogoLoader />
      </div>
    );
  }

  return (
    <>
      {loaderOverlay}
      {children}
    </>
  );
}
