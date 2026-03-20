"use client";
import React from "react";

// Structure for multiple pages with flexible content
const TITLE_CONFIG = {
  default: {
    title: (
      <>
        From Expertise{" "}
        <span className="gs__block">
          to <span className="gs__terms-orange">Application</span>
        </span>
      </>
    ),
    description: "Selected case studies demonstrating expertise in action.",
  },
  services: {
    title: (
      <>
        Case Stuties 
      </>
    ),
    description:
      "Transformational leaders who didn't just join companies—they revolutionized them.",
  },
  expertise: {
    title: (
      <>
        Applied, <span className="gs__terms-orange">Structured Knowledge</span>
      </>
    ),
    description:
      "Our expertise is organized deliberately to help you navigate complex challenges. Each path below represents focused specialization, allowing you to identify the perspective most relevant to your specific context.",
  },
  // Add more pages or variants as needed
};

function TitleWithText({
  theme = "dark",
  page = "default",
  customTitle,
  customDescription,
}) {
  const isDarkFooter = theme === "dark";
  // Use custom props, fallback to config
  const title =
    customTitle !== undefined
      ? customTitle
      : TITLE_CONFIG[page]?.title || TITLE_CONFIG.default.title;
  const description =
    customDescription !== undefined
      ? customDescription
      : TITLE_CONFIG[page]?.description || TITLE_CONFIG.default.description;

  return (
    <div
      className="gs__title-with-text-wp"
      data-theme={isDarkFooter ? "section-dark" : "section-light"}
    >
      <div className="gs__container">
        <div className="gs__title-with-text">
          <h2 className="gs__h2-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TitleWithText;
