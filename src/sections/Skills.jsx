import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Terminal, GitBranch } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={24} />,
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React.js', level: 85 },
      ]
    },
    {
      title: 'Backend & Databases',
      icon: <Database size={24} />,
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Spring Boot', level: 75 },
        { name: 'MySQL', level: 60 },
      ]
    },
    {
      title: 'Tools & Workflows',
      icon: <GitBranch size={24} />,
      skills: [
        { name: 'Git (learning)', level: 0 },
        { name: 'GitHub (learning)', level: 0 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-container">
      <div className="section-title-wrapper">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          My proficiency across development frameworks, databases, and collaboration platforms.
        </motion.p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            className="skills-category-card glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="skills-category-header">
              <div className="category-icon-wrapper">
                {category.icon}
              </div>
              <h3>{category.title}</h3>
            </div>

            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar Container */}
                  <div className="skill-progress-container">
                    <motion.div 
                      className="skill-progress-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
