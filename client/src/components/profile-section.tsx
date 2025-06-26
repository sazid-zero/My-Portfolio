import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function ProfileSection() {
  const scrollRevealRef = useScrollReveal();

  return (
    <section id="profile" className="py-32 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div ref={scrollRevealRef} className="scroll-reveal">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Profile Photo Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                {/* Decorative Elements Around Photo */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-8 -left-8 w-16 h-16 border-2 border-primary/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-r from-secondary/40 to-accent/40 rounded-lg rotate-45"
                />
                
                {/* Main Photo Container */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  className="relative group"
                >
                  {/* Gradient Border */}
                  <div className="gradient-border p-1 rounded-3xl">
                    <div className="bg-slate-deep rounded-3xl p-2">
                      <img
                        src="/src/assets/profile/your-photo.jpg" // Replace with your photo
                        alt="Sharif Mahmud - Full Stack Developer"
                        className="w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:shadow-primary/20 transition-all duration-500"
                      />
                      
                      {/* Overlay with floating elements */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-deep/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            className="glass-morphism p-4 rounded-lg"
                          >
                            <div className="text-sm font-semibold text-gradient">Available for Projects</div>
                            <div className="text-xs text-gray-300">Let's build something amazing together</div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Status Badge */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4"
                  >
                    <div className="glass-morphism px-4 py-2 rounded-full border border-primary/30">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs font-semibold">Online</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Profile Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <motion.h2 
                  className="text-5xl md:text-6xl font-bold mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Meet <span className="text-gradient">Sharif Mahmud Sazid</span>
                </motion.h2>
                
                <motion.div 
                  className="text-xl text-gray-300 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-accent font-mono">&lt;</span>
                  <span>Creative Developer & Problem Solver</span>
                  <span className="text-accent font-mono">/&gt;</span>
                </motion.div>
              </div>

              {/* Quick Facts */}
              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {[
                  { label: 'Location', value: 'sylhet, Bangladesh', icon: 'fas fa-map-marker-alt' },
                  { label: 'Experience', value: '2+ Years', icon: 'fas fa-calendar-alt' },
                  { label: 'Focus', value: 'Frontend & UI/UX', icon: 'fas fa-code' },
                  { label: 'Availability', value: 'Open to Work', icon: 'fas fa-briefcase' }
                ].map((fact, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="glass-morphism p-4 rounded-xl text-center hover-lift"
                  >
                    <i className={`${fact.icon} text-primary text-lg mb-2 block`}></i>
                    <div className="text-sm text-gray-400">{fact.label}</div>
                    <div className="font-semibold">{fact.value}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Personality Traits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="glass-morphism p-6 rounded-2xl"
              >
                <h3 className="text-xl font-bold mb-4 text-gradient">What Drives Me</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center gap-3">
                    <i className="fas fa-rocket text-accent"></i>
                    <span>Passionate about creating seamless user experiences</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fas fa-lightbulb text-accent"></i>
                    <span>Always learning new technologies and best practices</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fas fa-heart text-accent"></i>
                    <span>Love collaborating with creative teams</span>
                  </div>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="gradient-border p-[2px] rounded-full group flex-1"
                >
                  <div className="bg-slate-deep px-6 py-3 rounded-full group-hover:bg-transparent transition-all duration-300 text-center">
                    <span className="text-white group-hover:text-white font-semibold">Let's Work Together</span>
                  </div>
                </motion.button>
                
                <motion.a
                  href="/src/assets/profile/sazid-resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-morphism px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 text-center flex-1"
                >
                  Download Resume
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}