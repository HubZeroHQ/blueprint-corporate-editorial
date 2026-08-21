import type { MetadataRoute } from "next";
import { industries, posts, services, staticRoutes, work } from "@/config/content";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const fallbackDate = site.contentUpdated;
  const dynamic = [
    ...services.map(x => ({ path: `/services/${x.slug}`, lastModified: fallbackDate })),
    ...industries.map(x => ({ path: `/industries/${x.slug}`, lastModified: fallbackDate })),
    ...work.map(x => ({ path: `/work/${x.slug}`, lastModified: fallbackDate })),
    ...posts.map(x => ({ path: `/blog/${x.slug}`, lastModified: x.authoredDate })),
  ];
  const entries = [
    ...staticRoutes.map(path => ({ path, lastModified: fallbackDate })),
    ...dynamic,
  ];

  return entries.map(({ path, lastModified }) => ({
    url: new URL(path, site.url).toString(),
    lastModified: new Date(lastModified),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : .7,
  }));
}
