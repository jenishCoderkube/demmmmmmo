"use client";
import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "@/app/globals.css";

/**
 * Reusable custom file upload input styled like provided screenshot.
 * @param {string} id - Input id
 * @param {string} label - Label text
 * @param {string} accept - e.g. "image/*,.pdf"
 * @param {boolean} required
 */
const FormFileUpload = ({
  id,
  label = "Upload File",
  accept,
  required = false,
  className = "",
  ...inputProps
}) => {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "");
    // If the parent wants onChange, call it
    if (typeof inputProps.onChange === "function") {
      inputProps.onChange(e);
    }
  };

  return (
    <div
      className={`gs__guide-form-group gs__guide-form-file ${className}`.trim()}
      style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
    >
      {/* Only render label if passed, but button always shown */}
      {/* label for accessibility only, not for visible text */}
      {label && (
        <label
          htmlFor={id}
          className="gs__guide-form-label"
          style={{ display: "none" }}
        >
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        style={{
          appearance: "none",
          border: "1px solid #fff",
          borderColor: "rgba(255,255,255,.7)",
          color: "#fff",
          background: "transparent",
          borderRadius: "2.25rem",
          padding: "0.5rem 2rem",
          fontSize: "1rem",
          cursor: "pointer",
          outline: "none",
          fontWeight: "400",
          transition: "border-color .15s, color .15s, background .15s",
          ...(required && { borderColor: "#fff" }),
        }}
        className="custom-upload-btn"
        tabIndex={0}
      >
        {label}
      </button>
      <input
        ref={inputRef}
        type="file"
        id={id}
        accept={accept}
        required={required}
        style={{ display: "none" }}
        onChange={handleFileChange}
        {...inputProps}
      />
      <span
        style={{
          color: "#BDBDBD", //"rgba(184,184,184,1)"
          fontSize: "1rem",
          whiteSpace: "nowrap",
        }}
        className="upload-status-text"
      >
        {fileName ? fileName : "No file uploaded"}
      </span>
    </div>
  );
};

FormFileUpload.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  accept: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
};

export default FormFileUpload;










