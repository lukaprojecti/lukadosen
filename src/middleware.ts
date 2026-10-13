import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isLanding } from "@/lib/siteMode";

// Pages that stay reachable in landing mode. /admin, /api, /_next and files
// with an extension (images, robots.txt, sitemap.xml) never reach the
// middleware, see the matcher below.
const LANDING_PAGES = new Set(["/", "/legal"]);

// In landing mode every other page temporarily redirects home, including
// pages added later. 307 (not 301) so browsers and Google don't cache the
// redirect permanently.
export function middleware(request: NextRequest) {
  if (!isLanding || LANDING_PAGES.has(request.nextUrl.pathname)) {
    return NextResponse.next();
  }
  // Clone so query params (e.g. UTM tags from old links) survive the redirect.
  const url = request.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url, 307);
}

export const config = {
  matcher: ["/((?!_next/|api/|admin|.*\\..*).*)"],
};
