import React from "react";
import "./banner.css";

function Bannerimg({ imageSrc }) {
  return (
    <div className="slider-container">
      <div className="slide">
        <img src={imageSrc} />
      </div>
    </div>
  );
}

export default Bannerimg;
