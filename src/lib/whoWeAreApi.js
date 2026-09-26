import ahmedPhoto from '../assets/images/team/ahmedmahouachi.webp';
import skanderPhoto from '../assets/images/team/skanderzouaoui.webp';

const TEAM = [
  {
    id: 'ahmed',
    name: 'Ahmed Mahouachi',
    role: 'CEO & Gérant',
    phone: '+216 58 693 946',
    email: 'ahmed.mahouachi@toreal-co.com',
    photoDataUrl: ahmedPhoto,
  },
  {
    id: 'skander',
    name: 'Mohamed Skander Zouaoui',
    role: 'CEO & CTO',
    phone: '+216 55 203 244',
    email: 'mohamedskander.zouaoui@toreal-co.com',
    photoDataUrl: skanderPhoto,
  },
];

const INTRO = {
  fr: 'ToReal&Co est une boîte de développement informatique indépendante, en Tunisie — mobile, web et design sous un même toit. Nous travaillons directement avec les fondateurs, du premier croquis à la mise en ligne, sans chef de projet intermédiaire ni passage de dossier entre équipes.',
  en: 'ToReal&Co is an independent product studio — mobile, web and design under one roof. We work directly with founders, from the first sketch to the release, with no account managers and no hand-offs in between.',
};

const STATS = { capitalAchieved: 63, releasedProjects: 11, collaborators: 12 };

/** Static Who we are content — no CMS fetch. */
export function getWhoWeAreContent(locale = 'fr') {
  return {
    intro: INTRO[locale] || INTRO.fr,
    stats: STATS,
    team: TEAM,
  };
}
