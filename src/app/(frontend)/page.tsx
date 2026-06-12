import { getPayload } from "payload";
import configPromise from "@payload-config";
import HomeClient from "./HomeClient";
import { type Letter } from "./letters/LettersClient";

export const dynamic = "force-dynamic";

export default async function Home() {
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
    });
    letters = docs.map((doc) => ({
      id: String(doc.id),
      title: doc.title,
      slug: doc.slug ?? String(doc.id),
      category: doc.category as Letter["category"],
      excerpt: doc.excerpt ?? undefined,
      publishedAt: doc.publishedAt ?? undefined,
    }));
  } catch {
    // DB unavailable — render the homepage with an empty letters section.
  }

  return <HomeClient letters={letters} />;
}
