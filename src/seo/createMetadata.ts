import type { Metadata } from "next";

import { seoDefaults } from "./defaults";

interface CreateMetadataOptions {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  keywords?: string[];
}

export function createMetadata({
  title,
  description,
  image = "/brand/og-meridian.png",
  canonical,
  keywords = [],
}: CreateMetadataOptions = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${seoDefaults.siteName}`
    : seoDefaults.title;

  const pageDescription =
    description ?? seoDefaults.description;

  const url = canonical
    ? new URL(canonical, seoDefaults.url).toString()
    : seoDefaults.url;

  return {
    title,

    description: pageDescription,

    keywords,

    alternates: {
      canonical: url,
    },

    openGraph: {
      type: seoDefaults.type,
      locale: seoDefaults.locale,
      url,
      siteName: seoDefaults.siteName,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: image,
        },
      ],
    },

    twitter: {
      card: seoDefaults.twitterCard,
      title: pageTitle,
      description: pageDescription,
      images: [image],
    },
  };
}
