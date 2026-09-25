/**
 * Single source of truth for everything search engines read about the
 * business: the canonical origin, the NAP (name / address / phone) block
 * that local SEO keys on, and the social profiles used for sameAs.
 *
 * Keep this consistent with what is published on Google Business Profile
 * and on the social pages — mismatched NAP data is the most common reason
 * a local business fails to consolidate its local ranking signals.
 */

export const SITE_URL = 'https://torealandco.live';

export const SITE = {
  name: 'ToReal&Co',
  legalName: 'ToReal&Co',
  url: SITE_URL,
  logo: `${SITE_URL}/logoWithoutText.svg`,
  ogImage: `${SITE_URL}/og-image.jpg`,
  founded: '2024',
  priceRange: '$$',
  // Languages the team actually does business in — surfaced in schema.
  languages: ['fr', 'en', 'ar'],
};

export const CONTACT = {
  phone: '+216 58 693 946',
  phoneE164: '+21658693946',
  whatsapp: 'https://wa.me/21658693946',
  // Fill in once a public inbox exists; left empty it is simply omitted
  // from the structured data rather than emitting a broken address.
  email: '',
};

export const ADDRESS = {
  locality: 'Bizerte',
  region: 'Bizerte',
  country: 'TN',
  countryName: 'Tunisie',
  postalCode: '7000',
  // Street left blank on purpose — schema stays valid without it, and an
  // invented street address would conflict with the Business Profile.
  street: '',
  latitude: 37.2746,
  longitude: 9.8739,
};

/**
 * Public profiles, used for schema `sameAs`. Every entry must be a live,
 * publicly reachable URL — a 404 here weakens entity consolidation rather
 * than helping it, so placeholders are deliberately absent.
 */
export const SOCIAL = {
  linkedin: '',
  x: '',
  instagram: '',
  facebook: '',
  github: '',
};

/** Only the profiles that are actually filled in. */
export const sameAs = () => Object.values(SOCIAL).filter(Boolean);

/** Geographic markets we sell into — drives `areaServed` in schema. */
export const AREAS_SERVED = [
  { type: 'Country', name: 'Tunisie' },
  { type: 'City', name: 'Tunis' },
  { type: 'City', name: 'Bizerte' },
  { type: 'City', name: 'Sfax' },
  { type: 'City', name: 'Sousse' },
  { type: 'Country', name: 'France' },
  { type: 'Country', name: 'Belgique' },
  { type: 'Country', name: 'Canada' },
];

export const OPENING_HOURS = [
  {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
];
