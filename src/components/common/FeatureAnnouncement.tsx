import React, { useState, useEffect } from 'react';
import './FeatureAnnouncement.css';

interface FeatureAnnouncementProps {
  title: string;
  description: string;
  features: string[];
  onDismiss?: () => void;
  className?: string;
  autoHide?: boolean;
  duration?: number;
}

export const FeatureAnnouncement: React.FC<FeatureAnnouncementProps> = ({
  title,
  description,
  features,
  onDismiss,
  className = '',
  autoHide = false,
  duration = 10000
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [autoHide, duration]);

  const handleDismiss = () => {
    setIsLeaving(true);
    setTimeout(() => {
      setIsVisible(false);
      onDismiss?.();
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`feature-announcement ${isLeaving ? 'leaving' : ''} ${className}`}>
      <div className="feature-announcement-content">
        <div className="feature-announcement-header">
          <div className="feature-announcement-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="feature-announcement-text">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <button
            className="feature-announcement-close"
            onClick={handleDismiss}
            aria-label="Fermer l'annonce"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="feature-announcement-features">
          <h4>Nouvelles fonctionnalités :</h4>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};