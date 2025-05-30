import React from "react";
import "./Project.css";
import Slider from "react-slick";
// import react slider library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// ambil data dari project
import { projects } from "../../data";
import { Link } from "react-router-dom";
import ProdukService from "../../services/produkService";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import noimg from "./../../assets/no-img.png"

const Project = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const produkService = ProdukService();
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState([]);
  const [error, setError] = useState(null);

  const getDataProduk = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await produkService.getAllProduk();
      setListData(response.data || []);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setError("Failed to load projects. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataProduk();
  }, []);

  const settings = {
    infinite: false,
    speed: 3000,
    slidesToShow: 2,
    centerMode: true,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: 0,
        },
      },
    ],
  };

  const styles = {
    section: {
      padding: "40px 20px",
      backgroundColor: "#f9f9f9",
    },
    title: {
      textAlign: "center",
      fontSize: "2rem",
      marginBottom: "10px",
    },
    subTitle: {
      textAlign: "center",
      fontSize: "1rem",
      color: "#666",
      marginBottom: "30px",
    },
    imageContainer: {
      height: "250px",
      overflow: "hidden",
      position: "relative",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.3s ease",
    },
    box: {
      padding: "15px",
      backgroundColor: "#fff",
      borderBottom: "1px solid #eee",
    },
    details: {
      padding: "20px",
      backgroundColor: "#fff",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#ff7a59",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      marginTop: "15px",
      transition: "background-color 0.3s ease",
    },
    centerButton: {
      textAlign: "center",
      marginTop: "30px",
    },
    error: {
      color: "#ff4d4f",
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#fff2f0",
      borderRadius: "4px",
      margin: "20px 0",
    },
    skeletonImage: {
      height: "250px",
      width: "100%",
    },
  };
  return (
    <section id="project">
      <div className="title">
        Project <span className="g-text">Kami</span>
        <h3 className="sub_title">
          Project yang sudah selesai dengan beton kami
        </h3>
      </div>
      <Slider {...settings} className="projects_container">
        {listData.map((project, index) => (
          <React.Fragment key={index}>
            <div className="image_container">
              {project.images && project.images[0]?.url ? (
                <img
                  src={apiUrl + project.images[0].url}
                  alt={project.name || "Project image"}
                  loading="lazy"
                  style={{ width: "100%", height: "500px", objectFit: "cover" }}
                />
              ) : (
                <img
                  src={noimg}
                  alt={project.name || "Project image"}
                  loading="lazy"
                  style={{ width: "100%", height: "500px", objectFit: "cover" }}
                />
              )}
            </div>
            <div className="box">
              <h1 className="name">{project.name}</h1>
            </div>
            <div className="details">
              <h3 className="name">{project.name}</h3>
              <p className="text_muted description">{parse(project.description)}</p>
              <button className="btn">pelajari lebih lanjut</button>
            </div>
          </React.Fragment>
        ))}
      </Slider>
      <div className="button_center_project">
        <Link to="/project-kami">
          <button className="btn btn_primary btn_primary:hover btn_service">
            Lihat Selengkapnya
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Project;
