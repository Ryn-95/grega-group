import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

export const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <p className="about-label">NOTRE MÉTIER</p>
          <h1>La gestion de patrimoine au service de vos projets</h1>
          <p className="about-subtitle">
            Une approche personnalisée et indépendante pour construire, protéger et transmettre votre patrimoine
          </p>
        </div>
      </section>

      {/* Notre Expertise Section */}
      <section className="expertise-section">
        <div className="container">
          <div className="expertise-content">
            <div className="expertise-text">
              <h2>Notre Expertise</h2>
              <p>
                Grega Group réunit quatre filiales spécialisées dans différents domaines d'expertise. 
                Nous accompagnons nos clients avec des solutions innovantes et personnalisées dans la technologie, 
                la finance, l'immobilier et le conseil stratégique.
              </p>
              <p>
                Notre approche se distingue par une écoute attentive, une analyse approfondie de votre situation et 
                des recommandations personnalisées adaptées à vos objectifs de vie.
              </p>
              <p>
                Chaque conseiller dispose d'une autonomie totale dans ses recommandations, garantissant ainsi des 
                conseils objectifs et parfaitement alignés avec vos intérêts.
              </p>
            </div>
            <div className="expertise-image">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" alt="Expertise" />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Services Section */}
      <section className="services-section">
        <div className="container">
          <h2>Nos Domaines d'Expertise</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-number">01</div>
              <h3>Gestion de Patrimoine Globale</h3>
              <p>
                Analyse complète de votre situation patrimoniale et définition d'une stratégie sur-mesure 
                pour optimiser et sécuriser votre patrimoine.
              </p>
            </div>
            <div className="service-card">
              <div className="service-number">02</div>
              <h3>Investissements & Placements</h3>
              <p>
                Sélection et gestion de vos investissements financiers et immobiliers en fonction de votre 
                profil de risque et de vos objectifs.
              </p>
            </div>
            <div className="service-card">
              <div className="service-number">03</div>
              <h3>Optimisation Fiscale</h3>
              <p>
                Stratégies d'optimisation fiscale légales et éthiques pour réduire votre imposition tout en 
                respectant la réglementation.
              </p>
            </div>
            <div className="service-card">
              <div className="service-number">04</div>
              <h3>Retraite & Prévoyance</h3>
              <p>
                Préparation de votre retraite et protection de votre famille avec des solutions adaptées 
                à chaque étape de votre vie.
              </p>
            </div>
            <div className="service-card">
              <div className="service-number">05</div>
              <h3>Transmission Patrimoniale</h3>
              <p>
                Organisation de la transmission de votre patrimoine dans les meilleures conditions fiscales 
                et juridiques pour vos héritiers.
              </p>
            </div>
            <div className="service-card">
              <div className="service-number">06</div>
              <h3>Accompagnement Personnalisé</h3>
              <p>
                Suivi régulier et ajustement de votre stratégie patrimoniale en fonction de l'évolution 
                de votre situation et du marché.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Approche Section */}
      <section className="approach-section">
        <div className="container">
          <div className="approach-content">
            <div className="approach-image">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1000&fit=crop" alt="Approche" />
            </div>
            <div className="approach-text">
              <p className="approach-label">NOTRE APPROCHE</p>
              <h2>Une relation de confiance sur le long terme</h2>
              <div className="approach-steps">
                <div className="approach-step">
                  <h4>Écoute & Analyse</h4>
                  <p>Nous prenons le temps de comprendre vos objectifs, votre situation et vos contraintes.</p>
                </div>
                <div className="approach-step">
                  <h4>Stratégie Personnalisée</h4>
                  <p>Nous élaborons une stratégie patrimoniale sur-mesure adaptée à vos besoins spécifiques.</p>
                </div>
                <div className="approach-step">
                  <h4>Mise en Œuvre</h4>
                  <p>Nous vous accompagnons dans la réalisation concrète des solutions recommandées.</p>
                </div>
                <div className="approach-step">
                  <h4>Suivi & Ajustements</h4>
                  <p>Nous assurons un suivi régulier et adaptons votre stratégie selon l'évolution du contexte.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="container">
          <h2>Grega Group en Chiffres</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">3 Mds€</div>
              <div className="stat-label">Actifs sous gestion</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">250+</div>
              <div className="stat-label">Collaborateurs experts</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">4</div>
              <div className="stat-label">Filiales spécialisées</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">15+</div>
              <div className="stat-label">Années d'expérience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Parlons de votre patrimoine</h2>
            <p>
              Rencontrez nos conseillers pour un premier échange sans engagement et découvrez comment nous 
              pouvons vous accompagner dans la réalisation de vos projets.
            </p>
            <button className="cta-button" onClick={() => navigate('/contact')}>
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
