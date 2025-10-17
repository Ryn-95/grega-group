import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">GREGA GROUP</h3>
            <p className="footer-description">
              Leader dans la gestion multi-filiales, nous accompagnons votre croissance 
              avec expertise et innovation depuis plus de 15 ans.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Le Groupe</Link></li>
              <li><Link to="/subsidiaries">Nos cabinets</Link></li>
              <li><Link to="/about">Notre métier</Link></li>
              <li><Link to="/contact">Nous rejoindre</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Nos Cabinets</h4>
            <ul className="footer-links">
              <li><Link to="/subsidiary/tech">Grega Tech</Link></li>
              <li><Link to="/subsidiary/finance">Grega Finance</Link></li>
              <li><Link to="/subsidiary/immo">Grega Immo</Link></li>
              <li><Link to="/subsidiary/conseil">Grega Conseil</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact</h4>
            <ul className="footer-contact">
              <li>contact@gregagroup.com</li>
              <li>+33 1 XX XX XX XX</li>
              <li>Paris, France</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Grega Group. Tous droits réservés.</p>
          <div className="footer-legal">
            <a href="#">Mentions légales</a>
            <span>•</span>
            <a href="#">Politique de confidentialité</a>
            <span>•</span>
            <a href="#">CGU</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

