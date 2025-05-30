import React, { useEffect, useState } from "react";
import "./Teams.css";
import { Link } from "react-router-dom";
import TeamService from "../../services/teamService";

const Teams = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const teamService = TeamService();
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState([]);
  const [error, setError] = useState(null);

  const getDataProduk = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await teamService.getAllTeam();
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
  return (
    <section id="team">
      <div className="container">
        <h1 className="title">
          Tim<span className="g-text"> Kami</span>
        </h1>
        <h3 className="sub_title">Jajaran Tim PT Radian Aspal Beton</h3>
        <div className="teams_container">
          {listData &&
            listData.map((team, index) => (
              <div className="team_card" key={index}>
                <div className="profile_container">
                  {team.images && team.images[0]?.url ? (
                    <img
                      src={apiUrl + team.images[0].url}
                      alt={team.name || "Project image"}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div>No Image Available</div>
                  )}
                </div>
                <div className="details">
                  <h3 className="name">{team.name}</h3>
                  <p className="text_muted">{team.description}</p>
                  <div className="social_container">
                    {/* {team.social.map((item, i) => (
                    <a
                      href={item.url || "#"}
                      target="_blank"
                      className="icon_container"
                      key={i}
                    >
                      {item.icon}
                    </a>
                  ))} */}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="button_center_team">
        <Link to="/tim-kami">
          <button className="btn btn_primary btn_primary:hover btn_service">
            Lihat tim kami
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Teams;
