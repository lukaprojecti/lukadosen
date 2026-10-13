import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isLanding } from "@/lib/siteMode";

// In landing mode, the full-site pages temporarily redirect home. 307 (not 301)
// so browsers and Google don't cache the redirect permanently.
export function middleware(request: NextRequest) {
  if (!isLanding) return NextResponse.next();
  // Clone so query params (e.g. UTM tags from old links) survive the redirect.
  const url = request.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url, 307);
}

export const config = {
  matcher: ["/about", "/letters/:path*"],
};
