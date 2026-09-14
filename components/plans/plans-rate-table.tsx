import Link from "next/link"
import {
  audienceLabel,
  formatCurrency,
  formatFee,
  formatRate,
  planTypeLabel,
  plans,
  rateDisclosure,
  type PlanAudience,
} from "@/lib/rates-content"
import { cn } from "@/lib/utils"
import { SectionWrapper } from "@/components/layout/section-wrapper"

type PlansRateTableProps = {
  audience?: PlanAudience
  zip?: string
}

const filters: { label: string; value?: PlanAudience }[] = [
  { label: "All plans" },
  { label: "Residential", value: "residential" },
  { label: "Business", value: "business" },
]

export function PlansRateTable({ audience, zip }: PlansRateTableProps) {
  const visible = audience ? plans.filter((plan) => plan.audience === audience) : plans

  return (
    <SectionWrapper background="white">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-section-title text-ink">Rate table</h2>
          {zip ? (
            <p className="mt-1 text-sm text-ink/70">
              Showing plans for ZIP code <span className="font-semibold text-ink">{zip}</span>.{" "}
              <Link href="/plans" className="underline underline-offset-4">
                Change
              </Link>
            </p>
          ) : (
            <p className="mt-1 text-sm text-ink/70">Rates are the supply energy charge per kilowatt-hour.</p>
          )}
        </div>
        <nav aria-label="Filter plans by customer type" className="flex gap-4 text-sm">
          {filters.map((filter) => {
            const params = new URLSearchParams()
            if (filter.value) params.set("audience", filter.value)
            if (zip) params.set("zip", zip)
            const query = params.toString()
            const active = filter.value === audience
            return (
              <Link
                key={filter.label}
                href={query ? `/plans?${query}` : "/plans"}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "border-b-2 pb-1 font-medium",
                  active ? "border-signal text-ink" : "border-transparent text-ink/60 hover:text-ink"
                )}
              >
                {filter.label}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="relative mt-5 overflow-x-auto border-y border-ink/12">
        <table className="w-full min-w-[860px] text-left text-sm">
          <thead>
            <tr className="text-xs text-ink/60">
              <th scope="col" className="py-3 pr-4 font-medium">Plan</th>
              <th scope="col" className="py-3 pr-4 font-medium">Customer</th>
              <th scope="col" className="py-3 pr-4 font-medium">Type</th>
              <th scope="col" className="py-3 pr-4 font-medium">Energy charge</th>
              <th scope="col" className="py-3 pr-4 font-medium">Base charge</th>
              <th scope="col" className="py-3 pr-4 font-medium">Term</th>
              <th scope="col" className="py-3 pr-4 font-medium">Early termination fee</th>
              <th scope="col" className="py-3 pr-4 font-medium">Renewable</th>
              <th scope="col" className="py-3 pr-4 font-medium">Natural gas</th>
              <th scope="col" className="py-3 font-medium">
                <span className="sr-only">Select</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/12">
            {visible.map((plan) => (
              <tr key={plan.slug}>
                <th scope="row" className="py-4 pr-4 font-semibold text-ink">
                  <Link href={`#${plan.slug}`} className="hover:underline">
                    {plan.name}
                  </Link>
                </th>
                <td className="py-4 pr-4 text-ink/80">{audienceLabel[plan.audience]}</td>
                <td className="py-4 pr-4 text-ink/80">{planTypeLabel[plan.type]}</td>
                <td className="py-4 pr-4 font-semibold tabular-nums text-ink">{formatRate(plan.rateCentsPerKwh)}</td>
                <td className="py-4 pr-4 tabular-nums text-ink/80">{formatCurrency(plan.baseChargeMonthly)}/mo</td>
                <td className="py-4 pr-4 tabular-nums text-ink/80">{plan.termMonths} months</td>
                <td className="py-4 pr-4 tabular-nums text-ink/80">{formatFee(plan.earlyTerminationFee)}</td>
                <td className="py-4 pr-4 tabular-nums text-ink/80">{plan.renewablePct}%</td>
                <td className="py-4 pr-4 text-ink/80">{plan.gasIncluded ? "Included" : "Not included"}</td>
                <td className="py-4 text-right">
                  <Link
                    href={`/contact?plan=${plan.slug}`}
                    className="inline-flex h-9 items-center rounded-sm border border-ink px-3.5 text-sm font-semibold text-ink hover:bg-ink hover:text-white"
                  >
                    Select
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
