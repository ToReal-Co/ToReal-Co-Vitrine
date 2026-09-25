/**
 * English copy — secondary locale, served at "/en/".
 * Mirrors the key structure of fr.js exactly; any key added there must be
 * added here too, otherwise the English build falls back to an undefined.
 */
const en = {
  locale: 'en',
  htmlLang: 'en',
  ogLocale: 'en_US',
  // BCP 47 tag handed to Intl for weekday and month names.
  dateLocale: 'en-GB',

  nav: {
    services: 'Services',
    about: 'Who we are',
    work: 'Our projects',
    process: 'How we work',
    faq: 'FAQ',
    bookCall: 'Book a call',
    menu: 'Menu',
    home: 'ToReal&Co home',
    langSwitch: 'Français',
    langSwitchLabel: 'Passer en français',
    skipToContent: 'Skip to main content',
  },

  hero: {
    badge: 'Digital product studio — open for new projects',
    h1Lead: 'Software development',
    h1Accent: 'company',
    h1Tail: 'in Tunisia',
    h1Sub: 'From concept to real — bring your digital vision to life.',
    lead: 'Mobile apps, web platforms and product design — built end to end, with weekly demos until launch.',
    leadStrong: 'Expert solutions, real results!',
    ctaPrimary: 'Start a project',
    ctaSecondary: 'See our work',
    meta: ['Bizerte, Tunisia', 'FR / EN', 'Since 2024'],
    showcase: {
      badgeTop: 'Shipped to',
      badgeBottom: 'production',
      command: 'release --prod',
      lines: ['tests passed', 'client sign-off', 'live'],
    },
  },

  services: {
    eyebrow: '[01] Services',
    titleLead: 'Crafting digital solutions with',
    titleAccent: 'innovation and expertise',
    lead: 'Three practices, one team — from the first wireframe to the production release.',
    readMore: 'Learn more',
    items: [
      {
        icon: 'mobile',
        number: '01',
        title: 'Mobile Development',
        description:
          'Building and deploying mobile apps with seamless backend integration — from architecture and API design through App Store and Play Store release, with monitoring and support after launch.',
        command: 'build ios && build android',
        href: '/en/services/developpement-mobile-tunisie/',
        linkLabel: 'Mobile development in Tunisia',
      },
      {
        icon: 'web',
        number: '02',
        title: 'Web Development',
        description:
          'Responsive websites with a secure backend and ongoing support — covering everything from server architecture and performance tuning to SEO, analytics and long-term maintenance.',
        command: 'vite build --mode production',
        href: '/en/services/developpement-web-tunisie/',
        linkLabel: 'Web development in Tunisia',
      },
      {
        icon: 'design',
        number: '03',
        title: 'AI Workflows',
        description:
          'Designing and automating intelligent workflows that connect your tools, data and AI models — from prompt design and integration to deployment, monitoring and continuous optimization.',
        command: 'design -> automate -> deploy',
        href: '/en/services/societe-informatique-tunisie/',
        linkLabel: 'IT services in Tunisia',
      },
    ],
  },

  whoWeAre: {
    eyebrow: '[02] Who we are',
    title: 'Mobile, web and design, under one roof',
    stats: {
      capitalAchieved: 'Capital achieved',
      releasedProjects: 'Released projects',
      collaborators: 'Collaborators',
      experience: 'Of experience',
      satisfaction: 'Client satisfaction',
      yearsSuffix: ' yrs',
    },
    teamEyebrow: 'Our team',
    teamTitle: 'The people you’ll work with',
    teamLead: 'The founders are on every project, from the discovery call to the release.',
    teamEmpty: 'Team profiles coming soon.',
  },

  projects: {
    eyebrow: '[03] Our projects',
    title: 'Products we designed, built and shipped',
    filterAll: 'All',
    filterLabel: 'Filter projects',
    visit: 'View project',
    prev: 'Previous projects',
    next: 'Next projects',
  },

  process: {
    eyebrow: '[04] How we work',
    title: 'A clear process, from first contact to launch',
    lead: 'No surprises, full collaboration at every step.',
    cta: 'Book a call',
    phases: [
      {
        key: 'frame',
        label: 'Define',
        steps: [
          {
            n: '01',
            title: 'Initial contact',
            desc: 'We discuss your vision, goals, and project scope in a free discovery call.',
            out: 'Call summary',
          },
          {
            n: '02',
            title: 'Requirements document',
            desc: 'We turn the call into a written brief: features, users, priorities and constraints.',
            out: 'Requirements doc',
          },
          {
            n: '03',
            title: 'Specification validation',
            desc: 'You approve the specification, timeline and budget before any code is written.',
            out: 'Signed spec',
          },
        ],
      },
      {
        key: 'build',
        label: 'Build',
        steps: [
          {
            n: '04',
            title: 'Development kickoff',
            desc: 'Design and development start, with a shared board to follow every task.',
            out: 'Project board',
          },
          {
            n: '05',
            title: 'Weekly demos',
            desc: 'Every week you test working software; your feedback shapes the next sprint.',
            out: 'Weekly build',
          },
        ],
      },
      {
        key: 'ship',
        label: 'Ship',
        steps: [
          {
            n: '06',
            title: 'Scrum delivery',
            desc: 'Tested, signed off and released to production, with support after launch.',
            out: 'Production release',
          },
        ],
      },
    ],
  },

  stack: {
    eyebrow: '[06] Tech stack',
    title: 'Proven tools, chosen for your product',
    lead: 'One codebase for iOS and Android, a modern web toolchain, and a testing routine that runs before every release.',
    keys: ['mobile', 'web', 'backend', 'design', 'quality'],
    values: {
      inAppPurchases: 'In-app purchases',
      restApis: 'REST APIs',
      wireframes: 'Wireframes',
      prototypes: 'Prototypes',
      codeReviews: 'Code reviews',
      uat: 'UAT',
      crossDevice: 'Cross-device',
    },
  },

  faq: {
    eyebrow: '[07] FAQ',
    title: 'Frequently asked questions',
    leadBefore: 'Quick answers to questions you may have. Can’t find what you’re looking for?',
    leadCta: 'Book a call now',
    items: [
      {
        question: 'How do you ensure the quality of your work?',
        answer:
          'Quality is built in at every stage—not just at the end. We run a full testing campaign before each release to make sure your product is reliable and ready for users.\n\nOur approach includes:\n• Functional testing — every feature is checked against the approved specification.\n• Cross-device & cross-browser testing — consistent experience on mobile, tablet, and desktop.\n• Performance & security checks — fast load times and protection of user data.\n• Peer code reviews — a second developer reviews the code before it ships.\n• User acceptance testing (UAT) — you validate the build before we deliver.\n\nWe fix issues as we find them and only move forward when the quality bar is met.',
      },
      {
        question: 'What tools and technologies do you use?',
        answer:
          'We choose modern, proven technologies based on your project—mobile app, web platform, or both. Our stack is built for performance, scalability, and long-term maintenance.\n\n• Frontend & mobile — React, React Native, Tailwind CSS, and Vite for fast, responsive interfaces on web and mobile.\n• Backend & APIs — Node.js, REST APIs, and secure authentication for your business logic and data.\n• Design — Figma for wireframes, UI design, and interactive prototypes before development starts.\n• Cloud & hosting — Netlify and Render for reliable deployment, storage, and scaling.\n• Payments & analytics — Stripe, in-app purchases, and tools like Google Analytics or Mixpanel to track growth.\n• Collaboration — Git, Jira/Linear, Discord, and WhatsApp to keep you updated throughout the project.\n\nWe pick the right combination for your goals—not every tool on every project.',
      },
      {
        question: 'How does your project process work?',
        answer:
          'Our process follows clear steps from first contact to delivery:\n\n1. Initial contact — We discuss your vision, goals, and project scope.\n2. Requirements document — We draft a detailed specification (features, timeline, and deliverables).\n3. Specification validation — You review and approve the document before any development starts.\n4. Development kickoff — Once validated, we begin building your product.\n5. Weekly demos — Every week, a 30-minute session to review progress and gather your feedback.\n6. Scrum delivery — We apply Agile/Scrum practices: sprints, backlog prioritization, and continuous validation until launch.',
      },
      {
        question: 'How much does it cost to build an app in Tunisia?',
        answer:
          'Budget follows scope, not a fixed price list. A mobile MVP or a bespoke marketing site does not take the same team or the same time as a business platform with a back office, payments and third-party integrations.\n\nHow we handle it:\n• A free 30-minute discovery call to understand what you need.\n• A costed requirements document, broken down feature by feature.\n• A firm price agreed before we start — no surprise invoices along the way.\n\nBased in Tunisia, we offer rates that are competitive against the European market, at the same standard of delivery and follow-up.',
      },
      {
        question: 'Do you work with clients outside Tunisia?',
        answer:
          'Yes. We work in French and English, with clients in Tunisia, Europe and North America.\n\nThe setup is the same whatever the distance: a discovery call over video, a shared requirements document, weekly demos and a direct channel (WhatsApp or Discord) with the founders. Our timezone (UTC+1) covers European business hours and part of the North American morning.',
      },
      {
        question: 'How will we discuss your project?',
        answer:
          'We start with a free discovery call (about 30 minutes) — pick a slot right on this site and we’ll confirm by email. During the call, we review your idea, goals, budget, and timeline, and outline the next steps together.\n\nYou can also reach us in other ways:\n• WhatsApp — for quick messages and short requests (+216 58 693 946).\n• Discord — join our channel for reviews, feedback, and project updates during development.\n\nAfter the discovery call, we follow up with a summary and, if needed, a proposal for the requirements document.',
      },
    ],
  },

  contact: {
    eyebrowBefore: 'Free discovery call —',
    eyebrowAfter: 'minutes',
    title: 'Ready to create your project?',
    lead: 'Pick a time with the founders. We’ll talk through your idea, scope and next steps.',
    ctaPrimary: 'Book a call',
    meta: ['Bizerte, Tunisia', 'FR / EN'],
    cardTitle: 'Discovery call',
    cardSubtitle: 'min · Meet, WhatsApp or phone',
    open: 'Open',
    nextAvailable: 'Next available ·',
    checking: 'Checking the calendar…',
    seeAll: 'See all times',
  },

  footer: {
    tagline: 'From Concept to Real — bring your digital vision to life.',
    explore: 'Explore',
    servicesTitle: 'Our services',
    getInTouch: 'Get in touch',
    discoveryCall: 'Free 30-min discovery call',
    rights: '©2026 ToReal&Co',
    location: 'Bizerte, Tunisia · 37.27°N 9.87°E',
    motto: 'Expert solutions, real results!',
    legalNotice: 'Legal notice',
    privacy: 'Privacy',
  },

  legal: {
    also: 'Also see',
  },

  breadcrumb: {
    home: 'Home',
    services: 'Services',
  },

  booking: {
    dialogLabel: 'Book a discovery call',
    close: 'Close',
    eyebrow: 'Free discovery call',
    title: 'Let’s talk about your project',
    duration: 'minutes',
    via: 'Google Meet, WhatsApp or phone',
    languages: 'French or English',
    withFounders: 'With Ahmed & Skander,\nthe founders',
    yourSlot: 'Your slot',
    pickDateTime: 'Pick a date and time',
    step1: 'Step 1 / 2',
    step2: 'Step 2 / 2',
    prevWeek: 'Previous week',
    nextWeek: 'Next week',
    dateListLabel: 'Date',
    loadingTimes: 'Loading available times…',
    loadError: "Couldn't load available times.",
    noTimes: 'No times left on this day — pick another date.',
    morning: 'Morning',
    afternoon: 'Afternoon',
    yourDetails: 'Your details',
    name: 'Name',
    email: 'Email',
    projectTypeLabel: 'What do you need?',
    projectTypes: ['Mobile app', 'Website', 'UI/UX design', 'Not sure yet'],
    notesLabel: 'Anything we should know?',
    optional: 'Optional',
    changeTime: 'Change time',
    submit: 'Confirm booking',
    submitting: 'Sending…',
    requiredFields: 'Name and email are required.',
    genericError: 'Something went wrong. Please try again.',
    successTitle: 'Booking confirmed',
    successAt: 'at',
    successLocked: '— your slot is locked in.',
    successEmail: 'We’ll get back to you by email at',
    successInbox: 'your inbox',
    successConfirm: 'to confirm the details.',
    addToCalendar: 'Add to calendar',
    done: 'Done',
    icsSummary: 'Discovery call — ToReal&Co',
    continue: 'Continue',
    relToday: 'Today',
    relTomorrow: 'Tomorrow',
    relInDays: 'In {n} days',
  },

  whatsapp: {
    label: 'Chat on WhatsApp',
  },

  servicePage: {
    ctaTitle: 'Let’s talk about your project',
    ctaLead:
      'A free, no-commitment 30-minute discovery call to scope what you need and estimate the budget.',
    ctaButton: 'Book a call',
    whatsapp: 'WhatsApp',
    highlightsTitle: 'What we deliver',
    faqTitle: 'Frequently asked questions',
    relatedTitle: 'Our other services',
    mobileWorkTitle: 'Mobile projects',
    mobileWorkLead: 'iOS and Android, one codebase.',
    webWorkTitle: 'Web projects',
    webWorkLead: 'React sites and platforms, built for speed and SEO.',
    platforms: 'Available on',
    builtWith: 'Built with',
  },
};

export default en;
