import type { MetadataRoute } from "next";
import { industries, posts, services, staticRoutes, work } from "@/config/content";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamic = [
    ...services.map(x => `/services/${x.slug}`),
    ...industries.map(x => `/industries/${x.slug}`),
    ...work.map(x => `/work/${x.slug}`),
    ...posts.map(x => `/blog/${x.slug}`),
  ];
  return [...staticRoutes, ...dynamic].map(path => ({ url: new URL(path, site.url).toString(), changeFrequency: path === "/" ? "weekly" : "monthly", priority: path === "/" ? 1 : .7 }));
}
