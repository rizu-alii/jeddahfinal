"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useState, useEffect } from "react";

const PHONE = "0591801214";
const EMAIL = "kashifirshad735@gmail.com";

export function TopBar() {
  const { t } = useTranslation();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div className="text-white py-2 text-sm" style={{ backgroundColor: "var(--brand-primary)" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 flex-wrap gap-2">
        <div className="flex items-center gap-4 flex-wrap">
          {/* Hide email on mobile */}
          <a href={`mailto:${EMAIL}`} className="hidden sm:flex items-center gap-1 hover:opacity-80">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs sm:text-sm">{EMAIL}</span>
          </a>
          <a href={`tel:${PHONE}`} className="flex items-center gap-1 hover:opacity-80">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-xs sm:text-sm">{PHONE}</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/images/google-map-icon.png"
            alt="Location"
            width={16}
            height={16}
            className="h-4 w-4"
          />
          <span className="text-xs sm:text-sm">{t("topbar.location")}</span>
        </div>
      </div>
    </div>
  );
}
