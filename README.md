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

## Déploiement chez OVH (sous-répertoire /V4)

Le site est configuré pour être servi depuis **`https://www.losdiablitos.fr/V4/`**
(`base: '/V4'` dans `astro.config.mjs`).

1. Générer le site : `npm install` puis `npm run build`.
2. Envoyer **tout le contenu du dossier `dist/`** dans le répertoire `V4/` de
   l'hébergement OVH (via FTP/SFTP — FileZilla — ou le gestionnaire de fichiers OVH).
   La structure finale doit être `.../V4/index.html`, `.../V4/uploads/…`, etc.
3. Ouvrir `https://www.losdiablitos.fr/V4/`.

> **Changer d'emplacement.** Pour déployer à la racine du domaine (ou sur un
> sous-domaine), remettre `base: '/'` dans `astro.config.mjs` et reconstruire.
> Pour un autre sous-répertoire, mettre `base: '/nom-du-repertoire'`. Tous les
> chemins internes s'adaptent automatiquement (voir `src/lib/url.ts`).

> **Note.** La vidéo d'accueil fait ~32 Mo ; vérifier le quota d'espace OVH.
> Les polices (Google Fonts) sont chargées depuis un CDN externe.

## Mise à jour des horaires et tarifs

- **Horaires des cours & professeurs** : `src/pages/lescours.astro` (tableau `schedule`).
- **Lien d'inscription** : `ficheInscription` dans `src/data/site.ts` (actuellement le lien
  HelloAsso de la saison 2026/2027). Pour proposer aussi une fiche PDF, déposer le fichier dans
  `public/uploads/` et adapter le lien.
- **Contacts / téléphones** : `contacts` dans `src/data/site.ts`.
