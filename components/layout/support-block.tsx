import Link from "next/link"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { siteConfig } from "@/lib/site-nav"

type SupportBlockProps = {
  title?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
}

export function SupportBlock({
  title = "Questions about plans or your account?",
  description = "Customer service is available by phone during business hours. Have your service address ready if you are enrolling or transferring service.",
  ctaLabel = "Start service",
  ctaHref = "/contact",
}: SupportBlockProps) {
  return (
    <SectionWrapper background="surface" padding="sm" className="section-divider">
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <h2 className="text-section-title text-ink">{title}</h2>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink/70">{description}</p>
          <Link
            href={ctaHref}
            className="mt-5 inline-flex h-10 items-center rounded-sm bg-signal px-5 text-sm font-semibold text-ink hover:bg-signal-light"
          >
            {ctaLabel}
          </Link>
        </div>
        <dl className="grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2 lg:col-span-6">
          <div className="border-t border-ink/12 pt-3">
            <dt className="text-xs text-ink/60">Phone</dt>
            <dd className="mt-0.5 font-semibold text-ink">
              <Link href={siteConfig.phoneTel} className="hover:underline">
                {siteConfig.phone}
              </Link>
            </dd>
          </div>
          <div className="border-t border-ink/12 pt-3">
            <dt className="text-xs text-ink/60">Hours</dt>
            <dd className="mt-0.5 font-semibold text-ink">{siteConfig.hours}</dd>
          </div>
          <div className="border-t border-ink/12 pt-3">
            <dt className="text-xs text-ink/60">Email</dt>
            <dd className="mt-0.5 font-semibold text-ink">
              <Link href={siteConfig.emailMailto} className="break-all hover:underline">
                {siteConfig.email}
              </Link>
            </dd>
          </div>
          <div className="border-t border-ink/12 pt-3">
            <dt className="text-xs text-ink/60">{siteConfig.hqLabel}</dt>
            <dd className="mt-0.5 font-semibold text-ink break-words">{siteConfig.addressLines.join(", ")}</dd>
          </div>
        </dl>
      </div>
    </SectionWrapper>
  )
}
