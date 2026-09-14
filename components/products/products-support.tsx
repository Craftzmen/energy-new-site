import { PHOTOS } from "@/lib/remote-images"
import { MediaSplit } from "@/components/shared/media-split"
import { SectionWrapper } from "@/components/layout/section-wrapper"

const supportItems = [
  {
    title: "Specification before quote",
    description:
      "We confirm frequency range, depth requirements, and accessories against the job before a price is issued, so the kit matches the work.",
  },
  {
    title: "Setup and crew training",
    description:
      "After delivery we walk crews through receiver setup, sonde frequencies, and current measurement, on site or by video call.",
  },
  {
    title: "Replacement parts and repair",
    description:
      "Clamps, batteries, leads, and spare sondes are stocked. Units needing manufacturer service are handled through our warranty desk.",
  },
] as const

export function ProductsSupport() {
  return (
    <SectionWrapper background="surface" className="section-divider">
      <MediaSplit image={PHOTOS.electricianPanel} imageAlt="Utility technician working at a service panel" reverse>
        <h2 className="text-section-title text-ink">Equipment support</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/70 md:text-[15px]">
          Sales are quote-led and supported after delivery by the same team.
        </p>
        <div className="mt-6 space-y-5">
          {supportItems.map((item) => (
            <div key={item.title} className="border-t border-ink/12 pt-4">
              <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{item.description}</p>
            </div>
          ))}
        </div>
      </MediaSplit>
    </SectionWrapper>
  )
}
