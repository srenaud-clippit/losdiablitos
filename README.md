# Los Diablitos — Site web

Site statique de l'association de danse latine **Los Diablitos** (Salsa, Bachata, Kizomba) à Thoiry (Yvelines), construit avec [Astro](https://astro.build).

Reproduction du site original [losdiablitos.fr](https://www.losdiablitos.fr/) : même contenu, page d'accueil avec vidéo plein écran et menu/éléments superposés par-dessus.

## Développement

```bash
npm install
npm run dev      # serveur de développement sur http://localhost:4321
npm run build    # génère le site statique dans dist/
npm run preview  # prévisualise le build
```

## Structure

```
src/
├── components/   Header (menu superposé), Footer
├── data/site.ts  Menu, contacts, liens (source unique de vérité)
├── layouts/      Layout de base (head, header, footer)
├── pages/
│   ├── index.astro          Accueil — vidéo plein écran + « Un peu d'histoire »
│   ├── lescours.astro       Les cours — horaires + fiche d'inscription
│   ├── event.astro          Evènements — soirées SBK
│   └── nous-contacter.astro Contact — coordonnées + formulaire
└── styles/global.css
public/uploads/   Vidéo, logos, images et PDF (règlement, fiche d'inscription)
```

## Déploiement chez OVH (site portable)

Le site utilise **des chemins entièrement relatifs** : il fonctionne quel que soit
l'endroit où on le dépose (racine du domaine, `/V4`, `/test`, dossier renommé…),
**sans aucune reconstruction ni configuration** (voir `src/lib/url.ts` et
`inlineStylesheets: 'always'` dans `astro.config.mjs`).

1. Générer le site : `npm install` puis `npm run build`.
2. Envoyer **tout le contenu du dossier `dist/`** dans le répertoire voulu de
   l'hébergement OVH (via FTP/SFTP — FileZilla — ou le gestionnaire de fichiers OVH).
   Par exemple, pour un aperçu : copier dans `V4/` → le site est visible sur
   `https://www.losdiablitos.fr/V4/`. Pour le mettre en production : copier
   directement à la racine (`www/`).
3. Déplacer ou renommer le dossier plus tard ne casse rien : les liens et assets
   restent relatifs.

> **Note.** La vidéo d'accueil fait ~32 Mo ; vérifier le quota d'espace OVH.
> Les polices (Google Fonts) sont chargées depuis un CDN externe.

## Mise à jour des horaires et tarifs

- **Horaires des cours & professeurs** : `src/pages/lescours.astro` (tableau `schedule`).
- **Inscription en ligne** : `inscriptionEnLigne` dans `src/data/site.ts` (lien HelloAsso de la
  saison 2026/2027, qui porte aussi les tarifs).
- **Fiche d'inscription papier (PDF)** : `fichePdf` dans `src/data/site.ts`, actuellement
  `/uploads/2026/07/Inscription-2026-2027.pdf`. Pour changer de fiche, déposer le nouveau PDF
  dans `public/uploads/` et mettre à jour ce chemin ; passer la valeur à `null` retire le bouton
  papier et sa mention de la page « Les cours ».
- **Contacts / téléphones** : `contacts` dans `src/data/site.ts`.
