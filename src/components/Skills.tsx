import React from 'react';
import './Skills.css';
import { 
FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaGitAlt, FaFigma, FaJava, FaGoogle
} from 'react-icons/fa';
import { SiTypescript, SiSqlite, SiFirebase, SiSharp, SiDotnet} from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactNode;
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
      { name: 'CSharp', icon: <SiSharp /> },
      { name: '.NET', icon: <SiDotnet /> },
      { name: 'React', icon: <FaReact /> },
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'FireBase', icon: <SiFirebase /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'SQLite', icon: <SiSqlite /> },
      // Add more backend skills here
    ]
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Git & GitHub', icon: <FaGitAlt /> },
      { name: 'Google Cloud', icon: <FaGoogle /> },
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