import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import 'boxicons/css/boxicons.min.css'; //npm install boxicons
import "./styles/shared.css"
import useIntersectionObserver from "./components/IntersectionObserver"; 

export default function App(){
  useIntersectionObserver(); 
  return(
      <>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </>
    )
}

