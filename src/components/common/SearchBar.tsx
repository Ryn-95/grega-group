import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

interface SearchResult {
  id: string;
  title: string;
  type: 'page' | 'subsidiary' | 'service';
  url: string;
  description?: string;
}

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onSearch?: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Rechercher...",
  className = '',
  onSearch
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Données de recherche simulées
  const searchData: SearchResult[] = [
    { id: '1', title: 'Accueil', type: 'page', url: '/', description: 'Page d\'accueil du site' },
    { id: '2', title: 'À propos', type: 'page', url: '/about', description: 'Découvrez notre histoire et notre mission' },
    { id: '3', title: 'Nos cabinets', type: 'page', url: '/subsidiaries', description: 'Découvrez tous nos cabinets' },
    { id: '4', title: 'Contact', type: 'page', url: '/contact', description: 'Contactez-nous' },
    { id: '5', title: 'Stellar Invest', type: 'subsidiary', url: '/subsidiary/stellar', description: 'Gestion de patrimoine' },
    { id: '6', title: 'Grega Finance', type: 'subsidiary', url: '/subsidiary/finance', description: 'Finance & Patrimoine' },
    { id: '7', title: 'Grega Immo', type: 'subsidiary', url: '/subsidiary/immo', description: 'Immobilier & Patrimoine' },
    { id: '8', title: 'Grega Conseil', type: 'subsidiary', url: '/subsidiary/conseil', description: 'Conseil & Stratégie' },
    { id: '9', title: 'Gestion de patrimoine', type: 'service', url: '/about', description: 'Nos services de gestion' },
    { id: '10', title: 'Conseil financier', type: 'service', url: '/about', description: 'Conseil en investissement' },
    { id: '11', title: 'Immobilier', type: 'service', url: '/subsidiary/immo', description: 'Services immobiliers' },
    { id: '12', title: 'Conseil stratégique', type: 'service', url: '/subsidiary/conseil', description: 'Conseil en stratégie' }
  ];

  const performSearch = (searchQuery: string) => {
    if (searchQuery.length < 2) {
      setResults([]);
      return;
    }

    const filteredResults = searchData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(filteredResults.slice(0, 8)); // Limiter à 8 résultats
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    performSearch(value);
    setIsOpen(value.length >= 2);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : results.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < results.length) {
          handleResultClick(results[selectedIndex]);
        } else if (onSearch) {
          onSearch(query);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleResultClick = (result: SearchResult) => {
    navigate(result.url);
    setQuery('');
    setIsOpen(false);
    setSelectedIndex(-1);
    if (onSearch) {
      onSearch(result.title);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  // Fermer la recherche quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'page': return '📄';
      case 'subsidiary': return '🏢';
      case 'service': return '⚙️';
      default: return '📄';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'page': return 'Page';
      case 'subsidiary': return 'Cabinet';
      case 'service': return 'Service';
      default: return 'Page';
    }
  };

  return (
    <div className={`search-bar ${className}`} ref={searchRef}>
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-container">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => query.length >= 2 && setIsOpen(true)}
            placeholder={placeholder}
            className="search-input"
            autoComplete="off"
          />
          <button type="submit" className="search-button" aria-label="Rechercher">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </form>

      {isOpen && results.length > 0 && (
        <div className="search-results">
          <div className="search-results-header">
            <span className="results-count">
              {results.length} résultat{results.length > 1 ? 's' : ''}
            </span>
          </div>
          <div className="search-results-list">
            {results.map((result, index) => (
              <div
                key={result.id}
                className={`search-result ${index === selectedIndex ? 'selected' : ''}`}
                onClick={() => handleResultClick(result)}
              >
                <div className="result-icon">
                  {getTypeIcon(result.type)}
                </div>
                <div className="result-content">
                  <div className="result-title">{result.title}</div>
                  <div className="result-description">{result.description}</div>
                  <div className="result-type">{getTypeLabel(result.type)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="search-results">
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <div className="no-results-text">
              Aucun résultat pour "{query}"
            </div>
            <div className="no-results-suggestion">
              Essayez avec d'autres mots-clés
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

