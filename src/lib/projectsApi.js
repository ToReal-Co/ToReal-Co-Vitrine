const API_BASE =
  (import.meta.env.VITE_BOOKING_API_URL || 'http://localhost:4000/api/website').replace(/\/$/, '');

/**
 * Returns the CMS project list for a locale, or null if it's empty,
 * unreachable or authored in another language — the caller then falls back
 * to its own bundled defaults so the site never looks broken, and never
 * shows French visitors an English portfolio.
 */
export async function getCmsProjects(locale = 'fr') {
  try {
    const res = await fetch(`${API_BASE}/projects?locale=${encodeURIComponent(locale)}`);
    if (!res.ok) return null;
    const data = await res.json();

    // An API that declares a locale is trusted on it; one that declares
    // none predates localisation and its content is taken as-is.
    if (data?.locale && data.locale !== locale) return null;

    const projects = data?.projects;
    if (!Array.isArray(projects) || projects.length === 0) return null;

    const matching = projects.filter((p) => !p.locale || p.locale === locale);
    return matching.length > 0 ? matching : null;
  } catch {
    return null;
  }
}
