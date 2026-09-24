const API_BASE =
  (import.meta.env.VITE_BOOKING_API_URL || 'http://localhost:4000/api/website').replace(/\/$/, '');

// Shown while the CMS is empty or unreachable — the site never looks broken.
export const FALLBACK_WHO_WE_ARE = {
  intro:
    "ToReal&Co is an independent product studio — mobile, web and design under one roof. We work directly with founders, from the first sketch to the release, with no account managers and no hand-offs in between.",
  foundedYear: '',
  basedIn: '',
  focus: '',
  languages: '',
  foundingStory: '',
  stats: { capitalAchieved: 63, releasedProjects: 11, collaborators: 10 },
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
    return { ...FALLBACK_WHO_WE_ARE, ...data };
  } catch {
    return FALLBACK_WHO_WE_ARE;
  }
}
