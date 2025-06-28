import { defaultLocale } from '~/lib/localization';

export const useSettings = () => {
  const [locale, setLocale] = useState<Locale>(defaultLocale); // Используем русский по умолчанию
  
  // ... остальной код хука ...
  
  return {
    locale,
    setLocale,
    // ... остальные возвращаемые значения ...
  };
};
