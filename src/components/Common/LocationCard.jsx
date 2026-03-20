"use client";
import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import "@/app/globals.css";

// Example static data for demonstration
const exampleMapImage = "/assets/london.jpg";

const staticLocations = [
  {
    image: exampleMapImage,
    title: "United States",
    location: "California",
  },
  {
    image: exampleMapImage,
    title: "United Kingdom",
    location: "York, North Yorkshire",
  },
  {
    image: exampleMapImage,
    title: "Switzerland",
    location: "Zurich",
  },
  {
    image: exampleMapImage,
    title: "Germany",
    location: "Frankfurt",
  },
  {
    image: exampleMapImage,
    title: "Spain",
    location: "Barcelona",
  },
  {
    image: exampleMapImage,
    title: "Bulgaria",
    location: "Sofia",
  },
];

const LocationCard = ({ image, title, location, onClick }) => {
  return (
    <div
      className="gs__location-card"
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="gs__location-card-image">
        <Image src={image} alt={title} width={300} height={200} />
      </div>
      <div className="gs__location-card-body">
        <h3 className="gs__location-card-title">{title}</h3>
        <p className="gs__location-card-subtitle">{location}</p>
      </div>
    </div>
  );
};

LocationCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

// Optionally: export the static data for use elsewhere
export { staticLocations };
export default LocationCard;
