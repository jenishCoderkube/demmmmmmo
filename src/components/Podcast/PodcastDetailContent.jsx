"use client";

import React from "react";
import GetInTouch from "@/components/Common/GetInTouch";
import Alsovisit from "@/components/Common/Alsovisit";
import TitleLine from "@/components/Common/TitleLine";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { blogService } from "@/app/services/blogService";
import ArticleBanner from "@/components/Common/ArticleBanner";
import Articlecontent from "@/components/Common/Articlecontent";
import PodcastCard from "@/components/Common/PodcastCard";

import "swiper/css";
import "swiper/css/navigation";

export default function PodcastDetailContent({ slug }) {
  // 1. Fetch single podcast data
  const { data: insightData, isLoading } = useQuery({
    queryKey: ["podcast", slug],
    queryFn: () => blogService.getInsightBySlug(slug),
  });

  const insight = insightData?.success ? insightData.data : null;
  const firstTag = insight?.tags?.[0]?.slug || "";

  // 2. Query for More Podcasts for the slider
  const { data: moreData } = useQuery({
    queryKey: ["podcasts", "more", firstTag],
    queryFn: () =>
      blogService.getInsights({
        page_type: "PODCAST",
        search: "",
        limit: 10,
        tag: firstTag,
      }),
    enabled: !!insight,
  });

  const morePodcasts = moreData?.success ? moreData.data?.insights : [];

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
        Podcast not found.
      </div>
    );
  }

  return (
    <>
      <ArticleBanner
        data={insight}
        LastUpdated={false}
        LastUpdatedicon={true}
      />
      <Articlecontent data={insight} />

      <div className="gs__blog-page-article gs__blog-slider gs__report-slider">
        <div className="gs__container">
          <TitleLine title="More Podcasts" theme="light" />
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
              {morePodcasts.map((item, idx) => (
                <SwiperSlide key={item._id || idx}>
                  <PodcastCard theme="light" data={item} />
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
