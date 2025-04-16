import React from "react";
import bgVideo from "../assets/videobg.mp4";
import "./Home.css";
import Guns from "./Guns";

const Home = () => {
  return (
    <>
      {/* Video Background */}
      <div className="video-container">
        <video src={bgVideo} autoPlay loop muted playsInline />
      </div>

      {/* Page Content */}
      <div className="content">
        <section className="hero">
          <h1>Precision Meets Power</h1>
          <p>Scroll to explore our gun collection</p>
        </section>

        <section className="section">
          <h2>Our Top Guns</h2>
          <p>High-end models designed for performance.</p>
          <Guns/>
        </section>

     
      </div>
    </>
  );
};

export default Home;
