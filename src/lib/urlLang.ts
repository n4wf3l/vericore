import { SERVICE_URL_SLUGS, type Lang, type ServiceKey } from '../data/serviceContent';

/** Détecte la langue courante à partir de l'URL */
export const detectLangFromPath = (pathname: string): Lang => {
  if (pathname === '/nl' || pathname.startsWith('/nl/')) return 'nl';
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
  return 'fr';
};

/** Retire le préfixe /nl ou /en pour obtenir le path sans langue */
export const stripLangPrefix = (pathname: string): string => {
  if (pathname === '/nl' || pathname === '/en') return '/';
  if (pathname.startsWith('/nl/') || pathname.startsWith('/en/')) return pathname.slice(3);
  return pathname;
};

/** Détecte si un path contient un slug métier connu (dans une langue donnée) */
const detectServiceInPath = (
  path: string,
  lang: Lang
): { serviceKey: ServiceKey; rest: string } | null => {
  const slugs = SERVICE_URL_SLUGS[lang];
  // Trier par longueur décroissante pour matcher les plus longs en premier
  // (ex: "verwarmingsinstallateur-" avant "chauffagiste-")
  const entries = (Object.entries(slugs) as [ServiceKey, string][]).sort(
    (a, b) => b[1].length - a[1].length
  );
  for (const [key, slug] of entries) {
    const prefix = `/${slug}-`;
    if (path.startsWith(prefix)) {
      return { serviceKey: key, rest: path.slice(prefix.length) };
    }
  }
  return null;
};

/**
 * Traduit un path d'une langue à une autre, en convertissant les slugs métier.
 * Ex: fr `/plombier-uccle/` + toLang=nl → `/loodgieter-uccle/`
 */
export const translatePathSlug = (
  pathWithoutLangPrefix: string,
  fromLang: Lang,
  toLang: Lang
): string => {
  if (fromLang === toLang) return pathWithoutLangPrefix;

  // Essayer d'abord de détecter le slug dans la langue source
  let match = detectServiceInPath(pathWithoutLangPrefix, fromLang);

  // Fallback : essayer les 2 autres langues (URL peut avoir été partagée)
  if (!match) {
    for (const otherLang of ['fr', 'nl', 'en'] as Lang[]) {
      if (otherLang === fromLang) continue;
      match = detectServiceInPath(pathWithoutLangPrefix, otherLang);
      if (match) break;
    }
  }

  if (!match) return pathWithoutLangPrefix;

  const targetSlug = SERVICE_URL_SLUGS[toLang][match.serviceKey];
  return `/${targetSlug}-${match.rest}`;
};

/**
 * Construit l'URL cible pour un changement de langue,
 * en traduisant le slug métier si présent.
 */
export const buildPathForLang = (currentPathname: string, targetLang: Lang): string => {
  const currentLang = detectLangFromPath(currentPathname);
  const stripped = stripLangPrefix(currentPathname);
  const translated = translatePathSlug(stripped, currentLang, targetLang);
  if (targetLang === 'fr') return translated || '/';
  return translated === '/' ? `/${targetLang}` : `/${targetLang}${translated}`;
};
