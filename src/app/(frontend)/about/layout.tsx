import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

// The About page is a client component, so its metadata lives here in a
// (no-op) route layout instead of a `metadata` export on the page.
export const metadata: Metadata = buildMetadata({
  title: "About Luka | 9 Years Planning Projects & Building Business",
  description:
    "Architecture planner turned solopreneur. I document real estate project decisions, business systems, and the journey toward ownership. This is my story.",
  absoluteTitle: true,
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
