import type { MetadataRoute } from "next";
import { events, posts, site } from "@/data/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: new URL("/", site.origin).href, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: new URL("/veranstaltungen/", site.origin).href, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: new URL("/news/", site.origin).href, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: new URL("/ueber-uns/", site.origin).href, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: new URL("/unterstuetzen/", site.origin).href, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: new URL("/quellen/", site.origin).href, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: new URL("/impressum/", site.origin).href, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: new URL("/datenschutz/", site.origin).href, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const postEntries: MetadataRoute.Sitemap = posts.map(post => ({
    url: new URL(`/news/${post.slug}/`, site.origin).href,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: post.status === "demo" ? 0.4 : 0.75,
  }));

  const eventEntries: MetadataRoute.Sitemap = events.map(event => ({
    url: new URL(`/veranstaltungen/${event.slug}/`, site.origin).href,
    lastModified: event.startsAt
      ? new Date(event.startsAt)
      : event.date
        ? new Date(event.date)
        : now,
    changeFrequency: event.phase === "upcoming" ? "weekly" : "monthly",
    priority: event.status === "demo" ? 0.4 : event.phase === "upcoming" ? 0.85 : 0.65,
  }));

  return [...staticPages, ...postEntries, ...eventEntries];
}
