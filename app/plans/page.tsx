import type { Metadata } from "next"
import { RouteHero } from "@/components/layout/route-hero"
import { PlansRateTable } from "@/components/plans/plans-rate-table"
import { PlansExplainer } from "@/components/plans/plans-explainer"
import { PlanDetails } from "@/components/plans/plan-details"
import { FaqAccordion } from "@/components/shared/faq-accordion"
import { SupportBlock } from "@/components/layout/support-block"
import { faqByPage } from "@/lib/faq-content"
import { plansPage } from "@/lib/plans-content"
import { PHOTOS } from "@/lib/remote-images"
import type { PlanAudience } from "@/lib/rates-content"

export const metadata: Metadata = {
  title: "Plans",
  description: plansPage.description,
  alternates: { canonical: "/plans" },
}

type PlansPageProps = {
  searchParams: Promise<{ zip?: string | string[]; audience?: string | string[] }>
}

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value
}

export default async function PlansPage({ searchParams }: PlansPageProps) {
  const params = await searchParams
  const zipRaw = first(params.zip)
  const zip = zipRaw && /^\d{5}$/.test(zipRaw) ? zipRaw : undefined
  const audienceRaw = first(params.audience)
  const audience: PlanAudience | undefined =
    audienceRaw === "residential" || audienceRaw === "business" ? audienceRaw : undefined

  return (
    <>
      <RouteHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Plans" }]}
        title={plansPage.title}
        description={plansPage.description}
        image={PHOTOS.livingRoom}
        imageAlt="Bright living room in a family home"
      />
      <PlansRateTable audience={audience} zip={zip} />
      <PlansExplainer />
      <PlanDetails />
      <FaqAccordion items={faqByPage.plans} background="white" title="Questions about rates and terms" />
      <SupportBlock title="Ready to enroll, or not sure which plan fits?" ctaLabel="Enroll by form" />
    </>
  )
}
