"use client";
import React from "react";

const BreadcrumbArrow = () => (
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
);

function TermsHero({
  theme = "dark",
  wrapperClassName = "",
  breadcrumbs = [],
  title,
  statSection,
  imageDiv,
  videoDiv,
  middle,
  navText,
  description,
  button,
  rightContentClassName = "",
}) {
  const isDarkSection = theme === "dark";
  const crumbs = ["Home", ...breadcrumbs].filter(Boolean);

  return (
    <div
      className={`gs__terms ${wrapperClassName}`.trim()}
      data-theme={isDarkSection ? "section-dark" : "section-light"}
    >
      <div className="gs__container">
        <div className="gs__terms-container">
          <nav className="gs__breadcrumb">
            {crumbs.map((label, idx) => {
              const isLast = idx === crumbs.length - 1;
              return (
                <React.Fragment key={`${label}-${idx}`}>
                  {idx !== 0 && (
                    <span>
                      <BreadcrumbArrow />
                    </span>
                  )}
                  <span className={isLast ? "active" : undefined}>{label}</span>
                </React.Fragment>
              );
            })}
          </nav>

          <div className="gs__terms-left">
            <h1 className="gs__h1-title">{title}</h1>
          </div>

          {middle || null}

          <div className="gs__terms-right">
            {navText ? <p className="gs__terms-nav">{navText}</p> : null}
            <div className={rightContentClassName}>
              {/* Move statSection below the description, aligned here */}
              {statSection ? (
                <div className="gs__hero-stats">{statSection}</div>
              ) : null}
              {/* Insert image and video only here, no stats */}
              {imageDiv ? (
                <div className="gs__hero-image">{imageDiv}</div>
              ) : null}
              {videoDiv ? (
                <div className="gs__hero-video">{videoDiv}</div>
              ) : null}
              {description ? (
                <h6 className="gs__terms-text">{description}</h6>
              ) : null}
              {button ? (
                <button
                  className={button.className || "gs__btn"}
                  type={button.type || "button"}
                  onClick={button.onClick}
                >
                  <span className="gs__btn-inner">
                    <span className="gs__btn-text">{button.primaryText}</span>
                    <span className="gs__btn-text">{button.secondaryText}</span>
                  </span>
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsHero;
