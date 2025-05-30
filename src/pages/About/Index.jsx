import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { about_image, building_1, building_2, building_3 } from "../../assets";
import { FaCheck } from "react-icons/fa";
import useConfigCompanyStore from "../../store/configCompany.store";
import { Metadata } from "../../components/headMetaData";

const About = () => {
  const { storeCompanyData } = useConfigCompanyStore();

  return (
    <div id="about">
      <Metadata
        title={`About - ${storeCompanyData?.title_web}`}
        description={storeCompanyData?.descripsi_web}
      />
      <div className="container">
        <div className="column company_photo">
          <img src={about_image} alt="Radian beton" />
        </div>
        <div className="column">
          <h1 className="title">
            Tentang
            <span className="g-text"> Kami</span>
          </h1>
          <h3 className="sub_title">Mewujudkan visi dari pondasi yang kuat</h3>
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
          <div className="buttons_container">
            <Link to="/tentang-kami" smooth={true} className="btn">
              Explore
            </Link>
            <Link smooth={true} className="btn btn_primary">
              Get a quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
