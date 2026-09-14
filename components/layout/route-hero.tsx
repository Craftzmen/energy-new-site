import Link from "next/link"
import Image, { type StaticImageData } from "next/image"
import { ChevronRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export type RouteHeroBreadcrumb = { label: string; href?: string }

type RouteHeroProps = {
  breadcrumbs: RouteHeroBreadcrumb[]
  title: ReactNode
  description?: string
  aside?: ReactNode
  actions?: ReactNode
  image: StaticImageData
  imageAlt: string
  className?: string
}

/**
 * Page header with a full-height photo on the right (desktop) or below the
 * copy (mobile). Every inner page uses this so the site has a consistent,
 * image-led opening.
 */
export function RouteHero({ breadcrumbs, title, description, aside, actions, image, imageAlt, className }: RouteHeroProps) {
  return (
    <section className={cn("relative border-b border-ink/12 bg-white", className)}>
      <div className="grid lg:grid-cols-12">
        <div className="min-w-0 px-5 pt-8 pb-10 md:px-8 md:pt-10 md:pb-12 lg:col-span-7 lg:pr-12 lg:pl-[max(2rem,calc((100vw-1200px)/2+2rem))]">
          <nav aria-label="Breadcrumb" className="mb-6 inline-flex flex-wrap items-center gap-1.5 text-xs text-ink/60">
            {breadcrumbs.map((c, i) => (
              <span key={`${c.label}-${i}`} className="flex items-center gap-1.5">
                {i > 0 ? <ChevronRightIcon className="size-3 text-ink/40" aria-hidden /> : null}
                {c.href ? (
                  <Link href={c.href} className="transition hover:text-ink">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-ink">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
          <h1 className="text-display text-ink">{title}</h1>
          {description ? (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/75 md:text-lg">{description}</p>
          ) : null}
          {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
          {aside ? <div className="mt-8">{aside}</div> : null}
        </div>
        <div className="relative aspect-[16/9] lg:col-span-5 lg:aspect-auto lg:min-h-[420px]">
          <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 42vw" quality={72} className="object-cover" />
        </div>
      </div>
    </section>
  )
}
