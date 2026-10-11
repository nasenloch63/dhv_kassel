import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, DemoNote } from "@/components/ui";
import { EventList } from "@/components/event-list";
import { FacebookButton } from "@/components/facebook-button";
import { events, site } from "@/data/content";
export const metadata: Metadata = { title: "Veranstaltungen", description: "Offenes Gründungstreffen am 15. Oktober 2026 ab 19 Uhr im Haze & Chill Café Kassel. Rückblicke und weitere Planungen." };
export default function EventsPage() {
  return <><PageIntro eyebrow="BEGEGNEN. AUSTAUSCHEN. MITGESTALTEN." title="Veranstaltungen."><p>Am 15. Oktober ab 19 Uhr: offenes Treffen zur Neugründung der DHV-Ortsgruppe Kassel im Haze & Chill. Kein Vorwissen nötig.</p></PageIntro><section className="container listing-section">
    <DemoNote>Das Treffen vom 9. Oktober 2026 ist im Archiv dokumentiert. Das neue Gründungstreffen am 15. Oktober ist laut Flyer angekündigt. Die Wiederholung des Cannabis-Testformats ist separat in Planung. Zusätzliche Beispielveranstaltungen sind als Demo-Inhalt gekennzeichnet.</DemoNote>
    <div className="listing-social"><FacebookButton>Aktuelles auf Facebook</FacebookButton></div><EventList events={events} /><div className="official-dates"><div><h2>Termine des Bundesverbands</h2><p>Weitere bestätigte Veranstaltungen findest du im offiziellen Terminkalender des DHV.</p></div><a href={site.datesUrl} target="_blank" rel="noopener noreferrer" className="button primary">Zum DHV-Terminkalender<ArrowUpRight size={18} /></a></div>
  </section></>;
}
