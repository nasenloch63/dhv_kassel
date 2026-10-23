import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock3, ArrowUpRight } from "lucide-react";
import { posts, formatDate } from "@/data/content";
import { StatusBadge, DemoNote, PostVisual, PostCard, ButtonLink } from "@/components/ui";
import { WhatsAppBand } from "@/components/whatsapp-band";
import { MediaGallery, EventPhotoPlaceholders } from "@/components/media";
export function generateStaticParams() { return posts.map(post => ({ slug: post.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find(post => post.slug === slug);
  return { title: post?.title ?? "Beitrag nicht gefunden", description: post?.teaser,
    ...(post?.image ? { openGraph: { title: post.title, description: post.teaser, type: "article", images: [{ url: post.image.src, width: post.image.width, height: post.image.height, alt: post.image.alt }] }, twitter: { card: "summary_large_image", title: post.title, description: post.teaser, images: [post.image.src] } } : {}) };
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
        <div className="article-meta"><time dateTime={post.date}>{formatDate(post.date)}{post.status === "demo" ? " · Beispieldatum" : post.status === "verified" ? " · Originalveröffentlichung" : post.status === "announced" ? " · Ankündigung veröffentlicht" : " · Rückblick veröffentlicht"}</time><span><Clock3 size={15} />{post.readingMinutes} Min. Lesezeit</span></div>
      </header>
      <figure className={`article-visual ${post.image?.displayRatio ? "poster-article" : ""}`}>{post.image?.displayRatio ? <a href={post.image.src} target="_blank" rel="noopener noreferrer" aria-label="Veranstaltungsflyer in voller Größe öffnen"><PostVisual post={post} priority /></a> : <PostVisual post={post} priority />}{post.image && <figcaption className="image-credit">{post.image.caption}<span>{post.image.credit}</span></figcaption>}</figure>
      <div className="prose">
        {post.status === "demo" && <DemoNote>Demo-Inhalt: Dieser Beispieltext beschreibt keine bestätigte Aktivität und ist keine Aussage des DHV. Auch das Veröffentlichungsdatum ist ein Beispiel.</DemoNote>}
        {post.reportLabel && <DemoNote>{post.reportLabel}</DemoNote>}
        {post.body.map((paragraph, index) => <section key={index}>{paragraph.heading && <h2>{paragraph.heading}</h2>}<p>{paragraph.text}</p></section>)}
        {post.socialLinks && <section className="event-social"><h2>Bleibt mit uns verbunden</h2><p>Mehr aus der Community und von unserer Location findet ihr auf Instagram.</p><div>{post.socialLinks.map(link => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}<ArrowUpRight size={17} aria-hidden="true" /></a>)}</div><a href="https://www.haze-chill.com/" target="_blank" rel="noopener noreferrer" className="event-location">Haze & Chill Café · Kölnische Straße 12–14 · 34117 Kassel</a></section>}
        {post.gallery && <MediaGallery items={post.gallery} title={post.galleryTitle} />}
        {post.videos && <section className="event-videos"><h2>Der Abend in Bewegung</h2><p>Kurze Einblicke in die Atmosphäre vor Ort.</p><div>{post.videos.map(video => <figure key={video.src}><video controls playsInline preload="none" poster={video.poster} aria-label={video.caption}><source src={video.src} type="video/mp4" /><a href={video.src}>Video öffnen</a></video><figcaption>{video.caption}</figcaption></figure>)}</div></section>}
        {!!post.pendingEventPhotos && <EventPhotoPlaceholders count={post.pendingEventPhotos} />}
        {post.relatedEventSlug && <div className="report-action"><ButtonLink href={`/veranstaltungen/${post.relatedEventSlug}/`}>Zum Veranstaltungseintrag</ButtonLink><Link href="/veranstaltungen/" className="text-link">Wie es weitergeht<ArrowUpRight size={17} /></Link></div>}
        {post.source && <aside className="source-box"><span className="eyebrow">VERIFIZIERTE QUELLE</span><p>{post.source.label} · geprüft am {formatDate(post.source.checkedAt)}</p><a href={post.source.url} target="_blank" rel="noopener noreferrer" className="text-link">Originalbeitrag beim DHV lesen<ArrowUpRight size={17} /></a></aside>}
      </div>
    </article>
    <WhatsAppBand />
    <section className="container section related-section"><h2>Weitere Perspektiven.</h2><div className="post-grid">{posts.filter(item => item.id !== post.id).slice(0, 3).map(item => <PostCard post={item} key={item.id} />)}</div></section>
  </>;
}
