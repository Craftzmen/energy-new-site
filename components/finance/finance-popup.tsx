"use client"

import { useEffect, useState } from "react"
import { ChevronRight, CreditCard, Phone, X, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { financeContact } from "@/lib/finance-contact"

export function FinancePopup() {
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div
      role="complementary"
      aria-label="Plan assistance"
      className={cn(
        "fixed bottom-4 right-4 z-[550] flex max-h-[calc(100vh-32px)] flex-col overflow-hidden border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.55)] transition-[width,height,border-radius,transform] duration-300 ease-out sm:bottom-6 sm:right-6",
        isMinimized
          ? "size-14 rounded-full p-0 sm:size-16"
          : cn(
              "rounded-sm bg-ink/95 backdrop-blur-3xl",
              isMobile ? "w-[calc(100vw-32px)]" : "w-[min(500px,calc(100vw-32px))]"
            )
      )}
    >
      {isMinimized ? (
        <a
          href={financeContact.phoneHref}
          title={`Call ${financeContact.phoneDisplay}`}
          className="relative flex size-full min-h-14 min-w-14 items-center justify-center rounded-full bg-signal text-ink shadow-lg transition-transform hover:scale-105 active:scale-95 sm:min-h-16 sm:min-w-16"
        >
          <Phone className="size-6 sm:size-7" aria-hidden />
          <span className="absolute right-0 top-0 flex size-4 sm:size-5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex size-4 rounded-full border-2 border-ink bg-green-500 sm:size-5" />
          </span>
          <span className="sr-only">Call {financeContact.phoneDisplay}</span>
        </a>
      ) : (
        <div className="flex h-full flex-col overflow-hidden">
          <div className="relative flex shrink-0 items-center gap-3 bg-gradient-to-br from-signal to-signal-dark p-4 text-ink sm:gap-4 sm:p-6">
            <div className="flex size-11 items-center justify-center rounded-sm border border-ink/10 bg-ink/10 backdrop-blur-md sm:size-14">
              <Phone className="size-5 sm:size-7" aria-hidden />
            </div>
            <div className="flex min-w-0 flex-col pr-8">
              <h3 className="text-base font-black uppercase leading-tight tracking-wider sm:text-lg">
                Need Plan Assistance?
              </h3>
              <div className="mt-0.5 flex items-center gap-1.5 sm:mt-1 sm:gap-2">
                <span className="relative flex size-1.5 sm:size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-700 opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-green-800 sm:size-2" />
                </span>
                <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-ink/70 sm:text-[9px]">
                  Advisors Connected
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsMinimized(true)}
              className="absolute right-4 top-4 flex size-6 items-center justify-center rounded-full bg-ink/10 text-ink/60 transition-all hover:bg-ink/20 hover:text-ink sm:right-5 sm:top-5 sm:size-7"
              aria-label="Minimize assistance panel"
            >
              <X className="size-3.5 sm:size-4" />
            </button>
          </div>

          <div className="space-y-3 overflow-y-auto p-4 sm:space-y-4 sm:p-6">
            <div className="grid gap-2 sm:gap-2.5">
              <div className="group flex items-center justify-between rounded-sm border border-white/5 bg-white/[0.04] p-2.5 transition-all hover:bg-white/[0.07] sm:p-3.5">
                <div className="flex items-center gap-2.5 sm:gap-3.5">
                  <div className="flex size-8 items-center justify-center rounded-sm bg-signal/15 text-signal sm:size-9">
                    <Zap className="size-4 sm:size-[18px]" aria-hidden />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wide text-white/90 sm:text-xs">
                    Fast &amp; Easy Enrollment
                  </span>
                </div>
                <ChevronRight
                  className="size-3.5 text-white/20 transition-all group-hover:translate-x-0.5 group-hover:text-signal sm:size-4"
                  aria-hidden
                />
              </div>

              <div className="group flex items-center justify-between rounded-sm border border-white/5 bg-white/[0.04] p-2.5 transition-all hover:bg-white/[0.07] sm:p-3.5">
                <div className="flex items-center gap-2.5 sm:gap-3.5">
                  <div className="flex size-8 items-center justify-center rounded-sm bg-signal/15 text-signal sm:size-9">
                    <CreditCard className="size-4 sm:size-[18px]" aria-hidden />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wide text-white/90 sm:text-xs">
                    Instant Eligibility Check
                  </span>
                </div>
                <ChevronRight
                  className="size-3.5 text-white/20 transition-all group-hover:translate-x-0.5 group-hover:text-signal sm:size-4"
                  aria-hidden
                />
              </div>
            </div>

            <div className="group relative pt-0.5 sm:pt-1">
              <div className="absolute -inset-1 rounded-sm bg-gradient-to-r from-signal to-signal-dark opacity-20 blur-md transition duration-700 group-hover:opacity-50" />
              <a
                href={financeContact.phoneHref}
                title={`Call ${financeContact.phoneDisplay}`}
                className="relative flex min-h-11 w-full flex-col items-center justify-center rounded-sm bg-signal px-4 py-3 transition-all hover:scale-[1.02] hover:bg-signal-light active:scale-[0.98] sm:px-6 sm:py-4"
              >
                <div className="flex items-center gap-2.5 sm:gap-3.5">
                  <span className="text-xl font-black tracking-tighter text-ink sm:text-2xl">
                    {financeContact.phoneDisplay}
                  </span>
                  <Phone className="size-5 animate-pulse text-ink sm:size-6" aria-hidden />
                </div>
                <p className="mt-1 text-[8px] font-black uppercase tracking-[0.4em] text-ink/50 sm:text-[9px]">
                  Call Right Now
                </p>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
