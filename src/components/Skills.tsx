
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cloud, Code, Settings, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    { 
      category: 'AI & Cloud', 
      skills: ['AWS', 'AI', 'ML', 'Generative AI', 'Networking'], 
      color: 'from-blue-500 to-cyan-500',
      icon: Cloud,
      proficiency: 85
    },
    { 
      category: 'Programming', 
      skills: ['Java', 'C', 'Python', 'HTML', 'CSS'], 
      color: 'from-purple-500 to-pink-500',
      icon: Code,
      proficiency: 90
    },
    { 
      category: 'Tools', 
      skills: ['AWS Cloud', 'SolidWorks', 'MS Office Suite', 'Adobe Premiere Pro'], 
      color: 'from-green-500 to-blue-500',
      icon: Settings,
      proficiency: 80
    },
    { 
      category: 'Soft Skills', 
      skills: ['Problem-solving', 'Team Collaboration', 'Time Management', 'Customer Service', 'Software Engineering Principles', 'Database Management'], 
      color: 'from-orange-500 to-red-500',
      icon: Users,
      proficiency: 95
    },
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
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
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
              <Card className="p-6 bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} mb-4 flex items-center justify-center`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-4">{category.category}</h4>
                
                {/* Animated Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-white/70 mb-2">
                    <span>Proficiency</span>
                    <span>{category.proficiency}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.proficiency}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.2) + (skillIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                      <span className="text-white/90 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Certifications</h3>
          
          <Card className="max-w-md mx-auto p-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-xl border-yellow-400/30">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-3xl">🏆</span>
              </div>
            </div>
            <h4 className="text-2xl font-bold text-white mb-3">
              AWS Certified AI Practitioner
            </h4>
            <p className="text-yellow-200 font-medium mb-2">Expected June 2025</p>
            <p className="text-white/80 mb-6">
              Advanced certification in cloud computing and AI services
            </p>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold"
            >
              <a
                href="https://www.credly.com/users/johan-lael-kapnang-ketcheuzeu"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Badge on Credly
              </a>
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
