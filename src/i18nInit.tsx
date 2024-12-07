import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18NextHttpBackend from "i18next-http-backend";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

export default await i18next
  .use(I18nextBrowserLanguageDetector)
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .init({
    lng: navigator.language,
    load: "languageOnly",
    backend: {
      loadPath: "/languages/{{lng}}.json",
    },
    cleanCode: true,
  });
