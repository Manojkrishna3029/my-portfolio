import React from "react";
import shenaImge from "../assets/shena.jpeg";
import resumePDF from "../assets/Resume.pdf";

const Hero = () => {
  return (
    <section className="hero" id="home" aria-label="hero">
      <div className="hero-inner">
        {/* Left Section */}
        <div className="hero-left">
          <h2 className="eyebrow">Hi, I'm</h2>
          <h1 className="hero-name">Kandregula Manoj Krishna</h1>
          <p className="hero-title">
            Associate at WTS | Aspiring Full-Stack Developer
          </p>
          <p className="hero-objective">
            Associate at WTS specializing in Image Quality Control (QC) and dataset validation. An aspiring Full-Stack Developer passionate about building modern, responsive web applications and continuously improving my skills in web technologies.
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
