import { ru } from './ru';

export type Locale = 'en' | 'ru';
export type TranslationKey = keyof typeof ru;

export const translations = {
  ru,
  en: {}, // Пустой объект для английского (можно добавить позже)
};

export const defaultLocale: Locale = 'ru'; // Устанавливаем русский как язык по умолчанию

export const t = (key: TranslationKey, locale: Locale = defaultLocale): string => {
  const translation = translations[locale][key];
  return translation || key; // Возвращаем ключ, если перевод не найден
};
