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
  title: "مركز جدة للتبريد — صيانة الأجهزة المنزلية في جدة",
  description: "صيانة مكيفات وغسالات وثلاجات وطباخات غاز في جدة 24/7. خدمة سريعة في نفس اليوم. اتصل 0591801214.",
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
    title: "Al Jeddah Cooling Center — Home Appliance Repair 24/7",
    description: "AC, washing machine, fridge & gas stove repair across Jeddah.",
    url: "https://jaddahmazz.lovable.app/",
    siteName: "مركز جدة للتبريد",
    images: [logoAsset.url],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://jaddahmazz.lovable.app/#business",
      name: "مركز جدة للتبريد",
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
      description: "صيانة الأجهزة المنزلية في جدة 24/7: المكيفات والغسالات والثلاجات وطباخات الغاز والتركيب وتعبئة الغاز والصيانة.",
    }),
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
