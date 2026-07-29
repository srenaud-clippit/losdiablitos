// Préfixe tous les chemins internes (assets, liens) par la `base` Astro
// configurée (ex. « /V4 »), afin que le site fonctionne dans un sous-répertoire.
const BASE = import.meta.env.BASE_URL; // ex. "/V4/" ou "/"

export function withBase(path: string): string {
  const base = BASE.replace(/\/$/, ''); // enlève le slash final -> "/V4" ou ""
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

// Chemin (pathname) courant ramené à la racine du site (sans la base),
// pour comparer les liens de navigation actifs.
export function relPath(pathname: string): string {
  const base = BASE.replace(/\/$/, '');
  if (base && pathname.startsWith(base)) {
    return pathname.slice(base.length) || '/';
  }
  return pathname;
}
