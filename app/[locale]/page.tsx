import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"

import { siteConfig } from "@/config/site"

import { BackgroundBeams } from "@/components/ui/background-beams"
import { WaitlistForm } from "@/components/form/waitlist"

export async function generateMetadata() {
  const t = await getTranslations("app.pages.home")

  return {
    title: t("title") + " | " + siteConfig.name,
    description: t("description"),
    openGraph: {
      title: `${siteConfig.name} | ${t("title")}`,
      description: t("description"),
      images: [
        {
          url: `${siteConfig.url}/opengraph/waitlist.png`,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} | ${t("title")}`,
      description: siteConfig.description,
      images: [`${siteConfig.url}/opengraph/waitlist.png`],
      creator: "@findmalek",
    },
  }
}
export default function Home() {
  const t = useTranslations("app.pages.home")

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-neutral-950 antialiased">
      <div className="mx-auto max-w-2xl p-4">
        <h1 className="relative z-10 bg-gradient-to-b from-neutral-200  to-neutral-600 bg-clip-text text-center font-sans text-5xl font-bold text-transparent md:text-7xl">
          {t("join-the-waitlist")}
        </h1>
        <p></p>
        <p className="relative z-10 mx-auto my-2 max-w-lg text-center text-sm text-neutral-500">
          {t("paragraph")}
        </p>

        <WaitlistForm />
      </div>
      <BackgroundBeams />
    </div>
  )
}
