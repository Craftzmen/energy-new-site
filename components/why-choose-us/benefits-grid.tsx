import { benefits } from "@/lib/why-choose-us-content"
import { PHOTOS } from "@/lib/remote-images"
import { MediaSplit } from "@/components/shared/media-split"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function BenefitsGrid() {
  return (
    <SectionWrapper background="white">
      <MediaSplit image={PHOTOS.meeting} imageAlt="Account representative reviewing a contract with a customer" imageClassName="aspect-[4/5] lg:aspect-auto lg:self-stretch">
        <h2 className="text-section-title text-ink">What we compete on</h2>
        <ol className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <li key={benefit.title} className="border-t border-ink/12 pt-4">
              <span className="text-xs font-semibold tabular-nums text-signal-dark">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-1 text-base font-semibold text-ink">{benefit.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{benefit.description}</p>
            </li>
          ))}
        </ol>
      </MediaSplit>
    </SectionWrapper>
  )
}
