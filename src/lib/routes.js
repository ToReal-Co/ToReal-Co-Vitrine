/**
 * The route table, and the head metadata each route publishes.
 *
 * This module is imported both by the build-time prerenderer (which writes
 * the tags straight into the static HTML) and by the client (which keeps
 * them in sync on client-side navigation). Having one source avoids the
 * classic failure where the served HTML and the hydrated page disagree
 * about the canonical URL.
 */
import { SITE, SITE_URL, CONTACT, ADDRESS, AREAS_SERVED, OPENING_HOURS, sameAs } from './siteConfig';
import { SERVICE_PAGES } from '../content/services';
import { LEGAL_PAGES } from '../content/legal';
import fr from '../i18n/fr';
import en from '../i18n/en';

const abs = (path) => `${SITE_URL}${path}`;

/* ------------------------------------------------------------------ *
 * Shared schema nodes — referenced by @id from every page's @graph so
 * the entity is declared once and linked, not duplicated per page.
 * ------------------------------------------------------------------ */

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const postalAddress = () => {
  const address = {
    '@type': 'PostalAddress',
    addressLocality: ADDRESS.locality,
    addressRegion: ADDRESS.region,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.country,
  };
  if (ADDRESS.street) address.streetAddress = ADDRESS.street;
  return address;
};

const organizationNode = (locale) => {
  const t = locale === 'en' ? en : fr;
  const node = {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: SITE.logo },
    image: SITE.ogImage,
    description:
      locale === 'en'
        ? 'Software development company in Tunisia — mobile apps, web platforms and AI automation, built end to end by the founders.'
        : 'Boîte de développement informatique en Tunisie — applications mobiles, plateformes web et automatisation par IA, conçues de bout en bout par les fondateurs.',
    slogan: t.footer.tagline,
    foundingDate: SITE.founded,
    priceRange: SITE.priceRange,
    address: postalAddress(),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: ADDRESS.latitude,
      longitude: ADDRESS.longitude,
    },
    areaServed: AREAS_SERVED.map((area) => ({ '@type': area.type, name: area.name })),
    availableLanguage: SITE.languages.map((code) => ({ '@type': 'Language', name: code })),
    knowsLanguage: SITE.languages,
    openingHoursSpecification: OPENING_HOURS.map((slot) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: CONTACT.phoneE164,
        contactType: 'sales',
        areaServed: ['TN', 'FR', 'BE', 'CA'],
        availableLanguage: ['French', 'English'],
      },
    ],
    telephone: CONTACT.phoneE164,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: locale === 'en' ? 'Development services' : 'Services de développement',
      itemListElement: SERVICE_PAGES.map((page) => {
        const copy = locale === 'en' ? page.en : page.fr;
        return {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: copy.serviceType,
            url: abs(locale === 'en' ? `/en${page.path}` : page.path),
          },
        };
      }),
    },
  };

  if (CONTACT.email) node.email = CONTACT.email;
  const profiles = sameAs();
  if (profiles.length) node.sameAs = profiles;

  return node;
};

const websiteNode = (locale) => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: SITE.name,
  inLanguage: locale === 'en' ? 'en' : 'fr-TN',
  publisher: { '@id': ORG_ID },
});

const webPageNode = ({ url, title, description, locale, breadcrumbId }) => {
  const node = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: locale === 'en' ? 'en' : 'fr-TN',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    primaryImageOfPage: { '@type': 'ImageObject', url: SITE.ogImage },
  };
  if (breadcrumbId) node.breadcrumb = { '@id': breadcrumbId };
  return node;
};

/**
 * FAQ structured data lives in its own <script>, separate from the main
 * @graph, because the homepage FAQ can be overridden by the CMS at
 * runtime — the client rewrites this one node so the markup never claims
 * questions the page does not actually show.
 */
export const buildFaqJsonLd = (url, items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${url}#faq`,
  inLanguage: /\/en\//.test(url) ? 'en' : 'fr-TN',
  isPartOf: { '@id': `${url}#webpage` },
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
});

/* ------------------------------------------------------------------ *
 * Route definitions
 * ------------------------------------------------------------------ */

const homeAlternates = [
  { hreflang: 'fr-TN', href: abs('/') },
  { hreflang: 'fr', href: abs('/') },
  { hreflang: 'en', href: abs('/en/') },
  { hreflang: 'x-default', href: abs('/') },
];

const homeFr = {
  path: '/',
  locale: 'fr',
  kind: 'home',
  changefreq: 'weekly',
  priority: 1.0,
  seo: {
    title: 'Boîte de Développement Informatique en Tunisie | ToReal&Co',
    description:
      'Boîte de développement informatique en Tunisie : applications mobiles, sites web et automatisation IA. Équipe à Bizerte, appel découverte gratuit de 30 min.',
    canonical: abs('/'),
    keywords: [
      'boîte de développement Tunisie',
      'développement informatique Tunisie',
      'informatique Tunisie',
      'société de développement Tunisie',
      'développement mobile Tunisie',
      'développement web Tunisie',
      'agence digitale Tunisie',
    ],
    alternates: homeAlternates,
  },
  jsonLd: () => {
    const url = abs('/');
    return {
      '@context': 'https://schema.org',
      '@graph': [
        organizationNode('fr'),
        websiteNode('fr'),
        webPageNode({
          url,
          title: 'Boîte de Développement Informatique en Tunisie | ToReal&Co',
          description:
            'Boîte de développement informatique en Tunisie : applications mobiles, sites web et automatisation par IA.',
          locale: 'fr',
        }),
      ],
    };
  },
  faqJsonLd: () => buildFaqJsonLd(abs('/'), fr.faq.items),
};

