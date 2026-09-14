import Image from "next/image"
import Link from "next/link"
import { CheckIcon } from "lucide-react"
import { homeRenewable } from "@/lib/home-content"
import { PHOTOS } from "@/lib/remote-images"

export function HomeRenewable() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src={PHOTOS.windTurbines}
        alt="Wind turbines on a ridge at sunset"
        fill
        sizes="100vw"
        quality={70}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/30" aria-hidden />
      <div className="relative mx-auto grid max-w-[1200px] gap-8 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{homeRenewable.title}</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">{homeRenewable.description}</p>
          <ul className="mt-6 space-y-2.5">
            {homeRenewable.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-white/90">
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-signal" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
          <Link
            href={homeRenewable.cta.href}
            className="mt-8 inline-flex h-11 items-center rounded-sm bg-signal px-5 text-sm font-semibold text-ink hover:bg-signal-light"
          >
            {homeRenewable.cta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
