import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Mukul Agrawal</h4>
      <h4>Copyright &copy; 2025 MA</h4>
      <div className='footerLinks'>
        <a href="https://github.com/mukulaggy" ><FaGithub/></a>
        <a href="https://www.linkedin.com/in/mukul-agrawal-2472b226b/" ><FaLinkedin/></a>
        <a href='mailTo:aggymukul@gmail.com'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer