"use client";
import React from "react";

// Static data for problem/feature cards
export const problemCardsStaticData = [
  {
    id: "1",
    label: "The Problems We Solve",
    title: "Your first regulatory hire will determine your FDA timeline.",
    description:
      "We place executives who have navigated the exact pathway your product requires.",
  },
  {
    id: "2",
    label: "The Problems We Solve",
    title: "Investors assess leadership before they write the check.",
    description:
      "We place C-suite executives who signal operational credibility and close funding rounds.",
  },
  {
    id: "3",
    label: "The Problems We Solve",
    title:
      "The leadership team that built your domestic business is not the one that will scale it internationally.",
    description:
      "Our executive search spans 40+ countries, matching functional expertise with geographic and regulatory experience.",
  },
  {
    id: "4",
    label: "The Problems We Solve",
    title:
      "Founder-to-CEO transition is the conversation nobody has until it is too late.",
    description:
      "As a specialist MedTech executive search firm, we manage these transitions with the discretion and speed they require.",
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
    <circle cx="20" cy="15" r="13.25" stroke="#FEFDFB" strokeWidth="1.5" />
    <path
      d="M13 34H27"
      stroke="#FEFDFB"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M15 39H25"
      stroke="#FEFDFB"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

function ProblemCard({
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
      className={`gs__problem-card ${className}`.trim()}
      data-theme={theme === "dark" ? "section-dark" : "section-light"}
    >
      <div className="gs__problem-card-header">
        <span className="gs__problem-card-label">{finalLabel}</span>
        <span className="gs__problem-card-icon">{IconNode}</span>
      </div>
      <div className="gs__problem-card-body">
        <h3 className="gs__problem-card-title">{finalTitle}</h3>
        <p className="gs__problem-card-desc">{finalDescription}</p>
      </div>
    </div>
  );
}

export default ProblemCard;
