"use client";
import React from "react";

function TitleWithButton({ theme = "dark" }) {
  const isDarkFooter = theme === "dark";
  return (
    <>
      <div
        className="gs__title-with-button-wp"
        data-theme={isDarkFooter ? "section-dark" : "section-light"}
      >
        <div className="gs__container">
          <div className="gs__title-with-button">
            <div className="gs__title-badge">
              <h3 className="gs__h3-light-title">
                Meticulous Excellence:{" "}
                <span className="gs__block">
                  FDA Approval for Cancer Breakthrough
                </span>
              </h3>
              <span className="gs__btn">
                Clinical Research Associate Success
              </span>
            </div>
            <div className="explore-btn">
              <button className="gs__btn">
                <span className="gs__btn-inner">
                  <span className="gs__btn-text">Read full case</span>
                  <span className="gs__btn-text">Read full case</span>
                </span>
              </button>              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TitleWithButton;
