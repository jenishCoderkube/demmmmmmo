"use client";

import React from "react";
import Image from "next/image";

function getInitials(name) {
  if (!name) return "?";
  const parts = String(name).trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase()).join("");
}

export default function TeamCard({ member }) {
  if (!member) return null;

  const {
    name,
    role,
    experienceLabel = "12 years experience",
    bio,
    photo,
  } = member;

  const initials = getInitials(name);

  return (
    <article className="gs__team-card" tabIndex={0}>
      <div className="gs__team-card-face gs__team-card-front">
        <div className="gs__team-card-meta">
          <h3 className="gs__team-card-name gs__h3-light-title">{name}</h3>
          {role && <p className="gs__team-card-role">{role}</p>}
        </div>

        <div className="gs__team-card-photo">
          {photo ? (
            <Image
              src={photo}
              alt={name ?? "Team member"}
              width={260}
              height={260}
              className="gs__team-card-img"
            />
          ) : (
            <div className="gs__team-card-photo-fallback" aria-hidden="true">
              {initials}
            </div>
          )}
        </div>

        {experienceLabel && (
          <div className="gs__team-card-pill">{experienceLabel}</div>
        )}
      </div>

      <div className="gs__team-card-face gs__team-card-back" aria-hidden="true">
        <div className="gs__team-card-meta">
          <h3 className="gs__team-card-name gs__h3-light-title">{name}</h3>
          {role && <p className="gs__team-card-role">{role}</p>}
        </div>

        {bio && <p className="gs__team-card-bio">{bio}</p>}

        {experienceLabel && (
          <div className="gs__team-card-pill">{experienceLabel}</div>
        )}
      </div>
    </article>
  );
}
