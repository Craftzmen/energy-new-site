import { aboutValues } from "@/lib/about-content"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function AboutTabs() {
  return (
    <SectionWrapper background="surface" className="section-divider">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {aboutValues.map((value) => (
          <div key={value.title} className="min-w-0">
            <h2 className="text-base font-semibold text-ink md:text-lg">{value.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{value.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
