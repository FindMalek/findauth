import createMiddleware from "next-intl/middleware"

import { locales } from "@/config/consts"

export default createMiddleware({
  locales: locales,
  defaultLocale: "en",
})

export const config = {
  matcher: [
    "/",
    "/(fr|en|ar|tn|de)/:path*",
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
}
