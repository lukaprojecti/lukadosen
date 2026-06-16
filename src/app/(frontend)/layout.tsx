import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import { SITE_NAME, SITE_URL, OG_IMAGE, HOME_TITLE, HOME_DESCRIPTION } from "@/lib/seo";

const nohemi = localFont({
  src: [
    { path: "../../fonts/Nohemi-Light.woff", weight: "300", style: "normal" },
    { path: "../../fonts/Nohemi-SemiBold.woff", weight: "600", style: "normal" },
  ],
  display: "swap",
  variable: "--font-nohemi",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s | LUKA",
  },
  description: HOME_DESCRIPTION,
  icons: {
    icon: [{ url: "/2026-lukadosen-favicon.jpg", type: "image/jpeg", sizes: "64x64" }],
    apple: [{ url: "/2026-lukadosen-favicon.jpg" }],
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch published letters count for the sidebar badge
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
    // Payload not yet ready (e.g. first boot / build time) — show no count
  }

  const GA_ID = "G-E1M4KN3KLQ";

  return (
    <html lang="en">
      <body className={`${nohemi.variable} antialiased`}>
        {/* Google Analytics (gtag.js) — production only, so local/preview
            traffic doesn't pollute the data. */}
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}

        <Sidebar lettersCount={lettersCount} />
        <div className="content-panel">
          <div className="content-panel-spacer" />
          <div className="content-inner">{children}</div>
        </div>
      </body>
    </html>
  );
}
