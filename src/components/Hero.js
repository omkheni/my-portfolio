import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img src="/path-photo.jpg" alt="Om Kheni" className="photo" />
        <h1>Hello, I’m Om Kheni</h1>
        <p>Software Engineer | Creative Problem Solver</p>
      </div>
    </section>
  );
};

export default Hero;
