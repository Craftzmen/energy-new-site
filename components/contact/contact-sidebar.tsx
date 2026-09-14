import Image from "next/image"
import Link from "next/link"
import { PHOTOS } from "@/lib/remote-images"
import { siteConfig } from "@/lib/site-nav"

export function ContactSidebar() {
  return (
    <aside className="border-t border-ink/12 bg-surface lg:col-span-5 lg:border-l lg:border-t-0">
      <div className="relative aspect-[16/9] bg-muted">
        <Image src={PHOTOS.office} alt={`${siteConfig.name} customer service office`} fill sizes="(max-width: 1024px) 100vw, 40vw" quality={65} className="object-cover" />
      </div>
      <div className="p-5 md:p-6">
      <h2 className="text-base font-semibold text-ink">Customer service</h2>
      <dl className="mt-4 space-y-4 text-sm">
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
          <dt className="text-xs text-ink/55">Phone menu</dt>
          <dd className="mt-1">
            <ol className="space-y-1 text-ink/80">
              <li>
                <span className="font-semibold text-ink">1</span> Outage or gas leak referral to your utility
              </li>
              <li>
                <span className="font-semibold text-ink">2</span> Billing and payments
              </li>
              <li>
                <span className="font-semibold text-ink">3</span> Enrollment, transfers, and plan changes
              </li>
              <li>
                <span className="font-semibold text-ink">4</span> Business and equipment sales
              </li>
            </ol>
          </dd>
        </div>
        <div>
          <dt className="text-xs text-ink/55">Mailing address</dt>
          <dd className="mt-0.5 text-ink/80">
            {siteConfig.name} Inc.
            {siteConfig.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-ink/55">Email</dt>
          <dd className="mt-0.5 text-ink/80">
            <Link href={siteConfig.emailMailto} className="break-all hover:underline">
              {siteConfig.email}
            </Link>
          </dd>
        </div>
      </dl>
      </div>
    </aside>
  )
}
