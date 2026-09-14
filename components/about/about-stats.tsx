import Image from "next/image"
import { benefits } from "@/lib/why-choose-us-content"
import { PHOTOS } from "@/lib/remote-images"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function AboutStats() {
  return (
    <SectionWrapper background="white" className="section-divider">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h2 className="text-section-title text-ink">How we operate</h2>
          <ul className="mt-5 divide-y divide-ink/12 border-y border-ink/12">
            {benefits.map((benefit) => (
              <li key={benefit.title} className="grid gap-2 py-4 sm:grid-cols-12 sm:gap-6">
                <h3 className="text-sm font-semibold text-ink sm:col-span-4">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-ink/70 sm:col-span-8">{benefit.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <figure className="lg:col-span-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
            <Image
              src={PHOTOS.aboutSnapshot}
              alt="Electrician standing beside a service panel"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              quality={70}
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2 text-xs text-ink/55">
            Meters, lines, and service panels remain the responsibility of your local utility after a supplier switch.
          </figcaption>
        </figure>
      </div>
    </SectionWrapper>
  )
}
