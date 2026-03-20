"use client";

import React from "react";
import Image from "next/image";

/**
 * Card for About page – Core Values cascade slider.
 */
export function HomeCascadeSliderCoreValuesCard({ item }) {
  return (
    <div className="gs__about-values-card gs__home_slider-card">
      <div className="gs__home-card-title-icon">
        <h3 className="gs__about-values-card-title">{item.title}</h3>
        <div className="gs__about-values-card-icon">
          {item.icon === "circles" && (
            <>
              <svg
                width="153"
                height="167"
                viewBox="0 0 153 167"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="43.1207"
                  cy="43.1207"
                  r="42.3707"
                  fill="#111111"
                  stroke="#FE5800"
                  strokeWidth="1.5"
                />
                <circle
                  cx="76.4254"
                  cy="85.8907"
                  r="42.3707"
                  fill="#111111"
                  stroke="#FE5800"
                  strokeWidth="1.5"
                />
                <circle
                  cx="109.379"
                  cy="123.052"
                  r="42.3707"
                  fill="#111111"
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
    <article
      className={`gs__journey-card ${hasImage ? "gs__journey-card--has-image" : ""}`}
    >
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
