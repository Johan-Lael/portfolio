
import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'Phone Holder',
      description: 'Adjustable prototype designed for ergonomic phone use with innovative engineering solutions.',
      github: 'https://github.com/Johan-Lael/Phone-Holder',
      category: 'Hardware Design',
      color: 'from-blue-500 to-cyan-500',
      technologies: ['SolidWorks', 'Mechanical Design', '3D Modeling']
    },
    {
      title: 'Drone Project',
      description: 'Fully functioning drone built using interdisciplinary engineering principles and modern technology.',
      github: 'https://github.com/Johan-Lael/Drone-Project',
      category: 'Engineering',
      color: 'from-green-500 to-blue-500',
      technologies: ['Embedded Systems', 'Flight Control', 'Hardware Integration']
    },
    {
      title: 'Movie Manager GUI',
      description: 'Netflix-inspired personal movie library management application with modern user interface.',
      github: 'https://github.com/Johan-Lael/GUI-Movie-manager',
      category: 'Software Development',
      color: 'from-purple-500 to-pink-500',
      technologies: ['Java', 'GUI Development', 'Database Management']
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Innovative solutions built with passion and precision
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-500 h-full group hover:scale-105">
                {/* Project Header */}
                <div className={`w-full h-32 rounded-lg bg-gradient-to-r ${project.color} mb-6 flex items-center justify-center`}>
                  <div className="text-4xl font-bold text-white opacity-80">
                    {project.title.charAt(0)}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}>
                    {project.category}
                  </span>
                </div>

                {/* Project Info */}
                <div className="space-y-4 flex-grow">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 rounded text-xs text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 group-hover:border-blue-400/50 transition-all duration-300"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>View on GitHub</span>
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Services Section */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Services I Offer</h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'IT Support & Networking',
                description: 'Complete IT infrastructure setup, maintenance, and troubleshooting services.',
                icon: '🔧',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'AI & Machine Learning Services',
                description: 'Custom AI solutions, model development, and intelligent automation systems.',
                icon: '🤖',
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Web Design & Development',
                description: 'Full-stack web development with modern UI/UX design and backend integration.',
                icon: '🌐',
                color: 'from-green-500 to-blue-500'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-300 text-center h-full">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
