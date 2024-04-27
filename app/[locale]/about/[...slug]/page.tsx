import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { allAbouts } from "contentlayer/generated"
import { getTranslations } from "next-intl/server"

import { notFoundMetadata, siteConfig } from "@/config/site"

import { BlurryCircle } from "@/components/ui/blurry-circle"
import { RenderMarkdown } from "@/components/ui/markdown"
import { PostStatus } from "@/components/ui/post-status"

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const translatedApp = await getTranslations("app")
  const post = allAbouts.find(
    (about) =>
      about.slugAsParams === `about/${params.slug["0"]}` &&
      about.lang === translatedApp("language")
  )

  const translatedMetadata = await getTranslations("app.pages.not-found")

  if (!post) {
    return notFoundMetadata(translatedMetadata)
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [
        {
          url: image || `${siteConfig.url}/opengraph/notweb.png`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image || `${siteConfig.url}/opengraph/notweb.png`],
    },
  }
}

export default async function Page({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const translatedApp = await getTranslations("app")
  const post = allAbouts.find(
    (about) =>
      about.slugAsParams === `about/${slug}` &&
      about.lang === translatedApp("language")
  )

  if (!post) {
    notFound()
  }

  return (
    <div className="container flex max-w-[1140px] justify-center py-4">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.publishedAt,
            dateModified: post.publishedAt,
            description: post.summary,
            image: `${siteConfig.url}${post.image}`,
            url: `${siteConfig.url}/updates/${post.slug}`,
          }),
        }}
      />

      <BlurryCircle className="absolute right-16 top-[40%] -z-10 hidden bg-[#F59F95]/30 md:block dark:bg-[#F59F95]/10" />
      <BlurryCircle className="absolute right-[30%] top-[70%] -z-10 hidden bg-[#3633D0]/5 md:block dark:bg-[#3633D0]/10" />

      <article className="w-full max-w-[680px] pt-[80px] md:pt-[150px]">
        <PostStatus status={post.tag} />

        <h2 className="mb-6 text-2xl font-medium">{post.title}</h2>

        <div className="updates">
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              width={680}
              height={442}
              className="mb-12"
            />
          )}

          <RenderMarkdown code={post.body.code} />
        </div>
      </article>
    </div>
  )
}
