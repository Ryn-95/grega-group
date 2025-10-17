import React, { useState } from 'react';
import { FAQ } from '../components/common';
import { useToast } from '../hooks';
import './Contact.css';

export const Contact: React.FC = () => {
  const { showSuccess, showError } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    cabinet: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simuler l'envoi du formulaire
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      showSuccess('Message envoyé avec succès ! Nous vous contacterons sous 24h.');
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        cabinet: '',
        message: ''
      });
    } catch (error) {
      showError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <p className="contact-label">CONTACT</p>
          <h1>Contactez-nous</h1>
          <p className="contact-subtitle">
            Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans vos projets
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Info */}
            <div className="contact-info-side">
              <h2>Nos Coordonnées</h2>
              <div className="info-list">
                <div className="info-item">
                  <div className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.657 16.657L13.414 20.9C12.6329 21.6811 11.3671 21.6811 10.586 20.9L6.343 16.657C3.21895 13.533 3.21895 8.46699 6.343 5.34299C9.46701 2.21899 14.533 2.21899 17.657 5.34299C20.781 8.467 20.781 13.533 17.657 16.657Z" stroke="#8B7355" strokeWidth="2"/>
                      <circle cx="12" cy="11" r="3" stroke="#8B7355" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Siège Social</h4>
                    <p>Paris, France</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="#8B7355" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Téléphone</h4>
                    <p><a href="tel:+33123456788">+33 1 XX XX XX XX</a></p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8L10.89 13.26C11.5438 13.6728 12.4562 13.6728 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="#8B7355" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p><a href="mailto:contact@groupe-rayne.fr">contact@groupe-rayne.fr</a></p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="9" stroke="#8B7355" strokeWidth="2"/>
                      <path d="M12 7V12L15 15" stroke="#8B7355" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Disponibilité</h4>
                    <p>6 jours sur 7<br />Du lundi au samedi</p>
                  </div>
                </div>
              </div>

              <div className="cabinets-contacts">
                <h3>Contacts Directs</h3>
                <div className="cabinets-list">
                  <div className="cabinet-contact-item">
                    <strong>Stellar Invest</strong>
                    <a href="mailto:contact@stellar-invest.fr">contact@stellar-invest.fr</a>
                  </div>
                  <div className="cabinet-contact-item">
                    <strong>Grega Finance</strong>
                    <a href="mailto:contact@gregafinance.com">contact@gregafinance.com</a>
                  </div>
                  <div className="cabinet-contact-item">
                    <strong>Grega Immo</strong>
                    <a href="mailto:contact@gregaimmo.com">contact@gregaimmo.com</a>
                  </div>
                  <div className="cabinet-contact-item">
                    <strong>Grega Conseil</strong>
                    <a href="mailto:contact@gregaconseil.com">contact@gregaconseil.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-side">
              <h2>Demande de Contact</h2>
              <p className="form-description">
                Remplissez ce formulaire et un conseiller vous recontactera dans les plus brefs délais.
              </p>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom complet *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jean.dupont@email.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Téléphone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="cabinet">Cabinet concerné</label>
                    <select
                      id="cabinet"
                      name="cabinet"
                      value={formData.cabinet}
                      onChange={handleChange}
                    >
                      <option value="">Sélectionnez un cabinet</option>
                      <option value="tech">Grega Tech</option>
                      <option value="finance">Grega Finance</option>
                      <option value="immo">Grega Immo</option>
                      <option value="conseil">Grega Conseil</option>
                      <option value="general">Demande générale</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Objet de votre demande *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Gestion de patrimoine, Investissement..."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Votre message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Décrivez votre projet et vos objectifs patrimoniaux..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </button>

                <p className="form-notice">
                  * Champs obligatoires. Vos données sont traitées de manière confidentielle conformément à notre politique de confidentialité.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="container">
          <FAQ 
            items={[
              {
                id: '1',
                question: 'Quel est le délai de réponse ?',
                answer: 'Nous nous engageons à vous répondre sous 24 heures ouvrées. Pour les demandes urgentes, n\'hésitez pas à nous contacter par téléphone.',
                category: 'Général'
              },
              {
                id: '2',
                question: 'Le premier rendez-vous est-il payant ?',
                answer: 'Non, le premier échange avec un conseiller est totalement gratuit et sans engagement. Il nous permet de comprendre vos besoins et de vous présenter nos services.',
                category: 'Général'
              },
              {
                id: '3',
                question: 'Où êtes-vous situés ?',
                answer: 'Nos cabinets sont principalement situés à Paris et en région parisienne. Nous proposons également des rendez-vous en visioconférence partout en France.',
                category: 'Général'
              },
              {
                id: '4',
                question: 'Quelle filiale choisir ?',
                answer: 'Chaque filiale de Grega Group possède des spécificités. N\'hésitez pas à nous contacter, nous vous orienterons vers la filiale la plus adaptée à vos besoins.',
                category: 'Services'
              },
              {
                id: '5',
                question: 'Quels sont vos tarifs ?',
                answer: 'Nos tarifs varient selon les services et la complexité de votre dossier. Nous proposons un devis personnalisé gratuit lors du premier entretien.',
                category: 'Services'
              },
              {
                id: '6',
                question: 'Travaillez-vous avec des clients particuliers et professionnels ?',
                answer: 'Oui, nous accompagnons aussi bien les particuliers que les professionnels dans leurs projets de gestion de patrimoine et d\'investissement.',
                category: 'Services'
              },
              {
                id: '7',
                question: 'Proposez-vous des services de gestion déléguée ?',
                answer: 'Oui, nos cabinets proposent des services de gestion déléguée pour les clients qui souhaitent déléguer entièrement la gestion de leur patrimoine.',
                category: 'Services'
              },
              {
                id: '8',
                question: 'Comment se déroule le premier rendez-vous ?',
                answer: 'Le premier rendez-vous dure environ 1h30. Nous analysons votre situation patrimoniale actuelle, vos objectifs et nous vous présentons nos solutions personnalisées.',
                category: 'Processus'
              }
            ]}
            showCategories={true}
            className="contact-faq-component"
          />
        </div>
      </section>
    </div>
  );
};
