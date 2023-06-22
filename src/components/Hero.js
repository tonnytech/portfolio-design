import React from "react";
import heroPhoto from "../images/hero-img.jpeg";

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="underline"> </div>
          <h1>I'm Tonny</h1>
          <h4>Freelance web and bobile ui/ux designer</h4>
          <a href="contact.html" className="btn hero-btn">
            Hire me
          </a>
          {/* social icons */}
          <ul className="social-icons hero-icons">
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                {" "}
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                {" "}
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                {" "}
                <i className="fab fa-squarespace"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                {" "}
                <i className="fab fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                {" "}
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </article>
        <article className="hero-img">
          <img src={heroPhoto} className="hero-photo" alt="Tonnytei" />
        </article>
      </div>
    </header>
  );
};

export default Hero;
