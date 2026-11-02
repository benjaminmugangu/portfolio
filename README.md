# Portfolio Professionnel — Benjamin MUGANGU MUGISHO
**Ingénieur Génie Logiciel, Backend & Architectures Cloud / IA**  
*Master 2 Génie Informatique (ULPGL Goma) • Lead Développeur Backend chez Benflux Corporation • Volontaire en Ligne des Nations Unies (VNU/PNUD)*

---

## 🌟 Présentation du Projet

Ce portfolio est une plateforme moderne, performante et bilingue conçue pour valoriser l'excellence technique, les réalisations en microservices distribués, les infrastructures cloud/DevOps et les distinctions institutionnelles (notamment auprès de l'ONU/PNUD).

### ✨ Caractéristiques Techniques Majeures

- **Framework :** [Next.js 15+](https://nextjs.org/) (App Router, React 19, TypeScript strict).
- **Styling :** [Tailwind CSS v4](https://tailwindcss.com/) avec design tokens personnalisés, glassmorphism raffiné et typographie technique.
- **Thèmes :** Mode Sombre obsidienne (`#070A10`) par défaut avec commutateur fluide vers Mode Clair via `next-themes`.
- **Bilingue Temps Réel :** Commutateur instantané Français (FR) / Anglais (EN) pour un impact maximal auprès des recruteurs locaux et internationaux.
- **Galerie & Visionneuse de Certifications :** Lightbox interactive plein écran permettant d'inspecter les diplômes officiels et de télécharger le **Certificat d'Appréciation ONU/PNUD du 28 Octobre 2026** (ODD 4).
- **Matrice de Compétences Interactive :** Filtrage dynamique par catégorie (Backend & Microservices, Cloud & DevOps, IA & Data, Réseaux & Sécurité, Pédagogie & Outils).
- **Showcase Projets Riches :** Fiches complètes avec patrons architecturaux (MVC, Microservices, Event-driven), métriques d'impact et liens directs vers dépôts GitHub publics.
- **SEO & Performances :** Pré-rendu statique ultra-rapide (SSG), métadonnées OpenGraph/Twitter complètes et zéro dépendance réseau bloquante au build.

---

## 📁 Architecture du Code Source

```
portfolio/
├── public/
│   ├── docs/
│   │   └── certificat_appreciation_unv_pnud.pdf  # PDF officiel VNU / PNUD
│   └── images/
│       ├── avatar.png                           # Photo officielle de profil
│       ├── signature.png                        # Signature transparente certifiée
│       ├── cert-unv-pnud-appreciation.png       # Rendu haute résolution du certificat ONU
│       ├── cert-welead.jpg                      # Certificat WeLead to Develop
│       ├── diplome-licence.png                  # Attestation de Réussite L3 (ULPGL)
│       └── carte-m2.png                         # Carte d'étudiant Master 2 (2025-2026)
├── src/
│   ├── app/
│   │   ├── globals.css                          # Styles globaux, tokens et scrollbar custom
│   │   ├── layout.tsx                           # Configuration racine, SEO & ThemeProvider
│   │   └── page.tsx                             # Page principale unifiée
│   ├── components/
│   │   ├── Navbar.tsx                           # Barre de navigation fixe & sélecteurs
│   │   ├── Hero.tsx                             # Bannière d'impact, statut live & CTAs
│   │   ├── MetricsBanner.tsx                    # Métriques quantitatives clés
│   │   ├── AboutSection.tsx                     # Biographie & 3 piliers d'ingénierie
│   │   ├── SkillsMatrix.tsx                     # Matrice interactive des compétences
│   │   ├── ProjectsShowcase.tsx                 # Showcase des projets avec filtres
│   │   ├── ExperienceTimeline.tsx               # Timeline chronologique des postes
│   │   ├── CertificationsGallery.tsx            # Galerie & bandeau spotlight ONU
│   │   ├── CertificateModal.tsx                 # Modale lightbox d'inspection haute résolution
│   │   ├── ServicesSection.tsx                  # 4 offres de services professionnelles
│   │   ├── ContactSection.tsx                   # Formulaire & canaux directs
│   │   ├── Footer.tsx                           # Pied de page, signature & copyright
│   │   ├── SocialIcons.tsx                      # Composants SVG vectoriels officiels
│   │   └── ThemeProvider.tsx                    # Provider de gestion des thèmes
│   ├── data/
│   │   └── portfolio-data.ts                    # Modèle de données typé bilingue (FR/EN)
│   └── lib/
│       └── utils.ts                             # Utilitaire de fusion de classes (cn)
├── package.json
└── tsconfig.json
```

---

## 🚀 Démarrage Rapide

### 1. Installation des dépendances
```bash
pnpm install
```

### 2. Lancement en développement
```bash
pnpm dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### 3. Compilation pour la production
```bash
pnpm run build
```
Génère une version optimisée pré-rendue statiquement sans aucune erreur TypeScript.

---

## 🚢 Déploiement sur Vercel

Le projet est nativement optimisé pour un déploiement instantané sur **Vercel** :

1. Poussez le projet sur votre compte GitHub (`git push`).
2. Rendez-vous sur le tableau de bord [Vercel](https://vercel.com).
3. Cliquez sur **« Add New Project »** et sélectionnez le dépôt.
4. Framework Preset : **Next.js**.
5. Cliquez sur **« Deploy »** : le site est en ligne en moins de 60 secondes avec HTTPS automatique et réseau Edge mondial.

---

## 👨‍💻 Auteur
**Benjamin MUGANGU MUGISHO**  
Goma, Nord-Kivu, République Démocratique du Congo  
- **Email :** [mugangubenjamin696@gmail.com](mailto:mugangubenjamin696@gmail.com)  
- **LinkedIn :** [linkedin.com/in/benjamin-mugangu](https://www.linkedin.com/in/benjamin-mugangu-8a4023300)  
- **GitHub :** [github.com/benjaminmugangu](https://github.com/benjaminmugangu)  
- **Chaîne YouTube :** [Infor Mystique](https://www.youtube.com/@InforMystique)
