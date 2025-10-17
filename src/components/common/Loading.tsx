import React from 'react';
import './Loading.css';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  text?: string;
  type?: 'spinner' | 'dots' | 'pulse' | 'bars';
}

export const Loading: React.FC<LoadingProps> = ({ 
  size = 'medium', 
  className = '',
  text = 'Chargement...',
  type = 'spinner'
}) => {
  const renderSpinner = () => {
    switch (type) {
      case 'dots':
        return (
          <div className="loading-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        );
      case 'pulse':
        return (
          <div className="loading-pulse">
            <div className="pulse-circle"></div>
          </div>
        );
      case 'bars':
        return (
          <div className="loading-bars">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        );
      default:
        return (
          <div className="loading-spinner">
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
          </div>
        );
    }
  };

  return (
    <div className={`loading-container ${size} ${type} ${className}`} role="status" aria-label="Chargement en cours">
      {renderSpinner()}
      <p className="loading-text">{text}</p>
    </div>
  );
};

