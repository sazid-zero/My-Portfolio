import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const scrollRevealRef = useScrollReveal();
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    { icon: 'fas fa-envelope', label: 'Email', value: 'sharif.sazid.3@gmail.com' },
    { icon: 'fas fa-phone', label: 'Phone', value: '+880 18722-83211' },
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Sylhet, Bangladesh' }
  ];

  const quickLinks = [
    { icon: 'fas fa-file-pdf', label: 'Resume', href: '#' },
    { icon: 'fab fa-linkedin', label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: 'fab fa-github', label: 'GitHub', href: 'https://github.com' },
    { icon: 'fas fa-briefcase', label: 'Portfolio', href: '#' }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-deep via-slate-800 to-slate-deep">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div ref={scrollRevealRef} className="text-center mb-20 scroll-reveal">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's <span className="text-gradient">Connect</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to collaborate? Let's build something amazing together
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="scroll-reveal"
          >
            <div className="space-y-8">
              <div className="glass-morphism p-8 rounded-2xl hover-lift">
                <h3 className="text-2xl font-bold mb-6 text-gradient">Get In Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4"
                    >
                      <div className="glass-morphism p-3 rounded-lg">
                        <i className={`${info.icon} text-primary text-xl`}></i>
                      </div>
                      <div>
                        <div className="font-semibold">{info.label}</div>
                        <div className="text-gray-400">{info.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="glass-morphism p-8 rounded-2xl hover-lift">
                <h4 className="text-xl font-bold mb-4 text-accent">Quick Links</h4>
                <div className="grid grid-cols-2 gap-4">
                  {quickLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <i className={`${link.icon} text-accent`}></i>
                      <span>{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="scroll-reveal"
          >
            <form onSubmit={handleSubmit} className="glass-morphism p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Send Message</h3>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-semibold mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your Name"
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-semibold mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="your.email@example.com"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Project Collaboration"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={contactMutation.isPending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="w-full gradient-border p-[2px] rounded-full group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="bg-slate-deep px-8 py-4 rounded-full group-hover:bg-transparent transition-all duration-300 flex items-center justify-center gap-2">
                    <span className="text-white group-hover:text-white font-semibold">
                      {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                    </span>
                    <i className={`fas ${contactMutation.isPending ? 'fa-spinner fa-spin' : 'fa-paper-plane'} group-hover:translate-x-1 transition-transform`}></i>
                  </div>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
