import Link from "next/link";
import Image from "next/image";
import React from "react";
import "@/app/globals.css";

const WhitepaperCard = ({ theme = "dark", data }) => {
  const isDarkFooter = theme === "dark";

  // Use data from props or fallback to static content if data is not provided
  const title = data?.title || "300 Investors in MedTech Report";
  const content =
    data?.content ||
    "Pinpointing venture capital firms actively investing in your sector will ensure your efforts are targeted and efficient, allowing you to streamline your journey to secure funding";
  const image = (data?.image || "/images/ebook-img.jpg").trim();
  const tags = data?.tags || [
    { name: "Investors" },
    { name: "VC Trends" },
    { name: "Funding" },
  ];
  const category = data?.category?.name || "EBOOK";
  const slug = data?.slug || "#";

  return (
    <Link
      href={`/insights/whitepaper/${slug}`}
      className="gs__card gs__whitepaper-card"
      data-theme={isDarkFooter ? "section-dark" : "section-light"}
    >
      <div className="gs__card-image">
        <Image src={image} alt={title} width={400} height={250} />
        <span className="gs__blog-type">{category}</span>
      </div>

      <div className="gs__card-content">
        <div className="gs__card-title">{title}</div>
        <div className="gs__card-desc">
          <p dangerouslySetInnerHTML={{ __html: content }} />
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
        <div className="gs__card-top">
          <span className="gs__found">{category}</span>
        </div>
      </div>
    </Link>
  );
};

export default WhitepaperCard;
