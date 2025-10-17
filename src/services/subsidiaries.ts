import { Subsidiary } from '../types';

export const subsidiariesData: Subsidiary[] = [
  {
    id: 'stellar',
    name: 'Stellar Invest',
    slogan: 'Excellence en Gestion de Patrimoine',
    description: 'Stellar Invest accompagne les particuliers et les professionnels dans la gestion et l\'optimisation de leur patrimoine avec une approche personnalisée et des solutions sur-mesure.',
    sector: 'Gestion de Patrimoine',
    logo: '⭐',
    color: '#1a2332',
    services: [
      'Gestion de patrimoine globale',
      'Conseil en investissement',
      'Stratégies fiscales',
      'Transmission de patrimoine',
      'Assurance-vie & épargne',
      'Immobilier patrimonial'
    ],
    stats: [
      { label: 'Actifs sous conseil', value: '800M€' },
      { label: 'Clients accompagnés', value: '500+' },
      { label: 'Conseillers experts', value: '15+' },
      { label: "Années d'expérience", value: '10+' }
    ],
    contact: {
      email: 'contact@stellar-invest.fr',
      phone: '+33 1 XX XX XX XX',
      address: 'Paris, France'
    }
  },
  {
    id: 'la-finance',
    name: 'Grega Finance',
    slogan: 'Votre Partenaire en Gestion Patrimoniale',
    description: 'Grega Finance offre des services financiers complets et personnalisés, de la gestion de patrimoine aux solutions d\'investissement innovantes pour particuliers et entreprises.',
    sector: 'Finance & Patrimoine',
    logo: '💼',
    color: '#1e4a7a',
    services: [
      'Gestion de patrimoine indépendante',
      'Conseil financier personnalisé',
      'Solutions d\'investissement',
      'Optimisation fiscale',
      'Retraite & prévoyance',
      'Financement immobilier'
    ],
    stats: [
      { label: 'Actifs sous gestion', value: '1,2 Md€' },
      { label: 'Clients privés', value: '800+' },
      { label: 'Conseillers patrimoniaux', value: '25+' },
      { label: 'Taux de satisfaction', value: '98%' }
    ],
    contact: {
      email: 'contact@gregafinance.com',
      phone: '+33 1 XX XX XX XX',
      address: 'Paris, France'
    }
  },
  {
    id: 'wakerstone',
    name: 'Grega Immo',
    slogan: 'Bâtir Votre Avenir Immobilier',
    description: 'Spécialiste de l\'immobilier premium, Grega Immo propose une gamme complète de services : promotion, gestion locative, transaction et conseil en investissement immobilier.',
    sector: 'Immobilier & Patrimoine',
    logo: '🏢',
    color: '#2a3f4f',
    services: [
      'Conseil patrimonial global',
      'Structuration patrimoniale',
      'Private equity & investissements',
      'Gestion de fortune',
      'Succession & donation',
      'Philanthropie & mécénat'
    ],
    stats: [
      { label: 'Patrimoine conseillé', value: '600M€' },
      { label: 'Familles accompagnées', value: '300+' },
      { label: 'Experts seniors', value: '12+' },
      { label: 'ROI moyen clients', value: '9,2%' }
    ],
    contact: {
      email: 'contact@gregaimmo.com',
      phone: '+33 1 XX XX XX XX',
      address: 'Paris, France'
    }
  }
];

export const getSubsidiaryById = (id: string): Subsidiary | undefined => {
  return subsidiariesData.find(sub => sub.id === id);
};

export const getAllSubsidiaries = (): Subsidiary[] => {
  return subsidiariesData;
};
