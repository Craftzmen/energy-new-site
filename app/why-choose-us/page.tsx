import type { Metadata } from "next"
import { RouteHero } from "@/components/layout/route-hero"
import { BenefitsGrid } from "@/components/why-choose-us/benefits-grid"
import { Commitments } from "@/components/why-choose-us/commitments"
import { CustomerProtections } from "@/components/why-choose-us/customer-protections"
import { SupportBlock } from "@/components/layout/support-block"
import { PHOTOS } from "@/lib/remote-images"
import { whyChooseUsPage } from "@/lib/why-choose-us-content"

export const metadata: Metadata = {
  title: "Why Us",
  description: whyChooseUsPage.description,
  alternates: { canonical: "/why-choose-us" },
}

export default function WhyChooseUsPage() {
  return (
    <>
      <RouteHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Why Us" }]}
        title={whyChooseUsPage.title}
        description={whyChooseUsPage.description}
        image={PHOTOS.solarAerial}
        imageAlt="Aerial view of a solar installation"
      />
      <BenefitsGrid />
      <Commitments />
      <CustomerProtections />
      <SupportBlock title="Compare our terms against your current bill" ctaLabel="See plans" ctaHref="/plans" />
    </>
  )
}
