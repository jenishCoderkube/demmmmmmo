"use client";

import React, { useState, useEffect } from "react";

/**
 * Reusable cascade (3D) slider. Only structure and behaviour; card content via renderCard.
 * Used on About (Core Values) and Home with different card designs.
 */
export default function CascadeSlider({
  items = [],
  renderCard,
  id = "cascade-slider",
  containerClassName = "",
  autoplayDelay = 0,
  showDots = true,
  showArrows = true,
}) {
  const itemCount = items.length;
  const [cascadeIndex, setCascadeIndex] = useState(0);

  const changeCascadeIndex = (nowIndex) => {
    setCascadeIndex(((nowIndex % itemCount) + itemCount) % itemCount);
  };

  const goNext = () => {
    if (cascadeIndex === itemCount - 1) changeCascadeIndex(0);
    else changeCascadeIndex(cascadeIndex + 1);
  };

  const goPrev = () => {
    if (cascadeIndex === 0) changeCascadeIndex(itemCount - 1);
    else changeCascadeIndex(cascadeIndex - 1);
  };

  useEffect(() => {
    if (!autoplayDelay || itemCount <= 0) return;
    const t = setInterval(() => {
      setCascadeIndex((i) => (i === itemCount - 1 ? 0 : i + 1));
    }, autoplayDelay);
    return () => clearInterval(t);
  }, [autoplayDelay, itemCount]);

  if (!items.length || typeof renderCard !== "function") return null;

  return (
    <div
      id={id}
      className={`cascade-slider_container ${containerClassName}`.trim()}
    >
      <div className="cascade-slider_slides">
        {items.map((item, index) => {
          const isNow = index === cascadeIndex;
          const isPrev = index === (cascadeIndex - 1 + itemCount) % itemCount;
          const isNext = index === (cascadeIndex + 1) % itemCount;
          const slideClass = [
            "cascade-slider_item",
            isNow && "now",
            isPrev && "prev",
            isNext && "next",
          ]
            .filter(Boolean)
            .join(" ");
          return (
            <div
              key={item.id ?? index}
              className={slideClass}
              data-slide-number={index}
            >
              {renderCard(item, index)}
            </div>
          );
        })}
      </div>

      <div className="cascade-slider_controls">
        {showDots && (
          <ol
            className="cascade-slider_nav"
            aria-label="Slider pagination"
          >
            {items.map((_, index) => (
              <li key={index}>
                <button
                  type="button"
                  className={`cascade-slider_dot ${index === cascadeIndex ? "cur" : ""}`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === cascadeIndex ? "true" : undefined}
                  onClick={() => changeCascadeIndex(index)}
                />
              </li>
            ))}
          </ol>
        )}

        {showArrows && (
          <div className="cascade-slider_arrows-wp">
            <span
              className="cascade-slider_arrow cascade-slider_arrow-left"
              data-action="prev"
              role="button"
              tabIndex={0}
              aria-label="Previous"
              onClick={goPrev}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  goPrev();
                }
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3670_1163)">
                  <path
                    d="M9.76407 4.26801e-07L10.7078 1.01504L2.35934 9.28571L20 9.28572L20 10.7143L2.35934 10.7143L10.7078 18.985L9.76406 20L4.33828e-07 10.0752L4.40401e-07 9.92481L9.76407 4.26801e-07Z"
                    fill="#505050"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3670_1163">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(20) rotate(90)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span
              className="cascade-slider_arrow cascade-slider_arrow-right"
              data-action="next"
              role="button"
              tabIndex={0}
              aria-label="Next"
              onClick={goNext}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  goNext();
                }
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3670_1173)">
                  <path
                    d="M10.7405 19.4872C10.4655 19.7666 10.013 19.7602 9.74608 19.4731C9.49311 19.2011 9.50182 18.7773 9.76574 18.5158L17.6407 10.7143L0.714288 10.7143C0.319798 10.7143 4.67855e-07 10.3945 4.67261e-07 10C4.66666e-07 9.60551 0.319797 9.28571 0.714287 9.28571L17.6407 9.28571L9.76574 1.48417C9.50181 1.2227 9.49311 0.798943 9.74608 0.526864C10.013 0.23976 10.4655 0.233374 10.7405 0.512833L20 9.92481L20 10.0752L10.7405 19.4872Z"
                    fill="#505050"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3670_1173">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(8.74228e-07 20) rotate(-90)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
