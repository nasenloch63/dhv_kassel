import type { MetadataRoute } from "next";
import { events, posts, site } from "@/data/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/news/",
    "/veranstaltungen/",
    "/ueber-uns/",
    "/unterstuetzen/",
    "/quellen/",
    "/impressum/",
    "/datenschutz/",
    ...posts.map((post) => `/news/${post.slug}/`),
    ...events.map((event) => `/veranstaltungen/${event.slug}/`),
  ];

  return [...new Set(paths)].map((path) => ({
    url: new URL(path, site.origin).href,
  }));
}
