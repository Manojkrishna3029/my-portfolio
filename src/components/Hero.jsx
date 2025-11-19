import React from "react";
import shenaImge from "../assets/shena.jpg";
import resumePDF from "../assets/resume.pdf";

const Hero = () => {
  return (
    <section className="hero" id="home" aria-label="hero">
      <div className="hero-inner">
        {/* Left Section */}
        <div className="hero-left">
          <h2 className="eyebrow">Hi, I'm</h2>
          <h1 className="hero-name">Kandregula Manoj Krishna</h1>
          <p className="hero-title">
            Aspiring Web Developer | Frontend Enthusiast
          </p>
          <p className="hero-objective">
            Passionate web developer with a knack for creating interactive, user-friendly web experiences. Eager to innovate and continuously learn new technologies.
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href={resumePDF} className="btn-outline" download>
              Download Resume
            </a>
            <a href={resumePDF} target="_blank" className="btn-outline">
              View Resume
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="hero-right">
          <div className="avatar-glass">
            <img
              src={shenaImge}
              alt="Kandregula Manoj Krishna"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
