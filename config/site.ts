import { SiteConfig } from "types"

export const siteConfig: SiteConfig = {
  name: "FindPlate",
  description:
    "FindPlate is a food ordering platform that allows you to order food from your favorite restaurants and have it delivered to your doorstep.",
  url: "https://plate.findmalek.com",
  ogImage: "https://plate.findmalek.com/og.png",
  links: {
    twitter: "https://twitter.com/foundmalek",
    github: "https://github.com/findmalek/findplate",
  },
}

export const notFoundMetadata = (t: (key: string) => string) => {
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: `${siteConfig.name} | ${t("title")}`,
      description: t("description"),
      images: [
        {
          url: `${siteConfig.url}/opengraph/not-found.png`,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} | ${t("title")}`,
      description: siteConfig.description,
      images: [`${siteConfig.url}/opengraph/not-found.png`],
      creator: "@findmalek",
    },
  }
}
