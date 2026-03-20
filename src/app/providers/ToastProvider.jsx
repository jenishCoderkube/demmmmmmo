"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastProvider() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      newestOnTop
      theme="colored"
      style={{ zIndex: 999999 }}
    />
  );
}




