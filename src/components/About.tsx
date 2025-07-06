
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Passionate about pushing the boundaries of technology and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
                <p className="text-white/80 leading-relaxed">
                  I'm a passionate aspiring Computer and AI Engineer currently pursuing my B.S. in Computer Science Engineering 
                  at the University of Texas at Arlington, with an expected graduation in May 2027 and a GPA of 3.906.
                </p>
                <p className="text-white/80 leading-relaxed">
                  My journey began with General Engineering at UCAC-ICAM in Douala, Cameroon, where I developed a strong 
                  foundation in problem-solving and analytical thinking. Today, I'm deeply immersed in the world of 
                  artificial intelligence, cloud computing, and software development.
                </p>
                <p className="text-white/80 leading-relaxed">
                  My work reflects a fusion of curiosity, innovation, and technical excellence. I believe that AI is not 
                  just a tool, but the reflection of our deepest curiosity and the extension of our imagination.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border-white/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    University of Texas at Arlington
                  </h4>
                  <p className="text-blue-200 font-medium mb-1">
                    B.S. Computer Science Engineering
                  </p>
                  <p className="text-white/70 text-sm mb-2">
                    Expected May 2027 • GPA: 3.906
                  </p>
                  <p className="text-white/60 text-sm">
                    Focus on AI, Machine Learning, and Cloud Computing
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-xl border-white/10 hover:from-green-500/20 hover:to-blue-500/20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    UCAC-ICAM, Douala
                  </h4>
                  <p className="text-green-200 font-medium mb-1">
                    General Engineering
                  </p>
                  <p className="text-white/70 text-sm mb-2">
                    Sept 2022 – Dec 2023 • Cameroon
                  </p>
                  <p className="text-white/60 text-sm">
                    Foundation in engineering principles and problem-solving
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl border-white/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    AWS Certified AI Practitioner
                  </h4>
                  <p className="text-purple-200 font-medium mb-1">
                    Amazon Web Services
                  </p>
                  <p className="text-white/70 text-sm mb-2">
                    Expected June 2025
                  </p>
                  <p className="text-white/60 text-sm">
                    Cloud computing and AI services expertise
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
