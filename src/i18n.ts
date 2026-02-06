import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import viCommon from '@/locales/vi/common.json';
import enCommon from '@/locales/en/common.json';

// Basic i18n setup with Vietnamese and English
void i18n.use(initReactI18next).init({
  lng: 'vi',
  fallbackLng: 'vi',
  supportedLngs: ['vi', 'en'],
  interpolation: {
    escapeValue: false,
  },
  resources: {
    vi: {
      common: viCommon,
    },
    en: {
      common: enCommon,
    },
  },
});

export default i18n;

