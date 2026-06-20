import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";
import { nowlogo as logoAsset } from "@/lib/assets";

export const metadata: Metadata = {
  title: "تصليح مكيفات وغسالات وثلاجات وطباخات في جدة 24/7",
  description: "مركز جدة للتبريد - خدمات تصليح وتنظيف المكيفات، تصليح غسالات، تصليح ثلاجات وفريزر، تصليح طباخات غاز في جدة. خدمة سريعة في نفس اليوم، متاح 24 ساعة. اتصل 0591801214.",
  openGraph: {
    title: "Al Jeddah Cooling Center | AC, Washing Machine, Fridge & Stove Repair in Jeddah 24/7",
    description: "Al Jeddah Cooling Center - AC repair & cleaning, washing machine repair, fridge & freezer repair, gas stove repair in Jeddah. Same-day service, 24/7 available. Call 0591801214.",
    url: "https://aljeddahcoolingcenter.com",
    siteName: "مركز جدة للتبريد",
    images: [logoAsset.url],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Jeddah Cooling Center | AC Repair in Jeddah",
    description: "AC, washing machine, fridge & gas stove repair across Jeddah 24/7.",
  },
};

export default function Home() {
  return <HomePageClient />;
}
