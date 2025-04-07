import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import uz from "./locales/uz.json";
import eng from "./locales/eng.json";
import ru from "./locales/ru.json"; 

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    debug: true,
    resources: {
      uz: { translation: uz },
      eng: { translation: eng },
      ru: { translation: ru },
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
