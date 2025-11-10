import React from "react";
import data from "../data";

const Skills = () => (
  <section className="skills" id="skills">
    <div className="container">
      <h2>Skills</h2>
      <div className="skills-grid">
        {data.skills.map((skill, idx) => (
          <div className="skill-card" key={idx}>
            <div className="skill-icon">{skill.split("")[0]}</div>
            <div className="skill-name">{skill}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
