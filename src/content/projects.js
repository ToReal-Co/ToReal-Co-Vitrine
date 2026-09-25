/**
 * Bundled portfolio entries, shown until the CMS answers (and whenever it
 * is unreachable). Because these strings are what the prerenderer writes
 * into the static HTML, they exist in both locales — a French page listing
 * English project blurbs would undo the point of the translation.
 */
import podcastImage from '../assets/images/podcast.webp';
import clothesImage from '../assets/images/clothes.webp';
import childEducationImage from '../assets/images/childEducation.webp';
import bioFoodImage from '../assets/images/bioFood.webp';
import salesOverviewImage from '../assets/images/salesOverviewImage.webp';
import meditationImage from '../assets/images/meditationImage.webp';
import teamUnityImage from '../assets/images/teamUnity.webp';
import sushiImage from '../assets/images/sushi.webp';
import glamoraImage from '../assets/images/glamoraImage.webp';
import secretHitlerImage from '../assets/images/secret-hitler-web-poster-square.webp';

/** Card type labels, per locale. */
export const KIND_LABELS = {
  fr: {
    mobileApp: 'Application mobile',
    webExperience: 'Expérience web',
    ecommerce: 'E-commerce',
    website: 'Site web',
    productDesign: 'Design produit',
  },
  en: {
    mobileApp: 'Mobile app',
    webExperience: 'Web experience',
    ecommerce: 'E-commerce',
    website: 'Website',
    productDesign: 'Product design',
  },
};

export const PROJECTS = [
  {
    name: 'CastMate',
    category: 'Mobile',
    kind: 'mobileApp',
    year: '2025',
    image: podcastImage,
    description: {
      fr: 'Trouvez et écoutez des podcasts selon vos préférences, simplement. Contenu hors ligne, système de recommandation intelligent et une immense bibliothèque — le tout dans une seule application.',
      en: 'Find and listen to podcasts according to your preferences with simplicity. Offline content, an intelligent recommendation system, and a huge collection of media. All on a single app!',
    },
  },
  {
    name: 'Secret Hitler',
    category: 'Web',
    kind: 'webExperience',
    year: '2025',
    image: secretHitlerImage,
    description: {
      fr: 'Le jeu de déduction sociale, en ligne. Trahison, votes et lois autour de la même table — de 5 à 10 joueurs, en français et en anglais.',
      en: 'The social deduction game, online. Betrayal, votes and laws around the same table — for 5 to 10 players, in French and English.',
    },
    link: 'https://secret-hetler.netlify.app/',
    linkLabel: { fr: 'Jouer', en: 'Play now' },
  },
  {
    name: 'Dapperdash',
    category: 'E-commerce',
    kind: 'ecommerce',
    year: '2024',
    image: clothesImage,
    description: {
      fr: 'Une boutique de mode mobile avec des collections sélectionnées, des catégories et un paiement rapide.',
      en: 'A mobile fashion store with curated collections, categories and a fast checkout.',
    },
  },
  {
    name: 'Puretopia',
    category: 'Web',
    kind: 'website',
    year: '2024',
    image: childEducationImage,
    description: {
      fr: 'Une plateforme éducative pour les enfants d’âge préscolaire, avec des jeux et des activités qui accompagnent les premiers apprentissages.',
      en: 'An educational platform for preschoolers, featuring fun games and activities that support early learning and development.',
    },
  },
  {
    name: 'Avocado Mood',
    category: 'Web',
    kind: 'website',
    year: '2024',
    image: bioFoodImage,
    description: {
      fr: 'Découvrez l’alimentation bio avec Avocado Mood — conseils d’experts, recettes saines et repères sur le bio pour un quotidien équilibré.',
      en: 'Discover bio food with Avocado Mood — expert tips, healthy recipes and insights on organic food for a balanced lifestyle.',
    },
  },
  {
    name: 'SyncroWave',
    category: 'UI/UX',
    kind: 'productDesign',
    year: '2025',
    image: salesOverviewImage,
    description: {
      fr: 'Un tableau de bord d’analyse commerciale : vue d’ensemble, indicateurs et objectifs sur un seul écran.',
      en: 'A sales analytics dashboard: overview, insights and targets in one screen.',
    },
  },
  {
    name: 'Serenity',
    category: 'Mobile',
    kind: 'mobileApp',
    year: '2024',
    image: meditationImage,
    description: {
      fr: 'Trouvez le calme avec Serenity, l’application de méditation conçue pour la relaxation, la gestion du stress et la concentration, en quelques minutes par jour.',
      en: 'Find peace with Serenity, the meditation app designed for relaxation, stress relief, and enhanced focus in just a few minutes a day.',
    },
  },
  {
    name: 'Team Unity',
    category: 'Web',
    kind: 'website',
    year: '2024',
    image: teamUnityImage,
    description: {
      fr: 'Améliorez la collaboration et la productivité de vos équipes — organisez les tâches, suivez les performances et simplifiez la communication dans un seul outil.',
      en: 'Enhance team collaboration and productivity — organize tasks, monitor performance, and simplify communication in one app.',
    },
  },
  {
    name: 'SushiMan',
    category: 'Mobile',
    kind: 'mobileApp',
    year: '2024',
    image: sushiImage,
    description: {
      fr: 'Découvrez, personnalisez et commandez vos sushis préférés en toute simplicité.',
      en: 'Discover, personalize and order your favorite sushi dishes easily, and enjoy the best sushi.',
    },
  },
  {
    name: 'Glamora',
    category: 'E-commerce',
    kind: 'ecommerce',
    year: '2024',
    image: glamoraImage,
    description: {
      fr: 'Faites du shopping avec Glamora — vêtements tendance, accessoires, commande sans friction et paiement sécurisé.',
      en: 'Shop fashion with Glamora — trendy clothing, accessories, hassle-free ordering and secure payments.',
    },
  },
];

/** Flattens the bundled entries down to a single locale. */
export function localizedProjects(locale = 'fr') {
  const kinds = KIND_LABELS[locale] || KIND_LABELS.fr;
  return PROJECTS.map((project) => ({
    name: project.name,
    category: project.category,
    kind: kinds[project.kind] || project.kind,
    year: project.year,
    image: project.image,
    link: project.link,
    linkLabel: project.linkLabel?.[locale] || project.linkLabel?.fr,
    description: project.description[locale] || project.description.fr,
  }));
}
