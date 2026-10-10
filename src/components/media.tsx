import Image from "next/image";
import { ArrowUpRight, Play, Camera } from "lucide-react";
import { dhvMedia, type MediaAsset } from "@/data/content";

export function DhvLogo({ className = "" }: { className?: string }) {
  return <Image src={dhvMedia.logo.src} alt={dhvMedia.logo.alt} width={1650} height={500} className={className} />;
}

export function MediaGallery({ items, title = "Living Soil Crew" }: { items: MediaAsset[]; title?: string }) {
  if (!items.length) return null;
  return <section className="report-media"><h2>{title}</h2><div className={`media-gallery ${items.length === 1 ? "single" : ""}`}>
    {items.map(item => <figure key={item.src}><a href={item.src} target="_blank" rel="noopener noreferrer" aria-label={`${item.alt} in voller Größe öffnen`}>
      <div className="gallery-image"><Image src={item.src} alt={item.alt} fill sizes="(max-width: 600px) 100vw, 700px" style={{ objectFit: item.fit ?? "cover" }} /></div>
    </a><figcaption>{item.caption}<span>{item.credit}</span></figcaption></figure>)}
  </div></section>;
}

export function EventPhotoPlaceholders({ count = 3 }: { count?: number }) {
  return <section className="event-photo-section"><h2>Bilder vom Abend</h2><p>Die Fotos vom Treffen werden ergänzt.</p><div className="event-photo-placeholders">
    {Array.from({ length: count }, (_, index) => <div className="photo-placeholder" key={index} aria-label={`Platzhalter für Veranstaltungsfoto ${index + 1}`}><Camera size={26} strokeWidth={1.4} aria-hidden="true" /><span>Foto folgt</span></div>)}
  </div></section>;
}

export function DhvMediaBand() {
  return <section className="dhv-media-band"><div className="container dhv-media-inner">
    <a className="dhv-video-link" href={dhvMedia.videoNews.url} target="_blank" rel="noopener noreferrer" aria-label="DHV-News 525 auf der offiziellen DHV-Website ansehen">
      <Image src={dhvMedia.videoNews.src} alt={dhvMedia.videoNews.alt} width={391} height={220} />
      <span className="video-link-label"><Play size={14} fill="currentColor" aria-hidden="true" />Video-News beim DHV ansehen<ArrowUpRight size={14} aria-hidden="true" /></span>
    </a>
    <div><p className="eyebrow">DIREKT VOM BUNDESVERBAND</p><h2>Die Stimmen.<br />Die Themen. Die DHV-News.</h2><p>Die Originalausgabe vom 9. Oktober 2026: „Anhörung zu GKV & Cannabis“. Video und Podcast findest du auf der offiziellen Website des Deutschen Hanfverbands.</p>
      <a className="text-link" href={dhvMedia.videoNews.url} target="_blank" rel="noopener noreferrer">Zur Originalausgabe<ArrowUpRight size={17} /></a>
      <span className="media-credit">{dhvMedia.videoNews.credit}</span>
    </div>
  </div></section>;
}
