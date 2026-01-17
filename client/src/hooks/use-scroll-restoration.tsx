import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to save and restore scroll position when navigating between pages
 * Saves scroll position before leaving a page and restores it when returning
 */
export function useScrollRestoration() {
  const location = useLocation();
  const scrollPositions = new Map<string, number>();

  useEffect(() => {
    // Restore scroll position when component mounts
    const savedScrollPosition = sessionStorage.getItem(`scroll-position-${location.pathname}`);
    if (savedScrollPosition !== null) {
      const scrollPosition = parseInt(savedScrollPosition, 10);
      // Use setTimeout to ensure DOM is ready before scrolling
      setTimeout(() => {
        window.scrollTo(0, scrollPosition);
      }, 0);
    }
  }, [location.pathname]);

  // Save scroll position before navigating away
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem(
        `scroll-position-${location.pathname}`,
        window.scrollY.toString()
      );
    };

    // Save on page unload
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Also save when component unmounts (navigation away)
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      sessionStorage.setItem(
        `scroll-position-${location.pathname}`,
        window.scrollY.toString()
      );
    };
  }, [location.pathname]);
}
