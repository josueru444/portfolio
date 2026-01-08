import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';
import BackgroundEffects from './components/BackgroundEffects';
import { personalInfo, heroData, skills, projects } from './data/portfolioData';

// Lazy load components for performance
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

import CVModal from './components/CVModal';

import CustomCursor from './components/CustomCursor';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple spy scroll logic
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative bg-primary text-white font-sans selection:bg-accent selection:text-white">
      <CustomCursor />

      {/* Loading Overlay */}
      <div className={`fixed inset-0 z-[100] bg-zinc-950 transition-opacity duration-700 pointer-events-none ${loading ? 'opacity-100' : 'opacity-0'}`}>
        {loading && <LoadingSpinner />}
      </div>

      <BackgroundEffects />

      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        scrollTo={scrollTo}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className="relative z-10 flex flex-col gap-0">
        <Suspense fallback={<div className="h-screen bg-transparent"></div>}>
          <Hero heroData={heroData} scrollTo={scrollTo} openCV={() => setIsCVModalOpen(true)} />
          <div id="home" className="h-20"></div> {/* Spacer for home anchor if Hero is hidden */}

          <About personalInfo={personalInfo} />
          <Projects projects={projects} />
          <Skills skills={skills} />
          <Experience />
          <Contact personalInfo={personalInfo} />
        </Suspense>
      </main>

      <Footer personalInfo={personalInfo} />

      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </div>
  );
}

export default App;
