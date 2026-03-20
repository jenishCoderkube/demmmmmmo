"use client";
import React from "react";
import { usePathname } from "next/navigation";

function Pagination_slider({ currentPage = 1, totalPages = 1, onPageChange, theme = "dark" }) {
  const isDarkFooter = theme === "dark";

  const handlePageClick = (e, page) => {
    e.preventDefault();
    if (page >= 1 && page <= totalPages) {
      onPageChange?.(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end === totalPages) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <span
          key={i}
          className={i === currentPage ? "gs__active" : ""}
          onClick={(e) => handlePageClick(e, i)}
          style={{ cursor: "pointer" }}
        >
          {i}
        </span>
      );
    }
    return pages;
  };

  return (
    <div
      className="gs__pagination-section"
      data-theme={isDarkFooter ? "section-dark" : "section-light"}
    >
      <a
        href="#"
        className="gs__load-more"
        onClick={(e) => handlePageClick(e, currentPage + 1)}
        style={{ pointerEvents: currentPage >= totalPages ? "none" : "auto", opacity: currentPage >= totalPages ? 0.5 : 1 }}
      >
        Load Next Page
      </a>

      <div className="gs__pagination">
        <span
          className="gs__arrow"
          onClick={(e) => handlePageClick(e, currentPage - 1)}
          style={{ cursor: currentPage === 1 ? "default" : "pointer", opacity: currentPage === 1 ? 0.5 : 1 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.25954 0.205459C9.53447 -0.0739993 9.98698 -0.0676138 10.2539 0.21949C10.5069 0.491569 10.4982 0.915329 10.2343 1.17679L2.35934 8.97834L19.2857 8.97834C19.6802 8.97834 20 9.29814 20 9.69263C20 10.0871 19.6802 10.4069 19.2857 10.4069L2.35934 10.4069L10.2343 18.2085C10.4982 18.4699 10.5069 18.8937 10.2539 19.1658C9.98698 19.4529 9.53447 19.4593 9.25954 19.1798L-4.404e-07 9.76781L-4.33827e-07 9.61744L9.25954 0.205459Z"
              fill="currentColor"
            />
          </svg>
        </span>

        {renderPageNumbers()}

        {totalPages > 5 && currentPage < totalPages - 2 && (
          <>
            <span className="gs__dots">...</span>
            <span onClick={(e) => handlePageClick(e, totalPages)} style={{ cursor: "pointer" }}>{totalPages}</span>
          </>
        )}

        <span
          className="gs__arrow"
          onClick={(e) => handlePageClick(e, currentPage + 1)}
          style={{ cursor: currentPage === totalPages ? "default" : "pointer", opacity: currentPage === totalPages ? 0.5 : 1 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.7405 19.1798C10.4655 19.4593 10.013 19.4529 9.74608 19.1658C9.49311 18.8937 9.50181 18.4699 9.76574 18.2085L17.6407 10.4069L0.714287 10.4069C0.319797 10.4069 -4.06373e-07 10.0871 -4.06967e-07 9.69263C-4.07562e-07 9.29814 0.319797 8.97834 0.714286 8.97834L17.6407 8.97834L9.76574 1.17679C9.50181 0.91533 9.49311 0.491569 9.74608 0.21949C10.013 -0.067614 10.4655 -0.0739999 10.7405 0.205459L20 9.61744L20 9.76781L10.7405 19.1798Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Pagination_slider;
