import Link from "next/link"
import {
  footerBusinessLinks,
  footerCompanyLinks,
  footerLegalLinks,
  footerResidentialLinks,
  footerSupportLinks,
  siteConfig,
} from "@/lib/site-nav"
import { productCollections } from "@/lib/product-collections"
import { BrandLogo } from "@/components/layout/brand-logo"

type Column = { heading: string; links: { href: string; label: string }[] }

const columns: Column[] = [
  { heading: "Residential", links: footerResidentialLinks },
  { heading: "Business", links: footerBusinessLinks },
  { heading: "Products", links: productCollections.map((item) => ({ href: "/products", label: item.title })) },
  { heading: "Company", links: footerCompanyLinks },
  { heading: "Support", links: footerSupportLinks },
  { heading: "Legal", links: footerLegalLinks },
]

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {columns.map((column) => (
            <div key={column.heading}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/60">{column.heading}</p>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={`${column.heading}-${link.label}`}>
                    <Link href={link.href} className="text-sm text-white/85 transition hover:text-white hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 border-t border-white/15 pt-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <BrandLogo variant="dark" size="sm" />
            <dl className="mt-4 space-y-2 text-sm text-white/80">
              <div>
                <dt className="sr-only">Customer service</dt>
                <dd>
                  <Link href={siteConfig.phoneTel} className="font-semibold text-white hover:underline">
                    {siteConfig.phone}
                  </Link>{" "}
                  <span className="text-white/60">· {siteConfig.hours}</span>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <Link href={siteConfig.emailMailto} className="hover:underline">
                    {siteConfig.email}
                  </Link>
                </dd>
              </div>
              <div>
                <dt className="text-white/60">{siteConfig.hqLabel}</dt>
                <dd>{siteConfig.addressLines.join(", ")}</dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-8">
            <p className="text-xs leading-relaxed text-white/60">{siteConfig.legalNotice}</p>
            <p className="mt-4 text-xs text-white/50">
              &copy; {new Date().getFullYear()} {siteConfig.name} Inc. All rights reserved. Founded {siteConfig.founded}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
