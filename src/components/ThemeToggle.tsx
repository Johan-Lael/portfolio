
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative w-16 h-8 bg-white/20 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 border border-white/30 dark:border-gray-600"
    >
      <motion.div
        animate={{
          x: isDark ? 32 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
        className="w-6 h-6 bg-white dark:bg-gray-200 rounded-full shadow-md flex items-center justify-center"
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-gray-800" />
        ) : (
          <Sun className="w-3 h-3 text-yellow-600" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
