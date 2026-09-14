import Link from "next/link"
import { customerProtections } from "@/lib/why-choose-us-content"
import { PageSectionHeader } from "@/components/layout/page-section-header"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function CustomerProtections() {
  return (
    <SectionWrapper background="white" className="section-divider">
      <PageSectionHeader
        title="Your rights as a customer"
        description="How to dispute a bill, how to cancel, and where the governing documents are published."
      />
      <div className="divide-y divide-ink/12 border-y border-ink/12">
        {customerProtections.map((item) => (
          <div key={item.title} className="grid gap-3 py-5 lg:grid-cols-12 lg:gap-8">
            <h3 className="text-sm font-semibold text-ink lg:col-span-3">{item.title}</h3>
            <p className="text-sm leading-relaxed text-ink/75 lg:col-span-6">{item.description}</p>
            <div className="lg:col-span-3 lg:text-right">
              <Link href={item.href} className="text-sm font-medium text-ink underline-offset-4 hover:underline">
                {item.linkLabel}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
