import "../styles/portfolio.css"
import portfolioimage1 from "../assets/1.jpg"
import portfolioimage2 from "../assets/2.jpg"
import portfolioimage3 from "../assets/3.jpg"
import portfolioimage4 from "../assets/4.jpg"
import portfolioimage5 from "../assets/5.jpg"
import portfolioimage6 from "../assets/6.jpg"

import React, { useState } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const projects = [
    { id: 1, category: "Product", image: portfolioimage1 },
    { id: 2, category: "Product", image: portfolioimage2 }, 
    { id: 3, category: "Inter",   image: portfolioimage3 },
    { id: 4, category: "Inter",   image: portfolioimage4 },
    { id: 5, category: "Inter",   image: portfolioimage5 },
    { id: 6, category: "web",     image: portfolioimage6 },
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="main-text scroll-scale">
        <span>What I Will Do For You</span>
        <h2>Latest Project</h2>
      </div>
      <div className="container">
        <div className="fillter-buttons scroll-scale">
          <button className="button" onClick={() => setFilter("all")}>
            All
          </button>
          <button className="button" onClick={() => setFilter("Product")}>
            Product
          </button>
          <button className="button" onClick={() => setFilter("Inter")}>
            Interacting
          </button>
          <button className="button" onClick={() => setFilter("web")}>
            Web App
          </button>
        </div>
        <div className="portfolio-gallery scroll-bottom">
          {filteredProjects.map((project) => (
            <div key={project.id} className={`port-box mix ${project.category}`}>
              <div className="port-image">
                <img src={project.image} alt={`Project ${project.id}`} />
              </div>
              <div className="port-content">
                <h3>Graphic Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <a href="#">
                  <i className="bx bx-link-external"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
