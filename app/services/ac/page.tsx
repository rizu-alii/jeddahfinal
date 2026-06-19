import type { Metadata } from "next";
import AcPageClient from "./AcPageClient";
import { nowlogo as logoAsset } from "@/lib/assets";

export const metadata: Metadata = {
  metadataBase: new URL("https://jaddahmazz.lovable.app"),
  title: "تنظيف وتصليح المكيفات في جدة | مركز جدة للتبريد",
  description: "تنظيف وتصليح المكيفات في جدة - مركز جدة للتبريد. خدمات تنظيف المكيفات، تصليح المكيفات، تركيب وتفكيك، تعبئة الغاز، خدمة في نفس اليوم، متاح 24/7 في جدة. اتصل 0591801214.",
  openGraph: {
    title: "AC Cleaner & AC Repair in Jeddah | Al Jeddah Cooling Center",
    description: "AC cleaner and AC repair services in Jeddah - Al Jeddah Cooling Center. AC cleaning, AC repair, installation & uninstallation, gas refill, same-day service, 24/7 available in Jeddah. Call 0591801214.",
    url: "https://jaddahmazz.lovable.app/services/ac",
    siteName: "مركز جدة للتبريد",
    images: [logoAsset.url],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AC Cleaner & Repair in Jeddah",
    description: "Professional AC cleaning and repair services in Jeddah 24/7.",
  },
};

export default function AcPage() {
  return <AcPageClient />;
}
