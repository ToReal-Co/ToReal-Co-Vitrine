const API_BASE =
  (import.meta.env.VITE_BOOKING_API_URL || 'http://localhost:4000/api/website').replace(/\/$/, '');

// Shown while the CMS is empty or unreachable — the site never looks broken.
export const FALLBACK_WHO_WE_ARE = {
  intro:
    "ToReal&Co is an independent product studio — mobile, web and design under one roof. We work directly with founders, from the first sketch to the release, with no account managers and no hand-offs in between.",
  stats: { capitalAchieved: 63, releasedProjects: 11, collaborators: 12 },
  team: [
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
  ],
};

export async function getWhoWeAreContent() {
  try {
    const res = await fetch(`${API_BASE}/who-we-are`);
    if (!res.ok) return FALLBACK_WHO_WE_ARE;
    const data = await res.json();
    // Merge stats key by key: a partial or missing stats object from the CMS must
    // not blank out the counters, since the section reads each one directly.
    return {
      ...FALLBACK_WHO_WE_ARE,
      ...data,
      stats: { ...FALLBACK_WHO_WE_ARE.stats, ...(data?.stats || {}) },
      team: Array.isArray(data?.team) ? data.team : FALLBACK_WHO_WE_ARE.team,
    };
  } catch {
    return FALLBACK_WHO_WE_ARE;
  }
}
