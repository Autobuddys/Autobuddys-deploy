import React from 'react'
import "./connect.css"
import logo_autism from "./images/autism.png"
import logo_elderly from "./images/elderly.png"
import Playstore from "./images/playstore_button1.png"
import Mseva from "./images/mseva.png"
import Apple from "./images/apple_button1.png"
import Webapp from "./images/webapp.webp"
import { Link } from "react-router-dom";

const connect = () => {
  const link1 = 'https://elderly.autobuddys.in/dashboard/app';
  const link2 = 'https://play.google.com/store/apps/details?id=com.aim4u.autobuddys';
  const link3 = 'https://apps.apple.com/us/app/autobuddys/id6476968391';
  const link4 = 'https://apps.mgov.gov.in/details?appid=2173'
  return (
    <div className='logo_center'>
    <h5> Start your Journey towards better health & Lifestyle
VISIT app and website</h5>
      <div className='logo'>
          <div className='elder'>
              <div className='logo_elderly'>
                <img src={logo_elderly} alt='logo_elderly'/>    
              </div>
                <div className='Webapp'> <Link to={link1}><img src={Webapp} alt='webapp'/></Link></div>
          </div>
          <div className='autism'>
              <div className='logo_autism'> 
                <img src={logo_autism} alt='logo_autism'/></div>
                <div className='autism_button'>
                  <div className='playstore'>  <Link to={link2}><img src={Playstore} alt='logo_autism'/></Link></div>
                  <div className='Apple'> <Link to={link3}><img src={Apple} alt='logo_autism'/></Link></div>
                  <div className='Mseva'> <Link to={link4}><img src={Mseva} alt='logo_autism'/></Link></div>
                </div>
          </div>
          </div>
    </div>
  )
}

export default connect