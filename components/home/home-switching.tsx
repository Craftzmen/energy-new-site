import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { homeSwitchNeeds, homeSwitchSteps } from "@/lib/home-content"
import { PHOTOS } from "@/lib/remote-images"
import { MediaSplit } from "@/components/shared/media-split"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function HomeSwitching() {
  return (
    <SectionWrapper background="white" className="section-divider">
      <MediaSplit image={PHOTOS.laptopPointing} imageAlt="Customer reviewing an enrollment form on a laptop" imageClassName="aspect-[4/5] lg:aspect-auto lg:self-stretch">
        <h2 className="text-section-title text-ink">How switching works</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/70 md:text-[15px]">
          Your utility keeps delivering power and responding to outages. We take over the supply charge on your bill.
        </p>
        <ol className="mt-6 grid gap-5 sm:grid-cols-2">
          {homeSwitchSteps.map((step, index) => (
            <li key={step.title} className="border-t border-ink/12 pt-4">
              <p className="text-xs font-semibold tabular-nums text-signal-dark">Step {index + 1}</p>
              <h3 className="mt-1 text-base font-semibold text-ink">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink/70">{step.description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6 rounded-sm bg-surface p-5">
          <h3 className="text-sm font-semibold text-ink">What you will need</h3>
          <ul className="mt-2 grid gap-1.5 text-sm text-ink/75 sm:grid-cols-2">
            {homeSwitchNeeds.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-ink" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Link href="/how-it-works" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ink hover:underline">
          Full switching timeline
          <ArrowRightIcon className="size-3.5" aria-hidden />
        </Link>
      </MediaSplit>
    </SectionWrapper>
  )
}
