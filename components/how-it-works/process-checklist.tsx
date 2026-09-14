import { checklist } from "@/lib/how-it-works-content"
import { PageSectionHeader } from "@/components/layout/page-section-header"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function ProcessChecklist() {
  return (
    <SectionWrapper background="surface" className="section-divider">
      <div className="grid gap-6 lg:grid-cols-12">
        <PageSectionHeader
          className="mb-0 lg:col-span-5"
          title="What to have ready"
          description="All of this appears on a recent bill from your current supplier or utility."
        />
        <ul className="grid gap-2 sm:grid-cols-2 lg:col-span-7">
          {checklist.map((item) => (
            <li key={item} className="flex items-start gap-3 border-t border-ink/12 pt-3 text-sm text-ink/80">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ink" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
