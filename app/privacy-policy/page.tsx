import type { Metadata } from "next"
import { PolicyHeader } from "@/components/policies/policy-header"
import { PolicySummaryCallout } from "@/components/policies/policy-summary-callout"
import { PrivacyPolicyContent } from "@/components/policies/privacy-policy-content"
import { siteConfig } from "@/lib/site-nav"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects personal information for customers and website visitors.`,
  alternates: { canonical: "/privacy-policy" },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PolicyHeader
        title="Privacy Policy"
        description="How we collect, use, and protect personal information on this website and when you become a customer."
        lastUpdated="September 14, 2026"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <PolicySummaryCallout
        highlights={[
          "We collect the information needed to enroll, bill, and support energy service accounts and to operate this website.",
          "We do not sell personal information.",
          "Account data is shared with utilities, billing and metering vendors, and regulators only as required to deliver service or comply with law.",
          "You may request access, correction, or deletion of your data using the contact details at the end of this policy.",
        ]}
      />
      <PrivacyPolicyContent />
    </>
  )
}
