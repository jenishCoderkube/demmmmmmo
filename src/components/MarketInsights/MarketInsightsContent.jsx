"use client";

import React from "react";
import HeroBanner from "@/components/Common/HeroBanner";
import Filter_blog from "@/components/Common/Filter";
import GetInTouch from "@/components/Common/GetInTouch";
import Pagination_slider from "@/components/Common/Pagination";
import Also_Vist from "@/components/Common/Alsovisit";
import BlogCard from "@/components/Common/BlogCard";
import TitleLine from "@/components/Common/TitleLine";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { blogService } from "@/app/services/blogService";

import "swiper/css";
import "swiper/css/navigation";

export default function MarketInsightsContent() {
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [category, setCategory] = React.useState("");
  const [insightsList, setInsightsList] = React.useState([]);
  const [shouldAppend, setShouldAppend] = React.useState(false);

  // 1. Query for Top Picks (Slider section)
  const { data: sliderData, isLoading: isSliderLoading } = useQuery({
    queryKey: ["market-insights", "", "press-releases", 1],
    queryFn: () =>
      blogService.getInsights({
        page_type: "MARKET_INSIGHT",
        category: "press-releases",
        page: 1,
      }),
  });

  // 2. Query for Latest MedTech News (Grid section with pagination and search)
  const { data: gridData, isFetching: isGridFetching } = useQuery({
    queryKey: ["market-insights", search, category || "news", page],
    queryFn: () =>
      blogService.getInsights({
        page_type: "MARKET_INSIGHT",
        category: category || "news",
        search,
        page,
      }),
  });

  // Synchronize state with fetched data
  React.useEffect(() => {
    if (gridData?.success) {
      if (!shouldAppend || page === 1) {
        // Replace view
        setInsightsList(gridData.data.insights);
      } else {
        // Append view (Load More)
        setInsightsList((prev) => {
          const existingIds = new Set(prev.map((item) => item._id));
          const newItems = gridData.data.insights.filter(
            (item) => !existingIds.has(item._id),
          );
          return [...prev, ...newItems];
        });
      }
    }
  }, [gridData, page, shouldAppend]);

  const topPicks = sliderData?.success ? sliderData.data.insights : [];
  const pagination = gridData?.data?.pagination || {};

  const handleLoadMore = (e) => {
    e?.preventDefault();
    if (pagination.currentPage < pagination.totalPages) {
      setShouldAppend(true);
      setPage((prev) => prev + 1);
    }
  };

  const handlePageChange = (newPage) => {
    setShouldAppend(false);
    setPage(newPage);
    const element = document.getElementById("market-grid-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const resetInsights = () => {
    setPage(1);
    setShouldAppend(false);
    setInsightsList([]);
  };

  const handleSearch = (val) => {
    setSearch(val);
    resetInsights();
  };

  const handleCategoryChange = (val) => {
    setCategory(val);
    resetInsights();
  };

  return (
    <>
      <HeroBanner theme="light" title={"Market Insights"} />
      <section className="gs__insight-blog-wp">
        <Filter_blog
          theme="light"
          onSearch={handleSearch}
          onCategoryChange={handleCategoryChange}
          currentCategory={category}
          currentSearch={search}
        />

        {/* Row 1: Top Picks Slider */}
        <div className="gs__blog-page-article gs__blog-slider gs__blog-light-slider">
          <div className="gs__container">
            <TitleLine theme="light" title="Top Picks" />
          </div>
          <div className="gs__card-wrapper">
            <div className="gs__container">
              <div
                className="custom-swiper-navigation-wp"
                style={{ position: "relative" }}
              >
                {isSliderLoading ? (
                  <div style={{ padding: "2rem", textAlign: "center" }}>
                    Loading Top Picks...
                  </div>
                ) : (
                  <Swiper
                    spaceBetween={24}
                    slidesPerView={2.5}
                    navigation={{
                      nextEl: ".custom-swiper-button-next",
                      prevEl: ".custom-swiper-button-prev",
                    }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    breakpoints={{
                      0: { slidesPerView: 1, spaceBetween: 8 },
                      480: { slidesPerView: 1, spaceBetween: 12 },
                      576: { slidesPerView: 2, spaceBetween: 16 },
                      1024: { slidesPerView: 2, spaceBetween: 20 },
                      1280: { slidesPerView: 2, spaceBetween: 24 },
                    }}
                    style={{ paddingBottom: "2.5rem" }}
                    modules={[Navigation, Autoplay]}
                  >
                    {topPicks.map((item, idx) => (
                      <SwiperSlide key={item._id || idx}>
                        <BlogCard theme="light" data={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
                <button
                  className="custom-swiper-button-prev slider-btn"
                  aria-label="Previous"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <g clipPath="url(#clip0_1738_3982)">
                      <path
                        d="M6.48168 0.358983C6.67413 0.163363 6.99089 0.167832 7.17774 0.368805C7.35482 0.55926 7.34873 0.855892 7.16398 1.03892L1.65154 6.5L13.5 6.5C13.7761 6.5 14 6.72386 14 7C14 7.27614 13.7761 7.5 13.5 7.5L1.65154 7.5L7.16398 12.9611C7.34873 13.1441 7.35482 13.4407 7.17774 13.6312C6.99089 13.8322 6.67413 13.8366 6.48168 13.641L3.03679e-07 7.05263L3.0828e-07 6.94737L6.48168 0.358983Z"
                        fill="#FE5800"
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
                        fill="#FE5800"
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
        </div>

        {/* Row 2: Latest MedTech News Grid */}
        <div className="gs__insight-blog" id="market-grid-section">
          <div className="gs__container">
            <TitleLine theme="light" title="Latest MedTech News" />
            <div className="gs__card-wrapper">
              {insightsList.length === 0 && isGridFetching ? (
                <div
                  style={{
                    width: "100%",
                    padding: "4rem 0",
                    textAlign: "center",
                  }}
                >
                  Loading Latest MedTech News...
                </div>
              ) : (
                insightsList.map((item, idx) => (
                  <BlogCard key={item._id || idx} theme="light" data={item} />
                ))
              )}
              {insightsList.length > 0 && isGridFetching && (
                <div className="gs__loading-overlay">Loading more...</div>
              )}
            </div>

            {pagination.totalPages > 1 && (
              <div
                className="gs__pagination-container"
                style={{ marginTop: "2rem" }}
              >
                <div
                  className="gs__pagination-section"
                  style={{ borderBottom: "none", paddingBottom: 0 }}
                >
                  {pagination.currentPage < pagination.totalPages && (
                    <a
                      href="#"
                      className="gs__load-more"
                      onClick={handleLoadMore}
                      style={{
                        opacity: isGridFetching ? 0.5 : 1,
                        pointerEvents: isGridFetching ? "none" : "auto",
                        marginBottom: "1rem",
                      }}
                    >
                      {isGridFetching ? "Loading..." : "Load More"}
                    </a>
                  )}
                </div>

                <Pagination_slider
                  theme="light"
                  currentPage={page}
                  totalPages={pagination.totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </div>
        </div>
        <Also_Vist theme="light" />
      </section>

      {/* Subscription Section */}
      <div className="gs__terms gs__subscribe-sec" data-theme="section-light">
        <div className="gs__container">
          <div className="gs__terms-container">
            <div className="gs__terms-left">
              <h1 className="gs__h1-title">
                <span>Stay Ahead of </span>
                <span className="gs__block">
                  <span className="gs__terms-orange">the MedTech Curve.</span>
                </span>
              </h1>
            </div>
            <div className="gs__terms-right">
              <p className="gs__terms-nav">Introduction</p>
              <h6 className="gs__terms-text">
                Join a global community of innovators. Get curated market
                insights, regulatory updates, and the latest clinical
                breakthroughs delivered directly to your inbox.
              </h6>
            </div>
            <div className="gs__subscribe-btn">
              <button className="gs__btn">
                <span className="gs__btn-inner">
                  <span className="gs__btn-text">
                    <span>Subscribe to Our Weekly</span>
                    <span>
                      <svg width="10" height="10" viewBox="0 0 9 9" fill="none">
                        <path
                          d="M8.83203 4.23926V4.30371L4.47949 8.54395L3.79199 7.80762L7.00781 4.81543H0V3.72754H7.00781L3.79199 0.735352L4.47949 0L8.83203 4.23926Z"
                          fill="#FE5800"
                        />
                      </svg>
                    </span>
                  </span>
                  <span className="gs__btn-text">Our Solutions</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
    </>
  );
}
