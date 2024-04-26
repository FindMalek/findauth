import { notFound } from "next/navigation"
import { getTranslations } from "next-intl/server"

import { siteConfig } from "@/config/site"

export const runtime = "edge"

export async function generateMetadata() {
  const t = await getTranslations("app.pages.not-found")

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

export default function CatchAllPage() {
  notFound()
}
