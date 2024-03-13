import React from "react";
import "./features.css";

const temp = (props) => {
  return (
    <div className="project-card_team_features">
      <img src={props.imgsrc} alt="imgaga" />
      <h2 className="project-title_team_features">{props.title}</h2>
      <div className="pro-details_team_features">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default temp;
