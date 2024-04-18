import { cn } from "@/lib/utils"

import { BackgroundBeams } from "@/components/ui/background-beams"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-neutral-950 antialiased">
      <div className="mx-auto max-w-2xl p-4">
        <h1 className="relative z-10 bg-gradient-to-b from-neutral-200  to-neutral-600 bg-clip-text text-center font-sans text-5xl font-bold text-transparent md:text-7xl">
          Join the waitlist
        </h1>
        <p></p>
        <p className="relative z-10 mx-auto my-2 max-w-lg text-center text-sm text-neutral-500">
          Welcome to FindPlate - the easiest way to find your next meal. We&apos;re currently in private beta, but we&apos;d love to have you join our waitlist
          We promise to never spam you, and you can unsubscribe at any time.
        </p>

        <div className="flex items-center">
          <div className="relative w-full">
            <Input
              type="email"
              placeholder="example@email.com"
              className="relative z-10 my-5"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Icons.arrowRight
                className={cn(buttonVariants({
                  size: "icon",
                }), "z-10 size-6 text-gray-300")}
              />
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  )
}
