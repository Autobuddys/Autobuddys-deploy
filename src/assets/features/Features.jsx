import React from 'react'
import "./features.css"
import Teamcard from "./Featurescard"
import Teamcardata from "./Featuresdata" 

const team = () => {
  return (
    <div className="work-container_team_features">
    <div className='spac_features'>
        <h1 className="temp_heading_team_features">
          Features
        </h1>
        </div>
        <div className='spcaee_features'>
      <div className="project-heading_team_features">
        <div className="project-container_team_features">
          {Teamcardata.map((val,ind)=>{
            return(
                <Teamcard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                />
            )
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default team;
