import type { Metadata } from "next";
import NotFoundContent from "@/components/NotFoundContent";
import LandingNotFound from "@/components/landing/LandingNotFound";
import { NOT_FOUND_METADATA } from "@/lib/seo";
import { isLanding } from "@/lib/siteMode";

export const metadata: Metadata = NOT_FOUND_METADATA;

export default function NotFound() {
  return isLanding ? <LandingNotFound /> : <NotFoundContent />;
}
