import React, { useEffect, useRef, useState } from 'react';
import './ParallaxSection.css';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
  backgroundImage?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  className = '',
  style = {},
  backgroundImage,
  overlay = false,
  overlayOpacity = 0.3
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        // const rect = sectionRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  const parallaxStyle: React.CSSProperties = {
    transform: `translateY(${offset}px)`,
    ...style
  };

  const backgroundStyle: React.CSSProperties = backgroundImage ? {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  } : {};

  return (
    <div
      ref={sectionRef}
      className={`parallax-section ${className}`}
      style={backgroundStyle}
    >
      {overlay && (
        <div 
          className="parallax-overlay"
          style={{ opacity: overlayOpacity }}
        />
      )}
      <div 
        className="parallax-content"
        style={parallaxStyle}
      >
        {children}
      </div>
    </div>
  );
};

