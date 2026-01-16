import { useEffect, useRef } from 'react';
import { useIsMobile } from './use-mobile';

export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Skip parallax on mobile to improve performance
    if (isMobile) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;
      element.style.transform = `translateY(${rate}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, isMobile]);

  return ref;
}
