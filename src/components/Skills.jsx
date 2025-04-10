import "../styles/skills.css"
import React, { useEffect } from "react";

export default function Skills(){

  useEffect(() => {
    const circles = document.querySelectorAll(".circle");
    circles.forEach((elem) => {
      const dots = elem.getAttribute("data-dots");
      const marked = elem.getAttribute("data-percent");
      const percent = Math.floor((dots * marked) / 100);
      let points = "";
      const rotate = 360 / dots;

      for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
      }
      elem.innerHTML = points;

      const pointsMarked = elem.querySelectorAll(".points");
      for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add("marked");
      }
    });
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="main-text scroll-scale">
        <span>Technical and Professional</span>
        <h2>My Skills</h2>
      </div>
      <div className="skill-main">
        <div className="skill-left scroll-scale">
          <h3>Technical Skills</h3>
          <div className="skill-bar">
            <div className="info">
              <p>HTML</p>
              <p>72%</p>
            </div>
            <div className="bar">
              <span className="html"></span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="info">
              <p>Figma</p>
              <p>90%</p>
            </div>
            <div className="bar">
              <span className="figma"></span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="info">
              <p>JavaScript</p>
              <p>80%</p>
            </div>
            <div className="bar">
              <span className="javascript"></span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="info">
              <p>CSS</p>
              <p>62%</p>
            </div>
            <div className="bar">
              <span className="css"></span>
            </div>
          </div>
        </div>
        <div className="skill-right scroll-scale">
          <h3>Professional Skills</h3>
          <div className="professional">
            <div className="box">
              <div className="circle" data-dots="80" data-percent="90"></div>
              <div className="text">
                <h4>90%</h4>
                <small>Team Work</small>
              </div>
            </div>
            <div className="box">
              <div className="circle" data-dots="80" data-percent="80"></div>
              <div className="text">
                <h4>80%</h4>
                <small>Creativity</small>
              </div>
            </div>
            <div className="box">
              <div className="circle" data-dots="80" data-percent="75"></div>
              <div className="text">
                <h4>75%</h4>
                <small>Project Management</small>
              </div>
            </div>
            <div className="box">
              <div className="circle" data-dots="80" data-percent="70"></div>
              <div className="text">
                <h4>70%</h4>
                <small>Communication</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}