import type { Metadata } from "next";

import { site } from "./site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },

  description: site.description,

  applicationName: site.name,

  authors: [
    {
      name: site.author.name,
      url: site.author.url,
    },
  ],

  openGraph: {
    type: "website",
    locale: site.ogLocale,
    siteName: site.name,
    title: site.name,
    description: site.description,
    url: site.url,
    images: [
      {
        url: "/brand/og-meridian.png",
        width: 1200,
        height: 630,
        alt: "Meridian Group — clarity from complexity",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/brand/og-meridian.png"],
  },
};
