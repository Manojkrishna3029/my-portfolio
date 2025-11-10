import React from "react";
import data from "../data";

const About = () => (
  <section className="about" id="about">
    <div className="container">
      <h2>About Me</h2>
      <p className="about-text">{data.about}</p>
    </div>
  </section>
);

export default About;
