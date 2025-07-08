
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-xl border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Name and Title */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Johan Lael KAPNANG KETCHEUZEU
            </h3>
            <p className="text-white/80 text-sm">
              Aspiring Computer & AI Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <motion.a 
              href="https://github.com/Johan-Lael" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300" 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/johan-lael-kapnang" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300" 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a 
              href="mailto:johan.kapnang@example.com" 
              className="p-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300" 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-5 h-5 text-white" />
            </motion.a>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>

          {/* Copyright and Rights */}
          <div className="space-y-2 text-white/70 text-sm">
            <p className="flex items-center justify-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>and dedication to innovation</span>
            </p>
            <p>
              © {currentYear} Johan Lael KAPNANG KETCHEUZEU. All rights reserved.
            </p>
            <p className="text-xs text-white/50">
              Exploring AI frontiers • Building tomorrow's solutions today
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
