import { connection } from "next/server";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import HomeClient from "./HomeClient";
import { type Letter } from "./letters/LettersClient";
import { toThumbnail } from "@/lib/thumbnail";
import { isLanding } from "@/lib/siteMode";
import LandingPage from "@/components/landing/LandingPage";

// Landing mode is prerendered and refreshed daily (footer year). Full mode
// opts into per-request rendering via connection() below.
export const revalidate = 86400;

export default async function Home() {
  if (isLanding) return <LandingPage />;

  // Full mode: render per request so new letters show up without a rebuild.
  await connection();

  // 4 latest published letters for the homepage highlight grid.
  // Wrapped in try/catch so the homepage still renders if the DB is
  // unreachable (e.g. Supabase paused) instead of returning a 500.
  let letters: Letter[] = [];
  try {
    const payload = await getPayload({ config: configPromise });
    const { docs } = await payload.find({
      collection: "letters",
      where: { _status: { equals: "published" } },
      sort: "-publishedAt",
      limit: 4,
      depth: 1, // populate the thumbnail media relation
    });
    letters = docs.map((doc) => ({
      id: String(doc.id),
      title: doc.title,
      slug: doc.slug ?? String(doc.id),
      category: doc.category as Letter["category"],
      excerpt: doc.excerpt ?? undefined,
      publishedAt: doc.publishedAt ?? undefined,
      thumbnail: toThumbnail(doc.thumbnail),
    }));
  } catch {
    // DB unavailable — render the homepage with an empty letters section.
  }

  return <HomeClient letters={letters} />;
}
