import React from "react";
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
      <div className="header-contact">ig github</div>
    </div>
  );
}
