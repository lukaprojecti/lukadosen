import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { isLanding } from "@/lib/siteMode";
import LandingShell from "@/components/landing/LandingShell";

// The Legal page is a client component, so its metadata lives here in a
// (no-op) route layout instead of a `metadata` export on the page.
export const metadata: Metadata = buildMetadata({
  title: "Legal Notice | Luka Došen",
  description: "Imprint and legal information for the website of Luka Došen.",
  absoluteTitle: true,
  noIndex: true,
});

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  // Landing mode has no .content-inner wrapper, so give the page its own.
  if (isLanding) return <LandingShell>{children}</LandingShell>;
  return children;
}
