import type { Metadata } from "next";
import GasStovePageClient from "./GasStovePageClient";
import { nowlogo as logoAsset } from "@/lib/assets";

export const metadata: Metadata = {
  title: "تصليح طباخات غاز في جدة",
  description: "تصليح طباخات غاز في جدة - مركز جدة للتبريد. خدمات تصليح طباخات، تنظيف شعلات، إصلاح إشعال، كشف تسرب غاز، خدمة سريعة في نفس اليوم، متاح 24/7 في جدة. اتصل 0591801214.",
  openGraph: {
    title: "Gas Stove Repair in Jeddah | Al Jeddah Cooling Center",
    description: "Gas stove repair in Jeddah - Al Jeddah Cooling Center. Stove repair, burner cleaning, ignition fix, gas leak detection, same-day service, 24/7 available in Jeddah. Call 0591801214.",
    url: "https://aljeddahcoolingcenter.com/services/gas-stove",
    siteName: "مركز جدة للتبريد",
    images: [logoAsset.url],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gas Stove Repair in Jeddah",
    description: "Professional gas stove repair services in Jeddah 24/7.",
  },
};

export default function GasStovePage() {
  return <GasStovePageClient />;
}
