import React from "react";
import PropTypes from "prop-types";
import FormSelect from "./FormSelect";
import "../../app/globals.css";

const DownArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="gs__vacancies-filter-arrow"
  >
    <path
      d="M0.358983 7.51832C0.163362 7.32587 0.167832 7.00911 0.368805 6.82226C0.55926 6.64518 0.855892 6.65127 1.03892 6.83602L6.5 12.3485V0.5C6.5 0.223858 6.72386 0 7 0C7.27614 0 7.5 0.223858 7.5 0.5V12.3485L12.9611 6.83602C13.1441 6.65127 13.4407 6.64518 13.6312 6.82226C13.8322 7.00911 13.8366 7.32587 13.641 7.51832L7.05263 14H6.94737L0.358983 7.51832Z"
      fill="currentColor"
    />
  </svg>
);

const FILTERS = [
  {
    id: "job-title",
    placeholder: "Job Title",
    options: [
      { value: "", label: "All Job Titles" },
      { value: "software-engineer", label: "Software Engineer" },
      { value: "product-manager", label: "Product Manager" },
      { value: "qa", label: "QA Engineer" },
    ]
  },
  {
    id: "seniority",
    placeholder: "Seniority",
    options: [
      { value: "", label: "All Seniority Levels" },
      { value: "entry", label: "Entry" },
      { value: "mid", label: "Mid" },
      { value: "senior", label: "Senior" },
      { value: "lead", label: "Lead" },
      { value: "director", label: "Director" },
    ]
  },
  {
    id: "focus",
    placeholder: "Focus",
    options: [
      { value: "", label: "All Focus Areas" },
      { value: "frontend", label: "Frontend" },
      { value: "backend", label: "Backend" },
      { value: "fullstack", label: "Fullstack" },
      { value: "devops", label: "DevOps" },
      { value: "data", label: "Data Science" },
    ]
  },
  {
    id: "location",
    placeholder: "Location",
    options: [
      { value: "", label: "All Locations" },
      { value: "london", label: "London" },
      { value: "berlin", label: "Berlin" },
      { value: "paris", label: "Paris" },
      { value: "remote", label: "Remote" },
    ]
  },
  {
    id: "consultant",
    placeholder: "Consultant",
    options: [
      { value: "", label: "All Consultants" },
      { value: "alice", label: "Alice Smith" },
      { value: "bob", label: "Bob Johnson" },
      { value: "carol", label: "Carol Lee" },
    ]
  },
  {
    id: "experience",
    placeholder: "Experience",
    options: [
      { value: "", label: "All Experience Levels" },
      { value: "0-2", label: "0-2 years" },
      { value: "3-5", label: "3-5 years" },
      { value: "6-10", label: "6-10 years" },
      { value: "10+", label: "10+ years" },
    ]
  },
];

const VacanciesFilterSection = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  return (
    <div
      className="gs__vacancies-filter-wp"
      data-theme={isDark ? "section-dark" : "section-light"}
    >
      <div className="gs__container">
        <div className="gs__vacancies-filter-bar">
          {FILTERS.map(({ id, placeholder, options }) => (
            <div
              key={id}
              className="gs__vacancies-filter-input-wrap"
            >
              <FormSelect
                id={id}
                name={id}
                placeholder={placeholder}
                options={options}
                defaultValue=""
                aria-label={placeholder}
                className="gs__vacancies-filter-form-group"
              />
              <DownArrowIcon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

VacanciesFilterSection.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]),
};

export default VacanciesFilterSection;
