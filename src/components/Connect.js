import React from "react";
import project1 from "../images/project-1.jpeg";
import videoDisplay from "../videos/connect.mp4";

const Connect = () => {
  return (
    <>
      <section className="connect">
        <video
          controls
          autoPlay
          muted
          loop
          className="video-container"
          poster={project1}
        >
          <source src={videoDisplay} />\ sorry your browser does not support
          embedded video
        </video>
        <div className="video-banner">
          <div className="section-title ">
            <h2>let's get in touch</h2>
            <div className="underline"></div>
            <p className="video-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley Lorem
            </p>
            <a className="btn" href="#contact">contact me</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Connect;
