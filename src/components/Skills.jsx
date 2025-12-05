import React, { useState } from "react";
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

// Import ONLY the certificates stored inside src/
import pycert from "../assets/certificates/python.jpg";

const Skills = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const skills = [
    { name: "Python", icon: <FaPython />, color: "#3776AB", certificate: pycert },

    // These will work only if images are moved to public/assets/certificates/
    { name: "HTML/CSS", icon: <FaHtml5 />, color: "#E34F26", certificate: "/assets/certificates/html_css.jpg" },
    { name: "MS Office", icon: <FaMicrosoft />, color: "#D83B01", certificate: "/assets/certificates/ms_office.jpg" },
    { name: "SQL Database", icon: <SiMysql />, color: "#00758F", certificate: "/assets/certificates/sql.jpg" },
    { name: "Java", icon: <FaJava />, color: "#E76F00" },
    { name: "React.js", icon: <FaReact />, color: "#61DBFB", certificate: "/assets/certificates/react.jpg" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#68A063", certificate: "/assets/certificates/node.jpg" },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-heading">⚙️ Technical Skills</h2>

        <div className="skills-showcase">
          {skills.map((skill, idx) => {
            const hasCert = Boolean(skill.certificate);

            return (
              <div
                key={idx}
                className={`flip-card ${hasCert ? "" : "no-flip"} ${
                  flippedIndex === idx ? "flipped" : ""
                }`}
                onClick={() => {
                  if (!hasCert) return; // prevent flip if no certificate
                  setFlippedIndex(flippedIndex === idx ? null : idx);
                }}
                style={{ "--glow-color": skill.color }}
              >
                <div className="flip-card-inner">
                  {/* FRONT */}
                  <div className="flip-card-front">
                    <div className="skill-icon">{skill.icon}</div>
                    <h3 className="skill-name">{skill.name}</h3>

                    {!hasCert && (
                      <p className="no-cert">No certificate available</p>
                    )}
                  </div>

                  {/* BACK (only if certificate exists) */}
                  {hasCert && (
                    <div className="flip-card-back">
                      <img
                        src={skill.certificate}
                        alt={`${skill.name} Certificate`}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
