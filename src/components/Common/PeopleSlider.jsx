"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import peopleImage from "public/images/people01.jpg";

import "swiper/css";
import "swiper/css/pagination";

const PEOPLE_SLIDES = [
  {
    id: "1",
    name: "Kristien Esser",
    role: "CEO & Founder",
    meta: "29 Years MedTech Experience",
    quote:
      "We have high standards for our candidates, and we aren't afraid to say 'no'.",
    description:
      "With 29 years in MedTech executive search, Kristien specialises in connecting talent and capital with early-stage companies. Founding Guided Solutions at 26, he realised a dream of building a business that would proudly differentiate itself in the way it delivers talent for disruptive MedTechs.",
    image: peopleImage,
  },
  {
    id: "2",
    name: "Kristien Esser",
    role: "CEO & Founder",
    meta: "29 Years MedTech Experience",
    quote:
      "We have high standards for our candidates, and we aren't afraid to say 'no'.",
    description:
      "With 29 years in MedTech executive search, Kristien specialises in connecting talent and capital with early-stage companies. Founding Guided Solutions at 26, he realised a dream of building a business that would proudly differentiate itself in the way it delivers talent for disruptive MedTechs.",
    image: peopleImage,
  },
  {
    id: "3",
    name: "Kristien Esser",
    role: "CEO & Founder",
    meta: "29 Years MedTech Experience",
    quote:
      "We have high standards for our candidates, and we aren't afraid to say 'no'.",
    description:
      "With 29 years in MedTech executive search, Kristien specialises in connecting talent and capital with early-stage companies. Founding Guided Solutions at 26, he realised a dream of building a business that would proudly differentiate itself in the way it delivers talent for disruptive MedTechs.",
    image: peopleImage,
  },
  {
    id: "4",
    name: "Kristien Esser",
    role: "CEO & Founder",
    meta: "29 Years MedTech Experience",
    quote:
      "We have high standards for our candidates, and we aren't afraid to say 'no'.",
    description:
      "With 29 years in MedTech executive search, Kristien specialises in connecting talent and capital with early-stage companies. Founding Guided Solutions at 26, he realised a dream of building a business that would proudly differentiate itself in the way it delivers talent for disruptive MedTechs.",
    image: peopleImage,
  },

  // Add more leaders as needed
];

const ArrowIcon = ({ direction = "left" }) => {
  const isLeft = direction === "left";
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_people_slider)">
        <path
          d={
            isLeft
              ? "M6.48168 0.358983C6.67413 0.163363 6.99089 0.167832 7.17774 0.368805C7.35482 0.55926 7.34873 0.855892 7.16398 1.03892L1.65154 6.5L13.5 6.5C13.7761 6.5 14 6.72386 14 7C14 7.27614 13.7761 7.5 13.5 7.5L1.65154 7.5L7.16398 12.9611C7.34873 13.1441 7.35482 13.4407 7.17774 13.6312C6.99089 13.8322 6.67413 13.8366 6.48168 13.641L0 7.05263L0 6.94737L6.48168 0.358983Z"
              : "M7.51832 13.641C7.32587 13.8366 7.00911 13.8322 6.82226 13.6312C6.64518 13.4407 6.65127 13.1441 6.83602 12.9611L12.3485 7.5L0.5 7.5C0.223858 7.5 0 7.27614 0 7C0 6.72386 0.223858 6.5 0.5 6.5L12.3485 6.5L6.83602 1.03892C6.65127 0.855893 6.64518 0.55926 6.82226 0.368805C7.00911 0.167833 7.32587 0.163363 7.51832 0.358983L14 6.94737L14 7.05263L7.51832 13.641Z"
          }
          fill="#FE5800"
        />
      </g>
      <defs>
        <clipPath id="clip0_people_slider">
          <rect
            width="14"
            height="14"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

function PeopleSlider({
  theme = "light",
  slides = PEOPLE_SLIDES,
  title,
  description,
}) {
  const isDark = theme === "dark";
  const swiperRef = useRef(null);

  const displayTitle = title || (
    <>
      <span className="gs__eyebrow">The People</span>
      <br /> Behind The Organization
    </>
  );

  const displayDescription =
    description ||
    "210+ years of collective MedTech experience - dedicated to your success";

  return (
    <section
      className="gs__people-slider-section"
      data-theme={isDark ? "section-dark" : "section-light"}
    >
      <div className="gs__container">
        <header className="gs__people-header">
          {title ? (
            <h2
              className="gs__h2-title"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          ) : (
            <h2 className="gs__h2-title">{displayTitle}</h2>
          )}
          <p className="gs__people-subtitle">{displayDescription}</p>
        </header>

        <div className="gs__people-slider-wrapper">
          <Swiper
            className="gs__people-swiper"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
              bulletClass: "people-swiper-pagination-bullet",
              bulletActiveClass: "people-swiper-pagination-bullet-active",
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              768: { slidesPerView: 1, spaceBetween: 24 },
            }}
            modules={[Pagination]}
          >
            {slides.map((person, idx) => (
              <SwiperSlide key={person.id || idx}>
                <article className="gs__people-slide">
                  <div className="gs__people-photo">
                    <div className="gs__people-photo-inner">
                      {/* Use explicit pixel dimensions instead of percentages */}
                      <Image
                        src={
                          typeof person.image === "string"
                            ? person.image.trim() || peopleImage
                            : person.image || peopleImage
                        }
                        alt={person.name}
                        width={240}
                        height={240}
                        style={{
                          width: "100% !important",
                          height: "100% !important",
                        }}
                        // sizes="(max-width: 575px) 120px, 240px"
                      />
                    </div>
                  </div>
                  <div className="gs__people-content">
                    <div className="gs__people-meta-row">
                      <div className="gs__people-arrows-inline">
                        <button
                          type="button"
                          className="people-swiper-inline-prev"
                          aria-label="Previous person"
                          onClick={() => swiperRef.current?.slidePrev()}
                        >
                          <ArrowIcon direction="left" />
                        </button>
                        <button
                          type="button"
                          className="people-swiper-inline-next"
                          aria-label="Next person"
                          onClick={() => swiperRef.current?.slideNext()}
                        >
                          <ArrowIcon direction="right" />
                        </button>
                      </div>
                      <div>
                        <h3 className="gs__people-name">{person.name}</h3>
                        <p className="gs__people-role">
                          {person.designation || person.role}
                        </p>
                        <p className="gs__people-meta">
                          {person.experience || person.meta}
                        </p>
                      </div>
                    </div>

                    <blockquote className="gs__people-quote">
                      {person.quote}
                    </blockquote>
                    <p className="gs__people-description">
                      {person.description}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default PeopleSlider;
