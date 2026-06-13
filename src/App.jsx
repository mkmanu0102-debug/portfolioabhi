import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';

// Section components
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

// Main Home Page Component
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <Router>
        {/* Dynamic loading screen console animation */}
        <LoadingScreen isLoading={isLoading} onFinish={() => setIsLoading(false)} />

        {!isLoading && (
          <div className="app-main-wrapper">
            {/* Scroll Indicator */}
            <ScrollProgress />

            {/* Sticky Navigation */}
            <Navbar />

            {/* Canvas for floating background blobs */}
            <div className="background-canvas"></div>

            {/* Navigation Routes */}
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>

            {/* Back to Top button */}
            <BackToTop />
          </div>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
