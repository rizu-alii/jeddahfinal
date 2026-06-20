import type { Metadata, ResolvingMetadata } from "next";
import FeatureDetailPageClient from "./FeatureDetailPageClient";
import { nowlogo as logoAsset } from "@/lib/assets";
import { getFeature, SERVICE_CATEGORIES } from "@/lib/service-features";
import { notFound } from "next/navigation";

type Props = {
  params: { category: string; slug: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const data = getFeature(params.category, params.slug);
  
  if (!data) {
    notFound();
  }

  const { category, feature } = data;
  const categoryNames: Record<string, { ar: string; en: string }> = {
    ac: { ar: "المكيفات", en: "AC" },
    fridge: { ar: "الثلاجات", en: "Fridge" },
    "washing-machine": { ar: "الغسالات", en: "Washing Machine" },
    "gas-stove": { ar: "طباخات الغاز", en: "Gas Stove" },
  };

  const catInfo = categoryNames[category.slug] || categoryNames.ac;
  
  // Format slug to readable text (e.g., split-window-repair → Split Window Repair)
  const slugToReadable = (slug: string) => slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  const readableFeatureEn = slugToReadable(feature.slug);
  
  return {
    title: `تصليح ${catInfo.ar} في جدة - خدمات متخصصة`,
    description: `خدمات تصليح ${catInfo.ar} في جدة على مدار الساعة. خدمة سريعة في نفس اليوم، فنيين محترفين، أسعار عادلة. اتصل الآن 0591801214.`,
    openGraph: {
      title: `${readableFeatureEn} - ${catInfo.en} Repair in Jeddah`,
      description: `Professional ${catInfo.en.toLowerCase()} repair services in Jeddah. Same-day service, 24/7 available. Call 0591801214.`,
      url: `https://aljeddahcoolingcenter.com/services/${category.slug}/${feature.slug}`,
      siteName: "مركز جدة للتبريد",
      images: [logoAsset.url, feature.image.url],
      type: "website",
    },
  };
}

export function generateStaticParams() {
  const params: Props["params"][] = [];
  
  for (const [categorySlug, category] of Object.entries(SERVICE_CATEGORIES)) {
    for (const feature of category.features) {
      params.push({
        category: categorySlug,
        slug: feature.slug,
      });
    }
  }
  
  return params;
}

export default function FeatureDetailPage() {
  return <FeatureDetailPageClient />;
}
