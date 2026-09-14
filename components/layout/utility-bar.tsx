import Link from "next/link"
import { audienceNav, policyNav, siteConfig, utilityNav } from "@/lib/site-nav"

export function UtilityBar() {
  return (
    <div className="hidden bg-ink text-white md:block">
      <div className="mx-auto flex min-h-9 max-w-[1200px] flex-wrap items-center justify-between gap-x-5 gap-y-1 px-5 py-1.5 text-xs md:px-8">
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-1">
          {audienceNav.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="text-white/75 transition hover:text-white">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1">
          {policyNav.map((item) => (
            <li key={item.href} className="hidden lg:list-item">
              <Link href={item.href} className="text-white/75 transition hover:text-white">
                {item.label}
              </Link>
            </li>
          ))}
          {utilityNav.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="text-white/75 transition hover:text-white">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href={siteConfig.phoneTel} className="font-semibold whitespace-nowrap text-white">
              {siteConfig.phone}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
