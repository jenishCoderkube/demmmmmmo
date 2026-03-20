"use client";
import React from "react";
import { usePathname } from "next/navigation";

function FocusFaq({ theme = "dark" }) {
  const pathname = usePathname();
  const isDarkFooter = theme === "dark";
  return (
    <div
      className="gs__also-visit-section"
      data-theme={isDarkFooter ? "section-dark" : "section-light"}
    >
      <div className="gs__container">
        <div className="gs__focus-faq-wp">
          <div className="gs__also-visit-container">
            <h2 className="gs__h2-title">Focus Areas</h2>
          </div>

          <div className="gs__also-visit-content">
            <div className="gs__faq-text">
              Our comprehensive reports and guides provide deep insights into
              MedTech leadership, talent acquisition, investment trends, and
              market dynamics shaping the industry landscape.
            </div>
            <div className="gs__also-visit-card-wp">
              <div className="gs__also-visit-card">
                <div className="gs__focus-faq">
                  <div className="gs__also-visit-heading">Market Insights</div>
                  <div className="gs__also-visit-actions">
                    <button className="gs__btn">
                      <span className="gs__btn-inner">
                        <span className="gs__btn-text">Our Approach</span>
                        <span className="gs__btn-text">Case Studies</span>
                      </span>
                    </button>
                    <a href="#" className="gs__also-visit-link">
                      Learn more{" "}
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5133 13.4169C14.5165 13.8089 14.192 14.1244 13.8002 14.1101C13.429 14.0966 13.1355 13.7908 13.1372 13.4193L13.1891 2.33439L1.22034 14.3031C0.941389 14.5821 0.489128 14.5821 0.210181 14.3031C-0.068765 14.0242 -0.0687647 13.5719 0.210182 13.293L12.1789 1.32423L1.094 1.37612C0.722493 1.37786 0.416695 1.08437 0.40318 0.713101C0.38892 0.321335 0.70438 -0.00315491 1.09639 4.61916e-05L14.2992 0.107837L14.4055 0.214169L14.5133 13.4169Z"
                          fill="#FEFDFB"
                        />
                      </svg>
                    </a>
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
                        fill="#FEFDFB"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="gs__also-visit-desc">
                C-suite and senior leadership appointments for MedTech companies
                driving innovation forward.
              </div>
            </div>
            <div className="gs__also-visit-card-wp">
              <div className="gs__also-visit-card">
                <div className="gs__focus-faq">
                  <div className="gs__also-visit-heading">Market Insights</div>
                  <div className="gs__also-visit-actions">
                    <button className="gs__btn">
                      <span className="gs__btn-inner">
                        <span className="gs__btn-text">Our Approach</span>
                        <span className="gs__btn-text">Case Studies</span>
                      </span>
                    </button>
                    <a href="#" className="gs__also-visit-link">
                      Learn more{" "}
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5133 13.4169C14.5165 13.8089 14.192 14.1244 13.8002 14.1101C13.429 14.0966 13.1355 13.7908 13.1372 13.4193L13.1891 2.33439L1.22034 14.3031C0.941389 14.5821 0.489128 14.5821 0.210181 14.3031C-0.068765 14.0242 -0.0687647 13.5719 0.210182 13.293L12.1789 1.32423L1.094 1.37612C0.722493 1.37786 0.416695 1.08437 0.40318 0.713101C0.38892 0.321335 0.70438 -0.00315491 1.09639 4.61916e-05L14.2992 0.107837L14.4055 0.214169L14.5133 13.4169Z"
                          fill="#FEFDFB"
                        />
                      </svg>
                    </a>
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
                        fill="#FEFDFB"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="gs__also-visit-desc">
                C-suite and senior leadership appointments for MedTech companies
                driving innovation forward.
              </div>
            </div>
            <div className="gs__also-visit-card-wp">
              <div className="gs__also-visit-card">
                <div className="gs__focus-faq">
                  <div className="gs__also-visit-heading">Market Insights</div>
                  <div className="gs__also-visit-actions">
                    <button className="gs__btn">
                      <span className="gs__btn-inner">
                        <span className="gs__btn-text">Our Approach</span>
                        <span className="gs__btn-text">Case Studies</span>
                      </span>
                    </button>
                    <a href="#" className="gs__also-visit-link">
                      Learn more{" "}
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5133 13.4169C14.5165 13.8089 14.192 14.1244 13.8002 14.1101C13.429 14.0966 13.1355 13.7908 13.1372 13.4193L13.1891 2.33439L1.22034 14.3031C0.941389 14.5821 0.489128 14.5821 0.210181 14.3031C-0.068765 14.0242 -0.0687647 13.5719 0.210182 13.293L12.1789 1.32423L1.094 1.37612C0.722493 1.37786 0.416695 1.08437 0.40318 0.713101C0.38892 0.321335 0.70438 -0.00315491 1.09639 4.61916e-05L14.2992 0.107837L14.4055 0.214169L14.5133 13.4169Z"
                          fill="#FEFDFB"
                        />
                      </svg>
                    </a>
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
                        fill="#FEFDFB"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="gs__also-visit-desc">
                C-suite and senior leadership appointments for MedTech companies
                driving innovation forward.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FocusFaq;










