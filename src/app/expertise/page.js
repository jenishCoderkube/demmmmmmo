"use client";
import React from "react";
import FocusFaq from "@/components/Common/FocusFaq";
import { usePathname } from "next/navigation";
import TitleLine from "@/components/Common/TitleLine";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css";
import BlogCard from "@/components/Common/BlogCard";
import TitleWithText from "@/components/Common/TitleWithText";
import TitleWithButton from "@/components/Common/TitleWithButton";
import TheraphyCard from "@/components/Common/TheraphyCard";
import QuoteCard from "@/components/Common/QuoteCard";

function Expertise({ theme = "dark" }) {
  const pathname = usePathname();

  const isDarkFooter = theme === "dark";
  return (
    <>
      <div
        className="gs__term gs__expert-banner"
        data-theme={isDarkFooter ? "section-dark" : "section-light"}
      >
        <div className="gs__container">
          <div className="gs__terms-container">
            {/* LEFT SIDE */}
            <div className="gs__terms-left">
              <h1 className="gs__h1-title">
                <span>Applied, </span>
                <span className="gs__terms-orange"> structured knowledge</span>
                <span className="gs__block">across domains and roles.</span>
              </h1>
            </div>

            {/* RIGHT SIDE */}
            <div className="gs__terms-right">
              <div className="expert-content">
                <p className="gs__terms-nav">Evidence-Based Deep Dives</p>
              </div>
              <div>
                <h6 className="gs__terms-text">
                  Our expertise is organized deliberately to help you navigate
                  complex challenges. Each path below represents focused
                  specialization, allowing you to identify the perspective most
                  relevant to your specific context.
                </h6>
                <div className="gs_banner-btn">
                  <button className="gs__btn">
                    <span className="gs__btn-inner">
                      <span className="gs__btn-text">Explore Focus Areas</span>
                      <span className="gs__btn-text">Our solutions</span>
                    </span>
                  </button>
                  <button className="gs__btn gs__white-btn">
                    <span className="gs__btn-inner">
                      <span className="gs__btn-text">
                        Explore Job Functions
                      </span>
                      <span className="gs__btn-text">Our Appropach</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FocusFaq />
      <div className="gs__function-faq">
        <FocusFaq theme="light" />
      </div>
      <QuoteCard />
      <div>
        <TitleWithText theme="light" />
        <div className="gs__expertise-btn-txt">
          <TitleWithButton theme="light" />
        </div>
        <TheraphyCard theme="light" />
      </div>
      <QuoteCard />
      <div className="gs__theraphy-card-reverse">
        <div className="gs__expertise-btn-txt">
          <TitleWithButton theme="light" />
        </div>
        <TheraphyCard theme="light" />
      </div>
      <QuoteCard />
      <div className="gs__blog-page-article gs__blog-slider gs_article-slider gs__expertise-slider">
        <div className="gs__container">
          <div className="gs__related-title">
            <TitleLine theme="light" />
            <a className="gs_readmore" href="#" title="Read more">
              Read more{" "}
              <span>
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.83203 4.23926V4.30371L4.47949 8.54395L3.79199 7.80762L7.00781 4.81543H0V3.72754H7.00781L3.79199 0.735352L4.47949 0L8.83203 4.23926Z"
                    fill="#FEFDFB"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className="gs__card-wrapper">
          {/* Swiper with custom navigation buttons */}
          <div
            className="custom-swiper-navigation-wp"
            style={{ position: "relative" }}
          >
            <Swiper
              spaceBetween={24}
              slidesPerView={3.5}
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1.4, spaceBetween: 8 },
                480: { slidesPerView: 2.5, spaceBetween: 12 },
                768: { slidesPerView: 3.2, spaceBetween: 16 },
                1024: { slidesPerView: 3.3, spaceBetween: 20 },
                1280: { slidesPerView: 3.5, spaceBetween: 24 },
              }}
              style={{}}
              modules={[Navigation, Autoplay]}
            >
              {[...Array(4)].map((_, idx) => (
                <SwiperSlide key={idx}>
                  <BlogCard theme="light" />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom navigation buttons, absolutely positioned over the slider */}
            <button
              className="custom-swiper-button-prev slider-btn"
              aria-label="Previous"
            >
              {/* You can replace the svg with your own custom icon */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1738_3982)">
                  <path
                    d="M6.48168 0.358983C6.67413 0.163363 6.99089 0.167832 7.17774 0.368805C7.35482 0.55926 7.34873 0.855892 7.16398 1.03892L1.65154 6.5L13.5 6.5C13.7761 6.5 14 6.72386 14 7C14 7.27614 13.7761 7.5 13.5 7.5L1.65154 7.5L7.16398 12.9611C7.34873 13.1441 7.35482 13.4407 7.17774 13.6312C6.99089 13.8322 6.67413 13.8366 6.48168 13.641L3.03679e-07 7.05263L3.0828e-07 6.94737L6.48168 0.358983Z"
                    fill="#FEFDFB"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1738_3982">
                    <rect
                      width="14"
                      height="14"
                      fill="white"
                      transform="translate(14) rotate(90)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button
              className="custom-swiper-button-next slider-btn"
              aria-label="Next"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1738_3984)">
                  <path
                    d="M7.51832 13.641C7.32587 13.8366 7.00911 13.8322 6.82226 13.6312C6.64518 13.4407 6.65127 13.1441 6.83602 12.9611L12.3485 7.5L0.500001 7.5C0.223858 7.5 3.27498e-07 7.27614 3.27082e-07 7C3.26666e-07 6.72386 0.223858 6.5 0.5 6.5L12.3485 6.5L6.83602 1.03892C6.65127 0.855893 6.64518 0.55926 6.82226 0.368805C7.00911 0.167833 7.32587 0.163363 7.51832 0.358983L14 6.94737L14 7.05263L7.51832 13.641Z"
                    fill="#FEFDFB"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1738_3984">
                    <rect
                      width="14"
                      height="14"
                      fill="white"
                      transform="translate(6.11959e-07 14) rotate(-90)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <section
        className="gs__get-in-touch-section gs__explore-wp"
        data-theme={isDarkFooter ? "section-dark" : "section-light"}
      >
        <div className="gs__container">
          <div className="gs__get-in-touch-content">
            <h2>
              Ready to explore <span className="gs__terms-orange">deeper?</span>
            </h2>
            <p>The patience to find your perfect fit. The power to scale it.</p>
            <div className="explore-btn">
              <button className="gs__btn">
                <span className="gs__btn-inner">
                  <span className="gs__btn-text">
                    Browse all Areas of Expertise
                  </span>
                  <span className="gs__btn-text">Get In Touch</span>
                </span>
              </button>
              <button className="gs__btn gs__white-btn">
                <span className="gs__btn-inner">
                  <span className="gs__btn-text">Browse Job Functions</span>
                  <span className="gs__btn-text">Get In Touch</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Expertise;












