# Groupe RAYNE - Site Web Officiel

Site web institutionnel moderne et élégant du Groupe RAYNE, leader dans la gestion de patrimoine indépendante.

## 🏛️ À propos du Groupe RAYNE

Le Groupe RAYNE réunit des cabinets de conseil en gestion de patrimoine reconnus pour leur expertise et leur indépendance. Avec 18 milliards d'euros d'actifs conseillés et plus de 100 conseillers patrimoniaux, nous sommes leaders parmi les cabinets indépendants.

## 🏗️ Architecture

```
src/
├── components/
│   ├── common/           # Composants réutilisables (Button, Card)
│   ├── layout/           # Header, Footer, Layout
│   └── subsidiaries/     # Composants spécifiques aux cabinets
├── pages/
│   ├── Home.tsx          # Page d'accueil avec présentation du groupe
│   ├── About.tsx         # Notre métier et expertise
│   ├── Subsidiaries.tsx  # Présentation des cabinets
│   ├── SubsidiaryDetail.tsx # Détail d'un cabinet
│   └── Contact.tsx       # Formulaire de contact
├── services/
│   └── subsidiaries.ts   # Données et logique métier
├── types/                # Définitions TypeScript
└── styles/               # Styles globaux et variables
```

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation et lancement

```bash
# Installation des dépendances
npm install

# Mode développement
npm run dev

# Build production
npm run build

# Prévisualisation du build
npm run preview
```

Le site sera accessible sur `http://localhost:5173`

## 🏢 Nos Cabinets

Le Groupe RAYNE réunit trois cabinets d'excellence :

### **Stellar Invest**

- Gestion de patrimoine globale
- 800M€ d'actifs sous conseil
- Expertise personnalisée

### **L&A Finance RAYNE**

- Cabinet fondateur du groupe
- 1,2 Md€ d'actifs sous gestion
- Solutions patrimoniales complètes

### **Wakerstone RAYNE**

- Innovation patrimoniale
- 600M€ d'actifs conseillés
- Approche moderne et performante

## 🛠️ Technologies

### Frontend

- **React 18** - Framework UI moderne
- **TypeScript** - Typage statique fort
- **Vite** - Build tool ultra-rapide
- **React Router 6** - Navigation SPA

### Styling

- **CSS3** - Design moderne et élégant
- **Google Fonts** - Playfair Display pour une typographie raffinée
- **Animations CSS** - Transitions fluides

### Qualité

- **TypeScript** - Zero runtime errors
- **ESLint** - Qualité du code
- **Prettier** - Formatage cohérent

## 🎨 Design System

### Couleurs

```css
--primary-color: #8b7355; /* Bronze élégant */
--bg-dark: #000000; /* Noir profond */
--text-dark: #ffffff; /* Blanc pur */
--text-light: #b4b4b4; /* Gris clair */
```

### Typographie

- **Titres** : Playfair Display - Élégante et raffinée
- **Corps** : System fonts - Lisibilité optimale
- **Poids** : 300 (light), 400 (regular), 600 (semibold)

### Principes

- Design minimaliste et sophistiqué
- Fond noir avec accents dorés
- Espacement généreux
- Transitions douces
- Responsive mobile-first

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints optimisés :

- **Desktop** : > 1024px - Mise en page complète
- **Tablet** : 768px - 1024px - Adaptation des grilles
- **Mobile** : < 768px - Navigation optimisée

## ✨ Fonctionnalités

### Pages principales

- ✅ Page d'accueil immersive
- ✅ Notre métier et expertise
- ✅ Présentation des cabinets
- ✅ Détail de chaque cabinet
- ✅ Formulaire de contact

### Interactions

- ✅ Navigation fluide
- ✅ Animations au scroll
- ✅ Hover effects élégants
- ✅ Formulaires validés
- ✅ Transitions de page

### Performance

- ✅ Optimisation des images
- ✅ Lazy loading
- ✅ Code splitting
- ✅ Bundle optimisé

## 🔧 Configuration

### Variables d'environnement

Créer un fichier `.env` :

```env
VITE_API_URL=https://api.groupe-rayne.fr
VITE_CONTACT_EMAIL=contact@groupe-rayne.fr
```

### Build production

```bash
npm run build
```

Les fichiers optimisés seront dans `/dist`

## 📦 Déploiement

Le site peut être déployé sur :

- **Vercel** - Recommandé pour les projets Vite
- **Netlify** - Simple et rapide
- **AWS S3 + CloudFront** - Pour le contrôle total

```bash
# Build
npm run build

# Le dossier dist/ contient tous les fichiers statiques
```

## 🧪 Tests

```bash
# Linting
npm run lint

# Vérification TypeScript
npm run type-check
```

## 📄 License

© 2024 Groupe RAYNE. Tous droits réservés.

## 📞 Contact

- **Email** : contact@groupe-rayne.fr
- **Site web** : https://www.groupe-rayne.fr
- **Téléphone** : +33 1 XX XX XX XX

---

Développé avec ❤️ pour le Groupe RAYNE
