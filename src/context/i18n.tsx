import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import fr from '../locales/fr.json';
import en from '../locales/en.json';

type Language = 'fr' | 'en';
type Translations = typeof fr;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const translations = { fr, en };

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const value = {
    language,
    setLanguage,
    t: translations[language] as Translations,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
