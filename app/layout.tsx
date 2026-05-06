import type { Metadata } from "next";
import "./globals.css";
import { business } from "@/lib/business";

const title = `${business.tagline} | ${business.name} — Painter Endeavour Hills`;
const description = `Painter Endeavour Hills & surrounds. ${business.name} delivers interior, exterior and roof painting across south-east Melbourne. Free quotes — call ${business.phone}.`;

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title,
  description,
  alternates: { canonical: business.siteUrl },
  openGraph: { title, description, url: business.siteUrl, type: "website" },
  twitter: { card: "summary_large_image", title, description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  keywords: [
    "painter Endeavour Hills",
    "painter & decorator Victoria",
    "house painter Endeavour Hills",
    "painters near me Endeavour Hills",
    "interior painter Endeavour Hills",
    "exterior painter Endeavour Hills",
    "roof painting Endeavour Hills",
    "painter Hallam",
    "painter Narre Warren",
    "painter Berwick",
    "painter Doveton",
    "painter Hampton Park",
    "painter Dandenong North",
    "painter Noble Park",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: business.primaryColor,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
