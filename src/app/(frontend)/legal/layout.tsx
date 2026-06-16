import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

// The Legal page is a client component, so its metadata lives here in a
// (no-op) route layout instead of a `metadata` export on the page.
export const metadata: Metadata = buildMetadata({
  title: "Legal Notice | Luka Došen",
  description: "Imprint and legal information for the website of Luka Došen.",
  absoluteTitle: true,
});

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
