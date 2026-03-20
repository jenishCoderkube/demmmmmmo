"use client";
import React from "react";
import PropTypes from "prop-types";
import "@/app/globals.css";

/**
 * Reusable textarea with label. Uses gs__ guide-form styling.
 */
const FormTextarea = ({
  id,
  label,
  required = false,
  rows = 4,
  className = "",
  ...textareaProps
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
      <textarea
        id={id}
        required={required}
        rows={rows}
        className="gs__guide-form-input gs__guide-form-textarea"
        {...textareaProps}
        style={{
          resize: 'vertical'
        }}
      />
    </div>
  );
};

FormTextarea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
  className: PropTypes.string,
};

export default FormTextarea;










