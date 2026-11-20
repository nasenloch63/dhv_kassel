import { type Event, type Post, monthlyMeeting, site } from "@/data/content";

export const DEFAULT_OG_IMAGE = {
  url: "/images/dhv/og-logo.png",
  width: 1200,
  height: 630,
  type: "image/png",
  alt: "Deutscher Hanfverband (DHV) – Ortsgruppe Kassel",
} as const;

export const KASSEL_VENUE = {
  "@type": "Place",
  name: "Haze & Chill Café",
  url: "https://www.haze-chill.com/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kölnische Straße 12–14",
    postalCode: "34117",
    addressLocality: "Kassel",
    addressRegion: "Hessen",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.31545,
    longitude: 9.49241,
  },
} as const;

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function getGlobalJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${site.origin}/#organization`,
      name: "DHV-Ortsgruppe Kassel",
      alternateName: ["Deutscher Hanfverband Kassel", "DHV Kassel"],
      url: site.origin,
      logo: {
        "@type": "ImageObject",
        url: `${site.origin}${DEFAULT_OG_IMAGE.url}`,
        width: DEFAULT_OG_IMAGE.width,
        height: DEFAULT_OG_IMAGE.height,
      },
      image: `${site.origin}${DEFAULT_OG_IMAGE.url}`,
      description:
        "Lokale Plattform für Engagement, Aufklärung, Termine und DHV-News rund um Cannabispolitik und Legalisierung in Kassel und Nordhessen. Monatliches Treffen jeden dritten Donnerstag ab 19 Uhr im Haze & Chill Café.",
      areaServed: [
        { "@type": "City", name: "Kassel" },
        { "@type": "AdministrativeArea", name: "Nordhessen" },
        { "@type": "State", name: "Hessen" },
      ],
      location: KASSEL_VENUE,
      parentOrganization: {
        "@type": "Organization",
        name: "Deutscher Hanfverband (DHV)",
        url: "https://hanfverband.de/",
      },
      sameAs: [site.facebookUrl, site.instagramUrl, site.whatsappUrl],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${site.origin}/#website`,
      name: "DHV-Ortsgruppe Kassel",
      url: site.origin,
      inLanguage: "de-DE",
      publisher: { "@id": `${site.origin}/#organization` },
      about: {
        "@type": "Thing",
        name: "Cannabispolitik, Legalisierung und lokale Treffen in Kassel",
      },
    },
  ];
}

export function getArticleJsonLd(post: Post) {
  const pageUrl = `${site.origin}/news/${post.slug}/`;
  return [
    {
      "@context": "https://schema.org",
      "@type": post.category === "News" ? "NewsArticle" : "BlogPosting",
      headline: post.title,
      description: post.teaser,
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: "de-DE",
      mainEntityOfPage: pageUrl,
      url: pageUrl,
      image: `${site.origin}${DEFAULT_OG_IMAGE.url}`,
      articleSection: post.category,
      author: {
        "@type": "Organization",
        name: post.status === "verified" ? "Deutscher Hanfverband (DHV)" : "DHV-Ortsgruppe Kassel",
        url: post.status === "verified" ? "https://hanfverband.de/" : site.origin,
      },
      publisher: { "@id": `${site.origin}/#organization` },
    },
    getBreadcrumbJsonLd([
      { name: "Startseite", url: `${site.origin}/` },
      { name: "Aktuelles", url: `${site.origin}/news/` },
      { name: post.title, url: pageUrl },
    ]),
  ];
}

export function getEventJsonLd(event: Event) {
  const pageUrl = `${site.origin}/veranstaltungen/${event.slug}/`;
  const breadcrumb = getBreadcrumbJsonLd([
    { name: "Startseite", url: `${site.origin}/` },
    { name: "Termine", url: `${site.origin}/veranstaltungen/` },
    { name: event.title, url: pageUrl },
  ]);

  if (event.status === "demo") return [breadcrumb];

  const eventObj: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    url: pageUrl,
    image: `${site.origin}${DEFAULT_OG_IMAGE.url}`,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    isAccessibleForFree: true,
    inLanguage: "de-DE",
    location: KASSEL_VENUE,
    organizer: {
      "@type": "Organization",
      name: "DHV-Ortsgruppe Kassel",
      url: site.origin,
    },
  };

  if (event.startsAt) {
    eventObj.startDate = event.startsAt;
  } else if (event.date) {
    eventObj.startDate = event.date;
  } else if (event.recurrence) {
    eventObj.eventSchedule = {
      "@type": "Schedule",
      repeatFrequency: "P1M",
      byDay: "https://schema.org/Thursday",
      startTime: `${monthlyMeeting.recurrence.time}:00`,
      scheduleTimezone: monthlyMeeting.recurrence.timeZone,
    };
  }

  return [eventObj, breadcrumb];
}

export function getFaqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(item => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
