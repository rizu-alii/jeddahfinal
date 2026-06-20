"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { nowlogo as logoAsset } from "@/lib/assets";
import { immgCompressed as technicianToolsImg } from "@/lib/assets";
import { parallaxBg as parallaxBgImg } from "@/lib/assets";
import { heroIndoorAc as ac1 } from "@/lib/assets";
import { fridge1 } from "@/lib/assets";
import { stove1 } from "@/lib/assets";
import { washing1 } from "@/lib/assets";
import { hero2, hero3, hero4, heroAcLadder, heroIndoorAc } from "@/lib/assets";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const heroImages = [
  { src: heroAcLadder.url, alt: "Technician on ladder repairing outdoor AC unit" },
  { src: heroIndoorAc.url, alt: "Technician servicing indoor split AC unit" },
  { src: hero2.url, alt: "Technician cleaning split AC indoor unit" },
  { src: hero3.url, alt: "Technician servicing AC compressor" },
  { src: hero4.url, alt: "AC maintenance and brush cleaning" },
];

function HeroCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % heroImages.length), 3500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {heroImages.map((img, idx) => (
        <Image
          key={idx}
          src={img.src}
          alt={img.alt}
          fill
          sizes="100vw"
          className={`absolute inset-0 object-cover transition-opacity duration-700 ${idx === i ? "opacity-100 animate-[zoom_6s_linear]" : "opacity-0"}`}
          priority={idx === 0}
        />
      ))}
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 z-10">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all ${idx === i ? "w-6 bg-white" : "w-2 bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
}

function ScrollPopImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="relative overflow-hidden rounded-3xl shadow-2xl">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`object-cover transition-all ${
          visible ? "opacity-100 animate-[popIn_0.9s_ease-out_forwards]" : "opacity-0 translate-y-8 scale-90"
        }`}
      />
      <div
        className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20"
      />
    </div>
  );
}

const PHONE = "0591801214";
const WHATSAPP = "+966591801214";
const EMAIL = "kashifirshad735@gmail.com";

function useServicesList() {
  const { t } = useTranslation();
  return [
    { title: t("ourServices.ac.title"), desc: t("ourServices.ac.desc"), icon: "❄️", to: "/services/ac" },
    { title: t("ourServices.washing.title"), desc: t("ourServices.washing.desc"), icon: "🧺", to: "/services/washing-machine" },
    { title: t("ourServices.fridge.title"), desc: t("ourServices.fridge.desc"), icon: "🧊", to: "/services/fridge" },
    { title: t("ourServices.stove.title"), desc: t("ourServices.stove.desc"), icon: "🔥", to: "/services/gas-stove" },
  ];
}

