import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, CalendarDays, Clock3, MapPin, MessageCircle } from "lucide-react";
import { type Post, type Event, type ContentStatus, formatDate, site } from "@/data/content";

export function StatusBadge({ status }: { status: ContentStatus }) {
  const labels: Record<ContentStatus, string> = { demo: "Demo-Inhalt", verified: "Offizielle DHV-Quelle", reported: "Lokaler Rückblick", planned: "In Planung" };
  return <span className={`status-badge ${status}`}>{labels[status]}</span>;
}
export function ButtonLink({ href, children, variant = "primary", external = false }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "light"; external?: boolean }) {
  return <Link href={href} className={`button ${variant}`} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{children}{external ? <ArrowUpRight size={18} aria-hidden="true" /> : <ArrowRight size={18} aria-hidden="true" />}</Link>;
}
export function SectionHeading({ eyebrow, title, href, linkText }: { eyebrow: string; title: string; href?: string; linkText?: string }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{href && <Link className="text-link" href={href}>{linkText}<ArrowRight size={18} aria-hidden="true" /></Link>}</div>;
}
export function PostVisual({ post, priority = false }: { post: Post; priority?: boolean }) {
  if (post.image) return <div className="post-visual original-media"><Image src={post.image.src} alt={post.image.alt} fill sizes="(max-width: 700px) 100vw, 950px" priority={priority} style={{ objectFit: post.image.fit ?? "cover" }} /></div>;
  if (post.visual === "event") return <div className="post-visual event-cover"><div className="event-cover-top"><span>RÜCKBLICK / KASSEL</span><time dateTime={post.eventDate}>{post.eventDate && formatDate(post.eventDate)}</time></div><strong>Ein Abend,<br />der verbindet.</strong><div className="event-cover-bottom"><span>HAZE & CHILL</span><span>DHV × LIVING SOIL CREW</span></div></div>;
  if (post.visual === "kassel") return <div className="post-visual photo"><Image src="/images/kassel.webp" alt="Blick über den Bergpark Wilhelmshöhe auf Kassel" fill sizes="(max-width: 700px) 100vw, 440px" priority={priority} /><span className="visual-label"><MapPin size={13} aria-hidden="true" /> Kassel, Nordhessen</span></div>;
  return <div className={`post-visual editorial ${post.visual}`} aria-hidden="true"><span className="editorial-small">{post.visual === "news" ? "AUS DEM BUNDESVERBAND" : "IDEEN FÜR KASSEL"}</span><span className="editorial-title">{post.visual === "news" ? <>Politik.<br />Perspektiven.<br /><span>Veränderung.</span></> : <>Ins Gespräch<br />kommen.<ArrowUpRight size={52} strokeWidth={1.3} /> </>}</span><span className="editorial-foot">{post.visual === "news" ? "DHV / NEWS" : "GEMEINSAM AKTIV"}<span>↗</span></span></div>;
}
export function PostCard({ post }: { post: Post }) {
  return <article className="post-card"><Link href={`/news/${post.slug}/`} className="card-media" aria-label={post.title}><PostVisual post={post} /></Link><div className="post-card-body"><div className="post-meta"><span className={`category ${post.category === "News" ? "blue" : ""}`}>{post.category}</span><time dateTime={post.date}>{formatDate(post.date)}</time></div><h3><Link href={`/news/${post.slug}/`}>{post.title}</Link></h3><p>{post.teaser}</p><div className="card-bottom"><StatusBadge status={post.status} /><Link href={`/news/${post.slug}/`} className="icon-link" aria-label={`Weiterlesen: ${post.title}`} title="Beitrag lesen"><ArrowUpRight size={21} /></Link></div></div></article>;
}
export function EventRow({ event }: { event: Event }) {
  const date = event.startsAt ? new Date(event.startsAt) : event.date ? new Date(`${event.date}T12:00:00Z`) : null;
  return <article className="event-row"><div className="event-date" aria-hidden="true"><span>{date ? date.toLocaleDateString("de-DE", { month: "short", timeZone: "Europe/Berlin" }) : event.status === "planned" ? "OFFEN" : "DEMO"}</span>{date ? date.toLocaleDateString("de-DE", { day: "2-digit", timeZone: "Europe/Berlin" }) : <CalendarDays size={28} strokeWidth={1.4} />}</div><div className="event-content"><div className="event-top"><span className="event-type">{event.type}</span><StatusBadge status={event.status} /></div><h3><Link href={`/veranstaltungen/${event.slug}/`}>{event.title}</Link></h3><p className="event-description">{event.description}</p><div className="event-meta"><span><CalendarDays size={14} />{event.dateLabel}</span><span><Clock3 size={14} />{event.timeLabel}</span><span><MapPin size={14} />{event.location}</span></div></div><Link href={`/veranstaltungen/${event.slug}/`} className="event-arrow" aria-label={`Details: ${event.title}`} title="Veranstaltung ansehen"><ArrowUpRight size={23} /></Link></article>;
}
export function ContactBand() {
  return <section className="contact-band" id="kontakt"><div className="container contact-inner"><div><p className="eyebrow">GUTE IDEEN BEGINNEN MIT EINEM GESPRÄCH</p><h2>Bring deine Perspektive ein.</h2><p>Interesse an Engagement vor Ort? Der offizielle DHV ist die erste Anlaufstelle für Fragen zu Ortsgruppen und ihrer Gründung.</p></div><div className="contact-actions"><ButtonLink href={site.contactUrl} variant="light" external><MessageCircle size={18} /> DHV kontaktieren</ButtonLink><span>Bundesweiter Kontakt · kein Kasseler Ansprechpartner bestätigt</span></div></div></section>;
}
export function DemoNote({ children }: { children?: React.ReactNode }) {
  return <aside className="demo-note"><span className="note-marker">i</span><p>{children ?? site.localStatus}</p></aside>;
}
export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <header className="page-intro"><div className="container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><div className="intro-copy">{children}</div></div></header>;
}
