import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Social Links */}
        <div className="footer-social">
          <a href="https://linkedin.com/in/omkheni" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          |
          <a href="https://github.com/omkheni" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>

        {/* Contact Details */}
        <div className="footer-contact">
          <p>Email: <a href="mailto:kheniom29@gmail.com">kheniom29@gmail.com</a></p>
          <p>Phone: +1 234 567 890</p>
        </div>

        {/* Navigation Shortcuts */}
        <div className="footer-nav">
          <a href="#home">Home</a> | <a href="#about">About Me</a> | <a href="#projects">Projects</a> | <a href="#contact">Contact</a>
        </div>

        {/* Call-to-Action */}
        <div className="footer-cta">
          <a href="/Om_Kheni_Resume.pdf" download className="btn-cta">Download Resume</a>
          <p>Let’s connect and create something amazing together!</p>
        </div>

        {/* Copyright and Branding */}
        <div className="footer-copyright">
          <p>© 2024 Om Kheni. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
