import { audienceComparison } from "@/lib/services-content"
import { PageSectionHeader } from "@/components/layout/page-section-header"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function ServicesAudience() {
  return (
    <SectionWrapper background="white" className="section-divider">
      <PageSectionHeader
        title="Residential and business service"
        description="How the two customer classes differ in terms, fees, and support."
      />
      <div className="relative overflow-x-auto border-y border-ink/12">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="text-xs text-ink/60">
              <th scope="col" className="w-1/3 py-3 pr-4 font-medium">
                <span className="sr-only">Feature</span>
              </th>
              {audienceComparison.columns.map((column) => (
                <th key={column} scope="col" className="py-3 pr-4 font-semibold text-ink">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/12">
            {audienceComparison.rows.map((row) => (
              <tr key={row.label}>
                <th scope="row" className="py-3.5 pr-4 font-medium text-ink/80">
                  {row.label}
                </th>
                {row.values.map((value, index) => (
                  <td key={`${row.label}-${index}`} className="py-3.5 pr-4 text-ink">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionWrapper>
  )
}