function ServiceCard({ img, title, desc, to, delay = 0 }: { img: string; title: string; desc: string; to: string; delay?: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <Link
      ref={ref}
      href={to}
      className={`group relative block overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black/5 transition-all duration-500 ease-out hover:z-10 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${
        visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
      }`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      <div className="h-56 w-full relative">
        <Image src={img} alt={title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-110" />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold" style={{ color: "var(--brand-primary)" }}>
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--brand-text)" }}>
          {desc}
        </p>
        <span
          className="mt-5 inline-block rounded-xl px-8 py-3 font-bold text-white shadow transition hover:brightness-110"
          style={{ backgroundColor: "var(--brand-primary)" }}
        >
          <BookNowLabel />
        </span>
      </div>
    </Link>
  );
}

function BookNowLabel() {
  const { t } = useTranslation();
  return <>{t("ourServices.bookNow")} {PHONE}</>;
}

function FaqAccordion() {
  const { t } = useTranslation();
  const items = t("faq.items", { returnObjects: true }) as unknown as Array<{ q: string; a: string }>;
  const [openIndex, setOpenIndex] = useState<number | null>(5);
  return (
    <div>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="border-b" style={{ borderColor: "#e5e7eb" }}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="flex w-full items-center gap-2 py-4 text-start text-base font-semibold sm:text-lg"
              style={{ color: "var(--brand-text)" }}
            >
              <svg
                className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-90" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
              {item.q}
            </button>
            {isOpen && (
              <div className="pb-4 text-sm leading-relaxed" style={{ color: "var(--brand-text)", opacity: 0.85 }}>
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function HomePageClient() {
  const { t } = useTranslation();
  const services = useServicesList();
  return (
    <div style={{ backgroundColor: "var(--brand-bg)", color: "var(--brand-text)" }}>
      <section id="home" className="relative min-h-[75vh] md:min-h-screen flex items-center justify-center">
        <HeroCarousel />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center text-white">
          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/90 sm:text-lg md:text-xl">
            {t("hero.subtitle")}
          </p>
          <div className="mt-10 flex flex-col gap-3 justify-center items-center sm:flex-row sm:gap-4">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-bold shadow-lg"
              style={{ color: "var(--brand-primary)" }}
            ><Phone className="h-6 w-6 inline-block" /> {t("hero.call")} {PHONE}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP.replace("+", "")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-3 font-bold text-white shadow-lg transition hover:brightness-110"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" /> {t("hero.whatsapp")}
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 text-center text-sm">
            <div><div className="text-2xl font-extrabold">24/7</div>{t("hero.available")}</div>
            <div><div className="text-2xl font-extrabold">10+</div>{t("hero.yearsExp")}</div>
            <div><div className="text-2xl font-extrabold">100%</div>{t("hero.guaranteed")}</div>
          </div>
        </div>
      </section>

      {/* About / Intro Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative mx-auto w-full max-w-md md:max-w-full" style={{ aspectRatio: "4/5" }}>
            <div
              className="absolute -bottom-5 -left-5 z-0 h-full w-full rounded-3xl"
              style={{ backgroundColor: "var(--brand-primary)" }}
            />
            <div className="absolute -top-4 -right-4 z-0 grid grid-cols-4 gap-2">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: "var(--brand-primary)", opacity: 0.25 }}
                />
              ))}
            </div>
            <Image
              src={technicianToolsImg.url}
              alt="Professional repair tools and equipment"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="relative z-10 rounded-3xl object-cover shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl" style={{ color: "var(--brand-primary)" }}>
              {t("about.heading")}
            </h2>
            <p className="mt-4 text-base sm:text-lg" style={{ color: "var(--brand-text)" }}>
              {t("about.p1")}
            </p>
            <p className="mt-4 text-base sm:text-lg" style={{ color: "var(--brand-text)" }}>
              {t("about.p2")}
            </p>
            <p className="mt-4 text-base sm:text-lg" style={{ color: "var(--brand-text)" }}>
              {t("about.p3")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-bold text-white shadow"
                style={{ backgroundColor: "var(--brand-primary)" }}
              ><Phone className="h-6 w-6 inline-block" /> {t("nav.callNow")}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP.replace("+", "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-6 py-3 font-bold text-white shadow transition hover:brightness-110"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" /> {t("hero.whatsapp")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${parallaxBgImg.url})`, minHeight: "60vh" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex min-h-[60vh] items-center justify-center px-4 text-center text-white">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              {t("parallax.title")}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/90 sm:text-lg md:text-xl">
              {t("parallax.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl" style={{ color: "var(--brand-primary)" }}>
          {t("ourServices.title")}
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <ServiceCard img={ac1.url} title={t("ourServices.ac.title")} desc={t("ourServices.ac.desc")} to="/services/ac" delay={0} />
          <ServiceCard img={washing1.url} title={t("ourServices.washing.title")} desc={t("ourServices.washing.desc")} to="/services/washing-machine" delay={100} />
          <ServiceCard img={fridge1.url} title={t("ourServices.fridge.title")} desc={t("ourServices.fridge.desc")} to="/services/fridge" delay={200} />
          <ServiceCard img={stove1.url} title={t("ourServices.stove.title")} desc={t("ourServices.stove.desc")} to="/services/gas-stove" delay={300} />
        </div>
      </section>

      <section id="about" style={{ background: "#fff" }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl" style={{ color: "var(--brand-primary)" }}>
              {t("why.title")}
            </h2>
            <p className="mt-4" style={{ color: "var(--brand-text)" }}>
              {t("why.desc")}
            </p>
            <ul className="mt-6 space-y-3 text-sm" style={{ color: "var(--brand-text)" }}>
              {(["i1", "i2", "i3", "i4"] as const).map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ background: "var(--brand-primary)" }}
                  >
                    ✓
                  </span>
                  {t(`why.items.${key}`)}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-xl p-8 text-white shadow-xl"
            style={{ backgroundColor: "var(--brand-primary)" }}
          >
            <h3 className="text-2xl font-bold">{t("why.urgent")}</h3>
            <p className="mt-2 text-white/90">
              {t("why.urgentDesc")}
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="rounded-xl bg-white/15 p-4">
                <div className="font-semibold"><Phone className="h-6 w-6 inline-block" /> {t("why.phone")}</div>
                <a href={`tel:${PHONE}`} className="text-lg font-bold">{PHONE}</a>
              </div>
              <div className="rounded-xl bg-white/15 p-4">
                <div className="inline-flex items-center gap-2 font-semibold"><WhatsAppIcon className="h-5 w-5 shrink-0" /> {t("why.whatsapp")}</div>
                <a
                  href={`https://wa.me/${WHATSAPP.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-lg font-bold"
                >
                  {WHATSAPP}
                </a>
              </div>
              <div className="rounded-xl bg-white/15 p-4">
                <div className="font-semibold inline-flex items-center gap-1"><Mail className="h-4 w-4" /> {t("why.email")}</div>
                <a href={`mailto:${EMAIL}`} className="block break-all text-base font-bold">{EMAIL}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl" style={{ color: "var(--brand-primary)" }}>
          {t("faq.title")}
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-start">
          <div className="overflow-hidden rounded-xl relative" style={{ aspectRatio: "1/1" }}>
            <Image
              src={ac1.url}
              alt="AC technician servicing unit"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <FaqAccordion />
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div
          className="overflow-hidden rounded-xl p-10 text-center text-white shadow-xl sm:p-14"
          style={{ backgroundColor: "var(--brand-primary)" }}
        >
          <h2 className="text-3xl font-extrabold sm:text-4xl">{t("cta.title")}</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            {t("cta.subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-bold shadow"
              style={{ color: "var(--brand-primary)" }}
            ><Phone className="h-6 w-6 inline-block" /> {t("hero.call")} {PHONE}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP.replace("+", "")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-6 py-3 font-bold text-white shadow transition hover:brightness-110"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" /> {t("cta.whatsapp")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
