import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { SITE_URL } from "@/lib/seo";

// Hosts that should be crawled + indexed. Everything else (the *.vercel.app
// deployment URL, localhost, previews) is kept out of search so it can't
// compete with the real domain as duplicate content.
const PRODUCTION_HOSTS = ["lukadosen.ch", "www.lukadosen.ch"];

export default async function robots(): Promise<MetadataRoute.Robots> {
  const base = SITE_URL.replace(/\/$/, "");

  // Decide from the host actually being requested — NOT from SITE_URL — so the
  // *.vercel.app URL stays blocked even though it shares the production env
  // (NEXT_PUBLIC_SERVER_URL points at the real domain).
  let host = "";
  try {
    const requestHeaders = await headers();
    host = (requestHeaders.get("host") ?? "").toLowerCase().split(":")[0];
  } catch {
    // headers() unavailable — fall through to the locked rules.
  }

  const isProduction = PRODUCTION_HOSTS.includes(host);

  if (!isProduction) {
    // Vercel URL / preview / local: disallow all crawling.
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
