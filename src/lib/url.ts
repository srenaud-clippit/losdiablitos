// Chemins RELATIFS et portables : le site fonctionne quel que soit l'endroit
// où on le dépose (racine, /V4, /test, dossier renommé…) sans reconstruction.
//
// Comme les pages sont à des profondeurs différentes dans l'arborescence
// (ex. /index.html vs /lescours/index.html), le préfixe relatif ("./" ou "../")
// dépend de la page courante : on le calcule depuis son pathname.

/** Préfixe relatif menant à la racine du site depuis la page courante. */
export function rootPrefix(pathname: string): string {
  const segs = pathname.split('/').filter(Boolean);
  const lastIsFile = segs.length > 0 && segs[segs.length - 1].includes('.');
  const depth = lastIsFile ? segs.length - 1 : segs.length;
  return depth === 0 ? './' : '../'.repeat(depth);
}

/** Construit un chemin relatif portable vers `path` (ex. "/uploads/x.jpg"). */
export function rel(pathname: string, path: string): string {
  return rootPrefix(pathname) + path.replace(/^\//, '');
}
