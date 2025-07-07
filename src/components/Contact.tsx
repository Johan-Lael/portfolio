
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
    <section 
      id="contact" 
      className="py-20 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
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
            Let's Connect
          </h2>
          <p className="text-xl text-white/90 dark:text-white/90 light:text-gray-800 max-w-2xl mx-auto">
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
            <Card className="p-8 bg-white/10 dark:bg-white/10 light:bg-white backdrop-blur-xl border-white/20">
              <h3 className="text-2xl font-semibold text-white dark:text-white light:text-gray-900 mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white/90 dark:text-white/90 light:text-gray-700 mb-2 font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/10 dark:bg-white/10 light:bg-white border-white/30 dark:border-white/30 light:border-gray-300 text-white dark:text-white light:text-gray-900 placeholder:text-white/60 dark:placeholder:text-white/60 light:placeholder:text-gray-400 focus:border-blue-400 focus:bg-white/15 dark:focus:bg-white/15 light:focus:bg-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white/90 dark:text-white/90 light:text-gray-700 mb-2 font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/10 dark:bg-white/10 light:bg-white border-white/30 dark:border-white/30 light:border-gray-300 text-white dark:text-white light:text-gray-900 placeholder:text-white/60 dark:placeholder:text-white/60 light:placeholder:text-gray-400 focus:border-blue-400 focus:bg-white/15 dark:focus:bg-white/15 light:focus:bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/90 dark:text-white/90 light:text-gray-700 mb-2 font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/10 dark:bg-white/10 light:bg-white border-white/30 dark:border-white/30 light:border-gray-300 text-white dark:text-white light:text-gray-900 placeholder:text-white/60 dark:placeholder:text-white/60 light:placeholder:text-gray-400 focus:border-blue-400 focus:bg-white/15 dark:focus:bg-white/15 light:focus:bg-white resize-none"
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
          >
            <Card className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:bg-gradient-to-r dark:from-blue-500/10 dark:to-purple-500/10 light:bg-white backdrop-blur-xl border-white/20 h-full">
              <h3 className="text-2xl font-semibold text-white dark:text-white light:text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-white/80 dark:text-white/80 light:text-gray-600 mb-8 leading-relaxed">
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
                      className="flex items-center space-x-4 p-4 bg-white/10 dark:bg-white/10 light:bg-gray-50 rounded-lg hover:bg-white/15 dark:hover:bg-white/15 light:hover:bg-gray-100 transition-all duration-300 group"
                    >
                      <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-110 transition-transform duration-300">
                        <contact.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white/95 dark:text-white/95 light:text-gray-800 font-medium">{contact.label}</p>
                        <p className="text-white/75 dark:text-white/75 light:text-gray-600 text-sm">{contact.value}</p>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
