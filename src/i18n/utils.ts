import { ui, defaultLang, type Lang, type TranslationKey } from './translations';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = url.pathname;
  const parts = pathname.split('/').filter(Boolean);
  return parts[parts.length - 1];
}

// Helper to get localized path
export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}

// Route translations for German
export const routes: Record<string, Record<string, string>> = {
  de: {
    sluzby: 'dienstleistungen',
    galerie: 'galerie',
    kontakt: 'kontakt',
  },
};

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, targetLang: Lang = lang): string {
    const pathName = path.replace(/^\//, '').replace(/\/$/, '');

    if (targetLang === defaultLang) {
      return path.startsWith('/') ? path : `/${path}`;
    }

    const translatedPath =
      routes[targetLang]?.[pathName] !== undefined
        ? `/${routes[targetLang][pathName]}`
        : path.startsWith('/')
          ? path
          : `/${path}`;

    return `/${targetLang}${translatedPath}`;
  };
}
