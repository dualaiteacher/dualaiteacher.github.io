import en from "./en.json";
import sl from "./sl.json";
import cs from "./cs.json";
import de from "./de.json";
import es from "./es.json";
import lv from "./lv.json";
import pl from "./pl.json";
import sk from "./sk.json";

export const languages = {
  en: "English",
  sl: "Slovenščina",
  cs: "Čeština",
  de: "Deutsch",
  es: "Español",
  lv: "Latviešu",
  pl: "Polski",
  sk: "Slovenčina",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

const dictionaries = {
  en,
  sl,
  cs,
  de,
  es,
  lv,
  pl,
  sk,
} as const;

export type Dictionary = (typeof dictionaries)[Lang];
export type CookieConsentTranslation = typeof en.cookieConsent;
export const defaultCookieConsent: CookieConsentTranslation = en.cookieConsent;
export type ContactSectionTranslation = typeof en.contactSection;
export const defaultContactSection: ContactSectionTranslation = en.contactSection;
export type NewsSectionTranslation = typeof en.newsSection;
export const defaultNewsSection: NewsSectionTranslation = en.newsSection;

export function isLang(value: string): value is Lang {
  return value in languages;
}

export function getDictionary(lang: string): Dictionary {
  return dictionaries[isLang(lang) ? lang : defaultLang];
}
