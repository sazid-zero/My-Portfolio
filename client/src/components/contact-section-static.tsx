import { useState } from 'react';
import { useMotionComponents, useMotionViewport } from '@/hooks/use-motion-components';
import { useMotionTransition } from '@/hooks/use-motion-components';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSectionStatic() {
  const Motion = useMotionComponents();
  const viewport = useMotionViewport();
  const scrollRevealRef = useScrollReveal();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with your preferred service)
    // You can integrate with Formspree, Netlify Forms, or EmailJS
    try {
      // Using Vercel serverless function
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    { icon: 'fas fa-envelope', label: 'Email', value: 'alex.chen@example.com' },
    { icon: 'fas fa-phone', label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'San Francisco, CA' }
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
        <Motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"
        />
        <Motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div ref={scrollRevealRef} className="text-center mb-20 scroll-reveal">
          <Motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
             viewport={viewport}
          >
            Let's <span className="text-gradient">Connect</span>
          </Motion.h2>
          <Motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
             viewport={viewport}
          >
            Ready to collaborate? Let's build something amazing together
          </Motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={viewport}
            className="scroll-reveal"
          >
            <div className="space-y-8">
              <div className="glass-morphism p-8 rounded-2xl hover-lift">
                <h3 className="text-2xl font-bold mb-6 text-gradient">Get In Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                       viewport={viewport}
                      className="flex items-center gap-4"
                    >
                      <div className="glass-morphism p-3 rounded-lg">
                        <i className={`${info.icon} text-primary text-xl`}></i>
                      </div>
                      <div>
                        <div className="font-semibold">{info.label}</div>
                        <div className="text-gray-400">{info.value}</div>
                      </div>
                    </Motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="glass-morphism p-8 rounded-2xl hover-lift">
                <h4 className="text-xl font-bold mb-4 text-accent">Quick Links</h4>
                <div className="grid grid-cols-2 gap-4">
                  {quickLinks.map((link, index) => (
                    <Motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                       viewport={viewport}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <i className={`${link.icon} text-accent`}></i>
                      <span>{link.label}</span>
                    </Motion.a>
                  ))}
                </div>
              </div>
            </div>
          </Motion.div>

          {/* Contact Form */}
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={viewport}
            className="scroll-reveal"
          >
            <form onSubmit={handleSubmit} className="glass-morphism p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Send Message</h3>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <Motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300"
                >
                  Message sent successfully! I'll get back to you soon.
                </Motion.div>
              )}
              
              {submitStatus === 'error' && (
                <Motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300"
                >
                  Failed to send message. Please try again or contact me directly.
                </Motion.div>
              )}

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                     viewport={viewport}
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
                  </Motion.div>
                  <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                     viewport={viewport}
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
                  </Motion.div>
                </div>

                <Motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                   viewport={viewport}
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
                </Motion.div>

                <Motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                   viewport={viewport}
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
                </Motion.div>

                <Motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                   viewport={viewport}
                  className="w-full gradient-border p-[2px] rounded-full group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="bg-slate-deep px-8 py-4 rounded-full group-hover:bg-transparent transition-all duration-300 flex items-center justify-center gap-2">
                    <span className="text-white group-hover:text-white font-semibold">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                    <i className={`fas ${isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'} group-hover:translate-x-1 transition-transform`}></i>
                  </div>
                </Motion.button>
              </div>
            </form>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
