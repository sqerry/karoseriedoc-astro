import csJson from '../../public/locales/cs/translation.json';
import deJson from '../../public/locales/de/translation.json';

export const languages = {
  cs: 'Čeština',
  de: 'Deutsch',
} as const;

export const defaultLang = 'cs' as const;

export type Lang = keyof typeof languages;

type NestedObject = { [key: string]: string | NestedObject };

function flattenObject(obj: NestedObject, prefix = ''): Record<string, string> {
  const result: Record<string, string> = {};
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    const value = obj[key];
    if (typeof value === 'string') {
      result[fullKey] = value;
    } else {
      Object.assign(result, flattenObject(value as NestedObject, fullKey));
    }
  }
  return result;
}

const csFlat = flattenObject(csJson as unknown as NestedObject);
const deFlat = flattenObject(deJson as unknown as NestedObject);

export const ui = {
  cs: csFlat,
  de: deFlat,
} as const;

export type TranslationKey = keyof typeof ui.cs;
