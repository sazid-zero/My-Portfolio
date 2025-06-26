import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function AboutSection() {
  const scrollRevealRef = useScrollReveal();

  const stats = [
    { count: '25+', label: 'Projects' },
    { count: '2', label: 'Years Experience' },
    { count: '15+', label: 'Technologies' },
    { count: '1000+', label: 'Git Commits' }
  ];

  const socialLinks = [
    { icon: 'fab fa-github', href: 'https://github.com', label: 'GitHub' },
    { icon: 'fab fa-linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'fab fa-twitter', href: 'https://twitter.com', label: 'Twitter' },
    { icon: 'fas fa-envelope', href: 'mailto:sharif.sazid.3@gmail.com', label: 'Email' }
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div ref={scrollRevealRef} className="text-center mb-20 scroll-reveal">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-gradient">About</span> Me
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A passionate Computer Science student with a love for creating beautiful, functional web applications
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="scroll-reveal"
          >
            <div className="glass-morphism p-8 rounded-2xl hover-lift">
              <h3 className="text-3xl font-bold mb-6 text-gradient">Hello World!</h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  I'm a Computer Science Engineering student with a passion for frontend development
                  and modern web technologies. My journey began with curiosity about how websites work,
                  and has evolved into a deep appreciation for clean code and exceptional user experiences.
                </p>
                <p>
                  Specializing in React.js and TailwindCSS, I love building responsive, accessible,
                  and visually stunning applications. Every project is an opportunity to learn
                  something new and push the boundaries of what's possible on the web.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-morphism p-3 rounded-lg hover:bg-primary/20 transition-all duration-300 group"
                  >
                    <i className={`${link.icon} text-xl group-hover:text-primary transition-colors`}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profile Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="scroll-reveal"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-morphism p-6 rounded-xl text-center hover-lift"
                >
                  <div className="text-4xl font-bold text-gradient mb-2">{stat.count}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
