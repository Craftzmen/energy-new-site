import Link from "next/link"
import { audienceLabel, formatFee, formatRate, planTypeLabel, plans, rateDisclosure } from "@/lib/rates-content"
import { PageSectionHeader } from "@/components/layout/page-section-header"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function HomeRatesPreview() {
  return (
    <SectionWrapper background="white">
      <PageSectionHeader
        title="Plans and rates"
        description="Current fixed-rate supply plans. Rates are the energy charge per kilowatt-hour and exclude utility delivery charges."
        action={
          <Link href="/plans" className="hover:underline">
            All plans and rates
          </Link>
        }
      />
      <div className="relative overflow-x-auto border-y border-ink/12">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="text-xs text-ink/60">
              <th scope="col" className="py-3 pr-4 font-medium">Plan</th>
              <th scope="col" className="py-3 pr-4 font-medium">Customer</th>
              <th scope="col" className="py-3 pr-4 font-medium">Type</th>
              <th scope="col" className="py-3 pr-4 font-medium">Energy charge</th>
              <th scope="col" className="py-3 pr-4 font-medium">Term</th>
              <th scope="col" className="py-3 pr-4 font-medium">Early termination fee</th>
              <th scope="col" className="py-3 font-medium">
                <span className="sr-only">Details</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/12">
            {plans.map((plan) => (
              <tr key={plan.slug}>
                <th scope="row" className="py-3.5 pr-4 font-semibold text-ink">
                  {plan.name}
                </th>
                <td className="py-3.5 pr-4 text-ink/80">{audienceLabel[plan.audience]}</td>
                <td className="py-3.5 pr-4 text-ink/80">{planTypeLabel[plan.type]}</td>
                <td className="py-3.5 pr-4 font-semibold tabular-nums text-ink">{formatRate(plan.rateCentsPerKwh)}</td>
                <td className="py-3.5 pr-4 tabular-nums text-ink/80">{plan.termMonths} months</td>
                <td className="py-3.5 pr-4 tabular-nums text-ink/80">{formatFee(plan.earlyTerminationFee)}</td>
                <td className="py-3.5 text-right">
                  <Link href={`/plans#${plan.slug}`} className="text-sm font-medium text-ink hover:underline">
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-ink/55">{rateDisclosure}</p>
    </SectionWrapper>
  )
}
