/**
 * Build-time prerenderer.
 *
 * Runs after both Vite builds. For every route in the table it renders the
 * React tree to a string, injects that markup and the route's head tags
 * into the HTML shell, and writes a real file at the route's path. The
 * result is that a crawler — or a browser with JavaScript disabled — gets
 * the full page text on the first response instead of an empty div.
 *
 * It also emits sitemap.xml and a 404 page, both derived from the same
 * route table, so they cannot drift out of sync with what was built.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const SSR_ENTRY = path.join(ROOT, 'dist-ssr', 'entry-server.js');

const LT = String.fromCharCode(60);
// A backslash followed by u003c: the JSON escape for "<". Built from a char
// code so no layer of tooling can collapse it back into a bare "<".
const LT_JSON_ESCAPE = String.fromCharCode(92) + 'u003c';

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/**
 * The graph is emitted inside a script element of type application/ld+json,
 * whose contents are parsed as JSON rather than as JS. The only sequence
 * that can escape the element is a closing script tag, so every "<" is
 * written as its JSON unicode escape — parsers decode it straight back.
 */
const escapeJsonLd = (data) => JSON.stringify(data).split(LT).join(LT_JSON_ESCAPE);

function buildHead(route) {
  const { seo } = route;
  const lines = [];
  const ogLocale = route.locale === 'en' ? 'en_US' : 'fr_TN';
  const ogAltLocale = route.locale === 'en' ? 'fr_TN' : 'en_US';
  const imageAlt =
    route.locale === 'en'
      ? 'ToReal&Co — software development company in Tunisia'
      : 'ToReal&Co — boîte de développement informatique en Tunisie';

  lines.push(`<title>${escapeHtml(seo.title)}</title>`);
  lines.push(`<meta name="description" content="${escapeHtml(seo.description)}" />`);
  if (seo.keywords?.length) {
    lines.push(`<meta name="keywords" content="${escapeHtml(seo.keywords.join(', '))}" />`);
  }
  lines.push(`<link rel="canonical" href="${escapeHtml(seo.canonical)}" />`);

  (seo.alternates || []).forEach((alt) => {
    lines.push(
      `<link rel="alternate" hreflang="${escapeHtml(alt.hreflang)}" href="${escapeHtml(alt.href)}" />`
    );
  });

  lines.push(`<meta property="og:type" content="website" />`);
  lines.push(`<meta property="og:site_name" content="ToReal&Co" />`);
  lines.push(`<meta property="og:url" content="${escapeHtml(seo.canonical)}" />`);
  lines.push(`<meta property="og:title" content="${escapeHtml(seo.title)}" />`);
  lines.push(`<meta property="og:description" content="${escapeHtml(seo.description)}" />`);
  lines.push(`<meta property="og:locale" content="${ogLocale}" />`);
  lines.push(`<meta property="og:locale:alternate" content="${ogAltLocale}" />`);
  lines.push(`<meta property="og:image" content="https://torealandco.live/og-image.jpg" />`);
  lines.push(`<meta property="og:image:width" content="1200" />`);
  lines.push(`<meta property="og:image:height" content="630" />`);
  lines.push(`<meta property="og:image:alt" content="${escapeHtml(imageAlt)}" />`);

  lines.push(`<meta name="twitter:card" content="summary_large_image" />`);
  lines.push(`<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`);
  lines.push(`<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`);
  lines.push(`<meta name="twitter:image" content="https://torealandco.live/og-image.jpg" />`);

  if (route.jsonLd) {
    lines.push(
      `<script id="site-jsonld" type="application/ld+json">${escapeJsonLd(route.jsonLd())}</script>`
    );
  }
  if (route.faqJsonLd) {
    lines.push(
      `<script id="faq-jsonld" type="application/ld+json">${escapeJsonLd(route.faqJsonLd())}</script>`
    );
  }

  return lines.map((line) => `    ${line}`).join('\n');
}

function outputPathFor(routePath) {
  if (routePath === '/') return path.join(DIST, 'index.html');
  const clean = routePath.replace(/^\/+|\/+$/g, '');
  return path.join(DIST, clean, 'index.html');
}

async function main() {
  const template = await fs.readFile(path.join(DIST, 'index.html'), 'utf8');

  if (!template.includes('<!--app-html-->') || !template.includes('<!--app-head-->')) {
    throw new Error(
      'dist/index.html is missing the <!--app-html--> / <!--app-head--> placeholders — ' +
        'check that index.html still carries them.'
    );
  }

  const { render, ROUTES, SITE_URL } = await import(pathToFileURL(SSR_ENTRY).href);

  const written = [];

  for (const route of ROUTES) {
    const markup = render(route.path);
    const html = template
      .replace('<!--app-head-->', buildHead(route))
      .replace('<!--app-html-->', markup)
      .replace('<html lang="fr-TN">', `<html lang="${route.locale === 'en' ? 'en' : 'fr-TN'}">`);

    const target = outputPathFor(route.path);
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, html, 'utf8');
    written.push({ route: route.path, file: path.relative(ROOT, target), bytes: html.length });
  }

  // A dedicated 404 document, excluded from the index. Without it the host
  // would answer unknown URLs with the homepage, which search engines read
  // as a soft 404 and as duplicate content.
  const notFoundHead = [
    '<title>Page introuvable — ToReal&Co</title>',
    '<meta name="description" content="Cette page n’existe pas ou a été déplacée." />',
    '<meta name="twitter:card" content="summary" />',
    '<meta property="og:title" content="Page introuvable — ToReal&Co" />',
    '<meta property="og:description" content="Cette page n’existe pas ou a été déplacée." />',
  ]
    .map((line) => `    ${line}`)
    .join('\n');

  // The shell carries a site-wide "index, follow"; leaving it in place next
  // to a noindex would ship two contradictory robots directives on the same
  // document, so the default one is rewritten rather than added to.
  const notFoundRobots = '<meta name="robots" content="noindex, follow" />';
  const defaultRobots = template.match(/<meta name="robots"[^>]*\/>/);
  if (!defaultRobots) {
    throw new Error('No default robots meta found in the shell — 404 would be indexable.');
  }

  await fs.writeFile(
    path.join(DIST, '404.html'),
    template
      .replace(defaultRobots[0], notFoundRobots)
      .replace('<!--app-head-->', notFoundHead)
      .replace('<!--app-html-->', render('/__not-found__')),
    'utf8'
  );

  // Sitemap: only the routes that were actually written, each carrying the
  // build date as lastmod and its hreflang siblings.
  const today = new Date().toISOString().slice(0, 10);
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...ROUTES.map((route) => {
      const alternates = (route.seo.alternates || [])
        .filter((alt) => alt.hreflang !== 'fr')
        .map(
          (alt) => `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`
        );
      return [
        '  <url>',
        `    <loc>${SITE_URL}${route.path}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        `    <changefreq>${route.changefreq}</changefreq>`,
        `    <priority>${route.priority.toFixed(1)}</priority>`,
        ...alternates,
        '  </url>',
      ].join('\n');
    }),
    '</urlset>',
    '',
  ].join('\n');

  await fs.writeFile(path.join(DIST, 'sitemap.xml'), sitemap, 'utf8');

  console.log(`\nPrerendered ${written.length} routes:`);
  written.forEach((item) => {
    console.log(
      `  ${item.route.padEnd(42)} ${item.file.padEnd(50)} ${(item.bytes / 1024).toFixed(1)} kB`
    );
  });
  console.log('  404.html and sitemap.xml written.\n');
}

main().catch((error) => {
  console.error('\nPrerender failed:\n', error);
  process.exit(1);
});
