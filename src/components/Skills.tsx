
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const technicalSkills = [
    { category: 'Programming', skills: ['Java', 'C', 'Python', 'HTML', 'CSS'], color: 'from-blue-500 to-cyan-500' },
    { category: 'Cloud & AI', skills: ['AWS', 'Generative AI', 'Machine Learning'], color: 'from-purple-500 to-pink-500' },
    { category: 'Tools', skills: ['AWS Cloud', 'Adobe Premiere Pro', 'SolidWorks', 'MS Office Suite'], color: 'from-green-500 to-blue-500' },
  ];

  const professionalSkills = [
    'Problem Solving',
    'Time Management',
    'Team Collaboration',
    'Customer Service',
    'Team Building',
    'Database Management',
    'Software Engineering Principles'
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A diverse toolkit for building innovative solutions
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-white mb-8 text-center"
          >
            Technical Skills
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {technicalSkills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} mb-4 flex items-center justify-center`}>
                    <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4">{category.category}</h4>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.2) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                        <span className="text-white/80">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-white mb-8 text-center"
          >
            Professional Skills
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-r from-blue-500/5 to-purple-500/5 backdrop-blur-xl border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {professionalSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 text-center"
                  >
                    <span className="text-white/90 text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Certification Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-xl border-yellow-400/20 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">
              AWS Certified AI Practitioner
            </h4>
            <p className="text-yellow-200 font-medium mb-2">Expected June 2025</p>
            <p className="text-white/70">
              Advanced certification in cloud computing and AI services
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
