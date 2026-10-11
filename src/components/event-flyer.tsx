import Image from "next/image";
import { type MediaAsset } from "@/data/content";

export function EventFlyer({ flyer, priority = false }: { flyer: MediaAsset; priority?: boolean }) {
  return <figure className="event-flyer">
    <a href={flyer.src} target="_blank" rel="noopener noreferrer" aria-label="Veranstaltungsflyer in voller Größe öffnen">
      <Image src={flyer.src} alt={flyer.alt} width={flyer.width} height={flyer.height} sizes="(max-width: 600px) 100vw, 440px" priority={priority} />
    </a>
    <figcaption>{flyer.caption}<span>{flyer.credit}</span></figcaption>
  </figure>;
}
