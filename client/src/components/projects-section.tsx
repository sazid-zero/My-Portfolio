
import { useMotionComponents, useMotionViewport } from '@/hooks/use-motion-components';
import { useMotionTransition } from '@/hooks/use-motion-components';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { getFeaturedProjects } from '@/data/projects';
import { useNavigate } from 'react-router-dom';

export default function ProjectsSection() {
  const Motion = useMotionComponents();
  const viewport = useMotionViewport();
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
    <section id="projects" className="py-16 md:py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={scrollRevealRef} className="text-center mb-12 md:mb-20 scroll-reveal">
          <Motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={viewport}
          >
            Featured <span className="text-gradient">Projects</span>
          </Motion.h2>
          <Motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
             viewport={viewport}
          >
            A showcase of my best work, from concept to deployment
          </Motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={viewport}
              className="group scroll-reveal"
            >
              <div className="glass-morphism rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden hover-lift h-full flex flex-col">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-deep/80 to-transparent"></div>
                  <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4">
                    <div className="flex gap-1 sm:gap-2 flex-wrap">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 sm:px-3 py-1 bg-gray-600/80 rounded-full text-xs font-semibold`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 sm:px-3 py-1 bg-gray-600/80 rounded-full text-xs font-semibold">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col">
                  <Motion.h3 
                    className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-gradient transition-all duration-300 truncate cursor-pointer"
                    whileHover={{ x: 5 }}
                    onClick={() => handleViewDetails(project.id)}
                  >
                    {project.title}
                  </Motion.h3>
                  <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed text-sm sm:text-base line-clamp-2 sm:line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-auto">
                    <div className="flex gap-3 sm:gap-4">
                      <Motion.a
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-accent transition-colors"
                      >
                        <i className="fab fa-github text-lg sm:text-xl"></i>
                      </Motion.a>
                      <Motion.a
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-accent transition-colors"
                      >
                        <i className="fas fa-external-link-alt text-lg sm:text-xl"></i>
                      </Motion.a>
                    </div>
                    <Motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => handleViewDetails(project.id)}
                      className="text-accent hover:text-primary transition-colors font-semibold text-sm sm:text-base"
                    >
                      View Details →
                    </Motion.button>
                  </div>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>

        <Motion.div 
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={viewport}
        >
          <Motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleViewAllProjects}
            className="gradient-border p-[2px] rounded-full group inline-block"
          >
            <div className="bg-slate-deep px-6 sm:px-8 py-3 md:py-4 rounded-full group-hover:bg-transparent transition-all duration-300">
              <span className="text-white group-hover:text-white font-semibold text-sm sm:text-base">View All Projects</span>
            </div>
          </Motion.button>
        </Motion.div>
      </div>
    </section>
  );
}
