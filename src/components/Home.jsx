import React from "react";
import myvideo from "../Images/myvideo.mp4";
import "../CSS/Home.css";

function Home() {
  return (
    <>
      <div className="video-container">
        <video loop muted autoPlay>
          <source src={myvideo} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Home;
