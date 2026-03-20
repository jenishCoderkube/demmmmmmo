"use client";
import React from "react";
import PropTypes from "prop-types";
import "@/app/globals.css";

const StatsCard = ({
  value,
  highlight,
  highlightColor = "#FF7900",
  description,
  variant = "modern",
}) => {
  const useModern =
    variant === "modern" || (variant !== "default" && !!highlight);

  return (
    <div
      className={
        "gs__stats-card" + (useModern ? " gs__stats-card--modern" : "")
      }
    >
      <span className="gs__stats-card-hover">
        <img
          src="/images/logo_shape.png"
          alt="logo_shape"
        />
      </span>
      <div className="gs__stats-card-content">
        <div>
          <span className="gs__stats-card-value">{value}</span>
          {highlight && (
            <span className="gs__stats-card-highlight">{highlight}</span>
          )}
        </div>
      </div>
      {description && (
        <div className="gs__stats-card-description">{description}</div>
      )}
    </div>
  );
};

StatsCard.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  highlight: PropTypes.string,
  highlightColor: PropTypes.string,
  description: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["default", "modern"]),
};

export default StatsCard;
