import Image from "next/image"
import Link from "next/link"
import { homeHero } from "@/lib/home-content"
import { PHOTOS } from "@/lib/remote-images"
import { ZipLookupForm } from "@/components/home/zip-lookup-form"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src={PHOTOS.heroPowerLines}
        alt="High-voltage transmission lines crossing farmland at sunset"
        fill
        priority
        sizes="100vw"
        quality={72}
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/35" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/70 to-transparent" aria-hidden />

      <div className="relative mx-auto grid max-w-[1200px] gap-10 px-5 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24 lg:grid-cols-12 lg:items-center lg:pt-24 lg:pb-28">
        <div className="lg:col-span-7">
          <p className="text-sm font-medium text-white/70">Electricity, natural gas, and renewable supply</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-[56px]">
            {homeHero.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">{homeHero.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/plans"
              className="inline-flex h-11 items-center rounded-sm bg-signal px-5 text-sm font-semibold text-ink hover:bg-signal-light"
            >
              View plans
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex h-11 items-center rounded-sm border border-white/40 px-5 text-sm font-semibold text-white hover:bg-white/10"
            >
              How switching works
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-sm bg-white p-6 text-ink shadow-xl md:p-7">
            <h2 className="text-lg font-semibold">Find plans in your area</h2>
            <p className="mt-1 text-sm text-ink/65">Enter the ZIP code of the service address to see available rates.</p>
            <ZipLookupForm className="mt-5 max-w-none" />
            <dl className="mt-6 grid gap-3 border-t border-ink/12 pt-5 sm:grid-cols-2 lg:grid-cols-3">
              {homeHero.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[11px] uppercase tracking-wide text-ink/55">{fact.label}</dt>
                  <dd className="mt-0.5 text-sm font-semibold text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
