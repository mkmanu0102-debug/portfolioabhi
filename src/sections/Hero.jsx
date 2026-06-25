import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowDown, FileText } from 'lucide-react';
import './Hero.css';

// Reference image from the public folder so the build doesn't break if it's missing
const profileImg = '/profile.jpg';

// Custom inline SVG icons to ensure cross-version compatibility
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

const InstagramIcon = ({ size = 20 }) => (
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
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Hero = () => {
  // Custom Typewriter Hook/State
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ['Full Stack Developer', 'Web Application Developer', 'Tech Enthusiast', 'Continuous Learner'];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 1500;

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, typingSpeed);
    }

    // Word switches
    if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        
        {/* Intro text column */}
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-greeting">Hey, my name is</span>
            <h1 className="hero-name">
              Abhimanyu kumar <span className="hero-dot">.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-role-wrapper"
          >
            <span className="hero-role-prefix">I am a </span>
            <span className="hero-role-typed">{text}</span>
            <span className="hero-cursor">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-description"
          >
            Full Stack Developer passionate about building modern web applications and continuously learning new technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-cta"
          >
            <button onClick={handleScrollToProjects} className="btn-primary">
              View Work <ArrowDown size={18} />
            </button>
            
            {/* Download resume button */}
            <a 
              href="#resume" 
              className="btn-secondary" 
              onClick={(e) => {
                e.preventDefault();
                alert("Resume download trigger! (Replace path in production)");
              }}
            >
              Resume Under Preparation <FileText size={18} />
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hero-socials-wrapper"
          >
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
              <a href="https://www.instagram.com/abhi_officialx_/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="mailto:mkmanu0102@gmail.com" className="social-btn" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Developer Graphic Column */}
        <div className="hero-visual">
          <motion.div
            className="hero-graphic-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="graphic-glow-circle"></div>
            
            {/* Profile Image Wrap with Text Fallback */}
            <div className="profile-image-wrapper glass-panel">
              <img 
                src={profileImg} 
                alt="Manu Kumar Profile" 
                className="profile-image" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.classList.add('avatar-fallback');
                }}
              />
              <div className="avatar-placeholder-text">MK</div>
            </div>

            {/* Orbiting Tech Cards */}
            <div className="orbit-item item-react">
              <span className="tech-badge">React.js</span>
            </div>
            <div className="orbit-item item-java">
              <span className="tech-badge">Java</span>
            </div>
            <div className="orbit-item item-spring">
              <span className="tech-badge">Node.js</span>
            </div>
            <div className="orbit-item item-mysql">
              <span className="tech-badge">MySQL</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
