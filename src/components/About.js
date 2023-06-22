import React from "react";
import aboutImage from "../images/about-img.jpeg";

const About = () => {
  return (
    <>
      <section className="section about">
        <div className="sectoin-center about-center">
          {/* about img */}
          <article className="about-img">
            <img src={aboutImage} alt="about-image" className="hero-photo"/>
          </article>
          <article className="about-info">
            {/* section title */}
            <div className="section-title about-title">
              <h2>About</h2>
              <div className="underline"></div>
            </div>
            {/* end of section title */}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
             <a href="about.html" className="btn">about me</a>
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
