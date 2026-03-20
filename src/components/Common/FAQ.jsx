"use client";
import React, { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { darkHeroBannerRoutes } from "@/config/footerTheme";

const faqData = [
  {
    question:
      "What makes executive search different from standard recruitment, and why does it matter for MedTech leadership hires?",
    answer:
      "Executive search is an end-to-end process that involves mapping the market to identify leaders who might not be actively looking but are the strongest fit for the role. By looking beyond job postings and inbound applications, Guided Solutions builds shortlists from the narrow pool of senior candidates in MedTech.",
  },
  {
    question:
      "How does Guided Solutions approach executive search for C-suite and CEO roles in MedTech?",
    answer:
      "C-suite search starts with understanding your strategic context - growth stage, regulatory pathway, competitor landscape - before we map candidates. Drawing on 25 years of MedTech intelligence and 100,000+ professionals, we assess leadership capability and relevant experience, not just credentials.",
  },
  {
    question:
      "What does the executive search process look like at Guided Solutions, from briefing through to placement?",
    answer:
      "Our executive search process consists of 4 phases: briefing, market mapping, assessment, and placement. We identify candidates and approach them through direct confidential outreach, assess capability and behavioural fit, then support offer negotiation and onboarding. You receive progress updates throughout the search.",
  },
  {
    question:
      "Does Guided Solutions provide support beyond the placement itself?",
    answer:
      "Yes. Support continues after placement and covers onboarding, team dynamics, succession planning and more. With 10,000+ placements across 650+ MedTech clients, every engagement sharpens our medical devices market intelligence, which feeds directly into your search.",
  },
  {
    question:
      "What should a MedTech company look for when choosing an executive search firm for a critical leadership appointment?",
    answer:
      "Look for sector depth, methodology, track record and the quality of the consultant relationship. Ask about relevant placements, retention rates and size of industry network. With 10,000+ placements and a global candidate network cultivated over 25 years, Guided Solutions has achieved a 93% three-year retention rate.",
  },
];

function FAQItem({ data = [] }) {
  const [openIdx, setOpenIdx] = useState(null);

  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const displayData = data.length > 0 ? data : faqData;

  return (
    <>
      {displayData.map((faq, idx) => (
        <div
          className={`gs__also-visit-card${openIdx === idx ? " gs_open" : ""}`}
          onClick={() => handleToggle(idx)}
          style={{ cursor: "pointer" }}
          aria-expanded={openIdx === idx}
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleToggle(idx);
            }
          }}
          key={idx}
        >
          <div>
            <div
              className="gs__also-visit-heading"
              dangerouslySetInnerHTML={{ __html: faq.question }}
            />
            <div
              className="gs__also-visit-desc"
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            />
          </div>

          <div className="gs__also-visit-actions">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3084_20401)">
                <path
                  d="M20 9.76406L18.985 10.7078L10.7143 2.35934L10.7143 20L9.28571 20L9.28571 2.35934L1.01504 10.7078L8.94854e-07 9.76406L9.92481 -8.80801e-07L10.0752 -8.67655e-07L20 9.76406Z"
                  fill="#FEFDFB"
                />
              </g>
              <defs>
                <clipPath id="clip0_3084_20401">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="gs__visit-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3084_20599)">
                <path
                  d="M0.512832 10.7405C0.233374 10.4655 0.23976 10.013 0.526864 9.74608C0.798942 9.49311 1.2227 9.50181 1.48417 9.76574L9.28571 17.6407V0.714288C9.28571 0.319798 9.60551 1.3497e-08 10 3.01464e-08C10.3945 4.67958e-08 10.7143 0.319797 10.7143 0.714287V17.6407L18.5158 9.76574C18.7773 9.50181 19.2011 9.49311 19.4731 9.74608C19.7602 10.013 19.7666 10.4655 19.4872 10.7405L10.0752 20H9.92481L0.512832 10.7405Z"
                  fill="#FEFDFB"
                />
              </g>
              <defs>
                <clipPath id="clip0_3084_20599">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      ))}
    </>
  );
}

function FAQ({
  theme = "dark",
  FAQinfoShow = false,
  data = [],
  title,
  subtitle,
}) {
  const pathname = usePathname();
  const isDarkFooter = theme === "dark";
  return (
    <div
      className="gs__also-visit-section gs__faq-wp"
      data-theme={isDarkFooter ? "section-dark" : "section-light"}
    >
      <div className="gs__container">
        <div className="gs__also-visit-container">
          {title && (
            <h2
              className="gs__h2-title"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
          {FAQinfoShow && subtitle && <p>{subtitle}</p>}
        </div>

        <div className="gs__also-visit-content">
          <FAQItem data={data} />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
