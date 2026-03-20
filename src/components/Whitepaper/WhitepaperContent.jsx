"use client";

import React from "react";
import HeroBanner from "@/components/Common/HeroBanner";
import WhitepaperCard from "@/components/Common/WhitepaperCard";
import GetInTouch from "@/components/Common/GetInTouch";
import Pagination_slider from "@/components/Common/Pagination";
import Alsovisit from "@/components/Common/Alsovisit";
import TitleLine from "@/components/Common/TitleLine";
import { useQuery } from "@tanstack/react-query";
import { blogService } from "@/app/services/blogService";

export default function WhitepaperContent() {
  const [page, setPage] = React.useState(1);
  const [whitepapers, setWhitepapers] = React.useState([]);
  const [shouldAppend, setShouldAppend] = React.useState(false);

  // Query for Whitepapers (Grid section with pagination)
  const { data: whitepapersData, isFetching: isWhitepapersFetching } = useQuery(
    {
      queryKey: ["whitepapers", page],
      queryFn: () =>
        blogService.getInsights({
          page_type: "WHITEPAPER",
          page,
          limit: 10,
        }),
    },
  );

  // Synchronize state with fetched data
  React.useEffect(() => {
    if (whitepapersData?.success) {
      if (!shouldAppend || page === 1) {
        // Replace view
        setWhitepapers(whitepapersData.data.insights);
      } else {
        // Append view (Load More)
        setWhitepapers((prev) => {
          const existingIds = new Set(prev.map((item) => item._id));
          const newItems = whitepapersData.data.insights.filter(
            (item) => !existingIds.has(item._id),
          );
          return [...prev, ...newItems];
        });
      }
    }
  }, [whitepapersData, page, shouldAppend]);

  const pagination = whitepapersData?.data?.pagination || {};

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
    // Smooth scroll to top of whitepaper grid
    const element = document.getElementById("whitepaper-grid-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <HeroBanner title={"Whitepapers"} />
      <div className="gs__white-paper-wp" id="whitepaper-grid-section">
        <div className="gs__container">
          <div className="gs_white-paper gs__card-wrapper">
            {whitepapers.length === 0 && isWhitepapersFetching ? (
              <div
                style={{
                  width: "100%",
                  padding: "4rem 0",
                  textAlign: "center",
                }}
              >
                Loading Whitepapers...
              </div>
            ) : (
              whitepapers.map((item, idx) => (
                <WhitepaperCard
                  key={item._id || idx}
                  data={item}
                  theme="dark"
                />
              ))
            )}
            {whitepapers.length > 0 && isWhitepapersFetching && (
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
                      opacity: isWhitepapersFetching ? 0.5 : 1,
                      pointerEvents: isWhitepapersFetching ? "none" : "auto",
                      marginBottom: "1rem",
                    }}
                  >
                    {isWhitepapersFetching ? "Loading..." : "Load More"}
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
      <Alsovisit
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
            title: "The GS MedTech Podcast",
            desc: "Impact doesn't stop at the C-suite - we find talent from Associate to Director who drives real change.",
            link: "/insights/podcasts",
            btn1: "Our Approach",
            btn2: "Case Studies",
          },
        ]}
      />
      <GetInTouch theme="light" />
    </>
  );
}
