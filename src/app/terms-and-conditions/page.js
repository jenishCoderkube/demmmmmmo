"use client";
import React from "react";
import Link from "next/link";
import GetInTouch from "@/components/Common/GetInTouch";

export default function TermsAndConditionsPage({ theme = "dark" }) {
  return (
    <div className="gs__terms-wp">
      <div className="gs__terms">
        <div className="gs__container">
          <div className="gs__terms-container">
            {/* LEFT SIDE */}
            <div className="gs__terms-left">
              <h1 className="gs__h1-title">
                <span className="gs__terms-orange">Terms of Use </span>
                <span className="gs__block">
                  and
                  <span className="gs__terms-orange">Privacy Policy</span>
                </span>
              </h1>
            </div>

            {/* RIGHT SIDE */}
            <div className="gs__terms-right">
              <p className="gs__terms-nav">Introduction</p>

              <h6 className="gs__terms-text">
                Welcome to our website. If you continue to browse and use this
                website, you are agreeing to comply with and be bound by the
                following terms of use, which together with our privacy policy
                govern Guided Solutions' relationship with you in relation to
                this website. If you disagree with any part of these terms and
                conditions, please do not use our website.
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="gs__terms-info">
        <div className="gs__policy-section">
          <div className="gs__policy-header">
            <h3>Definitions</h3>
            <span className="gs__policy-arrow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1049_23243)">
                  <path
                    d="M0.512832 10.7405C0.233374 10.4655 0.23976 10.013 0.526864 9.74608C0.798942 9.49311 1.2227 9.50181 1.48417 9.76574L9.28571 17.6407V0.714288C9.28571 0.319798 9.60551 1.3497e-08 10 3.01464e-08C10.3945 4.67958e-08 10.7143 0.319797 10.7143 0.714287V17.6407L18.5158 9.76574C18.7773 9.50181 19.2011 9.49311 19.4731 9.74608C19.7602 10.013 19.7666 10.4655 19.4872 10.7405L10.0752 20H9.92481L0.512832 10.7405Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1049_23243">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="gs__policy-content">
            <p>
              "we" means Guided Solutions ltd, and "our" shall be construed
              accordingly. "you" means the person firm company or organisation
              browsing and/or using the Website, and "your" shall be construed
              accordingly. "Guided Solutions Family" means all companies
              connected with us. A company is connected with us if it is: (i) a
              subsidiary or holding company of us; (ii) controlled by the same
              person(s) who control us or our holding company; (iii) a
              subsidiary or holding company of any company in (i) or (ii) above;
              or (iv) in the same group as any company under (i), (ii) or (iii)
              above. "subsidiary" and "holding company" shall be as defined in
              section 1159 of the Companies Act 2006. The term "control" shall
              have the same meaning as defined in Section 416 of the Income and
              Corporation Taxes Act 1988. Two companies are in the same group if
              they share the same ultimate holding company.
            </p>
          </div>
        </div>

        <div className="gs__policy-section">
          <div className="gs__policy-header">
            <h3>Interruptions and Omissions in Service</h3>
            <span className="gs__policy-arrow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1049_23243)">
                  <path
                    d="M0.512832 10.7405C0.233374 10.4655 0.23976 10.013 0.526864 9.74608C0.798942 9.49311 1.2227 9.50181 1.48417 9.76574L9.28571 17.6407V0.714288C9.28571 0.319798 9.60551 1.3497e-08 10 3.01464e-08C10.3945 4.67958e-08 10.7143 0.319797 10.7143 0.714287V17.6407L18.5158 9.76574C18.7773 9.50181 19.2011 9.49311 19.4731 9.74608C19.7602 10.013 19.7666 10.4655 19.4872 10.7405L10.0752 20H9.92481L0.512832 10.7405Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1049_23243">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="gs__policy-content">
            <p>
              "we" means Guided Solutions ltd, and "our" shall be construed
              accordingly. "you" means the person firm company or organisation
              browsing and/or using the Website, and "your" shall be construed
              accordingly. "Guided Solutions Family" means all companies
              connected with us. A company is connected with us if it is: (i) a
              subsidiary or holding company of us; (ii) controlled by the same
              person(s) who control us or our holding company; (iii) a
              subsidiary or holding company of any company in (i) or (ii) above;
              or (iv) in the same group as any company under (i), (ii) or (iii)
              above. "subsidiary" and "holding company" shall be as defined in
              section 1159 of the Companies Act 2006. The term "control" shall
              have the same meaning as defined in Section 416 of the Income and
              Corporation Taxes Act 1988. Two companies are in the same group if
              they share the same ultimate holding company.
            </p>
          </div>
        </div>

        <div className="gs__policy-section">
          <div className="gs__policy-header">
            <h3>Links to other Sites</h3>
            <span className="gs__policy-arrow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1049_23243)">
                  <path
                    d="M0.512832 10.7405C0.233374 10.4655 0.23976 10.013 0.526864 9.74608C0.798942 9.49311 1.2227 9.50181 1.48417 9.76574L9.28571 17.6407V0.714288C9.28571 0.319798 9.60551 1.3497e-08 10 3.01464e-08C10.3945 4.67958e-08 10.7143 0.319797 10.7143 0.714287V17.6407L18.5158 9.76574C18.7773 9.50181 19.2011 9.49311 19.4731 9.74608C19.7602 10.013 19.7666 10.4655 19.4872 10.7405L10.0752 20H9.92481L0.512832 10.7405Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1049_23243">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="gs__policy-content">
            <p>
              On this site you will be offered automatic links to other sites
              which we hope will be of interest to you. We do not accept any
              responsibility for or liability in respect of the content of those
              sites, the owners of which do not necessarily have any connection,
              commercial or otherwise, with us. Using automatic links to gain
              access to such sites is entirely at your own risk.
            </p>
          </div>
        </div>

        <div className="gs__policy-section">
          <div className="gs__policy-header">
            <h3>Your Use of this Site</h3>
            <span className="gs__policy-arrow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1049_23243)">
                  <path
                    d="M0.512832 10.7405C0.233374 10.4655 0.23976 10.013 0.526864 9.74608C0.798942 9.49311 1.2227 9.50181 1.48417 9.76574L9.28571 17.6407V0.714288C9.28571 0.319798 9.60551 1.3497e-08 10 3.01464e-08C10.3945 4.67958e-08 10.7143 0.319797 10.7143 0.714287V17.6407L18.5158 9.76574C18.7773 9.50181 19.2011 9.49311 19.4731 9.74608C19.7602 10.013 19.7666 10.4655 19.4872 10.7405L10.0752 20H9.92481L0.512832 10.7405Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1049_23243">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="gs__policy-content">
            <p>
              You may only use the Website for lawful purposes when seeking
              employment or help with your career, or when recruiting staff. You
              must not under any circumstances seek to undermine the security of
              the Website or any information submitted to or available through
              it. In particular, but without limitation, you must not seek to
              access, alter or delete any information to which you do not have
              authorised access, seek to overload the system via spamming or
              flooding, take any action or use any device, routine or software
              to crash, delay, damage or otherwise interfere with the operation
              of the Website or attempt to decipher, disassemble or modify any
              of the software, coding or information comprised in the Website.
            </p>
            <p>
              You are solely responsible for any information submitted by you to
              the Website. You are responsible for ensuring that all information
              supplied by you is true, accurate, up-to-date and not misleading
              or likely to mislead or deceive and that it is not discriminatory,
              obscene, offensive, defamatory or otherwise illegal, unlawful or
              in breach of any applicable legislation, regulations, guidelines
              or codes of practice or the copyright, trademark or other
              intellectual property rights of any person in any jurisdiction, or
              misrepresented or deceptive in order to gain pecuniary advantage.
              You are also responsible for ensuring that all information, data
              and files are free of viruses or other routines or engines that
              may damage or interfere with any system or data prior to being
              submitted to the Website. We reserve the right to remove any
              information supplied by you from the Website at our sole
              discretion, at any time and for any reason without being required
              to give any explanation.
            </p>
          </div>
        </div>

        <div className="gs__policy-section">
          <div className="gs__policy-header">
            <h3>Information Submitted by You</h3>
            <span className="gs__policy-arrow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1049_23243)">
                  <path
                    d="M0.512832 10.7405C0.233374 10.4655 0.23976 10.013 0.526864 9.74608C0.798942 9.49311 1.2227 9.50181 1.48417 9.76574L9.28571 17.6407V0.714288C9.28571 0.319798 9.60551 1.3497e-08 10 3.01464e-08C10.3945 4.67958e-08 10.7143 0.319797 10.7143 0.714287V17.6407L18.5158 9.76574C18.7773 9.50181 19.2011 9.49311 19.4731 9.74608C19.7602 10.013 19.7666 10.4655 19.4872 10.7405L10.0752 20H9.92481L0.512832 10.7405Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1049_23243">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="gs__policy-content">
            <p>
              Guided Solutions will use information supplied by you to aid the
              recruitment process and associated administrative. We will process
              any data which you provide in completing the online registration
              or application forms and any further forms, assessments or
              personal details which you complete or provide to us when using
              the Website in accordance with relevant data protection
              legislation. We explain more about what personal data we collect
              from you, how we use it and what rights and options you have to
              access, edit and delete it in our Privacy Policy.
            </p>
          </div>
        </div>

        <div className="gs__policy-section">
          <div className="gs__policy-header">
            <h3>Terms of Business</h3>
            <span className="gs__policy-arrow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1049_23243)">
                  <path
                    d="M0.512832 10.7405C0.233374 10.4655 0.23976 10.013 0.526864 9.74608C0.798942 9.49311 1.2227 9.50181 1.48417 9.76574L9.28571 17.6407V0.714288C9.28571 0.319798 9.60551 1.3497e-08 10 3.01464e-08C10.3945 4.67958e-08 10.7143 0.319797 10.7143 0.714287V17.6407L18.5158 9.76574C18.7773 9.50181 19.2011 9.49311 19.4731 9.74608C19.7602 10.013 19.7666 10.4655 19.4872 10.7405L10.0752 20H9.92481L0.512832 10.7405Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1049_23243">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="gs__policy-content">
            <p>
              Guided Solutions will use information supplied by you to aid the
              recruitment process and associated administrative. We will process
              any data which you provide in completing the online registration
              or application forms and any further forms, assessments or
              personal details which you complete or provide to us when using
              the Website in accordance with relevant data protection
              legislation. We explain more about what personal data we collect
              from you, how we use it and what rights and options you have to
              access, edit and delete it in our Privacy Policy.
            </p>
          </div>
        </div>

        <div className="gs__policy-section">
          <div className="gs__policy-header">
            <h3>Content Rights</h3>
            <span className="gs__policy-arrow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1049_23243)">
                  <path
                    d="M0.512832 10.7405C0.233374 10.4655 0.23976 10.013 0.526864 9.74608C0.798942 9.49311 1.2227 9.50181 1.48417 9.76574L9.28571 17.6407V0.714288C9.28571 0.319798 9.60551 1.3497e-08 10 3.01464e-08C10.3945 4.67958e-08 10.7143 0.319797 10.7143 0.714287V17.6407L18.5158 9.76574C18.7773 9.50181 19.2011 9.49311 19.4731 9.74608C19.7602 10.013 19.7666 10.4655 19.4872 10.7405L10.0752 20H9.92481L0.512832 10.7405Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1049_23243">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="gs__policy-content">
            <p>
              The rights in material on the Website are protected by
              international copyright, software and trademark laws and you agree
              to use the Website in a way which does not infringe these rights.
              You may copy material on the Website for your own private or
              domestic purposes, but no copying for any commercial or business
              use is permitted.
            </p>
          </div>
        </div>

        <div className="gs__policy-section">
          <div className="gs__policy-header">
            <h3>Termination</h3>
            <span className="gs__policy-arrow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1049_23243)">
                  <path
                    d="M0.512832 10.7405C0.233374 10.4655 0.23976 10.013 0.526864 9.74608C0.798942 9.49311 1.2227 9.50181 1.48417 9.76574L9.28571 17.6407V0.714288C9.28571 0.319798 9.60551 1.3497e-08 10 3.01464e-08C10.3945 4.67958e-08 10.7143 0.319797 10.7143 0.714287V17.6407L18.5158 9.76574C18.7773 9.50181 19.2011 9.49311 19.4731 9.74608C19.7602 10.013 19.7666 10.4655 19.4872 10.7405L10.0752 20H9.92481L0.512832 10.7405Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1049_23243">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="gs__policy-content">
            <p>
              We may terminate your registration and/or deny you access to the
              Website or any part of it (including any services, goods or
              information available on or through the Website) at any time in
              our absolute discretion and without any explanation or
              notification.
            </p>
          </div>
        </div>

        <div className="gs__policy-section">
          <div className="gs__policy-header">
            <h3>Liability & Indemnity</h3>
            <span className="gs__policy-arrow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1049_23243)">
                  <path
                    d="M0.512832 10.7405C0.233374 10.4655 0.23976 10.013 0.526864 9.74608C0.798942 9.49311 1.2227 9.50181 1.48417 9.76574L9.28571 17.6407V0.714288C9.28571 0.319798 9.60551 1.3497e-08 10 3.01464e-08C10.3945 4.67958e-08 10.7143 0.319797 10.7143 0.714287V17.6407L18.5158 9.76574C18.7773 9.50181 19.2011 9.49311 19.4731 9.74608C19.7602 10.013 19.7666 10.4655 19.4872 10.7405L10.0752 20H9.92481L0.512832 10.7405Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1049_23243">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="gs__policy-content">
            <p>
              We accept no liability for any loss (whether direct or indirect,
              for loss of business, revenue or profits, wasted expenditure,
              corruption or destruction of data or for any other indirect or
              consequential loss whatsoever) arising from your use of the
              Website and we hereby exclude any such liability, whether in
              contract, tort (including for negligence) or otherwise. We hereby
              exclude all representations, warranties and conditions relating to
              the Website and your use of it to the maximum extent permitted by
              law.
            </p>
            <p>
              You agree to indemnify us and keep us indemnified against all
              costs, expenses, claims, losses, liabilities or proceedings
              arising from use or misuse by you of the Website.
            </p>
            <p>
              You must notify us immediately if anyone makes or threatens to
              make any claim against you relating to your use of the Website.
            </p>
          </div>
        </div>

        <div className="gs__policy-section">
          <div className="gs__policy-header">
            <h3>Choice of Law and Jurisdiction</h3>
            <span className="gs__policy-arrow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1049_23243)">
                  <path
                    d="M0.512832 10.7405C0.233374 10.4655 0.23976 10.013 0.526864 9.74608C0.798942 9.49311 1.2227 9.50181 1.48417 9.76574L9.28571 17.6407V0.714288C9.28571 0.319798 9.60551 1.3497e-08 10 3.01464e-08C10.3945 4.67958e-08 10.7143 0.319797 10.7143 0.714287V17.6407L18.5158 9.76574C18.7773 9.50181 19.2011 9.49311 19.4731 9.74608C19.7602 10.013 19.7666 10.4655 19.4872 10.7405L10.0752 20H9.92481L0.512832 10.7405Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1049_23243">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="gs__policy-content">
            <p>
              The use of the Website and any agreements entered into through the
              Website are to be governed by and construed in accordance with
              English law. The courts of England are to have exclusive
              jurisdiction to settle any dispute arising out of or in connection
              with the use of the Website or any agreement made through the
              Website.
            </p>
          </div>
        </div>

        <div className="gs__policy-section">
          <div className="gs__policy-header">
            <h3>Changes to Terms of Use and Invalidity</h3>
            <span className="gs__policy-arrow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1049_23243)">
                  <path
                    d="M0.512832 10.7405C0.233374 10.4655 0.23976 10.013 0.526864 9.74608C0.798942 9.49311 1.2227 9.50181 1.48417 9.76574L9.28571 17.6407V0.714288C9.28571 0.319798 9.60551 1.3497e-08 10 3.01464e-08C10.3945 4.67958e-08 10.7143 0.319797 10.7143 0.714287V17.6407L18.5158 9.76574C18.7773 9.50181 19.2011 9.49311 19.4731 9.74608C19.7602 10.013 19.7666 10.4655 19.4872 10.7405L10.0752 20H9.92481L0.512832 10.7405Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1049_23243">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="gs__policy-content">
            <p>
              These terms of use may be changed by us at any time. You will be
              deemed to accept the terms of use (as amended) when you next use
              the Website following any amendment.
            </p>
            <p>
              If any provision of these terms of use is held to be invalid by a
              court of competent jurisdiction, such invalidity shall not affect
              the validity of the remaining provisions, which shall remain in
              full force and effect.
            </p>
          </div>
        </div>

        <div className="gs__policy-section">
          <div className="gs__policy-header">
            <h3>Privacy Policy - Core Principles</h3>
            <span className="gs__policy-arrow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1049_23243)">
                  <path
                    d="M0.512832 10.7405C0.233374 10.4655 0.23976 10.013 0.526864 9.74608C0.798942 9.49311 1.2227 9.50181 1.48417 9.76574L9.28571 17.6407V0.714288C9.28571 0.319798 9.60551 1.3497e-08 10 3.01464e-08C10.3945 4.67958e-08 10.7143 0.319797 10.7143 0.714287V17.6407L18.5158 9.76574C18.7773 9.50181 19.2011 9.49311 19.4731 9.74608C19.7602 10.013 19.7666 10.4655 19.4872 10.7405L10.0752 20H9.92481L0.512832 10.7405Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1049_23243">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="gs__policy-content">
            <p>
              Guided Solutions will never share your CV or any personal data
              with prospective employers or any third party without your prior
              consent.
            </p>
            <p>
              We are a recruitment company, people use our services to find, be
              found for career opportunities and seek talent. Our Privacy Policy
              applies to any user of our services.
            </p>
            <p>
              <a href="#" title="guidedsolutions">
                www.guidedsolutions.co.uk
              </a>{" "}
              is a website operated by Guided Solutions Ltd
            </p>
            <p>
              This privacy policy explains what personal information we collect
              about you when you use our website and our services, how we use
              this information to provide our services to you, where and how
              your information is stored and processed, and your rights and
              options to have control over your personal data.
            </p>
            <p>
              If you register on the Website as a Client and provide us with
              personal data, we will process such personal data on the basis
              that it is necessary to do so in order to perform the contract you
              enter into with us.
            </p>
            <p>
              Registration with and use of the Website for job seekers is free.
              We will process your personal data on the basis set out below as
              it is in our legitimate interests to do so following your
              registration.
            </p>
          </div>
        </div>

        <div className="gs__policy-section">
          <div className="gs__policy-header">
            <h3>What Information do we collect about you?</h3>
            <span className="gs__policy-arrow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1049_23243)">
                  <path
                    d="M0.512832 10.7405C0.233374 10.4655 0.23976 10.013 0.526864 9.74608C0.798942 9.49311 1.2227 9.50181 1.48417 9.76574L9.28571 17.6407V0.714288C9.28571 0.319798 9.60551 1.3497e-08 10 3.01464e-08C10.3945 4.67958e-08 10.7143 0.319797 10.7143 0.714287V17.6407L18.5158 9.76574C18.7773 9.50181 19.2011 9.49311 19.4731 9.74608C19.7602 10.013 19.7666 10.4655 19.4872 10.7405L10.0752 20H9.92481L0.512832 10.7405Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1049_23243">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="gs__policy-content">
            <p>
              We collect personal data from you when you provide, post, or
              upload it to our website, such as when you fill out a form,
              respond to a survey, submit a CV directly to Guided Solutions or
              through an advert that has been posted by Guided Solutions on
              third party websites and when you speak with our consultants over
              the phone.
            </p>
            <p>
              Personal data we collect is stored in our CMS, CRM and Marketing
              Automation Platform, as well as in our cloud-based candidate
              assessment solution, GS Compass.
            </p>
            <p>
              When you fill out a contact form or subscribe for newsletters on
              our website, we may collect the following personal data:
            </p>
            <ul>
              <li>Your full name</li>
              <li>Your email address</li>
              <li>Your phone number</li>
              <li>Your country of residence</li>
              <li>Your company</li>
              <li>Your job title</li>
              <li>
                Your interests regarding future job opportunities such as type
                of role and role location
              </li>
            </ul>
            <p>
              When you talk with our consultants over the phone to find, be
              found for career opportunities or seek talent, we may record your
              calls to ensure that we are able to accurately provide our service
              to you and to improve our quality of service. This information is
              retained only for this purpose, and then deleted.
            </p>
            <p>
              If you decide to upload a CV, cover letter, personal statement or
              other similar document or information we will keep that
              information for as long you want to keep your account with Guided
              Solutions.
            </p>
            <p>
              If you choose to take any assessments available through Guided
              Solutions such as our cloud-based solution GS Compass, we will
              also maintain a record of your responses to and results of those
              assessments.
            </p>
            <p>
              We log your visits and use of our website, including mobile apps.
            </p>
          </div>
        </div>

        <div className="gs__policy-section">
          <div className="gs__policy-header">
            <h3>Cookies and other similar technologies</h3>
            <span className="gs__policy-arrow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1049_23243)">
                  <path
                    d="M0.512832 10.7405C0.233374 10.4655 0.23976 10.013 0.526864 9.74608C0.798942 9.49311 1.2227 9.50181 1.48417 9.76574L9.28571 17.6407V0.714288C9.28571 0.319798 9.60551 1.3497e-08 10 3.01464e-08C10.3945 4.67958e-08 10.7143 0.319797 10.7143 0.714287V17.6407L18.5158 9.76574C18.7773 9.50181 19.2011 9.49311 19.4731 9.74608C19.7602 10.013 19.7666 10.4655 19.4872 10.7405L10.0752 20H9.92481L0.512832 10.7405Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1049_23243">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="gs__policy-content">
            <p>
              Cookies are text files placed on your computer to collect standard
              internet log and visitor behaviour information. This information
              is used to track visitor use of the Website, to compile
              statistical reports on Website activity and to help us make
              recommendations that are relevant to you.
            </p>
            <p>
              We also use third party advertising companies to serve ads when
              you visit the Website. Those companies may use information about
              your visits to this and other websites in order to provide you
              with advertisements about other goods and services that may be of
              interest to you.
            </p>
            <p>
              If you would like more information about this practice, including
              how to prevent it, please visit{" "}
              <a href="#" title="aboutcookies">
                www.aboutcookies.org, www.allaboutcookies.org or
                optout.networkadvertising.org
              </a>
            </p>
            <p>We collect data through cookies and similar technologies.</p>
            <p>
              We log usage data when you visit or otherwise use our website,
              such as when you view or click on content, or ads, perform a
              search, install or update one of our mobile apps, share articles
              or apply for jobs. We use log-ins, cookies, device information and
              internet protocol (“IP”) addresses to identify you and log your
              use.
            </p>
            <p>
              We use cookies and similar technologies to recognize you and/or
              your device(s). You can control cookies through your browser
              settings and other tools. You can also opt-out from our use of
              cookies and similar technologies that track your behaviour on the
              sites of others for third party advertising.
            </p>
          </div>
        </div>

        <div className="gs__policy-section">
          <div className="gs__policy-header">
            <h3>Your Device and Location</h3>
            <span className="gs__policy-arrow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1049_23243)">
                  <path
                    d="M0.512832 10.7405C0.233374 10.4655 0.23976 10.013 0.526864 9.74608C0.798942 9.49311 1.2227 9.50181 1.48417 9.76574L9.28571 17.6407V0.714288C9.28571 0.319798 9.60551 1.3497e-08 10 3.01464e-08C10.3945 4.67958e-08 10.7143 0.319797 10.7143 0.714287V17.6407L18.5158 9.76574C18.7773 9.50181 19.2011 9.49311 19.4731 9.74608C19.7602 10.013 19.7666 10.4655 19.4872 10.7405L10.0752 20H9.92481L0.512832 10.7405Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1049_23243">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="gs__policy-content">
            <p>
              We receive data from your devices and networks, including location
              data.
            </p>
            <p>
              When you visit or leave our website (including our plugins or
              cookies or similar technology on the sites of others), we receive
              the URL of both the site you came from and the one you go to next.
              We also get information about your IP address, proxy server,
              operating system, web browser and add-ons, device identifier and
              features, and/or ISP or your mobile carrier. If you use our
              website from a mobile device, that device will send us data about
              your location based on your phone settings. We will ask you to
              opt-in before we use GPS or other tools to identify your precise
              location.
            </p>
          </div>
        </div>

        <div className="gs__policy-section">
          <div className="gs__policy-header">
            <h3>Messages</h3>
            <span className="gs__policy-arrow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1049_23243)">
                  <path
                    d="M0.512832 10.7405C0.233374 10.4655 0.23976 10.013 0.526864 9.74608C0.798942 9.49311 1.2227 9.50181 1.48417 9.76574L9.28571 17.6407V0.714288C9.28571 0.319798 9.60551 1.3497e-08 10 3.01464e-08C10.3945 4.67958e-08 10.7143 0.319797 10.7143 0.714287V17.6407L18.5158 9.76574C18.7773 9.50181 19.2011 9.49311 19.4731 9.74608C19.7602 10.013 19.7666 10.4655 19.4872 10.7405L10.0752 20H9.92481L0.512832 10.7405Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1049_23243">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="gs__policy-content">
            <p>
              We collect information about you when you send, receive, or engage
              with messages in connection with our services. For example, if you
              get in contact with one of our Consultants about a particular role
              we will keep a copy of the conversation trail on our CRM system.
              If you submit a message on our website, we will keep a record of
              this in our CMS and Marketing Automation Platform.
            </p>
          </div>
        </div>

        <div className="gs__policy-section">
          <div className="gs__policy-header">
            <h3>What do we do with your personal data?</h3>
            <span className="gs__policy-arrow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1049_23243)">
                  <path
                    d="M0.512832 10.7405C0.233374 10.4655 0.23976 10.013 0.526864 9.74608C0.798942 9.49311 1.2227 9.50181 1.48417 9.76574L9.28571 17.6407V0.714288C9.28571 0.319798 9.60551 1.3497e-08 10 3.01464e-08C10.3945 4.67958e-08 10.7143 0.319797 10.7143 0.714287V17.6407L18.5158 9.76574C18.7773 9.50181 19.2011 9.49311 19.4731 9.74608C19.7602 10.013 19.7666 10.4655 19.4872 10.7405L10.0752 20H9.92481L0.512832 10.7405Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1049_23243">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="gs__policy-content">
            <p>
              We use the data that we have about you to provide and personalize,
              including with the help of automated systems and inferences we
              make, our services, including ads, so that they can be more
              relevant and useful to you and others.
            </p>
            <p>
              By registering with Guided Solutions, it is understood that job
              seekers are actively soliciting contact from Guided Solutions
              about opportunities which match the job seeker’s stated interests.
              If you are a job seeker we will never share your details with
              anyone externally without consulting you and receiving consent.
            </p>
            <p>
              For job seekers, we will use your personal data to provide you
              with the recruitment services that we provide, to manage your
              account and to email you about recruitment services which, for job
              seekers, includes job alerts and emails about industry updates
              that are relevant to your fields of interest.
            </p>

            <strong>Keep you informed</strong>
            <p>
              Our services allow you to stay informed about news, events and
              ideas regarding professional topics you care about. Our services
              also allow you to improve your professional skills, in new terms.
              We use the data that you provide to us, to recommend relevant
              content and career opportunities.
            </p>

            <strong>Career</strong>
            <p>
              Our services allow you to explore new career opportunities, and
              seek out, and be found for, career opportunities. Your profile
              which is stored in our CRM system can be found by our recruitment
              teams in relation to any particular job role or assignment. We may
              use your submitted details alongside fully or pseudonymised data
              and information that we hold for automated processing to help make
              our services more relevant to job and role seekers. Keeping your
              profile accurate and up-to-date on our CRM system may help you and
              us to better match you with career opportunities.
            </p>

            <strong>Communications</strong>
            <p>
              We offer settings to control what messages you receive and how
              often you receive some types of notifications.
            </p>
            <p>
              We will contact you through email, mobile phone, notices posted on
              our websites or apps, messages to your LinkedIn inbox, and other
              ways through our website, including text messages and push
              notifications. We will send you messages about job opportunities,
              industry news and updates, career advice or other related
              information for which you have subscribed. You can unsubscribe at
              any time by contacting us or by using the “Unsubscribe” link in
              the footer of email message.
            </p>
          </div>
        </div>

        <div className="gs__policy-section">
          <div className="gs__policy-header">
            <h3>Advertising and Marketing</h3>
            <span className="gs__policy-arrow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1049_23243)">
                  <path
                    d="M0.512832 10.7405C0.233374 10.4655 0.23976 10.013 0.526864 9.74608C0.798942 9.49311 1.2227 9.50181 1.48417 9.76574L9.28571 17.6407V0.714288C9.28571 0.319798 9.60551 1.3497e-08 10 3.01464e-08C10.3945 4.67958e-08 10.7143 0.319797 10.7143 0.714287V17.6407L18.5158 9.76574C18.7773 9.50181 19.2011 9.49311 19.4731 9.74608C19.7602 10.013 19.7666 10.4655 19.4872 10.7405L10.0752 20H9.92481L0.512832 10.7405Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1049_23243">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="gs__policy-content">
            <strong>Advertising:</strong>
            <p>
              We may create targeted advertising campaigns to promote our
              services and drive engagement with our brand.
            </p>
            <p>
              We target (and measure the performance of) ads to website visitors
              and others both on and off our website directly or through a
              variety of partners, using the following data, whether separately
              or combined:
            </p>
            <ul>
              <li>
                Data from advertising technologies on and off our website, like
                cookies, ad tags, and device identifiers;
              </li>
              <li>
                Visitor-provided information (e.g., Linkedin profile, contact
                information, title and industry);
              </li>
              <li>
                Data from your use of our website (e.g., search history, content
                you read, page visits, clicking on an ad, etc.)
              </li>
              <li>Information from advertising partners and publishers and</li>
              <li>
                Information inferred from data described above (e.g., using job
                titles from a profile to infer industry, seniority, and
                compensation bracket; using graduation dates to infer age or
                using first names or pronoun usage to infer gender).
              </li>
            </ul>
            <p>
              If you have already expressed interest in our services through
              your use of our website, LinkedIn company page, our partners’
              websites or interaction with our ads, we may track this activity
              using anonymous cookie-based retargeting technology and display
              relevant ads based on your interests and actions you’ve taken.
            </p>
            <strong>Managing Your Preferences:</strong>
            <p>
              {" "}
              In the event that you register with Guided Solutions as a job
              seeker or a talent seeker we will only send you information which
              relates to our recruitment services unless you specifically opt in
              to receiving marketing material about other products and services
              through a form or a subscrip
            </p>
          </div>
        </div>

        <div className="gs__policy-section">
          <div className="gs__policy-header">
            <h3>Rights to Access and Control your Personal Data</h3>
            <span className="gs__policy-arrow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1049_23243)">
                  <path
                    d="M0.512832 10.7405C0.233374 10.4655 0.23976 10.013 0.526864 9.74608C0.798942 9.49311 1.2227 9.50181 1.48417 9.76574L9.28571 17.6407V0.714288C9.28571 0.319798 9.60551 1.3497e-08 10 3.01464e-08C10.3945 4.67958e-08 10.7143 0.319797 10.7143 0.714287V17.6407L18.5158 9.76574C18.7773 9.50181 19.2011 9.49311 19.4731 9.74608C19.7602 10.013 19.7666 10.4655 19.4872 10.7405L10.0752 20H9.92481L0.512832 10.7405Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1049_23243">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="gs__policy-content">
            <p>
              You can access, modify or delete your personal data at any time,
              and have control over how your data is collected, used and shared.
            </p>
            <p>
              You can reach us by phone, email, postal address or message
              through our website to request access, modification or deletion of
              your data at any time.
            </p>
            <p>
              We provide many choices about the collection, use and sharing of
              your data, from deleting or correcting data we hold for you to
              advertising opt-outs and communication controls. We offer you
              settings to control and manage your subscriptions in the footer of
              the email messages you receive from us.
            </p>
            <p>For personal data that we have about you:</p>
            <ul>
              <li>
                <strong>Delete Data:</strong> You can ask us to erase or delete
                all or some of your personal data (e.g., if it is no longer
                necessary to provide services to you).
              </li>
              <li>
                <strong>Change or Correct Data:</strong> You can request us to
                update, edit or fix some of your personal data on your account,
                particularly if it’s inaccurate.
              </li>
              <li>
                <strong>Object to, or Limit or Restrict, Use of Data:</strong>{" "}
                You can ask us to stop using all or some of your personal data
                (e.g., if we have no legal right to keep using it) or to limit
                our use of it (e.g., if your personal data is inaccurate or
                unlawfully held).
              </li>
              <li>
                <strong>Right to Access and or Take Your Data:</strong> You can
                ask us for a copy of your personal data and can ask for a copy
                of personal data you provided in machine readable form.
              </li>
            </ul>
          </div>
        </div>

        <div className="gs__policy-section">
          <div className="gs__policy-header">
            <h3>Account Closure &amp; Compliance</h3>
            <span className="gs__policy-arrow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1049_23243)">
                  <path
                    d="M0.512832 10.7405C0.233374 10.4655 0.23976 10.013 0.526864 9.74608C0.798942 9.49311 1.2227 9.50181 1.48417 9.76574L9.28571 17.6407V0.714288C9.28571 0.319798 9.60551 1.3497e-08 10 3.01464e-08C10.3945 4.67958e-08 10.7143 0.319797 10.7143 0.714287V17.6407L18.5158 9.76574C18.7773 9.50181 19.2011 9.49311 19.4731 9.74608C19.7602 10.013 19.7666 10.4655 19.4872 10.7405L10.0752 20H9.92481L0.512832 10.7405Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1049_23243">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="gs__policy-content">
            <p>
              We want to make sure that your information is accurate and up to
              date and will delete or amend any information that you think is
              inaccurate. Should you wish to delete your account please get in
              touch with
            </p>
            <p>
              <strong>Damé Medarski</strong> (
              <a href="mailto:dame.medarski@guidedsolutions.co.uk">
                dame.medarski@guidedsolutions.co.uk
              </a>
              ).
            </p>
            <p>Amendments to your account can be made by contacting us.</p>
            <p>
              We aim to provide you with useful work-related services for the
              whole of your career. However, you have the right to close your
              account at any time and to have use or sale of your personal
              information unless we are in the process of responding to any
              complaint that you make.
            </p>
            <p>
              We retain your personal data even after you have closed your
              account if reasonably necessary to comply with our legal
              obligations (including law enforcement requests), meet regulatory
              requirements, resolve disputes, maintain security, prevent fraud
              and abuse, or fulfill your request to "unsubscribe" from further
              messages from us. We will retain de-personalised information after
              your account has been closed.
            </p>
          </div>
        </div>

        <div className="gs__policy-section">
          <div className="gs__policy-header">
            <h3>Lawful bases for processing</h3>
            <span className="gs__policy-arrow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1049_23243)">
                  <path
                    d="M0.512832 10.7405C0.233374 10.4655 0.23976 10.013 0.526864 9.74608C0.798942 9.49311 1.2227 9.50181 1.48417 9.76574L9.28571 17.6407V0.714288C9.28571 0.319798 9.60551 1.3497e-08 10 3.01464e-08C10.3945 4.67958e-08 10.7143 0.319797 10.7143 0.714287V17.6407L18.5158 9.76574C18.7773 9.50181 19.2011 9.49311 19.4731 9.74608C19.7602 10.013 19.7666 10.4655 19.4872 10.7405L10.0752 20H9.92481L0.512832 10.7405Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1049_23243">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="gs__policy-content">
            <p>
              We have lawful bases to collect, use and share data about you. You
              have choices about our use of your data.
            </p>
            <p>
              At any time, you can withdraw consent you have provided by
              contacting us.
            </p>
            <p>
              We will only collect and process personal data about you where we
              have lawful bases. Lawful bases include consent you have given us,
              contractual necessity (the processing is necessary for the
              performance of a contract with you) and “legitimate interests”.
            </p>
            <p>
              Where we rely on your consent to process personal data, you have
              the right to withdraw or decline your consent at any time and
              where we rely on legitimate interests, you have the right to
              object. If you have any questions about the lawful bases upon
              which we collect and use your personal data, please contact our
              Data Protection Officer here.
            </p>
          </div>
        </div>

        <div className="gs__policy-section">
          <div className="gs__policy-header">
            <h3>Security &amp; Cross Border Transfers</h3>
            <span className="gs__policy-arrow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1049_23243)">
                  <path
                    d="M0.512832 10.7405C0.233374 10.4655 0.23976 10.013 0.526864 9.74608C0.798942 9.49311 1.2227 9.50181 1.48417 9.76574L9.28571 17.6407V0.714288C9.28571 0.319798 9.60551 1.3497e-08 10 3.01464e-08C10.3945 4.67958e-08 10.7143 0.319797 10.7143 0.714287V17.6407L18.5158 9.76574C18.7773 9.50181 19.2011 9.49311 19.4731 9.74608C19.7602 10.013 19.7666 10.4655 19.4872 10.7405L10.0752 20H9.92481L0.512832 10.7405Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1049_23243">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="gs__policy-content">
            <p>
              <strong>Security</strong>
              <br />
              We implement security safeguards designed to protect your data,
              such as HTTPS. We regularly monitor our systems for possible
              vulnerabilities and attacks. However, we cannot warrant the
              security of any information that you send us. There is no
              guarantee that data may not be accessed, disclosed, altered, or
              destroyed by breach of any of our physical, technical, or
              managerial safeguards.
            </p>
            <p>
              <strong>Cross Border Data Transfers</strong>
              <br />
              We process data both inside and outside of the United Kingdom and
              rely on legally-recognised mechanisms to lawfully transfer data
              across borders. Countries where we process data may have laws
              which are different, and potentially not as protective, as the
              laws of your own country.
            </p>
          </div>
        </div>

        <div className="gs__policy-section">
          <div className="gs__policy-header">
            <h3>Contact &amp; Registered Office Information</h3>
            <span className="gs__policy-arrow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1049_23243)">
                  <path
                    d="M0.512832 10.7405C0.233374 10.4655 0.23976 10.013 0.526864 9.74608C0.798942 9.49311 1.2227 9.50181 1.48417 9.76574L9.28571 17.6407V0.714288C9.28571 0.319798 9.60551 1.3497e-08 10 3.01464e-08C10.3945 4.67958e-08 10.7143 0.319797 10.7143 0.714287V17.6407L18.5158 9.76574C18.7773 9.50181 19.2011 9.49311 19.4731 9.74608C19.7602 10.013 19.7666 10.4655 19.4872 10.7405L10.0752 20H9.92481L0.512832 10.7405Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1049_23243">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="gs__policy-content">
            <p>
              <strong>How to contact us</strong>
              <br />
              Please contact us if you have any questions about our privacy
              policy or information we hold about you.
            </p>
            <p>
              <strong>By Email: </strong>
              <a href="mailto:diane.mederski@gsmetech.com">
                diane.mederski@gsmetech.com
              </a>
            </p>
            <p>
              <strong>By Post:</strong>
              <br />
              Guided Solutions, The Catalyst, York Science Park, Baird Lane,
              York, YO10 5GA, United Kingdom
            </p>
            <p>
              <strong>Registered Office:</strong>
              <br />
              Abacus House Pennine Business Park Longbow Close Huddersfield West
              Yorkshire England HD2 1GQ
            </p>
            <p>
              <strong>Company Number</strong>
              <br />
              04516013. Registered in the UK.
            </p>
          </div>
        </div>
      </div>

      <GetInTouch />
    </div>
  );
}










