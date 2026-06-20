"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { nowlogo as logoAsset } from "@/lib/assets";
import { Phone, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toggleLanguage, getCurrentLanguage } from "@/lib/i18n";

const PHONE = "0591801214";

function useServiceLinks() {
  const { t } = useTranslation();
  return [
    { to: "/services/ac" as const, label: t("services.ac") },
    { to: "/services/washing-machine" as const, label: t("services.washing") },
    { to: "/services/fridge" as const, label: t("services.fridge") },
    { to: "/services/gas-stove" as const, label: t("services.stove") },
  ];
}

function ServicesDropdown() {
  const { t } = useTranslation();
  const serviceLinks = useServiceLinks();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);
  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-1 hover:opacity-70"
      >
        {t("nav.services")}
        <svg className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 011.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-1/2 mt-3 w-72 -translate-x-1/2 overflow-hidden rounded-2xl border bg-white shadow-2xl" style={{ borderColor: "#d6e4f5" }}>
          {serviceLinks.map((s) => (
            <Link
              key={s.to}
              href={s.to}
              onClick={() => setOpen(false)}
              className="flex items-center px-4 py-3 transition hover:bg-[var(--brand-bg)]"
            >
              <span className="font-semibold" style={{ color: "var(--brand-primary)" }}>{s.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function LanguageToggle({ className = "" }: { className?: string }) {
  const { t, i18n: i18nInstance } = useTranslation();
  const [currentLang, setCurrentLang] = useState("ar");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    setCurrentLang(getCurrentLanguage());
  }, []);

  useEffect(() => {
    const handleLangChange = () => {
      setCurrentLang(getCurrentLanguage());
    };
    
    i18nInstance.on("languageChanged", handleLangChange);
    return () => i18nInstance.off("languageChanged", handleLangChange);
  }, [i18nInstance]);

  const handleToggle = () => {
    toggleLanguage();
  };

  if (!isHydrated) return null;

  return (
    <button
      onClick={handleToggle}
      className={`inline-flex items-center gap-1 rounded-lg border px-3 py-1.5 text-xs font-semibold transition hover:bg-gray-50 ${className}`}
      style={{ borderColor: "#d6e4f5", color: "var(--brand-primary)" }}
      aria-label="تبديل اللغة"
    >
      <Languages className="h-4 w-4" />
      {currentLang === "ar" ? "English" : "العربية"}
    </button>
  );
}

export function Header() {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) setMobileOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur" style={{ borderColor: "#d6e4f5" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <img src={logoAsset.url} alt="شعار مركز جدة للتبريد" className="h-5 w-auto object-contain sm:h-7" />
          <div className="flex items-center">
            <div className="text-base font-bold leading-tight sm:text-lg" style={{ color: "var(--brand-primary)" }}>
              {t("nav.logoName")}
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm font-semibold md:flex" style={{ color: "var(--brand-text)" }}>
          <Link href="/" className="hover:opacity-70">{t("nav.home")}</Link>
          <ServicesDropdown />
          <a href="/#about" className="hover:opacity-70">{t("nav.about")}</a>
          <a href="/#contact" className="hover:opacity-70">{t("nav.contact")}</a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <a
            href={`tel:${PHONE}`}
            className="rounded-lg px-4 py-2 text-sm font-semibold text-white shadow hidden sm:inline-block"
            style={{ background: "var(--brand-primary)" }}
          >
            {t("nav.callNow")}
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            onMouseDown={(e) => e.stopPropagation()}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label={t("nav.toggleMenu")}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div ref={mobileRef} className="md:hidden border-t bg-white px-4 py-4" style={{ borderColor: "#d6e4f5" }}>
          <nav className="flex flex-col gap-4 text-sm font-semibold" style={{ color: "var(--brand-text)" }}>
            <Link href="/" onClick={() => setMobileOpen(false)} className="hover:opacity-70">{t("nav.home")}</Link>
            <MobileServicesDropdown onNavigate={() => setMobileOpen(false)} />
            <a href="/#about" onClick={() => setMobileOpen(false)} className="hover:opacity-70">{t("nav.about")}</a>
            <a href="/#contact" onClick={() => setMobileOpen(false)} className="hover:opacity-70">{t("nav.contact")}</a>
            <a
              href={`tel:${PHONE}`}
              className="mt-2 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-center text-sm font-semibold text-white shadow"
              style={{ background: "var(--brand-primary)" }}
            ><Phone className="h-6 w-6 inline-block" /> {t("hero.call")} {PHONE}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function MobileServicesDropdown({ onNavigate }: { onNavigate: () => void }) {
  const { t } = useTranslation();
  const serviceLinks = useServiceLinks();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex w-full items-center justify-between hover:opacity-70"
        style={{ color: "var(--brand-primary)" }}
      >
        <span className="font-semibold">{t("nav.services")}</span>
        <svg className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 011.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>
      {open && (
        <div className="mt-2 flex flex-col gap-2 ps-4">
          {serviceLinks.map((s) => (
            <Link
              key={s.to}
              href={s.to}
              onClick={onNavigate}
              className="flex items-center hover:opacity-70"
            >
              <span>{s.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
