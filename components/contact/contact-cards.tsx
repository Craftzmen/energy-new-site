import { PageSectionHeader } from "@/components/layout/page-section-header"
import { SectionWrapper } from "@/components/layout/section-wrapper"

const haveReady = [
  { label: "Account number", detail: "Printed on your current utility or supplier bill." },
  { label: "Service address", detail: "The address where power or gas is delivered, including unit number." },
  { label: "Meter or ESI number", detail: "Shown on most bills; needed for transfers and some enrollments." },
  { label: "A recent bill", detail: "Lets us confirm your utility, rate class, and usage history." },
]

export function ContactCards() {
  return (
    <SectionWrapper background="white" padding="sm">
      <div className="grid gap-6 lg:grid-cols-12">
        <PageSectionHeader
          className="mb-0 lg:col-span-4"
          title="Before you call or write"
          description="Having these details ready lets us complete most requests on the first contact."
        />
        <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:col-span-8">
          {haveReady.map((item) => (
            <div key={item.label} className="border-t border-ink/12 pt-3">
              <dt className="text-sm font-semibold text-ink">{item.label}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink/70">{item.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </SectionWrapper>
  )
}
