import Link from "next/link"
import { audienceLabel, formatCurrency, formatFee, formatRate, planTypeLabel, plans } from "@/lib/rates-content"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function PlanDetails() {
  return (
    <SectionWrapper background="surface" className="section-divider">
      <h2 className="text-section-title text-ink">Plan details</h2>
      <div className="mt-5 divide-y divide-ink/12 border-y border-ink/12">
        {plans.map((plan) => (
          <article key={plan.slug} id={plan.slug} className="grid gap-6 py-8 scroll-mt-24 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs text-ink/55">{audienceLabel[plan.audience]}</p>
              <h3 className="mt-1 text-lg font-semibold text-ink">{plan.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{plan.summary}</p>
              <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-xs text-ink/55">Energy charge</dt>
                  <dd className="font-semibold tabular-nums text-ink">{formatRate(plan.rateCentsPerKwh)}</dd>
                </div>
                <div>
                  <dt className="text-xs text-ink/55">Base charge</dt>
                  <dd className="font-semibold tabular-nums text-ink">{formatCurrency(plan.baseChargeMonthly)}/mo</dd>
                </div>
                <div>
                  <dt className="text-xs text-ink/55">Term</dt>
                  <dd className="font-semibold tabular-nums text-ink">{plan.termMonths} months</dd>
                </div>
                <div>
                  <dt className="text-xs text-ink/55">Early termination fee</dt>
                  <dd className="font-semibold tabular-nums text-ink">{formatFee(plan.earlyTerminationFee)}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-xs text-ink/55">Type</dt>
                  <dd className="font-semibold text-ink">{planTypeLabel[plan.type]}</dd>
                </div>
              </dl>
              <Link
                href={`/contact?plan=${plan.slug}`}
                className="mt-5 inline-flex h-10 items-center rounded-sm bg-signal px-5 text-sm font-semibold text-ink hover:bg-signal-light"
              >
                Enroll in {plan.name}
              </Link>
            </div>
            <div className="lg:col-span-4">
              <h4 className="text-sm font-semibold text-ink">What is included</h4>
              <ul className="mt-2 space-y-2 text-sm text-ink/75">
                {plan.details.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-ink" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-4">
              <h4 className="text-sm font-semibold text-ink">Who it is for</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{plan.bestFor}</p>
              <h4 className="mt-5 text-sm font-semibold text-ink">How billing works</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{plan.billing}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
