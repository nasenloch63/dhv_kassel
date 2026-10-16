import { HeartHandshake } from "lucide-react";
import { ButtonLink } from "./ui";

export function SupportBand() {
  return <section className="support-home"><div className="container support-home-inner"><HeartHandshake size={34} strokeWidth={1.5} aria-hidden="true" /><div><p className="eyebrow">DEN BUNDESVERBAND STÄRKEN</p><h2>Gemeinsam für Aufklärung.</h2><p>Mit Förderung, einer Spende oder deinem Engagement vor Ort.</p></div><ButtonLink href="/unterstuetzen/">Den DHV unterstützen</ButtonLink></div></section>;
}
