import React from "react";
import { useNavigate } from "react-router-dom";
import Linkedin from "../../img/linkedin-logo.png";
import Mail from "../../img/mail-icon.png";
import Git from "../../img/github-icon.png";
import Insta from "../../img/instagram-icon.png";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const emailAddress = "andrewsolutions81@gmail.com";
  const mailtoLink = `mailto:${emailAddress}`;

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
        <span className="about-tab single-tab" onClick={navigateAbout}>
          About
        </span>
        <span className="projects-tab single-tab" onClick={navigateProjects}>
          Projects
        </span>
        <span className="contact-tab single-tab" onClick={navigateContact}>
          Contact
        </span>
      </section>
      <section className="social-media">
        <div className="header-mail social-media-item">
          <a href={mailtoLink}>
            <img
              src={Mail}
              alt="mail icon"
              loading="lazy"
              className="header-img__mail"
            />
          </a>
        </div>
        <div className="header-linkedin social-media-item">
          <a href="https://www.linkedin.com/in/andres-berrio/">
            <img
              src={Linkedin}
              alt="linkedin icon"
              loading="lazy"
              className="header-img__linkedin"
            />
          </a>
        </div>
        <div className="header-git social-media-item">
          <a href="https://github.com/andrewsolutions81">
            <img
              src={Git}
              alt="git icon"
              loading="lazy"
              className="header-img__git"
            />
          </a>
        </div>
        <div className="header-insta social-media-item">
          <a href="https://www.instagram.com/andrewsolutions81/">
            <img
              src={Insta}
              alt="instagram icon"
              loading="lazy"
              className="header-img__insta"
            />
          </a>
        </div>
      </section>
      {/* <div className="theme">
        <button className="theme-btn">Language</button>
        <span className="theme-text">English / Espanish</span>
      </div> */}
    </div>
  );
}
