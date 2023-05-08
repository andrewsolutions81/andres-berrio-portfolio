import React from "react";
import "./Projects.css";
import { projectsType, projectType } from "../../types/types";
import { projects } from "../../data/projectsData";

export default function Projects() {
  return (
    <div className="Projects">
      <ul className="projects-ul">
        {projects.map((project: projectType) => (
          <li className="projects-li" key={project.id}>
            <main className="project-container">
              <section className="project-info">
                <h2 className="porject-title">{project.title}</h2>
                <span className="project-role">{project.role}</span>
                <p className="project-description">{project.description}</p>
                <ul className="skills-container">
                  {project.tech.map((t: string) => (
                    <li className="skills" key={t}>{`| ${t} `}</li>
                  ))}
                </ul>
              </section>
              <section className="project-image">
                <a href={project.link}>
                  <img
                    className="img"
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                  />
                </a>
              </section>
            </main>
          </li>
        ))}
      </ul>
    </div>
  );
}
