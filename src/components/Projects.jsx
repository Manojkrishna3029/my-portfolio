import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    // 💼 Professional Projects
    {
      name: "Vaarush.in",
      description:
        "A live React-based frontend project showcasing clean UI and responsive design.",
      status: "Live",
      link: "https://vaarush.in",
      category: "Professional",
    },
    {
      name: "Inskillup.in",
      description:
        "An upcoming project focused on interactive learning experiences built with React.",
      status: "Coming Soon",
      link: "#",
      category: "Professional",
    },
    {
      name: "Full Stack Online Cloth Store",
      description:
        "Developed a full-stack MERN project for an online cloth store. The project integrates vendor and customer modules and is ready to go live.",
      status: "In Progress",
      link: "#",
      category: "Professional",
    },

    // 🎓 Academic Projects
    {
      name: "Music & Game Recommendation based on Emotion in Voice",
      description:
        "An AI/ML project that detects emotions from speech and recommends songs or games to improve the user's mood.",
      status: "Completed",
      link: "https://emotivoice-finalsem.streamlit.app/",
      category: "Academic",
    },
    {
      name: "Modern Encryption & Decryption Algorithm",
      description:
        "Designed a custom algorithm using ASCII values and binary operations for secure message encryption.",
      status: "Completed",
      link: "#",
      category: "Academic",
    },
    {
      name: "IoT Fire Fighting Robot",
      description:
        "An IoT project that detects fire using sensors and activates motors to extinguish it automatically.",
      status: "Completed",
      link: "#",
      category: "Academic",
    },
  ];

  // Helper to render projects based on category
  const renderProjects = (category) => {
    return projects
      .filter((p) => p.category === category)
      .map((p, i) => (
        <motion.div
          key={i}
          className="project-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="project-header">
            <h3>{p.name}</h3>
            <span
              className={`status ${p.status.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {p.status}
            </span>
          </div>
          <p className="project-desc">{p.description}</p>
          <div className="project-actions">
            {p.link && p.link !== "#" ? (
              <a href={p.link} target="_blank" rel="noreferrer" className="btn-live">
                Visit Project
              </a>
            ) : (
              <button className="btn-coming">Coming Soon</button>
            )}
          </div>
        </motion.div>
      ));
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">🚀 Projects</h2>

        {/* Professional Projects */}
        <h3 className="projects-subtitle">💼 Professional Projects</h3>
        <div className="projects-grid">{renderProjects("Professional")}</div>

        {/* Academic Projects */}
        <h3 className="projects-subtitle">🎓 Academic Projects</h3>
        <div className="projects-grid">{renderProjects("Academic")}</div>
      </div>
    </section>
  );
};

export default Projects;
