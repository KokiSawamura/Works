import { getCurrentLangCookie } from 'domain/middleware/cookie';

const LANG = {
  EN: 'English',
  JP: '日本語',
};

const localizationData = {
  currentLang: 'English',
  previewLang: '',
  isOpen: false,
  isSelectOpen: false,
  animation: '',
  languages: [
    LANG.EN,
    LANG.JP,
  ],
};

localizationData.currentLang = getCurrentLangCookie();
if (typeof localizationData.currentLang === 'undefined') {
  localizationData.currentLang = 'English';
}

export const Localization = localizationData;
