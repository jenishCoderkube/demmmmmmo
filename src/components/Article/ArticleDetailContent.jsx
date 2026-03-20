"use client";

import React from "react";
import GetInTouch from "@/components/Common/GetInTouch";
import Alsovisit from "@/components/Common/Alsovisit";
import TitleLine from "@/components/Common/TitleLine";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import BlogCard from "@/components/Common/BlogCard";
import ArticleBanner from "@/components/Common/ArticleBanner";
import Articlecontent from "@/components/Common/Articlecontent";

import { useQuery } from "@tanstack/react-query";
import { blogService } from "@/app/services/blogService";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ArticleDetailContent({ slug }) {
  const { data: insightData, isLoading } = useQuery({
    queryKey: ["insight", slug],
    queryFn: () => blogService.getInsightBySlug(slug),
  });

  const insight = insightData?.success ? insightData.data : null;
  const firstTag = insight?.tags?.[0]?.slug || "";

  // Query for Related Press Releases
  const { data: pressData } = useQuery({
    queryKey: ["blogs", firstTag, "press-releases"],
    queryFn: () =>
      blogService.getInsights({
        page_type: "BLOG",
        category: "press-releases",
        search: firstTag,
      }),
    enabled: !!firstTag,
  });

  const pressReleases = (
    pressData?.success ? pressData.data?.insights : []
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

  return (
    <>
      <ArticleBanner data={insight} />
      <Articlecontent data={insight} />
      <div className="gs__blog-page-article gs__blog-slider gs_article-slider">
        <div className="gs__container">
          <div className="gs__related-title">
            <TitleLine theme="light" />
            <a className="gs_readmore" href="#" title="Read more">
              Read more{" "}
              <span>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
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
          <div
            className="custom-swiper-navigation-wp"
            style={{ position: "relative" }}
          >
            {pressReleases.length > 0 ? (
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
                {pressReleases.map((item) => (
                  <SwiperSlide key={item._id}>
                    <BlogCard theme="light" data={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div style={{ padding: "2rem", textAlign: "center" }}>
                No related press releases found.
              </div>
            )}
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
      <Alsovisit theme="light" />
      <GetInTouch />
    </>
  );
}
