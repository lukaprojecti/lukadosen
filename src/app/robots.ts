import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Hosts that should be crawled + indexed. Everything else (Vercel preview
// URLs, localhost) is kept out of search so the preview deployment doesn't
// compete with the real domain. When the domain is linked and
// NEXT_PUBLIC_SERVER_URL is pointed at it, indexing turns on automatically.
const PRODUCTION_HOSTS = ["lukadosen.ch", "www.lukadosen.ch"];

export default function robots(): MetadataRoute.Robots {
  const base = SITE_URL.replace(/\/$/, "");

  let host = "";
  try {
    host = new URL(SITE_URL).host;
  } catch {
    // Malformed SITE_URL — fall through to the non-production (locked) rules.
  }

  const isProduction = PRODUCTION_HOSTS.includes(host);

  if (!isProduction) {
    // Preview / staging / local: disallow all crawling.
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/admin", "/api"] }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
