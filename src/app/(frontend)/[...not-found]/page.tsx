import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";

// Evaluated even though the component throws notFound(), so the 404 gets a
// correct tab title instead of falling back to the site default.
export const metadata: Metadata = buildMetadata({
  title: "Page Not Found | Luka Došen",
  description: "Not all journeys go as planned. This page could not be found.",
  absoluteTitle: true,
  noIndex: true,
});

// Catch-all for any top-level URL that matches no other route. Triggering
// notFound() here renders (frontend)/not-found.tsx within the frontend layout,
// so unknown URLs get the branded 404 (with sidebar) instead of Next's default
// error page. More specific routes (/about, /letters, /letters/[slug], and the
// (payload) /admin + /api routes) take precedence over this catch-all.
export default function CatchAllNotFound() {
  notFound();
}
