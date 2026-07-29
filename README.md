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

## Mise à jour des horaires et tarifs

- **Horaires des cours & professeurs** : `src/pages/lescours.astro` (tableau `schedule`).
- **Lien d'inscription** : `ficheInscription` dans `src/data/site.ts` (actuellement le lien
  HelloAsso de la saison 2026/2027). Pour proposer aussi une fiche PDF, déposer le fichier dans
  `public/uploads/` et adapter le lien.
- **Contacts / téléphones** : `contacts` dans `src/data/site.ts`.
