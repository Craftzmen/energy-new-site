import type { Metadata } from "next"
import { PolicyHeader } from "@/components/policies/policy-header"
import { PolicySummaryCallout } from "@/components/policies/policy-summary-callout"
import { RefundPolicyContent } from "@/components/policies/refund-policy-content"
import { siteConfig } from "@/lib/site-nav"

export const metadata: Metadata = {
  title: "Refund Policy",
  description: `Billing, cancellation, and dispute terms for ${siteConfig.name} energy service accounts.`,
  alternates: { canonical: "/refund-policy" },
}

export default function RefundPolicyPage() {
  return (
    <>
      <PolicyHeader
        title="Refund Policy"
        description="Billing, cancellation, deposit, and refund terms for energy service accounts."
        lastUpdated="September 14, 2026"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Refund Policy" }]}
      />
      <PolicySummaryCallout
        highlights={[
          "Fixed-rate plans hold the energy charge for the stated term; the early termination fee, if any, is listed on the plan details page and your enrollment confirmation.",
          "Monthly statements show supply charges and your utility's delivery charges separately, plus applicable taxes and regulatory fees.",
          "Security deposits, where required, are applied to the final bill or refunded within 30 days of account closure.",
          "Billing disputes must be raised within 60 days of the bill date and are answered in writing.",
        ]}
      />
      <RefundPolicyContent />
    </>
  )
}
