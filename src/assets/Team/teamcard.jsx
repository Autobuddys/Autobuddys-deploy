import React from "react";
import "./team.css";
import { Link } from "react-router-dom";
import Linkedin from "./images/linkedin.png"

const temp = (props) => {
  return (
    <div className="project-card_team_autobuddys">
      <Link to={props.linkedin}><img src={props.imgsrc} alt="imgaga" /></Link>
      <h2 className="project-title_team_autobuddys">{props.title}</h2>
      <div className="pro-details_team_autobuddys">
        <h6>{props.text}</h6>
      </div>
    </div>
  );
};

export default temp;
