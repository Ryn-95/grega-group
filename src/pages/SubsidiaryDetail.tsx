import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSubsidiaryById } from '../services';
import './SubsidiaryDetail.css';

export const SubsidiaryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const subsidiary = id ? getSubsidiaryById(id) : undefined;

  if (!subsidiary) {
    return (
      <div className="subsidiary-detail not-found">
        <div className="container">
          <h1>Cabinet non trouvé</h1>
          <p>Le cabinet que vous recherchez n'existe pas.</p>
          <button className="back-button" onClick={() => navigate('/subsidiaries')}>
            Retour aux cabinets
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="subsidiary-detail">
      {/* Hero Section */}
      <section 
        className="detail-hero" 
        style={{ backgroundColor: subsidiary.color }}
      >
        <div className="container">
          <div className="detail-hero-content">
            <p className="detail-label">{subsidiary.sector}</p>
            <h1>{subsidiary.name}</h1>
            <p className="detail-slogan">{subsidiary.slogan}</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="detail-stats">
        <div className="container">
          <div className="stats-row">
            {subsidiary.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="detail-description">
        <div className="container">
          <div className="description-content">
            <div className="description-text">
              <h2>Présentation</h2>
              <p>{subsidiary.description}</p>
              <p>
                Notre équipe de conseillers expérimentés met son expertise au service de votre réussite 
                patrimoniale. Nous vous accompagnons à chaque étape avec une approche personnalisée et des 
                solutions adaptées à vos objectifs.
              </p>
            </div>
            <div className="description-image">
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop" 
                alt={subsidiary.name} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="detail-services">
        <div className="container">
          <h2>Nos Services & Expertises</h2>
          <div className="services-list">
            {subsidiary.services.map((service, index) => (
              <div key={index} className="service-box">
                <div className="service-number" style={{ color: subsidiary.color }}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3>{service}</h3>
                <p>
                  Bénéficiez d'un accompagnement expert et personnalisé pour optimiser votre situation 
                  et atteindre vos objectifs patrimoniaux.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Différence Section */}
      <section className="detail-difference">
        <div className="container">
          <div className="difference-content">
            <div className="difference-image">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                alt="Notre différence" 
              />
            </div>
            <div className="difference-text">
              <h2>Pourquoi choisir {subsidiary.name} ?</h2>
              <div className="difference-items">
                <div className="difference-item">
                  <div className="difference-icon" style={{ borderColor: subsidiary.color }}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 15L12 22L25 9" stroke={subsidiary.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Indépendance Totale</h4>
                    <p>Nos conseillers sont totalement indépendants et recommandent uniquement les solutions les plus adaptées à vos besoins.</p>
                  </div>
                </div>
                <div className="difference-item">
                  <div className="difference-icon" style={{ borderColor: subsidiary.color }}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 15L12 22L25 9" stroke={subsidiary.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Expertise Reconnue</h4>
                    <p>Une équipe d'experts diplômés et expérimentés, en formation continue pour vous offrir le meilleur conseil.</p>
                  </div>
                </div>
                <div className="difference-item">
                  <div className="difference-icon" style={{ borderColor: subsidiary.color }}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 15L12 22L25 9" stroke={subsidiary.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Accompagnement Personnalisé</h4>
                    <p>Un suivi régulier et une disponibilité permanente pour vous accompagner dans tous vos projets.</p>
                  </div>
                </div>
                <div className="difference-item">
                  <div className="difference-icon" style={{ borderColor: subsidiary.color }}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 15L12 22L25 9" stroke={subsidiary.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Force de Grega Group</h4>
                    <p>Bénéficiez des ressources et de l'expertise collective d'un groupe leader dans ses domaines d'activité.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="detail-contact">
        <div className="container">
          <div className="contact-box">
            <div className="contact-text">
              <h2>Prenez rendez-vous avec {subsidiary.name}</h2>
              <p>
                Nos conseillers sont à votre disposition pour un premier échange sans engagement. 
                Parlons de vos projets et de la manière dont nous pouvons vous accompagner.
              </p>
              <div className="contact-info">
                <div className="contact-info-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8L10.89 13.26C11.5438 13.6728 12.4562 13.6728 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="#8B7355" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <a href={`mailto:${subsidiary.contact.email}`}>{subsidiary.contact.email}</a>
                </div>
                <div className="contact-info-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="#8B7355" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <a href={`tel:${subsidiary.contact.phone}`}>{subsidiary.contact.phone}</a>
                </div>
                <div className="contact-info-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.657 16.657L13.414 20.9C12.6329 21.6811 11.3671 21.6811 10.586 20.9L6.343 16.657C3.21895 13.533 3.21895 8.46699 6.343 5.34299C9.46701 2.21899 14.533 2.21899 17.657 5.34299C20.781 8.467 20.781 13.533 17.657 16.657Z" stroke="#8B7355" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="11" r="3" stroke="#8B7355" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{subsidiary.contact.address}</span>
                </div>
              </div>
            </div>
            <div className="contact-actions">
              <button 
                className="primary-button" 
                style={{ backgroundColor: subsidiary.color }}
                onClick={() => navigate('/contact')}
              >
                Prendre rendez-vous
              </button>
              <button 
                className="secondary-button"
                onClick={() => navigate('/subsidiaries')}
              >
                Voir tous les cabinets
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
