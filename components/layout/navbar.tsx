"use client"

import * as React from "react"
import { startTransition } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon, PhoneIcon, XIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { audienceNav, mainNav, policyNav, siteConfig, utilityNav } from "@/lib/site-nav"
import { BrandLogo } from "@/components/layout/brand-logo"
import { UtilityBar } from "@/components/layout/utility-bar"

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [mobileSlideIn, setMobileSlideIn] = React.useState(false)
  const mobilePanelRef = React.useRef<HTMLDivElement>(null)
  const mobileClosingUserRef = React.useRef(false)
  const scrollTimeoutRef = React.useRef<number | null>(null)
  const lastScrollYRef = React.useRef(0)

  const closeMobile = React.useCallback(() => {
    mobileClosingUserRef.current = true
    setMobileSlideIn((slideIn) => {
      if (!slideIn) {
        queueMicrotask(() => setMobileOpen(false))
      }
      return false
    })
  }, [])

  const openMobile = React.useCallback(() => {
    mobileClosingUserRef.current = false
    setMobileOpen(true)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMobileSlideIn(true))
    })
  }, [])

  const toggleMobile = React.useCallback(() => {
    if (mobileOpen) {
      closeMobile()
    } else {
      openMobile()
    }
  }, [mobileOpen, closeMobile, openMobile])

  React.useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY
      const scrollThreshold = 8
      const wasScrolled = lastScrollYRef.current > scrollThreshold
      const isScrolled = currentScrollY > scrollThreshold

      if (wasScrolled !== isScrolled) {
        lastScrollYRef.current = currentScrollY
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
        scrollTimeoutRef.current = window.setTimeout(() => {
          setScrolled(isScrolled)
        }, 0)
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    }
  }, [])

  React.useEffect(() => {
    startTransition(() => {
      setMobileSlideIn(false)
      setMobileOpen(false)
    })
  }, [pathname])

  React.useEffect(() => {
    if (!mobileOpen) return
    const html = document.documentElement
    const prevHtmlOverflow = html.style.overflow
    const prevBodyOverflow = document.body.style.overflow
    html.style.overflow = "hidden"
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile()
    }
    document.addEventListener("keydown", onKey)
    return () => {
      html.style.overflow = prevHtmlOverflow
      document.body.style.overflow = prevBodyOverflow
      document.removeEventListener("keydown", onKey)
    }
  }, [mobileOpen, closeMobile])

  React.useEffect(() => {
    if (!mobileOpen || mobileSlideIn || !mobileClosingUserRef.current) return
    const id = window.setTimeout(() => {
      mobileClosingUserRef.current = false
      setMobileOpen(false)
    }, 400)
    return () => window.clearTimeout(id)
  }, [mobileOpen, mobileSlideIn])

  React.useEffect(() => {
    if (!mobileOpen) return
    const panel = mobilePanelRef.current
    if (!panel) return

    const onTransitionEnd = (e: TransitionEvent) => {
      if (e.target !== panel || e.propertyName !== "transform") return
      setMobileSlideIn((current) => {
        if (!current) {
          mobileClosingUserRef.current = false
          queueMicrotask(() => setMobileOpen(false))
        }
        return current
      })
    }

    panel.addEventListener("transitionend", onTransitionEnd)
    return () => panel.removeEventListener("transitionend", onTransitionEnd)
  }, [mobileOpen])

  const isActive = (href: string) => {
    const path = href.split("?")[0]
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  return (
    <header className={cn("sticky top-0 z-50 w-full bg-white text-ink", scrolled && "shadow-sm")}>
      <UtilityBar />
      <div className="border-b border-ink/12">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <nav className="flex h-16 items-center justify-between gap-4">
            <BrandLogo size="md" />

            <ul className="hidden items-center gap-1 lg:flex">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative inline-flex h-16 items-center px-3 text-sm font-medium transition",
                      isActive(item.href) ? "text-ink" : "text-ink/70 hover:text-ink"
                    )}
                  >
                    {item.label}
                    {isActive(item.href) ? (
                      <span className="absolute inset-x-3 bottom-0 h-0.5 bg-signal" aria-hidden />
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <Link
                href={siteConfig.phoneTel}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink md:hidden"
              >
                <PhoneIcon className="size-4" />
                <span className="sr-only">Call</span>
              </Link>
              <Link
                href="/contact"
                className="hidden h-10 items-center rounded-sm bg-signal px-4 text-sm font-semibold text-ink transition hover:bg-signal-light sm:inline-flex"
              >
                Start service
              </Link>
              <button
                type="button"
                aria-expanded={mobileOpen && mobileSlideIn}
                aria-controls="mobile-navigation"
                aria-label={mobileOpen && mobileSlideIn ? "Close menu" : "Open menu"}
                onClick={toggleMobile}
                className="inline-flex size-10 items-center justify-center rounded-sm border border-ink/15 text-ink hover:bg-muted lg:hidden"
              >
                {mobileOpen && mobileSlideIn ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
              </button>
            </div>
          </nav>
        </div>
      </div>

      {typeof document !== "undefined" && mobileOpen
        ? createPortal(
            <div className="lg:hidden" role="presentation">
              <button
                type="button"
                aria-label="Close menu"
                className={cn(
                  "fixed inset-0 z-[600] bg-ink/50 transition-opacity duration-300 ease-out",
                  mobileSlideIn ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                )}
                onClick={closeMobile}
              />
              <div
                ref={mobilePanelRef}
                id="mobile-navigation"
                role="dialog"
                aria-modal="true"
                aria-label="Site navigation"
                className={cn(
                  "fixed inset-y-0 right-0 z-[610] flex h-dvh max-h-dvh w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out",
                  mobileSlideIn ? "translate-x-0" : "translate-x-full"
                )}
              >
                <div className="flex h-16 shrink-0 items-center justify-between border-b border-ink/12 px-5">
                  <BrandLogo size="sm" />
                  <button
                    type="button"
                    className="p-2 text-ink hover:bg-muted"
                    onClick={closeMobile}
                    aria-label="Close menu"
                  >
                    <XIcon className="size-6" />
                  </button>
                </div>
                <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 pb-8">
                  <ul className="mt-2 divide-y divide-ink/12 border-b border-ink/12">
                    {mainNav.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={closeMobile}
                          className={cn(
                            "block py-3.5 text-base font-medium",
                            isActive(link.href) ? "text-ink underline decoration-signal decoration-2 underline-offset-4" : "text-ink"
                          )}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink/60">Customers</p>
                  <ul className="mt-2 space-y-1">
                    {[...audienceNav, ...utilityNav].map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} onClick={closeMobile} className="block py-2 text-sm text-ink/80">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink/60">Legal</p>
                  <ul className="mt-2 space-y-1">
                    {policyNav.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} onClick={closeMobile} className="block py-2 text-sm text-ink/80">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto space-y-3 pt-8">
                    <Link
                      href="/contact"
                      onClick={closeMobile}
                      className="flex h-11 w-full items-center justify-center rounded-sm bg-signal text-sm font-semibold text-ink"
                    >
                      Start service
                    </Link>
                    <Link
                      href={siteConfig.phoneTel}
                      onClick={closeMobile}
                      className="flex h-11 w-full items-center justify-center gap-2 rounded-sm border border-ink/15 text-sm font-semibold text-ink"
                    >
                      <PhoneIcon className="size-4" />
                      {siteConfig.phone}
                    </Link>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </header>
  )
}
