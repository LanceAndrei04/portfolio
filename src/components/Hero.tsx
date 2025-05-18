import React from 'react';
import './Hero.css'; // Will create Hero.css for new style
import AccentButton from './AccentButton'; // Import AccentButton
// import NeumorphicButton from './NeumorphicButton'; // Will replace with a new Button component or styled <a>


const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section section">
      <div className="hero-background-shapes"></div> {/* Shapes 2 & 3 host */}
      <div className="hero-background-shapes-2"></div> {/* Shapes 4 & 5 host */}
      <div className="hero-background-shapes-3"></div> {/* Shapes 6 & 7 host */}
      <div className="hero-background-shapes-4"></div> {/* Shape 8 host */}
      <div className="hero-content container">
        <h1 className="hero-heading">
Hi, I'm Lance Andrei.
        </h1>
        <p className="hero-tagline">
          Aspiring Web Developer and UI/UX Designer
        </p>
        <div className="hero-actions"> {/* Add container for CTAs */}
          <AccentButton 
            text="View Projects" 
            href="#projects" 
            variant="primary" 
            className="cta-glow" /* For special glow effect */
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 