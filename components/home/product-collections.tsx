"use client"

import { useCallback, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { productCollections } from "@/lib/product-collections"

export function ProductCollections() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollByCard = useCallback((direction: -1 | 1) => {
    const scroller = scrollerRef.current
    if (!scroller) return
    const card = scroller.querySelector("article")
    const delta = card ? card.getBoundingClientRect().width + 24 : 340
    scroller.scrollBy({ left: direction * delta, behavior: "smooth" })
  }, [])

  return (
    <SectionWrapper id="products" containerClassName="overflow-hidden">
      <div className="mb-8 flex items-end justify-between gap-4 md:mb-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl lg:text-5xl">
            Equipment we supply
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Locators, cameras, mapping receivers, and the accessories that keep a Vivax-Metrotech kit in service. Request a quote on any line.
          </p>
        </div>
        <div className="hidden shrink-0 gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            className="inline-flex size-10 items-center justify-center border border-ink/15 text-ink hover:border-ink hover:bg-muted"
            aria-label="Previous equipment"
          >
            <ArrowLeftIcon className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            className="inline-flex size-10 items-center justify-center border border-ink/15 text-ink hover:border-ink hover:bg-muted"
            aria-label="Next equipment"
          >
            <ArrowRightIcon className="size-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="-mx-1 flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-4 [scrollbar-width:thin]"
      >
        {productCollections.map((item) => (
          <article
            key={item.slug}
            className="flex w-[min(85vw,20rem)] shrink-0 snap-start flex-col border border-ink/10 bg-background"
          >
            <div className="relative aspect-16/10 overflow-hidden bg-muted">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="320px"
                quality={70}
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-5 md:p-6">
              <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="mt-5 inline-flex items-center text-sm font-semibold text-ink hover:text-signal"
              >
                Request this equipment
                <ArrowRightIcon className="ml-1.5 size-4" aria-hidden />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
