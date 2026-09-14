import Link from "next/link"
import { ChevronRightIcon } from "lucide-react"

export type PolicyBreadcrumb = { label: string; href?: string }

type PolicyHeaderProps = {
  title: string
  description: string
  lastUpdated: string
  breadcrumbs: PolicyBreadcrumb[]
}

export function PolicyHeader({ title, description, lastUpdated, breadcrumbs }: PolicyHeaderProps) {
  return (
    <section className="border-b border-ink/12 bg-white pt-8 pb-10 md:pt-10 md:pb-12">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <nav aria-label="Breadcrumb" className="mb-5 inline-flex flex-wrap items-center gap-1.5 text-xs text-ink/60">
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

        <div className="max-w-3xl">
          <h1 className="text-display text-ink">{title}</h1>
          <p className="mt-4 text-base leading-relaxed text-ink/75 md:text-lg">{description}</p>
          <p className="mt-4 text-xs text-ink/55">Effective date: {lastUpdated}</p>
        </div>
      </div>
    </section>
  )
}
