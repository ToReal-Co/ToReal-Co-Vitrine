/**
 * Content for the service landing pages (FR + EN).
 *
 * These pages exist to rank: each one owns one query cluster, carries its
 * own <h1>, its own FAQ block (which becomes FAQPage structured data) and
 * links back into the homepage sections.
 */

export const SERVICE_PAGES = [
  {
    slug: 'developpement-mobile-tunisie',
    path: '/services/developpement-mobile-tunisie/',
    fr: {
      eyebrow: 'Développement mobile',
      seo: {
        title: 'Développement d’Applications Mobiles en Tunisie | ToReal&Co',
        description:
          'Applications mobiles iOS et Android en Tunisie : cadrage, design, développement React Native, publication sur les stores et maintenance. Devis gratuit.',
        keywords: [
          'développement mobile Tunisie',
          'développement application mobile Tunisie',
          'créer une application mobile Tunisie',
          'agence application mobile Tunisie',
          'développeur React Native Tunisie',
        ],
      },
      h1: 'Développement d’applications mobiles en Tunisie',
      lead: 'Nous concevons, développons et publions des applications iOS et Android pour des startups et des PME en Tunisie et en Europe — d’un MVP livré en quelques semaines à une application métier connectée à votre système d’information.',
      serviceType: 'Développement d’applications mobiles',
      sections: [
        {
          h2: 'Une équipe mobile complète, sans sous-traitance',
          body: [
            'ToReal&Co est une boîte de développement informatique basée à Bizerte, en Tunisie. Sur un projet mobile, vous travaillez directement avec les personnes qui écrivent le code : pas de chef de projet intermédiaire, pas de sous-traitance en cascade, pas de transfert de dossier entre équipes.',
            'Cette organisation change le déroulé du projet. Une question technique trouve sa réponse dans la journée, un arbitrage de périmètre se décide à deux, et la personne qui a conçu l’architecture est encore là six mois après la mise en ligne pour la faire évoluer.',
          ],
        },
        {
          h2: 'iOS et Android à partir d’une seule base de code',
          body: [
            'Nous développons en React Native. Une seule base de code alimente les deux plateformes, ce qui divise le budget et le délai par rapport à deux développements natifs séparés, tout en gardant des performances et un rendu natifs sur chaque système.',
            'Quand un besoin l’exige — traitement d’image temps réel, Bluetooth, SDK propriétaire — nous écrivons le module natif correspondant en Swift ou en Kotlin et nous le branchons sur la base commune. Le choix est fait au cadrage, jamais subi en cours de route.',
          ],
        },
        {
          h2: 'Du backend à la publication sur les stores',
          body: [
            'Une application mobile est rarement seule : il lui faut une API, une base de données, une authentification, parfois un back-office pour vos équipes. Nous livrons l’ensemble — API REST sous Node.js, authentification sécurisée, stockage des médias, tableau d’administration — et nous l’hébergeons sur une infrastructure que vous gardez.',
            'La publication fait partie du travail. Nous préparons les fiches App Store et Google Play, les captures, les mentions de confidentialité, et nous gérons les allers-retours de validation avec Apple et Google jusqu’à la mise en ligne effective.',
          ],
        },
        {
          h2: 'Paiements, notifications et analytics',
          body: [
            'Achats intégrés et abonnements via les stores, paiement par carte avec Stripe, notifications push segmentées, suivi des parcours avec Google Analytics ou Mixpanel : les briques qui transforment une application en produit exploitable sont intégrées et testées avant la livraison, pas ajoutées après coup.',
          ],
        },
      ],
      highlights: [
        'Applications iOS et Android en React Native, une seule base de code',
        'Modules natifs Swift / Kotlin quand le besoin le justifie',
        'API REST Node.js, authentification et back-office d’administration',
        'Achats intégrés, abonnements et paiement Stripe',
        'Notifications push et suivi analytics',
        'Publication App Store et Google Play prise en charge',
        'Démo fonctionnelle chaque semaine pendant tout le projet',
        'Maintenance et montées de version après le lancement',
      ],
      faq: [
        {
          question: 'Combien de temps faut-il pour développer une application mobile ?',
          answer:
            'Un MVP mobile avec authentification, un parcours principal et un back-office simple se livre généralement en 8 à 12 semaines. Une application métier avec plusieurs rôles utilisateurs, des paiements et des intégrations tierces demande plutôt 4 à 6 mois. Le planning précis est chiffré dans le cahier des charges, avant le démarrage.',
        },
        {
          question: 'Développez-vous en natif ou en React Native ?',
          answer:
            'React Native par défaut, parce qu’une base de code unique pour iOS et Android réduit le coût et le délai sans sacrifier l’expérience utilisateur. Nous écrivons des modules natifs Swift ou Kotlin lorsqu’une fonctionnalité l’impose — accès matériel avancé, SDK propriétaire, traitement temps réel. Le choix est argumenté pendant le cadrage.',
        },
        {
          question: 'Qui est propriétaire du code source ?',
          answer:
            'Vous. Le dépôt Git vous est transféré à la livraison, avec la documentation technique, les accès à l’hébergement et les comptes développeur App Store et Google Play. Aucune dépendance à notre équipe n’est nécessaire pour reprendre le projet ailleurs.',
        },
        {
          question: 'Assurez-vous la maintenance après le lancement ?',
          answer:
            'Oui. iOS et Android publient des versions majeures chaque année et imposent régulièrement de nouvelles règles aux stores. Nous proposons un contrat de maintenance couvrant les montées de version, les correctifs, la supervision des erreurs en production et les évolutions fonctionnelles.',
        },
      ],
    },
    en: {
      eyebrow: 'Mobile development',
      seo: {
        title: 'Mobile App Development in Tunisia | ToReal&Co',
        description:
          'iOS and Android apps in Tunisia: scoping, design, React Native development, store publishing and maintenance. Free quote.',
        keywords: [
          'mobile app development Tunisia',
          'React Native developer Tunisia',
          'iOS Android agency Tunisia',
          'build a mobile app Tunisia',
        ],
      },
      h1: 'Mobile app development in Tunisia',
      lead: 'We design, build and ship iOS and Android apps for startups and SMEs in Tunisia and Europe — from an MVP delivered in a few weeks to a business app connected to your information system.',
      serviceType: 'Mobile app development',
      sections: [
        {
          h2: 'A full mobile team, with no subcontracting',
          body: [
            'ToReal&Co is a software studio based in Bizerte, Tunisia. On a mobile project, you work directly with the people writing the code: no account manager in the middle, no cascading subcontractors, no hand-offs between teams.',
            'That changes how the project runs. A technical question gets answered the same day, a scope decision is made together, and the person who designed the architecture is still there six months after launch to evolve it.',
          ],
        },
        {
          h2: 'iOS and Android from a single codebase',
          body: [
            'We build with React Native. One codebase feeds both platforms, which cuts budget and timeline compared with two separate native builds, while keeping native performance and feel on each system.',
            'When a need requires it — real-time image processing, Bluetooth, a proprietary SDK — we write the matching native module in Swift or Kotlin and plug it into the shared base. That choice is made during scoping, never forced mid-project.',
          ],
        },
        {
          h2: 'From backend to store publishing',
          body: [
            'A mobile app is rarely alone: it needs an API, a database, authentication, sometimes an admin back-office for your teams. We deliver the whole stack — REST API on Node.js, secure auth, media storage, admin dashboard — hosted on infrastructure you keep.',
            'Publishing is part of the job. We prepare App Store and Google Play listings, screenshots, privacy notices, and we handle review rounds with Apple and Google until the app is live.',
          ],
        },
        {
          h2: 'Payments, notifications and analytics',
          body: [
            'In-app purchases and subscriptions via the stores, card payments with Stripe, segmented push notifications, journey tracking with Google Analytics or Mixpanel: the building blocks that turn an app into a usable product are integrated and tested before delivery, not bolted on afterwards.',
          ],
        },
      ],
      highlights: [
        'iOS and Android apps in React Native, one codebase',
        'Native Swift / Kotlin modules when the need justifies it',
        'Node.js REST API, authentication and admin back-office',
        'In-app purchases, subscriptions and Stripe payments',
        'Push notifications and analytics tracking',
        'App Store and Google Play publishing handled',
        'Working demo every week throughout the project',
        'Maintenance and version upgrades after launch',
      ],
      faq: [
        {
          question: 'How long does it take to build a mobile app?',
          answer:
            'A mobile MVP with authentication, one main journey and a simple back-office usually ships in 8 to 12 weeks. A business app with several user roles, payments and third-party integrations typically takes 4 to 6 months. The precise timeline is costed in the requirements document before we start.',
        },
        {
          question: 'Do you build native or React Native?',
          answer:
            'React Native by default, because a single codebase for iOS and Android cuts cost and time without sacrificing UX. We write native Swift or Kotlin modules when a feature requires it — advanced hardware access, a proprietary SDK, real-time processing. The choice is argued during scoping.',
        },
        {
          question: 'Who owns the source code?',
          answer:
            'You do. The Git repository is transferred at delivery, along with technical documentation, hosting access and App Store / Google Play developer accounts. You do not need our team to take the project elsewhere.',
        },
        {
          question: 'Do you provide maintenance after launch?',
          answer:
            'Yes. iOS and Android ship major versions every year and regularly change store rules. We offer a maintenance contract covering upgrades, fixes, production error monitoring and functional evolutions.',
        },
      ],
    },
  },

  {
    slug: 'developpement-web-tunisie',
    path: '/services/developpement-web-tunisie/',
    fr: {
      eyebrow: 'Développement web',
      seo: {
        title: 'Développement Web & Création de Site en Tunisie | ToReal&Co',
        description:
          'Agence de développement web en Tunisie : sites vitrines, e-commerce et applications sur mesure en React. Performance, SEO et maintenance inclus.',
        keywords: [
          'développement web Tunisie',
          'création site web Tunisie',
          'agence web Tunisie',
          'création site internet Tunisie',
          'développeur web Tunisie',
        ],
      },
      h1: 'Développement web et création de sites internet en Tunisie',
      lead: 'Sites vitrines, boutiques en ligne et applications web métier développés sur mesure — pensés pour la vitesse, le référencement naturel et une maintenance simple dans la durée.',
      serviceType: 'Développement web et création de sites internet',
      sections: [
        {
          h2: 'Du site vitrine à l’application web métier',
          body: [
            'Nous couvrons trois familles de projets web. Le site vitrine, qui doit charger vite, convertir et être trouvé sur Google. La boutique en ligne, avec catalogue, paiement et gestion des commandes. Et l’application web métier — espace client, tableau de bord, outil interne — qui remplace un tableur ou un logiciel vieillissant.',
            'Ce qui nous distingue d’une agence web classique : nous ne nous arrêtons pas à la vitrine. L’équipe qui dessine vos pages est celle qui écrit le backend, ce qui évite la rupture habituelle entre le site livré et l’outil métier qui devait l’accompagner.',
            'Dans les trois cas, le développement est sur mesure. Nous n’installons pas un thème acheté sur lequel vous devrez composer pendant des années : l’interface suit votre marque et vos parcours, et le code reste lisible pour quiconque le reprendra.',
          ],
        },
        {
          h2: 'La performance n’est pas une option',
          body: [
            'Un site lent perd des visiteurs avant même d’être vu, et Google intègre les Core Web Vitals à son classement. Nous construisons avec React et Vite, nous découpons le JavaScript pour ne charger que le nécessaire, nous servons les images en WebP dimensionnées, et nous pré-rendons le HTML pour que le contenu soit lisible dès la première réponse du serveur.',
            'Ce site en est lui-même l’exemple : le HTML livré contient déjà les titres et les textes, avant même que le JavaScript ne s’exécute.',
          ],
        },
        {
          h2: 'Un référencement naturel intégré dès la conception',
          body: [
            'Le SEO se joue dans la structure, pas dans un module ajouté à la fin. Nous livrons une hiérarchie de titres cohérente, des balises title et meta description rédigées page par page, des URL lisibles, un plan de site XML, un fichier robots.txt maîtrisé et des données structurées Schema.org adaptées à votre activité.',
            'Pour une activité locale, nous ajoutons le balisage LocalBusiness, les coordonnées géographiques et la cohérence des informations avec votre fiche Google Business Profile — les signaux qui déterminent votre présence dans le pack local.',
          ],
        },
        {
          h2: 'Hébergement, sécurité et suivi',
          body: [
            'Nous déployons sur Netlify ou Render avec certificat HTTPS, déploiement continu depuis Git et retour arrière possible en un clic. Les sauvegardes, la supervision des erreurs et les mises à jour de sécurité des dépendances font partie du contrat de maintenance.',
          ],
        },
      ],
      highlights: [
        'Sites vitrines, e-commerce et applications web sur mesure',
        'Développement React, Vite et Tailwind CSS',
        'HTML pré-rendu pour un référencement et un affichage immédiats',
        'Optimisation des Core Web Vitals (LCP, CLS, INP)',
        'Données structurées Schema.org et plan de site XML',
        'Back-office d’administration pour gérer vos contenus',
        'Hébergement HTTPS, déploiement continu et sauvegardes',
        'Suivi analytics et rapports de performance',
      ],
      faq: [
        {
          question: 'Combien coûte la création d’un site internet en Tunisie ?',
          answer:
            'Le prix dépend du périmètre. Un site vitrine sur mesure de quelques pages, optimisé pour le référencement, se situe dans une fourchette nettement inférieure à une boutique en ligne avec gestion de stock ou à une application web métier avec plusieurs profils utilisateurs. Nous chiffrons lot par lot dans le cahier des charges et le prix est ferme avant le démarrage.',
        },
        {
          question: 'Utilisez-vous WordPress ?',
          answer:
            'Rarement. WordPress convient à un blog éditorial alimenté quotidiennement, mais il apporte un poids, une surface de sécurité et une dépendance à des extensions qui pénalisent la plupart des projets. Nous développons en React avec un back-office sur mesure : plus rapide, plus sûr, et limité exactement aux champs que vous devez modifier.',
        },
        {
          question: 'Pourrai-je modifier le contenu moi-même ?',
          answer:
            'Oui. Chaque projet est livré avec une interface d’administration où vous gérez les textes, les images, les articles et les éléments qui bougent souvent. Elle est volontairement réduite à ce qui vous est utile, pour rester simple à prendre en main.',
        },
        {
          question: 'Prenez-vous en charge la refonte d’un site existant ?',
          answer:
            'Oui, et c’est une part importante de notre activité. Une refonte demande un soin particulier sur les redirections 301 : sans elles, le référencement acquis par l’ancien site se perd. Nous établissons le plan de redirection page par page avant la bascule et nous surveillons l’indexation dans les semaines qui suivent.',
        },
      ],
    },
    en: {
      eyebrow: 'Web development',
      seo: {
        title: 'Web Development & Website Creation in Tunisia | ToReal&Co',
        description:
          'Web development agency in Tunisia: marketing sites, e-commerce and custom React apps. Performance, SEO and maintenance included.',
        keywords: [
          'web development Tunisia',
          'website creation Tunisia',
          'web agency Tunisia',
          'React developer Tunisia',
        ],
      },
      h1: 'Web development and website creation in Tunisia',
      lead: 'Marketing sites, online stores and business web apps built to measure — designed for speed, organic search and simple long-term maintenance.',
      serviceType: 'Web development and website creation',
      sections: [
        {
          h2: 'From marketing site to business web app',
          body: [
            'We cover three kinds of web projects. The marketing site that must load fast, convert and rank on Google. The online store with catalogue, payments and order management. And the business web app — client portal, dashboard, internal tool — that replaces a spreadsheet or ageing software.',
            'What sets us apart from a classic web agency: we do not stop at the front door. The team that designs your pages is the same team that writes the backend, which avoids the usual break between the shipped site and the business tool that was meant to come with it.',
            'In all three cases, development is custom. We do not install a bought theme you will have to live with for years: the interface follows your brand and journeys, and the code stays readable for whoever picks it up next.',
          ],
        },
        {
          h2: 'Performance is not optional',
          body: [
            'A slow site loses visitors before it is even seen, and Google folds Core Web Vitals into ranking. We build with React and Vite, split JavaScript so only what is needed loads, serve sized WebP images, and prerender HTML so content is readable on the first server response.',
            'This site is itself the example: the delivered HTML already contains the titles and copy before JavaScript runs.',
          ],
        },
        {
          h2: 'SEO built in from the start',
          body: [
            'SEO is won in the structure, not in a module added at the end. We deliver a coherent heading hierarchy, page-by-page title and meta description tags, readable URLs, an XML sitemap, a controlled robots.txt and Schema.org structured data suited to your activity.',
            'For a local business, we add LocalBusiness markup, geographic coordinates and consistency with your Google Business Profile — the signals that drive presence in the local pack.',
          ],
        },
        {
          h2: 'Hosting, security and follow-up',
          body: [
            'We deploy on Netlify or Render with HTTPS, continuous deployment from Git and one-click rollback. Backups, error monitoring and dependency security updates are part of the maintenance contract.',
          ],
        },
      ],
      highlights: [
        'Custom marketing sites, e-commerce and web apps',
        'React, Vite and Tailwind CSS development',
        'Prerendered HTML for immediate SEO and display',
        'Core Web Vitals optimisation (LCP, CLS, INP)',
        'Schema.org structured data and XML sitemap',
        'Admin back-office to manage your content',
        'HTTPS hosting, continuous deployment and backups',
        'Analytics tracking and performance reports',
      ],
      faq: [
        {
          question: 'How much does a website cost in Tunisia?',
          answer:
            'Price depends on scope. A custom few-page marketing site optimised for search sits in a clearly lower range than an online store with stock management or a business web app with several user roles. We cost feature by feature in the requirements document and the price is firm before we start.',
        },
        {
          question: 'Do you use WordPress?',
          answer:
            'Rarely. WordPress suits an editorial blog updated daily, but it adds weight, security surface and extension dependency that hurt most projects. We build in React with a custom back-office: faster, safer, and limited exactly to the fields you need to edit.',
        },
        {
          question: 'Will I be able to edit the content myself?',
          answer:
            'Yes. Every project ships with an admin interface where you manage texts, images, articles and the pieces that change often. It is deliberately reduced to what you need, so it stays easy to learn.',
        },
        {
          question: 'Do you handle redesigns of existing sites?',
          answer:
            'Yes, and it is a large part of our work. A redesign needs careful 301 redirects: without them, the ranking earned by the old site is lost. We map redirects page by page before cutover and monitor indexing in the weeks that follow.',
        },
      ],
    },
  },

  {
    slug: 'societe-informatique-tunisie',
    path: '/services/societe-informatique-tunisie/',
    fr: {
      eyebrow: 'Services informatiques',
      seo: {
        title: 'Société Informatique en Tunisie — Développement | ToReal&Co',
        description:
          'Société de développement informatique en Tunisie : logiciels sur mesure, applications web et mobiles, automatisation et IA. Équipe basée à Bizerte.',
        keywords: [
          'informatique Tunisie',
          'société informatique Tunisie',
          'boîte de développement informatique Tunisie',
          'entreprise informatique Tunisie',
          'développement logiciel sur mesure Tunisie',
        ],
      },
      h1: 'Société de développement informatique en Tunisie',
      lead: 'ToReal&Co est une boîte de développement informatique installée à Bizerte. Nous construisons des logiciels sur mesure, des applications web et mobiles, et nous automatisons les processus métier des entreprises qui nous font confiance en Tunisie et en Europe.',
      serviceType: 'Services de développement informatique',
      sections: [
        {
          h2: 'Ce que recouvre notre activité informatique',
          body: [
            'Une société informatique en Tunisie peut recouvrir des métiers très différents. Le nôtre tient en quatre terrains, et nous nous y tenons.',
            'Nous intervenons sur le développement logiciel sur mesure, quand aucun outil du marché ne correspond à votre façon de travailler. Sur les applications web et mobiles, pour porter votre activité auprès de vos clients. Sur l’intégration et l’automatisation, pour faire dialoguer des outils qui s’ignorent. Et sur l’intelligence artificielle appliquée, là où elle fait gagner du temps plutôt qu’elle ne fait joli.',
            'Nous ne faisons pas d’infogérance, ni de vente de matériel, ni de support bureautique. Ce périmètre volontairement resserré est ce qui nous permet d’être bons sur le reste.',
          ],
        },
        {
          h2: 'Une boîte de développement, pas une société de placement',
          body: [
            'Beaucoup de sociétés informatiques en Tunisie fonctionnent en régie : elles placent des développeurs chez vous et facturent des jours. Notre modèle est différent. Nous prenons un engagement sur un produit livré, avec un périmètre écrit, un prix ferme et une date.',
            'La conséquence pour vous : le risque de dérive budgétaire est porté par nous, pas par votre trésorerie. La conséquence pour nous : nous avons tout intérêt à cadrer sérieusement avant de commencer, ce qui est précisément ce qui fait réussir un projet.',
          ],
        },
        {
          h2: 'Automatisation et intelligence artificielle appliquée',
          body: [
            'Beaucoup d’entreprises perdent des heures chaque semaine sur des tâches répétitives : ressaisie entre deux logiciels, tri de documents, rédaction de réponses semblables, consolidation de fichiers. Ces tâches sont automatisables aujourd’hui, avec un retour sur investissement mesurable en quelques mois.',
            'Nous concevons ces workflows de bout en bout : connexion à vos outils existants, traitement par des modèles de langage lorsque c’est pertinent, contrôle humain aux étapes sensibles, et supervision pour vérifier que le système reste fiable dans le temps.',
          ],
        },
        {
          h2: 'Travailler avec une équipe en Tunisie',
          body: [
            'La Tunisie forme chaque année un grand nombre d’ingénieurs, et le différentiel de coût avec l’Europe de l’Ouest reste important à compétence équivalente. Pour un client européen, cela représente une économie substantielle sur un projet, sans les contraintes de décalage horaire d’une équipe asiatique : nous sommes à UTC+1, soit les mêmes heures ouvrées qu’à Paris, Bruxelles ou Genève.',
            'Nous travaillons en français et en anglais, et nous facturons en dinar, en euro ou en dollar selon ce qui vous arrange.',
          ],
        },
      ],
      highlights: [
        'Développement de logiciels métier sur mesure',
        'Applications web et mobiles iOS / Android',
        'Automatisation des processus et intégration entre outils',
        'Intégration d’IA et de modèles de langage dans vos flux',
        'Reprise et modernisation d’applications existantes',
        'Engagement sur un produit livré, à prix ferme',
        'Équipe à Bizerte, fuseau horaire européen (UTC+1)',
        'Travail en français et en anglais',
      ],
      faq: [
        {
          question: 'Qu’est-ce qui distingue ToReal&Co des autres sociétés informatiques en Tunisie ?',
          answer:
            'Deux choses. D’abord le modèle : nous nous engageons sur un produit livré à prix ferme, pas sur des jours de régie facturés. Ensuite la taille : vous parlez directement aux fondateurs, qui sont aussi ceux qui construisent. Cela convient parfaitement aux projets qui demandent de la réactivité, beaucoup moins aux organisations qui cherchent à renforcer une équipe interne de trente personnes.',
        },
        {
          question: 'Travaillez-vous avec des entreprises européennes ?',
          answer:
            'Oui, c’est une part importante de notre activité. Le fuseau horaire tunisien (UTC+1) correspond aux heures ouvrées européennes, nous travaillons en français et en anglais, et nous pouvons facturer en euro. Le déroulé du projet est identique à celui d’un client local : appel découverte, cahier des charges validé, démos hebdomadaires.',
        },
        {
          question: 'Pouvez-vous reprendre un projet commencé par une autre équipe ?',
          answer:
            'Oui, après un audit technique. Nous examinons le code, l’architecture et la dette accumulée, puis nous vous remettons un état des lieux honnête avec deux chiffrages : reprendre l’existant, ou repartir d’une base saine. Il arrive que la seconde option soit la moins chère à horizon dix-huit mois, et nous le disons quand c’est le cas.',
        },
        {
          question: 'Proposez-vous de la maintenance et du support ?',
          answer:
            'Oui, sous forme de contrat mensuel : supervision des erreurs en production, mises à jour de sécurité, correctifs et une enveloppe d’évolutions fonctionnelles. Les délais d’intervention sont définis dans le contrat selon la criticité de votre application.',
        },
        {
          question: 'Où êtes-vous situés en Tunisie ?',
          answer:
            'Notre équipe est basée à Bizerte, au nord du pays, à environ une heure de Tunis. Nous intervenons partout en Tunisie et travaillons à distance avec nos clients européens, avec des déplacements sur site quand le projet le justifie.',
        },
      ],
    },
    en: {
      eyebrow: 'IT services',
      seo: {
        title: 'Software Company in Tunisia — Development | ToReal&Co',
        description:
          'Software development company in Tunisia: custom software, web and mobile apps, automation and AI. Team based in Bizerte.',
        keywords: [
          'software company Tunisia',
          'IT company Tunisia',
          'custom software development Tunisia',
          'AI automation Tunisia',
        ],
      },
      h1: 'Software development company in Tunisia',
      lead: 'ToReal&Co is a software studio based in Bizerte. We build custom software, web and mobile apps, and we automate business processes for companies that trust us in Tunisia and Europe.',
      serviceType: 'Software development services',
      sections: [
        {
          h2: 'What our IT work covers',
          body: [
            'An IT company in Tunisia can mean very different jobs. Ours sits on four lanes, and we stick to them.',
            'We handle custom software when no off-the-shelf tool matches how you work. Web and mobile apps to bring your business to customers. Integration and automation so tools that ignore each other start talking. And applied AI where it saves time rather than looking fancy.',
            'We do not do managed IT, hardware sales or desktop support. That deliberately tight scope is what lets us be strong on the rest.',
          ],
        },
        {
          h2: 'A product studio, not a body shop',
          body: [
            'Many IT companies in Tunisia work time-and-materials: they place developers with you and bill days. Our model is different. We commit to a delivered product, with a written scope, a firm price and a date.',
            'For you, budget overrun risk sits with us, not your cash flow. For us, we have every reason to scope seriously before we start — which is exactly what makes a project succeed.',
          ],
        },
        {
          h2: 'Automation and applied artificial intelligence',
          body: [
            'Many companies lose hours every week on repetitive tasks: re-entering data between two tools, sorting documents, drafting similar replies, consolidating files. Those tasks can be automated today, with ROI measurable in a few months.',
            'We design these workflows end to end: connection to your existing tools, language-model processing when it helps, human review at sensitive steps, and monitoring so the system stays reliable over time.',
          ],
        },
        {
          h2: 'Working with a team in Tunisia',
          body: [
            'Tunisia trains a large number of engineers every year, and the cost gap with Western Europe remains significant at equivalent skill. For a European client, that means a real saving on a project, without the timezone constraints of an Asian team: we are on UTC+1, the same business hours as Paris, Brussels or Geneva.',
            'We work in French and English, and we invoice in dinar, euro or dollar — whichever suits you.',
          ],
        },
      ],
      highlights: [
        'Custom business software development',
        'Web and iOS / Android mobile apps',
        'Process automation and tool integration',
        'AI and language models in your workflows',
        'Takeover and modernisation of existing apps',
        'Commitment to a delivered product at a firm price',
        'Team in Bizerte, European timezone (UTC+1)',
        'Work in French and English',
      ],
      faq: [
        {
          question: 'What sets ToReal&Co apart from other IT companies in Tunisia?',
          answer:
            'Two things. First the model: we commit to a delivered product at a firm price, not billed staff-augmentation days. Second the size: you talk directly to the founders, who also build. That fits projects that need reactivity; it fits less well organisations looking to staff an internal team of thirty.',
        },
        {
          question: 'Do you work with European companies?',
          answer:
            'Yes, it is a large part of our work. The Tunisian timezone (UTC+1) matches European business hours, we work in French and English, and we can invoice in euro. The project run is identical to a local client: discovery call, validated requirements, weekly demos.',
        },
        {
          question: 'Can you take over a project started by another team?',
          answer:
            'Yes, after a technical audit. We review the code, architecture and accumulated debt, then give you an honest status with two quotes: continue on the existing base, or start from a clean one. Sometimes the second option is cheaper over eighteen months, and we say so when it is.',
        },
        {
          question: 'Do you offer maintenance and support?',
          answer:
            'Yes, as a monthly contract: production error monitoring, security updates, fixes and a budget for functional evolutions. Response times are defined in the contract based on how critical your app is.',
        },
        {
          question: 'Where are you based in Tunisia?',
          answer:
            'Our team is based in Bizerte, in the north of the country, about an hour from Tunis. We work across Tunisia and remotely with European clients, with on-site visits when the project justifies it.',
        },
      ],
    },
  },
];

/** Flatten a page to a single locale for rendering and SEO. */
export function getServicePage(slug, locale = 'fr') {
  const page = SERVICE_PAGES.find((entry) => entry.slug === slug);
  if (!page) return null;
  const copy = page[locale] || page.fr;
  return {
    slug: page.slug,
    path: page.path,
    locale: locale === 'en' ? 'en' : 'fr',
    ...copy,
  };
}

/** All service pages flattened for one locale (related links, listings). */
export function localizedServicePages(locale = 'fr') {
  return SERVICE_PAGES.map((page) => getServicePage(page.slug, locale)).filter(Boolean);
}
