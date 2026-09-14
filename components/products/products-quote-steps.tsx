import Link from "next/link"
import { PageSectionHeader } from "@/components/layout/page-section-header"
import { SectionWrapper } from "@/components/layout/section-wrapper"

const steps = [
  {
    title: "Describe the work",
    description: "Pipe or cable, locate or inspection, typical depths, and the frequencies your crew already runs.",
  },
  {
    title: "We confirm the kit",
    description: "Receiver, transmitter, sonde, or camera, with clamps, bags, and spares listed as separate lines.",
  },
  {
    title: "Written quote",
    description: "Itemized pricing, lead time, and warranty terms by email. Orders ship after written approval.",
  },
] as const

export function ProductsQuoteSteps() {
  return (
    <SectionWrapper background="white" className="section-divider">
      <PageSectionHeader
        title="How equipment is quoted"
        action={
          <Link href="/contact?topic=equipment" className="hover:underline">
            Request an equipment quote
          </Link>
        }
      />
      <ol className="divide-y divide-ink/12 border-y border-ink/12">
        {steps.map((step, index) => (
          <li key={step.title} className="grid gap-2 py-5 lg:grid-cols-12 lg:gap-8">
            <p className="text-sm font-semibold tabular-nums text-ink/50 lg:col-span-2">Step {index + 1}</p>
            <h3 className="text-base font-semibold text-ink lg:col-span-4">{step.title}</h3>
            <p className="text-sm leading-relaxed text-ink/75 lg:col-span-6">{step.description}</p>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  )
}
