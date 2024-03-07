import React from 'react'
import "../CSS/Navbar.css"
import { Link } from "react-scroll";
import vishallodhalogo from "../Images/vishallodhalogo.png"

function Navbar() {
  return (
    <>
    <nav>
  <div className="header-img">
    <img src={vishallodhalogo} alt="logo-image" />
  </div>

  <ul className="header-ul">
    <li>
      <Link to="home" smooth={true} duration={350} >HOME</Link>
    </li>
    <li>
      <Link to="about" smooth={true} duration={350} >ABOUT</Link>
    </li>
    <li>
      <Link to="skills" smooth={true} duration={350} >SKILLS</Link>
    </li>
    <li>
      <Link to="projects" smooth={true} duration={350} >PROJECTS</Link>
    </li>
    <li>
      <Link to="contact" smooth={true} duration={350} >CONTACT</Link>
    </li>
    <li>
      <Link to="footer" smooth={true} duration={350} >FOOTER</Link>
    </li>
  </ul>
</nav>
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Navbar
