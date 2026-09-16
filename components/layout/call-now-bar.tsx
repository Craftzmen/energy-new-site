import Link from "next/link"
import { PhoneIcon } from "lucide-react"
import { siteConfig } from "@/lib/site-nav"

export function CallNowBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[500] border-t border-ink/15 bg-white/95 px-4 py-3 shadow-[0_-12px_40px_rgba(0,0,0,0.12)] backdrop-blur-md pb-[max(0.75rem,env(safe-area-inset-bottom))]"
      role="region"
      aria-label="Call now"
    >
      <Link
        href={siteConfig.phoneTel}
        title={`Call ${siteConfig.phone}`}
        className="flex min-h-14 w-full items-center justify-center gap-3 rounded-sm bg-signal px-6 text-lg font-black uppercase tracking-wide text-ink shadow-md transition active:scale-[0.98] hover:bg-signal-light sm:text-xl"
      >
        <PhoneIcon className="size-6 shrink-0" aria-hidden />
        <span>Call Now</span>
        <span className="hidden font-bold normal-case tracking-normal sm:inline">· {siteConfig.phone}</span>
      </Link>
    </div>
  )
}
