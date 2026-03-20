"use client";
import React from "react";
import "@/app/globals.css";
import { darkHeroBannerRoutes } from "@/config/footerTheme";
import Link from "next/link";

const GetInTouch = ({
  theme = "dark",
  title,
  description,
  btnText,
  btnLink,
}) => {
  // const isDarkFooter = theme === "dark";
  return (
    <section
      className="gs__get-in-touch-section"
      data-theme={theme === "dark" ? "section-dark" : "section-light"}
    >
      <div className="gs__container">
        <div className="gs__get-in-touch-content">
          {title ? (
            <div
              className="gs__h2-title"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          ) : (
            <h2>We'd love to hear what you're building</h2>
          )}
          {description && (
            <p dangerouslySetInnerHTML={{ __html: description }} />
          )}
          <Link href={btnLink || "/contact"}>
            <button className="gs__btn">
              <span className="gs__btn-inner">
                <span className="gs__btn-text">
                  {btnText || "Get In Touch"}
                </span>
                <span className="gs__btn-text">
                  {btnText || "Get In Touch"}
                </span>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
