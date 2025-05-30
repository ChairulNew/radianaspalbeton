import React, { useState, useEffect } from "react";
import "./Achievement.css";
import { FaAward, FaDiagramProject, FaUsersLine } from "react-icons/fa6";
import Odometer from "react-odometerjs";
import { GiTeamIdea } from "react-icons/gi";

const Achievement = () => {
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [teams, setTeams] = useState(0);
  const [awards, setAwards] = useState(0);
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setClients(120);
      setProjects(150);
      setTeams(100);
      setAwards(10);
    }, 3000);
    return () => clearTimeout(timeOutId);
  }, []);
  return (
    <div className="achievement_container">
      {/* Start achiement */}
      <div className="achievement">
        <div className="icon_container">
          <FaUsersLine />
        </div>
        <div className="details">
          <div className="count_row">
            <Odometer value={clients} className="title" />
            <h1 className="g-text title">K</h1>
          </div>
          <small className="text_muted">Happy customer</small>
        </div>
      </div>
      {/* End achiement */}
      {/* Start Projects */}
      <div className="achievement">
        <div className="icon_container">
          <FaDiagramProject />
        </div>
        <div className="details">
          <div className="count_row">
            <Odometer value={projects} className="title" />
            <h1 className="g-text title">+</h1>
          </div>
          <small className="text_muted">Completed Project</small>
        </div>
      </div>
      {/* End Projects */}
      {/* Start Teams */}
      <div className="achievement">
        <div className="icon_container">
          <GiTeamIdea />
        </div>
        <div className="details">
          <div className="count_row">
            <Odometer value={teams} className="title" />
            <h1 className="g-text title">+</h1>
          </div>
          <small className="text_muted">Expert Workers</small>
        </div>
      </div>
      {/* End Teams */}
      {/* Start Awards */}
      <div className="achievement">
        <div className="icon_container">
          <FaAward />
        </div>
        <div className="details">
          <div className="count_row">
            <Odometer value={awards} className="title" />
            <h1 className="g-text title">+</h1>
          </div>
          <small className="text_muted">Awards Winning</small>
        </div>
      </div>
      {/* End Awards */}
    </div>
  );
};

export default Achievement;
