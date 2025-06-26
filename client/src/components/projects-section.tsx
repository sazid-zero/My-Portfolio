import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function ProjectsSection() {
  const scrollRevealRef = useScrollReveal();

  const projects = [
    {
      title: 'ShopSphere - E-Commerce Platform',
      description: 'A modern e-commerce platform with advanced filtering, real-time inventory, and seamless checkout experience. Built with React.js and integrated payment processing.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      technologies: ['React', 'TailwindCSS', 'Node.js'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'TaskFlow - Project Management',
      description: 'Collaborative task management with real-time updates, drag-and-drop functionality, and team collaboration features. Inspired by modern productivity tools.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      technologies: ['React', 'TypeScript', 'Firebase'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'WeatherVue - Smart Dashboard',
      description: 'Intelligent weather dashboard with location-based forecasts, interactive charts, and beautiful animations that reflect current weather conditions.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      technologies: ['Vue.js', 'Weather API', 'Chart.js'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'SocialPulse - Analytics Dashboard',
      description: 'Comprehensive social media analytics platform with real-time data visualization, engagement tracking, and automated reporting features.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      technologies: ['React', 'D3.js', 'Express'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    }
  ];

  const techColors = {
    'React': 'bg-primary/80',
    'TailwindCSS': 'bg-secondary/80',
    'Node.js': 'bg-accent/80',
    'TypeScript': 'bg-secondary/80',
    'Firebase': 'bg-accent/80',
    'Vue.js': 'bg-primary/80',
    'Weather API': 'bg-secondary/80',
    'Chart.js': 'bg-accent/80',
    'D3.js': 'bg-secondary/80',
    'Express': 'bg-accent/80'
  };

  return (
    <section id="projects" className="py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={scrollRevealRef} className="text-center mb-20 scroll-reveal">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A showcase of my best work, from concept to deployment
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group scroll-reveal"
            >
              <div className="glass-morphism rounded-2xl overflow-hidden hover-lift">
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-deep/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 ${techColors[tech as keyof typeof techColors] || 'bg-primary/80'} rounded-full text-xs font-semibold`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <motion.h3 
                    className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <motion.a
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-accent transition-colors"
                      >
                        <i className="fab fa-github text-xl"></i>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-accent transition-colors"
                      >
                        <i className="fas fa-external-link-alt text-xl"></i>
                      </motion.a>
                    </div>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-accent hover:text-primary transition-colors font-semibold"
                    >
                      View Details →
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-border p-[2px] rounded-full group inline-block"
          >
            <div className="bg-slate-deep px-8 py-4 rounded-full group-hover:bg-transparent transition-all duration-300">
              <span className="text-white group-hover:text-white font-semibold">View All Projects</span>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
