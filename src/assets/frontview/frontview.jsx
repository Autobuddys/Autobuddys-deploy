import React from "react";
import "./frontview.css";
import Bg from "../frontview/images/image_bg2.png";
import linkedinlogo from "./images/linkedin_logo.png"

import { Link } from "react-router-dom";

const frontview = () => {
  const link2='https://www.linkedin.com/company/autobuddys-an-intelligent-life-companion-research-project-for-autism-and-elderly/'
  return (
    <>
    <div className="head_frontview"> 
      <div className="auto">
        <div className="auto_part1">
        <Link to={link2}><h1>AutoBuddys</h1></Link>
        <div className="paragraph">
        <p>
          We provide an efficient, cost effective solution for the automated<br/>
          monitoring of autistic and elderly individuals.
        </p>
        <p className="linkedinlogo">
        For more updates, follow us on linkdin  <Link to={link2}><img src={linkedinlogo}/></Link>
        </p>
        </div>
        
        <Link to="/autism"><button>Autism</button></Link>
        <Link to="/elderly"><button>Elderly</button></Link>
        
        </div>
        <div className="auto_part2">
        <img src={Bg} alt="bg" />
        </div>
        </div>
      </div>
     
    </>
  );
};

export default frontview;
