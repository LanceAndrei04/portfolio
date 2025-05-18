import React from 'react';
import './Navigation.css';

const Navigation: React.FC = () => {
  // Basic navigation structure
  // Will be styled to be sticky/fixed and minimalist
  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* <a href="#hero" className="nav-logo">[Your Name/Logo]</a> Removed logo */}
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation; 