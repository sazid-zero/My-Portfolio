
import { useEffect } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  useEffect(() => {
    // Initialize GSAP timeline
    const tl = gsap.timeline();

    // Animate the name letters
    tl.fromTo(
      ".name-letter",
      {
        opacity: 0,
        y: 50,
        rotationX: -90,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
      }
    );

    // Animate progress bar
    tl.to(
      ".progress-bar",
      {
        width: "100%",
        duration: 2,
        ease: "power2.out",
      },
      "-=0.5"
    );

    // Animate percentage counter
    tl.to(
      ".progress-text",
      {
        textContent: "100%",
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        onUpdate: function() {
          const current = Math.round(this.progress() * 100);
          document.querySelector(".progress-text")!.textContent = `${current}%`;
        }
      },
      "-=2"
    );

    // Exit animations
    tl.to(
      ".progress-container",
      {
        opacity: 0,
        y: -30,
        duration: 0.5,
        ease: "power2.in",
      },
      "+=0.5"
    );

    tl.to(
      ".preloader-content",
      {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "power2.in",
      },
      "-=0.3"
    );

    tl.to(
      ".preloader",
      {
        opacity: 0,
        scale: 1.1,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          onComplete();
        }
      },
      "-=0.4"
    );

  }, [onComplete]);

  const name = "Sharif Mahmud Sazid";

  return (
    <div className="preloader fixed inset-0 z-50 bg-gradient-to-br from-slate-deep via-slate-800 to-slate-deep flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="preloader-content relative z-10 text-center">
        {/* Animated Name */}
        <div className="mb-16">
          <div className="text-4xl md:text-6xl font-bold text-white mb-4 flex flex-wrap justify-center gap-2">
            {name.split('').map((letter, index) => (
              <span
                key={index}
                className={`name-letter inline-block ${letter === ' ' ? 'w-4' : ''}`}
                style={{
                  background: letter !== ' ' ? 'linear-gradient(135deg, hsl(248, 84%, 67%), hsl(251, 65%, 64%), hsl(192, 95%, 44%))' : 'transparent',
                  WebkitBackgroundClip: letter !== ' ' ? 'text' : 'initial',
                  WebkitTextFillColor: letter !== ' ' ? 'transparent' : 'initial',
                  backgroundClip: letter !== ' ' ? 'text' : 'initial',
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </div>
          <div className="text-lg text-gray-400 opacity-80">
            Building the future, one line of code at a time
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="progress-container">
          <div className="w-80 mx-auto">
            {/* Progress Bar Background */}
            <div className="relative h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/30">
              {/* Progress Bar Fill */}
              <div 
                className="progress-bar h-full w-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full relative"
                style={{
                  boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)',
                }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              </div>
            </div>
            
            {/* Progress Text */}
            <div className="mt-4 text-center">
              <span className="progress-text text-2xl font-bold text-white">0%</span>
            </div>
          </div>

          {/* Loading dots */}
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-200"></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-400"></div>
          </div>
        </div>
      </div>

      {/* Corner decorative elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30 rounded-tl-lg"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-secondary/30 rounded-tr-lg"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-accent/30 rounded-bl-lg"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30 rounded-br-lg"></div>
    </div>
  );
}
