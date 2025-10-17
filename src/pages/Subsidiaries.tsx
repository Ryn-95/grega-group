import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllSubsidiaries } from '../services';
import './Subsidiaries.css';

export const Subsidiaries: React.FC = () => {
  const subsidiaries = getAllSubsidiaries();
  const navigate = useNavigate();

  return (
    <div className="subsidiaries-page">
      {/* Hero Section */}
      <section className="subsidiaries-hero">
        <div className="container">
          <p className="subsidiaries-label">LE GROUPE</p>
          <h1>Nos Cabinets</h1>
          <p className="subsidiaries-subtitle">
            Trois cabinets d'excellence réunis pour offrir une expertise complète en gestion de patrimoine
          </p>
        </div>
      </section>

      {/* Cabinets Grid */}
      <section className="cabinets-section">
        <div className="container">
          <div className="cabinets-grid">
            {subsidiaries.map((cabinet) => (
              <div 
                key={cabinet.id} 
                className="cabinet-card"
                style={{ backgroundColor: cabinet.color }}
                onClick={() => navigate(`/subsidiary/${cabinet.id}`)}
              >
                <div className="cabinet-logo">
                  <span className="cabinet-icon">{cabinet.logo}</span>
                </div>
                <div className="cabinet-info">
                  <h3>{cabinet.name}</h3>
                  <p className="cabinet-sector">{cabinet.sector}</p>
                  <p className="cabinet-slogan">{cabinet.slogan}</p>
                  <button className="cabinet-link">
                    En savoir plus →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Modèle Section */}
      <section className="model-section">
        <div className="container">
          <div className="model-content">
            <div className="model-text">
              <p className="model-label">NOTRE MODÈLE</p>
              <h2>L'indépendance au service de l'excellence</h2>
              <p>
                Chaque filiale de Grega Group préserve son identité unique et son autonomie de décision, 
                tout en bénéficiant des ressources, de l'expertise et du réseau du groupe.
              </p>
              <p>
                Cette structure permet à nos conseillers de rester totalement indépendants dans leurs 
                recommandations, garantissant ainsi des conseils objectifs et personnalisés à nos clients.
              </p>
              <p>
                Le modèle de Grega Group combine le meilleur des deux mondes : l'agilité et la proximité 
                des structures indépendantes, avec la solidité et les ressources d'un groupe établi.
              </p>
            </div>
            <div className="model-image">
              <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop" alt="Notre modèle" />
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="advantages-section">
        <div className="container">
          <h2>Les Avantages du Groupe</h2>
          <div className="advantages-grid">
            <div className="advantage-item">
              <div className="advantage-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="20" width="40" height="30" rx="2" stroke="#8B7355" strokeWidth="2" fill="none"/>
                  <path d="M20 20V15C20 12 22 10 25 10H35C38 10 40 12 40 15V20" stroke="#8B7355" strokeWidth="2" fill="none"/>
                  <circle cx="30" cy="35" r="3" fill="#8B7355"/>
                </svg>
              </div>
              <h3>Indépendance Garantie</h3>
              <p>
                Nos conseillers ne sont liés à aucune institution financière, garantissant des recommandations 
                totalement objectives et personnalisées.
              </p>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30" cy="25" r="8" stroke="#8B7355" strokeWidth="2" fill="none"/>
                  <path d="M15 50C15 38 20 32 30 32C40 32 45 38 45 50" stroke="#8B7355" strokeWidth="2" fill="none"/>
                  <circle cx="45" cy="20" r="5" stroke="#8B7355" strokeWidth="2" fill="none"/>
                  <circle cx="15" cy="20" r="5" stroke="#8B7355" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3>Expertise Collective</h3>
              <p>
                Accédez à l'expertise combinée de plus de 100 conseillers patrimoniaux expérimentés à travers 
                nos trois cabinets.
              </p>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 30L25 45L50 20" stroke="#8B7355" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="30" cy="30" r="22" stroke="#8B7355" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3>Solidité Financière</h3>
              <p>
                Bénéficiez de la stabilité et des ressources d'un groupe soutenu par Tikehau Capital, leader 
                européen de la gestion alternative.
              </p>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="15" y="15" width="30" height="30" rx="2" stroke="#8B7355" strokeWidth="2" fill="none"/>
                  <path d="M15 25H45M25 15V45M35 15V45" stroke="#8B7355" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Solutions Complètes</h3>
              <p>
                Profitez d'une offre patrimoniale globale couvrant tous les aspects de votre situation : 
                financier, fiscal, immobilier, juridique.
              </p>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 10L35 25L50 27L40 37L43 52L30 45L17 52L20 37L10 27L25 25L30 10Z" stroke="#8B7355" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3>Excellence Reconnue</h3>
              <p>
                Leader parmi les cabinets de gestion de patrimoine indépendants avec 18 milliards d'euros 
                d'actifs conseillés.
              </p>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30" cy="30" r="20" stroke="#8B7355" strokeWidth="2" fill="none"/>
                  <path d="M30 20V30L38 38" stroke="#8B7355" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Disponibilité Maximale</h3>
              <p>
                Nos conseillers sont disponibles 6 jours sur 7 pour vous accompagner et répondre à toutes 
                vos questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="subsidiaries-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Trouvez le cabinet qui vous correspond</h2>
            <p>
              Chacun de nos cabinets possède son expertise propre. Découvrez celui qui correspond le mieux 
              à vos besoins et prenez rendez-vous pour un premier échange.
            </p>
            <button className="cta-button" onClick={() => navigate('/contact')}>
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
