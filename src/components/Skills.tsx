import React from 'react';
import './Skills.css';
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaFigma, FaWordpress 
} from 'react-icons/fa';
import { SiTypescript, SiRedux, SiMongodb, SiPostgresql, SiGraphql, SiApollographql, SiJest, SiWebpack } from 'react-icons/si';
import { FiDatabase } from 'react-icons/fi'; // Generic database icon

interface Skill {
  name: string;
  icon: JSX.Element;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillData: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJsSquare /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Redux', icon: <SiRedux /> },
      // Add more frontend skills here
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'GraphQL', icon: <SiGraphql /> },
      // Add more backend skills here
    ]
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Git & GitHub', icon: <FaGitAlt /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Jest', icon: <SiJest /> },
      { name: 'Webpack', icon: <SiWebpack /> },
      { name: 'Figma', icon: <FaFigma /> },
      // Add more tools/other skills here
    ]
  },
  // Example of another category you might add
  // {
  //   name: 'CMS & Other Platforms',
  //   skills: [
  //     { name: 'WordPress', icon: <FaWordpress /> },
  //     { name: 'Shopify', icon: <FaShopify /> }, // Requires FaShopify import
  //   ]
  // },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-categories-container">
          {skillData.map(category => (
            <div key={category.name} className="skill-category-card">
              <h3 className="category-name">{category.name}</h3>
              <ul className="skills-list-pills">
                {category.skills.map(skill => (
                  <li key={skill.name} className="skill-pill">
                    <span className="skill-icon">{skill.icon}</span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 