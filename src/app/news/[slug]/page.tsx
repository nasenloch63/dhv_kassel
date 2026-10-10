import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock3, ArrowUpRight } from "lucide-react";
import { posts, formatDate } from "@/data/content";
import { StatusBadge, DemoNote, PostVisual, PostCard, ButtonLink } from "@/components/ui";
import { MediaGallery, EventPhotoPlaceholders } from "@/components/media";
export function generateStaticParams() { return posts.map(post => ({ slug: post.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find(post => post.slug === slug);
  return { title: post?.title ?? "Beitrag nicht gefunden", description: post?.teaser };
}
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find(post => post.slug === slug);
  if (!post) notFound();
  return <>
    <article className="container article-page">
      <Link className="back-link" href="/news/"><ArrowLeft size={17} />Alle Beiträge</Link>
      <header className="article-header">
        <div className="article-labels"><span className="category">{post.category}</span><StatusBadge status={post.status} /></div>
        <h1>{post.title}</h1><p className="article-teaser">{post.teaser}</p>
        <div className="article-meta"><time dateTime={post.date}>{formatDate(post.date)}{post.status === "demo" ? " · Beispieldatum" : post.status === "verified" ? " · Originalveröffentlichung" : " · Rückblick veröffentlicht"}</time><span><Clock3 size={15} />{post.readingMinutes} Min. Lesezeit</span></div>
      </header>
      <figure className="article-visual"><PostVisual post={post} priority />{post.image && <figcaption className="image-credit">{post.image.caption}<span>{post.image.credit}</span></figcaption>}</figure>
      <div className="prose">
        {post.status === "demo" && <DemoNote>Demo-Inhalt: Dieser Beispieltext beschreibt keine bestätigte Aktivität und ist keine Aussage des DHV. Auch das Veröffentlichungsdatum ist ein Beispiel.</DemoNote>}
        {post.reportLabel && <DemoNote>{post.reportLabel}</DemoNote>}
        {post.body.map((paragraph, index) => <section key={index}>{paragraph.heading && <h2>{paragraph.heading}</h2>}<p>{paragraph.text}</p></section>)}
        {post.gallery && <MediaGallery items={post.gallery} />}
        {!!post.pendingEventPhotos && <EventPhotoPlaceholders count={post.pendingEventPhotos} />}
        {post.relatedEventSlug && <div className="report-action"><ButtonLink href={`/veranstaltungen/${post.relatedEventSlug}/`}>Zum Veranstaltungseintrag</ButtonLink><Link href="/veranstaltungen/" className="text-link">Wie es weitergeht<ArrowUpRight size={17} /></Link></div>}
        {post.source && <aside className="source-box"><span className="eyebrow">VERIFIZIERTE QUELLE</span><p>{post.source.label} · geprüft am {formatDate(post.source.checkedAt)}</p><a href={post.source.url} target="_blank" rel="noopener noreferrer" className="text-link">Originalbeitrag beim DHV lesen<ArrowUpRight size={17} /></a></aside>}
      </div>
    </article>
    <section className="container section related-section"><h2>Weitere Perspektiven.</h2><div className="post-grid">{posts.filter(item => item.id !== post.id).slice(0, 3).map(item => <PostCard post={item} key={item.id} />)}</div></section>
  </>;
}
