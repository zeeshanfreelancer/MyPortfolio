import "../styles/home.css";
import homeimage from "../assets/man.png"
import React, { useEffect, useState, useMemo } from "react";

export default function Home() {
  const words = useMemo(() => [
    "Youtuber", 
    "Web Designer", 
    "Frontend Developer", 
    "UX/UI Developer", 
    "Graphic Designer", 
    "Social Media Promoter"
  ], []);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section id="home" className="home">
      <div className="home-content scroll-scale">
        <h1>Hi! I'm Zeeshan Khattak</h1>
        <div className="change-text">
          <h3>And I'm</h3>
          <h3>
            <span className="word">{words[currentWordIndex]}</span>
          </h3>
        </div>
        <p>
          Product Designer and Digital Creative Director working in design field
          for 10 years so far. Specialized in UI/UX, Branding, and Digital
          designs.
        </p>
        <div className="info-box">
          <div className="email-info">
            <h5>Email :</h5>
            <span>zeeshan@gmail.com</span>
          </div>
          <div className="behance-info">
            <h5>Behance : </h5>
            <span>behance.net/zeeshan</span>
          </div>
        </div>
        <div className="btn-box">
          <a href="/cv.pdf" className="btn" download>
            Download CV
          </a>
          <a href="#contact" className="btn">
            Hire Me Now!
          </a>
        </div>
        
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-facebook'></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-instagram'></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-twitter'></i>
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-dribbble'></i>
          </a>
        </div>               
      </div>
      <div className="home-image scroll-scale">
        <div className="img-box">
          <img 
            src={homeimage}
            alt="Portrait of Zeeshan Khattak, a professional designer" 
          />
        </div>
        <div className="liquid-shape">
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <path fill="#12f7ff">
              <animate
                attributeName="d"
                dur="20000ms"
                repeatCount="indefinite"
                values="
                  M439,307.5Q450,365,407.5,407Q365,449,307.5,472Q250,495,209.5,442.5Q169,390,130.5,365.5Q92,341,79,295.5Q66,250,52,189Q38,128,103.5,119Q169,110,209.5,65.5Q250,21,288,69.5Q326,118,375.5,133.5Q425,149,426.5,199.5Q428,250,439,307.5Z;
                  M462,307Q448,364,406.5,406.5Q365,449,307.5,442Q250,435,206,418.5Q162,402,118.5,376.5Q75,351,77,300.5Q79,250,91.5,208Q104,166,118,106Q132,46,191,58.5Q250,71,290.5,90.5Q331,110,364.5,137Q398,164,437,207Q476,250,462,307Z;
                  M439,307.5Q450,365,407.5,407Q365,449,307.5,472Q250,495,209.5,442.5Q169,390,130.5,365.5Q92,341,79,295.5Q66,250,52,189Q38,128,103.5,119Q169,110,209.5,65.5Q250,21,288,69.5Q326,118,375.5,133.5Q425,149,426.5,199.5Q428,250,439,307.5Z
                "
              />
            </path>
          </svg>
        </div>
      </div>
    </section>    
  );
}

