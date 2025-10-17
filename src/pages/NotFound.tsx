import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <div className="not-found-number">404</div>
          <h1>Page Introuvable</h1>
          <p>
            La page que vous recherchez n'existe pas ou a été déplacée. 
            Nous vous invitons à retourner à l'accueil.
          </p>
          <div className="not-found-actions">
            <button className="primary-button" onClick={() => navigate('/')}>
              Retour à l'accueil
            </button>
            <button className="secondary-button" onClick={() => navigate('/contact')}>
              Nous contacter
            </button>
          </div>
          <div className="not-found-links">
            <h3>Liens utiles</h3>
            <div className="quick-links">
              <button onClick={() => navigate('/subsidiaries')}>Nos Cabinets</button>
              <button onClick={() => navigate('/about')}>Notre Métier</button>
              <button onClick={() => navigate('/contact')}>Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


