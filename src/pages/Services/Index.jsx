import React from "react";
import "./Services.css";
import { services } from "../../data";
import ServiceCard from "./ServiceCard/Index";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="service_top">
          <h1 className="title">
            {" "}
            Layanan <span className="g-text">Kami</span>
          </h1>
          <h3 className="sub_title">Layanan yang kami sajikan</h3>
        </div>
        <div className="services_container">
          {services.map((service, index) => (
            <ServiceCard
              icon={service.icon}
              name={service.name}
              description={service.description}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="button_center">
        <Link to="/layanan-kami">
          <button className="btn btn_primary btn_primary:hover btn_service">
            Info Layanan kami
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Services;
