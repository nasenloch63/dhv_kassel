import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, DemoNote } from "@/components/ui";
import { EventList } from "@/components/event-list";
import { events, site } from "@/data/content";
export const metadata: Metadata = { title: "Veranstaltungen", description: "Klar gekennzeichnete Veranstaltungsbeispiele für Kassel, ohne erfundene Termine. Offizielle Termine beim DHV." };
export default function EventsPage() { return <><PageIntro eyebrow="BEGEGNEN. AUSTAUSCHEN. MITGESTALTEN." title="Veranstaltungen."><p>Platz für Gespräche und neue Ideen. Hier findest du beispielhafte Formate für lokales Engagement.</p></PageIntro><section className="container listing-section"><DemoNote>Keine Kasseler Termine verifiziert. Sämtliche Veranstaltungen auf dieser Demoseite sind ausdrücklich Beispiele ohne echte Termine, Zusagen oder Anmeldung.</DemoNote><EventList events={events} /><div className="official-dates"><div><h2>Auf der Suche nach einem echten Termin?</h2><p>Der offizielle Terminkalender des DHV führt bestätigte Veranstaltungen.</p></div><a href={site.datesUrl} target="_blank" rel="noopener noreferrer" className="button primary">Zum DHV-Terminkalender<ArrowUpRight size={18} /></a></div></section></>; }
