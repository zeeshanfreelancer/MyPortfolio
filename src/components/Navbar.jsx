import "../styles/Navbar.css"
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll"; //npm install react-scroll

 export default function Navbar(){

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isSticky ? "sticky" : ""}>
      <div className="logo">
        <span>Z</span>eeshan.
      </div>
      <ul className="navlist">
        <li>
          <Link to="home" smooth={true} duration={500} style={{ "--i": 1 }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} style={{ "--i": 2 }}>
            About
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500} style={{ "--i": 3 }}>
            Services
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} style={{ "--i": 4 }}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="portfolio" smooth={true} duration={500} style={{ "--i": 5 }}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} style={{ "--i": 6 }}>
            Contact
          </Link>
        </li>
      </ul>
      <div id="menu-icon" className="bx bx-menu"></div>
    </header>
  );
}
