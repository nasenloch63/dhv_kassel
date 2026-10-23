import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, DemoNote } from "@/components/ui";
import { EventList } from "@/components/event-list";
import { FacebookButton } from "@/components/facebook-button";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { events, site } from "@/data/content";
export const metadata: Metadata = { title: "Veranstaltungen", description: "Monatliches Treffen der DHV-Ortsgruppe Kassel: jeden dritten Donnerstag ab 19 Uhr im Haze & Chill Café. Rückblicke und weitere Planungen." };
export default function EventsPage() {
  return <><PageIntro eyebrow="BEGEGNEN. AUSTAUSCHEN. MITGESTALTEN." title="Veranstaltungen."><p>Jeden dritten Donnerstag im Monat ab 19 Uhr im Haze & Chill Café: gemeinsam Updates besprechen, Veranstaltungen planen und Aufklärungsarbeit voranbringen.</p></PageIntro><section className="container listing-section">
    <DemoNote>Die Treffen vom 9. und 15. Oktober 2026 sind im Archiv dokumentiert. Der monatliche Treffrhythmus und die Uhrzeit wurden für diese Website mitgeteilt. Am 6. November ist der zweite Canna-Cup von Haze & Chill Café und Living Soil Crew angekündigt, unabhängig vom monatlichen Treffen. Zusätzliche Beispielveranstaltungen sind als Demo-Inhalt gekennzeichnet.</DemoNote>
    <div className="listing-social"><FacebookButton>Aktuelles auf Facebook</FacebookButton><WhatsAppButton /></div><EventList events={events} /><div className="official-dates"><div><h2>Termine des Bundesverbands</h2><p>Weitere bestätigte Veranstaltungen findest du im offiziellen Terminkalender des DHV.</p></div><a href={site.datesUrl} target="_blank" rel="noopener noreferrer" className="button primary">Zum DHV-Terminkalender<ArrowUpRight size={18} /></a></div>
  </section></>;
}
