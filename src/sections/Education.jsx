import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, MapPin, Award } from 'lucide-react';
import './Education.css';

const Education = () => {
  const timelineData = [
    {
      year: '2024 - 2027',
      degree: 'Diploma in Engineering',
      institution: 'Government Polytechnic Siwan',
      location: 'Siwan, Bihar, India',
      description: 'Specialized in Computer Science & Engineering . Coursework covered Data Structures, Database Systems (SQL), and Web Technologies (HTML, CSS, JavaScript). Led student projects and organized local campus events.',
      grade: 'First Class with Distinction'
    },
    {
      year: '2023 - 2024',
      degree: 'Matrics School Certification',
      institution: 'High School Sankhe Ram Das ',
      location: 'Bihar, India',
      description: 'Completed foundational coursework in Mathematics, Physics, Chemistry, and English. Developed an early interest in software logic and computational thinking.',
      grade: '76.2%'
    }
  ];

  return (
    <section id="education" className="section-container">
      <div className="section-title-wrapper">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Education
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          My academic history and credentials.
        </motion.p>
      </div>

      <div className="timeline-container">
        {/* Central Vertical Line */}
        <div className="timeline-line"></div>

        {/* Timeline Cards */}
        {timelineData.map((item, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            {/* Animated marker node */}
            <motion.div 
              className="timeline-marker"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            >
              <GraduationCap size={18} />
            </motion.div>

            {/* Timeline Panel Card */}
            <motion.div 
              className="timeline-content glass-panel"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="timeline-header-info">
                <span className="timeline-year"><Calendar size={14} /> {item.year}</span>
                <span className="timeline-grade"><Award size={14} /> {item.grade}</span>
              </div>
              
              <h3 className="timeline-degree">{item.degree}</h3>
              <h4 className="timeline-institution">{item.institution}</h4>
              
              <p className="timeline-location"><MapPin size={14} /> {item.location}</p>
              
              <p className="timeline-description">{item.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
