import React from 'react';
import './AccentButton.css';

interface AccentButtonProps {
  text: string;
  onClick?: () => void;
  href?: string; // For using button as a link
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  variant?: 'primary' | 'outline'; // Example variants
  target?: string;
  rel?: string;
  download?: boolean | string; // download can be a boolean or a string (filename)
}

const AccentButton: React.FC<AccentButtonProps> = ({
  text,
  onClick,
  href,
  type = 'button',
  className = '',
  variant = 'primary',
  target,
  rel,
  download
}) => {
  const baseClasses = "accent-button";
  const variantClass = `accent-button-${variant}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseClasses} ${variantClass} ${className}`.trim()}
        // If it's a link to an internal section, onClick might be used for smooth scrolling
        onClick={onClick} 
        target={target}
        rel={rel}
        download={download}
      >
        {text}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      className={`${baseClasses} ${variantClass} ${className}`.trim()}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default AccentButton; 