import React, { createContext, useContext, useState, ReactNode } from 'react';
import fr from '../locales/fr.json';
import en from '../locales/en.json';
import it from '../locales/it.json';
import es from '../locales/es.json';
import ar from '../locales/ar.json';

type Language = 'fr' | 'en' | 'it' | 'es' | 'ar';
type Translations = typeof fr;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
}

const translations = { fr, en, it, es, ar };

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const isRTL = language === 'ar';

  const value = {
    language,
    setLanguage,
    t: translations[language] as Translations,
    isRTL,
  };

  return (
    <I18nContext.Provider value={value}>
      <div dir={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

export const languages = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
  { code: 'it', label: 'Italiano' },
  { code: 'es', label: 'Español' },
  { code: 'ar', label: 'العربية' },
] as const;
