import React from 'react';
import { motion } from 'framer-motion';
import { Github, Wrench, Bot, Globe } from 'lucide-react';
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
      technologies: ['SolidWorks', 'Mechanical Design', '3D Modeling'],
      image: 'https://i.postimg.cc/k5ZqYXqL/image.png'
    },
    {
      title: 'Drone Project',
      description: 'Fully functioning drone built using interdisciplinary engineering principles and modern technology.',
      github: 'https://github.com/Johan-Lael/Drone-Project',
      category: 'Engineering',
      color: 'from-green-500 to-blue-500',
      technologies: ['Embedded Systems', 'Flight Control', 'Hardware Integration'],
      image: 'https://i.postimg.cc/d3DbVtvt/how-810x536.webp'
    },
    {
      title: 'Movie Manager GUI',
      description: 'Netflix-inspired personal movie library management application with modern user interface.',
      github: 'https://github.com/Johan-Lael/GUI-Movie-manager',
      category: 'Software Development',
      color: 'from-purple-500 to-pink-500',
      technologies: ['Java', 'GUI Development', 'Database Management'],
      image: 'https://i.postimg.cc/fb4JkK0V/OIP.jpg'
    }
  ];

  const services = [
    {
      title: 'IT Support & Networking Services',
      description: 'Complete IT infrastructure setup, maintenance, and troubleshooting services.',
      features: ['Network Setup & Optimization', 'System Troubleshooting', 'Hardware Installation', 'Technical Support'],
      icon: Wrench,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Artificial Intelligence Consulting & Solutions',
      description: 'Custom AI solutions, model development, and intelligent automation systems.',
      features: ['Model Integration', 'AI Automation', 'Custom ML Workflows', 'Data Analysis'],
      icon: Bot,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Custom Web Design & Development',
      description: 'Full-stack web development with modern UI/UX design and backend integration.',
      features: ['Front-End Development', 'Back-End Integration', 'Database Management', 'Responsive Design'],
      icon: Globe,
      color: 'from-green-500 to-blue-500'
    }
  ];

  return (
    <section 
      id="portfolio" 
      className="py-20 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
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
            Featured Projects
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Innovative solutions built with passion and precision
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-500 h-full group hover:scale-105">
                {/* Project Image */}
                <div className="w-full h-32 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} Preview`}
                    className="w-full h-full object-cover"
                  />
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

        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Services I Offer</h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 transition-all duration-300 h-full group hover:scale-105">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors">
                    {service.title}
                  </h4>
                  
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    <h5 className="text-white font-medium text-sm mb-2">Key Features:</h5>
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-2"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                        <span className="text-white/70 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
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
