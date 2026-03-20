"use client";

import React from "react";
import Image from "next/image";
import GetInTouch from "@/components/Common/GetInTouch";
import Alsovisit from "@/components/Common/Alsovisit";
import WhitepaperCard from "@/components/Common/WhitepaperCard";
import TitleLine from "@/components/Common/TitleLine";
import FormInput from "@/components/Common/FormInput";
import FormCheckbox from "@/components/Common/FormCheckbox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { blogService } from "@/app/services/blogService";

import "swiper/css";
import "swiper/css/navigation";

export default function WhitepaperDetailContent({ slug }) {
  // 1. Fetch single whitepaper data
  const { data: insightData, isLoading } = useQuery({
    queryKey: ["whitepaper", slug],
    queryFn: () => blogService.getInsightBySlug(slug),
  });

  const insight = insightData?.success ? insightData.data : null;
  const firstTag = insight?.tags?.[0]?.slug || "";

  // 2. Query for More Whitepapers for the slider
  const { data: moreData } = useQuery({
    queryKey: ["whitepapers", "more", firstTag],
    queryFn: () =>
      blogService.getInsights({
        page_type: "WHITEPAPER",
        search: "",
        limit: 10,
        tag: firstTag,
      }),
  });

  const moreWhitepapers = (
    moreData?.success ? moreData.data?.insights : []
  ).filter((item) => item.slug !== slug);

  if (isLoading) {
    return (
      <div
        className="gs__loading-container"
        style={{ padding: "100px 0", textAlign: "center" }}
      >
        Loading...
      </div>
    );
  }

  if (!insight) {
    return (
      <div style={{ padding: "100px 0", textAlign: "center" }}>
        Whitepaper not found.
      </div>
    );
  }

  return (
    <>
      <div className="gs__terms gs_whitepaperitem-wp">
        <div className="gs__container">
          <div className="gs__terms-container">
            <nav className="gs__breadcrumb">
              <span>Home</span>
              <span>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path
                    d="M8.83203 4.23926V4.30371L4.47949 8.54395L3.79199 7.80762L7.00781 4.81543H0V3.72754H7.00781L3.79199 0.735352L4.47949 0L8.83203 4.23926Z"
                    fill="#A2A2A2"
                  />
                </svg>
              </span>
              <span>Insights</span>
              <span>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path
                    d="M8.83203 4.23926V4.30371L4.47949 8.54395L3.79199 7.80762L7.00781 4.81543H0V3.72754H7.00781L3.79199 0.735352L4.47949 0L8.83203 4.23926Z"
                    fill="#A2A2A2"
                  />
                </svg>
              </span>
              <span className="active">Whitepapers</span>
            </nav>
            <div className="gs__terms-left">
              <h1 className="gs__h1-title">{insight.title}</h1>
            </div>

            <div className="gs__terms-right">
              {insight.tags?.map((tag) => (
                <span key={tag._id} className="gs__found">
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="gs__container">
        <div className="gs__guide-sec">
          <div className="gs__card-image">
            <Image
              src={(insight.image || "/images/ebook-img.jpg").trim()}
              alt={insight.title}
              width={800}
              height={450}
            />
            <span className="gs__blog-type">
              {insight.category?.name || "EBOOK"}
            </span>
          </div>
          <div className="gs__guide-form-wp">
            <h2 className="gs__guide-form-title">Get the Guide</h2>
            <p dangerouslySetInnerHTML={{ __html: insight.content }} />
            <form className="gs__guide-form">
              <div className="gs__guide-form-row">
                <FormInput id="firstName" label="First Name" required />
                <FormInput id="lastName" label="Last Name" required />
                <FormInput
                  id="emailAddress"
                  label="Email Address"
                  type="email"
                  required
                />
                <FormInput id="company" label="Company" required />
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
              <div className="download-actions">
                <button className="gs__btn" type="submit">
                  <span className="gs__btn-inner">
                    <span className="gs__btn-text">Download</span>
                    <span className="gs__btn-text">Download</span>
                  </span>
                </button>

                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.back();
                  }}
                  className="go-back-link"
                >
                  <span className="go-back-icon">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path
                        d="M-0.00104723 4.31784L-0.00124194 4.25339L4.33847 2.16577e-05L5.02819 0.73427L1.82142 3.73616L8.8292 3.71499L8.83249 4.80287L1.82471 4.82404L5.04955 7.8065L4.36428 8.54393L-0.00104723 4.31784Z"
                        fill="#111111"
                      />
                    </svg>
                  </span>
                  Go Back
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="gs__blog-page-article gs__blog-slider gs__report-slider">
        <div className="gs__container">
          <TitleLine title="More Whitepapers" theme="light" />
        </div>
        <div className="gs__card-wrapper">
          <div
            className="custom-swiper-navigation-wp"
            style={{ position: "relative" }}
          >
            <Swiper
              spaceBetween={24}
              slidesPerView={2.5}
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1.2, spaceBetween: 8 },
                480: { slidesPerView: 1.5, spaceBetween: 12 },
                576: { slidesPerView: 2.5, spaceBetween: 16 },
                1024: { slidesPerView: 3.5, spaceBetween: 20 },
                1280: { slidesPerView: 3.5, spaceBetween: 24 },
              }}
              style={{ paddingBottom: "2.5rem" }}
              modules={[Navigation, Autoplay]}
            >
              {moreWhitepapers.map((item, idx) => (
                <SwiperSlide key={item._id || idx}>
                  <WhitepaperCard theme="dark" data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              className="custom-swiper-button-prev slider-btn"
              aria-label="Previous"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
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
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
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
      <Alsovisit
        theme="light"
        items={[
          {
            title: "Focus Area",
            desc: "Our expertise is organized deliberately to help you navigate complex challenges.",
            link: "/focus",
            btn1: "Our Approach",
            btn2: "Case Studies",
          },
          {
            title: "Functions",
            desc: "Building boards with the vision, expertise, and networks to accelerate your mission.",
            link: "/jobfunction",
            btn1: "Our Approach",
            btn2: "Case Studies",
          },
        ]}
      />
      <GetInTouch />
    </>
  );
}
