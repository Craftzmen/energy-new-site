"use client"

import { useState } from "react"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import type { FaqItem } from "@/lib/faq-content"
import { SectionWrapper } from "@/components/layout/section-wrapper"

type FaqAccordionProps = {
  items: FaqItem[]
  title?: string
  description?: string
  background?: "default" | "muted" | "surface" | "white"
}

export function FaqAccordion({ items, title = "Frequently asked questions", description, background = "white" }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <SectionWrapper background={background} className="section-divider">
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="text-section-title text-ink">{title}</h2>
          {description ? <p className="mt-2 text-sm leading-relaxed text-ink/70">{description}</p> : null}
        </div>
        <div className="divide-y divide-ink/12 border-y border-ink/12 lg:col-span-8">
          {items.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="text-sm font-semibold text-ink md:text-[15px]">{item.question}</span>
                  <ChevronDownIcon
                    className={cn("size-4 shrink-0 text-ink/50 transition-transform", isOpen && "rotate-180")}
                    aria-hidden
                  />
                </button>
                {isOpen ? (
                  <p id={panelId} className="pb-4 text-sm leading-relaxed text-ink/75">
                    {item.answer}
                  </p>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
