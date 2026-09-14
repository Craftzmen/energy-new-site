import type { Metadata } from "next"
import { ContactCards } from "@/components/contact/contact-cards"
import { ContactChannels } from "@/components/contact/contact-channels"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactHeader } from "@/components/contact/contact-header"
import { ContactSidebar } from "@/components/contact/contact-sidebar"
import { FaqAccordion } from "@/components/shared/faq-accordion"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { faqByPage } from "@/lib/faq-content"
import { siteConfig } from "@/lib/site-nav"

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${siteConfig.name} for enrollment, transfers, billing, and plan questions. Call ${siteConfig.phone} or send a written request.`,
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <ContactChannels />
      <ContactCards />
      <SectionWrapper background="white" className="section-divider">
        <div className="grid overflow-hidden rounded-sm border border-ink/12 lg:grid-cols-12">
          <ContactForm />
          <ContactSidebar />
        </div>
      </SectionWrapper>
      <FaqAccordion items={faqByPage.contact} background="surface" title="Questions about contacting us" />
    </>
  )
}
