"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import CascadeSlider from "@/components/Common/CascadeSlider";
import {
  CascadeSliderCoreValuesCard,
  JourneyCard,
} from "@/components/Common/CascadeSliderCards";
import TeamCard from "@/components/Common/TeamCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useQuery } from "@tanstack/react-query";
import { serviceService } from "@/app/services/serviceService";
import GetInTouch from "@/components/Common/GetInTouch";

const Videoimg = "/images/video-img.png";

export default function AboutContent() {
  const { data: aboutData, isLoading } = useQuery({
    queryKey: ["aboutData"],
    queryFn: () => serviceService.getAboutData(),
  });

  useEffect(() => {
    if (typeof window === "undefined" || isLoading) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches)
      return;

    gsap.registerPlugin(ScrollTrigger);

    const section = document.querySelector(".gs__about-journey");
    if (!section) return;
    const gradientLayer = section.querySelector(".moving-gradient");

    const ctx = gsap.context(() => {
      // Moving gradient
      if (gradientLayer) {
        gsap.fromTo(
          gradientLayer,
          { y: 0 },
          {
            y: "-35vh",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }

      // Reveal cards on scroll
      const cards = gsap.utils.toArray(
        ".gs__about-journey .journey-scroll-area .gs__journey-card",
      );
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 100 },
          {
            autoAlpha: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              end: "top 70%",
              scrub: 1,
            },
          },
        );
      });

      // Fade header as we reach the end of the cards
      gsap.to(".sticky-header-content", {
        opacity: 0,
        scale: 0.9,
        ease: "none",
        scrollTrigger: {
          trigger: ".journey-scroll-area",
          start: "bottom 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [isLoading]);

  if (isLoading) {
    return (
      <div
        className="gs__loading"
        style={{ padding: "100px 0", textAlign: "center" }}
      >
        <p>Loading About...</p>
      </div>
    );
  }

  const data = aboutData?.data || {};
  const ceoLetter = data.ceo_letter || {};
  const coreValues = data.core_values || {};
  const journey = data.journey || {};
  const teamMembersSection = data.team_members || {};
  const cta = data.cta || {};

  const icons = ["circles", "circle", "lines"];
  const dynamicCoreValues = (coreValues.items || []).map((item, index) => ({
    id: item._id || String(index),
    title: item.title,
    description: item.description,
    icon: icons[index % icons.length],
  }));

  const dynamicJourneyItems = (journey.milestones || []).map((m) => ({
    id: m._id || m.year,
    title: m.title,
    year: m.year,
    description: m.description,
    image: m.background_image,
  }));

  const dynamicTeamMembers = (teamMembersSection.members || []).map((m) => ({
    id: m._id || m.name,
    name: m.name,
    role: m.designation,
    photo: m.image,
    experienceLabel: m.experience,
    bio: m.description,
  }));

  return (
    <>
      <div
        className="gs__terms gs__contact-wp gs__about-wp"
        data-theme="section-dark"
      >
        <div className="gs__container">
          <div className="gs__terms-container">
            {/* LEFT SIDE */}
            <div className="gs__terms-left">
              {ceoLetter.title ? (
                <div
                  className="gs__h1-title"
                  dangerouslySetInnerHTML={{ __html: ceoLetter.title }}
                />
              ) : (
                <h1 className="gs__h1-title">
                  Letter from <br /> Our{" "}
                  <span className="gs__terms-orange">CEO</span>
                </h1>
              )}
            </div>

            {/* RIGHT SIDE */}
            <div className="gs__terms-right gs__about-ceo-section">
              <div className="gs__about-ceo-card">
                <div className="gs__about-ceo-photo">
                  <Image
                    src={ceoLetter.image || "/images/people01.jpg"}
                    alt={ceoLetter.name || "CEO"}
                    width={320}
                    height={480}
                    className="gs__about-ceo-img"
                  />
                </div>
                <div className="gs__about-ceo-meta">
                  <h5 className="gs__about-ceo-name">{ceoLetter.name}</h5>
                  <p className="gs__about-ceo-role">{ceoLetter.designation}</p>
                  <p className="gs__about-ceo-exp">{ceoLetter.experience}</p>
                </div>
              </div>

              <div className="gs__about-ceo-content">
                {ceoLetter.content ? (
                  <div
                    className="gs__about-ceo-text-wp"
                    dangerouslySetInnerHTML={{ __html: ceoLetter.content }}
                  />
                ) : (
                  <>
                    <p className="gs__about-ceo-quote">
                      “{" "}
                      <span className="gs__about-ceo-text-strong">
                        When I founded Guided Solutions at 26{" "}
                      </span>
                      , I had a simple but ambitious vision: to build an
                      executive search firm that would genuinely differentiate
                      itself in how it delivers talent for disruptive MedTech
                      companies.
                    </p>
                    <p className="gs__about-ceo-text">
                      <span className="gs__about-ceo-text-strong">
                        Twenty-five years later,{" "}
                      </span>
                      that vision has evolved into something I&apos;m deeply
                      proud of. We&apos;ve placed over 10,000 professionals,
                      served 600+ companies, and opened offices across six
                      countries - but more importantly, we&apos;ve stayed true
                      to our founding principle that character matters as much
                      as competence.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Core Values – cascade slider (common component) */}
      <section className="gs__about-core-values" data-theme="section-dark">
        <div className="gs__container">
          <div className="gs__about-core-values-header">
            <h2 className="gs__about-core-values-title">
              {coreValues.title || "Our Core Values"}
            </h2>
            <p className="gs__about-core-values-subtitle">
              {coreValues.description ||
                "The principles that guide every decision we make and every leader we place, ensuring lasting impact on human health."}
            </p>
          </div>

          <CascadeSlider
            id="cascade-slider"
            items={dynamicCoreValues}
            renderCard={(item) => <CascadeSliderCoreValuesCard item={item} />}
            containerClassName="gs__about-core-values-slider-wp"
            showDots
            showArrows
          />
        </div>
      </section>

      {/* Our Journey */}
      <section className="gs__about-journey" data-theme="section-dark">
        <div className="gs__container">
          <div className="main-wrapper">
            <div className="moving-gradient" aria-hidden="true" />

            <div className="sticky-header-content">
              <div className="gs__about-journey-header">
                <h2 className="gs__about-journey-title">
                  {journey.title || "Our Journey"}
                </h2>
                <p className="gs__about-journey-subtitle">
                  {journey.description ||
                    "From a bold idea to a global partner for MedTech leadership—here are a few milestones that shaped Guided Solutions."}
                </p>
              </div>
            </div>

            <div className="journey-scroll-area">
              <div className="gs__about-journey-card">
                <div className="gs__about-journey-grid-inner">
                  <div className="gs__about-journey-grid">
                    {dynamicJourneyItems
                      .filter((_, idx) => idx % 2 === 0)
                      .map((item) => (
                        <JourneyCard key={item.id} item={item} />
                      ))}
                  </div>
                  <div className="gs__about-journey-grid">
                    {dynamicJourneyItems
                      .filter((_, idx) => idx % 2 === 1)
                      .map((item) => (
                        <JourneyCard key={item.id} item={item} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="gs__about-team" data-theme="section-dark">
        <div className="gs__container">
          <div className="gs__about-team-header">
            <h2 className="gs__about-team-title">
              {teamMembersSection.title?.includes("Team") ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: teamMembersSection.title.replace(
                      "Team",
                      '<span class="gs__terms-orange">Team</span>',
                    ),
                  }}
                />
              ) : (
                teamMembersSection.title || (
                  <>
                    Our <span className="gs__terms-orange">Team</span>
                  </>
                )
              )}
            </h2>
            <p className="gs__about-team-subtitle">
              {teamMembersSection.description ||
                "Meet the experienced professionals driving innovation in MedTech executive search across the globe."}
            </p>
          </div>

          <div className="gs__about-team-grid">
            {dynamicTeamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
      <GetInTouch
        title={cta.title}
        btnText={cta.button_label}
        btnLink={cta.button_link}
        description={cta.description}
      />
    </>
  );
}
