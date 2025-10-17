import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

interface CookieConsentProps {
  onAccept?: () => void;
  onDecline?: () => void;
  onCustomize?: () => void;
  className?: string;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({
  onAccept,
  onDecline,
  onCustomize,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    handleClose();
    onAccept?.();
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    handleClose();
    onDecline?.();
  };

  const handleCustomize = () => {
    onCustomize?.();
  };

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`cookie-consent ${isLeaving ? 'leaving' : ''} ${className}`}>
      <div className="cookie-consent-content">
        <div className="cookie-consent-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
          </svg>
        </div>
        <div className="cookie-consent-text">
          <h3>Cookies et confidentialité</h3>
          <p>
            Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
            En continuant à naviguer, vous acceptez notre utilisation des cookies.
          </p>
        </div>
        <div className="cookie-consent-actions">
          <button
            className="cookie-consent-button cookie-consent-button-decline"
            onClick={handleDecline}
          >
            Refuser
          </button>
          <button
            className="cookie-consent-button cookie-consent-button-customize"
            onClick={handleCustomize}
          >
            Personnaliser
          </button>
          <button
            className="cookie-consent-button cookie-consent-button-accept"
            onClick={handleAccept}
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
};


