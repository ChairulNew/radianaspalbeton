import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import Slider from "react-slick";
// import react slider library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// ambil data testimonial
import { FaStar } from "react-icons/fa";
import TestimoniService from "../../services/testimoniService";
import parse from "html-react-parser";

const Testimonial = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const testimoniService = TestimoniService();
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState([]);
  const [error, setError] = useState(null);

  const getDataTestimoni = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await testimoniService.getAllTestimoni();
      setListData(response.data || []);
    } catch (error) {
      console.error("Error fetching testimoni:", error);
      setError("Failed to load testimoni. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataTestimoni();
  }, []);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    centerMode: false,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000,
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
  return (
    <section id="testimonial">
      <div className="container">
        <h1 className="title">
          Testimoni <span className="g-text">klien</span>
        </h1>
        <h3 className="sub_title">Apa yang klien kami katakan</h3>
        <Slider {...settings} className="testimonial_container">
          {listData &&
            listData.map((list, index) => (
              <React.Fragment key={index}>
                <div className="user_row">
                  <div className="profile">
                    {/* <FaUser /> */}
                    <img
                      src="https://img.freepik.com/premium-psd/contact-icon-illustration-isolated_23-2151903357.jpg?semt=ais_hybrid&w=740"
                      alt={list.name}
                    />
                  </div>
                  <div className="details">
                    <h3 className="name">{list.name}</h3>
                    {/* <small className="text_muted">Walikota medan</small> */}
                  </div>
                </div>
                <p className="text_muted content">{parse(list.description)}</p>
                {/* <div className="stars_container">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div> */}
              </React.Fragment>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
