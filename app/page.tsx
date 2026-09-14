import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { QuickActions } from "@/components/home/quick-actions"
import { HomeRatesPreview } from "@/components/home/home-rates-preview"
import { HomeAudiences } from "@/components/home/home-audiences"
import { HomeRenewable } from "@/components/home/home-renewable"
import { HomeSwitching } from "@/components/home/home-switching"
import { HomeNotices } from "@/components/home/home-notices"
import { siteConfig } from "@/lib/site-nav"

export const metadata: Metadata = {
  title: "Electricity and Natural Gas Plans",
  description: siteConfig.description,
  keywords: ["electricity supply", "natural gas supply", "fixed-rate electricity", "energy plans", "Energy"],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: "/",
    type: "website",
  },
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickActions />
      <HomeRatesPreview />
      <HomeAudiences />
      <HomeRenewable />
      <HomeSwitching />
      <HomeNotices />
    </>
  )
}
