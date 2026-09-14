import { accountTools } from "@/lib/services-content"
import { PageSectionHeader } from "@/components/layout/page-section-header"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function ServicesDashboard() {
  return (
    <SectionWrapper background="surface" className="section-divider">
      <PageSectionHeader
        title="Account tools"
        description="Included with every plan. Available online and by phone."
      />
      <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {accountTools.map((tool) => (
          <li key={tool.title} className="border-t border-ink/12 pt-3">
            <h3 className="text-sm font-semibold text-ink">{tool.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink/70">{tool.description}</p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  )
}
