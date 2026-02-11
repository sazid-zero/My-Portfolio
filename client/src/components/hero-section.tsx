import { useMotionComponents, useMotionViewport } from '@/hooks/use-motion-components';
import { useIsMobile } from '@/hooks/use-mobile';
import introduction  from '@/assets/profile/introduction.png';
import resumePdf from '@/assets/Resume.pdf';

export default function HeroSection() {
  const Motion = useMotionComponents();
  const viewport = useMotionViewport();
  const isMobile = useIsMobile();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      {/* Animated Background - Only on Desktop */}
      {!isMobile && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-deep via-slate-800 to-slate-deep">
          {/* Floating geometric shapes */}
          <Motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-24 h-24 border-2 border-primary/30 rounded-full"
          />
          <Motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-lg rotate-45"
          />
          <Motion.div
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-24 left-1/4 w-40 h-40 border-2 border-accent/20 rounded-lg"
          />

          {/* Gradient orbs */}
          <Motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"
          />
          <Motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"
          />
        </div>
      )}
      
      {/* Static Background for Mobile */}
      {isMobile && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-deep via-slate-900 to-slate-deep">
           {/* Simple static gradient overlay if needed, or just plain background */}
           <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
           <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl" />
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-x-12 ">
          {/* Left Content */}
          <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="flex-1 text-left mt-24"
          >
            <Motion.div
              className="text-2xl md:text-3xl text-gray-300 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white">Hello</span>
              <span className="text-primary">.</span>
            </Motion.div>

            <Motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-white">I'm </span>
              <span className="text-gradient">Sharif</span>
            </Motion.h1>

            <Motion.div
              className="text-2xl md:text-4xl text-white mb-8 font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Software Developer
            </Motion.div>

            <Motion.p
              className="text-base md:text-lg text-gray-400 mb-10 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Crafting exceptional digital experiences with React.js, TailwindCSS, and modern web technologies.
              Passionate about clean code and innovative solutions.
            </Motion.p>

            <Motion.div
              className="flex gap-6 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="gradient-border p-[2px] rounded-full group"
              >
                <div className="bg-slate-deep px-4 py-2 md:px-6 md:py-4 rounded-full group-hover:bg-transparent transition-all duration-300">
                  <span className="text-white group-hover:text-white font-semibold">View My Work</span>
                </div>
              </Motion.button>

              <Motion.a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-morphism px-4 py-2.5 md:px-6 md:py-4 rounded-full hover:bg-white/20 transition-all duration-300 inline-block"
              >
                My resume
              </Motion.a>
            </Motion.div>

            {/* Tech Skills Row */}
            <Motion.div
              className="hidden md:flex flex-wrap gap-6 mt-10 lg:mt-20 text-gray-500 text-sm font-mono"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span>HTML5</span>
              <span>CSS</span>
              <span>Javascript</span>
              <span>Node.js</span>
              <span>React</span>
              <span>Next.js</span>
              <span>PostgreSQL</span>
            </Motion.div>
          </Motion.div>

          {/* Right Profile Circle */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-1 flex items-end justify-center relative min-h-[500px] lg:min-h-[600px]"
          >
            {/* Decorative Tags */}
            <Motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute left-0 lg:left-10 top-1/4 text-primary/40 text-6xl md:text-8xl font-bold z-0"
            >
              &lt;
            </Motion.div>
            
            <Motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
              className="absolute right-0 lg:right-10 bottom-1/4 text-primary/40 text-6xl md:text-8xl font-bold z-0"
            >
              &gt;
            </Motion.div>

            {/* Profile Image - Extends to Bottom */}
            <div className="relative w-[380px] md:w-[480px] lg:w-[600px]">
              <img 
                src={introduction} 
                alt="Profile" 
                className="w-full h-auto object-cover object-top"
              />
              {/* Bottom Bar under Image */}
              <div className="hidden md:block w-[80%] mx-auto h-1 bg-gradient-to-r from-accent via-secondary to-accent mt-0"></div>
            </div>
          </Motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <Motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <Motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
      </Motion.div>
    </section>
  );
}
