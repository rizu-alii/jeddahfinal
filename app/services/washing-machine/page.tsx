import type { Metadata } from "next";
import WashingPageClient from "./WashingPageClient";
import { nowlogo as logoAsset } from "@/lib/assets";

export const metadata: Metadata = {
  title: "تصليح غسالات في جدة",
  description: "تصليح غسالات في جدة - مركز جدة للتبريد. خدمات تصليح غسالات، إصلاح حلة وموتور، إصلاح لوحة التحكم، خدمة سريعة في نفس اليوم، متاح 24/7 في جدة. اتصل 0591801214.",
  openGraph: {
    title: "Washing Machine Repair in Jeddah | Al Jeddah Cooling Center",
    description: "Washing machine repair in Jeddah - Al Jeddah Cooling Center. Washing machine repair, drum & motor fix, control board repair, same-day service, 24/7 available in Jeddah. Call 0591801214.",
    url: "https://aljeddahcoolingcenter.com/services/washing-machine",
    siteName: "مركز جدة للتبريد",
    images: [logoAsset.url],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Washing Machine Repair in Jeddah",
    description: "Professional washing machine repair services in Jeddah 24/7.",
  },
};

export default function WashingPage() {
  return <WashingPageClient />;
}
