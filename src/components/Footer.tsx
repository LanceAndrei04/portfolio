import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container container">
        {/* Optional: Add social media links or other quick links here */}
        {/* <div className="footer-social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a> 
        </div> */}
        <p className="footer-copyright">
          &copy; {currentYear} Lance Andrei Espina. All rights reserved.
        </p>
        {/* <p className="footer-made-with">
          Made with <span className="text-accent">&hearts;</span> and React.
        </p> */}
      </div>
    </footer>
  );
};

export default Footer; 