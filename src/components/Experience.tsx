import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Supplemental Instruction Leader',
      company: 'University of Texas at Arlington',
      period: 'Sep 2024 – May 2025',
      location: 'Texas, USA',
      responsibilities: [
        'Facilitated student comprehension of fundamental programming concepts',
        'Mentoring students in computer science fundamentals',
        'Session planning and curriculum development',
        'Collaborative learning facilitation'
      ],
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Assistant',
      company: 'DUKSCO Sarl',
      period: 'Jul – Aug 2023',
      location: 'Cameroon',
      responsibilities: [
        'Technical support and troubleshooting',
        'Documentation and process improvement',
        'Customer service and client relations',
        'System maintenance and optimization'
      ],
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Freelance Developer',
      company: 'Elkapira',
      period: 'Ongoing',
      location: 'Remote',
      responsibilities: [
        'Web design and development',
        'Mobile application development',
        'Database management and optimization',
        'Client consultation and project management'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section 
      id="experience" 
      className="py-20 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
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
            Experience
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Building expertise through diverse professional experiences
          </p>
        </motion.div>

        <div className="space-y-8 mb-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                  {/* Company Logo Placeholder */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${experience.color} flex items-center justify-center mb-6 lg:mb-0 flex-shrink-0`}>
                    <div className="w-8 h-8 bg-white rounded opacity-80"></div>
                  </div>

                  {/* Experience Details */}
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">
                          {experience.title}
                        </h3>
                        <p className="text-xl text-blue-200 font-medium mb-1">
                          {experience.company}
                        </p>
                        <p className="text-white/60 text-sm">
                          {experience.location}
                        </p>
                      </div>
                      <div className="mt-2 lg:mt-0">
                        <span className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${experience.color} text-white`}>
                          {experience.period}
                        </span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-3">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <motion.div
                          key={respIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.2) + (respIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.color} mt-2 flex-shrink-0`}></div>
                          <span className="text-white/80">{responsibility}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Download Resume Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
              {/* Resume Preview */}
              <div className="flex-1 max-w-md">
                <div className="bg-white/10 border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-center h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
                    <div className="text-center">
                      <FileText className="w-16 h-16 text-white/80 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-white mb-2">Resume Preview</h4>
                      <p className="text-white/70 text-sm">Click to view full document</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Section */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-4">Download My Resume</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Get a comprehensive overview of my experience, skills, and achievements. 
                  Perfect for opportunities in AI, cloud computing, and software development.
                </p>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
