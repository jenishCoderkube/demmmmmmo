"use client";
import React from "react";

// Static data for problem/feature cards
export const problemCardsStaticData = [
  {
    id: "1",
    label: "Problems",
    description:
      "Hiring the wrong regulatory leader can add 12–24 months to your FDA timeline and cost millions.",
  },
  {
    id: "2",
    label: "Problems",
    description:
      "Clinical success means nothing without commercial execution. The wrong go-to-market decisions are irreversible.",
  },
  {
    id: "3",
    label: "Problems",
    description:
      " The team that got you to $50M lacks the skills for $200M - but how do you upgrade without destroying culture?",
  },
  {
    id: "4",
    label: "Problems",
    description:
      " The team that got you to $50M lacks the skills for $200M - but how do you upgrade without destroying culture?",
  },
  // Add more: { id, label, title, description }
];

const DefaultIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20" cy="15" r="13.25" stroke="#FE5800" strokeWidth="1.5" />
    <path
      d="M13 34H27"
      stroke="#FE5800"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M15 39H25"
      stroke="#FE5800"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

function ProblemSliderCard({
  id,
  label,
  icon = null,
  title,
  description,
  theme = "dark",
  className = "",
}) {
  // If id is provided, lookup card data from static data
  let cardData = {};
  if (id) {
    cardData = problemCardsStaticData.find((item) => item.id === id) || {};
  }

  const finalLabel = label ?? cardData.label ?? "The Problems We Solve";
  const finalTitle =
    title ??
    cardData.title ??
    "Your first regulatory hire will determine your FDA timeline.";
  const finalDescription =
    description ??
    cardData.description ??
    "We place executives who have navigated the exact pathway your product requires.";

  const IconNode = icon ?? <DefaultIcon />;

  return (
    <div
      className={`gs__problem-card gs__problem-slider-card ${className}`.trim()}
      data-theme={theme === "dark" ? "section-dark" : "section-light"}
    >
      <div className="gs__problem-card-header">
        <div>
          <h3 className="gs__h3-light-title">
            {title || "Pre-Regulatory Companies"}
          </h3>
          <span className="gs__problem-card-label">
            <span className="gs__btn-inner">
              <span className="gs__btn-text">{finalLabel}</span>
              <span className="gs__btn-text">{finalLabel}</span>
            </span>
          </span>
        </div>
        <div>
          <span className="gs__problem-card-icon">{IconNode}</span>
        </div>
      </div>
      <div className="gs__problem-card-body">
        <p className="gs__problem-card-desc">
          <span className="gs__btn-inner">
            <span className="gs__btn-text">{finalDescription}</span>
            <span className="gs__btn-text">{finalDescription}</span>
          </span>
        </p>
      </div>
    </div>
  );
}

export default ProblemSliderCard;
