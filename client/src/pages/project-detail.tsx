import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMotionComponents, useMotionViewport } from '@/hooks/use-motion-components';
 
import { useQuery } from '@tanstack/react-query';
import { type Project } from '@shared/schema';
import { Loader2 } from 'lucide-react';
import Navigation from '@/components/navigation';
import ReactMarkdown from 'react-markdown';

export default function ProjectDetail() {
  const Motion = useMotionComponents();
  const viewport = useMotionViewport();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: project, isLoading } = useQuery<Project>({
    queryKey: ['project', id],
    queryFn: async () => {
      if (!id) throw new Error("No ID");
      const res = await fetch(`/api/projects/${id}`);
      if (!res.ok) throw new Error('Failed to fetch project');
      return res.json();
    }
  });

  const handleBackToProjects = () => {
    navigate('/projects');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-deep text-slate-light flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-deep text-slate-light flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The requested project could not be found.</p>
          <Motion.button
            onClick={() => {
              sessionStorage.setItem('portfolio-visited', 'true');
              navigate('/projects');
            }}
            whileHover={{ scale: 1.05 }}
            className="gradient-border p-[2px] rounded-full group"
          >
            <div className="bg-slate-deep px-6 py-3 rounded-full group-hover:bg-transparent transition-all duration-300">
              <span className="text-white group-hover:text-white font-semibold">Back to Projects</span>
            </div>
          </Motion.button>
        </div>
      </div>
    );
  }

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

  return (
    <div className="min-h-screen bg-slate-deep text-slate-light">
      <Navigation />

      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <Motion.button
            onClick={handleBackToProjects}
            whileHover={{ x: -5 }}
            className="inline-flex items-center text-primary hover:text-accent transition-colors mb-8 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
            Back to Projects
          </Motion.button>

          {/* Project Header */}
          <Motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gradient">
                {project.title}
              </h1>
              {project.featured && (
                <span className="bg-accent px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
              )}
            </div>
            <p className="text-xl text-gray-400 mb-6">{project.description}</p>

            {/* Technologies */}
            <div className="flex gap-3 flex-wrap mb-8">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 ${techColors[tech as keyof typeof techColors] || 'bg-primary/80'} rounded-full font-semibold`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 flex-wrap">
              <Motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-border p-[2px] rounded-full group"
              >
                <div className="bg-slate-deep px-6 py-3 rounded-full group-hover:bg-transparent transition-all duration-300 flex items-center gap-2">
                  <i className="fas fa-external-link-alt"></i>
                  <span className="text-white group-hover:text-white font-semibold">Live Demo</span>
                </div>
              </Motion.a>

              <Motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-morphism px-6 py-3 rounded-full font-semibold hover:bg-primary/20 transition-all duration-300 flex items-center gap-2"
              >
                <i className="fab fa-github"></i>
                View Code
              </Motion.a>
            </div>
          </Motion.div>

          {/* Project Image */}
          <Motion.div 
            className="mb-12 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </Motion.div>

          {/* Project Details */}
          <Motion.div
            className="prose prose-invert prose-lg max-w-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-slate-900/50 rounded-2xl p-8">
              <ReactMarkdown
                components={{
                  h1: ({ children }: any) => <h1 className="text-3xl font-bold text-gradient mb-6">{children}</h1>,
                  h2: ({ children }: any) => <h2 className="text-2xl font-bold text-primary mb-4 mt-8">{children}</h2>,
                  h3: ({ children }: any) => <h3 className="text-xl font-bold text-accent mb-3 mt-6">{children}</h3>,
                  p: ({ children }: any) => <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>,
                  ul: ({ children }: any) => <ul className="text-gray-300 mb-4 ml-6">{children}</ul>,
                  li: ({ children }: any) => <li className="mb-2 list-disc">{children}</li>,
                  code: ({ children }: any) => (
                    <code className="bg-slate-800 px-2 py-1 rounded text-accent font-mono text-sm">
                      {children}
                    </code>
                  ),
                  pre: ({ children }: any) => (
                    <pre className="bg-slate-800 p-4 rounded-lg overflow-x-auto mb-4">
                      {children}
                    </pre>
                  ),
                }}
              >
                {project.content || project.description}
              </ReactMarkdown>
            </div>
          </Motion.div>

          {/* Project Links Section */}
          <Motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Project Links</h3>
            <div className="flex gap-6 justify-center flex-wrap">
              <Motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="glass-morphism p-6 rounded-2xl text-center group hover:bg-primary/20 transition-all duration-300"
              >
                <i className="fas fa-external-link-alt text-3xl text-primary mb-3 block group-hover:text-accent transition-colors"></i>
                <div className="font-semibold">Live Demo</div>
                <div className="text-sm text-gray-400">View the live project</div>
              </Motion.a>

              <Motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="glass-morphism p-6 rounded-2xl text-center group hover:bg-primary/20 transition-all duration-300"
              >
                <i className="fab fa-github text-3xl text-primary mb-3 block group-hover:text-accent transition-colors"></i>
                <div className="font-semibold">Source Code</div>
                <div className="text-sm text-gray-400">View on GitHub</div>
              </Motion.a>
            </div>
          </Motion.div>
        </div>
      </section>
    </div>
  );
}