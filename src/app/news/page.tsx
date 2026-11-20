import type { Metadata } from "next";
import { PageIntro } from "@/components/ui";
import { PostList } from "@/components/post-list";
import { getPosts } from "@/data/content";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
export const metadata: Metadata = {
  title: "Aktuelles & DHV-News aus Kassel",
  description: "Offizielle Nachrichten des Deutschen Hanfverbands mit Quellen sowie lokale Rückblicke und Neuigkeiten für Kassel und Nordhessen.",
  alternates: { canonical: "/news/" },
  openGraph: { title: "Aktuelles & DHV-News | DHV-Ortsgruppe Kassel", description: "Offizielle DHV-Nachrichten und lokale Rückblicke aus Kassel.", url: "/news/", images: [DEFAULT_OG_IMAGE] },
  twitter: { card: "summary_large_image", title: "Aktuelles & DHV-News | DHV-Ortsgruppe Kassel", description: "Offizielle DHV-Nachrichten und lokale Rückblicke aus Kassel.", images: [DEFAULT_OG_IMAGE.url] },
};
export default function NewsPage() { return <><PageIntro eyebrow="NEUIGKEITEN & PERSPEKTIVEN" title="News & Blog."><p>Was sich bewegt. Was uns beschäftigt. Und welche Ideen vor Ort entstehen könnten.</p></PageIntro><section className="container listing-section"><PostList posts={getPosts()} /></section></>; }
