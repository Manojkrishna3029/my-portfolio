import React from "react";
import { FaGraduationCap, FaLightbulb, FaVolleyballBall, FaLanguage } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const aboutData = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      items: [
        "MCA – 73%, Gayatri Vidya Parishad, 2024",
        "B.Sc (Chemistry) – 70%, D.V.N Degree College, Andhra University, 2022",
        "Intermediate (M.P.C) – 95%, Sri Chaitanya Junior College, 2019",
        "SSC – 95%, D.A.V Public School, 2017",
      ],
    },
    {
      icon: <FaLightbulb />,
      title: "Strengths",
      items: ["Hard and Smart Working", "Browsing Net & Problem Solving", "Quick-Learning & Adaptable"],
    },
    {
      icon: <FaVolleyballBall />,
      title: "Interests",
      items: ["Exploring ideas", "Playing Volleyball"],
    },
    {
      icon: <FaLanguage />,
      title: "Languages",
      items: ["English – Can communicate efficiently", "Telugu – Native / Bilingual proficiency"],
    },
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-cards">
          {aboutData.map((section, index) => (
            <motion.div
              className="about-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="card-icon">{section.icon}</div>
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
