/**
 * French copy — the primary locale, served at "/".
 *
 * Wording here is also the site's main organic-search surface, so the
 * headings deliberately carry the queries we want to rank on ("boîte de
 * développement informatique en Tunisie", "société informatique Tunisie",
 * "développement mobile / web Tunisie") inside natural sentences.
 */
const fr = {
  locale: 'fr',
  htmlLang: 'fr-TN',
  ogLocale: 'fr_TN',
  // BCP 47 tag handed to Intl for weekday and month names.
  dateLocale: 'fr-FR',

  nav: {
    services: 'Services',
    about: 'Qui sommes-nous',
    work: 'Réalisations',
    process: 'Méthode',
    faq: 'FAQ',
    bookCall: 'Réserver un appel',
    menu: 'Menu',
    home: 'Accueil ToReal&Co',
    langSwitch: 'English',
    langSwitchLabel: 'Switch to English',
    skipToContent: 'Aller au contenu principal',
  },

  hero: {
    badge: 'Boîte de développement digital — disponible pour de nouveaux projets',
    h1Lead: 'Boîte de développement',
    h1Accent: 'informatique',
    h1Tail: 'en Tunisie',
    h1Sub: 'Du concept au réel, nous donnons vie à votre vision digitale.',
    lead: 'Applications mobiles, plateformes web et design produit — conçus de bout en bout, avec une démo chaque semaine jusqu’au lancement.',
    leadStrong: 'Des solutions expertes, des résultats réels.',
    ctaPrimary: 'Démarrer un projet',
    ctaSecondary: 'Voir nos réalisations',
    meta: ['Bizerte, Tunisie', 'FR / EN', 'Depuis 2024'],
    showcase: {
      badgeTop: 'Mis en',
      badgeBottom: 'production',
      command: 'release --prod',
      lines: ['tests validés', 'recette client', 'en ligne'],
    },
  },

  services: {
    eyebrow: '[01] Services',
    titleLead: 'Des solutions digitales alliant',
    titleAccent: 'innovation et expertise',
    lead: 'Trois pôles, une seule équipe — du premier wireframe à la mise en production.',
    readMore: 'En savoir plus',
    items: [
      {
        icon: 'mobile',
        number: '01',
        title: 'Développement mobile',
        description:
          'Conception et déploiement d’applications mobiles iOS et Android avec un backend intégré — de l’architecture et des API jusqu’à la publication sur l’App Store et le Play Store, avec supervision et maintenance après le lancement.',
        command: 'build ios && build android',
        href: '/services/developpement-mobile-tunisie/',
        linkLabel: 'Développement mobile en Tunisie',
      },
      {
        icon: 'web',
        number: '02',
        title: 'Développement web',
        description:
          'Sites et plateformes web responsives avec un backend sécurisé et un suivi dans la durée — architecture serveur, optimisation des performances, référencement naturel, analytics et maintenance.',
        command: 'vite build --mode production',
        href: '/services/developpement-web-tunisie/',
        linkLabel: 'Développement web en Tunisie',
      },
      {
        icon: 'design',
        number: '03',
        title: 'Automatisation & IA',
        description:
          'Conception et automatisation de workflows intelligents qui relient vos outils, vos données et les modèles d’IA — du prompt engineering à l’intégration, au déploiement et à l’optimisation continue.',
        command: 'design -> automate -> deploy',
        href: '/services/societe-informatique-tunisie/',
        linkLabel: 'Services informatiques en Tunisie',
      },
    ],
  },

  whoWeAre: {
    eyebrow: '[02] Qui sommes-nous',
    title: 'Mobile, web et design sous un même toit',
    stats: {
      capitalAchieved: 'Capital généré',
      releasedProjects: 'Projets livrés',
      collaborators: 'Collaborateurs',
      experience: 'D’expérience',
      satisfaction: 'Clients satisfaits',
      yearsSuffix: ' ans',
    },
    teamEyebrow: 'Notre équipe',
    teamTitle: 'Les personnes avec qui vous travaillerez',
    teamLead:
      'Les fondateurs sont présents sur chaque projet, de l’appel découverte jusqu’à la mise en ligne.',
    teamEmpty: 'Profils de l’équipe bientôt disponibles.',
  },

  projects: {
    eyebrow: '[03] Réalisations',
    title: 'Des produits conçus, développés et livrés',
    filterAll: 'Tous',
    filterLabel: 'Filtrer les projets',
    visit: 'Voir le projet',
    prev: 'Projets précédents',
    next: 'Projets suivants',
  },

  process: {
    eyebrow: '[04] Notre méthode',
    title: 'Un processus clair, du premier contact au lancement',
    lead: 'Aucune surprise, une collaboration totale à chaque étape.',
    cta: 'Réserver un appel',
    phases: [
      {
        key: 'frame',
        label: 'Cadrer',
        steps: [
          {
            n: '01',
            title: 'Premier contact',
            desc: 'Nous échangeons sur votre vision, vos objectifs et le périmètre du projet lors d’un appel découverte gratuit.',
            out: 'Compte rendu d’appel',
          },
          {
            n: '02',
            title: 'Cahier des charges',
            desc: 'Nous transformons l’appel en un document écrit : fonctionnalités, utilisateurs, priorités et contraintes.',
            out: 'Cahier des charges',
          },
          {
            n: '03',
            title: 'Validation du périmètre',
            desc: 'Vous validez la spécification, le planning et le budget avant la moindre ligne de code.',
            out: 'Spécification signée',
          },
        ],
      },
      {
        key: 'build',
        label: 'Construire',
        steps: [
          {
            n: '04',
            title: 'Lancement du développement',
            desc: 'Design et développement démarrent, avec un tableau partagé pour suivre chaque tâche.',
            out: 'Tableau de suivi',
          },
          {
            n: '05',
            title: 'Démos hebdomadaires',
            desc: 'Chaque semaine vous testez une version fonctionnelle ; vos retours orientent le sprint suivant.',
            out: 'Build hebdomadaire',
          },
        ],
      },
      {
        key: 'ship',
        label: 'Livrer',
        steps: [
          {
            n: '06',
            title: 'Livraison Scrum',
            desc: 'Testé, validé et mis en production, avec un accompagnement après le lancement.',
            out: 'Mise en production',
          },
        ],
      },
    ],
  },

  stack: {
    eyebrow: '[06] Stack technique',
    title: 'Des outils éprouvés, choisis pour votre produit',
    lead: 'Une seule base de code pour iOS et Android, une chaîne web moderne, et une campagne de tests avant chaque livraison.',
    keys: ['mobile', 'web', 'backend', 'design', 'qualité'],
    values: {
      inAppPurchases: 'Achats intégrés',
      restApis: 'API REST',
      wireframes: 'Wireframes',
      prototypes: 'Prototypes',
      codeReviews: 'Revues de code',
      uat: 'Recette client',
      crossDevice: 'Multi-appareils',
    },
  },

  faq: {
    eyebrow: '[07] FAQ',
    title: 'Questions fréquentes',
    leadBefore:
      'Les réponses rapides aux questions que vous vous posez. Vous ne trouvez pas ce que vous cherchez ?',
    leadCta: 'Réservez un appel',
    items: [
      {
        question: 'Comment garantissez-vous la qualité de votre travail ?',
        answer:
          'La qualité se construit à chaque étape, pas seulement à la fin. Nous menons une campagne de tests complète avant chaque livraison pour garantir un produit fiable et prêt pour vos utilisateurs.\n\nNotre approche comprend :\n• Tests fonctionnels — chaque fonctionnalité est vérifiée par rapport au cahier des charges validé.\n• Tests multi-appareils et multi-navigateurs — une expérience homogène sur mobile, tablette et ordinateur.\n• Contrôles de performance et de sécurité — temps de chargement rapides et protection des données utilisateurs.\n• Revues de code entre pairs — un second développeur relit le code avant la mise en production.\n• Recette client (UAT) — vous validez la version avant que nous livrions.\n\nNous corrigeons les anomalies au fil de l’eau et n’avançons que lorsque le niveau de qualité est atteint.',
      },
      {
        question: 'Quels outils et technologies utilisez-vous ?',
        answer:
          'Nous choisissons des technologies modernes et éprouvées selon votre projet — application mobile, plateforme web, ou les deux. Notre stack est pensée pour la performance, la montée en charge et la maintenance sur le long terme.\n\n• Frontend et mobile — React, React Native, Tailwind CSS et Vite pour des interfaces rapides et responsives.\n• Backend et API — Node.js, API REST et authentification sécurisée pour votre logique métier et vos données.\n• Design — Figma pour les wireframes, l’interface et les prototypes interactifs avant le développement.\n• Cloud et hébergement — Netlify et Render pour un déploiement fiable, le stockage et la scalabilité.\n• Paiements et analytics — Stripe, achats intégrés, et des outils comme Google Analytics ou Mixpanel pour suivre votre croissance.\n• Collaboration — Git, Jira/Linear, Discord et WhatsApp pour vous tenir informé tout au long du projet.\n\nNous retenons la combinaison adaptée à vos objectifs, pas tous les outils sur tous les projets.',
      },
      {
        question: 'Comment se déroule un projet chez vous ?',
        answer:
          'Notre processus suit des étapes claires, du premier contact à la livraison :\n\n1. Premier contact — nous échangeons sur votre vision, vos objectifs et le périmètre.\n2. Cahier des charges — nous rédigeons une spécification détaillée (fonctionnalités, planning, livrables).\n3. Validation — vous relisez et approuvez le document avant tout développement.\n4. Lancement — une fois validé, nous commençons à construire votre produit.\n5. Démos hebdomadaires — chaque semaine, une session de 30 minutes pour faire le point et recueillir vos retours.\n6. Livraison Scrum — nous appliquons les pratiques Agile/Scrum : sprints, priorisation du backlog et validation continue jusqu’au lancement.',
      },
      {
        question: 'Combien coûte le développement d’une application en Tunisie ?',
        answer:
          'Le budget dépend du périmètre, pas d’une grille tarifaire figée. Un MVP mobile ou un site vitrine sur mesure ne mobilisent ni la même équipe ni le même temps qu’une plateforme métier avec back-office, paiements et intégrations tierces.\n\nNotre façon de procéder :\n• Appel découverte gratuit (30 minutes) pour comprendre votre besoin.\n• Cahier des charges chiffré, détaillé par lot fonctionnel.\n• Un prix ferme validé avant le démarrage — pas de facturation surprise en cours de route.\n\nBasés en Tunisie, nous proposons des tarifs compétitifs par rapport au marché européen, à qualité d’exécution et de suivi équivalente.',
      },
      {
        question: 'Travaillez-vous avec des clients hors de Tunisie ?',
        answer:
          'Oui. Nous travaillons en français et en anglais, avec des clients en Tunisie, en Europe et en Amérique du Nord.\n\nL’organisation est la même quelle que soit la distance : appel découverte en visio, cahier des charges partagé, démos hebdomadaires et un canal direct (WhatsApp ou Discord) avec les fondateurs. Notre fuseau horaire (UTC+1) recouvre les heures ouvrées européennes et une partie de la matinée nord-américaine.',
      },
      {
        question: 'Comment échange-t-on sur votre projet ?',
        answer:
          'Nous démarrons par un appel découverte gratuit (environ 30 minutes) — choisissez un créneau directement sur ce site et nous confirmons par e-mail. Pendant l’appel, nous passons en revue votre idée, vos objectifs, votre budget et votre planning, puis nous définissons ensemble les prochaines étapes.\n\nVous pouvez aussi nous joindre autrement :\n• WhatsApp — pour les messages courts et les demandes rapides (+216 58 693 946).\n• Discord — rejoignez notre canal pour les revues, retours et points d’avancement pendant le développement.\n\nAprès l’appel découverte, nous vous envoyons un récapitulatif et, si besoin, une proposition pour le cahier des charges.',
      },
    ],
  },

  contact: {
    eyebrowBefore: 'Appel découverte gratuit —',
    eyebrowAfter: 'minutes',
    title: 'Prêt à lancer votre projet ?',
    lead: 'Choisissez un créneau avec les fondateurs. Nous ferons le tour de votre idée, du périmètre et des prochaines étapes.',
    ctaPrimary: 'Réserver un appel',
    meta: ['Bizerte, Tunisie', 'FR / EN'],
    cardTitle: 'Appel découverte',
    cardSubtitle: 'min · Meet, WhatsApp ou téléphone',
    open: 'Ouvert',
    nextAvailable: 'Prochaines disponibilités ·',
    checking: 'Consultation de l’agenda…',
    seeAll: 'Voir tous les créneaux',
  },

  footer: {
    tagline: 'Du concept au réel — nous donnons vie à votre vision digitale.',
    explore: 'Explorer',
    servicesTitle: 'Nos services',
    getInTouch: 'Nous contacter',
    discoveryCall: 'Appel découverte gratuit (30 min)',
    rights: '©2026 ToReal&Co',
    location: 'Bizerte, Tunisie · 37.27°N 9.87°E',
    motto: 'Des solutions expertes, des résultats réels.',
    legalNotice: 'Mentions légales',
    privacy: 'Confidentialité',
  },

  legal: {
    also: 'Voir aussi',
  },

  breadcrumb: {
    home: 'Accueil',
    services: 'Services',
  },

  booking: {
    dialogLabel: 'Réserver un appel découverte',
    close: 'Fermer',
    eyebrow: 'Appel découverte gratuit',
    title: 'Parlons de votre projet',
    duration: 'minutes',
    via: 'Google Meet, WhatsApp ou téléphone',
    languages: 'Français ou anglais',
    withFounders: 'Avec Ahmed et Skander,\nles fondateurs',
    yourSlot: 'Votre créneau',
    pickDateTime: 'Choisissez une date et une heure',
    step1: 'Étape 1 / 2',
    step2: 'Étape 2 / 2',
    prevWeek: 'Semaine précédente',
    nextWeek: 'Semaine suivante',
    dateListLabel: 'Date',
    loadingTimes: 'Chargement des créneaux…',
    loadError: 'Impossible de charger les créneaux disponibles.',
    noTimes: 'Plus de créneau ce jour-là — choisissez une autre date.',
    morning: 'Matin',
    afternoon: 'Après-midi',
    yourDetails: 'Vos coordonnées',
    name: 'Nom',
    email: 'E-mail',
    projectTypeLabel: 'De quoi avez-vous besoin ?',
    projectTypes: ['Application mobile', 'Site web', 'Design UI/UX', 'Je ne sais pas encore'],
    notesLabel: 'Quelque chose à nous signaler ?',
    optional: 'Facultatif',
    changeTime: 'Changer de créneau',
    submit: 'Confirmer la réservation',
    submitting: 'Envoi…',
    requiredFields: 'Le nom et l’e-mail sont obligatoires.',
    genericError: 'Une erreur est survenue. Merci de réessayer.',
    successTitle: 'Rendez-vous confirmé',
    successAt: 'à',
    successLocked: '— votre créneau est réservé.',
    successEmail: 'Nous vous recontacterons par e-mail à',
    successInbox: 'votre boîte de réception',
    successConfirm: 'pour confirmer les détails.',
    addToCalendar: 'Ajouter au calendrier',
    done: 'Terminé',
    icsSummary: 'Appel découverte — ToReal&Co',
    continue: 'Continuer',
    relToday: 'Aujourd’hui',
    relTomorrow: 'Demain',
    relInDays: 'Dans {n} jours',
  },

  whatsapp: {
    label: 'Discuter sur WhatsApp',
  },

  servicePage: {
    ctaTitle: 'Parlons de votre projet',
    ctaLead:
      'Un appel découverte gratuit de 30 minutes, sans engagement, pour cadrer votre besoin et estimer le budget.',
    ctaButton: 'Réserver un appel',
    whatsapp: 'WhatsApp',
    highlightsTitle: 'Ce que nous livrons',
    faqTitle: 'Questions fréquentes',
    relatedTitle: 'Nos autres services',
    mobileWorkTitle: 'Projets mobiles',
    mobileWorkLead: 'iOS et Android, une seule base de code.',
    webWorkTitle: 'Projets web',
    webWorkLead: 'Sites et plateformes React, pensés pour la perf et le SEO.',
    platforms: 'Disponible sur',
    builtWith: 'Construit avec',
  },
};

export default fr;
