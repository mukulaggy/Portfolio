import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Mukul Agrawal</h4>
      <h4>Copyright &copy; 2025 MA</h4>
      <div className='footerLinks'>
        <a href="https://github.com/mukulaggy" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/mukul-agrawal-2472b226b/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:aggymukul@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer