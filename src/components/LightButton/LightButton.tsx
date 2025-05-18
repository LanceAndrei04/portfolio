import React from 'react';
import styled from 'styled-components';

const LightButton: React.FC = () => {
  return (
    <StyledWrapper>
      <div className="light-button">
        <button className="bt">
          <div className="light-holder">
            <div className="dot" />
            <div className="light" />
          </div>
          <div className="button-holder">
            <p>Explore</p>
          </div>
        </button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* Ensure CSS variables are available or define fallbacks */
  --color-accent-rgb-dynamic: var(--color-accent-rgb, 0, 123, 255); /* Fallback if not defined */
  --color-surface-dark-dynamic: var(--color-surface-dark, #1a1a1d); /* Fallback for button bg */
  --color-text-primary-dynamic: var(--color-text-primary, #ffffff);

  display: inline-block; /* To wrap content appropriately */

  .light-button button.bt {
    position: relative;
    height: 150px; /* Overall button height, light can visually extend above this */
    display: flex;
    align-items: flex-end;
    justify-content: center; /* Center the button content */
    outline: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0; /* Remove default padding */
    width: 120px; /* Give button a specific width */
  }

  .light-button button.bt .button-holder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60px; 
    width: 120px; 
    background-color: var(--color-surface-dark-dynamic);
    border-radius: var(--border-radius-md, 6px);
    color: var(--color-text-secondary, #b0b0b0); 
    font-weight: 600;
    font-size: var(--text-md, 1rem);
    transition: color 300ms ease-in-out, outline-color 300ms ease-in-out, outline-offset 300ms ease-in-out;
    outline: 2px solid transparent; 
    outline-offset: 10px; 
    z-index: 1; 
  }

  .light-button button.bt .button-holder p {
    margin: 0;
    color: inherit; 
  }

  .light-button button.bt .light-holder {
    position: absolute;
    bottom: 0; 
    height: 150px; /* Height of the area dedicated to holder, matches button.bt */
    width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    pointer-events: none; 
    /* overflow: hidden; */ /* Uncomment if light must be clipped by this holder */
  }

  .light-button button.bt .light-holder .dot {
    position: absolute;
    /* Positioned at the top of the new light height (120px) starting from button-holder top (60px) */
    /* Apex of light is at 60px (button-holder top) + 120px (light height) = 180px from bottom of light-holder */
    /* Dot (10px high) centered at this apex */
    bottom: calc(60px + 120px - 5px); /* 175px from bottom of light-holder */
    width: 10px;
    height: 10px;
    background-color: var(--color-surface-dark-dynamic);
    border-radius: 10px;
    z-index: 2; 
    transition: background-color 300ms ease-in-out;
  }

  .light-button button.bt .light-holder .light {
    position: absolute;
    bottom: 60px; /* Start light from top of button-holder */
    width: 100%; 
    height: 120px; /* Increased light height */
    clip-path: polygon(50% 0%, 25% 100%, 75% 100%); /* Wider base for the light cone */
    background: transparent;
    transition: background 300ms ease-in-out;
    z-index: 0; 
  }

  .light-button button.bt:hover .button-holder {
    color: var(--color-text-primary-dynamic);
    outline-color: rgba(var(--color-accent-rgb-dynamic), 1);
    outline-offset: 3px; 
  }
  
  .light-button button.bt:hover .light-holder .dot {
    background-color: rgba(var(--color-accent-rgb-dynamic), 1);
  }

  .light-button button.bt:hover .light-holder .light {
    background: linear-gradient(
      to bottom,
      rgba(var(--color-accent-rgb-dynamic), 0.7) 0%, /* Slightly more intense start */
      rgba(var(--color-accent-rgb-dynamic), 0.35) 50%, /* Smoother intermediate step */
      rgba(var(--color-accent-rgb-dynamic), 0) 100% /* Fade fully to transparent */
    );
  }
`;

export default LightButton; 