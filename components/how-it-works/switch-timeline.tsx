import { switchTimeline } from "@/lib/how-it-works-content"
import { PageSectionHeader } from "@/components/layout/page-section-header"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function SwitchTimeline() {
  return (
    <SectionWrapper background="white" className="section-divider">
      <PageSectionHeader
        title="What to expect, and when"
        description="Typical timing after you enroll. Exact dates depend on your utility's meter read schedule."
      />
      <dl className="divide-y divide-ink/12 border-y border-ink/12">
        {switchTimeline.map((item) => (
          <div key={item.when} className="grid gap-1 py-4 sm:grid-cols-12 sm:gap-6">
            <dt className="text-sm font-semibold tabular-nums text-ink sm:col-span-3">{item.when}</dt>
            <dd className="text-sm leading-relaxed text-ink/75 sm:col-span-9">{item.what}</dd>
          </div>
        ))}
      </dl>
    </SectionWrapper>
  )
}
