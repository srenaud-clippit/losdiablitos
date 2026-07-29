import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.losdiablitos.fr',
  // Chemins relatifs et portables : aucun préfixe (base) codé en dur.
  // Le site peut être déposé à la racine ou dans n'importe quel sous-répertoire
  // (voir src/lib/url.ts) sans reconstruction.
  trailingSlash: 'always',
  // Inline le CSS dans le HTML : aucun fichier /_astro/*.css en chemin absolu,
  // le site reste donc entièrement portable (déplaçable dans n'importe quel dossier).
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [sitemap()],
});
