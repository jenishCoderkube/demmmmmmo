"use client";
import Link from "next/link";
import Blogimg from "public/images/ebook-img.png";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { darkHeroBannerRoutes } from "@/config/footerTheme";
import PropTypes from "prop-types";
import "@/app/globals.css";

const BlogCard = ({ data, theme = "dark" }) => {
  const isDarkFooter = theme === "dark";

  // Use data from API or fall back to static/hardcoded values
  const title = data?.title || "";
  const date = data?.createdAt
    ? new Date(data.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
    : "";
  const category = data?.category?.name || "";
  const description = data?.content || "";
  const image = typeof (data?.image || Blogimg) === "string" ? (data?.image || Blogimg).trim() : (data?.image || Blogimg);
  const blogType =
    data?.page_type === "BLOG"
      ? "Blog Article"
      : data?.page_type || "Blog Article";

  const slug = data?.slug || data?._id || "";
  const decodeHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };
  const decodedContent = decodeHTML(decodeHTML(description));
  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const truncateText = (text, length = 120) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  const previewText = truncateText(stripHtml(decodedContent), 120);
  return (
    <Link
      href={`/insights/article/${slug}`}
      className="gs__card"
      data-theme={isDarkFooter ? "section-dark" : "section-light"}
    >
      <div className="gs__card-image">
        <Image src={image} alt={title} width={400} height={250} />
        <span className="gs__blog-type">{blogType}</span>
      </div>

      <div className="gs__card-content">
        <div className="gs__card-top">
          <span className="gs__date">{date}</span>
          <span className="gs__found">{category}</span>
        </div>

        <div className="gs__card-title">{title}</div>

        <div className="gs__card-desc">
          <p>{previewText}</p>
          <span className="gs__card-icon">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.5666 27.1368C29.5593 27.9152 28.9184 28.5382 28.1401 28.5235C27.3652 28.5089 26.7495 27.8674 26.7668 27.0925L27.2672 4.57234L2.43872 29.4008C1.88083 29.9587 0.976304 29.9587 0.41841 29.4008C-0.139482 28.8429 -0.139481 27.9384 0.418411 27.3805L25.2469 2.55204L2.72671 3.05249C1.9518 3.06971 1.31035 2.45409 1.29573 1.67912C1.28104 0.900803 1.90405 0.25995 2.68247 0.252649L29.6065 7.70969e-05L29.8192 0.212741L29.5666 27.1368Z"
                fill="#FE5800"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
