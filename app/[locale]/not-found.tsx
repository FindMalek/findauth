import { useTranslations } from "next-intl"

import { StatusWidget } from "@/components/ui/status-widget"
import { NotFoundStatuses } from "@/components/layout/not-found-statuses"

export default function NotFound() {
  const t = useTranslations("app.pages.not-found")

  return (
    <div className="fixed inset-0 z-10 bg-[#F6F6F3] dark:bg-[#0C0C0C]">
      <h1 className="mt-20 text-center font-mono text-[140px] font-medium md:text-[300px]">
        404
      </h1>

      <div className="fixed inset-x-0 bottom-0 h-[350px] w-full bg-background">
        <div className="flex h-14 w-full items-center border-y-DEFAULT border-border px-4">
          <span className="loading-ellipsis animate-pulse text-red-600 dark:text-red-400">
            {t("data-failed")}
          </span>

          <div className="ml-auto flex space-x-2">
            <StatusWidget />
          </div>
        </div>

        <NotFoundStatuses />
      </div>
    </div>
  )
}
