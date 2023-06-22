import React from "react";
import project1 from './images/project-1.jpeg'
import project2 from './images/project-2.jpeg'
import project3 from './images/project-3.jpeg'
import project4 from './images/project-4.jpeg'

const Projects = () => {
  return (
    <>
      <section className="section projects">
        <div className="section-title">
          <h2>latest works</h2>
          <div className="underline"></div>

          <p className="project-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley Lorem
          </p>
        </div>
        <div className="section-center projects-center">
            {/* single project */}
                <a href="projecs.html" className="project-1">
                    <article className="project">
                    <img src={project1}  className="project-img" alt="single project"/>
                    <div className="project-info">
                        <h4>Projet title</h4>
                        <p>client name</p>
                    </div>
                    </article>
                    
                </a>
            {/* end of single project */}
            {/* single project */}
            <a href="projecs.html" className="project-2">
                    <article className="project">
                    <img src={project2}  className="project-img" alt="single project"/>
                    <div className="project-info">
                        <h4>Projet title</h4>
                        <p>client name</p>
                    </div>
                    </article>
                    
                </a>
            {/* end of single project */}
            {/* single project */}
            <a href="projecs.html" className="project-3">
                    <article className="project">
                    <img src={project3}  className="project-img" alt="single project"/>
                    <div className="project-info">
                        <h4>Projet title</h4>
                        <p>client name</p>
                    </div>
                    </article>
                     
                </a>
            {/* end of single project */}
            {/* single project */}
            <a href="projecs.html" className="project-4">
                    <article className="project">
                    <img src={project4}  className="project-img" alt="single project"/>
                    <div className="project-info">
                        <h4>Projet title</h4>
                        <p>client name</p>
                    </div>
                    </article>
                    
                </a>
            {/* end of single project */}

        </div>
      </section>
    </>
  );
};

export default Projects;
