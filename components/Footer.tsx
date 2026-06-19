"use client";
import Link from "next/link";
import { nowlogo as logoAsset } from "@/lib/assets";
import { googleMapIcon as locationIcon } from "@/lib/assets";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Phone, Mail, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const PHONE = "0591801214";
const WHATSAPP = "+966591801214";
const EMAIL = "kashifirshad735@gmail.com";

function useServicesList() {
  const { t } = useTranslation();
  return [
    { to: "/services/ac" as const, title: t("services.ac") },
    { to: "/services/washing-machine" as const, title: t("services.washing") },
    { to: "/services/fridge" as const, title: t("services.fridge") },
    { to: "/services/gas-stove" as const, title: t("services.stove") },
  ];
}

export function Footer() {
  const { t } = useTranslation();
  const services = useServicesList();

  return (
    <>
      <footer style={{ background: "var(--brand-text)", color: "#fff" }}>
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img src={logoAsset.url} alt="JM Cooling Center logo" className="h-10 w-auto object-contain" />
              <div className="text-base font-bold leading-tight sm:text-lg">{t("nav.logoName")}</div>
            </div>
            <p className="mt-3 text-sm text-white/80">
              {t("footer.tagline")}
            </p>
          </div>
          <div>
            <h4 className="font-bold">{t("footer.services")}</h4>
            <ul className="mt-3 space-y-1 text-sm text-white/80">
              {services.map((s) => (
                <li key={s.title}>
                  <Link href={s.to} className="hover:underline">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold">{t("footer.contact")}</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                  <Phone className="h-5 w-5" />
                </span>
                <a className="hover:underline" href={`tel:${PHONE}`}>{PHONE}</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <a
                  className="hover:underline"
                  href={`https://wa.me/${WHATSAPP.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {WHATSAPP}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                  <Mail className="h-5 w-5" />
                </span>
                <a className="hover:underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                  <img src={locationIcon.url} alt="Location" className="h-5 w-5 object-contain" />
                </span>
                <span>{t("footer.location")}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                  <Clock className="h-5 w-5" />
                </span>
                <span>24/7</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/15 py-4 text-center text-xs text-white/70">
          © {new Date().getFullYear()} {t("nav.logoName")}. {t("footer.rights")}
        </div>
      </footer>

      <a
        href={`https://wa.me/${WHATSAPP.replace("+", "")}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-2xl text-white shadow-xl hover:scale-110 transition"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </>
  );
}
