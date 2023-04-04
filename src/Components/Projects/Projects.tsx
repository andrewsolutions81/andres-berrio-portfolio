import React from "react";
import { projectsType, projectType } from "../../types/types";
import advanceimg from "../../img/advanceimg.png";
import tuvideoimg from "../../img/tuvideoimg.png";
import udemyimg from "../../img/udemyimg.png";
import "./Projects.css";

export const projects: projectsType = [
  {
    id: "3",
    link: "https://advance-liart.vercel.app/home",
    title: "Advance",
    img: advanceimg,
    description: "social media platform for uploading photos and videos.",
    role: "full stack developer",
    startDate: "2022 / 12 / 02",
    endDate: "2022 / 12 / 02",
    tech: ["javaScript", "nodeJs", "Express", "mongoDb", "mongoose", "React"],
  },
  {
    id: "2",
    link: "https://mir-topv24-udemy-frontend.vercel.app/",
    title: "Udemy(clone)",
    img: udemyimg,
    description: "social media",
    role: "full stack developer , Back end Architect",
    startDate: "2022 / 12 / 02",
    endDate: "2022 / 12 / 02",
    tech: ["javaScript", "nodeJs", "Express", "mongoDb", "mongoose", "React"],
  },
  {
    id: "1",
    link: "https://tuvideo-frontend-ten.vercel.app/",
    title: "TuVideo",
    img: tuvideoimg,
    description:
      "Video platform for uploading video, following channels, comment and like videos!",
    role: "Full Stack Developer",
    startDate: "2022 / 12 / 02",
    endDate: "2022 / 12 / 02",
    tech: ["javaScript", "nodeJs", "Express", "mongoDb", "mongoose", "React"],
  },
];

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
                <img className="img" src={project.img} alt={project.title} loading="lazy" />
              </section>
            </main>
          </li>
        ))}
      </ul>
    </div>
  );
}
