"use client";
import React from "react";
import Image from "next/image";
const BBOT = "/images/bbot.png";

function TeamBluidCard({ theme = "dark", title, roles = [], description }) {
  const isDarkFooter = theme === "dark";

  // Define line patterns for roles (up to 4 supported based on original design)
  const linePatterns = [
    <div className="gs__line">
      <div>
        <span></span>
      </div>
    </div>,
    <div className="gs__line">
      <div>
        <span></span>
        <span></span>
      </div>
    </div>,
    <div className="gs__line">
      <div>
        <span></span>
        <span></span>
      </div>
      <div>
        <span></span>
      </div>
    </div>,
    <div className="gs__line">
      <div>
        <span></span>
        <span></span>
      </div>
      <div>
        <span></span>
        <span></span>
      </div>
    </div>,
  ];

  return (
    <>
      <div
        className="gs__theraphy-card-sec gs__teambluid-card"
        data-theme={isDarkFooter ? "section-dark" : "section-light"}
      >
        <div className="gs__container">
          <h3 className="gs__h3-light-title">
            {title || "R&D Innovation Teams"}
          </h3>
          <div className="gs__theraphy-card-wp">
            {roles.map((role, idx) => (
              <div className="gs__theraphy-card" key={idx}>
                <h4 className="gs__h4-title">{role}</h4>
                {linePatterns[idx % linePatterns.length]}
              </div>
            ))}
            {description && (
              <div className="gs__theraphy-card">
                <p>{description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamBluidCard;
