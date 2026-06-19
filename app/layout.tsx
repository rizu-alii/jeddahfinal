import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { I18nInitializer } from "@/components/I18nInitializer";
import { nowlogo as logoAsset } from "@/lib/assets";

const PHONE = "0591801214";
const EMAIL = "kashifirshad735@gmail.com";

export const metadata: Metadata = {
  metadataBase: new URL("https://jaddahmazz.lovable.app"),
  title: "مركز جدة للتبريد — صيانة الأجهزة المنزلية في جدة 24/7",
  description: "مركز جدة للتبريد - خدمات صيانة مكيفات، غسالات، ثلاجات وفريزر، طباخات غاز في جدة. خدمات تنظيف وتصليح وتركيب، متاح 24/7، خدمة في نفس اليوم. اتصل 0591801214.",
  authors: [{ name: "مركز جدة للتبريد" }],
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Al Jeddah Cooling Center — Home Appliance Repair 24/7 in Jeddah",
    description: "Al Jeddah Cooling Center - AC, washing machine, fridge, freezer & gas stove repair services in Jeddah. Same-day service, 24/7 available. Call 0591801214.",
    url: "https://jaddahmazz.lovable.app/",
    siteName: "مركز جدة للتبريد",
    images: [logoAsset.url],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "application/ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://jaddahmazz.lovable.app/#business",
        name: "مركز جدة للتبريد",
        alternateName: "Al Jeddah Cooling Center",
        url: "https://jaddahmazz.lovable.app",
        telephone: "+966591801214",
        email: "kashifirshad735@gmail.com",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "جدة",
          addressCountry: "SA",
        },
        areaServed: { "@type": "City", name: "جدة" },
        openingHoursSpecification: [{
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "00:00",
          closes: "23:59",
        }],
        description: "خدمات صيانة الأجهزة المنزلية في جدة 24/7: تنظيف وتصليح وتصليح المكيفات، تصليح الغسالات، تصليح الثلاجات والفريزر، تصليح طباخات الغاز، خدمات تركيب وتفكيك، تعبئة الغاز.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "خدمات صيانة الأجهزة المنزلية",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "تصليح وتنظيف المكيفات",
                description: "تنظيف وتصليح جميع أنواع المكيفات في جدة"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "تصليح الغسالات",
                description: "خدمات تصليح جميع أنواع الغسالات في جدة"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "تصليح الثلاجات والفريزر",
                description: "خدمات تصليح الثلاجات والفريزر في جدة"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "تصليح طباخات الغاز",
                description: "خدمات تصليح طباخات الغاز في جدة"
              }
            }
          ]
        }
      }
    ]),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body>
        <I18nInitializer />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
