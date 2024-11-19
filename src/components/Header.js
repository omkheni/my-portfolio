import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">Om Kheni</div>
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
