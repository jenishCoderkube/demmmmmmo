"use client";
import React from "react";
import Image from "next/image";
const BBOT = "/images/bbot.png";

function TheraphyCard({ theme = "dark" }) {
  const isDarkFooter = theme === "dark";
  return (
    <>
      <div
        className="gs__theraphy-card-sec"
        data-theme={isDarkFooter ? "section-dark" : "section-light"}
      >
        <div className="gs__container">
          <div className="gs__theraphy-card-wp">
            <div className="gs__theraphy-card">
              <h4 className="gs__h4-title">
                Maintained 100% data integrity across 15 clinical sites
              </h4>
              <div className="gs__line">
                <span></span>
              </div>
            </div>
            <div className="gs__theraphy-card">
              <h4 className="gs__h4-title">
                Zero major protocol deviations in 2-year study
              </h4>
              <div className="gs__line">
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="gs__theraphy-card">
              <h4 className="gs__h4-title">
                Zero major protocol deviations in 2-year study
              </h4>
              <div className="gs__line">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="gs__theraphy-card">
              <div className="gs__theraphy-card-image">
                <Image
                  src={BBOT}
                  alt="BBOT"
                  width={200}
                  height={100}
                />
              </div>
              <p>
                A biotechnology company developing breakthrough cancer therapy
                needed a Clinical Research Associate with exceptional attention
                to detail for their pivotal Phase III trial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TheraphyCard;
