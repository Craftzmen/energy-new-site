import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { services } from "@/lib/services-content"
import { PHOTOS } from "@/lib/remote-images"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function ServicesGrid() {
  return (
    <SectionWrapper background="white">
      <div className="space-y-10">
        {services.map((service, index) => (
          <article
            key={service.slug}
            id={service.slug}
            className="grid gap-6 scroll-mt-24 border-t border-ink/12 pt-8 lg:grid-cols-12 lg:gap-10"
          >
            <div className={index % 2 === 1 ? "lg:order-2 lg:col-span-5" : "lg:col-span-5"}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted">
                <Image
                  src={PHOTOS[service.photo]}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  quality={70}
                  className="object-cover"
                />
              </div>
            </div>
            <div className={index % 2 === 1 ? "lg:order-1 lg:col-span-7" : "lg:col-span-7"}>
              <h2 className="text-2xl font-semibold tracking-tight text-ink">{service.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/80 md:text-[15px]">{service.description}</p>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-ink/50">Best for</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/75">{service.bestFor}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-ink/50">What is included</h3>
                  <ul className="mt-1.5 space-y-1.5 text-sm text-ink/75">
                    {service.included.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-ink" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Link href={service.href} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ink hover:underline">
                {service.cta}
                <ArrowRightIcon className="size-3.5" aria-hidden />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
