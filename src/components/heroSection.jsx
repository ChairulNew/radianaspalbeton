import React from "react";
import { Link } from "react-router-dom";
import "./heroSection.css";

const HeroSection = ({ 
  title = "Tentang Kami", 
  breadcrumbs = [
    { label: "Beranda", path: "/" },
    { label: "Tentang Kami" }
  ],
  backgroundImage = "https://images.unsplash.com/photo-1551295022-de5522c94e08?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  overlayOpacity = 0.6
}) => {
  return (
    <section
      className="about-hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="about-hero-content">
        <h1>{title}</h1>
        <div className="breadcrumb">
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              {item.path ? (
                <Link to={item.path}>{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}
              {index < breadcrumbs.length - 1 && " / "}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div 
        className="about-hero-overlay" 
        style={{ opacity: overlayOpacity }}
      ></div>
    </section>
  );
};

export default HeroSection;