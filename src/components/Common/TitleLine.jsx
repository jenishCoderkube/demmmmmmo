"use client";
import React from "react";
import { usePathname } from "next/navigation";

function TitleLine({ title, theme = "dark" }) {
  const pathname = usePathname();
  const isDarkFooter = theme === "dark";

  const displayTitle =
    title ||
    (pathname && pathname.includes("/Article")
      ? "Press Releases"
      : pathname && pathname.includes("/JobDescription")
        ? "Expert Career Tweaks"
        : pathname && pathname.includes("/contact")
          ? "Explore Other Office"
          : "Press Releases");

  return (
    <div
      className="gs__blog-articles-row"
      data-theme={isDarkFooter ? "section-dark" : "section-light"}
    >
      <span className="gs__blog-articles-text">{displayTitle}</span>
      <hr className="gs__blog-articles-divider" />
    </div>
  );
}

export default TitleLine;
