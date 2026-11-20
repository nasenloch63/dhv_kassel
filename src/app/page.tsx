import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink, PostCard, EventRow, DemoNote } from "@/components/ui";
import { HeroSlider, type HeroSlide } from "@/components/hero-slider";
import { WhatsAppBand } from "@/components/whatsapp-band";
import { EventFlyer } from "@/components/event-flyer";
import { SupportBand } from "@/components/support-band";
import { DhvMediaBand } from "@/components/media";
import { FacebookButton } from "@/components/facebook-button";
import { InstagramButton } from "@/components/instagram-button";

import { getPosts, events, monthlyMeeting, site } from "@/data/content";

const infoPortals = [
  { label: "Drogenpolitik in Deutschland", href: "https://hanfverband.de/themen/drogenpolitik-in-deutschland", external: true },
  { label: "Echte Legalisierung", href: "https://hanfverband.de/themen/echte-legalisierung", external: true },
  { label: "Recht & Urteile", href: "https://hanfverband.de/themen/recht-urteile", external: true },
  { label: "Cannabis als Medizin", href: "https://hanfverband.de/themen/cannabis-als-medizin", external: true },
  { label: "Cannabis selbst anbauen", href: "https://hanfverband.de/themen/cannabis-selbst-anbauen", external: true },
  { label: "Cannabis Social Clubs", href: "https://hanfverband.de/cscs", external: true },
  { label: "DHV-Faktenchecks", href: "https://hanfverband.de/faktenchecks", external: true },
  { label: "DHV-Ortsgruppen", href: site.groupsUrl, external: true },
];

