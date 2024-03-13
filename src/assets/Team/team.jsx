import React from 'react'
import "./team.css"
import Teamcard from "./teamcard"
import Teamcardata from "./teamcardata" 

const team = () => {
  return (
    <div className="work-container_team_autobuddys">
    <div className='spac_autobuddys'>
        <div className="temp_heading_team_autobuddys">
          Team Members
        </div>
        </div>
        <div className='spcaee_autobuddys'>
      <div className="project-heading_team_autobuddys">
        <div className="project-container_team_autobuddys">
          {Teamcardata.map((val,ind)=>{
            return(
                <Teamcard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                linkedin={val.linkedin}
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
