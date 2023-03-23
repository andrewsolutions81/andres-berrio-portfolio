import React from "react";
import { useNavigate } from "react-router-dom";
import Mail from "../../img/mail-icon.png";
import Git from "../../img/github-icon.png";
import Insta from "../../img/instagram-icon.png";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  const navigateHome = () => navigate("/home");
  const navigateAbout = () => navigate("/about");
  const navigateProjects = () => navigate("/projects");
  const navigateContact = () => navigate("/contact");

  return (
    <div className="Header">
      <main className="header-titles">
        <h1 className="header-h1" onClick={navigateHome}>
          Andrew Solutions
        </h1>
        <h2 className="header-h2" onClick={navigateHome}>
          Developer
        </h2>
      </main>
      <section className="tabs">
        <span className="about-tab" onClick={navigateAbout}>
          About
        </span>
        <span className="projects-tab" onClick={navigateProjects}>
          Projects
        </span>
        <span className="contact-tab" onClick={navigateContact}>
          Contact
        </span>
      </section>
      <section className="social-media">
        <div className="header-mail social-media-item">
          <img
            src={Mail}
            alt="mail icon"
            loading="lazy"
            className="header-img__mail"
          />
        </div>
        <div className="header-git social-media-item">
          <img
            src={Git}
            alt="git icon"
            loading="lazy"
            className="header-img__git"
          />
        </div>
        <div className="header-insta social-media-item">
          <img
            src={Insta}
            alt="instagram icon"
            loading="lazy"
            className="header-img__insta"
          />
        </div>
      </section>
      <div className="theme">
        <button className="theme-btn">Language</button>
        <span className="theme-text">English / Espanish</span>
      </div>
    </div>
  );
}
