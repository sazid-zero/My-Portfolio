import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';
import React from 'react';

/**
 * Hook that returns either motion components (for desktop) or regular HTML elements (for mobile)
 * This optimization removes animation overhead on mobile devices for better performance
 */
export function useMotionComponents() {
  const isMobile = useIsMobile();

  if (isMobile) {
    // Return regular HTML elements for mobile (no animations)
    return {
      div: motion.div,
      span: 'span',
      button: 'button',
      a: 'a',
      img: 'img',
      i: 'i',
      nav: 'nav',
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
      p: 'p',
    };
  }

  // Return motion components for desktop
  return {
    div: motion.div,
    span: motion.span,
    button: motion.button,
    a: motion.a,
    img: motion.img,
    i: motion.i,
    nav: motion.nav,
    h1: motion.h1,
    h2: motion.h2,
    h3: motion.h3,
    h4: motion.h4,
    h5: motion.h5,
    h6: motion.h6,
    p: motion.p,
  };
}
