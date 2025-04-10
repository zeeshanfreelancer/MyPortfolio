import "../styles/footer.css"
import React from "react";
import { Link } from "react-scroll";

export default function Footer(){

  return (
    <footer>
      <p className="scroll-scale">
        Copyright &copy; 2023 by Zeeshan Software Company || All Rights Reserved.
      </p>
      <Link to="home" smooth={true} duration={500}>
        <i className="bx bx-up-arrow-alt"></i>
      </Link>
    </footer>
  );
}