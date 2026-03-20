"use client";
import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import "@/app/globals.css";
import consultantImage1 from "public/images/av-01.jpg";
import consultantImage2 from "public/images/av-02.jpg";
import consultantImage3 from "public/images/av-03.jpg";
import consultantImage4 from "public/images/av-04.jpg";

const ArrowIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    className="gs__vacancy-card-arrow"
    aria-hidden
  >
    <path
      d="M29.5666 27.1368C29.5593 27.9152 28.9184 28.5382 28.1401 28.5235C27.3652 28.5089 26.7495 27.8674 26.7668 27.0925L27.2672 4.57234L2.43872 29.4008C1.88083 29.9587 0.976304 29.9587 0.41841 29.4008C-0.139482 28.8429 -0.139481 27.9384 0.418411 27.3805L25.2469 2.55204L2.72671 3.05249C1.9518 3.06971 1.31035 2.45409 1.29573 1.67912C1.28104 0.900803 1.90405 0.25995 2.68247 0.252649L29.6065 7.70969e-05L29.8192 0.212741L29.5666 27.1368Z"
      fill="currentColor"
    />
  </svg>
);

const vacancyCardStaticData = [
  {
    title: "Chief Commercial Officer",
    location: "Boston, MA",
    tags: ["Urology", "Therapeutic areas", "C-Suite"],
    consultantName: "Tessa Fletcher",
    consultantRole: "Executive Search Consultant",
    consultantImage: consultantImage1,
    href: "#",
  },
  {
    title: "Regional Sales Director – APAC",
    location: "China",
    tags: ["Full-time", "Regulatory", "Remote"],
    consultantName: "Kristien Esser",
    consultantRole: "Executive Search Consultant",
    consultantImage: consultantImage2,
    href: "#",
  },
  {
    title: "B2B Key Account Manager UK",
    location: "Zurich, Switzerland",
    tags: ["Contract", "Clinical", "Hybrid"],
    consultantName: "Anna Keller",
    consultantRole: "Consultant",
    consultantImage: consultantImage3,
    href: "#",
  },
  {
    title: "Sales Representative - Upper Limb – Midlands",
    location: "Midlands, UK",
    tags: ["Contract", "Clinical", "Hybrid"],
    consultantName: "Anna Keller",
    consultantRole: "Consultant",
    consultantImage: consultantImage4,
    href: "#",
  },
  {
    title: "Chief Commercial Officer",
    location: "Boston, MA",
    tags: ["Urology", "Therapeutic areas", "C-Suite"],
    consultantName: "Tessa Fletcher",
    consultantRole: "Executive Search Consultant",
    consultantImage: consultantImage1,
    href: "#",
  },
  {
    title: "Regional Sales Director – APAC",
    location: "China",
    tags: ["Full-time", "Regulatory", "Remote"],
    consultantName: "Kristien Esser",
    consultantRole: "Executive Search Consultant",
    consultantImage: consultantImage2,
    href: "#",
  },
];

const VacancyCard = ({
  title,
  location,
  tags = [],
  consultantName,
  consultantRole = "Executive Search Consultant",
  consultantImage,
  href,
  onClick,
}) => {
  const content = (
    <>
      <div className="gs__vacancy-card-top">
        <div className="gs__vacancy-card-head">
          <h3 className="gs__vacancy-card-title">{title}</h3>
          <span className="gs__vacancy-card-arrow-wrap">
            <ArrowIcon />
          </span>
        </div>
        <p className="gs__vacancy-card-location">{location}</p>
        {!!tags.length && (
          <div className="gs__vacancy-card-tags">
            {tags.map((tag) => (
              <span
                key={tag}
                className="gs__vacancy-card-tag"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="gs__vacancy-card-consultant">
        <div className="gs__vacancy-card-consultant-info">
          <span className="gs__vacancy-card-consultant-role">
            {consultantRole}
          </span>
          <span className="gs__vacancy-card-consultant-name">
            {consultantName}
          </span>
        </div>
        {consultantImage && (
          <div className="gs__vacancy-card-consultant-avatar">
            <Image
              src={consultantImage}
              alt={consultantName}
              // width={48}
              // height={48}
            />
          </div>
        )}
      </div>
    </>
  );

  const className = "gs__vacancy-card";
  return href ? (
    <a
      href={href}
      className={className}
    >
      {content}
    </a>
  ) : (
    <article
      className={className}
      onClick={onClick}
      onKeyDown={(e) => onClick && e.key === "Enter" && onClick(e)}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {content}
    </article>
  );
};

VacancyCard.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  consultantName: PropTypes.string.isRequired,
  consultantRole: PropTypes.string,
  consultantImage: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

const VacancyCardGrid = ({ vacancies = vacancyCardStaticData, ...rest }) => (
  <div className="gs__vacancy-cards-grid">
    {vacancies.map((vac, i) => (
      <VacancyCard
        key={vac.title + vac.location + i}
        {...vac}
        {...rest}
      />
    ))}
  </div>
);

VacancyCardGrid.propTypes = {
  vacancies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
      consultantName: PropTypes.string.isRequired,
      consultantRole: PropTypes.string,
      consultantImage: PropTypes.string,
      href: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ),
};

export { VacancyCard, vacancyCardStaticData, VacancyCardGrid };
export default VacancyCard;
