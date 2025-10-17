import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

interface CarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
  infinite?: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = false,
  interval = 5000,
  showDots = true,
  showArrows = true,
  className = '',
  infinite = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const totalItems = children.length;

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const nextSlide = () => {
    if (infinite) {
      goToSlide((currentIndex + 1) % totalItems);
    } else {
      goToSlide(Math.min(currentIndex + 1, totalItems - 1));
    }
  };

  const prevSlide = () => {
    if (infinite) {
      goToSlide(currentIndex === 0 ? totalItems - 1 : currentIndex - 1);
    } else {
      goToSlide(Math.max(currentIndex - 1, 0));
    }
  };

  const goToSlideByDot = (index: number) => {
    goToSlide(index);
  };

  // Auto play effect
  useEffect(() => {
    if (autoPlay && totalItems > 1) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, interval);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [autoPlay, interval, currentIndex, totalItems]);

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        prevSlide();
        break;
      case 'ArrowRight':
        e.preventDefault();
        nextSlide();
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(totalItems - 1);
        break;
    }
  };

  if (totalItems === 0) return null;

  return (
    <div 
      className={`carousel ${className}`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Carousel"
    >
      <div className="carousel-container">
        <div 
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'transform 0.3s ease-in-out' : 'none'
          }}
        >
          {children.map((child, index) => (
            <div key={index} className="carousel-slide">
              {child}
            </div>
          ))}
        </div>

        {showArrows && totalItems > 1 && (
          <>
            <button
              className="carousel-arrow carousel-arrow-prev"
              onClick={prevSlide}
              disabled={!infinite && currentIndex === 0}
              aria-label="Slide précédent"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className="carousel-arrow carousel-arrow-next"
              onClick={nextSlide}
              disabled={!infinite && currentIndex === totalItems - 1}
              aria-label="Slide suivant"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </>
        )}
      </div>

      {showDots && totalItems > 1 && (
        <div className="carousel-dots">
          {Array.from({ length: totalItems }, (_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlideByDot(index)}
              aria-label={`Aller au slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      <div 
        className="carousel-touch-area"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      />
    </div>
  );
};

