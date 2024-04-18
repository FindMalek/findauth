import { render } from "@react-email/render"

import { env } from "@/env.mjs"
import { MagicLinkData } from "@/types/auth"

import { MagicLink } from "@/components/email/magic-link"
import { WhitelistEmail } from "@/components/email/whitelist"

// TODO: Transalte this using import { getTranslations } from "next-intl/server
export function selectMailOptions(type: string, body: MagicLinkData) {
  let html: string
  const mailOptions = {
    from: `FindPlate <${env.FROM_EMAIL}>`,
  }

  switch (type) {
    case "magic-link":
      html = render(MagicLink({ magicLink: body as MagicLinkData }))
      return {
        from: mailOptions.from,
        to: (body as MagicLinkData).email,
        subject: `Your magic link for FindPlate`,
        html: html,
      }
    case "whitelist":
      html = render(WhitelistEmail())
      return {
        from: mailOptions.from,
        to: (body as MagicLinkData).email,
        subject: `Thank You for Joining Our Waitlist!`,
        html: html,
      }
    default:
      throw new Error("Invalid submission type")
  }
}
