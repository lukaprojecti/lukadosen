import type { Metadata } from "next";
import NotFoundContent from "@/components/NotFoundContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Page Not Found | Luka Došen",
  description: "Not all journeys go as planned. This page could not be found.",
  absoluteTitle: true,
  noIndex: true,
});

export default function NotFound() {
  return <NotFoundContent />;
}
