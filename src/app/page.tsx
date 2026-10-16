import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin, MessagesSquare, Megaphone, UsersRound } from "lucide-react";
import { ButtonLink, SectionHeading, PostCard, EventRow, ContactBand, DemoNote } from "@/components/ui";
import { SupportBand } from "@/components/support-band";
import { DhvMediaBand } from "@/components/media";
import { FacebookButton } from "@/components/facebook-button";
import { InstagramButton } from "@/components/instagram-button";

import { getPosts, events, monthlyMeeting } from "@/data/content";

export default function Home() {
  const featured = getPosts().filter(post => post.status !== "demo").slice(0, 3);
  const localEvents = events.filter(event => event.status !== "demo");
  return <>
    <section className="hero">
      <Image src="/images/kassel.webp" alt="Blick vom Herkules über den Bergpark Wilhelmshöhe auf Kassel" fill priority sizes="100vw" className="hero-image" />
      <div className="hero-shade" />
      <div className="container hero-inner"><div className="hero-copy">
        <p className="hero-eyebrow"><span /> KASSEL. ENGAGIERT. ZUSAMMEN.</p>
        <h1>DHV-Ortsgruppe<br /><span>Kassel</span></h1>
        <p className="hero-description hero-meeting-schedule"><strong>{monthlyMeeting.schedule}</strong><span>Ab 19 Uhr · {monthlyMeeting.venue}</span></p>
        <p className="hero-context">Austauschen. Aufklären. Gemeinsam die nächsten Schritte planen.</p>
        <div className="hero-buttons"><ButtonLink href="/ueber-uns/#mitmachen" variant="light">Mitmachen</ButtonLink><ButtonLink href={`/veranstaltungen/${monthlyMeeting.slug}/`} variant="secondary">Zum Treffen</ButtonLink></div>
        <div className="hero-social-buttons"><FacebookButton /><InstagramButton /></div>
      </div><div className="hero-caption"><MapPin size={14} aria-hidden="true" /> Kassel · Blick vom Herkules</div></div>
      <a href="/quellen/#bildnachweis" className="hero-credit">Foto: Dguendel · CC BY 4.0</a>
    </section>
    <div className="values-strip"><div className="container values-inner">
      <span><MessagesSquare size={21} strokeWidth={1.5} /> Sachlich informieren</span>
      <span><Megaphone size={21} strokeWidth={1.5} /> Lokal etwas bewegen</span>
      <span><UsersRound size={21} strokeWidth={1.5} /> Gemeinsam aktiv werden</span>
    </div></div>
    <section className="section container"><SectionHeading eyebrow="NEUIGKEITEN & PERSPEKTIVEN" title="Was uns bewegt." href="/news/" linkText="Alle Beiträge" /><div className="post-grid">{featured.map(post => <PostCard key={post.id} post={post} />)}</div></section>
    <DhvMediaBand />
    <section className="events-section"><div className="container section">
      <SectionHeading eyebrow="BEGEGNEN. AUSTAUSCHEN. MITGESTALTEN." title="Raum für Begegnung." href="/veranstaltungen/" linkText="Alle Veranstaltungen" />
      <div className="events-home"><div className="event-list">{localEvents.map(event => <EventRow key={event.id} event={event} />)}</div>
        <aside className="events-aside"><div className="calendar-stamp" aria-hidden="true"><span>WIR BLEIBEN</span><strong>im<br />Gespräch.</strong><ArrowUpRight size={37} strokeWidth={1.3} /></div><h3>Ein fester Abend.<br />Jeden Monat.</h3><p>Jeden dritten Donnerstag ab 19 Uhr im Haze & Chill: Updates teilen, Aktionen planen und neue Mitstreiterinnen und Mitstreiter kennenlernen.</p><FacebookButton>Auf Facebook folgen</FacebookButton><a href="https://hanfverband.de/termine" className="text-link" target="_blank" rel="noopener noreferrer">Offizielle DHV-Termine<ArrowUpRight size={17} /></a></aside>
      </div>
    </div></section>
    <section className="about-home section container"><div className="about-photo"><Image src="/images/kassel.webp" alt="Grüner Bergpark und Stadtblick in Kassel" fill sizes="(max-width: 800px) 100vw, 50vw" /><span>KASSEL / NORDHESSEN</span></div><div className="about-copy"><p className="eyebrow">VOR ORT BEGINNT VERÄNDERUNG</p><h2>Eine Stadt.<br />Viele Perspektiven.<br /><span>Eine gemeinsame Idee.</span></h2><p>Menschen zusammenbringen, Wissen teilen und gesellschaftlichen Dialog gestalten: Diese nicht offizielle Demo verbindet lokale Berichte aus Kassel mit Nachrichten des Bundesverbands.</p><Link href="/ueber-uns/" className="text-link">Über die Ortsgruppen-Idee<ArrowRight size={18} /></Link><DemoNote /></div></section>
    <SupportBand />
    <ContactBand />
  </>;
}
