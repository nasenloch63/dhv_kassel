import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, DemoNote } from "@/components/ui";
import { EventList } from "@/components/event-list";
import { events, site } from "@/data/content";
export const metadata: Metadata = { title: "Veranstaltungen", description: "Rückblick auf das Treffen im Haze & Chill am 9. Oktober 2026 und das geplante wiederkehrende Format in Kassel." };
export default function EventsPage() {
  return <><PageIntro eyebrow="BEGEGNEN. AUSTAUSCHEN. MITGESTALTEN." title="Veranstaltungen."><p>Ein Abend, der verbindet. Unser Rückblick aus dem Haze & Chill und die nächsten Schritte für ein wiederkehrendes Treffen.</p></PageIntro><section className="container listing-section">
    <DemoNote>Das Treffen vom 9. Oktober 2026 ist im Archiv dokumentiert. Die Wiederholung ist in Planung, ein Folgetermin steht noch nicht fest. Zusätzliche Beispielveranstaltungen sind als Demo-Inhalt gekennzeichnet.</DemoNote>
    <EventList events={events} /><div className="official-dates"><div><h2>Termine des Bundesverbands</h2><p>Weitere bestätigte Veranstaltungen findest du im offiziellen Terminkalender des DHV.</p></div><a href={site.datesUrl} target="_blank" rel="noopener noreferrer" className="button primary">Zum DHV-Terminkalender<ArrowUpRight size={18} /></a></div>
  </section></>;
}
