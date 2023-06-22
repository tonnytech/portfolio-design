import React from "react";

const Services = () => {
  return (
    <>
      <section className="section bg-grey">
        <div className="section-title services-title">
          <h2>services</h2>
          <div className="underline"></div>
        </div>
        <div className="services-center section-center">
          {/* single service */}
          <article className="service">
            <i className="fas fa-code service-icon"></i>
            <h4> web development</h4>
            <div className="underline"></div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
          </article>
          {/* end of single service */}
          {/* single service */}
          <article className="service">
            <i className="fab fa-sketch service-icon"></i>
            <h4> web design</h4>
            <div className="underline"></div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
          </article>
          {/* end of single service */}
          {/* single service */}
          <article className="service">
            <i className="fab fa-android service-icon"></i>
            <h4> app design</h4>
            <div className="underline"></div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
          </article>
          {/* end of single service */}
        </div>
      </section>
    </>
  );
};

export default Services;
