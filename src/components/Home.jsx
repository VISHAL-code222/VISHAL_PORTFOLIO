import React from "react";
import myvideo2 from "../Images/myvideo2.mp4";
import "../CSS/Home.css";

function Home() {
  return (
    <>
      <div className="video-container">
        <video loop muted autoPlay>
          <source src={myvideo2} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Home;
