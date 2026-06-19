import type { Metadata } from "next";
import FeatureDetailPageClient from "./FeatureDetailPageClient";
import { nowlogo as logoAsset } from "@/lib/assets";

export const metadata: Metadata = {
  metadataBase: new URL("https://jaddahmazz.lovable.app"),
  title: "خدمة تصليح | مركز جدة للتبريد",
  description: "خدمة تصليح احترافية في جدة",
  openGraph: {
    title: "خدمة تصليح | مركز جدة للتبريد",
    description: "خدمة تصليح احترافية في جدة",
    url: "https://jaddahmazz.lovable.app",
    siteName: "مركز جدة للتبريد",
    images: [logoAsset.url],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function FeatureDetailPage() {
  return <FeatureDetailPageClient />;
}
