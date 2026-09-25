const API_BASE =
  (import.meta.env.VITE_BOOKING_API_URL || 'http://localhost:4000/api/website').replace(/\/$/, '');

/**
 * Returns the CMS FAQ list for a locale, or null if it's empty, unreachable
 * or authored in another language — the caller then falls back to its own
 * bundled copy so the site never looks broken.
 *
 * The locale guard matters for SEO: the page is served with prerendered
 * FAQ structured data built from the bundled French copy, so letting an
 * English CMS payload replace the visible questions would leave the markup
 * describing questions the page no longer shows.
 */
export async function getCmsFaq(locale = 'fr') {
  try {
    const res = await fetch(`${API_BASE}/faq?locale=${encodeURIComponent(locale)}`);
    if (!res.ok) return null;
    const data = await res.json();

    // If the API declares a locale, honour it; if it declares none, it
    // predates localisation and its content is taken as-is.
    if (data?.locale && data.locale !== locale) return null;

    const items = data?.items;
    if (!Array.isArray(items) || items.length === 0) return null;

    const matching = items.filter((item) => !item.locale || item.locale === locale);
    return matching.length > 0 ? matching : null;
  } catch {
    return null;
  }
}
