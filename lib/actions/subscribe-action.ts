"use server"

import { env } from "@/env.mjs"

import { getCountryName } from "@/lib/location"
import { db } from "@/lib/prisma"

export async function subscribeAction(formData: FormData, userGroup: string) {
  const email = formData.get("email") as string
  const country = getCountryName()

  try {
    await db.waitlistEntry.create({
      data: {
        email,
        country,
      },
    })

    await fetch(`${env.NEXT_PUBLIC_APP_URL}/api/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: userGroup,
        email,
      }),
    })
  } catch (error) {
    console.log(error)
    return false
  }

  return country
}
