import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock3, MapPin } from "lucide-react";
import { FacebookButton } from "@/components/facebook-button";
import { InstagramButton } from "@/components/instagram-button";
import { EventFlyer } from "@/components/event-flyer";
import { events, site } from "@/data/content";
import { StatusBadge, DemoNote, ButtonLink } from "@/components/ui";
export function generateStaticParams() { return events.map(event => ({ slug: event.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find(event => event.slug === slug);
  return { title: event?.title ?? "Veranstaltung nicht gefunden", description: event?.description };
}
export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = events.find(event => event.slug === slug);
  if (!event) notFound();
  const isDemo = event.status === "demo";
  return <article className="container event-detail">
    <Link href="/veranstaltungen/" className="back-link"><ArrowLeft size={17} />Alle Veranstaltungen</Link>
    <div className="event-detail-grid"><div>
      <header className="article-header"><div className="article-labels"><span className="category">{event.type}</span><StatusBadge status={event.status} /></div><h1>{event.title}</h1><p className="article-teaser">{event.description}</p></header>
      {event.flyer && <EventFlyer flyer={event.flyer} priority />}
      <div className="prose">
        {isDemo ? <DemoNote>{event.phase === "past" ? "Beispiel-Rückblick: Diese Veranstaltung hat nicht nachweislich stattgefunden." : "Demo-Inhalt: Dies ist keine angekündigte Veranstaltung. Datum, Uhrzeit und Treffpunkt sind nicht bestätigt."}</DemoNote> : <DemoNote>{event.reportLabel}</DemoNote>}
        {event.body.map((paragraph, index) => <section key={index}><h2>{paragraph.heading}</h2><p>{paragraph.text}</p></section>)}
        {event.relatedPostSlug && <div className="report-action"><ButtonLink href={`/news/${event.relatedPostSlug}/`}>Den Rückblick lesen</ButtonLink></div>}
        {event.announcementUrl && <div className="report-action"><FacebookButton>Facebook-Seite besuchen</FacebookButton><InstagramButton /></div>}
      </div>
    </div><aside className="event-facts"><p className="eyebrow">AUF EINEN BLICK</p>
      <div><CalendarDays /><p><strong>{event.dateLabel}</strong><span>{isDemo ? (event.phase === "past" ? "Demo-Archiv" : "Kein bestätigtes Datum") : event.phase === "past" ? "Vergangene Veranstaltung" : event.status === "announced" ? "Ankündigung laut Flyer" : "Wiederholung in Planung"}</span></p></div>
      <div><Clock3 /><p><strong>{event.timeLabel}</strong><span>{event.startsAt ? "Beginn laut Flyer · Endzeit nicht angegeben" : event.phase === "past" && !isDemo ? "Keine Uhrzeit für diesen Rückblick übermittelt" : "Keine verbindliche Zeitangabe"}</span></p></div>
      <div><MapPin /><p><strong>{event.location}</strong>{isDemo ? <span>Kein bestätigter Veranstaltungsort</span> : <a href="https://www.haze-chill.com/" target="_blank" rel="noopener noreferrer">Adresse auf der Café-Website</a>}</p></div>
      <p className="facts-note">{isDemo ? "Für dieses Beispiel werden keine Anmeldungen angenommen." : event.phase === "past" ? "Dieser Eintrag dokumentiert den vergangenen Abend." : event.status === "announced" ? "Offener Austausch · kein Vorwissen nötig. Eine Anmeldung oder Gebühr ist im Flyer nicht angegeben." : "Ein Folgetermin und Teilnahmebedingungen werden ergänzt, sobald sie bestätigt sind. Noch keine Anmeldung möglich."}</p>
      {event.announcementUrl && <FacebookButton>Treffen auf Facebook</FacebookButton>}
      <ButtonLink href={site.datesUrl} external>Offizielle DHV-Termine</ButtonLink>
    </aside></div>
  </article>;
}
