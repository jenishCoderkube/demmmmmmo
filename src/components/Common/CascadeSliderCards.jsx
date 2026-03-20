"use client";

import React from "react";
import Image from "next/image";

/**
 * Card for About page – Core Values cascade slider.
 */
export function CascadeSliderCoreValuesCard({ item }) {
  return (
    <div className="gs__about-values-card">
      <h3 className="gs__about-values-card-title">{item.title}</h3>
      <div className="gs__about-values-card-icon">
        {item.icon === "circles" && (
          <>
            <svg
              width="258"
              height="105"
              viewBox="0 0 258 105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.75 104C23.5201 102.585 16.879 99.0924 11.6665 93.9639C6.45403 88.8353 2.90429 82.3012 1.46617 75.1876C0.0280542 68.0741 0.766149 60.7008 3.58712 54"
                stroke="#FEFDFB"
                strokeWidth="1.5"
              />
              <path
                d="M96.2244 17.8086C88.0182 20.8565 80.8894 26.2387 75.739 33.2725C70.5888 40.3062 67.6489 48.6761 67.2888 57.3223C66.9289 65.9682 69.1646 74.5044 73.7136 81.8506C78.2627 89.1965 84.9213 95.0245 92.8484 98.5967C100.776 102.169 109.617 103.325 118.252 101.916L118.494 103.396C109.57 104.852 100.431 103.658 92.2332 99.9639C84.0351 96.2697 77.1457 90.2415 72.4383 82.6396C67.7308 75.0377 65.4163 66.2044 65.7888 57.2588C66.1615 48.3137 69.2038 39.6583 74.5281 32.3867C79.8527 25.1149 87.2216 19.5521 95.7019 16.4023L96.2244 17.8086Z"
                fill="#FEFDFB"
              />
              <circle
                cx="205.492"
                cy="52"
                r="51.25"
                stroke="#FE5800"
                strokeWidth="1.5"
              />
            </svg>
          </>
        )}
        {item.icon === "circle" && (
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <circle
              cx="40"
              cy="40"
              r="32"
              stroke="var(--primary-white)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        )}
        {item.icon === "lines" && (
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <line
              x1="28"
              y1="20"
              x2="28"
              y2="60"
              stroke="var(--primary-white)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="40"
              y1="20"
              x2="40"
              y2="60"
              stroke="var(--primary-white)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="52"
              y1="20"
              x2="52"
              y2="60"
              stroke="var(--primary-white)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>
      <p className="gs__about-values-card-desc">{item.description}</p>
    </div>
  );
}

/**
 * Card for Home page – cascade slider (e.g. featured people or highlights).
 * Pass items with: id, title, subtitle, description, image (optional).
 */
export function CascadeSliderHomeCard({ item }) {
  return (
    <div className="gs__cascade-home-card">
      {item.image && (
        <div className="gs__cascade-home-card-photo">
          <Image
            src={item.image?.trim() || null}
            alt={item.title ?? ""}
            width={200}
            height={200}
            className="gs__cascade-home-card-img"
          />
        </div>
      )}
      <div className="gs__cascade-home-card-body">
        {item.title && (
          <h3 className="gs__cascade-home-card-title">{item.title}</h3>
        )}
        {item.subtitle && (
          <p className="gs__cascade-home-card-subtitle">{item.subtitle}</p>
        )}
        {item.description && (
          <p className="gs__cascade-home-card-desc">{item.description}</p>
        )}
      </div>
    </div>
  );
}

/**
 * Card for About page – Our Journey (milestones) cascade slider.
 * Pass items with: id, year, title, description, image? (optional).
 */
export function CascadeSliderJourneyCard({ item }) {
  if (!item) return null;
  const hasImage = Boolean(item.image);
  return (
    <article className={`gs__journey-card ${hasImage ? "gs__journey-card--has-image" : ""}`}>
      <div className="gs__journey-card-face gs__journey-card-front">
        <div className="gs__journey-card-head">
          <h3 className="gs__journey-card-title">{item.title}</h3>
          <p className="gs__journey-card-year">{item.year}</p>
        </div>
        <p className="gs__journey-card-desc">{item.description}</p>
      </div>

      {hasImage && (
        <div
          className="gs__journey-card-face gs__journey-card-back"
          style={{
            // "--journey-image": `url(${item.image})`,
            backgroundImage: `url(${item.image})`,
            backgroundBlendMode: "multiply, normal",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#FE5800",
          }}
          aria-hidden="true"
        >
          <div className="gs__journey-card-head">
            <h3 className="gs__journey-card-title">{item.title}</h3>
            <p className="gs__journey-card-year">{item.year}</p>
          </div>
          <p className="gs__journey-card-desc">{item.description}</p>
        </div>
      )}
    </article>
  );
}

// Backward-compatible alias (if referenced elsewhere)
export const JourneyCard = CascadeSliderJourneyCard;
