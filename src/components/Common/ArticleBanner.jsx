"use client";
import React from "react";
import Image from "next/image";
const Blogimg = "/images/blog-img.png";
const playstore = "/images/playstore.png";

function ArticleBanner({ data, LastUpdated = true, LastUpdatedicon = false }) {
  const title = data?.title || "";
  const category = data?.category?.name || "Funding";
  const date = data?.createdAt
    ? new Date(data.createdAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";
  const image = typeof (data?.image || Blogimg) === "string" ? (data?.image || Blogimg).trim() : (data?.image || Blogimg);
  const pageType =
    data?.page_type === "BLOG" ? "Blog" : data?.page_type || "Blog";

  return (
    <>
      <div className="gs__terms gs_article-banner">
        <div className="gs__container">
          <div className="gs__terms-container">
            <nav className="gs__breadcrumb">
              <span>Home</span>
              <span>
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.83203 4.23926V4.30371L4.47949 8.54395L3.79199 7.80762L7.00781 4.81543H0V3.72754H7.00781L3.79199 0.735352L4.47949 0L8.83203 4.23926Z"
                    fill="#A2A2A2"
                  />
                </svg>
              </span>
              <span>Insights</span>
              <span>
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.83203 4.23926V4.30371L4.47949 8.54395L3.79199 7.80762L7.00781 4.81543H0V3.72754H7.00781L3.79199 0.735352L4.47949 0L8.83203 4.23926Z"
                    fill="#A2A2A2"
                  />
                </svg>
              </span>
              <span className="active">{pageType}</span>
            </nav>
            {/* LEFT SIDE */}
            <div className="gs__terms-left">
              <h1 className="gs__h1-title">{title}</h1>
            </div>

            {/* RIGHT SIDE */}
            <div className="gs__terms-right">
              {LastUpdatedicon && (
                <div className="gs__subscribe">
                  <div className="gs__playsore-img">
                    <Image
                      src={playstore}
                      alt="playstore"
                      width={120}
                      height={40}
                    />
                  </div>
                  <span className="gs_subscribe-title">GS MedTech Podcast</span>
                  <button className="gs__btn gs__white-btn gs__black-btn">
                    <span className="gs__btn-inner">
                      <span className="gs__btn-text">Subscribe</span>
                      <span className="gs__btn-text">Subscribe</span>
                    </span>
                  </button>
                </div>
              )}
              <div className="gs_-article-img-content">
                <div className="gs__article-img">
                  {data?.page_type === "PODCAST" && data?.video_url ? (
                    <div
                      className="gs__video-wrapper"
                      style={{
                        position: "relative",
                        paddingBottom: "56.25%",
                        height: 0,
                        overflow: "hidden",
                      }}
                    >
                      <iframe
                        width="800"
                        height="450"
                        src={`https://www.youtube.com/embed/${data.video_url.split("v=")[1]?.split("&")[0] || data.video_url.split("/").pop()}?autoplay=1&mute=1`}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }}
                      ></iframe>
                    </div>
                  ) : (
                    <Image
                      src={image}
                      alt={title}
                      width={800}
                      height={450}
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
                <div className="gs__article-info">
                  <span className="gs__found">{category}</span>
                  <div className="gs__card-top">
                    <span className="gs__date">{date}</span>
                    {LastUpdated && (
                      <span className="gs__date">Last updated: {date}</span>
                    )}
                  </div>
                  <div className="gs__social">
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 1.4325C0 0.64125 0.6575 0 1.46875 0H18.5312C19.3425 0 20 0.64125 20 1.4325V18.5675C20 19.3587 19.3425 20 18.5312 20H1.46875C0.6575 20 0 19.3587 0 18.5675V1.4325ZM6.17875 16.7425V7.71125H3.1775V16.7425H6.17875ZM4.67875 6.4775C5.725 6.4775 6.37625 5.785 6.37625 4.9175C6.3575 4.03125 5.72625 3.3575 4.69875 3.3575C3.67125 3.3575 3 4.0325 3 4.9175C3 5.785 3.65125 6.4775 4.65875 6.4775H4.67875ZM10.8138 16.7425V11.6988C10.8138 11.4288 10.8337 11.1587 10.9137 10.9662C11.13 10.4275 11.6238 9.86875 12.4538 9.86875C13.54 9.86875 13.9738 10.6962 13.9738 11.9113V16.7425H16.975V11.5625C16.975 8.7875 15.495 7.4975 13.52 7.4975C11.9275 7.4975 11.2137 8.3725 10.8138 8.98875V9.02H10.7938L10.8138 8.98875V7.71125H7.81375C7.85125 8.55875 7.81375 16.7425 7.81375 16.7425H10.8138Z"
                          fill="#111111"
                        />
                      </svg>
                    </span>
                    <span>
                      <svg
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.114 0H5.415L10.1325 5.99733L15.795 0H17.4885L10.7775 6.81867L18 16H12.702L7.7745 9.73733L1.692 16H0L7.1295 8.91733L0.114 0ZM2.205 0.941333L13.311 15.0587H15.9105L4.8045 0.941333H2.205Z"
                          fill="#111111"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleBanner;
