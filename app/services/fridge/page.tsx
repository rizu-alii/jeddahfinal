"use client";

import Link from "next/link";
import { fridge1 as f1 } from "@/lib/assets";
import { SERVICE_CATEGORIES } from "@/lib/service-features";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const PHONE = "0591801214";
const WHATSAPP = "+966591801214";
const features = SERVICE_CATEGORIES.fridge.features;

export default function FridgePage() {
  const { t } = useTranslation();
  return (
    <div style={{ backgroundColor: "var(--brand-bg)", color: "var(--brand-text)" }}>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img src={f1.url} alt={t("services.fridge")} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center text-white">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm">
            {t("servicePage.sameDayService")}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl md:text-6xl">{t("services.fridge")}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/90 sm:text-lg">
            {t("ourServices.fridge.desc")}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold shadow-lg" style={{ color: "var(--brand-primary)" }}><Phone className="h-6 w-6 inline-block" /> {t("servicePage.call")} {PHONE}
            </a>
            <a href={`https://wa.me/${WHATSAPP.replace("+", "")}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-bold text-white shadow transition hover:brightness-110 sm:px-8 sm:py-4">
              <WhatsAppIcon className="h-5 w-5 shrink-0" /> {t("servicePage.whatsapp")}
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl" style={{ color: "var(--brand-primary)" }}>{t("servicePage.repairServices")}</h2>
          <p className="mx-auto mt-3 max-w-2xl">{t("servicePage.quickRepairDesc")}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Link
              key={f.slug}
              href={`/services/fridge/${f.slug}`}
              className="relative overflow-hidden rounded-2xl shadow-md group h-80 block"
            >
              <img src={f.image.url} alt={t(`fridgeFeatures.${f.slug}.title`)} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between gap-3 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
                <h3 className="text-sm font-bold leading-tight" style={{ color: "var(--brand-primary)" }}>{t(`fridgeFeatures.${f.slug}.title`)}</h3>
                <span className="shrink-0 rounded-lg px-4 py-2 text-xs font-semibold text-white shadow" style={{ background: "var(--gradient-brand)" }}>{t("servicePage.more")}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About */}
      <section style={{ background: "#fff" }}>
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl" style={{ color: "var(--brand-primary)" }}>{t("servicePage.quickServiceHeading")}</h2>
          </div>
          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-center text-base leading-relaxed sm:text-lg" style={{ color: "var(--brand-text)" }}>
            <p>{t("servicePage.quickServiceP1")}</p>
            <p>{t("servicePage.quickServiceP2")}</p>
            <p>{t("servicePage.quickServiceP3")}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="overflow-hidden rounded-3xl p-10 text-center text-white shadow-xl sm:p-14" style={{ background: "var(--gradient-brand)" }}>
          <h2 className="text-3xl font-extrabold sm:text-4xl">{t("servicePage.bookNow")}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/90">{t("servicePage.24hEmergency")}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold shadow" style={{ color: "var(--brand-primary)" }}><Phone className="h-6 w-6 inline-block" /> {t("servicePage.call")} {PHONE}
            </a>
            <a href={`https://wa.me/${WHATSAPP.replace("+", "")}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-bold text-white shadow transition hover:brightness-110">
              <WhatsAppIcon className="h-5 w-5 shrink-0" /> {t("cta.whatsapp")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
