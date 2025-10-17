import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onComplete?: () => void;
  duration?: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  onComplete, 
  duration = 3000 
}) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Initialisation...",
    "Chargement des données...",
    "Préparation de l'expérience...",
    "Presque prêt..."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsVisible(false);
            onComplete?.();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, duration / 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, duration / 4);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [duration, onComplete, loadingTexts.length]);

  if (!isVisible) return null;

  return (
    <div className="loading-screen">
      <div className="loading-container">
        {/* Logo/Brand */}
        <div className="loading-brand">
          <div className="brand-logo">
            <div className="logo-circle">
              <span className="logo-text">G</span>
            </div>
          </div>
          <h1 className="brand-name">Grega Group</h1>
          <p className="brand-tagline">Excellence • Innovation • Confiance</p>
        </div>

        {/* Progress Section */}
        <div className="loading-progress">
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="progress-text">{progress}%</div>
          </div>
          
          <div className="loading-text">
            <span className="loading-message">{loadingTexts[currentText]}</span>
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="floating-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
          <div className="floating-circle circle-4"></div>
        </div>
      </div>
    </div>
  );
};
