import FAQ from "@/components/Common/FAQ";
import GetInTouch from "@/components/Common/GetInTouch";
import PeopleSlider from "@/components/Common/PeopleSlider";
import QuoteCard from "@/components/Common/QuoteCard";
import StatsCard from "@/components/Common/StatsCard";
import TeamBluidCard from "@/components/Common/TeamBluidCard";
import TermsHero from "@/components/Common/TermsHero";
import TheraphyCard from "@/components/Common/TheraphyCard";
import TitleWithButton from "@/components/Common/TitleWithButton";
import TitleWithText from "@/components/Common/TitleWithText";
import React from "react";

function Casestudies({ theme = "light" }) {
  const isDark = theme === "dark";
  const heroData = {
    title: <>Stories of Business Transformation</>,
    description: (
      <>
        Real success stories from our partnerships with leading MedTech
        companies. Discover how strategic talent placement drives breakthrough
        innovation and sustainable business growth.
        <div
          className="gs__services-btn-row"
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "2rem",
            marginBottom: "0", // No margin bottom, let layout below handle it
          }}
        >
          <button className="gs__btn gs__vacancies-btn">
            <span className="gs__btn-inner">
              <span className="gs__btn-text">Start Your Success Story →</span>
              <span className="gs__btn-text">Our Solutions</span>
            </span>
          </button>
          <button className="gs__btn gs__vacancies-btn gs__white-btn">
            <span className="gs__btn-inner">
              <span className="gs__btn-text">Explore Our Services</span>
              <span className="gs__btn-text">Our Approach</span>
            </span>
          </button>
        </div>
      </>
    ),
  };

  return (
    <>
      <TermsHero
        theme={theme}
        wrapperClassName="gs__vacancies-wp gs__services-wp gs__casestudy-banner"
        title={heroData.title}
        description={heroData.description}
        rightContentClassName="gs__vacancies-content"
      />

      <section
        className="gs__measurable-section"
        style={{
          backgroundImage: `url(/images/measure.jpg)`,
          // "linear-gradient(0deg, #FE5800 0%, #FE5800 100%), url(/images/measur.jpg) lightgray 0px -345.136px / cover no-repeat",
          backgroundBlendMode: "multiply, normal",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#FE5800",
        }}
      >
        <div className="gs__container-measurable-section">
          <div className="gs__measurable-section-grid">
            <div className="gs__measurable-section-content">
              <div className="gs__container">
                {/* <MeasurableCard id="1" /> */}
                <div className="gs__measurable-section-content-title">
                  <h2 className="gs__h2-title">Measurable Impact</h2>
                  <p>
                    Measurable results that reflect successful partnerships,
                    accelerated innovation, and the transformational impact of
                    strategic talent placement in MedTech.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd measurable section count */}
          <div
            className="gs__measurable-section-count"
            data-theme="section-dark"
          >
            <div className="gs__container">
              <div className="gs__measurable-item">
                <StatsCard
                  variant="modern"
                  value="$2B+"
                  highlight="Revenue Impact"
                  description="Combined revenue growth achieved by companies through our strategic placements"
                />
                <StatsCard
                  variant="modern"
                  value="85%"
                  highlight="Success Rate"
                  description="Of our executive placements achieve or exceed performance targets within first 18 months"
                />
              </div>
              <div className="gs__measurable-item">
                <StatsCard
                  variant="modern"
                  value="45"
                  highlight="Days to Placement"
                  description="Average time to present qualified candidates who align with company culture and goals"
                />
                <StatsCard
                  variant="modern"
                  value="15+"
                  highlight="MedTech Sectors"
                  description="From cardiac devices to AI diagnostics, spanning all areas of medical technology innovation"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gs__casestudies-wp">
        <div>
          <TitleWithText theme="light"
            page="services"
          />
          <div className="gs__expertise-btn-txt">
            <TitleWithButton theme="light" />
          </div>
          <TheraphyCard theme="light" />
        </div>
        <QuoteCard />
        <div className="gs__theraphy-card-reverse">
          <div className="gs__expertise-btn-txt">
            <TitleWithButton theme="light" />
          </div>
          <TheraphyCard theme="light" />
        </div>
        <QuoteCard />

        <div>
          <TitleWithText theme="light"
            page="services"
          />
          <div className="gs__expertise-btn-txt">
            <TitleWithButton theme="light" />
          </div>
          <TheraphyCard theme="light" />
        </div>
        <QuoteCard />
        <div className="gs__theraphy-card-reverse">
          <div className="gs__expertise-btn-txt">
            <TitleWithButton theme="light" />
          </div>
          <TheraphyCard theme="light" />
        </div>
        <QuoteCard />
        <div>
          <div className="gs__expertise-btn-txt">
            <TitleWithButton theme="light" />
          </div>
          <TheraphyCard theme="light" />
        </div>
        <QuoteCard />
      </div>
      <div>
        <PeopleSlider theme="light" />
      </div>
      <FAQ theme="light" />
      <GetInTouch />
    </>
  );
}

export default Casestudies;
