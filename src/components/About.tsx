
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Brain, Cloud, Database, Code, Cpu } from 'lucide-react';

const About = () => {
  const areasOfInterest = [
    {
      name: 'Artificial Intelligence',
      icon: Brain
    },
    {
      name: 'Machine Learning',
      icon: Cpu
    },
    {
      name: 'Cloud Computing',
      icon: Cloud
    },
    {
      name: 'Data Engineering',
      icon: Database
    },
    {
      name: 'Software Architecture',
      icon: Code
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70 light:bg-white/90"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-xl text-white/90 dark:text-white/90 light:text-gray-800 max-w-2xl mx-auto">
            Passionate about pushing the boundaries of technology and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Profile Picture and Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Picture */}
            <div className="flex justify-center md:justify-start">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border-4 border-white/20 light:border-gray-300 flex items-center justify-center p-2 overflow-hidden">
                <img 
                  src="https://i.postimg.cc/sgbZ7zbD/IMG-4688-1.jpg" 
                  alt="Johan Lael About Picture" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white dark:text-white light:text-gray-900 mb-6">Education</h3>
              
              <Card className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:bg-gradient-to-r dark:from-blue-500/10 dark:to-purple-500/10 light:bg-white/90 backdrop-blur-xl border-white/10 light:border-gray-200 hover:from-blue-500/20 hover:to-purple-500/20 light:hover:bg-white transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-white dark:text-white light:text-gray-900 mb-2">
                      University of Texas at Arlington
                    </h4>
                    <p className="text-blue-200 dark:text-blue-200 light:text-blue-600 font-medium mb-1">
                      B.S. Computer Science Engineering
                    </p>
                    <p className="text-white/70 dark:text-white/70 light:text-gray-600 text-sm mb-2">
                      Expected May 2027 • GPA: 3.906
                    </p>
                    <p className="text-white/60 dark:text-white/60 light:text-gray-500 text-sm">
                      Focus on AI, Machine Learning, and Cloud Computing
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 dark:bg-gradient-to-r dark:from-green-500/10 dark:to-blue-500/10 light:bg-white/90 backdrop-blur-xl border-white/10 light:border-gray-200 hover:from-green-500/20 hover:to-blue-500/20 light:hover:bg-white transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-white dark:text-white light:text-gray-900 mb-2">
                      UCAC-ICAM, Douala
                    </h4>
                    <p className="text-green-200 dark:text-green-200 light:text-green-600 font-medium mb-1">
                      General Engineering
                    </p>
                    <p className="text-white/70 dark:text-white/70 light:text-gray-600 text-sm mb-2">
                      Sept 2022 – Dec 2023 • Cameroon
                    </p>
                    <p className="text-white/60 dark:text-white/60 light:text-gray-500 text-sm">
                      Foundation in engineering principles and problem-solving
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Right Column - Bio and Areas of Interest */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Bio Section */}
            <Card className="p-8 bg-white/10 dark:bg-white/10 light:bg-white/90 backdrop-blur-xl border-white/20 light:border-gray-200 hover:bg-white/15 light:hover:bg-white transition-all duration-300">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white dark:text-white light:text-gray-900 mb-4">My Journey</h3>
                <p className="text-white/90 dark:text-white/90 light:text-gray-700 leading-relaxed">I'm a passionate aspiring Computer and AI Engineer currently pursuing my B.S. in Computer Science Engineering at the University of Texas at Arlington, with an expected graduation in May 2027.</p>
                <p className="text-white/90 dark:text-white/90 light:text-gray-700 leading-relaxed">
                  My work reflects a fusion of curiosity, innovation, and technical excellence. I believe that AI is not 
                  just a tool, but the reflection of our deepest curiosity and the extension of our imagination.
                </p>
              </div>
            </Card>

            {/* Areas of Interest */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-white/10 dark:bg-white/10 light:bg-white/90 backdrop-blur-xl border-white/20 light:border-gray-200">
                <h4 className="text-xl font-semibold text-white dark:text-white light:text-gray-900 mb-4">Areas of Interest</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {areasOfInterest.map((area, index) => (
                    <motion.div
                      key={area.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 bg-white/5 dark:bg-white/5 light:bg-gray-50 rounded-lg hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-100 transition-all duration-300"
                    >
                      <area.icon className="w-5 h-5 text-blue-400" />
                      <span className="text-white/90 dark:text-white/90 light:text-gray-700 text-sm font-medium">{area.name}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
