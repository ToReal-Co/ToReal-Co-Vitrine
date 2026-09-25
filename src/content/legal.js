/**
 * Legal pages (FR + EN): mentions légales + politique de confidentialité.
 */

import { SITE, CONTACT, ADDRESS } from '../lib/siteConfig';

const phone = CONTACT.phone;
const locality = ADDRESS.locality;
const country = ADDRESS.countryName;
const siteUrl = SITE.url;
const brand = SITE.name;

export const LEGAL_PAGES = [
  {
    slug: 'mentions-legales',
    path: '/mentions-legales/',
    fr: {
      eyebrow: 'Mentions légales',
      seo: {
        title: `Mentions légales | ${brand}`,
        description: `Mentions légales du site ${brand} : éditeur, hébergement, propriété intellectuelle et conditions d’utilisation.`,
        keywords: [
          'mentions légales ToReal&Co',
          'mentions légales Tunisie',
          'éditeur site ToReal&Co',
        ],
      },
      h1: 'Mentions légales',
      updated: 'Dernière mise à jour : 25 septembre 2026',
      sections: [
        {
          h2: 'Éditeur du site',
          body: [
            `Le site ${siteUrl} est édité par ${brand}, boîte de développement informatique basée à ${locality}, ${country}.`,
            `Téléphone : ${phone}.`,
            CONTACT.email
              ? `E-mail : ${CONTACT.email}.`
              : 'Pour toute question, utilisez le formulaire de contact ou WhatsApp indiqués sur le site.',
          ].filter(Boolean),
        },
        {
          h2: 'Hébergement',
          body: [
            'Le site est hébergé par Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco, CA 94104, États-Unis.',
          ],
        },
        {
          h2: 'Propriété intellectuelle',
          body: [
            `L’ensemble des contenus présents sur ce site (textes, images, logos, graphismes, code) est la propriété de ${brand} ou de ses partenaires, sauf mention contraire.`,
            'Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable est interdite.',
          ],
        },
        {
          h2: 'Responsabilité',
          body: [
            `${brand} s’efforce de fournir des informations exactes et à jour. Des erreurs ou omissions peuvent toutefois subsister. L’utilisateur reste seul responsable de l’usage qu’il fait des informations présentes sur le site.`,
            'Les liens vers des sites tiers sont fournis à titre indicatif ; nous n’exerçons aucun contrôle sur leur contenu.',
          ],
        },
        {
          h2: 'Droit applicable',
          body: [
            `Les présentes mentions sont régies par le droit tunisien. En cas de litige, et à défaut d’accord amiable, les tribunaux compétents de ${locality} seront saisis.`,
          ],
        },
      ],
    },
    en: {
      eyebrow: 'Legal notice',
      seo: {
        title: `Legal notice | ${brand}`,
        description: `Legal notice for the ${brand} website: publisher, hosting, intellectual property and terms of use.`,
        keywords: [
          'legal notice ToReal&Co',
          'ToReal&Co Tunisia legal',
        ],
      },
      h1: 'Legal notice',
      updated: 'Last updated: 25 September 2026',
      sections: [
        {
          h2: 'Publisher',
          body: [
            `The website ${siteUrl} is published by ${brand}, a software development company based in ${locality}, Tunisia.`,
            `Phone: ${phone}.`,
            CONTACT.email
              ? `Email: ${CONTACT.email}.`
              : 'For any question, use the contact form or WhatsApp listed on the site.',
          ].filter(Boolean),
        },
        {
          h2: 'Hosting',
          body: [
            'The site is hosted by Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco, CA 94104, United States.',
          ],
        },
        {
          h2: 'Intellectual property',
          body: [
            `All content on this site (text, images, logos, graphics, code) is owned by ${brand} or its partners, unless otherwise stated.`,
            'Any reproduction, representation, modification or exploitation, in whole or in part, without prior written permission is prohibited.',
          ],
        },
        {
          h2: 'Liability',
          body: [
            `${brand} strives to provide accurate and up-to-date information. Errors or omissions may nonetheless occur. Users remain solely responsible for how they use the information on this site.`,
            'Links to third-party sites are provided for reference; we have no control over their content.',
          ],
        },
        {
          h2: 'Governing law',
          body: [
            `These notices are governed by Tunisian law. In the event of a dispute, and failing an amicable settlement, the competent courts of ${locality} shall have jurisdiction.`,
          ],
        },
      ],
    },
  },
  {
    slug: 'politique-de-confidentialite',
    path: '/politique-de-confidentialite/',
    fr: {
      eyebrow: 'Confidentialité',
      seo: {
        title: `Politique de confidentialité | ${brand}`,
        description: `Politique de confidentialité de ${brand} : données collectées, finalités, durée de conservation et vos droits.`,
        keywords: [
          'politique de confidentialité ToReal&Co',
          'protection des données Tunisie',
          'RGPD ToReal&Co',
        ],
      },
      h1: 'Politique de confidentialité',
      updated: 'Dernière mise à jour : 25 septembre 2026',
      sections: [
        {
          h2: 'Qui est responsable',
          body: [
            `${brand}, basée à ${locality} (${country}), est responsable du traitement des données personnelles collectées via ce site.`,
            `Contact : ${phone}${CONTACT.email ? ` · ${CONTACT.email}` : ''}.`,
          ],
        },
        {
          h2: 'Données que nous collectons',
          body: [
            'Lorsque vous réservez un appel découverte, nous collectons : votre nom, votre adresse e-mail, le type de projet choisi, vos notes éventuelles, ainsi que le créneau réservé.',
            'Lorsque vous naviguez sur le site, nous enregistrons des données de mesure d’audience first-party : un identifiant anonyme stocké dans votre navigateur, la page visitée et le referrer. Ces données ne sont envoyées qu’à notre propre API, jamais à un tiers publicitaire.',
            'Si vous nous contactez via WhatsApp, les échanges sont soumis aux conditions de Meta / WhatsApp.',
          ],
        },
        {
          h2: 'Finalités',
          body: [
            'Nous utilisons ces données pour : répondre à votre demande et organiser l’appel découverte ; vous confirmer le rendez-vous ; améliorer le site à partir de statistiques agrégées ; respecter nos obligations légales.',
            'Nous ne vendons pas vos données et ne les utilisons pas pour de la publicité ciblée.',
          ],
        },
        {
          h2: 'Conservation',
          body: [
            'Les données de prise de rendez-vous sont conservées le temps nécessaire au suivi de votre demande, puis archivées ou supprimées au plus tard 24 mois après le dernier échange, sauf obligation légale contraire.',
            'Les données d’audience anonymisées sont conservées sous forme agrégée pour l’analyse du trafic.',
          ],
        },
        {
          h2: 'Destinataires et sous-traitants',
          body: [
            'Vos données sont accessibles à l’équipe de ToReal&Co. Elles peuvent transiter par des prestataires techniques (hébergement Netlify, infrastructure API) uniquement pour l’exécution du service.',
            'Aucun transfert à des fins commerciales n’est effectué.',
          ],
        },
        {
          h2: 'Vos droits',
          body: [
            'Conformément à la législation tunisienne applicable en matière de protection des données personnelles, et, le cas échéant, au RGPD si vous êtes situé dans l’Union européenne, vous disposez d’un droit d’accès, de rectification, d’effacement et d’opposition.',
            `Pour exercer ces droits, contactez-nous au ${phone} ou via WhatsApp. Nous répondons dans un délai raisonnable.`,
          ],
        },
        {
          h2: 'Cookies et stockage local',
          body: [
            'Ce site n’utilise pas de cookies publicitaires tiers. Un identifiant technique first-party peut être stocké dans le localStorage de votre navigateur uniquement pour mesurer les pages vues.',
            'Vous pouvez le supprimer à tout moment en effaçant les données du site dans les paramètres de votre navigateur.',
          ],
        },
        {
          h2: 'Modifications',
          body: [
            'Cette politique peut être mise à jour. La date de dernière mise à jour figure en tête de page. En cas de changement substantiel, nous adapterons la présente notice en conséquence.',
          ],
        },
      ],
    },
    en: {
      eyebrow: 'Privacy',
      seo: {
        title: `Privacy policy | ${brand}`,
        description: `${brand} privacy policy: data we collect, purposes, retention and your rights.`,
        keywords: [
          'privacy policy ToReal&Co',
          'data protection Tunisia',
        ],
      },
      h1: 'Privacy policy',
      updated: 'Last updated: 25 September 2026',
      sections: [
        {
          h2: 'Who is responsible',
          body: [
            `${brand}, based in ${locality} (Tunisia), is the controller of personal data collected through this website.`,
            `Contact: ${phone}${CONTACT.email ? ` · ${CONTACT.email}` : ''}.`,
          ],
        },
        {
          h2: 'Data we collect',
          body: [
            'When you book a discovery call, we collect: your name, email address, chosen project type, any notes you add, and the booked time slot.',
            'When you browse the site, we record first-party analytics: an anonymous identifier stored in your browser, the page visited and the referrer. These data are sent only to our own API, never to an advertising third party.',
            'If you contact us via WhatsApp, those exchanges are subject to Meta / WhatsApp terms.',
          ],
        },
        {
          h2: 'Purposes',
          body: [
            'We use this data to: answer your request and schedule the discovery call; confirm the appointment; improve the site from aggregated statistics; meet our legal obligations.',
            'We do not sell your data and do not use it for targeted advertising.',
          ],
        },
        {
          h2: 'Retention',
          body: [
            'Booking data is kept for as long as needed to follow up on your request, then archived or deleted no later than 24 months after the last exchange, unless a longer legal obligation applies.',
            'Anonymised analytics are retained in aggregated form for traffic analysis.',
          ],
        },
        {
          h2: 'Recipients and processors',
          body: [
            'Your data is accessible to the ToReal&Co team. It may pass through technical providers (Netlify hosting, API infrastructure) solely to run the service.',
            'No commercial transfer takes place.',
          ],
        },
        {
          h2: 'Your rights',
          body: [
            'Under applicable Tunisian personal-data law, and where relevant the GDPR if you are in the European Union, you have rights of access, rectification, erasure and objection.',
            `To exercise these rights, contact us at ${phone} or via WhatsApp. We respond within a reasonable time.`,
          ],
        },
        {
          h2: 'Cookies and local storage',
          body: [
            'This site does not use third-party advertising cookies. A first-party technical identifier may be stored in your browser’s localStorage solely to measure page views.',
            'You can delete it at any time by clearing site data in your browser settings.',
          ],
        },
        {
          h2: 'Changes',
          body: [
            'This policy may be updated. The last-updated date appears at the top of the page. Material changes will be reflected in this notice.',
          ],
        },
      ],
    },
  },
];

export function getLegalPage(slug, locale = 'fr') {
  const page = LEGAL_PAGES.find((entry) => entry.slug === slug);
  if (!page) return null;
  const copy = page[locale] || page.fr;
  return {
    slug: page.slug,
    path: page.path,
    ...copy,
  };
}

export function localizedLegalPages(locale = 'fr') {
  return LEGAL_PAGES.map((page) => getLegalPage(page.slug, locale)).filter(Boolean);
}
