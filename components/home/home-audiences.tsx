import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { homeAudiences } from "@/lib/home-content"
import { PHOTOS } from "@/lib/remote-images"
import { PageSectionHeader } from "@/components/layout/page-section-header"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function HomeAudiences() {
  return (
    <SectionWrapper background="surface" className="section-divider">
      <PageSectionHeader
        title="Who we serve"
        description="Supply plans for homes and businesses, and field equipment for the crews that keep utilities running."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {homeAudiences.map((audience) => (
          <article key={audience.title} className="group flex flex-col overflow-hidden rounded-sm border border-ink/12 bg-white">
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
              <Image
                src={PHOTOS[audience.photo]}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={70}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold text-ink">{audience.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{audience.description}</p>
              <ul className="mt-5 space-y-2 border-t border-ink/12 pt-4">
                {audience.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="inline-flex items-center gap-1 text-sm font-semibold text-ink hover:underline">
                      {link.label}
                      <ArrowRightIcon className="size-3.5" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
