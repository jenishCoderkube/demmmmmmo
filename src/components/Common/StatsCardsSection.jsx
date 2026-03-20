"use client";
import React from "react";
import StatsCard from "./StatsCard";
import "@/app/globals.css";


const defaultStats = [
  {
    value: "90%",
    description: "candidates accept job offers",
  },
  {
    value: "96%",
    description: "placed candidates remain for 2+ years",
  },
  {
    value: "200 000+",
    description: "MedTech professionals in our community",
  },
];

const StatsCardsSection = ({ stats = defaultStats }) => {
  return (
    <div className="gs__stats-cards-section">
     
      <div className="gs__stats-cards-grid">
        {stats.map((item, index) => (
          <StatsCard
            key={index}
            value={item.value}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsCardsSection;










