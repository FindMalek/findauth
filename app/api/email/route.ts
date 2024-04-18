import nodemailer from "nodemailer"

import { env } from "@/env.mjs"

import { selectMailOptions } from "@/lib/email-template"

export async function POST(req: Request) {
  const body = await req.json()

  const mailTransporter = nodemailer.createTransport({
    host: env.SMTP_SERVER,
    port: env.SMTP_PORT,
    auth: {
      user: env.FROM_EMAIL,
      pass: env.FROM_EMAIL_PASSWORD,
    },
  })

  try {
    const mailOptions = selectMailOptions(body.type, body)
    await mailTransporter.sendMail(mailOptions)
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    )
  } catch (error) {
    console.log("Error sending email:", error)
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
