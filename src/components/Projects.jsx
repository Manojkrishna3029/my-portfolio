import React from "react";
import data from "../data";

const Projects = () => (
  <section className="projects" id="projects">
    <div className="container">
      <h2>Projects</h2>
      <div className="project-grid">
        {data.projects.map((p, i) => (
          <article className="project-card" key={i}>
            <div className="project-header">
              <h3>{p.name}</h3>
              <span className={`status ${p.status.toLowerCase().replace(/\s+/g, "-")}`}>
                {p.status}
              </span>
            </div>
            <p>{p.description}</p>
            <div className="project-actions">
              {p.link && p.link !== "#" ? (
                <a href={p.link} target="_blank" rel="noreferrer" className="btn-primary small">Visit</a>
              ) : (
                <button className="btn-outline small" disabled>Coming Soon</button>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
