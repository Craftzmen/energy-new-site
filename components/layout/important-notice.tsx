import Link from "next/link"
import { PhoneIcon } from "lucide-react"
import { siteConfig } from "@/lib/site-nav"

export function ImportantNotice() {
  return (
    <section className="border-t border-ink/12 bg-surface" aria-labelledby="important-notice-heading">
      <div className="mx-auto max-w-[760px] px-5 py-12 text-center md:px-8 md:py-14">
        <h2 id="important-notice-heading" className="text-xl font-bold tracking-tight text-ink md:text-2xl">
          Important Notice
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-ink/75 md:text-[15px]">
          <span className="font-semibold text-ink">{siteConfig.name}</span> is an independent informational service
          provider. We do not sell or provide energy services. We provide guidance, help, and information only. All
          services are handled by respective providers.
        </p>

        <div className="mt-10 border-t border-ink/12 pt-10">
          <h3 className="text-lg font-bold tracking-tight text-ink md:text-xl">Need Help With Energy Information?</h3>
          <p className="mt-2 text-sm text-ink/70">Call now and speak with our team for clear and helpful guidance.</p>
          <Link
            href={siteConfig.phoneTel}
            className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-signal px-8 py-3.5 text-base font-semibold text-ink shadow-sm transition hover:bg-signal-light"
          >
            <PhoneIcon className="size-5 shrink-0" aria-hidden />
            Call Now: {siteConfig.phone}
          </Link>
        </div>
      </div>
    </section>
  )
}
