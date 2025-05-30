import React from "react";
import "./Logo.css";
import { PiBuildingsFill } from "react-icons/pi";

const Logo = () => {
  return (
    <div className="logo">
      <div className="icon_container">
        <PiBuildingsFill />
      </div>
      <h1 className="name">
        <span>PT.Radian Aspal Beton</span>
      </h1>
    </div>
  );
};

export default Logo;
