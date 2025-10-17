import React from 'react';
import { TestimonialCard } from '../components/common';
import './Testimonials.css';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: '1',
      name: 'Marie Dubois',
      position: 'Directrice Financière',
      company: 'TechCorp',
      content: 'Grega Group a transformé notre approche de la gestion de patrimoine. Leur expertise et leur disponibilité exceptionnelle nous ont permis d\'optimiser nos investissements de manière significative. Je recommande vivement leurs services.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: '2',
      name: 'Jean-Pierre Martin',
      position: 'PDG',
      company: 'Innovate Solutions',
      content: 'Depuis que nous travaillons avec Stellar Invest, notre patrimoine a connu une croissance remarquable. Leur approche personnalisée et leur connaissance approfondie du marché nous donnent une confiance totale.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: '3',
      name: 'Sophie Laurent',
      position: 'Entrepreneure',
      company: 'Laurent & Associates',
      content: 'Grega Finance nous accompagne depuis 3 ans. Leur conseil en investissement immobilier nous a permis de diversifier notre portefeuille avec succès. Une équipe professionnelle et à l\'écoute.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: '4',
      name: 'Pierre Moreau',
      position: 'Directeur Général',
      company: 'Global Industries',
      content: 'L\'expertise de Grega Conseil en stratégie d\'entreprise nous a aidés à restructurer notre organisation et à améliorer notre performance. Un partenaire de confiance pour nos défis stratégiques.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: '5',
      name: 'Isabelle Chen',
      position: 'Responsable RH',
      company: 'Digital Ventures',
      content: 'Grega Immo nous a accompagnés dans l\'acquisition de nos nouveaux locaux. Leur connaissance du marché immobilier et leur réseau nous ont fait gagner un temps précieux. Service impeccable.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: '6',
      name: 'Antoine Rousseau',
      position: 'Fondateur',
      company: 'StartupTech',
      content: 'En tant que jeune entrepreneur, j\'avais besoin de conseils avisés pour gérer mon patrimoine. Grega Group m\'a fourni l\'accompagnement parfait, adapté à ma situation et à mes objectifs. Je ne peux que recommander.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <div className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <p className="testimonials-label">TÉMOIGNAGES</p>
          <h1>Ce que disent nos clients</h1>
          <p className="testimonials-description">
            Découvrez les retours d'expérience de nos clients qui nous font confiance pour la gestion de leur patrimoine.
          </p>
        </div>

        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Clients satisfaits</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Années d'expérience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Clients accompagnés</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">Note moyenne</div>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
              className={`testimonial-${index + 1}`}
            />
          ))}
        </div>

        <div className="testimonials-cta">
          <h2>Prêt à rejoindre nos clients satisfaits ?</h2>
          <p>Contactez-nous pour découvrir comment nous pouvons vous accompagner dans la gestion de votre patrimoine.</p>
          <div className="cta-buttons">
            <button className="btn-primary">Prendre rendez-vous</button>
            <button className="btn-secondary">En savoir plus</button>
          </div>
        </div>
      </div>
    </div>
  );
};

