"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { getFeature, SERVICE_CATEGORIES } from "@/lib/service-features";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const PHONE = "0591801214";
const WHATSAPP = "+966591801214";

export default function FeatureDetailPageClient() {
  const { t } = useTranslation();
  const params = useParams();
  const data = getFeature(params.category as string, params.slug as string);
  
  if (!data) {
    notFound();
  }
  
  const { category, feature } = data;
  const related = category.features.filter((f: typeof feature) => f.slug !== feature.slug).slice(0, 3);
  
  // Map category slug to translation key
  const getCategoryTranslationKey = (catSlug: string) => {
    switch (catSlug) {
      case "ac": return "acFeatures";
      case "washing-machine": return "washingFeatures";
      case "fridge": return "fridgeFeatures";
      case "gas-stove": return "stoveFeatures";
      default: return "acFeatures";
    }
  };
  
  const categoryKey = getCategoryTranslationKey(category.slug);

  return (
    <div style={{ backgroundColor: "var(--brand-bg)", color: "var(--brand-text)" }}>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <Image src={feature.image.url} alt={t(`${categoryKey}.${feature.slug}.title`)} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center text-white">
          <a href={category.parentPath} className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm hover:bg-white/30 transition">
            ← {t(`services.${category.slug.replace("-", "")}`)}
          </a>
          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">{t(`${categoryKey}.${feature.slug}.title`)}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:text-lg">{t(`${categoryKey}.${feature.slug}.desc`)}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-bold shadow" style={{ color: "var(--brand-primary)" }}><Phone className="h-6 w-6 inline-block" /> {t("serviceDetails.call")} {PHONE}</a>
            <a href={`https://wa.me/${WHATSAPP.replace("+", "")}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-bold text-white shadow transition hover:brightness-110 sm:px-7"><WhatsAppIcon className="h-5 w-5 shrink-0" /> {t("serviceDetails.whatsapp")}</a>
          </div>
        </div>
      </section>

      {/* Detail */}
      <section className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <h2 className="text-3xl font-extrabold" style={{ color: "var(--brand-primary)" }}>{t("serviceDetails.aboutThisService")}</h2>
            <p className="mt-4 text-base leading-relaxed">{t(`${categoryKey}.${feature.slug}.longDesc`)}</p>
            <h3 className="mt-8 text-xl font-bold" style={{ color: "var(--brand-primary)" }}>{t("serviceDetails.whatServiceIncludes")}</h3>
            <ul className="mt-4 space-y-3">
              {(t(`${categoryKey}.${feature.slug}.bullets`, { returnObjects: true }) as unknown as string[]).map((bullet: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: "var(--gradient-brand)" }}>✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="md:col-span-2">
            <div className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: "#d6e4f5" }}>
              <h3 className="text-lg font-bold" style={{ color: "var(--brand-primary)" }}>{t("serviceDetails.bookThisService")}</h3>
              <p className="mt-2 text-sm">{t("serviceDetails.bookingDesc")}</p>
              <div className="mt-5 flex flex-col gap-3">
                <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-center font-bold text-white shadow" style={{ background: "var(--gradient-brand)" }}><Phone className="h-6 w-6 inline-block" /> {t("serviceDetails.call")} {PHONE}</a>
                <a href={`https://wa.me/${WHATSAPP.replace("+", "")}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-center font-bold text-white shadow transition hover:brightness-110"><WhatsAppIcon className="h-5 w-5 shrink-0" /> {t("cta.whatsapp")}</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section style={{ background: "#fff" }}>
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold sm:text-4xl" style={{ color: "var(--brand-primary)" }}>{t("serviceDetails.relatedServices")}</h2>
              <p className="mx-auto mt-3 max-w-2xl">{t("serviceDetails.otherServicesDesc", { category: t(`services.${category.slug.replace("-", "")}`) })}</p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r: typeof feature) => (
                <Link
                  key={r.slug}
                  href={`/services/${category.slug}/${r.slug}`}
                  className="relative overflow-hidden rounded-2xl shadow-md group h-80 block"
                >
                  <Image src={r.image.url} alt={t(`${categoryKey}.${r.slug}.title`)} fill className="object-cover transition duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between gap-3 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
                    <h3 className="text-sm font-bold leading-tight" style={{ color: "var(--brand-primary)" }}>{t(`${categoryKey}.${r.slug}.title`)}</h3>
                    <span className="shrink-0 rounded-lg px-4 py-2 text-xs font-semibold text-white shadow" style={{ background: "var(--gradient-brand)" }}>{t("servicePage.more")}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
