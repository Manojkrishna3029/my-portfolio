import React from "react";
import data from "../data";

const Hero = () => {
  return (
    <section className="hero" id="home" aria-label="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <h2 className="eyebrow">Hello, I'm</h2>
          <h1>{data.name}</h1>
          <p className="hero-title">{data.title}</p>
          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="/resum.pdf" className="btn-outline" download>
              Download Resume
            </a>
          </div>

        </div>

        <div className="hero-right">
          <div className="avatar-glass">
            <img src="/me.jpg" alt="profile placeholder" className="avatar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
