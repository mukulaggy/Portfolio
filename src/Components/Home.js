import React from 'react';
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { CiCoffeeCup } from "react-icons/ci";
import Photo from '../images/photo.jpg'; // Import the photo

const Home = () => {
  return (
    <div>
      <div className='HomePage'>
        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Mukul Agrawal</b></h1>
          <Typed />
        </div>

        {/* Replace Lottie with the photo */}
        <div className="image-container">
          <img 
            className="round-image" 
            src={Photo} 
            alt="Mukul Agrawal" 
          />
        </div>
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love the process of changing a raw idea into a website or a product 
            that impacts lives. 
            I want to do work that challenges me as a developer & work that I can 
            be proud of.<br /><br />
            Passionate Computer Science student with expertise in full-stack development using the <b>MERN</b> stack. Adept at
            building scalable, user-centric applications through innovative solutions and efficient problem-solving techniques.
            Also, I love <b>coffee</b> <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home;