import type { Metadata } from "next";
import FridgePageClient from "./FridgePageClient";
import { nowlogo as logoAsset } from "@/lib/assets";

export const metadata: Metadata = {
  title: "تصليح ثلاجات وفريزر في جدة",
  description: "تصليح ثلاجات وفريزر في جدة - مركز جدة للتبريد. خدمات تصليح ثلاجات، تصليح فريزر، إصلاح كمبروسر، تعبئة غاز، خدمة سريعة في نفس اليوم، متاح 24/7 في جدة. اتصل 0591801214.",
  openGraph: {
    title: "Fridge & Freezer Repair in Jeddah | Al Jeddah Cooling Center",
    description: "Fridge & freezer repair in Jeddah - Al Jeddah Cooling Center. Fridge repair, freezer repair, compressor fix, gas refill, same-day service, 24/7 available in Jeddah. Call 0591801214.",
    url: "https://aljeddahcoolingcenter.com/services/fridge",
    siteName: "مركز جدة للتبريد",
    images: [logoAsset.url],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fridge & Freezer Repair in Jeddah",
    description: "Professional fridge and freezer repair services in Jeddah 24/7.",
  },
};

export default function FridgePage() {
  return <FridgePageClient />;
}
