"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../app/globals.css";

/**
 * Reusable custom-styled checkbox with label and optional link.
 * On check, shows colored background plus checkmark.
 */
const FormCheckbox = ({
  id,
  label,
  linkHref,
  linkText,
  required = false,
  className = "",
  ...inputProps
}) => {
  // Support both controlled and uncontrolled
  const isControlled = inputProps.checked !== undefined;
  const [checked, setChecked] = useState(Boolean(inputProps.defaultChecked));
  const isChecked = isControlled ? inputProps.checked : checked;

  const handleChange = (e) => {
    if (!isControlled) setChecked(e.target.checked);
    if (typeof inputProps.onChange === "function") inputProps.onChange(e);
  };

  return (
    <div
      className={`gs__checkbox-wrapper ${className}`.trim()}
      style={{ position: "relative", display: "inline-flex", alignItems: "center" }}
    >
      <span style={{position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "1.25rem", height: "1.25rem"}}>
        <input
          type="checkbox"
          id={id}
          className="gs__checkbox"
          required={required}
          checked={isChecked}
          onChange={handleChange}
          style={{
            appearance: "none",
            WebkitAppearance: "none",
            MozAppearance: "none",
            width: "1.25rem",
            height: "1.25rem",
            border: "1.5px solid rgba(80, 80, 80, 1)",
            borderRadius: "0.3rem",
            outline: "none",
            position: "absolute",
            top: 0,
            left: 0,
            cursor: "pointer",
            margin: 0,
            background: isChecked
              ? "var(--brand-orange, #ff8323)"
              : "transparent",
            transition: "background .15s, border-color .15s",
            display: "inline-block",
            verticalAlign: "middle",
            zIndex: 1
          }}
          aria-checked={isChecked}
          {...inputProps}
        />
        {/* check icon overlays checkbox, centered flexibly */}
        <span
          className="custom-checkbox-box"
          aria-hidden="true"
          style={{
            pointerEvents: "none",
            position: "absolute",
            top: 0,
            left: 0,
            width: "1.25rem",
            height: "1.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2
          }}
        >
          <svg
            width="1.05rem"
            height="1.05rem"
            viewBox="0 0 18 18"
            aria-hidden="true"
            style={{
              opacity: isChecked ? 1 : 0,
              transition: "opacity .15s",
              display: "block"
            }}
          >
            <polyline
              points="4.5 9.5 8 13 14 6"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeWidth: "2.25",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }}
            />
          </svg>
        </span>
      </span>
      <label
        htmlFor={id}
        className="gs__checkbox-label"
        style={{
          cursor: "pointer",
          display: "inline-block",
          marginLeft: "0.4rem",
          verticalAlign: "middle",
          userSelect: "none",
        }}
      >
        {typeof label === "string" ? (
          <>
            {label}
            {linkHref && linkText && (
              <>
                {" "}
                <a
                  href={linkHref}
                  className="gs__checkbox-link"
                >
                  {linkText}
                </a>
              </>
            )}
          </>
        ) : (
          label
        )}
      </label>
    </div>
  );
};

FormCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  linkHref: PropTypes.string,
  linkText: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
};

export default FormCheckbox;
