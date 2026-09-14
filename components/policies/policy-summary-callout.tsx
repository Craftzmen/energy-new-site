import { SectionWrapper } from "@/components/layout/section-wrapper"

type PolicySummaryCalloutProps = {
  title?: string
  highlights: string[]
}

export function PolicySummaryCallout({ title = "Summary", highlights }: PolicySummaryCalloutProps) {
  return (
    <SectionWrapper background="surface" padding="sm">
      <div className="border-l-2 border-ink pl-5">
        <p className="text-sm font-semibold text-ink">{title}</p>
        <p className="mt-1 text-xs text-ink/55">This summary is provided for convenience. The full text below controls.</p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {highlights.map((item) => (
            <li key={item} className="text-sm leading-relaxed text-ink/80">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
