
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cloud, Code, Settings, Users, ExternalLink } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    { 
      category: 'AI & Cloud', 
      skills: [
        { name: 'AWS', proficiency: 90 },
        { name: 'AI', proficiency: 85 },
        { name: 'ML', proficiency: 85 },
        { name: 'Generative AI', proficiency: 80 },
        { name: 'Networking', proficiency: 85 }
      ], 
      color: 'from-blue-500 to-cyan-500',
      icon: Cloud
    },
    { 
      category: 'Programming', 
      skills: [
        { name: 'Java', proficiency: 95 },
        { name: 'C', proficiency: 90 },
        { name: 'Python', proficiency: 90 },
        { name: 'HTML', proficiency: 95 },
        { name: 'CSS', proficiency: 90 }
      ], 
      color: 'from-purple-500 to-pink-500',
      icon: Code
    },
    { 
      category: 'Tools', 
      skills: [
        { name: 'AWS Cloud', proficiency: 85 },
        { name: 'SolidWorks', proficiency: 75 },
        { name: 'MS Office Suite', proficiency: 90 },
        { name: 'Adobe Premiere Pro', proficiency: 80 }
      ], 
      color: 'from-green-500 to-blue-500',
      icon: Settings
    },
    { 
      category: 'Soft Skills', 
      skills: [
        { name: 'Problem-solving', proficiency: 95 },
        { name: 'Team Collaboration', proficiency: 95 },
        { name: 'Time Management', proficiency: 90 },
        { name: 'Customer Service', proficiency: 85 },
        { name: 'Software Engineering Principles', proficiency: 90 },
        { name: 'Database Management', proficiency: 85 }
      ], 
      color: 'from-orange-500 to-red-500',
      icon: Users
    },
  ];

  const languages = [
    { name: 'English', proficiency: 100, flag: '🇺🇸' },
    { name: 'French', proficiency: 90, flag: '🇫🇷' }
  ];

  return (
    <section 
      id="skills" 
      className="py-20 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/70 dark:bg-black/80"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          <p className="text-xl text-white/90 dark:text-white/90 light:text-gray-800 max-w-2xl mx-auto">
            A diverse toolkit for building innovative solutions
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-white/10 dark:bg-white/10 light:bg-white backdrop-blur-xl border-white/20 hover:bg-white/15 dark:hover:bg-white/15 light:hover:bg-gray-50 transition-all duration-300 h-full">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} mb-4 flex items-center justify-center`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-white dark:text-white light:text-gray-900 mb-4">{category.category}</h4>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.2) + (skillIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white/90 dark:text-white/90 light:text-gray-700 text-sm font-medium">{skill.name}</span>
                        <span className="text-white/70 dark:text-white/70 light:text-gray-500 text-xs">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-white/10 dark:bg-white/10 light:bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1.5, delay: (index * 0.2) + (skillIndex * 0.1) }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Language Proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white dark:text-white light:text-gray-900 mb-8 text-center">Language Proficiency</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-white/10 dark:bg-white/10 light:bg-white backdrop-blur-xl border-white/20 hover:bg-white/15 dark:hover:bg-white/15 light:hover:bg-gray-50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{language.flag}</span>
                      <h4 className="text-lg font-semibold text-white dark:text-white light:text-gray-900">{language.name}</h4>
                    </div>
                    <span className="text-white/70 dark:text-white/70 light:text-gray-500 text-sm">{language.proficiency}%</span>
                  </div>
                  <div className="w-full bg-white/10 dark:bg-white/10 light:bg-gray-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${language.proficiency}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white dark:text-white light:text-gray-900 mb-8">Certifications</h3>
          
          <Card className="w-full p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 dark:bg-gradient-to-r dark:from-yellow-500/10 dark:to-orange-500/10 light:bg-white backdrop-blur-xl border-yellow-400/30 h-32">
            <div className="flex items-center justify-between h-full">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏆</span>
                </div>
                <div className="text-left space-y-2">
                  <h4 className="text-xl font-bold text-white dark:text-white light:text-gray-900">
                    AWS Certified AI Practitioner
                  </h4>
                  <p className="text-yellow-200 dark:text-yellow-200 light:text-yellow-600 font-medium">Achieved June 2025</p>
                  <p className="text-white/80 dark:text-white/80 light:text-gray-600 text-sm">
                    Advanced certification in cloud computing and AI services
                  </p>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="border-2 border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/20 px-4 py-2 rounded-lg font-semibold backdrop-blur-xl bg-white/10 transition-all duration-300 flex items-center space-x-2"
                onClick={() => window.open('#', '_blank')}
              >
                <span>View Badge on Credly</span>
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
