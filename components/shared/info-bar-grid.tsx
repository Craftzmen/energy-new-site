import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type InfoBarGridProps = {
  children: ReactNode
  /** Max columns at the widest breakpoint. Five-column bars wrap to 3-up until ~1400px. */
  columns?: 4 | 5
  className?: string
  "aria-label"?: string
}

const columnClasses: Record<4 | 5, string> = {
  4: "sm:grid-cols-2 xl:grid-cols-4",
  // Two columns until very wide screens; lone last item spans the row so no empty cell appears.
  5: "sm:grid-cols-2 min-[1400px]:grid-cols-5 [&>li:last-child:nth-child(odd)]:sm:col-span-2 [&>li:last-child:nth-child(odd)]:min-[1400px]:col-span-1",
}

export function InfoBarGrid({ children, columns = 4, className, "aria-label": ariaLabel }: InfoBarGridProps) {
  return (
    <section className={cn("border-b border-ink/12 bg-surface", className)} aria-label={ariaLabel}>
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <ul
          className={cn(
            "grid grid-cols-1 border-t border-l border-ink/12",
            columnClasses[columns]
          )}
        >
          {children}
        </ul>
      </div>
    </section>
  )
}

type InfoBarCellProps = {
  children: ReactNode
  className?: string
}

export function InfoBarCell({ children, className }: InfoBarCellProps) {
  return (
    <li className={cn("min-w-0 border-r border-b border-ink/12 bg-surface", className)}>
      {children}
    </li>
  )
}

export const infoBarLinkClass =
  "flex h-full min-w-0 items-start gap-3 p-5 transition hover:bg-muted/40 sm:p-6"

export const infoBarStaticClass = "flex h-full min-w-0 items-start gap-3 p-5 sm:p-6"
