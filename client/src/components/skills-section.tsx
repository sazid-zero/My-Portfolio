import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function SkillsSection() {
  const scrollRevealRef = useScrollReveal();

  const technicalSkills = [
    { name: 'React.js', level: 95, icon: 'fab fa-react', color: 'from-primary to-accent' },
    { name: 'TailwindCSS', level: 90, icon: 'fab fa-css3-alt', color: 'from-secondary to-primary' },
    { name: 'JavaScript/ES6+', level: 88, icon: 'fab fa-js-square', color: 'from-yellow-400 to-accent' },
    { name: 'Node.js', level: 82, icon: 'fab fa-node-js', color: 'from-green-400 to-primary' },
    { name: 'Python', level: 85, icon: 'fab fa-python', color: 'from-blue-400 to-secondary' },
    { name: 'Java', level: 90, icon: 'fab fa-java' , color: 'from-red-400 to-purple-400'}
  ];

  const tools = [
    { name: 'Git & GitHub', icon: 'fab fa-git-alt', color: 'text-orange-400' },
    { name: 'Figma', icon: 'fab fa-figma', color: 'text-purple-400' },
    { name: 'AWS', icon: 'fab fa-aws', color: 'text-yellow-600' },
    { name: 'Docker', icon: 'fab fa-docker', color: 'text-blue-500' },
    { name: 'MongoDB', icon: 'fas fa-database', color: 'text-green-500' },
    { name: 'Sass/SCSS', icon: 'fab fa-sass', color: 'text-pink-400' },
    { name: 'React Native', icon: 'fas fa-mobile-alt', color: 'text-indigo-400' },
    { name: 'Firebase', icon: 'fas fa-fire', color: 'text-red-500' }
  ];

  const certifications = [
    { name: 'AWS Certified Developer Associate', issuer: 'Amazon Web Services', date: '2024' },
    { name: 'React Developer Certification', issuer: 'Meta', date: '2023' }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Tech Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
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
            My <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="scroll-reveal"
          >
            <h3 className="text-3xl font-bold mb-8 text-gradient">Technical Expertise</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-morphism p-6 rounded-xl hover-lift"
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <i className={`${skill.icon} text-2xl text-accent`}></i>
                      <span className="font-semibold text-lg">{skill.name}</span>
                    </div>
                    <span className="text-primary font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      className={`bg-gradient-to-r ${skill.color} h-2 rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="scroll-reveal"
          >
            <h3 className="text-3xl font-bold mb-8 text-gradient">Tools & Platforms</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-morphism p-4 rounded-xl text-center hover-lift group"
                >
                  <motion.i
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`${tool.icon} text-4xl mb-3 ${tool.color} group-hover:scale-110 transition-transform`}
                  />
                  <div className="font-semibold">{tool.name}</div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4 text-accent">Recent Certifications</h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="glass-morphism p-4 rounded-lg flex items-center justify-between hover-lift"
                  >
                    <div>
                      <div className="font-semibold">{cert.name}</div>
                      <div className="text-sm text-gray-400">{cert.issuer}</div>
                    </div>
                    <div className="text-sm text-accent">{cert.date}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
