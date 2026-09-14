import { RouteHero } from "@/components/layout/route-hero"
import { PHOTOS } from "@/lib/remote-images"
import { siteConfig } from "@/lib/site-nav"

export function ContactHeader() {
  return (
    <RouteHero
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      title="Contact Us"
      description={`Enrollment, transfers, billing, and plan questions are handled by phone at ${siteConfig.phone}, ${siteConfig.hours.toLowerCase()}. Written requests can be sent with the form below.`}
      image={PHOTOS.documentsLaptop}
      imageAlt="Customer reviewing account documents with a representative"
    />
  )
}
