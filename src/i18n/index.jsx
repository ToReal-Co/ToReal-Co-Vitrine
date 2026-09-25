import { createContext, useContext, useMemo } from 'react';
import fr from './fr';
import en from './en';

export const DICTIONARIES = { fr, en };
export const DEFAULT_LOCALE = 'fr';
export const LOCALES = ['fr', 'en'];

const LocaleContext = createContext({ locale: DEFAULT_LOCALE, t: fr });

/**
 * Derives the locale from a pathname. Everything under "/en" is English;
 * everything else — including the French service landing pages — is French,
 * which is the locale that owns the root URL.
 */
export function localeFromPath(pathname = '/') {
  return /^\/en(\/|$)/.test(pathname) ? 'en' : DEFAULT_LOCALE;
}

/** Strips the "/en" prefix so the path can be re-localized. */
export function stripLocalePrefix(pathname = '/') {
  const clean = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (!/^\/en(\/|$)/.test(clean)) return clean === '' ? '/' : clean;
  const rest = clean.replace(/^\/en/, '') || '/';
  return rest.startsWith('/') ? rest : `/${rest}`;
}

/** Prefixes an in-site path with the locale segment ("/en" for English). */
export function localizePath(path, locale) {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'en') return clean === '/' ? '/en/' : `/en${clean}`;
  return clean;
}

/** Rewrites the current pathname into the other locale, keeping the page. */
export function swapLocalePath(pathname, targetLocale) {
  return localizePath(stripLocalePrefix(pathname), targetLocale);
}

export function LocaleProvider({ locale = DEFAULT_LOCALE, children }) {
  const value = useMemo(
    () => ({ locale, t: DICTIONARIES[locale] || DICTIONARIES[DEFAULT_LOCALE] }),
    [locale]
  );
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

/** Returns { locale, t } — `t` being the whole dictionary for that locale. */
export function useI18n() {
  return useContext(LocaleContext);
}
