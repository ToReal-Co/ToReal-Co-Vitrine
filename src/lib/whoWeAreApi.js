const API_BASE =
  (import.meta.env.VITE_BOOKING_API_URL || 'http://localhost:4000/api/website').replace(/\/$/, '');

const TEAM = [
  {
    id: 'ahmed',
    name: 'Ahmed Mahouachi',
    role: 'CEO & Gérant',
    phone: '+216 58 693 946',
    email: 'ahmed.mahouachi@toreal-co.com',
  },
  {
    id: 'skander',
    name: 'Mohamed Skander Zouaoui',
    role: 'CEO & CTO',
    phone: '+216 55 203 244',
    email: 'mohamedskander.zouaoui@toreal-co.com',
  },
];

// Shown while the CMS is empty or unreachable — the site never looks broken.
// This copy is also what gets baked into the prerendered HTML, so it has to
// read as finished text rather than as a placeholder.
const INTRO = {
  fr: 'ToReal&Co est une boîte de développement informatique indépendante, en Tunisie — mobile, web et design sous un même toit. Nous travaillons directement avec les fondateurs, du premier croquis à la mise en ligne, sans chef de projet intermédiaire ni passage de dossier entre équipes.',
  en: 'ToReal&Co is an independent product studio — mobile, web and design under one roof. We work directly with founders, from the first sketch to the release, with no account managers and no hand-offs in between.',
};

export const FALLBACK_WHO_WE_ARE = {
  intro: INTRO.fr,
  stats: { capitalAchieved: 63, releasedProjects: 11, collaborators: 12 },
  team: TEAM,
};

/** The bundled content for a locale, used before and instead of the CMS. */
export function getFallbackWhoWeAre(locale = 'fr') {
  return { ...FALLBACK_WHO_WE_ARE, intro: INTRO[locale] || INTRO.fr };
}

export async function getWhoWeAreContent(locale = 'fr') {
  const fallback = getFallbackWhoWeAre(locale);
  try {
    const res = await fetch(`${API_BASE}/who-we-are?locale=${encodeURIComponent(locale)}`);
    if (!res.ok) return fallback;
    const data = await res.json();

    // An intro authored in another language would contradict the rest of
    // the page, so it is only taken when the API agrees on the locale.
    const introMatchesLocale = !data?.locale || data.locale === locale;

    // Merge stats key by key: a partial or missing stats object from the CMS must
    // not blank out the counters, since the section reads each one directly.
    return {
      ...fallback,
      ...data,
      intro: introMatchesLocale && data?.intro ? data.intro : fallback.intro,
      stats: { ...fallback.stats, ...(data?.stats || {}) },
      team: Array.isArray(data?.team) ? data.team : fallback.team,
    };
  } catch {
    return fallback;
  }
}
