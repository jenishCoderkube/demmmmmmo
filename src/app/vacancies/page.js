"use client";
import React from "react";
import StatsCardsSection from "@/components/Common/StatsCardsSection";
import VacanciesFilterSection from "@/components/Common/VacanciesFilterSection";
import Pagination_slider from "@/components/Common/Pagination";
import GetInTouch from "@/components/Common/GetInTouch";
import { VacancyCardGrid } from "@/components/Common/VacancyCard";
import TermsHero from "@/components/Common/TermsHero";

function Vacancies({ theme = "dark" }) {
  // const isVacanciesLight = true;
  // const isDarkFooter = theme === "dark";
  const heroData = {
    breadcrumbs: ["Vacancies"],
    title: (
      <>
        Let's shape your career{" "}
        <span className="gs__terms-orange">together</span>
      </>
    ),
    description: (
      <>
        For over 25 years, we have put the experience of our candidates at the
        heart of everything we do. Join our community of over 200,000 MedTech
        professionals by applying for one of our roles or submitting your CV so
        we consider your experience when headhunting for our next role.
      </>
    ),
    button: {
      className: "gs__btn gs__vacancies-btn",
      primaryText: "Upload your CV",
      secondaryText: "Our solutions",
    },
  };

  return (
    <>
      <div
        className="gs__terms gs__vacancies-wp"
        data-theme={theme === "dark" ? "section-dark" : "section-light"}
      >
        <TermsHero
          theme={theme}
          wrapperClassName="gs__vacancies-wp"
          breadcrumbs={heroData.breadcrumbs}
          title={heroData.title}
          middle={<StatsCardsSection />}
          description={heroData.description}
          button={heroData.button}
          rightContentClassName="gs__vacancies-content"
        />
      </div>

      <div className="gs__vacancy-cards-wp">
        <div className="gs__container">
          <VacanciesFilterSection theme="light" />
          <VacancyCardGrid />
          <Pagination_slider theme="light" />
        </div>
      </div>
      <GetInTouch theme="dark" />
    </>
  );
}

export default Vacancies;
