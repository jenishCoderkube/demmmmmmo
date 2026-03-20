"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="gs__notfound">
      <div className="gs__container gs__notfound__container">
        <h1 className="gs__notfound__title">404</h1>

        <div className="gs__notfound__subtitle">Dead link detected</div>
        <span className="gs__notfound__divider-wp">
          <hr className="gs__notfound__divider" />
        </span>

        <div className="gs__notfound__description">
          We've tried every resuscitation protocol in the book, but there is no
          pulse. We've called the time of death and moved this link to the
          digital morgue.
        </div>

        <button className="gs__btn gs__white-btn" onClick={handleBack}>
          <span className="gs__btn-inner">
            <span className="gs__btn-text">Back to Consciousness</span>
            <span className="gs__btn-text">Our Solutions</span>
          </span>
        </button>
      </div>
    </div>
  );
}










