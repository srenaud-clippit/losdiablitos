export const site = {
  name: 'Los Diablitos',
  tagline: 'Association de Danse Latino à Thoiry',
  email: 'info@losdiablitos.fr',
  facebook: 'https://www.facebook.com/association.losdiablitos',
  reglement: '/uploads/2024/08/LosDiablitos-ReglementInterieur.pdf',
  // Inscription en ligne via HelloAsso (saison 2026/2027).
  inscriptionEnLigne:
    'https://www.helloasso.com/associations/los-diablitos/adhesions/fiche-d-inscription-2026-2027',
  // Fiche d'inscription papier (PDF) : aucune pour l'instant — la fiche est remise
  // directement en cours. Pour proposer un téléchargement, déposer le PDF dans
  // public/uploads/ et renseigner son chemin ici (ex. '/uploads/2026/09/fiche.pdf').
  fichePdf: null as string | null,
  logo: '/uploads/2024/08/Logo200TransV2.png',
};

export const nav = [
  { label: 'Accueil', href: '/' },
  { label: 'Les cours', href: '/lescours/' },
  { label: 'Evènements', href: '/event/' },
  { label: 'Nous contacter', href: '/nous-contacter/' },
];

export const contacts = [
  { name: 'Valérie', phone: '06 87 42 71 64' },
  { name: 'Ingrid', phone: '06 99 33 24 67' },
  { name: 'Jean-François', phone: '06 22 86 91 61' },
  { name: 'Maurice', phone: '06 86 97 59 78' },
];
