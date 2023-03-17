import React from "react";
import Mail from '../../img/mail-icon.png'
import Git from '../../img/github-icon.png'
import Insta from "../../img/instagram-icon.png"
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <main className="header-titles">
        <h1 className="header-h1">Andrew Solutions</h1>
        <h2 className="header-h2">Developer</h2>
      </main>
      <section className="tabs">
        <p>About</p>
        <span className="projects-tab">Projects</span>
        <p>contact </p>
      </section>
      <section className="social-media">
        <div className="header-mail social-media-item">
          <img src={Mail} alt="mail icon" loading="lazy" className="header-img__mail" />
        </div>
        <div className="header-git social-media-item">
          <img src={Git} alt="git icon" loading="lazy" className="header-img__git" />
        </div>
        <div className="header-insta social-media-item">
          <img src={Insta} alt="instagram icon" loading="lazy" className="header-img__insta" />
        </div>
      </section>
      <div className="theme">
        <button className="theme-btn">Theme</button>
        <span className="theme-text">dark / light</span>
      </div>
    </div>
  );
}
