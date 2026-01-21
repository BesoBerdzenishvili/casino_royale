import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      main: {
        openGame: "OPEN THE GAME",
        installApp: "Install App",
      },
      download: {
        title: "Download Casino",
        subtitle: "Play Min anywhere, anytime",
      },
      info: {
        age: "Only 18+",
        certified: "Casino is certified by the Anjouan Gaming Authority",
      },
      social: {
        title: "Us on social media:",
      },
    },
  },
  ka: {
    translation: {
      main: {
        openGame: "გახსენი თამაში",
        installApp: "ინსტალაცია",
      },
      download: {
        title: "ჩამოტვირთე კაზინო",
        subtitle: "ითამაშე ნებისმიერ დროს და ადგილას",
      },
      info: {
        age: "მხოლოდ 18+",
        certified: "კაზინო სერტიფიცირებულია Anjouan Gaming Authority-ს მიერ",
      },
      social: {
        title: "ჩვენი სოც ქსელები:",
      },
    },
  },
  ru: {
    translation: {
      main: {
        openGame: "ОТКРЫТЬ ИГРУ",
        installApp: "Установка",
      },
      download: {
        title: "Скачать казино",
        subtitle: "Играйте в любом месте, в любое время",
      },
      info: {
        age: "Только 18+",
        certified: "Казино сертифицировано Anjouan Gaming Authority",
      },
      social: {
        title: "Мы в социальных сетях:",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
