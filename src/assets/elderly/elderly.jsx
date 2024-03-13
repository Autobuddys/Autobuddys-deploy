import React from 'react'
import "./elderly.css"
import Webapp from "./images/webapp.webp"
import Elderly_img from "./images/elderly_img.png"
import { Link } from "react-router-dom";

const elderly = () => {
  const link1 = 'https://elderly.autobuddys.in/dashboard/app';
  return (
    <div className='elderly_start'>
        <h1>Autobuddys for Elderly</h1>
        <div className='elderly_sec'>
        <div className='elderly_img'>
          <div className='Elderly_img'><img src={Elderly_img} alt='elderly_img'/></div>
          <div className='elderly_Webapp'> <Link to={link1}><img src={Webapp} alt='webapp'/></Link></div>
        </div>
        <div className='elderly_info'>
        
        <p className='elderly_info_head'>Health Monitoring System</p>
        <p className='elderly_info_content'>
Autobuddys offers a user-friendly health monitoring system for the elderly, allowing them to effortlessly track their well-being. 
The system includes a machine to check pulse, oxygen levels, and body temperature, providing essential data for proactive health management. </p>


<p className='elderly_info_head'>Fall Detection Feature</p>
<p className='elderly_info_content'>
            Built-in fall detection technology for enhanced safety. Automatically detects falls and triggers alerts. Sends alerts to pre-saved contact numbers to notify caregivers or emergency services.
</p>

<p className='elderly_info_head'>User-Friendly Interface</p>
<p className='elderly_info_content'>
              Intuitive interface designed specifically for seniors. Simple navigation and easy-to-understand features. Enhances accessibility for elderly users with varying levels of tech proficiency.<br/>
</p> 
        </div>
       </div>
    </div>
  )
}

export default elderly