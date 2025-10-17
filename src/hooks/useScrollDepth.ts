import { useEffect, useRef } from 'react';
import { useAnalytics } from './useAnalytics';

export const useScrollDepth = () => {
  const { trackScroll } = useAnalytics();
  const scrollDepths = useRef<Set<number>>(new Set());
  const milestones = [25, 50, 75, 100];

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

      milestones.forEach((milestone) => {
        if (
          scrollPercent >= milestone &&
          !scrollDepths.current.has(milestone)
        ) {
          scrollDepths.current.add(milestone);
          trackScroll(milestone);
        }
      });
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [trackScroll]);
};

