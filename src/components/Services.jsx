import "../styles/services.css"
import React from "react";

export default function Services(){

  return (
    <section id="services" className="services">
      <div className="main-text scroll-scale">
        <span>What I Will Do For You</span>
        <h2>Our Services</h2>
      </div>
      <div className="section-services scroll-bottom">
        <div className="service-box">
          <i className="bx bxs-layer service-icon"></i>
          <h3>Social Media</h3>
          <p>
            Our company always provides high-quality social media services that
            are guaranteed to boost your social media presence. Services are
            provided by real users.
          </p>
          <div className="btn-box service-btn">
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
        <div className="service-box">
          <i className="bx bx-code-alt service-icon"></i>
          <h3>Web Development</h3>
          <p>
           Web development is the process of designing,
           creating, and maintaining websites using various programming 
           languages and modern technologies.
          </p>
          <div className="btn-box service-btn">
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
        <div className="service-box">
          <i className="bx bx-desktop service-icon"></i>
          <h3>Graphic Designing</h3>
          <p>
            Graphic design is a creative discipline that involves visual
            communication through the use of images, typography, and layout to
            convey a message or idea.
          </p>
          <div className="btn-box service-btn">
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}