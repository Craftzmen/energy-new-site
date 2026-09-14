import Link from "next/link"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-nav"
import { LogoMark } from "@/components/layout/logo-mark"

type BrandLogoProps = {
  variant?: "light" | "dark"
  size?: "sm" | "md"
  className?: string
}

const markSize = { sm: 26, md: 30 } as const

export function BrandLogo({ variant = "light", size = "md", className }: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <LogoMark size={markSize[size]} />
      <span
        className={cn(
          "text-[17px] leading-none tracking-tight md:text-lg",
          variant === "dark" ? "text-white" : "text-ink"
        )}
      >
        <span className="font-semibold">{siteConfig.name}</span>
      </span>
    </Link>
  )
}
