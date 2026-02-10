import { useState, useMemo } from 'react';
import { useMotionComponents } from '@/hooks/use-motion-components';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/navigation';
import { useQuery } from '@tanstack/react-query';
import { type Project } from '@shared/schema';
import { Loader2 } from 'lucide-react';

export default function ProjectsPage() {
  const Motion = useMotionComponents();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: async () => {
      const res = await fetch('/api/projects');
      if (!res.ok) throw new Error('Failed to fetch projects');
      return res.json();
    }
  });

  const categories = ['All', 'Frontend', 'Fullstack', 'Mobile Apps', 'Games'];

  const filteredProjects = useMemo(() => {
    if (!projects) return [];
    if (selectedCategory === 'All') return projects;
    return projects.filter(p => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  const getCategoryCount = (category: string) => {
    if (!projects) return 0;
    if (category === 'All') return projects.length;
    return projects.filter(p => p.category === category).length;
  };

  const techColors: Record<string, string> = {
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
    'OAuth': 'bg-secondary/80',
    'Next.js': 'bg-primary/80',
    'Supabase': 'bg-accent/80',
    'React Native': 'bg-secondary/80',
    'Python': 'bg-primary/80',
    'TensorFlow': 'bg-accent/80',
    'OpenAI': 'bg-secondary/80',
    'Nuxt.js': 'bg-primary/80',
    'GraphQL': 'bg-accent/80',
    'AWS': 'bg-secondary/80'
  };

  const handleViewDetails = (projectId: number) => {
    navigate(`/projects/${projectId}`);
  };

  const handleBackToPortfolio = () => {
    navigate('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-deep text-slate-light flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-deep text-slate-light">
      <Navigation />

      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <Motion.button
              onClick={handleBackToPortfolio}
              whileHover={{ x: -5 }}
              className="inline-flex items-center text-primary hover:text-accent transition-colors mb-8 group"
            >
              <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
              Back to Portfolio
            </Motion.button>

            <Motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              All <span className="text-gradient">Projects</span>
            </Motion.h1>
            <Motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore my complete portfolio of projects across different technologies and domains
            </Motion.p>
          </div>

          {/* Category Filter */}
          <Motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {categories.map((category) => (
              <Motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'glass-morphism hover:bg-primary/20'
                }`}
              >
                <span>{category}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${selectedCategory === category ? 'bg-white/20' : 'bg-slate-700/50'}`}>
                    {getCategoryCount(category)}
                </span>
              </Motion.button>
            ))}
          </Motion.div>

          {/* Projects Grid */}
          <Motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <Motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-morphism rounded-2xl overflow-hidden hover-lift h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-deep/80 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      {project.featured && (
                        <span className="bg-accent px-2 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className=" bg-gray-600/80 px-2 py-1 rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <Motion.h3 
                      className="text-xl font-bold mb-3 group-hover:text-gradient transition-all duration-300 cursor-pointer"
                      whileHover={{ x: 5 }}
                      onClick={() => handleViewDetails(project.id)}
                    >
                      {project.title}
                    </Motion.h3>
                    <p className="text-gray-400 mb-4 leading-relaxed flex-1 text-sm line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex gap-2 flex-wrap mb-4">
                      {project.technologies?.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 ${techColors[tech] || 'bg-primary/80'} rounded-full text-xs font-semibold`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies?.length > 3 && (
                        <span className="px-2 py-1 bg-gray-600/80 rounded-full text-xs font-semibold">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between items-center mt-auto">
                      <div className="flex gap-3">
                        <Motion.a
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-accent transition-colors"
                        >
                          <i className="fab fa-github text-lg"></i>
                        </Motion.a>
                        <Motion.a
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-accent transition-colors"
                        >
                          <i className="fas fa-external-link-alt text-lg"></i>
                        </Motion.a>
                      </div>
                      <Motion.button
                        whileHover={{ x: 5 }}
                        onClick={() => handleViewDetails(project.id)}
                        className="text-accent hover:text-primary transition-colors font-semibold text-sm"
                      >
                        View Details →
                      </Motion.button>
                    </div>
                  </div>
                </div>
              </Motion.div>
            ))}
          </Motion.div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <Motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gray-400 text-lg">No projects found in this category.</p>
            </Motion.div>
          )}
        </div>
      </section>
    </div>
  );
}