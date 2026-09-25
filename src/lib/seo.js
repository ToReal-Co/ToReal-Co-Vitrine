/**
 * Client-side head synchronisation.
 *
 * Every route is already served with the right tags baked into the static
 * HTML by the prerenderer, so this module exists for one job only: keeping
 * the head correct after a client-side navigation. It mutates tags in
 * place (keyed by a data attribute) instead of appending, so repeated
 * navigations cannot pile up duplicate canonicals or hreflang links.
 */
import { SITE } from './siteConfig';

const MANAGED = 'data-seo-managed';

const hasDom = () => typeof document !== 'undefined';

/** Creates or updates a <script type="application/ld+json">, keyed by id. */
export function setJsonLd(id, data) {
  if (!hasDom()) return;

  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function removeJsonLd(id) {
  if (!hasDom()) return;
  document.getElementById(id)?.remove();
}

function setMeta(selector, attrs) {
  if (!hasDom()) return;
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(MANAGED, '');
    document.head.appendChild(tag);
  }
  Object.entries(attrs).forEach(([key, value]) => tag.setAttribute(key, value));
}

function removeMeta(selector) {
  if (!hasDom()) return;
  document.head.querySelector(selector)?.remove();
}

function setLink(rel, href, extra = {}) {
  if (!hasDom()) return;
  const selector = extra.hreflang
    ? `link[rel="${rel}"][hreflang="${extra.hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    tag.setAttribute(MANAGED, '');
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
  Object.entries(extra).forEach(([key, value]) => tag.setAttribute(key, value));
}

/** Drops hreflang links that the incoming route does not declare. */
function pruneAlternates(keep) {
  if (!hasDom()) return;
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((tag) => {
    if (!keep.has(tag.getAttribute('hreflang'))) tag.remove();
  });
}

function applySocial(seo, locale) {
  const ogLocale = locale === 'en' ? 'en_US' : 'fr_TN';
  const ogAltLocale = locale === 'en' ? 'fr_TN' : 'en_US';

  setMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
  setMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE.name });
  setMeta('meta[property="og:url"]', { property: 'og:url', content: seo.canonical });
  setMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title });
  setMeta('meta[property="og:description"]', {
    property: 'og:description',
    content: seo.description,
  });
  setMeta('meta[property="og:locale"]', { property: 'og:locale', content: ogLocale });
  setMeta('meta[property="og:locale:alternate"]', {
    property: 'og:locale:alternate',
    content: ogAltLocale,
  });
  setMeta('meta[property="og:image"]', { property: 'og:image', content: SITE.ogImage });
  setMeta('meta[property="og:image:width"]', { property: 'og:image:width', content: '1200' });
  setMeta('meta[property="og:image:height"]', { property: 'og:image:height', content: '630' });
  setMeta('meta[property="og:image:alt"]', {
    property: 'og:image:alt',
    content:
      locale === 'en'
        ? `${SITE.name} — software development company in Tunisia`
        : `${SITE.name} — boîte de développement informatique en Tunisie`,
  });

  setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
  setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title });
  setMeta('meta[name="twitter:description"]', {
    name: 'twitter:description',
    content: seo.description,
  });
  setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: SITE.ogImage });
}

/**
 * Applies a route's full head: title, description, canonical, hreflang,
 * Open Graph, Twitter card, html[lang] and both JSON-LD blocks.
 */
export function applyRouteHead(route, locale) {
  if (!hasDom()) return;

  if (!route) {
    applyNotFoundHead(locale);
    return;
  }

  const { seo } = route;
  const htmlLang = locale === 'en' ? 'en' : 'fr-TN';

  document.documentElement.setAttribute('lang', htmlLang);
  document.title = seo.title;

  setMeta('meta[name="robots"]', {
    name: 'robots',
    content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  });
  setMeta('meta[name="description"]', { name: 'description', content: seo.description });

  if (seo.keywords?.length) {
    setMeta('meta[name="keywords"]', { name: 'keywords', content: seo.keywords.join(', ') });
  } else {
    removeMeta('meta[name="keywords"]');
  }

  setLink('canonical', seo.canonical);

  const alternates = seo.alternates || [];
  pruneAlternates(new Set(alternates.map((alt) => alt.hreflang)));
  alternates.forEach((alt) => setLink('alternate', alt.href, { hreflang: alt.hreflang }));

  applySocial(seo, locale);

  if (route.jsonLd) setJsonLd('site-jsonld', route.jsonLd());
  else removeJsonLd('site-jsonld');

  if (route.faqJsonLd) setJsonLd('faq-jsonld', route.faqJsonLd());
  else removeJsonLd('faq-jsonld');
}

/** Head for client-side 404s (unknown SPA path). */
export function applyNotFoundHead(locale = 'fr') {
  if (!hasDom()) return;

  const isEn = locale === 'en';
  document.documentElement.setAttribute('lang', isEn ? 'en' : 'fr-TN');
  document.title = isEn ? `Page not found — ${SITE.name}` : `Page introuvable — ${SITE.name}`;

  setMeta('meta[name="robots"]', { name: 'robots', content: 'noindex, follow' });
  setMeta('meta[name="description"]', {
    name: 'description',
    content: isEn
      ? 'This page does not exist or has been moved.'
      : 'Cette page n’existe pas ou a été déplacée.',
  });
  removeMeta('meta[name="keywords"]');
  pruneAlternates(new Set());
  removeJsonLd('faq-jsonld');
}
