import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.losdiablitos.fr',
  // Le site est servi depuis le sous-répertoire /V4 sur l'hébergement OVH.
  // Pour le déployer à la racine (ou sur un sous-domaine), remettre base: '/'.
  base: '/V4',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
