"use client";
import React from "react";
import TitleLine from "./TitleLine";

function Articlecontent({ data }) {
  const content = data?.content || "";
  const tags = data?.tags || [];
  const category = data?.category?.name || "Funding";
  console.log("content", content);
  const decodeHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };
  const decodedContent = decodeHTML(decodeHTML(content));
  return (
    <div className="gs__article-content">
      <div className="gs__container">
        <div className="gs__article-wrapper">
          {/* LEFT SIDEBAR */}
          <aside className="gs__article-sidebar">
            <div className="gs__source">
              <p className="gs__label">Source:</p>
              <span className="gs__found">{category}</span>
            </div>

            {tags.length > 0 && (
              <div className="gs__tags">
                <p className="gs__label">Tags:</p>
                <div className="gs__tag-list">
                  {tags.map((tag) => (
                    <span key={tag._id} className="gs__found">
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>

          {/* ARTICLE CONTENT */}
          <div className="gs__article-body">
            <TitleLine theme="light" />
            <div
              className="gs__article-html-body ck-content"
              dangerouslySetInnerHTML={{ __html: decodedContent }}
            />

            {/* Highlight Card */}
            {/* <div className="gs__related-article">
              <h4>
                <a href="" title="related-article">
                  Bluedrop Medical picks up $1.2M for diabetic foot ulcer
                  detection tech
                </a>
              </h4>
              <span>Related Article</span>
            </div> */}

            <a
              href="#"
              className="go-back-link"
              onClick={(e) => {
                e.preventDefault();
                window.history.back();
              }}
            >
              <span className="go-back-icon">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-0.00104723 4.31784L-0.00124194 4.25339L4.33847 2.16577e-05L5.02819 0.73427L1.82142 3.73616L8.8292 3.71499L8.83249 4.80287L1.82471 4.82404L5.04955 7.8065L4.36428 8.54393L-0.00104723 4.31784Z"
                    fill="#111111"
                  ></path>
                </svg>
              </span>
              Go Back
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articlecontent;
