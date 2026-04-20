import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import { OrgJsonLd, WebSiteJsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "TradeFabric | Fabric Supplier Delhi — Sportswear, Activewear & Fashion Fabrics",
    template: "%s | TradeFabric — Fabric Supplier Delhi",
  },
  description: SITE.description,
  keywords: SITE.keywords,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: { telephone: true, email: true },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website", locale: "en_IN",
    url: SITE.url, siteName: SITE.name,
    title: "TradeFabric | Premium Fabric Supplier — Sportswear, Activewear & Fashion",
    description: SITE.description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "TradeFabric — Premium Fabric Supplier, Badli Delhi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TradeFabric | Premium Fabric Supplier — Sportswear & Activewear",
    description: SITE.description,
    images: ["/og.jpg"],
  },
  alternates: { canonical: SITE.url },
  verification: { google: "your-google-verification-code" },
  other: {
    "geo.region": "IN-DL",
    "geo.placename": "Delhi",
    "geo.position": `${SITE.geo.lat};${SITE.geo.lng}`,
    "ICBM": `${SITE.geo.lat}, ${SITE.geo.lng}`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <OrgJsonLd />
        <WebSiteJsonLd />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#080808" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsApp />
      </body>
    </html>
  );
}
