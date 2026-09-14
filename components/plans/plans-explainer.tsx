import { PHOTOS } from "@/lib/remote-images"
import { MediaSplit } from "@/components/shared/media-split"
import { SectionWrapper } from "@/components/layout/section-wrapper"

const items = [
  {
    term: "Energy charge",
    definition: "The per-kilowatt-hour price we charge for supply. On a fixed-rate plan it does not change for the length of the term.",
  },
  {
    term: "Base charge",
    definition: "A flat monthly amount that covers account servicing, billed whether or not you use energy that month.",
  },
  {
    term: "Delivery charges",
    definition: "Set by your local utility and passed through on our bill at cost. They are the same no matter which supplier you choose.",
  },
  {
    term: "Early termination fee",
    definition: "A one-time fee if you leave a plan before the term ends. It is waived if you move outside the service area.",
  },
]

export function PlansExplainer() {
  return (
    <SectionWrapper background="white" className="section-divider">
      <MediaSplit image={PHOTOS.calculatorBill} imageAlt="Reviewing an energy bill with a calculator" reverse>
        <h2 className="text-section-title text-ink">How to read a plan</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/70 md:text-[15px]">
          Four numbers determine what you pay. Every plan on this page lists all four before you enroll.
        </p>
        <dl className="mt-6 grid gap-5 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.term} className="border-t border-ink/12 pt-3">
              <dt className="text-sm font-semibold text-ink">{item.term}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink/70">{item.definition}</dd>
            </div>
          ))}
        </dl>
      </MediaSplit>
    </SectionWrapper>
  )
}
