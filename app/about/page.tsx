import type { Metadata } from "next"
import { AboutHeader } from "@/components/about/about-header"
import { AboutIntro } from "@/components/about/about-intro"
import { AboutStats } from "@/components/about/about-stats"
import { AboutTabs } from "@/components/about/about-tabs"
import { SupportBlock } from "@/components/layout/support-block"
import { aboutPage } from "@/lib/about-content"

export const metadata: Metadata = {
  title: "About Us",
  description: aboutPage.description,
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <>
      <AboutHeader />
      <AboutIntro />
      <AboutTabs />
      <AboutStats />
      <SupportBlock title="Contact the company" description="Media, partnership, and regulatory inquiries can be directed to the same customer service line or by email." ctaLabel="Contact us" />
    </>
  )
}
