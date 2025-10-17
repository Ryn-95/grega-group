import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SearchBar, ThemeToggle } from '../common';
import './Header.css';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <nav className="nav" role="navigation" aria-label="Navigation principale">
          <Link to="/" className="logo" aria-label="Retour à l'accueil - Grega Group">
            <span className="logo-text">GREGA GROUP</span>
          </Link>

          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link to="/" className={isActive('/')} onClick={() => setIsMenuOpen(false)}>
                Le Groupe
              </Link>
            </li>
            <li>
              <Link to="/subsidiaries" className={isActive('/subsidiaries')} onClick={() => setIsMenuOpen(false)}>
                Nos cabinets
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive('/about')} onClick={() => setIsMenuOpen(false)}>
                Notre métier
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className={isActive('/testimonials')} onClick={() => setIsMenuOpen(false)}>
                Témoignages
              </Link>
            </li>
            <li>
              <Link to="/contact" className={isActive('/contact')} onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="header-actions">
            <div className="search-container">
              <SearchBar 
                placeholder="Rechercher..."
                className="header-search"
              />
            </div>
            <ThemeToggle size="small" className="header-theme-toggle" />
          </div>
        </nav>
      </div>
    </header>
  );
};
