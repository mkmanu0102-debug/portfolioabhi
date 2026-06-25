import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, Calendar } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="section-title-wrapper">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
         My background, career aspirations, and academic journey.
        </motion.p>
      </div>

      <div className="about-grid">
        {/* Profile Details Card */}
        <motion.div 
          className="about-details-card glass-panel"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-profile-header">
            <div className="about-avatar-wrapper glass-panel">
              <img 
                src="/profile.jpg" 
                alt="Manu Kumar Profile" 
                className="about-avatar-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.classList.add('avatar-fallback');
                }}
              />
              <div className="about-avatar-fallback-text">MK</div>
            </div>
            <div className="about-bio-text">
              <h3>Who I Am</h3>
              <p>
                I am a passionate software developer based in India, specializing in building modern web applications. Currently, I am expanding my skills in both frontend and backend technologies to write cleaner, more efficient, and scalable code.
              </p>
            </div>
          </div>
          
          <div className="about-details-info">
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value">Abhimanyu Kumar</span>
            </div>
            <div className="info-item">
              <span className="info-label">Role:</span>
              <span className="info-value">Frontend Developer | backend Developer</span>
            </div>
            <div className="info-item">
              <span className="info-label">College:</span>
              <span className="info-value">Government Polytechnic Siwan</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">mkmanu0102@gmail.com</span>
            </div>
          </div>
        </motion.div>

        {/* Objective & Stats Column */}
        <div className="about-stats-column">
          {/* Career Objective */}
          <motion.div 
            className="objective-card glass-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Career Objective</h3>
            <p>
               To build a successful career in software development by contributing to meaningful projects, solving real-world problems, and continuously enhancing my knowledge and skills. I aim to work in a collaborative environment where I can learn, grow, and create impactful digital solutions.
            </p>
          </motion.div>

          {/* Quick Stat Highlights */}
          <div className="about-stats-grid">
            <motion.div 
              className="stat-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="stat-icon-wrapper">
                <GraduationCap size={24} className="stat-icon" />
              </div>
              <div className="stat-number">Computer Science</div>
              <div className="stat-label">Field of Study</div>
            </motion.div>

            <motion.div 
              className="stat-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="stat-icon-wrapper">
                <Briefcase size={24} className="stat-icon" />
              </div>
              <div className="stat-number">Student</div>
              <div className="stat-label">Career Focus</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Experience Placeholder */}
      <motion.div 
        className="experience-placeholder glass-panel"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="exp-icon-wrapper">
          <Award size={32} className="exp-icon" />
        </div>
        <div className="exp-details">
          <h3>Professional Experience</h3>
          <p className="exp-placeholder-text">
          I am currently seeking internships, entry-level positions, 
          and collaborative projects where I can apply my skills, contribute to meaningful solutions, and grow as a software developer while gaining valuable industry experience.
          </p>
        </div>
      </motion.div>

    </section>
  );
};

export default About;