export default function Home() {
  const featured = getPosts().filter(post => post.status !== "demo").slice(0, 3);
  const localEvents = events.filter(event => event.status !== "demo");
  const nextMeeting = events.find(
    event => event.id === "event-dhv-november" && event.phase === "upcoming",
  );

  const heroSlides: HeroSlide[] = [
    {
      id: "kassel-ortsgruppe",
      subtitle: "DEUTSCHER HANFVERBAND · KASSEL",
      title: "DHV-Ortsgruppe Kassel",
      description: `${monthlyMeeting.schedule}, ab 19 Uhr im ${monthlyMeeting.venue}. ${
        nextMeeting
          ? `Nächstes offenes Treffen: ${nextMeeting.dateLabel}.`
          : "Austauschen, aufklären und gemeinsam vor Ort aktiv werden."
      }`,
      ctaLabel: "Zum nächsten Treffen",
      ctaHref: `/veranstaltungen/${nextMeeting?.slug ?? monthlyMeeting.slug}/`,
      secondaryLabel: "Mitmachen",
      secondaryHref: "/ueber-uns/#mitmachen",
      imageSrc: "/images/kassel.webp",
      imageAlt: "Blick vom Herkules über den Bergpark Wilhelmshöhe auf Kassel",
      imagePosition: "50% 50%",
      credit: "Foto: Dguendel · CC BY 4.0",
    },
    ...(nextMeeting
      ? [
          {
            id: "next-meeting",
            subtitle: "NÄCHSTES OFFENES TREFFEN",
            title: nextMeeting.title,
            description: `${nextMeeting.dateLabel} · ${nextMeeting.timeLabel} · ${nextMeeting.location}. Komm vorbei, lerne die Gruppe kennen und bring deine Themen mit.`,
            ctaLabel: "Zum Veranstaltungseintrag",
            ctaHref: `/veranstaltungen/${nextMeeting.slug}/`,
            secondaryLabel: "Alle Termine",
            secondaryHref: "/veranstaltungen/",
            imageSrc: "/images/events/haze-chill-2026-10-09/community.webp",
            imageAlt: "Community-Treffen in Kassel im Haze & Chill",
            imagePosition: "50% 40%",
          },
        ]
      : []),
    {
      id: "dhv-support",
      subtitle: "BUNDESVERBAND STÄRKEN",
      title: "Deine Stimme für echte Legalisierung",
      description:
        "Unterstütze den Deutschen Hanfverband als Fördermitglied, mit einer Spende oder durch aktives Engagement vor Ort in Kassel.",
      ctaLabel: "Jetzt unterstützen",
      ctaHref: "/unterstuetzen/",
      secondaryLabel: "Über den DHV",
      secondaryHref: "/ueber-uns/",
      imageSrc: "/images/dhv/bundestag.jpg",
      imageAlt: "Deutscher Hanfverband vor dem Bundestag",
      imagePosition: "50% 35%",
      credit: "Grafik: Deutscher Hanfverband",
    },
  ];

  return (
    <>
      <HeroSlider slides={heroSlides} />

      {nextMeeting?.flyer && (
        <section className="dhv-section-wrap">
          <div className="container">
            <div className="dhv-box dhv-box-secondary next-event-inner">
              <EventFlyer flyer={nextMeeting.flyer} />
              <div className="next-event-copy">
                <p className="eyebrow">NÄCHSTES OFFENES TREFFEN</p>
                <h2>{nextMeeting.title}</h2>
                <p className="next-event-date">
                  <strong>
                    {nextMeeting.dateLabel} · {nextMeeting.timeLabel}
                  </strong>
                  <span>{nextMeeting.location}</span>
                </p>
                <p>{nextMeeting.description}</p>
                <div className="next-event-actions">
                  <ButtonLink href={`/veranstaltungen/${nextMeeting.slug}/`}>
                    Zum Veranstaltungseintrag
                  </ButtonLink>
                  {nextMeeting.externalLink && (
                    <InstagramButton href={nextMeeting.externalLink.url}>
                      {nextMeeting.externalLink.label}
                    </InstagramButton>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <DhvMediaBand />

      <section className="dhv-section-wrap">
        <div className="container">
          <div className="dhv-box dhv-box-tertiary dhv-news-box">
            <h2 className="dhv-box-heading">Aktuelles</h2>
            <div className="post-grid">
              {featured.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            <div className="dhv-box-footer">
              <ButtonLink href="/news/">Alle Nachrichten</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="dhv-section-wrap">
        <div className="container">
          <div className="dhv-box dhv-box-tertiary dhv-events-box">
            <h2 className="dhv-box-heading">Termine &amp; Veranstaltungen</h2>
            <div className="events-home">
              <div className="event-list">
                {localEvents.map(event => (
                  <EventRow key={event.id} event={event} />
                ))}
              </div>
              <aside className="events-aside">
                <div className="calendar-stamp" aria-hidden="true">
                  <span>MONATLICHES TREFFEN</span>
                  <strong>Jeden 3. Donnerstag</strong>
                </div>
                <h3>Ab 19 Uhr im Haze &amp; Chill</h3>
                <p>
                  Updates teilen, lokale Aktionen planen und neue Mitstreiterinnen und Mitstreiter
                  in Kassel kennenlernen.
                </p>
                <div className="events-aside-actions">
                  <FacebookButton>Auf Facebook folgen</FacebookButton>
                  <a
                    href={site.datesUrl}
                    className="text-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Offizielle DHV-Termine <ArrowUpRight size={16} />
                  </a>
                </div>
              </aside>
            </div>
            <div className="dhv-box-footer">
              <ButtonLink href="/veranstaltungen/">Alle Veranstaltungen</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="dhv-section-wrap">
        <div className="container">
          <div className="dhv-box dhv-box-secondary about-home">
            <div className="about-photo">
              <Image
                src="/images/kassel.webp"
                alt="Grüner Bergpark und Stadtblick in Kassel"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />
              <span>KASSEL / NORDHESSEN</span>
            </div>
            <div className="about-copy">
              <h2>Deine Stimme für echte Legalisierung – vor Ort in Kassel</h2>
              <p>
                Der Deutsche Hanfverband vertritt die Interessen der Cannabiskonsumenten und
                Legalisierungsbefürworter. Diese nicht offizielle Demoseite verbindet lokale
                Berichte, Treffen und Aktionen aus Kassel mit den Nachrichten des Bundesverbands.
              </p>
              <div className="dhv-split-actions">
                <ButtonLink href="/ueber-uns/">Mehr über uns</ButtonLink>
              </div>
              <DemoNote />
            </div>
          </div>
        </div>
      </section>

      <SupportBand />

      <section className="dhv-section-wrap">
        <div className="container">
          <div className="dhv-box dhv-box-tertiary dhv-portals-box">
            <h2 className="dhv-box-heading">Informationsportale</h2>
            <p className="dhv-portals-intro">
              Informiere dich über Schwerpunkte der Legalisierung und die Arbeit des Deutschen
              Hanfverbands.
            </p>
            <div className="dhv-portals-grid">
              {infoPortals.map(portal => (
                <a
                  key={portal.label}
                  href={portal.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dhv-portal-link"
                >
                  <span>{portal.label}</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhatsAppBand />
    </>
  );
}
