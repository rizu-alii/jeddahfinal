import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/locales/en.json";
import ar from "@/locales/ar.json";

const STORAGE_KEY = "app-lang";

let currentLanguage: "en" | "ar" = "ar";

function detectInitialLanguage(): "en" | "ar" {
  // Default the app to Arabic. Server and client both render Arabic on first paint.
  return "ar";
}

export function getStoredLanguage(): "en" | "ar" {
  if (typeof window === "undefined") return "ar";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "ar") return saved;
  } catch {}
  return "ar";
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    lng: detectInitialLanguage(),
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

export function getCurrentLanguage(): "en" | "ar" {
  if (typeof window !== "undefined" && i18n.language) {
    return (i18n.language === "en" ? "en" : "ar") as "en" | "ar";
  }
  return currentLanguage;
}

export function setLanguage(lng: "en" | "ar") {
  currentLanguage = lng;
  i18n.changeLanguage(lng);
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, lng);
    } catch {}
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  }
}

export function toggleLanguage() {
  const newLang = getCurrentLanguage() === "ar" ? "en" : "ar";
  setLanguage(newLang);
}

export default i18n;
