
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Clean AI/tech background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
        }} 
      />
      {/* Glass overlay for glassmorphism effect */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image with glass effect */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            className="mb-8"
          >
            <div className="w-48 h-48 mx-auto rounded-full bg-white/10 dark:bg-white/10 light:bg-white/20 backdrop-blur-xl border-2 border-white/20 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500/80 to-purple-600/80 backdrop-blur-sm flex items-center justify-center text-6xl font-bold text-white shadow-inner">
                JL
              </div>
            </div>
          </motion.div>

          {/* Main Content with glass card */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.4 }} 
            className="space-y-6 p-8 bg-white/10 dark:bg-white/10 light:bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              Johan Lael
              <br />
              <span className="text-3xl md:text-4xl">KAPNANG KETCHEUZEU</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-200 font-light">
              Aspiring Computer & AI Engineer
            </p>

            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Exploring the frontiers of AI and Cloud Innovation
              <br />
              <span className="text-purple-200">Texas, USA</span>
            </p>

            {/* Quote with enhanced glass effect */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.8 }} 
              className="max-w-4xl mx-auto mt-8"
            >
              <blockquote className="text-lg md:text-xl italic text-white/95 border-l-4 border-blue-400 pl-6 py-4 bg-white/5 backdrop-blur-sm rounded-r-lg border border-white/10">
                "Artificial Intelligence is not just a tool — it's the reflection of our deepest curiosity, 
                the extension of our imagination, and the spark that will illuminate the future we dare to dream."
                <footer className="mt-2 text-blue-300 not-italic">- Johan Lael</footer>
              </blockquote>
            </motion.div>
          </motion.div>

          {/* CTA Buttons with glass effect */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.6 }} 
            className="flex flex-wrap gap-4 justify-center mt-12"
          >
            <Button 
              onClick={() => scrollToSection('contact')} 
              variant="outline" 
              className="border-2 border-white/30 text-white hover:bg-white/20 px-8 py-3 rounded-full text-lg font-semibold backdrop-blur-xl bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-green-400/50 text-green-400 hover:bg-green-400/20 px-8 py-3 rounded-full text-lg font-semibold backdrop-blur-xl bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links with glass effect */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1 }} 
            className="flex justify-center space-x-6 mt-12"
          >
            <motion.a 
              href="https://github.com/Johan-Lael" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg" 
              whileHover={{ scale: 1.1, rotate: 5 }} 
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/johan-lael-kapnang" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg" 
              whileHover={{ scale: 1.1, rotate: -5 }} 
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="mailto:johan.kapnang@example.com" 
              className="p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg" 
              whileHover={{ scale: 1.1, rotate: 5 }} 
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator with glass effect */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1.2 }} 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button 
              onClick={() => scrollToSection('about')} 
              className="p-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg" 
              animate={{ y: [0, 10, 0] }} 
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
