// src/components/Service/Service_detail.jsx
import React from "react";
import Navbar from "../../Navbar/Index";
import "./ServiceDetail.css";
import { servicesdetail } from "../../../data";
import Footer from "../../Footer/Index";
import useConfigCompanyStore from "../../../store/configCompany.store";
import { Metadata } from "../../../components/headMetaData";

const Service_detail = () => {
  const { storeCompanyData } = useConfigCompanyStore();

  return (
    <section id="servicedetail">
      <Metadata
        title={`Layanan - ${storeCompanyData?.title_web}`}
        description={storeCompanyData?.descripsi_web}
      />
      <Navbar />
      <div className="container">
        <h1 className="title">Layanan Kami</h1>
        <div className="servicecards">
          {servicesdetail.map((service) => (
            <div className="servicecard" key={service.id}>
              <div className="icon_service_detail">{service.icon}</div>
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
              <h3 className="card_title">{service.title}</h3>
              <p className="card_description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Service_detail;
