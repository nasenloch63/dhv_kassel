import type { Metadata, Viewport } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/data/content";
import { DEFAULT_OG_IMAGE, JsonLd, getGlobalJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  title: {
    default: "DHV-Ortsgruppe Kassel | Deutscher Hanfverband vor Ort in Kassel",
    template: "%s | DHV-Ortsgruppe Kassel",
  },
  description:
    "DHV-Ortsgruppe Kassel (Demo): Monatliche Treffen jeden 3. Donnerstag ab 19 Uhr im Haze & Chill Café, lokale Rückblicke, Termine und aktuelle DHV-News für Kassel und Nordhessen.",
  keywords: [
    "DHV Kassel",
    "DHV-Ortsgruppe Kassel",
    "Deutscher Hanfverband Kassel",
    "Cannabis Kassel",
    "Legalisierung Kassel",
    "Hanfverband Nordhessen",
    "Haze & Chill Kassel",
    "Cannabis Treffen Kassel",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/images/dhv/og-logo.png",
  },
  openGraph: {
    locale: "de_DE",
    type: "website",
    url: site.origin,
    siteName: "DHV-Ortsgruppe Kassel",
    title: "DHV-Ortsgruppe Kassel | Deutscher Hanfverband vor Ort",
    description:
      "Monatliche Treffen jeden 3. Donnerstag ab 19 Uhr im Haze & Chill Kassel, lokale Rückblicke und aktuelle News des Deutschen Hanfverbands.",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "DHV-Ortsgruppe Kassel | Deutscher Hanfverband vor Ort",
    description:
      "Monatliche Treffen jeden 3. Donnerstag ab 19 Uhr im Haze & Chill Kassel, lokale Rückblicke und aktuelle News des Deutschen Hanfverbands.",
    images: [DEFAULT_OG_IMAGE.url],
  },
  other: {
    "geo.region": "DE-HE",
    "geo.placename": "Kassel",
    "geo.position": "51.31545;9.49241",
    ICBM: "51.31545, 9.49241",
  },
};

export const viewport: Viewport = { themeColor: "#007825" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <JsonLd data={getGlobalJsonLd()} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
