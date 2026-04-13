import en from "./en.json";
import sl from "./sl.json";

export const languages = {
  en: "English",
  sl: "Slovenščina",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

const dictionaries = {
  en,
  sl,
} as const;

export type Dictionary = (typeof dictionaries)[Lang];

export function isLang(value: string): value is Lang {
  return value in languages;
}

export function getDictionary(lang: string): Dictionary {
  return dictionaries[isLang(lang) ? lang : defaultLang];
}
