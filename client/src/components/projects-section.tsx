
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { getFeaturedProjects } from '@/data/projects';
import { useNavigate } from 'react-router-dom';

export default function ProjectsSection() {
  const scrollRevealRef = useScrollReveal();
  const navigate = useNavigate();
  const projects = getFeaturedProjects();

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
    'Express': 'bg-accent/80',
    'MongoDB': 'bg-primary/80',
    'Stripe': 'bg-accent/80',
    'Socket.io': 'bg-secondary/80',
    'PostgreSQL': 'bg-primary/80',
    'PWA': 'bg-accent/80',
    'OAuth': 'bg-secondary/80'
  };

  const handleViewDetails = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  const handleViewAllProjects = () => {
    navigate('/projects');
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
            viewport={{ amount:0.3 }}
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
             viewport={{ amount:0.3 }}
          >
            A showcase of my best work, from concept to deployment
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ amount:0.3 }}
              className="group scroll-reveal"
            >
              <div className="glass-morphism rounded-2xl overflow-hidden hover-lift">
                <div className="relative h-64 overflow-hidden ">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-deep/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex gap-2 flex-wrap">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 ${techColors[tech as keyof typeof techColors] || 'bg-primary/80'} rounded-full text-xs font-semibold`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-600/80 rounded-full text-xs font-semibold">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <motion.h3 
                    className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all duration-300 truncate"
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
                      onClick={() => handleViewDetails(project.id)}
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
          viewport={{ amount:0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleViewAllProjects}
            className="gradient-border p-[2px] rounded-full group inline-block"
          >
            <div className="bg-slate-deep px-8 py-4 rounded-full group-hover:bg-transparent transition-all duration-300">
              <span className="text-white group-hover:text-white font-semibold">View All Projects</span>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
