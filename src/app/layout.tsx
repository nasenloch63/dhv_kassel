import type { Metadata, Viewport } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/data/content";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  title: { default: "DHV-Ortsgruppe Kassel | Nicht offizielle Demo", template: "%s | DHV Kassel Demo" },
  description: "Nicht offizielle Demo für eine DHV-Ortsgruppe in Kassel. DHV-News, lokale Rückblicke und geplante Treffen im Haze & Chill. Beispielinhalte sind klar gekennzeichnet.",
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.svg" },
  openGraph: { locale: "de_DE", type: "website", siteName: "DHV Kassel · Demo", title: "DHV-Ortsgruppe Kassel · Demo", description: "Eine nicht offizielle Demowebsite für lokales Engagement.", images: [{ url: "/images/kassel.webp", width: 1800, height: 1385, alt: "Blick vom Herkules auf Kassel" }] },
};
export const viewport: Viewport = { themeColor: "#173e32" };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="de"><body><Header /><main id="main">{children}</main><Footer /></body></html>; }
