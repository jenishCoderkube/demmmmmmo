"use client";
import React from "react";
import { usePathname } from "next/navigation";

const Filter_blog = ({
  onSearch,
  onCategoryChange,
  currentCategory,
  currentSearch,
  theme = "dark",
}) => {
  const pathname = usePathname();

  const isDarkFooter = theme === "dark";

  const categories = [
    { label: "All Topics", value: "" },
    { label: "Blog Article", value: "blog-article" },
    { label: "Press Releases", value: "press-releases" },
  ];

  return (
    <div
      className="gs__blog-filterbar-wp"
      data-theme={isDarkFooter ? "section-dark" : "section-light"}
    >
      <div className="gs__container">
        <div className="gs__blog-filterbar">
          {/* Filter by Topic */}
          <div className="gs__filter-group">
            <span className="gs__filter-icon-title">
              <label htmlFor="topic-filter" className="gs__filter-label">
                Filter by Topic
              </label>
              <span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1689_3533)">
                    <path
                      d="M0.358983 7.51832C0.163362 7.32587 0.167832 7.00911 0.368805 6.82226C0.55926 6.64518 0.855892 6.65127 1.03892 6.83602L6.5 12.3485V0.5C6.5 0.223858 6.72386 9.44792e-09 7 2.11025e-08C7.27614 3.27571e-08 7.5 0.223858 7.5 0.5V12.3485L12.9611 6.83602C13.1441 6.65127 13.4407 6.64518 13.6312 6.82226C13.8322 7.00911 13.8366 7.32587 13.641 7.51832L7.05263 14H6.94737L0.358983 7.51832Z"
                      fill="#FEFDFB"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1689_3533">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </span>

            <div className="gs__select-wrapper">
              <select
                id="topic-filter"
                className="gs__select"
                value={currentCategory}
                onChange={(e) => onCategoryChange?.(e.target.value)}
              >
                {/* {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))} */}
              </select>
            </div>
          </div>

          {/* Search */}
          <div className="gs__search-container">
            <input
              type="text"
              placeholder="Search"
              className="gs__search-input"
              value={currentSearch}
              onChange={(e) => onSearch?.(e.target.value)}
            />

            <span className="gs__search-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle
                  cx="8"
                  cy="8"
                  r="7"
                  stroke="#F6F1E9"
                  strokeWidth="1.3"
                />
                <path
                  d="M16 16L13 13"
                  stroke="#F6F1E9"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter_blog;
