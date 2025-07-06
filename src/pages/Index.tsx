
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import AnimatedBackground from '@/components/AnimatedBackground';
import { ThemeProvider } from '@/contexts/ThemeContext';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 
                      light:from-slate-100 light:via-blue-50 light:to-slate-100 text-white dark:text-white light:text-gray-900 overflow-x-hidden transition-colors duration-500">
        <AnimatedBackground />
        <Navigation activeSection={activeSection} />
        
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Portfolio />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
