"use client";

import React from "react";
import HeroBanner from "@/components/Common/HeroBanner";
import PodcastCard from "@/components/Common/PodcastCard";
import GetInTouch from "@/components/Common/GetInTouch";
import Pagination_slider from "@/components/Common/Pagination";
import Alsovisit from "@/components/Common/Alsovisit";
import { useQuery } from "@tanstack/react-query";
import { blogService } from "@/app/services/blogService";

export default function PodcastContent() {
  const [page, setPage] = React.useState(1);
  const [podcasts, setPodcasts] = React.useState([]);
  const [shouldAppend, setShouldAppend] = React.useState(false);

  // Query for Podcasts (Grid section with pagination)
  const { data: podcastsData, isFetching: isPodcastsFetching } = useQuery({
    queryKey: ["podcasts", page],
    queryFn: () =>
      blogService.getInsights({
        page_type: "PODCAST",
        page,
        limit: 10,
      }),
  });

  // Synchronize state with fetched data
  React.useEffect(() => {
    if (podcastsData?.success) {
      if (!shouldAppend || page === 1) {
        // Replace view
        setPodcasts(podcastsData.data.insights);
      } else {
        // Append view (Load More)
        setPodcasts((prev) => {
          const existingIds = new Set(prev.map((item) => item._id));
          const newItems = podcastsData.data.insights.filter(
            (item) => !existingIds.has(item._id),
          );
          return [...prev, ...newItems];
        });
      }
    }
  }, [podcastsData, page, shouldAppend]);

  const pagination = podcastsData?.data?.pagination || {};

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
    // Smooth scroll to top of podcast grid
    const element = document.getElementById("podcast-grid-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <HeroBanner title={"The GS MedTech Podcast"} theme="light" />
      <div className="gs__podcast-blog" id="podcast-grid-section">
        <div className="gs__container">
          <div className="gs__card-wrapper">
            {podcasts.length === 0 && isPodcastsFetching ? (
              <div
                style={{
                  width: "100%",
                  padding: "4rem 0",
                  textAlign: "center",
                }}
              >
                Loading Podcasts...
              </div>
            ) : (
              podcasts.map((item, idx) => (
                <PodcastCard
                  key={item._id || idx}
                  data={item}
                  theme="light"
                />
              ))
            )}
            {podcasts.length > 0 && isPodcastsFetching && (
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
                      opacity: isPodcastsFetching ? 0.5 : 1,
                      pointerEvents: isPodcastsFetching ? "none" : "auto",
                      marginBottom: "1rem",
                    }}
                  >
                    {isPodcastsFetching ? "Loading..." : "Load More"}
                  </a>
                )}
              </div>
              <Pagination_slider
                currentPage={page}
                totalPages={pagination.totalPages}
                onPageChange={handlePageChange}
                theme="light"
              />
            </div>
          )}
        </div>
      </div>
      <Alsovisit
        theme="light"
        items={[
          {
            title: "Blog",
            desc: "Explore our latest thoughts, news and perspectives on the MedTech industry.",
            link: "/insights/blogs",
            btn1: "Our Approach",
            btn2: "Case Studies",
          },
          {
            title: "Market Insights",
            desc: "C-suite and senior leadership appointments for MedTech companies driving innovation forward.",
            link: "/insights/market-insights",
            btn1: "Our Approach",
            btn2: "Case Studies",
          },
          {
            title: "Whitepapers",
            desc: "Building boards with the vision, expertise, and networks to accelerate your mission.",
            link: "/insights/whitepaper",
            btn1: "Our Approach",
            btn2: "Case Studies",
          },
        ]}
      />
      <GetInTouch />
    </>
  );
}
