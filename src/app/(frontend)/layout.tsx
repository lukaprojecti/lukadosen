import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { getPayload } from "payload";
import configPromise from "@payload-config";

const nohemi = localFont({
  src: "../../fonts/Nohemi-Light.woff",
  weight: "300",
  style: "normal",
  display: "swap",
  variable: "--font-nohemi",
});

export const metadata: Metadata = {
  title: {
    default: "Luka Došen | Planning & Building: Projects & Systems",
    template: "%s | LUKA",
  },
  description:
    "I show aspiring developers and professionals how residential projects actually get planned and built. Decision frameworks, execution systems, and insider lessons.",
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

  return (
    <html lang="en">
      <body className={`${nohemi.variable} antialiased`}>
        <Sidebar lettersCount={lettersCount} />
        <div className="content-panel">
          <div className="content-panel-spacer" />
          <div className="content-inner">{children}</div>
        </div>
      </body>
    </html>
  );
}
