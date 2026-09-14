import Image from "next/image"
import { commitments } from "@/lib/why-choose-us-content"
import { PHOTOS } from "@/lib/remote-images"

export function Commitments() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image src={PHOTOS.windHills} alt="Wind turbines on rolling green hills" fill sizes="100vw" quality={68} className="object-cover" />
      <div className="absolute inset-0 bg-ink/80" aria-hidden />
      <div className="relative mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Our commitments to customers</h2>
          <p className="mt-3 text-base text-white/75">These terms appear in every enrollment confirmation and in the Refund Policy.</p>
        </div>
        <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item) => (
            <div key={item.title} className="border-t-2 border-signal pt-4">
              <dt className="text-base font-semibold">{item.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-white/75">{item.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
