import React from "react";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJava,
  FaMicrosoft,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "HTML/CSS", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "MS Office", icon: <FaMicrosoft />, color: "#D83B01" },
    { name: "SQL Database", icon: <SiMysql />, color: "#00758F" },
    { name: "Java", icon: <FaJava />, color: "#E76F00" },
    { name: "React.js", icon: <FaReact />, color: "#61DBFB" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-heading">⚙️ Technical Skills</h2>
        <div className="skills-showcase">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="skill-box"
              style={{ "--glow-color": skill.color }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
