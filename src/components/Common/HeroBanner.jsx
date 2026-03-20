"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { darkHeroBannerRoutes } from "@/config/footerTheme";

const HeroBanner = ({
  title,
  subtitle,
  children,
  className = "",
  theme = "dark",
}) => {
  const pathname = usePathname();

  const isDarkFooter = theme === "dark";
  return (
    <div
      className="gs__terms"
      data-theme={isDarkFooter ? "section-dark" : "section-light"}
    >
      <div className="gs__container">
        <div className="gs__terms-container">
          <nav className="gs__breadcrumb">
            <span>Home</span>
            <span>
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.83203 4.23926V4.30371L4.47949 8.54395L3.79199 7.80762L7.00781 4.81543H0V3.72754H7.00781L3.79199 0.735352L4.47949 0L8.83203 4.23926Z"
                  fill="#A2A2A2"
                />
              </svg>
            </span>
            <span>Insights</span>
            <span>
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.83203 4.23926V4.30371L4.47949 8.54395L3.79199 7.80762L7.00781 4.81543H0V3.72754H7.00781L3.79199 0.735352L4.47949 0L8.83203 4.23926Z"
                  fill="#A2A2A2"
                />
              </svg>
            </span>
            <span className="active">Blog</span>
          </nav>
          {/* LEFT SIDE */}
          <div className="gs__terms-left">
            <h1 className="gs__h1-title">{title || "Blog"}</h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="gs__terms-right">
            <p className="gs__terms-nav">Press Releases & Blog Articles</p>

            <h6 className="gs__terms-text">
              Our comprehensive reports and guides provide deep insights into
              MedTech leadership, talent acquisition, investment trends, and
              market dynamics shaping the industry landscape.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;










