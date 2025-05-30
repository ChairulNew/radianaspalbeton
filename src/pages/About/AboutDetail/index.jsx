import React from "react";
import { aboutSteps } from "../../../data";
import Footer from "../../Footer/Index";
import Navbar from "../../Navbar/Index";
import { Chrono } from "react-chrono";
import "./AboutDetail.css";
import {
  about_image,
  building_1,
  building_2,
  building_3,
} from "../../../assets";
import { FaCheck } from "react-icons/fa";
import useConfigCompanyStore from "../../../store/configCompany.store";
import { Metadata } from "../../../components/headMetaData";

const AboutDetail = () => {
  const { storeCompanyData } = useConfigCompanyStore();

  return (
    <section id="aboutdetail" className="">
      <Metadata
        title={`About - ${storeCompanyData?.title_web}`}
        description={storeCompanyData?.descripsi_web}
      />
      <Navbar />
      <div id="about">
        <div className="container">
          <div className="column company_photo">
            <img src={about_image} alt="Radian beton" />
          </div>
          <div className="column">
            <h1 className="title">
              Tentang
              <span className="g-text"> Kami</span>
            </h1>
            <h3 className="sub_title">
              Mewujudkan visi dari pondasi yang kuat
            </h3>
            <div className="company_media_container">
              <div className="box">
                <img src={building_1} alt="" />
              </div>
              <div className="box">
                <img src={building_2} alt="" />
              </div>
              <div className="box">
                <img src={building_3} alt="" />
              </div>
            </div>
            <p className="text_muted description">
              {storeCompanyData && storeCompanyData.about_company}
            </p>
            <div className="group">
              <div className="row">
                <div className="icon_container">
                  <FaCheck />
                </div>
                <div className="details">
                  <p className="text_muted">Konsultasi</p>
                  <h3>Gratis</h3>
                </div>
              </div>
              <div className="row">
                <div className="icon_container">
                  <FaCheck />
                </div>
                <div className="details">
                  <p className="text_muted">Pekerja</p>
                  <h3>Berpengalaman</h3>
                </div>
              </div>
              <div className="row">
                <div className="icon_container">
                  <FaCheck />
                </div>
                <div className="details">
                  <p className="text_muted">Layanan</p>
                  <h3>Dukungan</h3>
                </div>
              </div>
              <div className="row">
                <div className="icon_container">
                  <FaCheck />
                </div>
                <div className="details">
                  <p className="text_muted">Beton</p>
                  <h3>berkualitas</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="title">Perjalanan Kami</h2>

        <div className="chrono-container">
          <Chrono
            items={aboutSteps.map((step) => ({
              title: step.title,
              cardTitle: step.title,
              cardSubtitle: step.year,
              cardDetailedText: step.description,
              media: {
                type: "IMAGE",
                source: {
                  url: step.image,
                },
              },
            }))}
            mode="VERTICAL_ALTERNATING"
            slideShow
            theme={{
              primary: "#ff7a59",
              secondary: "#1d1d1d",
              cardBgColor: "#ffffff",
              cardForeColor: "#1d1d1d",
              titleColor: "#ff7a59",
            }}
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default AboutDetail;
