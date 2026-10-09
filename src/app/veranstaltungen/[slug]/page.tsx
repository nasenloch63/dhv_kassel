import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock3, MapPin } from "lucide-react";
import { events, site } from "@/data/content";
import { StatusBadge, DemoNote, ButtonLink } from "@/components/ui";
export function generateStaticParams() { return events.map(event => ({ slug: event.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const event = events.find(event => event.slug === slug); return { title: event?.title ?? "Veranstaltung nicht gefunden", description: event?.description }; }
export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const event = events.find(event => event.slug === slug); if (!event) notFound();
  return <article className="container event-detail"><Link href="/veranstaltungen/" className="back-link"><ArrowLeft size={17} />Alle Veranstaltungen</Link><div className="event-detail-grid"><div><header className="article-header"><div className="article-labels"><span className="category">{event.type}</span><StatusBadge status={event.status} /></div><h1>{event.title}</h1><p className="article-teaser">{event.description}</p></header><div className="prose"><DemoNote>{event.phase === "past" ? "Beispiel-Rückblick: Diese Veranstaltung hat nicht nachweislich stattgefunden." : "Demo-Inhalt: Dies ist keine angekündigte Veranstaltung. Datum, Uhrzeit und Treffpunkt sind nicht bestätigt."}</DemoNote>{event.body.map((paragraph, index) => <section key={index}><h2>{paragraph.heading}</h2><p>{paragraph.text}</p></section>)}</div></div><aside className="event-facts"><p className="eyebrow">AUF EINEN BLICK</p><div><CalendarDays /><p><strong>{event.dateLabel}</strong><span>{event.phase === "past" ? "Demo-Archiv" : "Kein bestätigtes Datum"}</span></p></div><div><Clock3 /><p><strong>{event.timeLabel}</strong><span>Keine verbindliche Zeitangabe</span></p></div><div><MapPin /><p><strong>{event.location}</strong><span>Kein bestätigter Veranstaltungsort</span></p></div><p className="facts-note">Für dieses Beispiel werden keine Anmeldungen angenommen.</p><ButtonLink href={site.datesUrl} external>Offizielle DHV-Termine</ButtonLink></aside></div></article>;
}
