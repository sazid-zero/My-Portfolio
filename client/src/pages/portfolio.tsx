import { useEffect, useState } from 'react';
import { useMotionComponents, useMotionViewport } from '@/hooks/use-motion-components';
import { useMotionTransition } from '@/hooks/use-motion-components';
import Navigation from '@/components/navigation';
import Preloader from '@/components/preloader';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ProfileSection from '@/components/profile-section';
import ProjectsSection from '@/components/projects-section';
import SkillsSection from '@/components/skills-section';
import TestimonialsSection from '@/components/testimonials-section';
import ContactSection from '@/components/contact-section';

export default function Portfolio() {
    const Motion = useMotionComponents();
  const viewport = useMotionViewport();
    const [isLoading, setIsLoading] = useState(() => {
        // Show preloader only on the very first visit in this session
        const hasShownPreloader = sessionStorage.getItem('preloader-shown');
        if (hasShownPreloader) {
            return false;
        }
        // Mark that preloader has been shown
        sessionStorage.setItem('preloader-shown', 'true');
        return true;
    });

    const handlePreloaderComplete = () => {
        setIsLoading(false);
    };

    useEffect(() => {
        // Scroll to top button functionality
        const scrollTopBtn = document.getElementById('scrollTop');

        const handleScroll = () => {
            if (scrollTopBtn) {
                if (window.pageYOffset > 300) {
                    scrollTopBtn.classList.remove('opacity-0', 'invisible');
                    scrollTopBtn.classList.add('opacity-100', 'visible');
                } else {
                    scrollTopBtn.classList.add('opacity-0', 'invisible');
                    scrollTopBtn.classList.remove('opacity-100', 'visible');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle scrolling to sections when returning from other pages
    useEffect(() => {
        const sectionId = sessionStorage.getItem('scrollToSection');
        if (sectionId) {
            sessionStorage.removeItem('scrollToSection');
            // Use setTimeout to ensure DOM is ready
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [isLoading]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

            <Motion.div
                className="min-h-screen bg-slate-deep text-slate-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Navigation />
                <HeroSection />
                <AboutSection />
                <ProfileSection />
                <ProjectsSection />
                <SkillsSection />
                <TestimonialsSection />
                <ContactSection />

                {/* Footer */}
                <footer className="bg-slate-900 py-12 border-t border-gray-800">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center">
                            <Motion.div
                                className="text-3xl font-bold text-gradient mb-4"
                                whileHover={{ scale: 1.05 }}
                            >
                                Sharif Mahmud Sazid<span className="text-accent">.</span>
                            </Motion.div>
                            <p className="text-gray-400 mb-8">
                                Building the future, one line of code at a time
                            </p>

                            <div className="flex justify-center gap-6 mb-8">
                                {[
                                    { icon: 'fab fa-github', href: 'https://github.com' },
                                    { icon: 'fab fa-linkedin', href: 'https://linkedin.com' },
                                    { icon: 'fab fa-twitter', href: 'https://twitter.com' },
                                    { icon: 'fab fa-instagram', href: 'https://instagram.com' }
                                ].map((social, index) => (
                                    <Motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="glass-morphism p-3 rounded-lg hover:bg-primary/20 transition-all duration-300 group"
                                    >
                                        <i className={`${social.icon} text-xl group-hover:text-primary transition-colors`}></i>
                                    </Motion.a>
                                ))}
                            </div>

                            <div className="text-gray-500 text-sm">
                                © 2024 Sharif Mahmud. Built with React.js & TailwindCSS
                            </div>
                        </div>
                    </div>
                </footer>

                {/* Scroll to Top Button */}
                <Motion.button
                    id="scrollTop"
                    onClick={scrollToTop}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed bottom-8 right-8 glass-morphism p-4 rounded-full opacity-0 invisible transition-all duration-300 hover:bg-primary/20 z-50"
                >
                    <i className="fas fa-arrow-up text-xl text-primary"></i>
                </Motion.button>
            </Motion.div>
        </>
    );
}
