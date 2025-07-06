
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 240 659 9061',
      href: 'tel:+12406599061'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'johan.kapnang@example.com',
      href: 'mailto:johan.kapnang@example.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Johan-Lael',
      href: 'https://github.com/Johan-Lael'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/johan-lael-kapnang',
      href: 'https://linkedin.com/in/johan-lael-kapnang'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white/5 backdrop-blur-xl border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2 font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2 font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2 font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 resize-none"
                    placeholder="Tell me about your project or say hello..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                I'm always excited to connect with fellow developers, potential collaborators, 
                and anyone interested in discussing technology and innovation. Feel free to reach out!
              </p>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-110 transition-transform duration-300">
                        <contact.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white/90 font-medium">{contact.label}</p>
                        <p className="text-white/70 text-sm">{contact.value}</p>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Credly Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-xl border-yellow-400/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <span className="text-xl">🏆</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Professional Credentials
                </h4>
                <p className="text-yellow-200 text-sm mb-3">
                  View my verified achievements and certifications
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-yellow-400/50 text-yellow-200 hover:bg-yellow-400/10"
                >
                  <a
                    href="https://credly.com/users/johan-lael-kapnang-ketcheuzeu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Credly Profile
                  </a>
                </Button>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
