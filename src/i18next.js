import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./Language/en.json";
import ruTranslations from "./Language/ru.json";
import uzTranslations from "./Language/uz.json";

const currentLanguage = sessionStorage.getItem("language");

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    ru: {
      translation: ruTranslations,
    },
    uz: {
      translation: uzTranslations,
    },
  },
  lng: currentLanguage || "ru", 
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});
i18n.on("languageChanged", (lng) => {
  sessionStorage.setItem("language", lng);
});

export default i18n;

