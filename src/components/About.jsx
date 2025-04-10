import "../styles/about.css";
import aboutmeimage from "../assets/about-me-pic2.png";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="img-about scroll-scale">
        <img src={aboutmeimage} alt="About Me" />

        <div className="info-about1">
          <span>10+</span>
          <p>Years of Experience</p>
        </div>

        <div className="info-about2">
          <span>150+</span>
          <p>Projects Completed</p>
        </div>

        <div className="info-about3">
          <span>2000+</span>
          <p>Happy Clients</p>
        </div>
      </div>

      <div className="about-content scroll-scale">
        <span>Let me introduce myself</span>
        <h2>About Me</h2>
        <h3>A Story of Good</h3>
        <p>
          I am a lifelong learner with a passion for knowledge and a curiosity
          that knows no bounds. I thrive on intellectual challenges and love
          exploring a wide range of subjects, from science and technology to art
          and philosophy.
        </p>

        <div className="btn-box">
          <a href="#" className="btn">
            Read More!
          </a>
        </div>
      </div>
    </section>
  );
}
