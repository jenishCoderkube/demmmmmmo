"use client";

import React from "react";
import CascadeSlider from "@/components/Common/CascadeSlider";
import { CascadeSliderHomeCard } from "@/components/Common/CascadeSliderCards";

const HOME_CASCADE_ITEMS = [
  {
    id: "1",
    title: "Executive Search",
    subtitle: "MedTech Focus",
    description: "We connect exceptional talent with transformative opportunities in medical technology.",
    image: "/images/people01.jpg",
  },
  {
    id: "2",
    title: "Leadership Placement",
    subtitle: "Character & Competence",
    description: "Every leader we place is evaluated for integrity, cultural fit, and lasting impact.",
    image: "/images/people01.jpg",
  },
  {
    id: "3",
    title: "Global Reach",
    subtitle: "Six Countries",
    description: "Offices across six countries, serving 600+ companies and 10,000+ professionals placed.",
    image: "/images/people01.jpg",
  },
];

export default function HomeCascadeSection() {
  return (
    <section className="gs__home-cascade" data-theme="section-light">
      <div className="gs__container">
        <div className="gs__home-cascade-header">
          <h2 className="gs__home-cascade-title">Featured</h2>
          <p className="gs__home-cascade-subtitle">
            How we deliver talent for disruptive MedTech companies.
          </p>
        </div>
        <CascadeSlider
          id="home-cascade-slider"
          items={HOME_CASCADE_ITEMS}
          renderCard={(item) => <CascadeSliderHomeCard item={item} />}
          containerClassName="gs__home-cascade-slider-wp"
          autoplayDelay={4000}
          showDots
          showArrows
        />
      </div>
    </section>
  );
}
