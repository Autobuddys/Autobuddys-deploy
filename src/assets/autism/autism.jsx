import React from 'react'
import "./autism.css"
import Playstore from "./images/playstore_button1.png"
import Mseva from "./images/mseva.png"
import Apple from "./images/apple_button1.png"
import Img1 from "./images/img1.jpg"
import Img2 from "./images/img2.jpg"
import Img3 from "./images/img3.jpg"
import Img4 from "./images/img4.jpg"
import Autism_img from "./images/autism_img.png"
import { Link } from "react-router-dom";

const autism = () => {
  const link2 = 'https://play.google.com/store/apps/details?id=com.aim4u.autobuddys';
  const link3 = 'https://apps.apple.com/us/app/autobuddys/id6476968391';
  const link4 = 'https://apps.mgov.gov.in/details?appid=2173'
  return (
    <div className='autism_start'>
      <div className='autism_part1'>
      <div className='autism_part1_img'><img src={Autism_img}/></div>
      <div className='autism_part1_info'>
        <p className='autism_part1_info_heading'>What is Autism?</p>
        <p className='autism_part1_info_content'>  
        Autism, or Autism Spectrum Disorder (ASD), is a diverse neurodevelopmental condition involving challenges in social interaction, communication, and repetitive behaviors. Its spectrum nature results in varying symptoms and severity levels, emerging in early childhood with an uncertain cause, likely linked to genetic and environmental factors. Individuals with autism exhibit distinct strengths like attention to detail but may face difficulties in social cues and communication. Early intervention, specialized therapies, and support improve overall well-being by emphasizing individual strengths. Understanding and acceptance are crucial for creating an inclusive environment. </p>
        <p className='autism_part1_info_content'>

AutoBuddys, an innovative educational application, contributes to this inclusivity by boosting student engagement through development games that enhance recognition of colors, fruits, alphabets, distances, and various objects, fostering cognitive development and aligning with unique learning needs.
         </p>
      </div>
      </div>
      <div className='autism_part2'>
        <div className='autism_part2_img'>
          <img src={Img1}/>
          <img src={Img2}/>
          <img src={Img3}/>
          <img src={Img4}/>
        </div>
        <div className='autism_part2_buttons'>
          <div className='autism_part2_buttons_heading'>Download Now</div>
          <div className='autism_part2_buttons_img'>

            <Link to={link2}><img src={Playstore} alt='logo_autism'/></Link>
            <Link to={link3}><img src={Apple} alt='logo_autism'/></Link>
            <Link to={link4}><img src={Mseva} alt='logo_autism'/></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default autism