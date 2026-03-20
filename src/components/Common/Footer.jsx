"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { darkFooterRoutes } from "@/config/footerTheme";
import Image from "next/image";
const linkedin = "/images/linkedin.svg";
const twitter = "/images/twitter.svg";

export default function Footer({ theme = "dark" }) {
  const pathname = usePathname();

  const isDarkFooter = darkFooterRoutes.includes(pathname) || theme === "dark";
  return (
    <footer
      className=""
      data-theme={isDarkFooter ? "footer-dark" : "footer-light"}
    >
      <div className="gs__top-footer">
        <div className="gs__container">
          <div className="gs__footer__grid">
            {/* LEFT SIDE */}
            <div className="gs__footer--left">
              <div className="gs__footer-logo gs__for-mob">
                <a href="#">
                  {/* <img src={footer_logo} alt="linkedin" /> */}
                  <Image
                    src="/images/footer-logo.svg"
                    alt="Footer Logo"
                    width={120}
                    height={40}
                  />
                </a>
              </div>
              <div className="gs-footer__brands">
                <h3 className="gs__footer__heading ">Our Brands</h3>
                <p className="gs__footer__brand-text flex gs__footer__heading--accent">
                  GS Capital Connect
                  <span></span>
                  ValuraNova
                </p>
              </div>
              <div className="gs__footer__links">
                <div className="gs__footer__column">
                  <h4 className="gs__footer__subheading">Services</h4>
                  <ul>
                    <li>
                      <Link href="/services/individual-assignments">
                        Executive Search
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/organizational-design">
                        Board Advisory
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/strategic-recruiting">
                        Strategic Recruiting
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/team-build">Team Build</Link>
                    </li>
                  </ul>
                </div>
                <div className="gs__footer__column">
                  <h4 className="gs__footer__subheading">Company</h4>
                  <ul>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/approach">Approach</Link>
                    </li>
                    <li>
                      <Link href="/casestudies">Case Studies</Link>
                    </li>
                    <li>
                      <Link href="/vacancies">Vacancies</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* RIGHT SIDE */}
            <div className="gs__footer__right">
              <div className="gs__footer-connect">
                <h3 className="gs__footer__subscriber-title">
                  23K+ Subscribers
                </h3>
                <p className="gs__footer__subscriber-text">
                  Join our growing community reading the GS MedTech Chronicle
                </p>
                {/* <button className="gs__footer__cta">
              Join Our Network
            </button> */}
                <button className="gs__btn">
                  <span className="gs__btn-inner">
                    <span className="gs__btn-text">Let’s Connect</span>
                    <span className="gs__btn-text">Join Our Network</span>
                  </span>
                </button>
                <div className="gs__footer__social flex">
                  <a href="#">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 1.4325C0 0.64125 0.6575 0 1.46875 0H18.5312C19.3425 0 20 0.64125 20 1.4325V18.5675C20 19.3587 19.3425 20 18.5312 20H1.46875C0.6575 20 0 19.3587 0 18.5675V1.4325ZM6.17875 16.7425V7.71125H3.1775V16.7425H6.17875ZM4.67875 6.4775C5.725 6.4775 6.37625 5.785 6.37625 4.9175C6.3575 4.03125 5.72625 3.3575 4.69875 3.3575C3.67125 3.3575 3 4.0325 3 4.9175C3 5.785 3.65125 6.4775 4.65875 6.4775H4.67875ZM10.8138 16.7425V11.6988C10.8138 11.4288 10.8337 11.1587 10.9137 10.9662C11.13 10.4275 11.6238 9.86875 12.4538 9.86875C13.54 9.86875 13.9738 10.6962 13.9738 11.9113V16.7425H16.975V11.5625C16.975 8.7875 15.495 7.4975 13.52 7.4975C11.9275 7.4975 11.2137 8.3725 10.8138 8.98875V9.02H10.7938L10.8138 8.98875V7.71125H7.81375C7.85125 8.55875 7.81375 16.7425 7.81375 16.7425H10.8138Z"
                        fill="#949494"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.114 0H5.415L10.1325 5.99733L15.795 0H17.4885L10.7775 6.81867L18 16H12.702L7.7745 9.73733L1.692 16H0L7.1295 8.91733L0.114 0ZM2.205 0.941333L13.311 15.0587H15.9105L4.8045 0.941333H2.205Z"
                        fill="#949494"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="gs__footer-logo gs__for-des">
                <a href="#">
                  <Image
                    src="/images/footer-logo.svg"
                    alt="Footer Logo"
                    width={120}
                    height={40}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gs__bottom-footer-wp">
        <div className="gs__container">
          <div className="gs__bottom-footer">
            <p>
              © 2026 Guided Solutions LTD - This site is Guided Solutions
              property. All rights reserved.
            </p>
            <a title="privacy-policy" href="#">
              Terms of use and Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
