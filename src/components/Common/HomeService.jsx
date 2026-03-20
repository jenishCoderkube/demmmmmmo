"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function HomeService({ theme = "dark", items = [], title, subtitle }) {
  const isDarkFooter = theme === "dark";
  const defaultItems = [
    {
      title: "Executive Search",
      desc: "C-suite and senior leadership appointments for MedTech companies driving innovation forward.",
      link: "/insights/market-insights",
      btn1: "Our Approach",
      btn2: "Case Studies",
    },
    {
      title: "Board Advisory",
      desc: "Building boards with the vision, expertise, and networks to accelerate your mission.",
      link: "/insights/whitepaper",
      btn1: "Our Approach",
      btn2: "Case Studies",
    },
    {
      title: "Strategic Recruitment",
      desc: "Impact doesn't stop at the C-suite - we find talent from Associate to Director who drives real change.",
      link: "/insights/podcasts",
      btn1: "Our Approach",
      btn2: "Case Studies",
    },
    {
      title: "Organizational Design Consulting",
      desc: "C-suite and senior leadership appointments for MedTech companies driving innovation forward.",
      link: "/insights/market-insights",
      btn1: "Our Approach",
      btn2: "Case Studies",
    },
    {
      title: "Team Build",
      desc: "Building boards with the vision, expertise, and networks to accelerate your mission.",
      link: "/insights/whitepaper",
      btn1: "Our Approach",
      btn2: "Case Studies",
    },
    {
      title: "Individual Assignments",
      desc: "Impact doesn't stop at the C-suite - we find talent from Associate to Director who drives real change.",
      link: "/insights/podcasts",
      btn1: "Our Approach",
      btn2: "Case Studies",
    },
  ];

  const displayItems = items.length > 0 ? items : defaultItems;
  return (
    <div
      className="gs__also-visit-section gs__home-service"
      data-theme={isDarkFooter ? "section-dark" : "section-light"}
    >
      <div className="gs__container">
        <div className="gs__also-visit-container">
          {title ? (
            <div
              className="gs__h2-title"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          ) : (
            <h2 className="gs__h2-title">
              How We <span className="gs__terms-orange">Support You</span>
            </h2>
          )}
          {subtitle ? (
            <p dangerouslySetInnerHTML={{ __html: subtitle }} />
          ) : (
            <p>
              Specialized services designed for MedTech companies at every stage
              of growth
            </p>
          )}
        </div>

        <div className="gs__also-visit-content">
          {displayItems.map((item, index) => (
            <div className="gs__also-visit-card" key={index}>
              <div>
                <Link href={item.link}>
                  <div className="gs__also-visit-heading">{item.title}</div>
                </Link>
                <div className="gs__also-visit-desc">{item.desc}</div>
              </div>

              <div className="gs__also-visit-actions">
                <button 
                  className="gs__btn" 
                  aria-label={`View ${item.btn1 || "Our Approach"} and ${item.btn2 || "Case Studies"} for ${item.title}`}
                >
                  <span className="gs__btn-inner">
                    <span className="gs__btn-text">
                      {item.btn1 || "Our Approach"}
                    </span>
                    <span className="gs__btn-text">
                      {item.btn2 || "Case Studies"}
                    </span>
                  </span>
                </button>
                <Link
                  href={item.link}
                  className="gs__also-visit-link"
                  aria-label={`Learn more about ${item.title}`}
                >
                  Learn more{" "}
                  <span className="gs__sr-only">about {item.title}</span>
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5133 13.4169C14.5165 13.8089 14.192 14.1244 13.8002 14.1101C13.429 14.0966 13.1355 13.7908 13.1372 13.4193L13.1891 2.33439L1.22034 14.3031C0.941389 14.5821 0.489128 14.5821 0.210181 14.3031C-0.068765 14.0242 -0.0687647 13.5719 0.210182 13.293L12.1789 1.32423L1.094 1.37612C0.722493 1.37786 0.416695 1.08437 0.40318 0.713101C0.38892 0.321335 0.70438 -0.00315491 1.09639 4.61916e-05L14.2992 0.107837L14.4055 0.214169L14.5133 13.4169Z"
                      fill={isDarkFooter ? "#FEFDFB" : "#111111"}
                    />
                  </svg>
                </Link>
              </div>
              <div className="gs__visit-icon">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5133 13.4169C14.5165 13.8089 14.192 14.1244 13.8002 14.1101C13.429 14.0966 13.1355 13.7908 13.1372 13.4193L13.1891 2.33439L1.22034 14.3031C0.941389 14.5821 0.489128 14.5821 0.210181 14.3031C-0.068765 14.0242 -0.0687647 13.5719 0.210182 13.293L12.1789 1.32423L1.094 1.37612C0.722493 1.37786 0.416695 1.08437 0.40318 0.713101C0.38892 0.321335 0.70438 -0.00315491 1.09639 4.61916e-05L14.2992 0.107837L14.4055 0.214169L14.5133 13.4169Z"
                    fill={isDarkFooter ? "#FEFDFB" : "#111111"}
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeService;
