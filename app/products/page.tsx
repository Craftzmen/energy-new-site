import type { Metadata } from "next"
import { Suspense } from "react"
import { RouteHero } from "@/components/layout/route-hero"
import { ProductsSupport } from "@/components/products/products-support"
import { ProductsQuoteSteps } from "@/components/products/products-quote-steps"
import { SupportBlock } from "@/components/layout/support-block"
import { PHOTOS } from "@/lib/remote-images"

export const metadata: Metadata = {
  title: "Products",
  description:
    "Pipe and cable locators, inspection cameras, mapping receivers, and accessories supplied to utility and locating contractors.",
  alternates: { canonical: "/products" },
}

async function ProductCollectionsSection() {
  const { ProductCollections } = await import("@/components/home/product-collections")
  return <ProductCollections />
}

export default function ProductsPage() {
  return (
    <>
      <RouteHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        title="Products"
        description="The Energy products division supplies locators, inspection cameras, mapping receivers, and accessories to contractors and utility crews. Pricing is by written quote."
        image={PHOTOS.engineerBlueprint}
        imageAlt="Engineer marking up a site drawing"
      />
      <Suspense fallback={null}>
        <ProductCollectionsSection />
      </Suspense>
      <ProductsSupport />
      <ProductsQuoteSteps />
      <SupportBlock
        title="Equipment sales and support"
        description="Choose option 4 on the customer service line for equipment sales, or send the job details through the contact form."
        ctaLabel="Request a quote"
        ctaHref="/contact?topic=equipment"
      />
    </>
  )
}
