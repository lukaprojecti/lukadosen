import type { Metadata } from "next";
import NotFoundContent from "@/components/NotFoundContent";
import { buildMetadata } from "@/lib/seo";
import { isLanding } from "@/lib/siteMode";
import LandingShell from "@/components/landing/LandingShell";

export const metadata: Metadata = buildMetadata({
  title: isLanding ? "Seite nicht gefunden | Luka Došen" : "Page Not Found | Luka Došen",
  description: isLanding
    ? "Nicht jedes Projekt läuft nach Plan. Diese Seite gibt es nicht."
    : "Not all journeys go as planned. This page could not be found.",
  absoluteTitle: true,
  noIndex: true,
});

export default function NotFound() {
  if (isLanding) {
    return (
      <LandingShell backLink={false}>
        <NotFoundContent
          label="Seite nicht gefunden"
          lines={["Nicht jedes Projekt", "läuft nach Plan."]}
          cta="Zur Startseite"
        />
      </LandingShell>
    );
  }
  return <NotFoundContent />;
}
