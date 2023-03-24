import React from "react";
import ImgAndres from "../../img/imgandres-cu.jpeg";
import "./About.css";

const About = () => {
  return (
    <div className="About">
      <main className="about-main">
        <h1 className="about-name">Andres Berrio</h1>
        <img
          src={ImgAndres}
          alt="Handsome reliable guy"
          loading="lazy"
          className="about-img"
        />
      </main>
      <section className="about-section">
        <div className="about-skills">
          javaScript | React| NodeJs | express | mongoDb
        </div>
        <p className="about-text">
          Make it or fix it, developing and problem solving is my passion, I
          come from a media and filmmaking background and now develop full time.
          Working with a clear and structured plan towards a well defined
          objective is what attracted me to programming in the first place, the
          creativity for making the code easy to read and well thought out gives
          it the spice. Some major achievements included making a third season
          of Caja de herramientas , a youtube series about how general
          contractors can improve their own social media to be better known.
          Also making the campaign for the cancer awareness week for El Dorado
          international airport with daily videos of tips and how to see early
          signs and what entities could help in the process. The development
          experience has been using MERN stack to accomplish projects as a
          youtube clone with a team that I haven't previously worked with and
          gave me amazing knowledge as we had different experience levels. I am
          used to meeting new people and requirements, it is always fun ! Ask me
          anything. I will gladly try to help on your project or company. Feel
          free to request my CV, look at my projects and connect.
        </p>
      </section>
    </div>
  );
};

export default About;
