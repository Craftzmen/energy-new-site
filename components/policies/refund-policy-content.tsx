import Link from "next/link"
import { MailIcon, MapPinIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { siteConfig } from "@/lib/site-nav"

const sections = [
  { id: "overview", label: "Overview" },
  { id: "billing", label: "Billing & payments" },
  { id: "cancellation", label: "Cancellation" },
  { id: "deposits", label: "Deposits" },
  { id: "disputes", label: "Disputes" },
  { id: "contact", label: "Contact" },
]

const sectionHeading = "mb-3 text-section-title text-ink"

export function RefundPolicyContent() {
  return (
    <SectionWrapper padding="default" className="section-divider">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-sm font-semibold text-ink">On this page</p>
            <nav aria-label="Terms of service table of contents">
              <ol className="space-y-1 border-l border-ink/10">
                {sections.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`#${s.id}`}
                      className="-ml-px block border-l-2 border-transparent py-1.5 pl-5 text-sm text-muted-foreground hover:border-signal hover:text-ink"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </aside>

        <article className="lg:col-span-8">
          <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
            <section id="overview" className="scroll-mt-28 border-t border-ink/8 pt-8 first:border-t-0 first:pt-0">
              <h2 className={sectionHeading}>Overview</h2>
              <p>
                This policy applies to energy service accounts with {siteConfig.name} — including electricity, natural gas, and renewable energy plans. Specific terms on your enrollment confirmation or monthly bill control when they differ from this page.
              </p>
            </section>

            <section id="billing" className="scroll-mt-28 border-t border-ink/8 pt-8">
              <h2 className={sectionHeading}>Billing & payments</h2>
              <p>
                Monthly charges are based on your selected plan, actual usage where applicable, and any applicable taxes or regulatory fees. Fixed-rate plans bill the stated monthly amount; variable plans reflect market rates disclosed at enrollment. Late payments may incur fees as described on your bill.
              </p>
            </section>

            <section id="cancellation" className="scroll-mt-28 border-t border-ink/8 pt-8">
              <h2 className={sectionHeading}>Cancellation</h2>
              <p>
                Residential plans may be cancelled anytime with no lock-in contract, subject to any final billing cycle or switch coordination with your local utility. Business plans may include minimum terms stated at enrollment. To cancel, contact us at least 15 days before your desired stop date so we can coordinate the switch without service interruption.
              </p>
            </section>

            <section id="deposits" className="scroll-mt-28 border-t border-ink/8 pt-8">
              <h2 className={sectionHeading}>Deposits</h2>
              <p>
                Some accounts may require a security deposit based on credit review or service history. Deposits earn interest where required by law and are applied to your final bill or refunded after satisfactory payment history, typically within 30 days of account closure.
              </p>
            </section>

            <section id="disputes" className="scroll-mt-28 border-t border-ink/8 pt-8">
              <h2 className={sectionHeading}>Disputes</h2>
              <p>
                If you disagree with a charge, contact us within 60 days of the bill date with your account number and details. We will investigate usage data, rate application, and fees. Chargebacks may suspend account changes until the dispute is resolved.
              </p>
            </section>

            <section id="contact" className="scroll-mt-28 rounded-lg border border-ink/8 bg-card p-5 md:p-6">
              <h2 className={sectionHeading}>Contact</h2>
              <p className="mb-6">Questions about billing or cancellation:</p>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex items-start gap-4">
                  <MailIcon className="mt-0.5 size-4 shrink-0 text-signal" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <Link href={siteConfig.emailMailto} className="mt-1 block break-all text-sm font-semibold text-ink hover:text-signal">
                      {siteConfig.email}
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPinIcon className="mt-0.5 size-4 shrink-0 text-signal" />
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="mt-1 text-sm font-semibold text-ink">
                      {siteConfig.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </SectionWrapper>
  )
}
