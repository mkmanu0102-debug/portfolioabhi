import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = ({ isLoading, onFinish }) => {
  const [logs, setLogs] = useState([]);
  const consoleMessages = [
    'npm run dev',
    'VITE v5.4.1  ready in 234 ms',
    '➜  Local:   http://localhost:5173/',
    'Initializing Abhimanyu kumar\'s portfolio system...',
    'Loading React functional components...',
    'Fetching Java / Spring Boot modules...',
    'Compiling styling system & glassmorphic utilities...',
    'Loading project showcases: Event Board & Attendance System...',
    'Connecting to MySQL local instances...',
    'Executing system check: 100% OK',
    'Launching application...'
  ];

  useEffect(() => {
    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < consoleMessages.length) {
        const nextLog = consoleMessages[currentLogIndex];
        setLogs((prev) => [...prev, nextLog]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        // Add a slight delay before hiding loading screen
        setTimeout(() => {
          onFinish();
        }, 850);
      }
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-screen-container"
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          <div className="terminal-panel glass-panel">
            <div className="terminal-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="terminal-title">Welcome to Mr Abhi World</span>
            </div>
            
            <div className="terminal-body">
              {logs.map((log, index) => {
                if (!log) return null;
                return (
                  <div key={index} className="terminal-line">
                    {log.startsWith('npm') || log.startsWith('➜') ? (
                      <span className="terminal-command">{log}</span>
                    ) : log.includes('OK') ? (
                      <span>
                        <span className="terminal-prompt">$</span> {log.split('100%')[0]}
                        <span className="terminal-success">100% OK</span>
                      </span>
                    ) : (
                      <span><span className="terminal-prompt">$</span> {log}</span>
                    )}
                  </div>
                );
              })}
              <div className="terminal-cursor"></div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
