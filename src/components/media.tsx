import Image from "next/image";
import { ArrowUpRight, Play, Camera } from "lucide-react";
import { dhvMedia, type MediaAsset } from "@/data/content";

export function DhvLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src={dhvMedia.logo.src}
      alt={dhvMedia.logo.alt}
      width={1650}
      height={500}
      className={className}
    />
  );
}

export function MediaGallery({
  items,
  title = "Living Soil Crew",
}: {
  items: MediaAsset[];
  title?: string;
}) {
  if (!items.length) return null;
  return (
    <section className="report-media">
      <h2>{title}</h2>
      <div className={`media-gallery ${items.length === 1 ? "single" : ""}`}>
        {items.map(item => (
          <figure key={item.src}>
            <a
              href={item.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.alt} in voller Größe öffnen`}
            >
              <div
                className={`gallery-image ${item.src.startsWith("/images/events/") ? "event-gallery-image" : ""}`}
                style={
                  item.src.startsWith("/images/events/")
                    ? { aspectRatio: `${item.width} / ${item.height}` }
                    : undefined
                }
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 600px) 100vw, 700px"
                  style={{ objectFit: item.fit ?? "cover" }}
                />
              </div>
            </a>
            <figcaption>
              {item.caption}
              <span>{item.credit}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function EventPhotoPlaceholders({ count = 3 }: { count?: number }) {
  return (
    <section className="event-photo-section">
      <h2>Bilder vom Abend</h2>
      <p>Die Fotos vom Treffen werden ergänzt.</p>
      <div className="event-photo-placeholders">
        {Array.from({ length: count }, (_, index) => (
          <div
            className="photo-placeholder"
            key={index}
            aria-label={`Platzhalter für Veranstaltungsfoto ${index + 1}`}
          >
            <Camera size={26} strokeWidth={1.4} aria-hidden="true" />
            <span>Foto folgt</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function DhvMediaBand() {
  return (
    <section className="dhv-section-wrap">
      <div className="container">
        <div className="dhv-box dhv-box-tertiary dhv-video-box">
          <h2 className="dhv-box-heading">Letzte DHV Video-News</h2>
          <div className="dhv-media-inner">
            <a
              className="dhv-video-link"
              href={dhvMedia.videoNews.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DHV-News 525 auf der offiziellen DHV-Website ansehen"
            >
              <Image
                src={dhvMedia.videoNews.src}
                alt={dhvMedia.videoNews.alt}
                width={391}
                height={220}
              />
            </a>
            <div className="dhv-video-copy">
              <h3>
                <a href={dhvMedia.videoNews.url} target="_blank" rel="noopener noreferrer">
                  Anhörung zu GKV &amp; Cannabis | DHV-News #525
                </a>
              </h3>
              <p className="dhv-video-date">09.10.2026</p>
              <p>
                Die Originalausgabe direkt vom Bundesverband: Georg Wurth berichtet aus der
                Anhörung zu GKV &amp; Cannabis. Video und Podcast findest du auf der offiziellen
                Website des Deutschen Hanfverbands.
              </p>
              <div className="dhv-video-actions">
                <a
                  className="button primary"
                  href={dhvMedia.videoNews.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play size={15} fill="currentColor" aria-hidden="true" />
                  Zum Video
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
              <span className="media-credit">{dhvMedia.videoNews.credit}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