const homeEn = {
  path: '/en/',
  locale: 'en',
  kind: 'home',
  changefreq: 'weekly',
  priority: 0.8,
  seo: {
    title: 'Software Development Company in Tunisia | ToReal&Co',
    description:
      'Software development company in Tunisia: mobile apps, web platforms and AI automation. Team in Bizerte, weekly demos, free 30-minute discovery call.',
    canonical: abs('/en/'),
    keywords: [
      'software development company Tunisia',
      'mobile app development Tunisia',
      'web development Tunisia',
      'IT company Tunisia',
      'React Native developers Tunisia',
    ],
    alternates: homeAlternates,
  },
  jsonLd: () => {
    const url = abs('/en/');
    return {
      '@context': 'https://schema.org',
      '@graph': [
        organizationNode('en'),
        websiteNode('en'),
        webPageNode({
          url,
          title: 'Software Development Company in Tunisia | ToReal&Co',
          description:
            'Software development company in Tunisia: mobile apps, web platforms and AI automation.',
          locale: 'en',
        }),
      ],
    };
  },
  faqJsonLd: () => buildFaqJsonLd(abs('/en/'), en.faq.items),
};

const serviceRoutes = SERVICE_PAGES.flatMap((page) => {
  const frPath = page.path;
  const enPath = `/en${page.path}`;
  const frUrl = abs(frPath);
  const enUrl = abs(enPath);
  const frCopy = page.fr;
  const enCopy = page.en;

  const alternates = [
    { hreflang: 'fr-TN', href: frUrl },
    { hreflang: 'fr', href: frUrl },
    { hreflang: 'en', href: enUrl },
    { hreflang: 'x-default', href: frUrl },
  ];

  const buildRoute = (path, url, locale, copy) => {
    const breadcrumbId = `${url}#breadcrumb`;
    const t = locale === 'en' ? en : fr;
    const homePath = locale === 'en' ? '/en/' : '/';

    return {
      path,
      locale,
      kind: 'service',
      slug: page.slug,
      changefreq: 'monthly',
      priority: locale === 'fr' ? 0.9 : 0.7,
      seo: {
        title: copy.seo.title,
        description: copy.seo.description,
        canonical: url,
        keywords: copy.seo.keywords,
        alternates,
      },
      jsonLd: () => ({
        '@context': 'https://schema.org',
        '@graph': [
          organizationNode(locale),
          websiteNode(locale),
          webPageNode({
            url,
            title: copy.seo.title,
            description: copy.seo.description,
            locale,
            breadcrumbId,
          }),
          {
            '@type': 'BreadcrumbList',
            '@id': breadcrumbId,
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: t.breadcrumb.home, item: abs(homePath) },
              {
                '@type': 'ListItem',
                position: 2,
                name: t.breadcrumb.services,
                item: abs(`${homePath}#services`),
              },
              { '@type': 'ListItem', position: 3, name: copy.eyebrow, item: url },
            ],
          },
          {
            '@type': 'Service',
            '@id': `${url}#service`,
            name: copy.serviceType,
            serviceType: copy.serviceType,
            description: copy.seo.description,
            url,
            provider: { '@id': ORG_ID },
            areaServed: AREAS_SERVED.map((area) => ({ '@type': area.type, name: area.name })),
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: copy.serviceType,
              itemListElement: copy.highlights.map((item) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: item },
              })),
            },
          },
        ],
      }),
      faqJsonLd: () => buildFaqJsonLd(url, copy.faq),
    };
  };

  return [buildRoute(frPath, frUrl, 'fr', frCopy), buildRoute(enPath, enUrl, 'en', enCopy)];
});

const legalRoutes = LEGAL_PAGES.flatMap((page) => {
  const frPath = page.path;
  const enPath = `/en${page.path}`;
  const frUrl = abs(frPath);
  const enUrl = abs(enPath);
  const alternates = [
    { hreflang: 'fr-TN', href: frUrl },
    { hreflang: 'fr', href: frUrl },
    { hreflang: 'en', href: enUrl },
    { hreflang: 'x-default', href: frUrl },
  ];

  const buildRoute = (path, url, locale, copy) => {
    const t = locale === 'en' ? en : fr;
    const homePath = locale === 'en' ? '/en/' : '/';
    const breadcrumbId = `${url}#breadcrumb`;

    return {
      path,
      locale,
      kind: 'legal',
      slug: page.slug,
      changefreq: 'yearly',
      priority: 0.3,
      seo: {
        title: copy.seo.title,
        description: copy.seo.description,
        canonical: url,
        keywords: copy.seo.keywords,
        alternates,
      },
      jsonLd: () => ({
        '@context': 'https://schema.org',
        '@graph': [
          organizationNode(locale),
          websiteNode(locale),
          webPageNode({
            url,
            title: copy.seo.title,
            description: copy.seo.description,
            locale,
            breadcrumbId,
          }),
          {
            '@type': 'BreadcrumbList',
            '@id': breadcrumbId,
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: t.breadcrumb.home, item: abs(homePath) },
              { '@type': 'ListItem', position: 2, name: copy.eyebrow, item: url },
            ],
          },
        ],
      }),
    };
  };

  return [
    buildRoute(frPath, frUrl, 'fr', page.fr),
    buildRoute(enPath, enUrl, 'en', page.en),
  ];
});

export const ROUTES = [homeFr, homeEn, ...serviceRoutes, ...legalRoutes];

export const getRoute = (pathname) => {
  const normalized =
    pathname !== '/' && !pathname.endsWith('/') ? `${pathname}/` : pathname || '/';
  return ROUTES.find((route) => route.path === normalized) || null;
};

export { abs, ORG_ID, WEBSITE_ID };
