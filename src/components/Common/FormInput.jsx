"use client";
import React from "react";
import PropTypes from "prop-types";
import "@/app/globals.css";

/**
 * Reusable text/email/number input with label. Uses gs__ guide-form styling.
 * @param {string} id - Input id (required for label association)
 * @param {string} label - Label text
 * @param {string} type - input type: text, email, number, etc.
 * @param {boolean} required
 * @param {string} className - Extra class on the wrapper (gs__guide-form-group)
 */
const FormInput = ({
  id,
  label,
  type = "text",
  required = false,
  className = "",
  ...inputProps
}) => {
  return (
    <div className={`gs__guide-form-group ${className}`.trim()}>
      {label && (
        <label
          htmlFor={id}
          className="gs__guide-form-label"
        >
          {label} {required && <span className="gs__required">*</span>}
        </label>
      )}
      <input
        type={type}
        id={id}
        required={required}
        className="gs__guide-form-input"
        {...inputProps}
      />
    </div>
  );
};

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
};

export default FormInput;










