import type { Metadata } from "next";
import { PageIntro } from "@/components/ui";
import { PostList } from "@/components/post-list";
import { getPosts } from "@/data/content";
export const metadata: Metadata = { title: "News & Blog", description: "Offizielle DHV-Nachrichten mit Quellen und gekennzeichnete lokale Demo-Beiträge für Kassel." };
export default function NewsPage() { return <><PageIntro eyebrow="NEUIGKEITEN & PERSPEKTIVEN" title="News & Blog."><p>Was sich bewegt. Was uns beschäftigt. Und welche Ideen vor Ort entstehen könnten.</p></PageIntro><section className="container listing-section"><PostList posts={getPosts()} /></section></>; }
