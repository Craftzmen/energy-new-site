import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type PageSectionHeaderProps = {
  title: string
  description?: string
  action?: ReactNode
  className?: string
}

export function PageSectionHeader({ title, description, action, className }: PageSectionHeaderProps) {
  return (
    <div className={cn("mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div className="max-w-2xl">
        <h2 className="text-section-title text-ink">{title}</h2>
        {description ? <p className="mt-1.5 text-sm leading-relaxed text-ink/70 md:text-[15px]">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0 text-sm font-medium text-ink">{action}</div> : null}
    </div>
  )
}
