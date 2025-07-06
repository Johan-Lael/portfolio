
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'Supplemental Instruction Leader',
      company: 'University of Texas at Arlington',
      period: 'Sep 2024 – May 2025',
      location: 'Texas, USA',
      responsibilities: [
        'Teaching programming concepts to undergraduate students',
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
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Building expertise through diverse professional experiences
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-500">
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
      </div>
    </section>
  );
};

export default Experience;
