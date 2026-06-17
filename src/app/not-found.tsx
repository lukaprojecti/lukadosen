import type { Metadata } from "next";
import localFont from "next/font/local";
import "./(frontend)/globals.css";
import Sidebar from "@/components/Sidebar";
import NotFoundContent from "@/components/NotFoundContent";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import { buildMetadata } from "@/lib/seo";

// Global 404 for URLs that match no route at all. The app uses route groups
// with no shared root layout, so this page must render its own <html>/<body>
// (and pull in the sidebar) to stay visually consistent with the rest of the
// site. Mistyped routes inside the (frontend) group are handled by
// (frontend)/not-found.tsx, which renders inside that group's layout.
const nohemi = localFont({
  src: [
    { path: "../fonts/Nohemi-Light.woff", weight: "300", style: "normal" },
    { path: "../fonts/Nohemi-SemiBold.woff", weight: "600", style: "normal" },
  ],
  display: "swap",
  variable: "--font-nohemi",
});

export const metadata: Metadata = buildMetadata({
  title: "Page Not Found | Luka Došen",
  description: "Not all journeys go as planned. This page could not be found.",
  absoluteTitle: true,
  noIndex: true,
});

export default async function GlobalNotFound() {
  // Sidebar badge count — degrade gracefully if Payload isn't reachable.
  let lettersCount = 0;
  try {
    const payload = await getPayload({ config: configPromise });
    const { totalDocs } = await payload.find({
      collection: "letters",
      where: { _status: { equals: "published" } },
      limit: 0,
    });
    lettersCount = totalDocs;
  } catch {
    // Payload not ready — show no count
  }

  // No <html>/<body> here: with route groups and no shared root layout, Next
  // wraps this page in a default layout that already supplies them. We apply
  // the font variable to a wrapper instead to avoid duplicate-document
  // hydration mismatches.
  return (
    <div
      className={`${nohemi.variable} antialiased`}
      style={{ fontFamily: "var(--font-nohemi), sans-serif" }}
    >
      <Sidebar lettersCount={lettersCount} />
      <div className="content-panel">
        <div className="content-panel-spacer" />
        <div className="content-inner">
          <NotFoundContent />
        </div>
      </div>
    </div>
  );
}
