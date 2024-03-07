import React from "react";
import "../CSS/Footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer({id,className}) {
  return (
    <div id={id}  className={className}>
      <section className="footer-main">
        <h1>VISHAL LODHA</h1>
        <p>
          Empowering businesses with MERN Stack solutions for seamless web
          experiences and robust applications. Let's innovate together!
        </p>

        <div className="footer-icons">
          

          <div className="footer-icons-inside"> <i class="bi bi-linkedin"></i></div>
          <div className="footer-icons-inside">  <i class="bi bi-github"></i></div>
          <div className="footer-icons-inside">  <i class="bi bi-twitter"></i></div>
          <div className="footer-icons-inside"> <i class="bi bi-facebook"></i></div>
          <div className="footer-icons-inside">  <i class="bi bi-instagram"></i></div>
        </div>



        <div className="footer-final">
            <h4>© Copyright by Vishal. All Rights Reserved</h4>
            <h5>Designed by Vishal Lodha</h5>
        </div>
      </section>
      </div>
  );
}

export default Footer;
