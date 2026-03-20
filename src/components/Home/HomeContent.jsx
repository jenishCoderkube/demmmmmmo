"use client";
import React from "react";
import FAQ from "@/components/Common/FAQ";
import GetInTouch from "@/components/Common/GetInTouch";
import HomeBanner from "@/components/Common/HomeBanner";
import HomeService from "@/components/Common/HomeService";
import PeopleSlider from "@/components/Common/PeopleSlider";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import ProblemSliderCard from "@/components/Common/ProblemSliderCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CascadeSlider from "../Common/CascadeSlider";
import { CascadeSliderCoreValuesCard } from "../Common/CascadeSliderCards";
import { HomeCascadeSliderCoreValuesCard } from "../Common/HomeCascadeSliderCards";
import HomeCascadeSlider from "../Common/HomeCascadeSlider";
import { Images } from "lucide-react";

const Videoimg = "/images/video-img.png";
const Globe = "/images/Globe.png";

export default function HomeContent({
  theme = "dark",
  homeData,
  teamSectionData,
}) {
  const isDarkFooter = theme === "dark";

  const data = homeData?.data || {};
  const teamSection = teamSectionData?.data || {};
  const hero = data.hero || {};
  const impact = data.impact || [];
  const whyGs = data.why_gs || {};
  const theWhy = data.the_why || {};
  const servicesSection = data.services_section || {};
  const problemsSolve = data.problems_solve || {};
  const globalNetwork = data.global_network || {};
  const trustedBy = data.trusted_by || {};
  const faqSection = data.faq_section || {};
  const cta = data.cta || {};
  const icons = ["circles", "circle", "lines"];
  const dynamicCoreValues = (whyGs.items || []).map((item, index) => ({
    id: item._id || String(index),
    title: item.title,
    description: item.description,
    icon: icons[index % icons.length],
  }));

  return (
    <>
      <HomeBanner />
      {/* Our Core Values – cascade slider (common component) */}
      <section
        className="gs__about-core-values gs__home-guided-slider"
        data-theme="section-dark"
      >
        <div className="gs__container">
          <div className="gs__also-visit-container">
            {whyGs.title ? (
              <div
                className="gs__h2-title"
                dangerouslySetInnerHTML={{ __html: whyGs.title }}
              />
            ) : (
              <h2 className="gs__h2-title">
                Why <span className="gs__terms-orange"> Guided Solutions</span>
              </h2>
            )}
            <p>
              {whyGs.subtitle ||
                "210+ years of collective MedTech experience - dedicated to your success"}
            </p>
          </div>
        </div>
        <HomeCascadeSlider
          id="home-cascade-slider"
          items={dynamicCoreValues}
          renderCard={(item) => <HomeCascadeSliderCoreValuesCard item={item} />}
          containerClassName="gs__about-core-values-slider-wp"
          showDots
          showArrows
        />
      </section>
      <section className="gs__home-text-sec">
        <div className="gs__container">
          <div className="gs__home-text-wp">
            {impact.map((item, index) => (
              <div className="gs__home-text" key={index}>
                <p>{item.title}</p>
                <h2 className="gs__h2-title">{item.description}</h2>
                {item.sub_description && <p>{item.sub_description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="gs__why-sec"
        data-theme={isDarkFooter ? "section-dark" : "section-light"}
      >
        <div className="gs__container">
          <div className="gs__why-content">
            {theWhy.title ? (
              <div
                className="gs__h1-title"
                dangerouslySetInnerHTML={{ __html: theWhy.title }}
              />
            ) : (
              <h2 className="gs__h1-title">
                {" "}
                The
                <span className="gs__terms-orange">"Why"</span>
              </h2>
            )}
            <p>
              {theWhy.subtitle ||
                "Hear from our team about what drives our passion for connecting exceptional talent with MedTech companies changing lives."}
            </p>
            <button
              className="gs__video-img-wp"
              aria-label="Play video about The Why"
              type="button"
            >
              <div className="gs__video-img">
                <Image
                  src={theWhy.thumbnail?.trim() || Videoimg}
                  alt="Video thumbnail"
                  width={1120}
                  height={630}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="gs__video-logo">
                <Image
                  src="/images/footer-logo.svg"
                  alt="Guided Solutions Logo"
                  width={120}
                  height={40}
                />
              </div>
            </button>
          </div>
        </div>
      </section>
      <HomeService
        title={servicesSection.title}
        subtitle={servicesSection.subtitle}
        items={servicesSection.items?.map((item) => ({
          title: item.title,
          desc: item.description,
          link:
            "/services/" + (item.title?.toLowerCase().replace(/ /g, "-") || ""),
          btn1: "Our Approach",
          btn2: "Case Studies",
        }))}
      />
      <section
        className="gs__home-problem-slider-sec"
        data-theme={isDarkFooter ? "section-dark" : "section-light"}
      >
        <div className="gs__container">
          <div className="gs__also-visit-container">
            {problemsSolve.title ? (
              <div
                className="gs__h2-title"
                dangerouslySetInnerHTML={{ __html: problemsSolve.title }}
              />
            ) : (
              <h2 className="gs__h2-title">
                The Problems <span className="gs__terms-orange"> We Solve</span>
              </h2>
            )}
            <p>
              {problemsSolve.subtitle ||
                "From early-stage innovators to PE-backed portfolios, we understand the leadership challenges at every inflection point."}
            </p>
          </div>
        </div>
        <div className="gs__blog-page-article gs__blog-slider gs_article-slider gs__expertise-slider gs__home-problem-slider">
          <div className="gs__card-wrapper">
            {/* Swiper with custom navigation buttons */}
            <div
              className="custom-swiper-navigation-wp"
              style={{ position: "relative" }}
            >
              <Swiper
                spaceBetween={24}
                slidesPerView={3.5}
                navigation={{
                  nextEl: ".custom-swiper-button-next",
                  prevEl: ".custom-swiper-button-prev",
                }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{
                  0: { slidesPerView: 1.4, spaceBetween: 8 },
                  480: { slidesPerView: 2.5, spaceBetween: 12 },
                  768: { slidesPerView: 3.2, spaceBetween: 16 },
                  1024: { slidesPerView: 3.3, spaceBetween: 20 },
                  1280: { slidesPerView: 3.5, spaceBetween: 24 },
                }}
                observer={true}
                observeParents={true}
                modules={[Navigation, Autoplay]}
              >
                {problemsSolve.items?.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <ProblemSliderCard
                      label={item.title}
                      description={item.problem}
                      title={item.title}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <div className="gs__home-people-slider">
        <PeopleSlider
          theme="light"
          title={teamSection.title}
          description={teamSection.description}
          slides={teamSection.members}
        />
      </div>
      <section
        className="gs__network-sec"
        data-theme={isDarkFooter ? "section-dark" : "section-light"}
      >
        <div className="gs__container">
          <div className="gs__network-content">
            {globalNetwork.title ? (
              <div
                className="gs__h1-title"
                dangerouslySetInnerHTML={{ __html: globalNetwork.title }}
              />
            ) : (
              <h2 className="gs__h1-title">
                Global Network, <br />{" "}
                <span className="gs__terms-orange">Personal Touch</span>
              </h2>
            )}
            <div className="gs__globe-img">
              <Image src={Globe} alt="glob-img" width={590} height={600} />
            </div>
            <section className="gs__stats-cards-section">
              <div className="gs__container">
                <div className="gs__stats-cards-contact">
                  {globalNetwork.stats?.map((stat, idx) => (
                    <div className="gs__stats-card-contact" key={idx}>
                      <div className="gs__stats-card-value">
                        <div className="gs__btn-inner">
                          <span className="gs__btn-text">{stat.value}</span>
                          <span className="gs__btn-text">{stat.value}</span>
                        </div>
                      </div>
                      <h3 className="gs__h3-light-title">{stat.label}</h3>
                      <div className="gs__stats-card-description">
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section
        className="gs__measurable-section gs__marquee-slider"
        style={{
          backgroundImage: `url(/images/customer-banner.jpg)`,
          backgroundBlendMode: "multiply, normal",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#FE5800",
        }}
      >
        <div className="gs__container">
          <div className="gs__trusted-customers-row">
            <div className="gs__trusted-box">
              <span className="gs__small-text">Trusted by</span>
              <h2 className="gs__h2-title">
                {trustedBy.title?.split(" ")[2] || "600+"}
              </h2>
              <span className="gs__large-text">
                {trustedBy.title?.split(" ")[3] || "Customers"}
              </span>
            </div>

            <div className="gs__trusted-logos">
              <div className="gs__trusted-track">
                {[...trustedBy.logos, ...trustedBy.logos].map((logo, idx) => {
                  const trimmedLogo = logo?.trim();
                  if (!trimmedLogo) return null;
                  return (
                    <div className="gs__logo-item" key={idx}>
                      <Image
                        src={trimmedLogo}
                        alt={`customer-logo-${idx}`}
                        width={150}
                        height={50}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="gs__trusted-logos ">
            <div className="gs__trusted-track gs_marquee-2">
              {[...trustedBy.logos, ...trustedBy.logos].map((logo, idx) => {
                const trimmedLogo = logo?.trim();
                if (!trimmedLogo) return null;
                return (
                  <div className="gs__logo-item" key={idx}>
                    <Image
                      src={trimmedLogo}
                      alt={`customer-logo-${idx}`}
                      width={150}
                      height={50}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <div className="gs__home-faq">
        <FAQ
          title={faqSection.title}
          data={faqSection.items?.map((item) => ({
            question: item.question,
            answer: item.answer,
          }))}
        />
      </div>
      <GetInTouch
        title={cta.title}
        btnText={cta.button_label}
        btnLink={cta.button_link}
      />
    </>
  );
}
