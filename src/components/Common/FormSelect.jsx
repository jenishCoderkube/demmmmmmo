import React from "react";
import PropTypes from "prop-types";
import "../../app/globals.css";

/**
 * Reusable select with label. Uses gs__ guide-form styling.
 * @param {string} id - Select id (required for label association)
 * @param {string} label - Label text
 * @param {Array<{value: string, label: string}>} options - Options for the select
 * @param {string} placeholder - Placeholder option text (e.g. "Select...")
 * @param {boolean} required
 * @param {string} className - Extra class on the wrapper (gs__guide-form-group)
 */
const FormSelect = ({
  id,
  label,
  options = [],
  placeholder,
  required = false,
  className = "",
  ...selectProps
}) => {
  return (
    <div className={`gs__guide-form-group ${className}`.trim()}>
      {label && (
        <label htmlFor={id} className="gs__guide-form-label">
          {label} {required && <span className="gs__required">*</span>}
        </label>
      )}
      <select
        id={id}
        required={required}
        className="gs__guide-form-input gs__guide-form-select"
        {...selectProps}
      >
        {placeholder != null && (
          <option value="">{placeholder}</option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

FormSelect.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
};

export default FormSelect;
