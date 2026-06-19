"use client";

import { useEffect } from "react";
import { setLanguage, getStoredLanguage } from "@/lib/i18n";

export function I18nInitializer() {
  useEffect(() => {
    setLanguage(getStoredLanguage());
  }, []);

  return null;
}
