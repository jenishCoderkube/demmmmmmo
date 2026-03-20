"use client";
import { useQuery } from "@tanstack/react-query";
import { serviceService } from "@/app/services/serviceService";
import TermsHero from "@/components/Common/TermsHero";
import ProblemCard from "@/components/Common/ProblemCard";
import StatsCard from "@/components/Common/StatsCard";
import TitleWithText from "@/components/Common/TitleWithText";
import TitleWithButton from "@/components/Common/TitleWithButton";
import TheraphyCard from "@/components/Common/TheraphyCard";
import QuoteCard from "@/components/Common/QuoteCard";
import PeopleSlider from "@/components/Common/PeopleSlider";
import FAQ from "@/components/Common/FAQ";
import TeamBluidCard from "@/components/Common/TeamBluidCard";

export default function ServiceSlugContent({
  slug,
  pageType,
  theme = "light",
}) {
  const { data: serviceData, isLoading: isServiceLoading } = useQuery({
    queryKey: ["services", pageType],
    queryFn: () => serviceService.getServices({ page_type: pageType }),
    enabled: !!pageType,
  });

  const { data: faqData } = useQuery({
    queryKey: ["faqs"],
    queryFn: () => serviceService.getFaqs(),
  });
  const { data: teamSectionData, isLoading: isTeamLoading } = useQuery({
    queryKey: ["teamSectionData"],
    queryFn: () => serviceService.getTeamSectionData(),
  });

  const service = serviceData?.data?.services?.[0];
  const sections = service?.sections || [];

  const problemsSection = sections.find((s) => s.type === "problems");
  const teamsSection = sections.find((s) => s.type === "teams");
  const impactSection = sections.find((s) => s.type === "impact");

  if (isServiceLoading) {
    return (
      <div className="gs__loading">
        <p>Loading...</p>
      </div>
    );
  }

  const heroData = {
    breadcrumbs: ["Services"],
    title: <>{service?.title || "Service Title"}</>,
    description: (
      <>
        {service?.description || "Service Description"}
        <div
          className="gs__services-btn-row"
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "2rem",
            marginBottom: "0",
          }}
        >
          <button className="gs__btn gs__vacancies-btn">
            <span className="gs__btn-inner">
              <span className="gs__btn-text">
                Find Your Next Professional →
              </span>
              <span className="gs__btn-text">
                Find Your Next Professional →
              </span>
            </span>
          </button>
          <button className="gs__btn gs__vacancies-btn gs__white-btn">
            <span className="gs__btn-inner">
              <span className="gs__btn-text">Our solutions</span>
              <span className="gs__btn-text">Our solutions</span>
            </span>
          </button>
        </div>
      </>
    ),
  };

  const readyToFindData = {
    title: (
      <>
        Ready to Find Leadership <br />{" "}
        <span className="gs__eyebrow">That Changes Everything?</span>
      </>
    ),
    description: (
      <>
        The right organisational design isn't just about efficiency—it's about
        creating the conditions for innovation, collaboration, and
        patient-focused outcomes. We help MedTech companies build structures
        that scale.
        <div
          className="gs__services-btn-row"
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "2rem",
            marginBottom: "0",
          }}
        >
          <button className="gs__btn gs__vacancies-btn">
            <span className="gs__btn-inner">
              <span className="gs__btn-text">Start Your Search Today →</span>
              <span className="gs__btn-text">Our solutions</span>
            </span>
          </button>
          <button className="gs__btn gs__vacancies-btn gs__white-btn">
            <span className="gs__btn-inner">
              <span className="gs__btn-text">Explore Services</span>
              <span className="gs__btn-text">Our approach</span>
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
        wrapperClassName="gs__vacancies-wp gs__services-wp"
        breadcrumbs={heroData.breadcrumbs}
        title={heroData.title}
        description={heroData.description}
        rightContentClassName="gs__vacancies-content"
      />

      {/* Problem section start */}
      {problemsSection && problemsSection.items?.length > 0 && (
        <section className="gs__problem-section" data-theme="section-dark">
          <div className="gs__container-problem-section">
            <div className="gs__problem-section-grid">
              <div className="gs__problem-section-content">
                {problemsSection.items.slice(0, 2).map((item, idx) => (
                  <ProblemCard
                    key={item._id || idx}
                    label={problemsSection.title}
                    title={item.description}
                    description={item.secondary_description}
                  />
                ))}
              </div>
              <div className="gs__problem-section-content">
                {problemsSection.items.slice(2, 4).map((item, idx) => (
                  <ProblemCard
                    key={item._id || idx}
                    label={problemsSection.title}
                    title={item.description}
                    description={item.secondary_description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Measurable section start */}
      <section
        className="gs__measurable-section"
        style={{
          backgroundImage: `url(/images/measure.jpg)`,
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
                <div className="gs__measurable-section-content-title">
                  <h2 className="gs__h2-title">
                    {impactSection?.title || "Measurable Impact"}
                  </h2>
                  <p>
                    {impactSection?.description ||
                      serviceData?.data?.impact_description ||
                      "Our success is measured not just in placements, but in the lasting transformation our leaders create."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {impactSection && impactSection.items?.length > 0 && (
            <div
              className="gs__measurable-section-count"
              data-theme="section-dark"
            >
              <div className="gs__container">
                <div className="gs__measurable-item">
                  {impactSection.items.slice(0, 2).map((item, idx) => (
                    <StatsCard
                      key={item._id || idx}
                      variant="modern"
                      value={item.value}
                      highlight={item.label}
                      description={item.description}
                    />
                  ))}
                </div>
                <div className="gs__measurable-item">
                  {impactSection.items.slice(2, 4).map((item, idx) => (
                    <StatsCard
                      key={item._id || idx}
                      variant="modern"
                      value={item.value}
                      highlight={item.label}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Teams We Build section - only for TEAM_BUILD types */}
      {service?.page_type === "TEAM_BUILD" && teamsSection && (
        <div className="gs__team-build-wp">
          <TitleWithText
            page="services"
            customTitle={teamsSection.title}
            customDescription={teamsSection.description}
          />
          <div className="gs__team-bluid">
            {teamsSection.team_build?.map((team, idx) => {
              const isReverse = idx % 2 !== 0;
              const isLastReverse =
                isReverse && idx === teamsSection.team_build.length - 1;
              const reverseClass = isLastReverse
                ? "gs__theraphy-card-reverse gs__theraphy-card-reverse-last"
                : isReverse
                  ? "gs__theraphy-card-reverse"
                  : "";
              console.log(team.roles);
              return (
                <div key={team._id || idx} className={reverseClass}>
                  <TeamBluidCard
                    title={team.group_title}
                    roles={team.roles}
                    description={team.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      <TitleWithText theme="light" page="services" />
      <div className="gs__expertise-btn-txt">
        <TitleWithButton theme="light" />
      </div>
      <TheraphyCard theme="light" />
      <QuoteCard />
      <div className="gs__theraphy-card-reverse gs__casestudy-card">
        <div className="gs__expertise-btn-txt">
          <TitleWithButton theme="light" />
        </div>
        <TheraphyCard theme="light" />
      </div>
      <QuoteCard />
      <PeopleSlider
        theme="light"
        title={teamSectionData?.data?.title}
        description={teamSectionData?.data?.description}
        slides={teamSectionData?.data?.members}
      />
      <div className="gs__services-faq">
        <FAQ theme="light" data={faqData?.data?.faqs || []} />
      </div>
      <section className="gs__ready-to-find-section">
        <TermsHero
          theme={"dark"}
          wrapperClassName="gs__vacancies-wp gs__ready-to-find-wp"
          title={readyToFindData.title}
          description={readyToFindData.description}
          rightContentClassName="gs__vacancies-content"
        />
      </section>
    </>
  );
}
