import React, { useState, useEffect } from 'react';
import './AnimatedText.css';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  type?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'typewriter';
  splitBy?: 'word' | 'character' | 'none';
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.6,
  type = 'fadeIn',
  splitBy = 'word'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (type === 'typewriter' && isVisible) {
      const textArray = splitBy === 'character' ? text.split('') : text.split(' ');
      const interval = setInterval(() => {
        if (currentIndex < textArray.length) {
          setDisplayedText(prev => {
            if (splitBy === 'character') {
              return prev + textArray[currentIndex];
            } else {
              return prev + (currentIndex > 0 ? ' ' : '') + textArray[currentIndex];
            }
          });
          setCurrentIndex(prev => prev + 1);
        } else {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    } else if (isVisible) {
      setDisplayedText(text);
    }
  }, [isVisible, text, currentIndex, type, splitBy]);

  const renderText = () => {
    if (type === 'typewriter') {
      return displayedText;
    }

    if (splitBy === 'none') {
      return text;
    }

    const textArray = splitBy === 'character' ? text.split('') : text.split(' ');
    
    return textArray.map((item, index) => (
      <span
        key={index}
        className={`animated-text-item ${isVisible ? 'visible' : ''}`}
        style={{
          animationDelay: `${delay + (index * 0.1)}s`,
          animationDuration: `${duration}s`
        }}
      >
        {item}
        {splitBy === 'word' && index < textArray.length - 1 && ' '}
      </span>
    ));
  };

  return (
    <div className={`animated-text ${type} ${className} ${isVisible ? 'visible' : ''}`}>
      {renderText()}
    </div>
  );
};

