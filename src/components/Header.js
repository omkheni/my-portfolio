import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ scrollToSection, refs }) => {
  const { heroRef, aboutRef, skillsRef, projectsRef, contactRef } = refs;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <span className="navbar-brand" href="#">Om Kheni</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection(heroRef)}>Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection(aboutRef)}>About</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection(skillsRef)}>Skills</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection(projectsRef)}>Projects</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection(contactRef)}>Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Header;
