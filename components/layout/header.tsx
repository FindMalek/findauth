"use client"

import { useState } from "react"
import { Link, usePathname } from "@navigation"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-stars"
import { Icons } from "@/components/ui/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

type ListItemProps = {
  title: string
  href: string
  external?: boolean
  icon: () => React.JSX.Element
  className?: string
}

const components: ListItemProps[] = [
  {
    title: "Documentation",
    href: "https://docs.midday.ai",
    icon: () => <Icons.description size={20} />,
    external: true,
  },
  {
    title: "Open Source",
    href: "https://git.new/midday",
    icon: () => <Icons.github size={19} />,
    external: true,
  },
  {
    title: "Join the community",
    href: "https://go.midday.ai/anPiuRx",
    icon: () => <Icons.discord size={20} />,
    external: true,
  },
  {
    title: "Apps & Integrations",
    href: "https://docs.midday.ai",
    icon: () => <Icons.integrationInstructions size={20} />,
    external: true,
  },
  {
    title: "Engine",
    href: "/engine",
    icon: () => <Icons.memory size={21} />,
  },
]

const ListItem = ({
  className,
  title,
  icon: Icon,
  external,
  ...props
}: ListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          target={external ? "_blank" : undefined}
          className={cn(
            "hover:bg-secondary focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
        >
          <div className="flex items-center">
            <div className="w-8">
              <Icon />
            </div>
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

const links = [
  {
    title: "Pricing",
    path: "/pricing",
    name: "pricing",
  },
  {
    title: "Updates",
    path: "/updates",
    name: "updates",
  },
  {
    title: "Story",
    path: "/story",
    name: "story",
  },
  {
    title: "Download",
    path: "/download",
    name: "download",
  },
]

const listVariant = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
  hidden: {
    opacity: 0,
  },
}

const itemVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export function Header() {
  const pathname = usePathname()
  const [isOpen, setOpen] = useState(false)

  const lastPath = `/${pathname.split("/").pop()}`

  const handleToggleMenu = () => {
    setOpen((prev) => {
      document.body.style.overflow = prev ? "" : "hidden"
      return !prev
    })
  }

  if (pathname.includes("pitch")) {
    return null
  }

  return (
    <header className="sticky top-4 z-50 mt-4 h-12 justify-center px-2 md:flex md:px-4">
      <nav className="border-border flex items-center rounded-2xl border bg-[#FDFDFC]/70 p-3 backdrop-blur-xl dark:bg-[#121212]">
        <NavigationMenu>
          <Link href="/">
            <span className="sr-only">FindPlate Logo</span>
            <Icons.logo className="size-8" />
          </Link>

          <ul className="mx-3 hidden space-x-2 text-sm font-medium md:flex">
            {links.map(({ path, name, title }) => {
              const isActive =
                path === "/updates"
                  ? pathname.includes("updates")
                  : path === lastPath

              return (
                <li key={path}>
                  <Link
                    href={path}
                    className={cn(
                      "text-secondary-foreground hover:bg-secondary mt-1 inline-flex h-8 items-center justify-center rounded-md px-3 py-4 text-sm font-medium transition-colors",
                      isActive && "bg-secondary hover:bg-secondary"
                    )}
                  >
                    {title}
                  </Link>
                </li>
              )
            })}

            <li>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Developers</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-[#FDFDFC] dark:bg-[#121212]">
                    <div className="flex">
                      <Link
                        href="/engine"
                        className="border-border border-r-DEFAULT"
                      >
                        <div className="mb-6 w-[215px]">
                          <NavigationMenuLink asChild>
                            <GlowingStarsBackgroundCard>
                              <span className="text-lg font-medium">
                                FindPlate Engine
                              </span>
                              <div className="flex items-end justify-between">
                                <p className="line-clamp-2 text-sm leading-snug text-[#707070]">
                                  One API to rule them all. Unlimited
                                  connections.
                                </p>
                              </div>
                            </GlowingStarsBackgroundCard>
                          </NavigationMenuLink>
                        </div>
                      </Link>
                      <ul className="flex w-[400px] flex-col p-4">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                            icon={component.icon}
                            external={component.external}
                          />
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </li>
          </ul>
        </NavigationMenu>

        <button
          type="button"
          className="ml-auto p-2 md:hidden"
          onClick={() => handleToggleMenu()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={13}
            fill="none"
          >
            <path
              fill="currentColor"
              d="M0 12.195v-2.007h18v2.007H0Zm0-5.017V5.172h18v2.006H0Zm0-5.016V.155h18v2.007H0Z"
            />
          </svg>
        </button>

        <a
          href="https://app.midday.ai"
          className="bg-primary text-primary-foreground hover:bg-primary/90 hidden h-8 items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors md:inline-flex"
        >
          Sign in
        </a>
      </nav>

      {isOpen && (
        <motion.div
          className="bg-background fixed inset-0 z-10 m-px h-screen px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative mt-4 flex justify-between p-3">
            <button type="button" onClick={handleToggleMenu}>
              <span className="sr-only">Midday Logo</span>
              <Icons.logo />
            </button>

            <button
              type="button"
              className="absolute right-[10px] top-2 ml-auto p-2 md:hidden"
              onClick={handleToggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                className="fill-primary"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
              </svg>
            </button>
          </div>

          <div className="h-full overflow-auto">
            <motion.ul
              initial="hidden"
              animate="show"
              className="mb-8 space-y-8 px-3 pt-8 text-xl text-[#707070] dark:text-[#878787]"
              variants={listVariant}
            >
              {links.map(({ path, name, title }) => {
                const isActive =
                  path === "/updates"
                    ? pathname.includes("updates")
                    : path === lastPath

                return (
                  <motion.li variants={itemVariant} key={path}>
                    <Link
                      href={path}
                      className={cn(isActive && "text-primary")}
                      onClick={handleToggleMenu}
                    >
                      {title}
                    </Link>
                  </motion.li>
                )
              })}

              <motion.li variants={itemVariant} onClick={handleToggleMenu}>
                <Link href="/engine">Engine</Link>
              </motion.li>

              <motion.li variants={itemVariant}>
                <Link href="https://app.midday.ai">Get started</Link>
              </motion.li>

              <motion.li
                variants={itemVariant}
                className="flex items-center space-x-2"
              >
                <Icons.github />
                <Link href="https://git.new/midday">Open Source</Link>
              </motion.li>

              <motion.li
                className="mt-auto border-t-DEFAULT pt-8"
                variants={itemVariant}
              >
                <Link
                  className="text-primary text-xl"
                  href="https://app.midday.ai"
                >
                  Sign in
                </Link>
              </motion.li>
            </motion.ul>
          </div>
        </motion.div>
      )}
    </header>
  )
}
