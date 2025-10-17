import React, { useState, useRef, useEffect } from 'react';
import './LazySection.css';

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  fallback?: React.ReactNode;
  onVisible?: () => void;
}

export const LazySection: React.FC<LazySectionProps> = ({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '50px',
  fallback,
  onVisible
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!hasBeenVisible) {
            setHasBeenVisible(true);
            onVisible?.();
          }
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold, rootMargin, hasBeenVisible, onVisible]);

  return (
    <div
      ref={sectionRef}
      className={`lazy-section ${isVisible ? 'visible' : ''} ${className}`}
    >
      {isVisible ? children : (fallback || <div className="lazy-section-placeholder" />)}
    </div>
  );
};


