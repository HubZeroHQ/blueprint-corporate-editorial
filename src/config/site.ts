const locale = "en-US";

export const site = {
  name: "Meridian Group",
  description: "A strategic engineering and digital transformation firm solving complex enterprise challenges with clarity and rigor.",

  url: "https://meridiangroup.test",

  locale,
  ogLocale: locale.replace("-", "_"),
  contentUpdated: "2026-10-12",

  author: {
    name: "HubZero",
    url: "https://hubzero.in",
  },
} as const;
