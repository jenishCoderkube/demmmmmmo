"use client";
import React from "react";

function QuoteCard({ theme = "dark" }) {
  const isDarkFooter = theme === "dark";
  return (
    <>
      <div
        className="gs__testimonial-box-wp"
        data-theme={isDarkFooter ? "section-dark" : "section-light"}
      >
        <div className="gs__container">
          <div className="gs__testimonial-box">
            <div className="gs__testimonial-left">
              <h3 className="gs__h3-light-title">Oncology Therapeutics</h3>
              <p className="gs__body-l-text">Clinical Director</p>
            </div>

            <div className="gs__testimonial-right">
              <h3 className="gs__h3-light-title">
                "Her meticulous work didn't just meet FDA standards—it exceeded
                them. The approval was clean, fast, and now 10,000+ cancer
                patients have access to hope."
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuoteCard;
