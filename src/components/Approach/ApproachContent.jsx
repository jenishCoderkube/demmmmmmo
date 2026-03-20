"use client";

import React from "react";
import FAQ from "@/components/Common/FAQ";
import GetInTouch from "@/components/Common/GetInTouch";
import { useQuery } from "@tanstack/react-query";
import { serviceService } from "@/app/services/serviceService";

export default function ApproachContent() {
  const { data: approachData, isLoading } = useQuery({
    queryKey: ["approaches"],
    queryFn: () => serviceService.getApproaches(),
  });

  if (isLoading) {
    return (
      <div
        className="gs__loading"
        style={{ padding: "100px 0", textAlign: "center" }}
      >
        <p>Loading Approach...</p>
      </div>
    );
  }

  const data = approachData?.data || {};
  const hero = data.hero || {};
  const howWeDoIt = data.how_we_do_it || {};
  const promise = data.promise || {};
  const faqItems = (promise.items || []).map((item) => ({
    question: item.title,
    answer: item.description,
  }));

  const isDarkFooter = true;

  return (
    <>
      <div
        className="gs__term gs__expert-banner gs__approach-banner"
        data-theme={isDarkFooter ? "section-dark" : "section-light"}
      >
        <div className="gs__container">
          <div className="gs__terms-container">
            {/* LEFT SIDE */}
            <div className="gs__terms-left">
              {hero.title && (
                <div
                  className="gs__h1-title"
                  dangerouslySetInnerHTML={{ __html: hero.title }}
                />
              )}
            </div>

            {/* RIGHT SIDE */}
            <div className="gs__terms-right">
              <div className="expert-content">
                {hero.subtitle && (
                  <p className="gs__terms-nav">{hero.subtitle}</p>
                )}
              </div>
              <div>
                {hero.description && (
                  <h6 className="gs__terms-text">{hero.description}</h6>
                )}
                {hero.buttons && hero.buttons.length > 0 && (
                  <div className="gs_banner-btn">
                    {hero.buttons.map((btn, idx) => (
                      <button
                        key={idx}
                        className={`gs__btn ${idx === 1 ? "gs__white-btn" : ""}`}
                      >
                        <span className="gs__btn-inner">
                          <span className="gs__btn-text">{btn.label}</span>
                          <span className="gs__btn-text">{btn.label}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {(howWeDoIt.title || howWeDoIt.subtitle) && (
        <div className="gs__how-we-do">
          {howWeDoIt.title && (
            <div
              className="gs__how-we-do-title gs__h1-title"
              dangerouslySetInnerHTML={{ __html: howWeDoIt.title }}
            />
          )}

          {howWeDoIt.subtitle && (
            <div
              className="gs__how-we-do-desc"
              dangerouslySetInnerHTML={{ __html: howWeDoIt.subtitle }}
            />
          )}
        </div>
      )}
      <FAQ
        FAQinfoShow={!!promise.description}
        data={faqItems}
        title={promise.title}
        subtitle={promise.description}
      />
      <GetInTouch theme="light" title={data.cta?.title} />
    </>
  );
}
