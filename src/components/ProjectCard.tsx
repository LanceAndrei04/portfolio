import React from 'react';
import './ProjectCard.css';
// Removed AccentButton import as we'll use styled <a> tags
import type { Project } from '../types';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaStripe, FaVuejs, FaAws, FaGoogle, FaJava, FaBootstrap
} from 'react-icons/fa';
import {
  SiTypescript, SiMongodb, SiPostgresql, SiGraphql,  SiFirebase, SiSvelte, 
 SiFastapi, SiTensorflow, SiRedis, SiExpo, SiVuetify, SiHeroku,  SiSocketdotio, SiTailwindcss,
  SiExpress, SiFlask, SiSqlalchemy, SiGodotengine, SiDotnet, SiSharp
} from 'react-icons/si';
import { FiDatabase,  FiTerminal, FiUsers, FiSmartphone, FiCode } from 'react-icons/fi'; // Generic icons

// Helper to get icon for a tag
const getTagIcon = (tagName: string): React.ReactNode | null => {
  const normalizedTagName = tagName.toLowerCase().trim();
  switch (normalizedTagName) {
    case 'react': return <FaReact />;
    case 'react native': return <FaReact />;
    case 'node.js':
    case 'nodejs': return <FaNodeJs />;
    case 'python': return <FaPython />;
    case 'mongodb': return <SiMongodb />;
    case 'stripe api':
    case 'stripe': return <FaStripe />;
    case 'tailwind css': 
    case 'tailwindcss': return <SiTailwindcss />;
    case 'vue.js': 
    case 'vuejs': return <FaVuejs />;
    case 'firebase': return <SiFirebase />;
    case 'vuetify': return <SiVuetify />;
    case 'pwa': return <FiSmartphone />;
    case 'html':
    case 'html5': return <FaHtml5 />;
    case 'css':
    case 'css3': return <FaCss3Alt />;
    case 'javascript': 
    case 'js': return <FaJsSquare />;
    case 'typescript': return <SiTypescript />;
    case 'gsap': return <FiTerminal />;
    case 'tensorflow': return <SiTensorflow />;
    case 'fastapi': return <SiFastapi />;
    case 'bigquery': return <FiDatabase />; // Generic DB icon for BigQuery
    case 'websockets': return <SiSocketdotio />;
    case 'redis': return <SiRedis />;
    case 'graphql': return <SiGraphql />;
    case 'expo': return <SiExpo />;
    case 'nuxt.js':
    case 'postgresql': return <SiPostgresql />;
    case 'aws s3':
    case 'aws': return <FaAws />;
    case 'svelte': return <SiSvelte />;
    case 'mqtt': return <FiTerminal />;
    case 'sqlite': return <FiDatabase />;
    case 'django': return <FaPython />; // Django is Python-based
    case 'leaflet.js': return <FiUsers />; // Placeholder, no direct Leaflet icon in Fa/Si
    case 'heroku': return <SiHeroku />;
    case 'express': 
    case 'express.js': return <SiExpress />;
    case 'java': return <FaJava />;
    case 'xml': return <FiCode />; // Generic code icon for XML
    case 'google api': return <FaGoogle />;
    case 'gdscript': return <SiGodotengine />;
    case 'flask': return <SiFlask />;
    case 'sqlalchemy': return <SiSqlalchemy />;
    case 'bootstrap': return <FaBootstrap />;
    case '.net framework':
    case '.net': return <SiDotnet />;
    case 'c#': return <SiSharp />;
    default: return null; // Or return <span className="tag-text-fallback">{tagName}</span>;
  }
};

// export interface Project { // Removed from here
//   id: string;
//   title: string;
//   description: string;
//   imageUrl?: string; 
//   tags: string[];
//   liveUrl?: string;
//   repoUrl?: string;
// }

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      {project.imageUrl && (
        <div className="project-card-image-container">
          <img src={project.imageUrl} alt={project.title} className="project-card-image" />
        </div>
      )}
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        {/* Description will be revealed on hover via CSS */}
        <p className="project-card-description">{project.description}</p>
        
        {project.tags && project.tags.length > 0 && (
          <div className="project-card-tags">
            {project.tags.map(tag => {
              const icon = getTagIcon(tag);
              if (icon) {
                return (
                  <span key={tag} className="project-card-tag" title={tag}>
                    {icon}
                  </span>
                );
              }
              // Optional: Render text if no icon is found
              // return <span key={tag} className="project-card-tag project-card-tag-text">{tag}</span>;
              return null; // Or don't render if no icon
            })}
          </div>
        )}
        {/* Actions removed as per request */}
      </div>
    </div>
  );
};

export default ProjectCard; 