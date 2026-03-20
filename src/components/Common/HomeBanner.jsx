import React from "react";

function HomeBanner({ theme = "dark", title }) {
  const isDarkFooter = theme === "dark";
  return (
    <>
      <section
        className="gs__home-banner"
        data-theme={isDarkFooter ? "section-dark" : "section-light"}
      >
        <div className="gs__container">
          <div className="gs__home-banner-content">
            {title ? (
              <div
                className="gs__h2-title"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            ) : (
              <h1 className="gs__h2-title">
                We find the people <br /> who move MedTech forward.
              </h1>
            )}
            <div className="gs_banner-btn">
              <button className="gs__btn">
                <span className="gs__btn-inner">
                  <span className="gs__btn-text">
                    <span>Our Solutions </span>
                    <span>
                      <svg width="10" height="10" viewBox="0 0 9 9" fill="none">
                        <path
                          d="M8.83203 4.23926V4.30371L4.47949 8.54395L3.79199 7.80762L7.00781 4.81543H0V3.72754H7.00781L3.79199 0.735352L4.47949 0L8.83203 4.23926Z"
                          fill="#FE5800"
                        />
                      </svg>
                    </span>
                  </span>
                  <span className="gs__btn-text">
                    <span>Our Solutions </span>
                    <span>
                      <svg width="10" height="10" viewBox="0 0 9 9" fill="none">
                        <path
                          d="M8.83203 4.23926V4.30371L4.47949 8.54395L3.79199 7.80762L7.00781 4.81543H0V3.72754H7.00781L3.79199 0.735352L4.47949 0L8.83203 4.23926Z"
                          fill="#FE5800"
                        />
                      </svg>
                    </span>
                  </span>
                </span>
              </button>
              <button className="gs__btn gs__white-btn">
                <span className="gs__btn-inner">
                  <span className="gs__btn-text">Our Approach</span>
                  <span className="gs__btn-text">Our Approach</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeBanner;
