# ToReal&Co - Landing Page

<p align="center">
  <img src="./public/logoToRealSVG.svg" alt="ToReal&Co Logo" width="150">
</p>

Bienvenue sur le dépôt de la **Landing Page** de ToReal&Co, développé avec **React.js** et **Tailwind CSS** pour une performance optimale et une expérience utilisateur moderne.

## Lancer le projet

Suivez les étapes ci-dessous pour lancer le projet en local :

### 1. Cloner le dépôt

```bash
git clone https://github.com/ahmedMahouachi/ToReal-Co.git
cd ToReal-Co
```

### 2. Install Dependencies

Installez **Node.js 26** (ou une version plus récente). Avec [nvm](https://github.com/nvm-sh/nvm) : `nvm install` puis `nvm use` à la racine du projet (fichier `.nvmrc`).

Ensuite, installez les dépendances :

```bash
npm install
```

### 3. Start the Development Server

Once the dependencies are installed, you can start the development server with the following command:

```bash
npm run dev
```

## Build de production

Le site est **prérendu** : chaque route est écrite sur disque sous forme de HTML
complet au moment du build, puis React s'y rattache (hydratation) côté
navigateur. Un robot d'indexation reçoit donc tout le texte dès la première
réponse, sans exécuter de JavaScript.

```bash
npm run build
```

La commande enchaîne trois étapes :

| Étape             | Commande                                              | Rôle                                                        |
| ----------------- | ----------------------------------------------------- | ----------------------------------------------------------- |
| `build:client`    | `vite build`                                          | Bundle navigateur dans `dist/`                              |
| `build:server`    | `vite build --ssr src/entry-server.jsx`               | Bundle de rendu serveur dans `dist-ssr/`                    |
| `prerender`       | `node scripts/prerender.mjs`                          | Écrit le HTML de chaque route, `404.html` et `sitemap.xml`  |

Vérifier le résultat localement : `npm run preview`.

## Ajouter une page

Tout part de `src/lib/routes.js`, qui sert à la fois au prérendu et au client.

1. Rédiger le contenu dans `src/content/services.js` (ou un nouveau module).
2. Déclarer la route dans `src/lib/routes.js` : chemin, langue, `title`,
   `description`, `canonical`, `alternates` (hreflang) et données structurées.
3. Brancher le composant dans `src/App.jsx`.

Le `sitemap.xml` et les balises `<head>` se régénèrent automatiquement au build.
Aucune liste d'URL n'est à maintenir à la main.

## Traductions

Le français occupe `/`, l'anglais `/en/`. Les deux dictionnaires vivent dans
`src/i18n/fr.js` et `src/i18n/en.js` et **doivent garder exactement les mêmes
clés**. Pour le vérifier :

```bash
node --input-type=module -e "
const fr=(await import('./src/i18n/fr.js')).default;
const en=(await import('./src/i18n/en.js')).default;
const walk=(o,p='')=>Object.entries(o).flatMap(([k,v])=>v&&typeof v==='object'&&!Array.isArray(v)?walk(v,p+k+'.'):[p+k]);
const a=new Set(walk(fr)), b=new Set(walk(en));
console.log('FR uniquement:', [...a].filter(k=>!b.has(k)));
console.log('EN uniquement:', [...b].filter(k=>!a.has(k)));
"
```

## Coordonnées et données structurées

Le nom, l'adresse, le téléphone et les profils sociaux sont centralisés dans
`src/lib/siteConfig.js`. Ces valeurs alimentent le balisage Schema.org
(`Organization`, `ProfessionalService`, `LocalBusiness`) et doivent rester
**identiques** à la fiche Google Business Profile : une incohérence entre les
deux empêche la consolidation des signaux de référencement local.
