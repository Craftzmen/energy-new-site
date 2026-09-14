import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  id?: string
  background?: "default" | "muted" | "ink" | "signal" | "white" | "surface"
  padding?: "default" | "sm" | "xs" | "lg" | "none"
}

const bgMap = {
  default: "",
  muted: "bg-muted/50",
  surface: "bg-surface",
  ink: "bg-ink text-white",
  signal: "bg-signal text-ink",
  white: "bg-white dark:bg-card",
}

const paddingMap = {
  default: "py-10 md:py-12",
  sm: "py-8 md:py-10",
  xs: "py-6 md:py-8",
  lg: "py-14 md:py-18",
  none: "",
}

export function SectionWrapper({
  children,
  className,
  containerClassName,
  id,
  background = "default",
  padding = "default",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(bgMap[background], paddingMap[padding], className)}
    >
      <div className={cn("mx-auto max-w-[1200px] px-5 md:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  )
}
