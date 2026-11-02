export type Language = "fr" | "en";

export interface Project {
  id: string;
  title: string;
  category: "backend" | "cloud" | "ai" | "iot" | "academic";
  categoryLabel: { fr: string; en: string };
  tagline: { fr: string; en: string };
  description: { fr: string; en: string };
  impact: { fr: string; en: string };
  technologies: string[];
  role: { fr: string; en: string };
  period: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  highlights: { fr: string[]; en: string[] };
}

export interface Experience {
  id: string;
  role: { fr: string; en: string };
  organization: string;
  location: string;
  period: { fr: string; en: string };
  type: { fr: string; en: string };
  description: { fr: string; en: string };
  achievements: { fr: string[]; en: string[] };
  technologies: string[];
  badge?: { fr: string; en: string };
}

export interface Certification {
  id: string;
  title: { fr: string; en: string };
  issuer: string;
  date: string;
  badge?: { fr: string; en: string };
  reference?: string;
  description: { fr: string; en: string };
  imageSrc: string;
  pdfSrc?: string;
  skills: string[];
  featured?: boolean;
}

export interface Service {
  id: string;
  icon: string;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  deliverables: { fr: string[]; en: string[] };
}

export const portfolioData = {
  profile: {
    name: "Benjamin MUGANGU MUGISHO",
    shortName: "Benjamin Mugangu",
    monogram: "BM.",
    titles: {
      fr: "Ingénieur Génie Logiciel, Backend & Architectures Cloud",
      en: "Software Engineer, Backend & Cloud Architect",
    },
    tagline: {
      fr: "Je conçois des systèmes distribués résilients, des architectures microservices haute performance et des solutions d'IA appliquée à fort impact.",
      en: "Designing resilient distributed systems, high-performance microservices architectures, and high-impact applied AI solutions.",
    },
    location: "Goma, Nord-Kivu, République Démocratique du Congo",
    status: {
      fr: "Disponible pour missions, ingénierie logicielle & opportunités tech",
      en: "Available for engineering contracts, software roles & tech collaborations",
    },
    bio: {
      fr: "Ingénieur en Génie Informatique, finaliste de Master 2 à l'ULPGL Goma et Lead Développeur Backend chez Benflux Corporation, j'allie la rigueur de l'ingénierie des systèmes à une maîtrise pointue du cloud, du DevOps et de l'intelligence artificielle. Reconnue par une distinction internationale des Nations Unies (VNU/PNUD) et un prix d'excellence technique (2ème place au DevArena Challenge), mon approche repose sur trois principes fondamentaux : la résilience du code en environnement contraint, la rigueur des flux DevOps et la transmission active du savoir technologique.",
      en: "Computer Software Engineer, Master 2 candidate at ULPGL Goma, and Lead Backend Developer at Benflux Corporation. I merge deep system engineering with cloud orchestration, DevOps workflows, and applied artificial intelligence. Recognized with an international United Nations distinction (UNV/UNDP) and a top technical award (2nd place at DevArena Challenge), my engineering philosophy centers on resilient distributed architectures, rigorous DevOps automation, and impactful tech knowledge sharing.",
    },
    socialLinks: {
      github: "https://github.com/benjaminmugangu",
      linkedin: "https://www.linkedin.com/in/benjamin-mugangu-8a4023300",
      youtube: "https://www.youtube.com/@InforMystique",
      email: "mugangubenjamin696@gmail.com",
      phone: "+243 (0) 970 627 288",
      whatsapp: "https://wa.me/243970627288",
    },
    cvPath: "/docs/CV_MUGANGU_Benjamin.pdf",
    avatarSrc: "/images/avatar.png",
    signatureSrc: "/images/signature.png",
  },

  metrics: [
    {
      value: "M2",
      label: { fr: "Cycle d'Ingénieur ULPGL", en: "Master in Computer Eng." },
      subtext: { fr: "Génie Informatique & Systèmes", en: "Software & Distributed Systems" },
    },
    {
      value: "8+",
      label: { fr: "Architectures & Projets Clés", en: "Key Systems & Projects" },
      subtext: { fr: "Microservices, Cloud & IoT", en: "Microservices, Cloud & IoT" },
    },
    {
      value: "ONU",
      label: { fr: "Mission VNU / PNUD RDC", en: "UNV / UNDP Mission" },
      subtext: { fr: "Code du Numérique (ODD 4)", en: "Digital Code Outreach (SDG 4)" },
    },
    {
      value: "2ème",
      label: { fr: "Prix Benflux DevArena", en: "Prize at DevArena Contest" },
      subtext: { fr: "Ingénierie SDK en Go (82.75/100)", en: "Go SDK Engineering (82.75/100)" },
    },
    {
      value: "300+",
      label: { fr: "Personnes Formées & Impactées", en: "Learners & Devs Reached" },
      subtext: { fr: "Jurys, tutorats & Infor Mystique", en: "Tutoring, jury & Infor Mystique" },
    },
  ],

  pillars: [
    {
      number: "01",
      title: { fr: "Architectures Distribuées Résilientes", en: "Resilient Distributed Systems" },
      description: {
        fr: "Conception de microservices découplés (NestJS, Go, PostgreSQL), séparation stricte des domaines métier (DDD, MVC) et optimisation des transactions face aux contraintes réseau réelles.",
        en: "Engineering decoupled microservices (NestJS, Go, PostgreSQL), strict domain-driven boundaries (DDD, MVC), and robust transaction handling in constrained network environments.",
      },
    },
    {
      number: "02",
      title: { fr: "DevOps & Automatisation Cloud", en: "DevOps & Cloud Automation" },
      description: {
        fr: "Déploiements conteneurisés fiables via Docker, clusters Kubernetes (k3s), charts Helm, intégration SSO unifiée et pipelines CI/CD garantissant traçabilité et haute disponibilité.",
        en: "Rock-solid containerized deployments via Docker, Kubernetes clusters (k3s), Helm charts, unified SSO integrations, and automated CI/CD pipelines ensuring high availability.",
      },
    },
    {
      number: "03",
      title: { fr: "Pédagogie & IA au Service de l'Impact", en: "Impact-Driven AI & Mentorship" },
      description: {
        fr: "Vulgarisation citoyenne du Code du Numérique (mission PNUD), modélisation de réseaux de neurones (FFNN), intégration d'APIs LLM et formation des futurs ingénieurs selon l'Approche Par Compétences (APC).",
        en: "Civic digital literacy with UNDP, deep neural networks modeling (FFNN), LLM APIs orchestration, and active mentorship of computer science students using competency-based pedagogy.",
      },
    },
  ],

  skillsCategories: [
    {
      id: "backend",
      title: { fr: "Backend & Microservices", en: "Backend & Microservices" },
      description: { fr: "Conception d'APIs scalables et gestion des données", en: "Scalable API design and robust data modeling" },
      skills: [
        { name: "NestJS", level: 90, tag: "Primary" },
        { name: "Node.js & TypeScript", level: 92, tag: "Primary" },
        { name: "Go (Golang)", level: 82, tag: "DevArena Winner" },
        { name: "PostgreSQL & Redis", level: 88, tag: "Database" },
        { name: "PHP 8 & MySQL (MVC)", level: 90, tag: "Full-Stack" },
        { name: "REST APIs & Microservices", level: 92, tag: "Architecture" },
      ],
    },
    {
      id: "cloud-devops",
      title: { fr: "Cloud, DevOps & Linux", en: "Cloud, DevOps & Linux" },
      description: { fr: "Conteneurisation, orchestration et pipelines de déploiement", en: "Containerization, orchestration and CI/CD pipelines" },
      skills: [
        { name: "Docker & Compose", level: 90, tag: "Containers" },
        { name: "Kubernetes (k3s)", level: 80, tag: "Orchestration" },
        { name: "Helm & Ingress TLS", level: 82, tag: "Cloud" },
        { name: "CI/CD (Tekton, GitHub Actions)", level: 84, tag: "Automation" },
        { name: "Linux Ubuntu Server", level: 88, tag: "System Admin" },
        { name: "GitOps & SSO (benflux-auth)", level: 85, tag: "Security" },
      ],
    },
    {
      id: "ai-data",
      title: { fr: "IA & Ingénierie des Données", en: "AI & Data Engineering" },
      description: { fr: "Intégration de modèles intelligents et apprentissage automatique", en: "Intelligent models integration and machine learning" },
      skills: [
        { name: "Google Gemini API & LLMs", level: 86, tag: "Generative AI" },
        { name: "TensorFlow & Keras (FFNN)", level: 80, tag: "Deep Learning" },
        { name: "Python (NumPy, Pandas)", level: 82, tag: "Data Analysis" },
        { name: "Modélisation Relationnelle (MCD/MLD)", level: 92, tag: "Architecture" },
        { name: "Automatisation de Processus MPME", level: 88, tag: "Business Value" },
      ],
    },
    {
      id: "networks-iot",
      title: { fr: "Réseaux, Sécurité & IoT", en: "Networks, Security & IoT" },
      description: { fr: "Infrastructures sécurisées et systèmes embarqués", en: "Secure infrastructures and embedded connected devices" },
      skills: [
        { name: "Cisco IOS (Routeurs 2911, Catalyst 3560)", level: 85, tag: "Hardware CLI" },
        { name: "Cisco ASA 5506 & Protection Anti-DDoS", level: 82, tag: "Cyberdefense" },
        { name: "VLANs (802.1Q) & Routage Inter-VLAN", level: 88, tag: "Network" },
        { name: "ESP32 & Microcontrôleurs", level: 82, tag: "Embedded" },
        { name: "MQTT & Node-RED Dashboard", level: 85, tag: "IoT Realtime" },
      ],
    },
    {
      id: "pedagogy-tools",
      title: { fr: "Pédagogie, Vidéo & Outils", en: "Pedagogy, Video & Tools" },
      description: { fr: "Transmission, vulgarisation et méthodologies professionnelles", en: "Knowledge transfer, technical media & agile methods" },
      skills: [
        { name: "Approche Par Compétences (APC)", level: 92, tag: "Training" },
        { name: "Création Vidéo (OBS, CapCut, DaVinci)", level: 86, tag: "Infor Mystique" },
        { name: "Méthodes Agiles (Scrum, Kanban)", level: 88, tag: "Collaboration" },
        { name: "LaTeX & Rédaction Technique", level: 95, tag: "Documentation" },
        { name: "Canva & Conception Graphique", level: 85, tag: "Design" },
      ],
    },
  ],

  projects: [
    {
      id: "transflux",
      title: "Transflux Platform",
      category: "backend",
      categoryLabel: { fr: "Entreprise / Microservices", en: "Enterprise / Microservices" },
      tagline: {
        fr: "Système backend distribué de gestion logistique et d'opérations de transport multi-sites.",
        en: "Distributed backend system for logistics operations and multi-site transport tracking.",
      },
      description: {
        fr: "Conception et implémentation du service backend centralisé sous NestJS et PostgreSQL dans le cadre des activités d'ingénierie chez Benflux Corporation. Gestion des flottes, des affectations en temps réel et des états de livraison avec persistance distribuée et notifications.",
        en: "Designed and implemented the core centralized backend service using NestJS and PostgreSQL at Benflux Corporation. Handled vehicle fleets, real-time dispatch assignments, and delivery lifecycle states with distributed persistence and notification queues.",
      },
      impact: {
        fr: "Centralisation des opérations de transport et élimination des goulets d'étranglement de synchronisation.",
        en: "Centralized transport operations and eliminated distributed synchronization bottlenecks.",
      },
      technologies: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
      role: { fr: "Lead Développeur Backend", en: "Lead Backend Developer" },
      period: "2026",
      featured: true,
      highlights: {
        fr: [
          "Architecture microservices découplée avec communication événementielle.",
          "Modélisation de données transactionnelle haute cohérence sous PostgreSQL.",
          "Intégration au cluster Kubernetes k3s avec Ingress TLS sécurisé.",
        ],
        en: [
          "Decoupled microservices architecture with event-driven message queues.",
          "High-consistency transactional data modeling with PostgreSQL.",
          "Deployment on Kubernetes k3s cluster with secure TLS Ingress.",
        ],
      },
    },
    {
      id: "devarena-go-sdk",
      title: "FluxChat Official Go SDK (DevArena)",
      category: "backend",
      categoryLabel: { fr: "Prix d'Excellence Technique", en: "Technical Excellence Award" },
      tagline: {
        fr: "SDK officiel haute performance en Go pour la plateforme FluxChat — 2ème place au Challenge Benflux DevArena.",
        en: "High-performance official Go SDK for FluxChat platform — 2nd Place at Benflux DevArena Challenge.",
      },
      description: {
        fr: "Développement d'un SDK complet et idiomatique en langage Go (Golang) pour interagir avec les APIs de messagerie en temps réel de FluxChat. Soumis et évalué au concours d'élite DevArena Week 2 (Juin 2026), noté 82.75/100 et intégré au dépôt officiel via Pull Request validée.",
        en: "Engineered a robust, idiomatic Go SDK interfacing with FluxChat real-time messaging APIs. Evaluated at the elite DevArena Week 2 Challenge (June 2026), scoring 82.75/100 (2nd Place) and merged into the upstream repository via validated Pull Request.",
      },
      impact: {
        fr: "Score de 82.75/100, 2ème place sur l'ensemble des candidats et validation par la direction technique de Benflux.",
        en: "Scored 82.75/100, achieving 2nd place overall, approved by Benflux technical leadership.",
      },
      technologies: ["Go (Golang)", "REST API", "GitHub PR & CI", "Unit Testing", "Go Modules"],
      role: { fr: "Ingénieur Logiciel Concourant", en: "Contest Software Engineer" },
      period: "Juin 2026",
      featured: true,
      highlights: {
        fr: [
          "Code idiomatique avec gestion stricte des erreurs et contexte de timeout (context.Context).",
          "Couverture de tests unitaires et intégration continue automatisée.",
          "Documentation exemplaire avec exemples de démarrage rapide (Quickstart).",
        ],
        en: [
          "Idiomatic Go code with strict error handling and timeout context propagation.",
          "High unit test coverage with automated continuous integration checks.",
          "Thorough API documentation with ready-to-run quickstart examples.",
        ],
      },
    },
    {
      id: "homecare",
      title: "HomeCare Digital Healthcare Platform",
      category: "backend",
      categoryLabel: { fr: "Santé Numérique & Services", en: "Digital Health & Care" },
      tagline: {
        fr: "Plateforme intégrée de soins à domicile, coordination médicale et facturation automatisée.",
        en: "Integrated home health care platform, medical coordination, and automated invoicing.",
      },
      description: {
        fr: "Architecture et développement des modules clés de la plateforme HomeCare chez Benflux Corporation : système de messagerie sécurisée entre patients et soignants, planification automatisée des visites médicales et module de facturation avec traçabilité complète.",
        en: "Architected and developed core modules for HomeCare at Benflux Corporation: secure messaging between patients and practitioners, automated visit scheduling, and transparent invoicing workflows.",
      },
      impact: {
        fr: "Numérisation complète de la prise en charge à domicile et sécurisation des données de santé.",
        en: "End-to-end digitalization of home healthcare visits and patient data privacy.",
      },
      technologies: ["NestJS", "TypeScript", "PostgreSQL", "Docker", "SSO Auth", "Agile Kanban"],
      role: { fr: "Développeur Backend & Architecte Module", en: "Backend Developer & Module Architect" },
      period: "2026",
      featured: true,
      highlights: {
        fr: [
          "Mise en œuvre du contrôle d'accès basé sur les rôles (RBAC) pour les soignants et patients.",
          "Automatisation des relances et des alertes de planning d'intervention.",
          "Documentation technique et procédures d'exploitation d'urgence.",
        ],
        en: [
          "Role-based access control (RBAC) for practitioners, patients, and admins.",
          "Automated follow-ups and schedule dispatch alerts.",
          "Technical runbooks and disaster recovery guidelines.",
        ],
      },
    },
    {
      id: "memoire-loisirs-goma",
      title: "Plateforme de Promotion des Loisirs à Goma",
      category: "academic",
      categoryLabel: { fr: "Mémoire de Recherche (L3)", en: "Bachelor Thesis (L3)" },
      tagline: {
        fr: "Application web dynamique en architecture MVC complète pour la valorisation touristique et récréative.",
        en: "Dynamic full-stack web application in pure MVC architecture for tourism and leisure promotion.",
      },
      description: {
        fr: "Travail de fin de cycle de Licence en Génie Informatique à l'ULPGL Goma, sous la direction du Prof. Dr. Olivier BARAKA MUSHAGE. Conception complète de la solution (HTML5, CSS3, JS, PHP 8, MySQL) articulée selon le patron MVC strict, modélisation relationnelle de 5 tables multi-acteurs et enquête d'ingénierie du cycle de vie (LCE) auprès de 57 répondants.",
        en: "Bachelor's engineering thesis at ULPGL Goma under the supervision of Prof. Dr. Olivier BARAKA MUSHAGE. End-to-end design (HTML5, CSS3, JS, PHP 8, MySQL) in strict MVC pattern, 5-actor relational model, and Life Cycle Engineering (LCE) study across 57 local survey respondents.",
      },
      impact: {
        fr: "Validation académique avec mention d'excellence, validation terrain auprès de 57 acteurs locaux.",
        en: "Earned academic distinction and validated in the field with 57 local respondents.",
      },
      technologies: ["PHP 8", "MySQL", "JavaScript", "Architecture MVC", "XAMPP / Apache", "cPanel"],
      role: { fr: "Concepteur & Développeur Unique", en: "Sole Architect & Developer" },
      period: "2023 – 2024",
      featured: true,
      highlights: {
        fr: [
          "Séparation étanche Modèle-Vue-Contrôleur sans dépendance lourde externe.",
          "Modèle relationnel optimisé pour Visiteurs, Clients, Opérateurs et Super Administrateur.",
          "Démarche d'Ingénierie du Cycle de Vie (LCE) mesurant l'ergonomie et la durabilité.",
        ],
        en: [
          "Clean Model-View-Controller separation without bloated external dependencies.",
          "Optimized relational schema orchestrating Visitors, Clients, Operators, and Admins.",
          "Life Cycle Engineering (LCE) methodology validating UX and long-term viability.",
        ],
      },
    },
    {
      id: "soundwave2",
      title: "SoundWave2 — Distributed Audio Microservices",
      category: "backend",
      categoryLabel: { fr: "Open Source / Microservices", en: "Open Source / Microservices" },
      tagline: {
        fr: "Architecture backend distribuée avec découplage complet des bases de données par service.",
        en: "Distributed backend architecture with complete database decoupling per service.",
      },
      description: {
        fr: "Système de streaming et de gestion audio découpé en microservices indépendants (User Service, Admin Service, Song Service), chacun disposant de sa propre persistance de données pour illustrer les meilleures pratiques de scalabilité horizontale.",
        en: "Audio streaming and catalogue management system partitioned into standalone microservices (User, Admin, Song Services), each operating with isolated database instances for true horizontal scaling.",
      },
      impact: {
        fr: "Code source public, illustration concrète de l'isolation des données dans les systèmes distribués.",
        en: "Open-source codebase demonstrating strict database-per-service isolation patterns.",
      },
      technologies: ["Node.js", "Express", "PostgreSQL", "Docker", "REST API", "Microservices"],
      role: { fr: "Auteur & Concepteur", en: "Author & Architect" },
      period: "2025",
      githubUrl: "https://github.com/benjaminmugangu/SoundWave2",
      featured: false,
      highlights: {
        fr: [
          "Isolation totale de la base de données par microservice (Database-per-service pattern).",
          "Gestion des communications inter-services et résilience aux pannes partielles.",
        ],
        en: [
          "Strict database-per-service pattern preventing cross-domain tight coupling.",
          "Inter-service resilience against partial cascading failures.",
        ],
      },
    },
    {
      id: "ffnn-ml-emissions",
      title: "Modélisation ML : Prédiction d'Émissions CO2",
      category: "ai",
      categoryLabel: { fr: "Intelligence Artificielle & Data", en: "Artificial Intelligence & Data" },
      tagline: {
        fr: "Réseau de neurones profond (FFNN) sous TensorFlow/Keras pour la prédiction d'émissions de navires.",
        en: "Deep Feed-Forward Neural Network (FFNN) in TensorFlow/Keras predicting maritime vessel emissions.",
      },
      description: {
        fr: "Conception, nettoyage des données, entraînement et évaluation d'un modèle d'apprentissage profond de type Feed-Forward Neural Network (FFNN) sous Google Colab avec Python, TensorFlow et Keras, visant à estimer les émissions de gaz polluants selon les profils de navigation.",
        en: "Engineered, cleaned dataset, trained, and evaluated a deep Feed-Forward Neural Network (FFNN) on Google Colab using Python, TensorFlow, and Keras to forecast maritime pollutant gas emissions.",
      },
      impact: {
        fr: "Convergence optimale du modèle avec minimisation de la fonction de perte (MSE/MAE).",
        en: "Optimal model convergence minimizing MSE/MAE validation loss.",
      },
      technologies: ["Python", "TensorFlow", "Keras", "Google Colab", "NumPy", "Matplotlib"],
      role: { fr: "Chercheur en Apprentissage Automatique", en: "Machine Learning Researcher" },
      period: "2025",
      githubUrl: "https://github.com/benjaminmugangu/TP_FFNN_ML/blob/main/TP_FFNN.ipynb",
      featured: false,
      highlights: {
        fr: [
          "Normalisation des séries de données et ingénierie des caractéristiques (feature engineering).",
          "Optimisation des hyperparamètres (learning rate, batch size, couches denses).",
        ],
        en: [
          "Data series normalization and domain-specific feature engineering.",
          "Hyperparameter tuning (learning rate, Adam optimizer, dense layers architecture).",
        ],
      },
    },
    {
      id: "iot-temphum-control",
      title: "IoT TempHum Control (ESP32 & Node-RED)",
      category: "iot",
      categoryLabel: { fr: "IoT & Systèmes Connectés", en: "IoT & Connected Systems" },
      tagline: {
        fr: "Système télémétrique temps réel sur microcontrôleur ESP32 avec courtier MQTT et tableau de bord.",
        en: "Real-time telemetry system on ESP32 microcontroller with MQTT broker and reactive dashboard.",
      },
      description: {
        fr: "Conception d'une station de monitoring environnemental connectée : capture des données de capteurs sur ESP32, transmission périodique sécurisée via protocole léger MQTT et visualisation reactive sur dashboard Node-RED.",
        en: "Designed a connected environmental telemetry station: sensor data sampling on ESP32, secure lightweight transmission over MQTT, and reactive telemetry visualization in Node-RED.",
      },
      impact: {
        fr: "Supervision en direct et alertes de franchissement de seuils critiques sans latence.",
        en: "Live supervision with zero-latency critical environmental threshold triggers.",
      },
      technologies: ["C++ / Arduino", "ESP32", "MQTT", "Node-RED", "JSON", "Wi-Fi Telemetry"],
      role: { fr: "Développeur Systèmes Embarqués", en: "Embedded Systems Developer" },
      period: "2025",
      githubUrl: "https://github.com/benjaminmugangu/IoT-TempHum-Control",
      featured: false,
      highlights: {
        fr: [
          "Gestion des reconnexions Wi-Fi/MQTT automatiques en milieu instable.",
          "Tableau de bord ergonomique pour la surveillance des métriques ambiantes.",
        ],
        en: [
          "Automated Wi-Fi and MQTT reconnect state machine for unstable connectivity.",
          "Ergonomic web dashboard for telemetry metrics visualization.",
        ],
      },
    },
    {
      id: "cisco-multicampus-network",
      title: "Infrastructure Réseau Multi-Campus & Anti-DDoS",
      category: "cloud",
      categoryLabel: { fr: "Réseaux & Cybersécurité", en: "Networks & Cybersecurity" },
      tagline: {
        fr: "Interconnexion sécurisée de deux campus universitaires et mitigation anti-DDoS sur Cisco ASA.",
        en: "Secure multi-campus interconnection and anti-DDoS mitigation via Cisco ASA Firewalls.",
      },
      description: {
        fr: "Projet d'ingénierie réseaux à la FSTA (ULPGL) : modélisation de l'interconnexion entre les campus Salomon et Moïse par liaison PTP/VSAT simulée, programmation CLI de routeurs Cisco 2911, de commutateurs Catalyst 3560 et d'un pare-feu Cisco ASA 5506 avec Modular Policy Framework (MPF) anti-DDoS.",
        en: "Advanced network engineering project at ULPGL: modeled multi-campus interconnection between Salomon and Moïse sites over simulated PTP/VSAT, CLI configuration of Cisco 2911 routers, Catalyst 3560 switches, and Cisco ASA 5506 firewalls with anti-DDoS MPF policies.",
      },
      impact: {
        fr: "Défense en profondeur éprouvée face aux simulations d'attaques TCP SYN Flood et ICMP.",
        en: "Multi-tier defense verified against TCP SYN Flood and ICMP volumetric attack vectors.",
      },
      technologies: ["Cisco IOS CLI", "Cisco ASA 5506", "VLAN 802.1Q", "Modular Policy Framework (MPF)", "Packet Tracer"],
      role: { fr: "Ingénieur Réseau & Sécurité", en: "Network & Security Engineer" },
      period: "2025",
      featured: false,
      highlights: {
        fr: [
          "Configuration avancée en ligne de commande (CLI) sur équipements réels et simulés.",
          "Segmentation réseau stricte en VLANs avec règles de filtrage inter-départements.",
          "Rapport technique détaillé documenté dans le dépôt de recherche.",
        ],
        en: [
          "Advanced CLI configuration on Cisco physical and simulated hardware.",
          "Strict VLAN network segmentation with inter-department ACL filtering.",
          "Exhaustive technical engineering documentation filed in research repository.",
        ],
      },
    },
    {
      id: "aylf-group-tracker",
      title: "AYLF Group Tracker",
      category: "backend",
      categoryLabel: { fr: "SaaS / Communauté", en: "SaaS / Community" },
      tagline: {
        fr: "Plateforme web de centralisation et de suivi des activités de groupes universitaires.",
        en: "Centralized web platform for tracking university fellowship chapters and activities.",
      },
      description: {
        fr: "Application web facilitant la coordination des activités, le reporting d'impact et la gestion documentaire pour les groupes de jeunes leaders AYLF/CDAfrica à travers le réseau universitaire de Goma.",
        en: "Web application streamlining activity coordination, impact reporting, and document management for AYLF/CDAfrica youth leadership groups across Goma university network.",
      },
      impact: {
        fr: "Centralisation des rapports d'activités et suivi en temps réel de dizaines d'initiatives.",
        en: "Centralized activity tracking and real-time oversight of dozens of student initiatives.",
      },
      technologies: ["PHP/MySQL", "JavaScript", "HTML5/CSS3", "Git/GitHub"],
      role: { fr: "Développeur Principal", en: "Lead Developer" },
      period: "2025",
      featured: false,
      highlights: {
        fr: [
          "Gestion des accès et des rôles par groupe universitaire.",
          "Tableau de bord de reporting mensuel des coordinateurs.",
        ],
        en: [
          "Role-based access management tailored to each university chapter.",
          "Consolidated monthly reporting dashboard for national coordinators.",
        ],
      },
    },
  ],

  experiences: [
    {
      id: "benflux",
      role: { fr: "Lead Développeur Backend & Support Ops", en: "Lead Backend Developer & Support Ops" },
      organization: "Benflux Corporation",
      location: "Goma, RDC",
      period: { fr: "Janv 2026 – Présent", en: "Jan 2026 – Present" },
      type: { fr: "Poste en Entreprise", en: "Enterprise Position" },
      badge: { fr: "En production", en: "In Production" },
      description: {
        fr: "Direction technique du développement backend pour les plateformes d'entreprise (Transflux, HomeCare), administration des infrastructures cloud conteneurisées et gestion des opérations de support de niveau 2/3.",
        en: "Technical leadership for backend engineering across enterprise products (Transflux, HomeCare), cloud container infrastructure management, and Tier 2/3 production support operations.",
      },
      achievements: {
        fr: [
          "Développement des microservices NestJS / PostgreSQL pour le suivi de flotte Transflux.",
          "Administration des déploiements Kubernetes (k3s), Ingress TLS, charts Helm et SSO (benflux-auth).",
          "Lauréat de la 2ème place au DevArena Challenge avec le SDK officiel en Go pour FluxChat (82.75/100).",
          "Diagnostic et résolution des incidents critiques en production et rédaction des runbooks.",
        ],
        en: [
          "Built NestJS / PostgreSQL microservices handling Transflux fleet tracking and messaging.",
          "Managed Kubernetes (k3s) deployments, TLS Ingress, Helm charts, and centralized SSO.",
          "Awarded 2nd Place at DevArena Challenge for building the official FluxChat Go SDK (82.75/100).",
          "Diagnosed and resolved critical production outages, writing exhaustive operational runbooks.",
        ],
      },
      technologies: ["NestJS", "TypeScript", "PostgreSQL", "Go", "Docker", "Kubernetes", "Helm", "Redis"],
    },
    {
      id: "unv-undp",
      role: {
        fr: "Volontaire en Ligne des Nations Unies (VNU)",
        en: "United Nations Online Volunteer (UNV)",
      },
      organization: "Programme des Nations Unies pour le Développement (PNUD RDC)",
      location: "RDC (Distanciel)",
      period: { fr: "Sept 2026 – Présent", en: "Sep 2026 – Present" },
      type: { fr: "Mission Internationale", en: "International Mission" },
      badge: { fr: "Certifié ONU / ODD 4", en: "UN Certified / SDG 4" },
      description: {
        fr: "Contribution officielle auprès du PNUD RDC dans le cadre de la Campagne nationale de vulgarisation du Code du Numérique en République Démocratique du Congo (Réf. 6176646/178488884524991).",
        en: "Official contribution with UNDP DRC for the National Awareness Campaign on the Congolese Digital Code (Ref. 6176646/178488884524991).",
      },
      achievements: {
        fr: [
          "Décoré du Certificat d'Appréciation officiel décerné par le Coordonnateur exécutif des VNU.",
          "Conception de supports didactiques vulgarisant la cybersécurité, la protection des données et le droit numérique.",
          "Sensibilisation directe de plus de 300 jeunes innovateurs et acteurs de l'écosystème numérique congolais.",
          "Contribution active à l'Objectif de Développement Durable N° 4 (Éducation de qualité).",
        ],
        en: [
          "Conferred the official Certificate of Appreciation by the UNV Executive Coordinator.",
          "Authored educational modules breaking down cybersecurity, data privacy, and digital laws.",
          "Directly reached 300+ youth innovators and tech builders across DRC.",
          "Actively advanced UN Sustainable Development Goal 4 (Quality Education).",
        ],
      },
      technologies: ["Code du Numérique", "Cybersécurité", "Protection des Données", "Pédagogie Citoyenne", "ODD 4"],
    },
    {
      id: "ulpgl-mentor",
      role: {
        fr: "Encadreur Pédagogique & Membre de Jury Officiel",
        en: "Academic Mentor & Official Defense Jury Member",
      },
      organization: "Université Libre des Pays des Grands Lacs (ULPGL Goma)",
      location: "Goma, RDC",
      period: { fr: "Juin 2026", en: "June 2026" },
      type: { fr: "Responsabilité Académique", en: "Academic Duty" },
      description: {
        fr: "Encadrement technique de promotions d'étudiants ingénieurs (Licence 1) et évaluation de projets logiciels universitaires en jury officiel de soutenance selon l'Approche Par Compétences (APC).",
        en: "Technical mentorship of first-year engineering students and official jury examination of software projects based on the Competency-Based Approach (APC).",
      },
      achievements: {
        fr: [
          "Rédaction du guide officiel : « Guide Général de l'Étudiant : Organisation, DevOps & Grille d'Évaluation ».",
          "Supervision directe de 2 projets d'envergure : outil de calcul isostatique (Python/VBA) et gestion des présences.",
          "Membre évaluateur en jury officiel pour 5 soutenances d'ingénierie logicielle (FSTA / FSEG).",
          "Transmission des standards professionnels : revues de code hebdomadaires, Git/GitHub et rigueur méthodologique.",
        ],
        en: [
          "Authored official reference document: 'General Student Guide: Organization, DevOps & Evaluation Rubric'.",
          "Directly supervised 2 key projects: isostatic structural calculations (Python/VBA) and attendance system.",
          "Official voting examiner for 5 software engineering defenses across faculties.",
          "Instilled industry practices: weekly code reviews, Git/GitHub workflows, and structured delivery.",
        ],
      },
      technologies: ["Approche Par Compétences (APC)", "Python", "Excel VBA", "Git/GitHub", "Scrum", "Évaluation Jurys"],
    },
    {
      id: "infor-mystique",
      role: {
        fr: "Créateur & Producteur de Contenus Pédagogiques Tech",
        en: "Tech Content Creator & Educational Producer",
      },
      organization: "Chaîne YouTube « Infor Mystique »",
      location: "En ligne / Goma",
      period: { fr: "Oct 2025 – Présent", en: "Oct 2025 – Present" },
      type: { fr: "Initiative Personnelle", en: "Personal Initiative" },
      badge: { fr: "+210 apprenants", en: "+210 learners" },
      description: {
        fr: "Création et diffusion de capsules vidéos didactiques en accès libre portant sur l'algorithmique, les architectures web modernes, l'intelligence artificielle et la sécurité numérique.",
        en: "Producing and broadcasting open-access educational videos on algorithms, modern web architecture, artificial intelligence, and digital security.",
      },
      achievements: {
        fr: [
          "Scénarisation, enregistrement et montage de formations techniques pratiques.",
          "Animation d'une communauté active de plus de 210 apprenants réguliers.",
          "Démystification de concepts complexes par des exemples applicatifs commentés.",
        ],
        en: [
          "Scripted, recorded, and edited high-retention technical walkthroughs.",
          "Cultivated an active learning audience of over 210 regular tech students.",
          "Demystified complex engineering patterns through commented practical code.",
        ],
      },
      technologies: ["YouTube", "OBS Studio", "CapCut", "DaVinci Resolve", "Pédagogie Numérique", "Canva"],
    },
    {
      id: "aylf-cdafrica",
      role: {
        fr: "Concepteur de Contenus & Facilitateur de Groupes",
        en: "Curriculum Designer & Group Facilitator",
      },
      organization: "AYLF / CDAfrica (Cornerstone Development Africa)",
      location: "Goma, RDC",
      period: { fr: "2023 – 2025", en: "2023 – 2025" },
      type: { fr: "Engagement Communautaire", en: "Community Engagement" },
      description: {
        fr: "Conception de modules de formation interactive axés sur le leadership éthique, la gestion de projets numériques et l'organisation personnelle au sein du réseau universitaire et communautaire.",
        en: "Designed interactive learning modules focused on servant leadership, digital project management, and personal effectiveness across university and community networks.",
      },
      achievements: {
        fr: [
          "Élaboration de référentiels didactiques et de scénarios de mise en situation concrète.",
          "Harmonisation de la terminologie et adaptation aux apprenants sans prérequis informatiques.",
          "Coordination d'ateliers participatifs favorisant l'inclusivité et la cohésion d'équipe.",
        ],
        en: [
          "Developed didactic courseware, scenario simulations, and evaluation quizzes.",
          "Standardized terminology making complex concepts accessible to non-technical learners.",
          "Facilitated participatory workshops promoting inclusivity and team cohesion.",
        ],
      },
      technologies: ["Leadership Éthique", "Gestion de Projets", "Ingénierie Pédagogique", "Communication"],
    },
    {
      id: "wcsj-info",
      role: { fr: "Développeur Web Junior & Support IT (Stage)", en: "Junior Web Developer & IT Support (Intern)" },
      organization: "WCSJ-INFO",
      location: "Goma, RDC",
      period: { fr: "Juil – Sept 2024", en: "Jul – Sep 2024" },
      type: { fr: "Stage Professionnel", en: "Professional Internship" },
      description: {
        fr: "Développement d'outils logiciels de gestion interne en PHP/MySQL, maintenance du parc informatique et assistance technique aux utilisateurs.",
        en: "Developed internal administrative management modules using PHP/MySQL, maintained computing assets, and provided user technical support.",
      },
      achievements: {
        fr: [
          "Implémentation d'un système de gestion documentaire avec authentification et contrôle des rôles.",
          "Maintenance préventive du parc de machines et formation des employés aux outils déployés.",
        ],
        en: [
          "Implemented a secure document management system with role-based authentication.",
          "Carried out preventive IT maintenance and onboarded administrative staff.",
        ],
      },
      technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Helpdesk IT", "Maintenance Parc"],
    },
  ],

  certifications: [
    {
      id: "unv-undp-certificate",
      title: {
        fr: "Certificat d'Appréciation — Vulgarisation du Code du Numérique",
        en: "Certificate of Appreciation — National Digital Code Outreach",
      },
      issuer: "Volontaires des Nations Unies (VNU) & PNUD RDC",
      date: "28 Octobre 2026",
      badge: { fr: "Distinction Internationale (ODD 4)", en: "International Distinction (SDG 4)" },
      reference: "6176646/178488884524991",
      description: {
        fr: "Décerné par Toily Kurbanov, Coordonnateur exécutif des Volontaires des Nations Unies, en reconnaissance d'une contribution de 20h/semaine avec le PNUD aux Objectifs de Développement Durable (ODD 4 : Éducation de qualité) pour la vulgarisation citoyenne du Code du Numérique en RDC.",
        en: "Conferred by Toily Kurbanov, Executive Coordinator of UN Volunteers, in recognition of a 20h/week contribution with UNDP towards the Sustainable Development Goals (SDG 4: Quality Education) promoting digital law literacy across DRC.",
      },
      imageSrc: "/images/cert-unv-pnud-appreciation.png",
      pdfSrc: "/docs/certificat_appreciation_unv_pnud.pdf",
      skills: ["Droit Numérique", "Cybersécurité", "Protection Données", "ODD 4", "Nations Unies"],
      featured: true,
    },
    {
      id: "devarena-benflux-cert",
      title: {
        fr: "Lauréat 2ème Place — Challenge Benflux DevArena (SDK Go)",
        en: "2nd Place Laureate — Benflux DevArena Challenge (Go SDK)",
      },
      issuer: "Benflux Corporation",
      date: "Juin 2026",
      badge: { fr: "Score d'Élite : 82.75 / 100", en: "Elite Score: 82.75 / 100" },
      description: {
        fr: "Concours technique d'élite récompensant la conception et le développement du SDK officiel en Go pour FluxChat, validé et fusionné sur le dépôt principal de l'entreprise via Pull Request.",
        en: "Elite technical contest awarding the architectural design and implementation of the official Go SDK for FluxChat, merged into the core repository via validated Pull Request.",
      },
      imageSrc: "/images/cert-devarena.jpg",
      skills: ["Go (Golang)", "SDK Design", "API Client", "Architecture Logicielle"],
      featured: true,
    },
    {
      id: "diplome-licence-ulpgl",
      title: {
        fr: "Diplôme de Licence en Génie Informatique (Bac+3 / L3)",
        en: "Bachelor's Degree in Computer Engineering (B.Sc.)",
      },
      issuer: "Université Libre des Pays des Grands Lacs (ULPGL Goma)",
      date: "2024",
      badge: { fr: "Mention Distinction", en: "Graduated with Distinction" },
      description: {
        fr: "Faculté des Sciences et Technologies Appliquées (FSTA). Mémoire soutenu sur la conception d'une plateforme web MVC pour la promotion des activités de loisirs à Goma.",
        en: "Faculty of Applied Sciences & Technologies (FSTA). Thesis successfully defended on an MVC web platform for tourism and leisure promotion.",
      },
      imageSrc: "/images/diplome-licence.png",
      skills: ["Génie Logiciel", "Algorithmique", "Bases de Données", "Architecture MVC", "Réseaux"],
      featured: true,
    },
    {
      id: "carte-master2-ulpgl",
      title: {
        fr: "Master 2 en Génie Informatique (Finaliste 2025–2026)",
        en: "Master of Science (M.Sc.) in Computer Engineering",
      },
      issuer: "ULPGL Goma — École d'Ingénieurs FSTA",
      date: "2025 – 2026",
      badge: { fr: "Cycle Ingénieur en cours", en: "In Progress" },
      description: {
        fr: "Spécialisation avancée en systèmes distribués, sécurité des infrastructures réseaux, intelligence artificielle et méthodes formelles de développement logiciel.",
        en: "Advanced specialization in distributed systems, network security architectures, artificial intelligence, and formal software methods.",
      },
      imageSrc: "/images/carte-m2.png",
      skills: ["Systèmes Distribués", "Intelligence Artificielle", "Sécurité SI", "DevOps"],
      featured: false,
    },
    {
      id: "certificat-welead",
      title: {
        fr: "Certificat d'Engagement Citoyen & Gestion de Projets",
        en: "Civic Leadership & Project Management Certificate",
      },
      issuer: "Programme WeLead to Develop (Cohorte 1)",
      date: "2025",
      badge: { fr: "Leadership Civique", en: "Civic Leadership" },
      description: {
        fr: "Formation intensive sur la conduite de projets communautaires, le leadership de service et le développement d'initiatives à fort impact social.",
        en: "Intensive training on community project stewardship, servant leadership, and social impact delivery.",
      },
      imageSrc: "/images/cert-welead.jpg",
      skills: ["Gestion de Projets", "Leadership", "Engagement Civique"],
      featured: false,
    },
  ],

  services: [
    {
      id: "backend-architecture",
      icon: "Server",
      title: {
        fr: "Architecture & Développement Backend",
        en: "Backend Architecture & Engineering",
      },
      description: {
        fr: "Conception d'APIs RESTful et microservices haute performance sous NestJS, Node.js et Go. Modélisation de schémas relationnels robustes (PostgreSQL, MySQL) et mise en cache Redis.",
        en: "Designing high-performance RESTful APIs and microservices using NestJS, Node.js, and Go. Crafting resilient PostgreSQL/MySQL relational schemas with Redis caching layers.",
      },
      deliverables: {
        fr: [
          "APIs documentées (Swagger / OpenAPI)",
          "Bases de données relationnelles optimisées",
          "Authentification sécurisée (SSO, JWT, RBAC)",
          "Architecture microservices découplée",
        ],
        en: [
          "Documented APIs (Swagger / OpenAPI)",
          "Optimized relational database schemas",
          "Secure authentication (SSO, JWT, RBAC)",
          "Decoupled microservices architecture",
        ],
      },
    },
    {
      id: "devops-cloud",
      icon: "Cloud",
      title: {
        fr: "DevOps & Déploiement Conteneurisé",
        en: "DevOps & Cloud Orchestration",
      },
      description: {
        fr: "Conteneurisation d'applications via Docker, déploiement sur clusters Kubernetes (k3s), configuration Ingress TLS et automatisation de pipelines CI/CD.",
        en: "Docker containerization, Kubernetes (k3s) cluster deployment, secure Ingress TLS termination, and automated continuous delivery pipelines.",
      },
      deliverables: {
        fr: [
          "Fichiers Dockerfile & Docker Compose durcis",
          "Manifestes et charts Helm pour Kubernetes",
          "Pipelines CI/CD (GitHub Actions / Tekton)",
          "Configuration de serveurs Linux sécurisés",
        ],
        en: [
          "Hardened Dockerfiles & Compose stacks",
          "Kubernetes manifests and Helm charts",
          "Automated CI/CD pipelines (GitHub Actions)",
          "Secured Linux Ubuntu server configurations",
        ],
      },
    },
    {
      id: "ai-automation",
      icon: "Brain",
      title: {
        fr: "Intégration d'IA & Automatisation Métier",
        en: "AI Integration & Workflow Automation",
      },
      description: {
        fr: "Intégration de modèles de langage (LLMs, Google Gemini API), mise en place d'agents d'automatisation de tâches et développement de modèles prédictifs sous TensorFlow/Python.",
        en: "Integrating Large Language Models (LLMs, Google Gemini API), crafting task automation agents, and training custom predictive models in TensorFlow/Python.",
      },
      deliverables: {
        fr: [
          "Intégration d'APIs LLM dans vos produits",
          "Automatisation de flux de traitement de données",
          "Modèles d'apprentissage supervisé (Python)",
          "Optimisation des coûts d'inférence IA",
        ],
        en: [
          "LLM API integration in web/backend products",
          "Automated data workflows and pipelines",
          "Supervised machine learning models (Python)",
          "Inference cost & latency optimization",
        ],
      },
    },
    {
      id: "training-consulting",
      icon: "GraduationCap",
      title: {
        fr: "Formation Technique & Mentorat d'Équipes",
        en: "Technical Training & Team Mentorship",
      },
      description: {
        fr: "Animation d'ateliers pratiques et formations d'ingénieurs selon l'Approche Par Compétences (APC) : développement web moderne, bonnes pratiques Git/GitHub, architectures logicielles et cybersécurité.",
        en: "Hands-on engineering workshops and student tutoring based on the Competency-Based Approach (APC): modern web, Git/GitHub standards, system design, and cybersecurity.",
      },
      deliverables: {
        fr: [
          "Supports de cours et guides techniques rédigés",
          "Revues de code constructives et audits",
          "Scénarios de projets pratiques encadrés",
          "Grilles d'évaluation multicritères APC",
        ],
        en: [
          "Written courseware and technical cheat-sheets",
          "Constructive code reviews and architecture audits",
          "Structured real-world project assignments",
          "Competency-based evaluation rubrics (APC)",
        ],
      },
    },
  ],
};
