import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"

import "./globals.css"
import { FinancePopup } from "@/components/finance/finance-popup"
import { ImportantNotice } from "@/components/layout/important-notice"
import { Navbar } from "@/components/layout/navbar"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-nav"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://energy.com"),
  title: {
    default: `${siteConfig.name} | Electricity, Natural Gas, and Renewable Supply`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.tagline,
  },
  keywords: [
    "Energy",
    "electricity supply",
    "natural gas",
    "renewable energy",
    "energy plans",
  ],
}

async function DeferredFooter() {
  const { SiteFooter } = await import("@/components/layout/site-footer")
  return <SiteFooter />
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn("antialiased", inter.variable, "font-sans")}>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <ImportantNotice />
        <Suspense fallback={<footer className="min-h-40 bg-ink" aria-hidden />}>
          <DeferredFooter />
        </Suspense>
        <FinancePopup />
      </body>
    </html>
  )
}
