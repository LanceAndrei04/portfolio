import React from 'react';
import './Contact.css';
import AccentButton from './AccentButton';
import {  FaGithub, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa'; 
import Resume from '../assets/Resume.pdf' // Import icons

// Placeholder social icons (can be replaced with SVGs or an icon library later)
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/LanceAndrei04', icon: <FaGithub /> },   // Replace # with your GitHub URL
  { name: 'Email', url: 'lanceandrei978@gmail.com', icon: <FaEnvelope /> }, 
  { name: 'Instagram', url: 'https://www.instagram.com/calen_ndr', icon: <FaInstagram /> },
  { name: 'Facebook', url: 'https://www.facebook.com/lance.espina.30', icon: <FaFacebook /> } 
];

const Contact: React.FC = () => {


  return (
    <section id="contact" className="resume-socials-section section">
      <div className="container">
    <h2 className="section-title">Connect with me</h2>
        <p className="resume-intro">
          You can view or download my resume below. Let's connect!
        </p>
        
        <div className="resume-buttons-container">
          <AccentButton 
            text="View Resume (PDF)" 
            href={Resume}
            variant="primary" 
            target="_blank" // Open in new tab
            rel="noopener noreferrer"
          />
          <AccentButton 
            text="Download Resume" 
            href={Resume}
            variant="outline" 
            download // This attribute triggers the download
          />
        </div>

        <div className="social-links-container">
  <h3 className="social-links-title">Reach me on</h3>
          <ul className="social-links-list">
            {socialLinks.map(link => (
              <li key={link.name} className="social-link-item">
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} title={link.name}>
                  <span className="social-icon">{link.icon}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Contact; 