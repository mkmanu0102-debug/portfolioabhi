import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './Projects.css';

const GithubIcon = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = () => {
  const projects = [
    {
      title: 'Free Notes Website',
      description: 'A clean, responsive platform built using HTML, CSS, and JavaScript. It helps college students find, view, and download semester notes, lecture guides, and study materials easily.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/dashboard',
      demo: 'https://example.com',
      visual: (
        <svg viewBox="0 0 400 220" className="project-svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
          </defs>
          {/* Card background */}
          <rect width="400" height="220" rx="12" fill="url(#grad1)" opacity="0.15" />
          <rect x="1" y="1" width="398" height="218" rx="11" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
          
          {/* Notes Platform UI Mockup */}
          <rect x="30" y="30" width="340" height="160" rx="8" fill="#111827" stroke="rgba(255,255,255,0.1)" />
          
          {/* Header Bar */}
          <rect x="30" y="30" width="340" height="30" rx="8" fill="rgba(255, 255, 255, 0.03)" />
          <circle cx="45" cy="45" r="4" fill="#ef4444" />
          <circle cx="57" cy="45" r="4" fill="#f59e0b" />
          <circle cx="69" cy="45" r="4" fill="#10b981" />
          <rect x="90" y="40" width="100" height="10" rx="5" fill="#f59e0b" opacity="0.8" />
          
          {/* Main Book/Notes rows */}
          <rect x="50" y="75" width="300" height="30" rx="6" fill="#1f2937" stroke="rgba(255, 255, 255, 0.05)" />
          <rect x="65" y="85" width="120" height="10" rx="5" fill="#e5e7eb" opacity="0.9" />
          <rect x="310" y="82" width="25" height="16" rx="4" fill="#f59e0b" />
          <path d="M318,90 L322,94 L326,90 M322,86 L322,94" stroke="white" strokeWidth="2" fill="none" />
          
          <rect x="50" y="115" width="300" height="30" rx="6" fill="#1f2937" stroke="rgba(255, 255, 255, 0.05)" />
          <rect x="65" y="125" width="150" height="10" rx="5" fill="#e5e7eb" opacity="0.9" />
          <rect x="310" y="122" width="25" height="16" rx="4" fill="#f59e0b" />
          <path d="M318,130 L322,134 L326,130 M322,126 L322,134" stroke="white" strokeWidth="2" fill="none" />
          
          <rect x="50" y="155" width="300" height="30" rx="6" fill="#1f2937" stroke="rgba(255, 255, 255, 0.05)" />
          <rect x="65" y="165" width="90" height="10" rx="5" fill="#e5e7eb" opacity="0.9" />
          <rect x="310" y="162" width="25" height="16" rx="4" fill="#f59e0b" />
          <path d="M318,170 L322,174 L326,170 M322,166 L322,174" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      )
    },
    {
      title: 'Quiz App',
      description: 'Full-featured mobile quiz app with OTP-based registration & secure login. Users attempt timed quizzes, view detailed results, and compete on a real-time leaderboard. Built with React Native frontend and Node.js + MySQL backend.',
      tech: ['React Native', 'Node.js', 'MySQL', ],
      github: 'https://github.com/dashboard',
      demo: null,
      visual: (
        <svg viewBox="0 0 400 220" className="project-svg">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            <linearGradient id="grad2b" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <rect width="400" height="220" rx="12" fill="url(#grad2)" opacity="0.15" />
          <rect x="1" y="1" width="398" height="218" rx="11" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
          {/* Phone mockup */}
          <rect x="140" y="15" width="120" height="195" rx="14" fill="#0f172a" stroke="rgba(139,92,246,0.5)" strokeWidth="2" />
          <rect x="170" y="20" width="60" height="8" rx="4" fill="#1e293b" />
          {/* Quiz question card */}
          <rect x="150" y="40" width="100" height="50" rx="6" fill="#1e293b" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
          <rect x="158" y="48" width="70" height="6" rx="3" fill="#8b5cf6" opacity="0.8" />
          <rect x="158" y="58" width="84" height="5" rx="2.5" fill="#e2e8f0" opacity="0.5" />
          <rect x="158" y="67" width="60" height="5" rx="2.5" fill="#e2e8f0" opacity="0.5" />
          <rect x="158" y="76" width="74" height="5" rx="2.5" fill="#e2e8f0" opacity="0.5" />
          {/* Options */}
          <rect x="150" y="98" width="100" height="16" rx="5" fill="#1e293b" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
          <circle cx="158" cy="106" r="4" fill="#8b5cf6" opacity="0.5" />
          <rect x="166" y="104" width="50" height="4" rx="2" fill="#e2e8f0" opacity="0.6" />
          <rect x="150" y="118" width="100" height="16" rx="5" fill="#10b981" opacity="0.2" stroke="#10b981" strokeWidth="1" />
          <circle cx="158" cy="126" r="4" fill="#10b981" />
          <rect x="166" y="124" width="60" height="4" rx="2" fill="#10b981" opacity="0.8" />
          <rect x="150" y="138" width="100" height="16" rx="5" fill="#1e293b" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
          <circle cx="158" cy="146" r="4" fill="#8b5cf6" opacity="0.3" />
          <rect x="166" y="144" width="44" height="4" rx="2" fill="#e2e8f0" opacity="0.5" />
          {/* Submit button */}
          <rect x="155" y="160" width="90" height="18" rx="9" fill="url(#grad2b)" />
          <rect x="177" y="166" width="46" height="6" rx="3" fill="white" opacity="0.9" />
          {/* Score card left */}
          <rect x="22" y="45" width="100" height="60" rx="8" fill="#1e293b" stroke="rgba(139,92,246,0.35)" strokeWidth="1" />
          <rect x="30" y="53" width="50" height="6" rx="3" fill="#ec4899" opacity="0.7" />
          <rect x="30" y="64" width="84" height="22" rx="4" fill="rgba(139,92,246,0.1)" />
          <rect x="36" y="69" width="22" height="10" rx="5" fill="#8b5cf6" opacity="0.8" />
          <rect x="62" y="71" width="40" height="6" rx="3" fill="#e2e8f0" opacity="0.4" />
          <rect x="30" y="92" width="70" height="5" rx="2.5" fill="#e2e8f0" opacity="0.3" />
          {/* Leaderboard right */}
          <rect x="278" y="45" width="100" height="85" rx="8" fill="#1e293b" stroke="rgba(236,72,153,0.35)" strokeWidth="1" />
          <rect x="286" y="53" width="55" height="6" rx="3" fill="#ec4899" opacity="0.7" />
          <rect x="286" y="67" width="84" height="14" rx="4" fill="#fbbf24" opacity="0.15" />
          <circle cx="295" cy="74" r="4" fill="#fbbf24" />
          <rect x="303" y="72" width="38" height="4" rx="2" fill="#e2e8f0" opacity="0.6" />
          <rect x="348" y="72" width="16" height="4" rx="2" fill="#fbbf24" opacity="0.9" />
          <rect x="286" y="85" width="84" height="14" rx="4" fill="#94a3b8" opacity="0.1" />
          <circle cx="295" cy="92" r="4" fill="#94a3b8" />
          <rect x="303" y="90" width="32" height="4" rx="2" fill="#e2e8f0" opacity="0.5" />
          <rect x="348" y="90" width="16" height="4" rx="2" fill="#94a3b8" opacity="0.7" />
          <rect x="286" y="103" width="84" height="14" rx="4" fill="#b45309" opacity="0.1" />
          <circle cx="295" cy="110" r="4" fill="#b45309" opacity="0.9" />
          <rect x="303" y="108" width="42" height="4" rx="2" fill="#e2e8f0" opacity="0.4" />
          <rect x="348" y="108" width="16" height="4" rx="2" fill="#b45309" opacity="0.7" />
          {/* OTP box bottom-left */}
          <rect x="22" y="130" width="100" height="50" rx="8" fill="#1e293b" stroke="rgba(16,185,129,0.4)" strokeWidth="1" />
          <rect x="30" y="138" width="35" height="5" rx="2.5" fill="#10b981" opacity="0.8" />
          <rect x="30" y="150" width="20" height="14" rx="3" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="1" />
          <rect x="54" y="150" width="20" height="14" rx="3" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="1" />
          <rect x="78" y="150" width="20" height="14" rx="3" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="1" />
          <rect x="36" y="154" width="8" height="6" rx="2" fill="#10b981" opacity="0.9" />
          <rect x="60" y="154" width="8" height="6" rx="2" fill="#10b981" opacity="0.9" />
          <rect x="84" y="154" width="8" height="6" rx="2" fill="#10b981" opacity="0.9" />
        </svg>
      )
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A fully responsive showcase built with React functional hooks. Styles are managed dynamically using CSS custom variables to achieve premium dark/light toggles.',
      tech: ['React.js', 'Framer Motion', 'Vanilla CSS', 'Lucide Icons'],
      github: 'https://github.com/dashboard',
      demo: 'https://example.com',
      visual: (
        <svg viewBox="0 0 400 220" className="project-svg">
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <rect width="400" height="220" rx="12" fill="url(#grad3)" opacity="0.15" />
          <rect x="1" y="1" width="398" height="218" rx="11" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
          
          {/* Main Grid View */}
          <rect x="30" y="30" width="340" height="20" rx="6" fill="#111827" stroke="rgba(255,255,255,0.1)" />
          <circle cx="50" cy="40" r="5" fill="#ef4444" />
          <circle cx="65" cy="40" r="5" fill="#f59e0b" />
          <circle cx="80" cy="40" r="5" fill="#10b981" />
          
          {/* Graphic mockup cards */}
          <rect x="30" y="65" width="160" height="120" rx="8" fill="#111827" stroke="rgba(255,255,255,0.1)" />
          <rect x="42" y="80" width="80" height="10" rx="5" fill="#06b6d4" />
          <rect x="42" y="100" width="130" height="6" rx="3" fill="#4b5563" />
          <rect x="42" y="112" width="110" height="6" rx="3" fill="#4b5563" />
          <rect x="42" y="140" width="50" height="20" rx="10" fill="#06b6d4" opacity="0.2" />
          
          <rect x="210" y="65" width="160" height="120" rx="8" fill="#111827" stroke="rgba(255,255,255,0.1)" />
          <circle cx="290" cy="105" r="24" fill="#06b6d4" opacity="0.1" />
          <path d="M280,105 Q290,90 300,105 T320,105" fill="none" stroke="#10b981" strokeWidth="4" />
          <rect x="235" y="150" width="110" height="6" rx="3" fill="#4b5563" />
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className="section-container">
      <div className="section-title-wrapper">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A collection of projects showcasing my creativity, technical skills, and problem-solving approach.
        </motion.p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card glass-panel"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
          >
            {/* Project Mockup / Graphical Header */}
            <div className="project-media">
              {project.visual}
            </div>

            {/* Content Details */}
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              {/* Technology Tags */}
              <div className="project-tags">
                {project.tech.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag-badge">{tag}</span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="project-actions">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-secondary project-btn"
                >
                  <GithubIcon size={18} /> GitHub
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary project-btn"
                >
                  Coming Soon <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
