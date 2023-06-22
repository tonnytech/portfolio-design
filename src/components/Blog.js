import React from "react";
import image1 from "../images/project-1.jpeg";
import image2 from "../images/project-2.jpeg";
import image3 from "../images/project-3.jpeg";
import image4 from "../images/project-4.jpeg";
import heroImage from '../images/hero-img-small.jpeg'

const Blog = () => {
  return (
    <>
      <section className="section blog">
        <div className="section-title">
          <h2>blog</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center blog-center">
          {/* single blog */}
          <div className="card">
            {/* card-frong */}
            <div className="card-side card-front">
              <img src={image1} alt="project-image" />
              <div className="card-info">
                <h4>article title</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley Lorem
                </p>
                <div className="card-footer">
                    <img src={heroImage} alt='image2' />
                    <p>7 min read</p>
                </div>
              </div>
            </div>
            {/* card back */}
            <div className="card-side card-back">
              <button className="btn">read more</button>
            </div>
          </div>
          {/* end of single blog */}
          {/* single blog */}
          <div className="card">
            {/* card-frong */}
            <div className="card-side card-front">
              <img src={image2} alt="project-image" />
              <div className="card-info">
                <h4>article title</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley Lorem
                </p>
                <div className="card-footer">
                    <img src={heroImage} alt='image2' />
                    <p>7 min read</p>
                </div>
              </div>
            </div>
            {/* card back */}
            <div className="card-side card-back">
              <button className="btn">read more</button>
            </div>
          </div>
          {/* end of single blog */}
          {/* single blog */}
          <div className="card">
            {/* card-frong */}
            <div className="card-side card-front">
              <img src={image3} alt="project-image" />
              <div className="card-info">
                <h4>article title</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley Lorem
                </p>
                <div className="card-footer">
                    <img src={heroImage} alt='image2' />
                    <p>7 min read</p>
                </div>
              </div>
            </div>
            {/* card back */}
            <div className="card-side card-back">
              <button className="btn">read more</button>
            </div>
          </div>
          {/* end of single blog */}
          {/* single blog */}
          <div className="card">
            {/* card-frong */}
            <div className="card-side card-front">
              <img src={image4} alt="project-image" />
              <div className="card-info">
                <h4>article title</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley Lorem
                </p>
                <div className="card-footer">
                    <img src={heroImage} alt='image2' />
                    <p>7 min read</p>
                </div>
              </div>
            </div>
            {/* card back */}
            <div className="card-side card-back">
              <button className="btn">read more</button>
            </div>
          </div>
          {/* end of single blog */}
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Blog;
