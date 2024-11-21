import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">Om Kheni</div>
      <nav>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} end>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink></li>
          <li><NavLink to="/skills" className={({ isActive }) => (isActive ? "active" : "")}>Skills</NavLink></li>
          <li><NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
