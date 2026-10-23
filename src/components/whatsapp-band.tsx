import { MessageCircle } from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";

export function WhatsAppBand() {
  return <section className="whatsapp-band"><div className="container whatsapp-band-inner"><MessageCircle size={30} strokeWidth={1.5} aria-hidden="true" /><div><p className="eyebrow">NEU: UNSER WHATSAPP-KANAL</p><h2>News aus Kassel. Direkt im Kanal.</h2><p>Bleib mit den aktuellen Neuigkeiten der DHV-Ortsgruppe Kassel verbunden.</p></div><WhatsAppButton>WhatsApp-Kanal öffnen</WhatsAppButton></div></section>;
}
