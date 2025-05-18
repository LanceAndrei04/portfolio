import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import type { Project } from '../types';
import AutomatPreview from '../assets/project-img/automat-preview.png';
import ACICStanceCorner from '../assets/project-img/ac-preview.png';
import Redhelm321 from '../assets/project-img/redhelm-preview.png';
import DatuSandigan from '../assets/project-img/datu-preview.png';
import Spendly from '../assets/project-img/spendly-preview.png';
import Pyceal from '../assets/project-img/pyceal-preview.png';

// Updated project data with your specific projects and tech stacks
const myProjects: Project[] = [
  {
    id: 'project-automat-city',
    title: 'Automat City',
    description: 'An interactive web-based platform that helps users learn and explore Automata Theory through hands-on DFA/NFA simulations, 5-tuple generation, and dynamic visualizations for enhanced understanding of computational models.',
imageUrl: AutomatPreview,
    tags: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Node.js', 'Express'] // Express will need an icon mapping
  },
  {
    id: 'project-redhelm321',
    title: 'Redhelm321',
    description: 'A mobile application that integrates real-time communication, safety alerts, and nearby connectivity—empowering users to broadcast their presence, mark themselves safe, and stay connected during critical moments.',
    imageUrl: Redhelm321,
    tags: ['Java', 'Firebase', 'XML', 'Google API'] // XML and Google API will need icon mapping
  },
  {
    id: 'project-datusandigan',
title: 'Datu Sandigan',
description: '2D platformer adventure inspired by Philippine mythology that immerses players in a story of heroism while incorporating interactive Android mechanisms for an engaging gameplay experience.',
    imageUrl: DatuSandigan,
    tags: ['GDScript'] // GDScript will need an icon mapping
  },
  {
id: 'project-acicstancecorner',
title: 'ACICStance Corner',
    description: 'A user-friendly application for CICS Student Services, facilitating transaction management, inventory tracking, request approval, and student information access.',
imageUrl: ACICStanceCorner,
    tags: ['.NET Framework', 'C#', 'Google API']
  },
  {
    id: 'project-pyceal',
    title: 'Pyceal',
    description: 'A secure ID generation and verification system that creates digital ID cards with embedded steganographic data, enabling administrators to encode hidden messages and authenticate IDs through an integrated scanner.',
imageUrl: Pyceal,
    tags: ['Flask', 'SQLAlchemy', 'Bootstrap', 'HTML', 'JavaScript', 'CSS'] // SQLAlchemy will need icon mapping
  },
  {
    id: 'project-spendly',
    title: 'Spendly',
    description: 'An interactive web platform designed to help businesses track budgets and monitor expenses in real time, empowering them to make smarter, data-driven financial decisions.',
    imageUrl: Spendly,
    tags: ['React', 'CSS', 'HTML']
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {myProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 