import { MetadataRoute } from 'next'
import { SERVICE_CATEGORIES } from '@/lib/service-features'

const BASE_URL = "https://aljeddahcoolingcenter.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  for (const [categorySlug, category] of Object.entries(SERVICE_CATEGORIES)) {
    sitemapEntries.push({
      url: `${BASE_URL}/services/${categorySlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    });

    for (const feature of category.features) {
      sitemapEntries.push({
        url: `${BASE_URL}/services/${categorySlug}/${feature.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  }

  return sitemapEntries;
}
