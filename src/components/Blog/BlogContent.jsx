"use client";

import React from "react";
import HeroBanner from "@/components/Common/HeroBanner";
import BlogCard from "@/components/Common/BlogCard";
import GetInTouch from "@/components/Common/GetInTouch";
import Pagination_slider from "@/components/Common/Pagination";
import Filter_blog from "@/components/Common/Filter";
import Also_Vist from "@/components/Common/Alsovisit";
import TitleLine from "@/components/Common/TitleLine";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { blogService } from "@/app/services/blogService";

import "swiper/css";
import "swiper/css/navigation";

export default function BlogContent() {
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [category, setCategory] = React.useState("");
  const [blogArticles, setBlogArticles] = React.useState([]);
  const [shouldAppend, setShouldAppend] = React.useState(false);

  // 1. Query for Press Releases (Slider section)
  const { data: pressData, isLoading: isPressLoading } = useQuery({
    queryKey: ["blogs", "", "press-releases"],
    queryFn: () =>
      blogService.getInsights({
        page_type: "BLOG",
        category: "press-releases",
      }),
  });
  console.log(pressData);
  // 2. Query for Blog Articles (Grid section with pagination and search)
  const { data: articlesData, isFetching: isArticlesFetching } = useQuery({
    queryKey: ["blogs", search, category || "blog-article", page],
    queryFn: () =>
      blogService.getInsights({
        page_type: "BLOG",
        category: category || "blog-article",
        search,
        page,
        limit: 8,
      }),
  });

  // Synchronize state with fetched data
  React.useEffect(() => {
    if (articlesData?.success) {
      if (!shouldAppend || page === 1) {
        // Replace view (Initial load, Search, Category change, or Direct Pagination)
        setBlogArticles(articlesData.data.insights);
      } else {
        // Append view (Load More)
        setBlogArticles((prev) => {
          const existingIds = new Set(prev.map((item) => item._id));
          const newItems = articlesData.data.insights.filter(
            (item) => !existingIds.has(item._id),
          );
          return [...prev, ...newItems];
        });
      }
    }
  }, [articlesData, page, shouldAppend]);

  const pressReleases = pressData?.success ? pressData.data.insights : [];
  const pagination = articlesData?.data?.pagination || {};

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
    // Smooth scroll to blog grid section
    const element = document.getElementById("blog-grid-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const resetArticles = () => {
    setPage(1);
    setShouldAppend(false);
    setBlogArticles([]);
  };

  const handleSearch = (val) => {
    setSearch(val);
    resetArticles();
  };

  const handleCategoryChange = (val) => {
    setCategory(val);
    resetArticles();
  };

  return (
    <>
      <HeroBanner />

      {/* Row 1: Press Releases Slider */}
      <div className="gs__blog-page-article gs__blog-slider">
        <div className="gs__container">
          <TitleLine title="Press Releases" />
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
                768: { slidesPerView: 2.2, spaceBetween: 16 },
                1024: { slidesPerView: 2.3, spaceBetween: 20 },
                1280: { slidesPerView: 2.5, spaceBetween: 24 },
              }}
              style={{ paddingBottom: "2.5rem" }}
              modules={[Navigation, Autoplay]}
            >
              {isPressLoading ? (
                <div style={{ padding: "2rem", textAlign: "center" }}>
                  Loading Press Releases...
                </div>
              ) : (
                pressReleases.map((blog, idx) => (
                  <SwiperSlide key={blog._id || idx}>
                    <BlogCard data={blog} />
                  </SwiperSlide>
                ))
              )}
            </Swiper>

            <button
              className="custom-swiper-button-prev slider-btn"
              aria-label="Previous"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <g clipPath="url(#clip0_1738_3982)">
                  <path
                    d="M6.48168 0.358983C6.67413 0.163363 6.99089 0.167832 7.17774 0.368805C7.35482 0.55926 7.34873 0.855892 7.16398 1.03892L1.65154 6.5L13.5 6.5C13.7761 6.5 14 6.72386 14 7C14 7.27614 13.7761 10.4069 13.5 10.4069L1.65154 10.4069L7.16398 12.9611C7.34873 13.1441 7.35482 13.4407 7.17774 13.6312C6.99089 13.8322 6.67413 13.8366 6.48168 13.641L3.03679e-07 7.05263L3.0828e-07 6.94737L6.48168 0.358983Z"
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

      {/* Row 2: Blog Articles Grid */}
      <Filter_blog
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        currentCategory={category}
        currentSearch={search}
      />
      <div className="gs__blog-page-article" id="blog-grid-section">
        <div className="gs__container">
          <TitleLine title="Blog Articles" />
          <div className="gs__card-wrapper">
            {blogArticles.length === 0 && isArticlesFetching ? (
              <div
                style={{
                  width: "100%",
                  padding: "4rem 0",
                  textAlign: "center",
                }}
              >
                Loading Blog Articles...
              </div>
            ) : (
              blogArticles.map((blog, idx) => (
                <BlogCard key={blog._id || idx} data={blog} />
              ))
            )}
            {blogArticles.length > 0 && isArticlesFetching && (
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
                      opacity: isArticlesFetching ? 0.5 : 1,
                      pointerEvents: isArticlesFetching ? "none" : "auto",
                      marginBottom: "1rem",
                    }}
                  >
                    {isArticlesFetching ? "Loading..." : "Load More"}
                  </a>
                )}
              </div>

              <Pagination_slider
                currentPage={page}
                totalPages={pagination.totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </div>
      </div>
      <Also_Vist />
      <GetInTouch theme="light" />
    </>
  );
}
