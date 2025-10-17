import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatedText } from '../components/common';
import './Home.css';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const sections = document.querySelectorAll('[id^="section-"]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Subtle parallax effect on scroll for subsidiary cards
  useEffect(() => {
    const scrollContainer = document.querySelector('.subsidiaries-grid');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const cards = scrollContainer.querySelectorAll('.subsidiary-card');
      // const scrollLeft = scrollContainer.scrollLeft;
      const containerWidth = scrollContainer.clientWidth;
      
      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        const cardRect = cardElement.getBoundingClientRect();
        const containerRect = scrollContainer.getBoundingClientRect();
        
        // Calculate position relative to container center
        const cardCenter = cardRect.left + cardRect.width / 2;
        const containerCenter = containerRect.left + containerRect.width / 2;
        const distanceFromCenter = Math.abs(cardCenter - containerCenter);
        const maxDistance = containerWidth;
        
        // Subtle scale and opacity based on distance from center
        const scale = Math.max(0.94, 1 - (distanceFromCenter / maxDistance) * 0.06);
        const opacity = Math.max(0.6, 1 - (distanceFromCenter / maxDistance) * 0.4);
        
        cardElement.style.transform = `scale(${scale})`;
        cardElement.style.opacity = `${opacity}`;
      });
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home">
      {/* Section Le mot du Président */}
      <section className="president-section" id="section-president">
        <div className="container">
          <div className="president-content">
            <div className="president-image">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=900&fit=crop&auto=format&q=80" 
                alt="Président de Grega Group" 
                loading="lazy"
                width="600"
                height="900"
              />
            </div>
            <div className="president-text">
              <AnimatedText 
                text="Le mot du Président" 
                type="slideInLeft" 
                delay={0.2}
                className="president-title"
              />
              <AnimatedText 
                text="Grega Group se distingue par son modèle unique qui s'est établi grâce à une stratégie de croissance organique et ciblée."
                type="fadeIn"
                delay={0.4}
                splitBy="word"
              />
              <p>
                Le Groupe, construit autour de Grega Finance, regroupe des expertises complémentaires au sein de quatre filiales 
                spécialisées pour offrir des solutions complètes et innovantes.
              </p>
              <p>
                Chaque cabinet maintient son unicité et son autonomie, tout en profitant du soutien actif du Groupe qui met à leur disposition un 
                ensemble de services et de ressources.
              </p>
              <p>
                Ce modèle accélère considérablement leur développement réciproque.
              </p>
              <p>
                La constitution du groupe s'est avérée évidente pour optimiser nos ressources et renforcer notre présence sur le marché.
              </p>
              <p>
                Ce modèle accélère considérablement le développement réciproque de nos filiales et renforce notre présence sur le marché.
              </p>
              <p>
                Chaque filiale maintient son unicité et son autonomie, tout en profitant du soutien actif du Groupe qui met à leur disposition 
                un ensemble de services et de ressources partagées.
              </p>
              <p>
                Notre ambition est de continuer à accompagner nos clients avec excellence dans tous les domaines d'expertise de nos filiales, 
                en maintenant notre engagement envers l'innovation et la qualité de service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bande de valeurs défilantes */}
      <section className="values-marquee">
        <div className="marquee-content">
          <span className="marquee-item">+</span>
          <span className="marquee-item">Responsabilité</span>
          <span className="marquee-item">+</span>
          <span className="marquee-item">Confiance</span>
          <span className="marquee-item">+</span>
          <span className="marquee-item">Disponibilité</span>
          <span className="marquee-item">+</span>
          <span className="marquee-item">Indépendance</span>
          <span className="marquee-item">+</span>
          <span className="marquee-item">Intégrité</span>
          <span className="marquee-item">+</span>
          <span className="marquee-item">Responsabilité</span>
          {/* Dupliquer pour l'effet de boucle */}
          <span className="marquee-item">+</span>
          <span className="marquee-item">Responsabilité</span>
          <span className="marquee-item">+</span>
          <span className="marquee-item">Confiance</span>
          <span className="marquee-item">+</span>
          <span className="marquee-item">Disponibilité</span>
          <span className="marquee-item">+</span>
          <span className="marquee-item">Indépendance</span>
          <span className="marquee-item">+</span>
          <span className="marquee-item">Intégrité</span>
          <span className="marquee-item">+</span>
          <span className="marquee-item">Responsabilité</span>
        </div>
      </section>

      {/* Section Notre Vision */}
      <section className="vision-section" id="section-vision">
        <div className="container">
          <h2>Notre Vision</h2>
          <div className="vision-grid">
            <div className="vision-item">
              <div className="vision-icon">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 15L45 30H60L48 40L53 55L40 45L27 55L32 40L20 30H35L40 15Z" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <p>
                Notre groupe est à présent leader parmi les cabinets de Gestion de patrimoine indépendants.
              </p>
            </div>
            <div className="vision-item">
              <div className="vision-icon">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="30" r="10" stroke="white" strokeWidth="2" fill="none"/>
                  <path d="M25 60C25 50 30 45 40 45C50 45 55 50 55 60" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <p>
                Par notre savoir-faire, notre proximité avec nos investisseurs nous permettons à chacun d'appréhender sereinement les 
                enjeux patrimoniaux dans toute leur diversité.
              </p>
            </div>
            <div className="vision-item">
              <div className="vision-icon">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 40C30 40 35 30 40 30C45 30 50 40 50 40M30 40C30 40 35 50 40 50C45 50 50 40 50 40M30 40H50" stroke="white" strokeWidth="2" fill="none"/>
                  <circle cx="30" cy="40" r="3" fill="white"/>
                  <circle cx="50" cy="40" r="3" fill="white"/>
                </svg>
              </div>
              <p>
                Notre expertise reconnue et nos conseillers aguerris et formés à toutes les solutions du marché nous permettent de gagner 
                chaque jour la confiance de nombreux clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos Valeurs */}
      <section className="values-detailed" id="section-values">
        <div className="container">
          <h2>Nos Valeurs</h2>
          <div className="values-list">
            <div className="value-item">
              <div className="value-content">
                <div className="value-image">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&auto=format&q=80" 
                    alt="Bureau moderne Grega Group" 
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                </div>
              </div>
            </div>
            <div className="value-item">
              <div className="value-content">
                <h3>Confiance</h3>
                <p>
                  Vos projets méritent toute notre discrétion, nous attachons une importance toute particulière à vous garantir quelle que soit la durée de notre relation, le 
                  plus strict respect du secret professionnel que nous vous devons. C'est un aspect lié à la spécificité de notre activité.
                </p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-content">
                <h3>Disponibilité</h3>
                <p>
                  Nos conseillers patrimoniaux sont disponibles 6 jours sur 7 pour vous accompagner dans vos projets.
                </p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-content">
                <h3>Indépendance</h3>
                <p>
                  Par définition, chaque client et donc chaque projet est unique. Nous ne sommes liés à aucune compagnie financière ; gage de notre totale liberté à proposer les 
                  solutions qui conviennent le mieux à chaque projet.
                </p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-content">
                <h3>Intégrité</h3>
                <p>
                  Le respect, la probité absolue sont le gage d'une relation de longue durée et de la pérennité de notre activité. Depuis plus de 20 ans, nous plaçons ces valeurs 
                  au centre de nos relations avec nos clients ; qui nous demeurent fidèles dans la durée.
                </p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-content">
                <h3>Responsabilité</h3>
                <p>
                  Notre métier est particulièrement, et à juste titre, encadré pour une protection maximale de nos clients. Nous apportons une attention toute particulière au 
                  respect le plus scrupuleux des obligations qui incombent à chacun de nos conseillers patrimoniaux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos Cabinets */}
      <section className="subsidiaries-section" id="section-subsidiaries">
        <div className="container">
          <div className="subsidiaries-header">
            <p className="subsidiaries-label">LE GROUPE</p>
            <h2>Nos cabinets</h2>
            <p className="subsidiaries-description">
              Découvrez tous nos cabinets regroupant toutes les expertises qui répondent à vos besoins.
            </p>
            <button className="subsidiaries-link" onClick={() => navigate('/subsidiaries')}>
              Plus d'informations →
            </button>
            <div className="subsidiaries-scroll-hint">
              <span>Faites défiler pour voir tous nos cabinets</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
          <div className="subsidiaries-grid">
            <div 
              className="subsidiary-card" 
              style={{ backgroundColor: '#1a2332' }}
              role="article"
              aria-label="Cabinet Grega Rarely"
              tabIndex={0}
            >
              <div className="subsidiary-logo">
                <img 
                  src="/grega_rarely.PNG" 
                  alt="Logo Grega Rarely" 
                  loading="lazy"
                  width="300"
                  height="200"
                />
              </div>
              <h3>Grega Rarely</h3>
            </div>
            <div 
              className="subsidiary-card" 
              style={{ backgroundColor: '#1e4a7a' }}
              role="article"
              aria-label="Cabinet Grega Atlas"
              tabIndex={0}
            >
              <div className="subsidiary-logo">
                <img 
                  src="/grega_atlas.JPG" 
                  alt="Logo Grega Atlas" 
                  loading="lazy"
                  width="300"
                  height="200"
                />
              </div>
              <h3>Grega Atlas</h3>
            </div>
            <div 
              className="subsidiary-card" 
              style={{ backgroundColor: '#2a3f4f' }}
              role="article"
              aria-label="Cabinet Grega Capital"
              tabIndex={0}
            >
              <div className="subsidiary-logo">
                <img 
                  src="/Grega_capital.PNG" 
                  alt="Logo Grega Capital" 
                  loading="lazy"
                  width="300"
                  height="200"
                />
              </div>
              <h3>Grega Capital</h3>
            </div>
            <div 
              className="subsidiary-card" 
              style={{ backgroundColor: '#4a2f5a' }}
              role="article"
              aria-label="Cabinet Grega Elyseys"
              tabIndex={0}
            >
              <div className="subsidiary-logo">
                <img 
                  src="/grega_elyseys.PNG" 
                  alt="Logo Grega Elyseys" 
                  loading="lazy"
                  width="300"
                  height="200"
                />
              </div>
              <h3>Grega Elyseys</h3>
            </div>
            <div 
              className="subsidiary-card" 
              style={{ backgroundColor: '#1a2332' }}
              role="article"
              aria-label="Cabinet Grega Realty"
              tabIndex={0}
            >
              <div className="subsidiary-logo">
                <img 
                  src="/Grega_realty.PNG" 
                  alt="Logo Grega Realty" 
                  loading="lazy"
                  width="300"
                  height="200"
                />
              </div>
              <h3>Grega Realty</h3>
            </div>
            <div 
              className="subsidiary-card" 
              style={{ backgroundColor: '#1e4a7a' }}
              role="article"
              aria-label="Cabinet Grega Stay"
              tabIndex={0}
            >
              <div className="subsidiary-logo">
                <img 
                  src="/grega_stay.JPG" 
                  alt="Logo Grega Stay" 
                  loading="lazy"
                  width="300"
                  height="200"
                />
              </div>
              <h3>Grega Stay</h3>
            </div>
            <div 
              className="subsidiary-card" 
              style={{ backgroundColor: '#2a3f4f' }}
              role="article"
              aria-label="Cabinet Grega Open Door"
              tabIndex={0}
            >
              <div className="subsidiary-logo">
                <img 
                  src="/gregaopendoor.PNG" 
                  alt="Logo Grega Open Door" 
                  loading="lazy"
                  width="300"
                  height="200"
                />
              </div>
              <h3>Grega Open Door</h3>
            </div>
            <div 
              className="subsidiary-card" 
              style={{ backgroundColor: '#4a2f5a' }}
              role="article"
              aria-label="Cabinet Grega Stoneweg"
              tabIndex={0}
            >
              <div className="subsidiary-logo">
                <img 
                  src="/grega_stoneweg.PNG" 
                  alt="Logo Grega Stoneweg" 
                  loading="lazy"
                  width="300"
                  height="200"
                />
              </div>
              <h3>Grega Stoneweg</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Section Mission */}
      <section className="mission-section" id="section-mission">
        <div className="container">
          <div className="mission-content">
            <div className="mission-images">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=800&fit=crop&auto=format&q=80" 
                alt="Architecture moderne d'entreprise" 
                className="mission-img-1" 
                loading="lazy"
                width="600"
                height="800"
              />
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=600&fit=crop&auto=format&q=80" 
                alt="Environnement professionnel" 
                className="mission-img-2" 
                loading="lazy"
                width="400"
                height="600"
              />
            </div>
            <div className="mission-text">
              <p className="mission-label">NOTRE MISSION</p>
              <h2>Démocratiser la gestion de patrimoine</h2>
              <p>
                Nous rendons accessible les outils et les services de la gestion de patrimoine à notre clientèle et au plus grand nombre
              </p>
              <button className="mission-button" onClick={() => navigate('/about')}>
                Nos Cabinets
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Actualités */}
      <section className="news-section" id="section-news">
        <div className="container">
          <h2>Nos actualités</h2>
          <div className="news-grid" role="feed" aria-label="Actualités récentes">
            <article className="news-card" role="article" tabIndex={0}>
              <div className="news-image">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop&auto=format&q=75" 
                  alt="Lancement du Groupe Rayne" 
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </div>
              <h3>Lancement du Groupe Rayne</h3>
              <p>
                (AOF) - Le lancement du Groupe Rayne a été annoncé aujourd'hui. Il s'est construit autour de L&A Finance, qui a...
              </p>
            </article>
            <article className="news-card" role="article" tabIndex={0}>
              <div className="news-image">
                <img 
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop&auto=format&q=75" 
                  alt="Ateliers JEDDAK" 
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </div>
              <h3>Le Groupe Rayne aux ateliers JEDDAK</h3>
              <p>
                A l'occasion des ateliers JEDDAK, le Groupe Rayne s'est réuni, rassemblant L&A Finance MIRARI Wealth Management 
                Wakerstone ARCANIS Conseil Rivaria Capital Nous remercions JEDDAK de nous...
              </p>
            </article>
            <article className="news-card" role="article" tabIndex={0}>
              <div className="news-image">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&auto=format&q=75" 
                  alt="Tikehau Capital" 
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </div>
              <h3>Le Groupe Rayne annonce une collaboration majeure avec Tikehau Capital</h3>
              <p>
                🌟 Le Groupe Rayne, acteur innovant dans le conseil en gestion de patrimoine, vient d'annoncer une collaboration stratégique 
                majeure avec Tikehau...
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};
