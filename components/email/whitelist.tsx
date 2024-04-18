/* eslint-disable react/no-unescaped-entities */
import * as React from "react"
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"

// TODO: Transalte this using import { getTranslations } from "next-intl/server
export function WhitelistEmail() {
  return (
    <Html>
      <Head />
      <Preview>
        You have joined the whitelist for FindPlate's private beta.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Img
              src="https://emojicdn.elk.sh/🍽️?style=facebook"
              width="50"
              height="50"
              alt="FindPlate"
            />
            <Hr style={hr} />
            <Text style={paragraph}>
              Thank you for signing up for the waitlist for FindPlate! We're
              thrilled to have you on board and appreciate your interest in what
              we're working on.
            </Text>
            <Text style={paragraph}>
              We can't wait to share FindPlate with you and the rest of our
              community. In the meantime, if you have any questions or thoughts,
              feel free to reply to this email.
            </Text>
            <Text style={paragraph}>
              For the latest updates you can follow us on X{" "}
              <Link href="https://twitter.com/findplatecom" style={anchor}>
                @findplate
              </Link>
            </Text>
            <Hr style={hr} />
            <Text style={footer}>
              You're receiving this email because you opted-in to receive
              updates from FindMalek Labs.
            </Text>
            <Text style={footer}>
              FindMalek Labs, Ksar Hellal 5070, Monastir, Tunisia
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
}

const box = {
  padding: "0 48px",
}

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
}

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
}

const anchor = {
  color: "#556cd6",
  textDecoration: "underline",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
}
