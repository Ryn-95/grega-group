import React, { useState, useEffect } from 'react';
import './ScrollProgress.css';

interface ScrollProgressProps {
  className?: string;
  color?: string;
  height?: number;
  position?: 'top' | 'bottom';
  showPercentage?: boolean;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({
  className = '',
  color = 'var(--primary-color)',
  height = 4,
  position = 'top',
  showPercentage = false
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, scrollPercent)));
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial call

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className={`scroll-progress ${position} ${className}`}>
      <div
        className="scroll-progress-bar"
        style={{
          width: `${scrollProgress}%`,
          height: `${height}px`,
          backgroundColor: color
        }}
      />
      {showPercentage && (
        <div className="scroll-progress-percentage">
          {Math.round(scrollProgress)}%
        </div>
      )}
    </div>
  );
};


