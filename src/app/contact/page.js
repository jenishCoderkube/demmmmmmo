"use client";
import React, { useState } from "react";
import Image from "next/image";
const mapImage = "/assets/map.png";
import TitleLine from "@/components/Common/TitleLine";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import LocationCard, {
  staticLocations,
} from "@/components/Common/LocationCard";
import FormInput from "@/components/Common/FormInput";
import FormTextarea from "@/components/Common/FormTextarea";
import FormCheckbox from "@/components/Common/FormCheckbox";
import FormFileUpload from "@/components/Common/FormFileUpload";
import FormSelect from "@/components/Common/FormSelect";
import "swiper/css";
import "swiper/css/navigation";
function ContactPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("hire"); // "hire" | "job"

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setActiveTab("hire");
  };

  return (
    <>
      <div
        className="gs__terms gs__contact-wp"
        data-theme="section-light"
      >
        <div className="gs__container">
          <div className="gs__terms-container">
            {/* LEFT SIDE */}
            <div className="gs__terms-left">
              <h1 className="gs__h1-title">Find a Local Office</h1>
            </div>

            {/* RIGHT SIDE (empty for now) */}
          </div>
        </div>
      </div>

      {/* Nearest office section */}
      <section className="gs__contact-office-sec">
        <div className="gs__container">
          <div className="gs__contact-office">
            <div className="gs__contact-office-map">
              <Image src={mapImage} alt="Map showing nearest office" width={600} height={400} />
            </div>

            <div className="gs__contact-office-content">
              <span className="gs__contact-office-label">Nearest office</span>
              <h2 className="gs__contact-office-title">Sofia</h2>

              <div className="gs__contact-office-address">
                <p>32 Gen. E. I. Totleben Blvd, 1606 Sofia,</p>
                <p>Bulgaria</p>
              </div>

              <div className="gs__contact-office-contact">
                <a href="tel:+441904720040">
                  <p>+44 1904 720040</p>
                </a>

                <a href="https://guidedsolutions.co.uk">
                  <p>guidedsolutions.co.uk</p>
                </a>
              </div>

              <p className="gs__contact-office-description">
                Our Bulgaria office is a key part of Guided Solutions&apos;
                global presence, bringing together talented professionals in a
                dynamic and collaborative environment. Located in Bulgaria, the
                team supports our clients with expertise in digital solutions,
                combining technical excellence with a strong focus on quality,
                innovation, and long-term partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Office */}
      {/* Expert Career Tweaks */}
      <div className="gs__blog-page-article gs__blog-slider gs_article-slider gs__expert-career-tweaks gs__location-slider">
        <div className="gs__container">
          <div className="gs__related-title">
            <TitleLine theme="light" />
            {/* Swiper navigation buttons */}
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
              }}
            >
              <button
                className="custom-swiper-button-prev slider-btn"
                aria-label="Previous"
                type="button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1738_3982)">
                    <path
                      d="M6.48168 0.358983C6.67413 0.163363 6.99089 0.167832 7.17774 0.368805C7.35482 0.55926 7.34873 0.855892 7.16398 1.03892L1.65154 6.5L13.5 6.5C13.7761 6.5 14 6.72386 14 7C14 7.27614 13.7761 7.5 13.5 7.5L1.65154 7.5L7.16398 12.9611C7.34873 13.1441 7.35482 13.4407 7.17774 13.6312C6.99089 13.8322 6.67413 13.8366 6.48168 13.641L3.03679e-07 7.05263L3.0828e-07 6.94737L6.48168 0.358983Z"
                      fill="#111111"
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
                type="button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1738_3984)">
                    <path
                      d="M7.51832 13.641C7.32587 13.8366 7.00911 13.8322 6.82226 13.6312C6.64518 13.4407 6.65127 13.1441 6.83602 12.9611L12.3485 7.5L0.500001 7.5C0.223858 7.5 3.27498e-07 7.27614 3.27082e-07 7C3.26666e-07 6.72386 0.223858 6.5 0.5 6.5L12.3485 6.5L6.83602 1.03892C6.65127 0.855893 6.64518 0.55926 6.82226 0.368805C7.00911 0.167833 7.32587 0.163363 7.51832 0.358983L14 6.94737L14 7.05263L7.51832 13.641Z"
                      fill="#111111"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1738_3984">
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
            </div>
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
              // autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1.4, spaceBetween: 8 },
                480: { slidesPerView: 2.5, spaceBetween: 12 },
                768: { slidesPerView: 3.2, spaceBetween: 16 },
                1024: { slidesPerView: 3.3, spaceBetween: 20 },
                1280: { slidesPerView: 5.9, spaceBetween: 24 },
              }}
              style={{ paddingBottom: "2.5rem" }}
              modules={[Navigation, Autoplay]}
            >
              {staticLocations.map((loc) => (
                <SwiperSlide key={loc.title + loc.location}>
                  <LocationCard
                    image={loc.image}
                    title={loc.title}
                    location={loc.location}
                    onClick={() => setIsSidebarOpen(true)}
                  />
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

      {/* Contact slide-up sidebar */}
      <div
        className={`gs__contact-sidebar-overlay ${isSidebarOpen ? "is-open" : ""}`}
        onClick={handleCloseSidebar}
        role="presentation"
        aria-hidden={!isSidebarOpen}
      >
        <div
          className="gs__contact-sidebar"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="gs__containers">
            <div className="gs__contact-sidebar-close-wrapper">
              <button
                type="button"
                className="gs__contact-sidebar-close"
                onClick={handleCloseSidebar}
              >
                Close
              </button>
            </div>
            <div className="gs__contact-sidebar-header">
              <div className="gs__contact-tabs">
                <button
                  type="button"
                  className={`gs__contact-tab ${activeTab === "hire" ? "is-active" : ""}`}
                  onClick={() => setActiveTab("hire")}
                >
                  Hire Talent
                </button>
                <button
                  type="button"
                  className={`gs__contact-tab ${activeTab === "job" ? "is-active" : ""}`}
                  onClick={() => setActiveTab("job")}
                >
                  Find a Job
                </button>
              </div>
            </div>

            {/* gs__contact-section + data-theme only when open; removed on close so contact CSS does not apply */}
            <div
              className={`gs__contact-sidebar-grid${isSidebarOpen ? " gs__contact-section" : ""}`}
              data-theme={isSidebarOpen ? "dark" : undefined}
            >
              <div className="gs__contact-sidebar-left">
                {activeTab === "hire" ? (
                  <>
                    <h2 className="gs__contact-sidebar-title">
                      Let's Talk <br /> About Your <br />
                      <span> Next Hire</span>
                    </h2>
                    <p className="gs__contact-sidebar-text">
                      For over two decades, we've been at the forefront of
                      helping cutting-edge MedTech companies source and secure
                      the top talent in the industry. 9,000+ successful
                      placements in 40 countries (and counting) means we know
                      how to deliver results.
                    </p>
                    <br />
                    <p className="gs__contact-sidebar-text">
                      Whether you’re looking to fill a critical position or
                      build an entire team, reach out and start the
                      conversation—let's find your perfect hire together.
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="gs__contact-sidebar-title">
                      Start
                      <span>
                        {" "}
                        Your <br /> Search
                      </span>
                    </h2>
                    <p className="gs__contact-sidebar-text">
                      Ready for a new challenge? We've helped thousands land
                      roles that perfectly align with their skills and ambitions
                      in the ever-evolving MedTech landscape.
                    </p>
                    <br />
                    <p className="gs__contact-sidebar-text">
                      Share your details and aspirations below—our recruitment
                      experts will connect you with opportunities tailored just
                      for you.
                    </p>
                  </>
                )}
              </div>

              <div className="gs__contact-sidebar-form">
                <div className="gs__contact-content">
                  {activeTab === "hire" ? (
                    <form className="gs__guide-form gs__guide-form-job">
                      <div className="gs__guide-form-row">
                        <div className="gs__guide-form-row-half">
                          <FormInput
                            id="job_fname"
                            label="First Name"
                            required
                          />
                          <FormInput
                            id="job_lname"
                            label="Last Name"
                            required
                          />
                        </div>
                        <div className="gs__guide-form-row-half">
                          <FormInput
                            id="job_email"
                            label="Email Address"
                            type="email"
                            required
                          />
                          <FormInput
                            id="job_linkedin"
                            label="LinkedIn profile"
                            type="text"
                          />
                        </div>
                        <div className="gs__guide-form-row-half">
                          <FormInput
                            id="job_title"
                            label="Job Title"
                            type="text"
                            required
                          />
                          <FormInput
                            id="company_name"
                            label="Company"
                            type="text"
                            required
                          />
                        </div>
                        <div className="gs__guide-form-row-full">
                          <FormSelect
                            id="service_interest"
                            label="Service Interest"
                            options={[
                              {
                                value: "service_interest_1",
                                label: "Service Interest 1",
                              },
                              {
                                value: "service_interest_2",
                                label: "Service Interest 2",
                              },
                              {
                                value: "service_interest_3",
                                label: "Service Interest 3",
                              },
                            ]}
                            placeholder="."
                            required
                          />
                        </div>
                        <div className="gs__guide-form-row-full">
                          <FormTextarea
                            id="job_message"
                            label="Message"
                          />
                        </div>
                        <div className="gs__guide-form-row gs__guide-form-checkbox">
                          <FormCheckbox
                            id="job_optInPrivacy"
                            label="By clicking this checkbox you confirm that you have read and agree to the privacy policy."
                          />
                          <FormCheckbox
                            id="job_optInNewsletter"
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
                  ) : (
                    <form className="gs__guide-form gs__guide-form-job">
                      <div className="gs__guide-form-row">
                        <div className="gs__guide-form-row-half">
                          <FormInput
                            id="job_fname"
                            label="First Name"
                            required
                          />
                          <FormInput
                            id="job_lname"
                            label="Last Name"
                            required
                          />
                        </div>
                        <div className="gs__guide-form-row-half">
                          <FormInput
                            id="job_email"
                            label="Email Address"
                            type="email"
                            required
                          />
                          <FormInput
                            id="job_linkedin"
                            label="LinkedIn profile"
                            type="text"
                          />
                        </div>
                        <div className="gs__guide-form-row-half gs__contact-sidebar-form-file">
                          <FormInput
                            id="job_cv"
                            label="Upload CV"
                            type="text"
                          />
                          <FormFileUpload
                            id="job_cv"
                            label="Upload File"
                            type="file"
                          />
                        </div>
                        <div className="gs__guide-form-row-full">
                          <FormTextarea
                            id="job_message"
                            label="Message"
                          />
                        </div>
                        <div className="gs__guide-form-row gs__guide-form-checkbox">
                          <FormCheckbox
                            id="job_optInPrivacy"
                            label="By clicking this checkbox you confirm that you have read and agree to the privacy policy."
                          />
                          <FormCheckbox
                            id="job_optInNewsletter"
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
                  )}
                </div>
              </div>
            </div>

            {/* Find Closest Office + Contact Us - below form, same in both hire & job */}
            <div className="gs__contact-sidebar-footer-links">
              <a
                href="/contact"
                className="gs__contact-footer-link-row gs__divider-line"
                aria-label="Find the closest office"
              >
                <span className="gs__contact-footer-link-text">
                  Find the Closest Office
                </span>
                <span
                  className="gs__contact-footer-link-icon"
                  aria-hidden
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M4 12L12 4M12 4H6M12 4V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
              <div className="gs__contact-footer-contact gs__divider-line">
                <h3 className="gs__contact-footer-contact-title">Contact Us</h3>
                <a
                  href="tel:+441904720040"
                  className="gs__contact-footer-contact-link"
                >
                  +44 1904 720040
                </a>
                <a
                  href="https://guidedsolutions.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gs__contact-footer-contact-link"
                >
                  guidedsolutions.co.uk
                </a>
                <div className="gs__contact-footer-social">
                  <a
                    href="https://www.linkedin.com/company/guided-solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gs__contact-footer-social-link"
                    aria-label="LinkedIn"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/guidedsolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gs__contact-footer-social-link"
                    aria-label="X (Twitter)"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
