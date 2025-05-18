import React from 'react';
import './About.css';
import profile from '../assets/profile.png';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
          <p>
  Hello! I'm Lance Andrei R. Espina, a passionate and driven Frontend Developer based in Batangas, Philippines. 
  With a background in Computer Science and a strong curiosity for interactive and user-focused design, I specialize 
 building modern, responsive, and engaging web applications.
</p>
<p>
  My journey into web development was fueled by a love for technology and creativity — how code and design come 
together to create meaningful digital experiences. I've been sharpening my skills in React, TypeScript, Firebase, and 
UI/UX design, often exploring unique concepts like gamified interfaces and motion-based interactions.
</p>
<p>
  I strive to write clean, maintainable code and bring personality into every project I build. Outside of development, 
I enjoy exploring visual design trends, learning new frameworks, and occasionally competing in tech competitions that push 
my problem-solving skills further.
</p>

          </div>
          <div className="about-image">
            <div className="about-image-placeholder" aria-label="My profile picture">
              <img src={profile} alt="Lance Andrei Espina" className="profile-picture" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 