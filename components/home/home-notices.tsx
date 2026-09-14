import Image from "next/image"
import Link from "next/link"
import { notices } from "@/lib/notices-content"
import { PHOTOS } from "@/lib/remote-images"
import { siteConfig } from "@/lib/site-nav"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function HomeNotices() {
  return (
    <SectionWrapper background="surface" className="section-divider">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h2 className="text-section-title text-ink">Notices</h2>
          <ul className="mt-4 divide-y divide-ink/12 border-y border-ink/12">
            {notices.map((notice) => (
              <li key={notice.title} className="grid gap-1 py-4 sm:grid-cols-12 sm:gap-6">
                <p className="text-xs text-ink/55 sm:col-span-3 sm:pt-0.5">{notice.date}</p>
                <div className="sm:col-span-9">
                  <h3 className="text-sm font-semibold text-ink">
                    {notice.href ? (
                      <Link href={notice.href} className="hover:underline">
                        {notice.title}
                      </Link>
                    ) : (
                      notice.title
                    )}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">{notice.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-sm bg-muted">
            <Image src={PHOTOS.officeLobby} alt={`${siteConfig.name} customer service office`} fill sizes="(max-width: 1024px) 100vw, 33vw" quality={65} className="object-cover" />
          </div>
          <h2 className="text-section-title text-ink">Customer service</h2>
          <dl className="mt-4 space-y-3 border-t border-ink/12 pt-4 text-sm">
            <div>
              <dt className="text-xs text-ink/55">Phone</dt>
              <dd className="mt-0.5 text-lg font-semibold text-ink">
                <Link href={siteConfig.phoneTel} className="hover:underline">
                  {siteConfig.phone}
                </Link>
              </dd>
              <dd className="text-xs text-ink/60">{siteConfig.hours}</dd>
            </div>
            <div>
              <dt className="text-xs text-ink/55">Email</dt>
              <dd className="mt-0.5 font-medium text-ink">
                <Link href={siteConfig.emailMailto} className="break-all hover:underline">
                  {siteConfig.email}
                </Link>
              </dd>
            </div>
            <div>
              <dt className="text-xs text-ink/55">Outages and gas leaks</dt>
              <dd className="mt-0.5 text-ink/75">
                Call your local utility first. Choose option 1 on our line and we will connect you.
              </dd>
            </div>
            <div>
              <dt className="text-xs text-ink/55">{siteConfig.hqLabel}</dt>
              <dd className="mt-0.5 text-ink/75">{siteConfig.addressLines.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </div>
    </SectionWrapper>
  )
}
