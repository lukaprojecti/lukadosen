import type { MetadataRoute } from "next";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import { SITE_URL } from "@/lib/seo";

// Regenerate per request so newly published letters appear without a rebuild.
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = SITE_URL.replace(/\/$/, "");

  // Public, indexable pages. /legal is intentionally excluded (noindex).
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/letters`, changeFrequency: "weekly", priority: 0.8 },
  ];

  let letterRoutes: MetadataRoute.Sitemap = [];
  try {
    const payload = await getPayload({ config: configPromise });
    const { docs } = await payload.find({
      collection: "letters",
      where: { _status: { equals: "published" } },
      limit: 1000,
      depth: 0,
    });
    letterRoutes = docs
      .filter((d) => typeof d.slug === "string" && d.slug)
      .map((d) => ({
        url: `${base}/letters/${d.slug}`,
        lastModified: d.updatedAt ? new Date(d.updatedAt) : undefined,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }));
  } catch {
    // Payload not reachable at build/request time — ship the static routes.
  }

  return [...staticRoutes, ...letterRoutes];
}
