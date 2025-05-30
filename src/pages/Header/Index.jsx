import React from "react";
import "./Header.css";
import { Link } from "react-scroll";
// import gambar
import { hero_image } from "../../assets";

import Achievement from "../Achievement/Index";

const Header = () => {
  return (
    <header id="header">
      <div className="container full_height">
        <div className="row">
          <div className="column">
            <h1 className="title">
              Beton Kuat, {""}
              <span className="g-text">Bangunan Hebat</span>
            </h1>
            <p className="text_muted description">
              Kami percaya bahwa kekuatan sebuah bangunan dimulai dari kualitas
              beton yang tak tergoyahkan. Lewat material terbaik, proses yang
              presisi, dan tim yang berpengalaman, kami hadir untuk membangun
              struktur yang bukan hanya berdiri—tapi menginspirasi.
            </p>
            <div className="buttons_container">
              <Link to="services" smooth={true} className="btn">
                Our Services{" "}
              </Link>
              <Link to="contact" smooth={true} className="btn btn_primary">
                Contact us{" "}
              </Link>
            </div>
          </div>
          <div className="column">
            <div className="image_container">
              <img src={hero_image} alt="" />
            </div>
          </div>
        </div>
        <Achievement />
      </div>
    </header>
  );
};

export default Header;
