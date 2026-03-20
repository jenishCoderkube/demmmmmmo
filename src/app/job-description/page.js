"use client";
import React from "react";
import Image from "next/image";
import StatsCardsSection from "@/components/Common/StatsCardsSection";
import VacanciesFilterSection from "@/components/Common/VacanciesFilterSection";
import Pagination_slider from "@/components/Common/Pagination";
import GetInTouch from "@/components/Common/GetInTouch";
import jobimg from "public/images/av-04.jpg";
import bgApply from "public/images/cta.jpg";
// import circle from "public/images/circle.svg";
import VacancyCard, { VacancyCardGrid } from "@/components/Common/VacancyCard";
import TitleLine from "@/components/Common/TitleLine";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import BlogCard from "@/components/Common/BlogCard";
import FormInput from "@/components/Common/FormInput";
import FormTextarea from "@/components/Common/FormTextarea";
import FormFileUpload from "@/components/Common/FormFileUpload";
import FormCheckbox from "@/components/Common/FormCheckbox";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function JobDescription(theme = "light") {
  return (
    <>
      <div
        className="gs__terms gs__job-description-wp"
        data-theme="light"
      >
        <div className="gs__container">
          <div className="gs__terms-container">
            <nav className="gs__breadcrumb">
              <span>Home</span>
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
                    fill="#A2A2A2"
                  />
                </svg>
              </span>
              <span>Vacancies</span>
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
                    fill="#A2A2A2"
                  />
                </svg>
              </span>
              <span className="active">
                Sales Representative - Orthopaedic Implants (Theatre-based)
              </span>
            </nav>
            {/* LEFT SIDE */}
            <div className="gs__terms-left">
              <h1 className="gs__h1-title">
                Sales Representative - Orthopaedic Implants (Theatre-based)
              </h1>
              <div className="gs__job-description-content">
                <div className="gs__location-wrap">London Area, UK</div>
                <div className="gs__tags-wrap">
                  <div className="gs__vacancy-card-tag">Orthopaedics</div>
                  <div className="gs__vacancy-card-tag">Therapeutic areas</div>
                  <div className="gs__vacancy-card-tag">C-Suite</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job details layout: left sticky profile, right long content */}
      <section className="gs__job-layout">
        <div className="gs__container">
          <div className="gs__job-layout-grid">
            {/* LEFT: Consultant / apply column (sticky) */}
            <aside className="gs__job-layout-left">
              <div
                className="gs__job-apply-card"
                style={{
                  backgroundImage: `url(/images/cta.jpg)`,
                  // "linear-gradient(0deg, #FE5800 0%, #FE5800 100%), url(/images/measur.jpg) lightgray 0px -345.136px / cover no-repeat",
                  backgroundBlendMode: "multiply, normal",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#FE5800",
                }}
              >
                <h3 className="gs__job-apply-title">Ready to apply?</h3>
                <p className="gs__job-apply-text">
                  {/* Join a team that's transforming healthcare through innovation. */}
                  {/* <Image
                    src={circle}
                    alt="circle"
                    width={100}
                    height={100}
                  /> */}
                </p>
                <div className="gs__job-apply-actions">
                  <button className="gs__btn gs__job-apply-secondary-btn">
                    <span className="gs__btn-inner">
                      <span className="gs__btn-text">Upload your CV</span>
                      <span className="gs__btn-text">Upload your CV</span>
                    </span>
                  </button>
                </div>
              </div>
              <div className="gs__job-profile-card">
                <div className="gs__job-profile-avatar">
                  <Image
                    src={jobimg}
                    alt="Consultant portrait"
                  />
                </div>
                <div>
                  <div className="gs__job-profile-main">
                    <h3 className="gs__job-profile-name">Megan Percival</h3>
                    <p className="gs__job-profile-role">Senior Consultant</p>
                    <p className="gs__job-profile-meta">12 years experience</p>
                  </div>
                  <p className="gs__job-profile-body">
                    Sarah specializes in commercial leadership placements within
                    MedTech and diagnostics. She has successfully placed over 60
                    C‑suite executives in high‑growth healthcare companies.
                  </p>

                  <button className="gs__btn gs__job-profile-btn">
                    <span className="gs__btn-inner">
                      <span className="gs__btn-text">Email Consultant</span>
                      <span className="gs__btn-text">Email Consultant</span>
                    </span>
                  </button>
                </div>
              </div>
            </aside>

            {/* RIGHT: Long job description content */}
            <section className="gs__job-layout-right">
              <div className="gs__job-section">
                <h3 className="gs__job-section-title">About the company</h3>
                <p className="gs__job-section-body">
                  We seek a commercially driven Chief Commercial Officer (CCO)
                  to spearhead our U.S. market expansion, overseeing sales,
                  business development, marketing, and customer success. This
                  executive will position MedTech innovation as a cost‑saving,
                  value‑driven solution, advancing innovation in diagnostic
                  imaging and enhancing patient care outcomes.
                </p>
              </div>

              <div className="gs__job-section">
                <h3 className="gs__job-section-title">About the role</h3>
                <ul className="gs__job-section-list">
                  <li>
                    15+ years commercial leadership experience in MedTech /
                    Medical Device industry.
                  </li>
                  <li>
                    Proven track record of scaling revenue in diagnostic imaging
                    or related sectors.
                  </li>
                  <li>
                    FDA regulatory experience with 510(k) or PMA submissions
                    preferred.
                  </li>
                  <li>
                    Strong leadership skills with experience building teams from
                    5 to 50+ people.
                  </li>
                  <li>
                    Established network within radiology, cardiology, or imaging
                    communities.
                  </li>
                  <li>
                    MBA or advanced degree in business, engineering, or life
                    sciences.
                  </li>
                </ul>
              </div>

              <div className="gs__job-section">
                <h3 className="gs__job-section-title">About you</h3>
                <ul className="gs__job-section-list">
                  <li>Competitive base salary with strong growth potential.</li>
                  <li>Comprehensive health, dental, and vision insurance.</li>
                  <li>Flexible remote work arrangements.</li>
                  <li>
                    Professional development budget and clear progression
                    pathway.
                  </li>
                  <li>
                    Opportunity to shape the future of medical imaging
                    technology.
                  </li>
                </ul>
              </div>

              {/* Stats Cards Section */}
            </section>
          </div>
        </div>
      </section>

      {/* Stats Cards Section */}
      <section
        className="gs__stats-cards-section"
        style={{
          backgroundImage: `url(/images/measur.jpg)`,
          // "linear-gradient(0deg, #FE5800 0%, #FE5800 100%), url(/images/measur.jpg) lightgray 0px -345.136px / cover no-repeat",
          backgroundBlendMode: "multiply, normal",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#FE5800",
        }}
      >
        <div className="gs__container">
          <div className="gs__stats-cards-contact">
            <div className="gs__stats-card-contact">
              <div className="gs__stats-card-value">90%</div>
              <div className="gs__stats-card-description">
                candidates accept job offers
              </div>
            </div>
            <div className="gs__stats-card-contact">
              <div className="gs__stats-card-value">200,200+</div>
              <div className="gs__stats-card-description">
                MedTech professionals in our community
              </div>
            </div>
            <div className="gs__stats-card-contact">
              <div className="gs__stats-card-value">96%</div>
              <div className="gs__stats-card-description">
                placed candidates remain for 2+ years
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Career Tweaks */}
      <div className="gs__blog-page-article gs__blog-slider gs_article-slider gs__expert-career-tweaks">
        <div className="gs__container">
          <div className="gs__related-title">
            <TitleLine theme="light" />
            <a
              className="gs_readmore"
              href="#"
              title="Read more"
            >
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
                    fill="#111111"
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
              style={{ paddingBottom: "2.5rem" }}
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
      {/*contact section */}
      <div
        data-theme="dark"
        className="gs__contact-section"
      >
        <div className="gs__container">
          <div className="gs__contact-content">
            <form className="gs__guide-form gs__guide-form-job">
              <div className="gs__guide-form-row">
                <div className="gs__guide-form-row-half">
                  <FormInput
                    id="fname"
                    label="First Name"
                    required
                  />
                  <FormInput
                    id="lname"
                    label="Last Name"
                    required
                  />
                </div>

                <div className="gs__guide-form-row-half">
                  <FormInput
                    id="email"
                    label="Email Address"
                    type="email"
                    required
                  />
                  <FormInput
                    id="linkedin"
                    label="LinkedIn profile"
                    type="text"
                    required
                  />
                </div>

                <div className="gs__guide-form-row-half">
                  <FormInput
                    id="cv"
                    label="Upload CV"
                    type="text"
                    required
                  />
                  <FormFileUpload
                    id="cv"
                    label="Upload File"
                    type="file"
                    required
                  />
                </div>

                <div className="gs__guide-form-row-full">
                  <FormTextarea
                    id="message"
                    label="Message"
                    required
                  />
                </div>
                <div className="gs__guide-form-row gs__guide-form-checkbox">
                  <FormCheckbox
                    id="optInPrivacy"
                    label="By clicking this checkbox you confirm that you have read and agree to the privacy policy."
                  />
                  <FormCheckbox
                    id="optInNewsletter"
                    label="Track the future of healthcare with us. Tick here to opt-in to our newsletters and market trend reports. You can unsubscribe at any time. For more on our data practices, "
                    linkHref="#"
                    linkText="click here"
                  />
                </div>
              </div>
              <div className="gs__btn-wrap">
                <button
                  type="submit"
                  className="gs__btn"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <GetInTouch />
    </>
  );
}

export default JobDescription;
