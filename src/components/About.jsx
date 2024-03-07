import React from "react";
import full from "../Images/full.png";

import "../CSS/About.css";

function About({ id,className }) {
  return (
    <div id={id}  className={className}>
      <section className="about-start">
        <h1 style={{ color: "white" }}>ABOUT-ME</h1>

        <p>
          Hello! I'm VISHAL LODHA, a passionate React.js developer with a
          Bachelor's degree in Electronics and Communication Engineering (B.Tech
          ECE). I thrive on turning ideas into reality through clean, efficient,
          and scalable code.
        </p>

        <div className="aboutme-section">
          <ol className="aboutme-section-ul">
            <li>PROFESSIONAL-EXPERIENCE : 1-YEAR</li>
            <li>COMPANY-NAME : AFFINITY-STEPS</li>
            <li>ROLE : REACT-JS DEVELOPER</li>
            <li>DEGREE : BTECH</li>
            <li>BRANCH : ECE</li>
            <li>EMAIL : vishallodha1998@hmail.com</li>
            <li>PHONE : 7728974374</li>
          </ol>
        </div>

        <img src={full} />
      </section>
    </div>
  );
}

export default About;
