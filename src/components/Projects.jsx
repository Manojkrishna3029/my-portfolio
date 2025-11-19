import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    // 💼 Office & Professional Projects
    {
      name: "Vaarush.in",
      description:
        "A live React-based frontend project showcasing clean UI and responsive design.",
      status: "Live",
      link: "https://vaarush.in",
    },
    {
      name: "Inskillup.in",
      description:
        "An upcoming project focused on interactive learning experiences built with React.",
      status: "Coming Soon",
      link: "#",
    },
    {
      name: "Full Stack Online Cloth Store",
      description:
        "Developed a full-stack MERN project for an online cloth store. The project integrates vendor and customer modules and is ready to go live.",
      status: "In Progress",
      link: "#",
    },

    // 🎓 Academic Projects
    {
      name: "Music & Game Recommendation based on Emotion in Voice",
      description:
        "An AI/ML project that detects emotions from speech and recommends songs or games to improve the user's mood.",
      status: "Completed",
      link: "https://emotivoice-finalsem.streamlit.app/",
    },
    {
      name: "Modern Encryption & Decryption Algorithm",
      description:
        "Designed a custom algorithm using ASCII values and binary operations for secure message encryption.",
      status: "Completed",
      link: "#",
    },
    {
      name: "IoT Fire Fighting Robot",
      description:
        "An IoT project that detects fire using sensors and activates motors to extinguish it automatically.",
      status: "Completed",
      link: "#",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">🚀 Projects</h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
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
                  className={`status ${p.status
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {p.status}
                </span>
              </div>
              <p className="project-desc">{p.description}</p>
              <div className="project-actions">
                {p.link && p.link !== "#" ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-live"
                  >
                    Visit Project
                  </a>
                ) : (
                  <button className="btn-coming">Coming Soon</button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
