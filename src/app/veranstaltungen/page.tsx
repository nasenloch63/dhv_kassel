import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, DemoNote } from "@/components/ui";
import { EventList } from "@/components/event-list";
import { FacebookButton } from "@/components/facebook-button";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { events, site } from "@/data/content";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
export const metadata: Metadata = {
  title: "Termine & Veranstaltungen in Kassel",
  description: "Monatliches Treffen der DHV-Ortsgruppe Kassel: jeden dritten Donnerstag ab 19 Uhr im Haze & Chill Café (Kölnische Straße 12–14, 34117 Kassel). Rückblicke und weitere Termine.",
  alternates: { canonical: "/veranstaltungen/" },
  openGraph: { title: "Termine & Veranstaltungen | DHV-Ortsgruppe Kassel", description: "Jeden dritten Donnerstag ab 19 Uhr im Haze & Chill Café in Kassel.", url: "/veranstaltungen/", images: [DEFAULT_OG_IMAGE] },
  twitter: { card: "summary_large_image", title: "Termine & Veranstaltungen | DHV-Ortsgruppe Kassel", description: "Jeden dritten Donnerstag ab 19 Uhr im Haze & Chill Café in Kassel.", images: [DEFAULT_OG_IMAGE.url] },
};
export default function EventsPage() {
  return <><PageIntro eyebrow="BEGEGNEN. AUSTAUSCHEN. MITGESTALTEN." title="Veranstaltungen."><p>Jeden dritten Donnerstag im Monat ab 19 Uhr im Haze & Chill Café: gemeinsam Updates besprechen, Veranstaltungen planen und Aufklärungsarbeit voranbringen.</p></PageIntro><section className="container listing-section">
    <DemoNote>Das zweite offene DHV-Treffen am 19. November ab 19 Uhr ist angekündigt. Der Canna-Cup vom 6. November ist im Archiv dokumentiert. Zusätzliche Beispielveranstaltungen sind als Demo-Inhalt gekennzeichnet.</DemoNote>
    <div className="listing-social"><FacebookButton>Aktuelles auf Facebook</FacebookButton><WhatsAppButton /></div><EventList events={events} /><div className="official-dates"><div><h2>Termine des Bundesverbands</h2><p>Weitere bestätigte Veranstaltungen findest du im offiziellen Terminkalender des DHV.</p></div><a href={site.datesUrl} target="_blank" rel="noopener noreferrer" className="button primary">Zum DHV-Terminkalender<ArrowUpRight size={18} /></a></div>
  </section></>;
}
