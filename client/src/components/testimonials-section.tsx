import { useMotionComponents, useMotionViewport } from '@/hooks/use-motion-components';
 
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { testimonialAvatars } from '@/assets/testimonials/images';

export default function TestimonialsSection() {
  const Motion = useMotionComponents();
  const viewport = useMotionViewport();
  const scrollRevealRef = useScrollReveal();

  const testimonials = [
    {
      content: "Sharif's attention to detail and technical expertise made our project a huge success. Their React.js skills are exceptional, and they always deliver clean, maintainable code.",
      name: "Sharmin Akther",
      role: "Junior Frontend Developer",
      avatar: testimonialAvatars.avatar1
    },
    {
      content: "Working with Sharif was a pleasure. They bring creativity and technical excellence together, creating user interfaces that are both beautiful and highly functional.",
      name: "Shafayat Mahmud",
      role: "Product Manager", 
      avatar: testimonialAvatars.avatar2
    },
    {
      content: "Sharif's problem-solving skills and dedication to learning new technologies make them an invaluable team member. Highly recommended for any frontend development project.",
      name: "Sumaya Jui",
      role: "UX Designer",
      avatar: testimonialAvatars.avatar3
    }
  ];

  return (
    <section className="py-32 bg-slate-900/50 relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div ref={scrollRevealRef} className="text-center mb-20 scroll-reveal">
          <Motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={viewport}
          >
            What People <span className="text-gradient">Say</span>
          </Motion.h2>
          <Motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
             viewport={viewport}
          >
            Feedback from colleagues, mentors, and project collaborators
          </Motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
               viewport={viewport}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-morphism p-8 rounded-2xl hover-lift scroll-reveal"
            >
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, starIndex) => (
                    <Motion.i
                      key={starIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.2 + starIndex * 0.1 }}
                       viewport={viewport}
                      className="fas fa-star"
                    />
                  ))}
                </div>
              </div>
              <Motion.p 
                className="text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                 viewport={viewport}
              >
                "{testimonial.content}"
              </Motion.p>
              <Motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                 viewport={viewport}
              >
                <Motion.img
                  whileHover={{ scale: 1.1 }}
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-red-500"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </Motion.div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
