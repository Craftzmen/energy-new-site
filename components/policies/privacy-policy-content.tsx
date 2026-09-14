import Link from "next/link"
import { MailIcon, MapPinIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { siteConfig } from "@/lib/site-nav"

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Information we collect" },
  { id: "how-we-use", label: "How we use it" },
  { id: "cookies", label: "Cookies" },
  { id: "sharing", label: "Sharing" },
  { id: "retention", label: "Retention" },
  { id: "rights", label: "Your rights" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact" },
]

const personalInfo = [
  "Name, email, phone, and service address you provide",
  "Account and meter information when you sign up for electricity or gas service",
  "Billing and payment details (processed by secure payment partners)",
  "Messages sent through our contact form, email, or customer portal",
]

const autoCollected = [
  "IP address and approximate location",
  "Browser type, device type, and pages viewed",
  "Cookies used for analytics, preferences, and usage dashboard features",
]

const howWeUse = [
  "Provide electricity, natural gas, and renewable energy services",
  "Process enrollments, plan changes, and billing",
  "Send outage alerts, usage reports, and account notifications",
  "Operate, secure, and improve this website and customer tools",
  "Comply with legal and regulatory obligations",
]

const sharing = [
  "Service providers for hosting, billing, metering, and analytics",
  "Utility grid operators and certified suppliers as required to deliver energy",
  "Legal authorities when required by law or regulation",
]

const sectionHeading = "mb-3 text-section-title text-ink"

export function PrivacyPolicyContent() {
  return (
    <SectionWrapper padding="default" className="section-divider">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-sm font-semibold text-ink">On this page</p>
            <nav aria-label="Privacy policy table of contents">
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
            <section id="introduction" className="scroll-mt-28 border-t border-ink/8 pt-8 first:border-t-0 first:pt-0">
              <h2 className={sectionHeading}>Introduction</h2>
              <p>
                {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;us&rdquo;) operates this website and provides energy services to homes and businesses. This policy describes how we collect, use, and protect personal information when you visit our site, request a quote, or become a customer.
              </p>
            </section>

            <section id="information-we-collect" className="scroll-mt-28 border-t border-ink/8 pt-8">
              <h2 className={sectionHeading}>Information we collect</h2>
              <p className="mb-6">We may collect:</p>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-lg border border-ink/8 bg-card p-5">
                  <h3 className="mb-3 text-sm font-semibold text-ink">You provide</h3>
                  <ul className="list-disc space-y-1.5 pl-5">
                    {personalInfo.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-ink/8 bg-card p-5">
                  <h3 className="mb-3 text-sm font-semibold text-ink">Collected automatically</h3>
                  <ul className="list-disc space-y-1.5 pl-5">
                    {autoCollected.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section id="how-we-use" className="scroll-mt-28 border-t border-ink/8 pt-8">
              <h2 className={sectionHeading}>How we use it</h2>
              <ul className="list-disc space-y-1.5 pl-5">
                {howWeUse.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="cookies" className="scroll-mt-28 border-t border-ink/8 pt-8">
              <h2 className={sectionHeading}>Cookies</h2>
              <p>
                We use cookies to remember preferences, measure site traffic, and support account features such as usage dashboards. You can disable cookies in your browser; some features may not work as intended.
              </p>
            </section>

            <section id="sharing" className="scroll-mt-28 border-t border-ink/8 pt-8">
              <h2 className={sectionHeading}>Sharing</h2>
              <p className="mb-3">We may share data with:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                {sharing.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">We do not sell personal information.</p>
            </section>

            <section id="retention" className="scroll-mt-28 border-t border-ink/8 pt-8">
              <h2 className={sectionHeading}>Retention</h2>
              <p>We keep information only as long as needed to provide energy service, meet billing requirements, or comply with law, then delete or de-identify it.</p>
            </section>

            <section id="rights" className="scroll-mt-28 border-t border-ink/8 pt-8">
              <h2 className={sectionHeading}>Your rights</h2>
              <p>
                Depending on your jurisdiction, you may have rights to access, correct, delete, or export personal data. Contact us using the details below to exercise those rights.
              </p>
            </section>

            <section id="changes" className="scroll-mt-28 border-t border-ink/8 pt-8">
              <h2 className={sectionHeading}>Changes</h2>
              <p>We may update this policy. The last-updated date at the top of the page reflects the latest version.</p>
            </section>

            <section id="contact" className="scroll-mt-28 rounded-lg border border-ink/8 bg-card p-5 md:p-6">
              <h2 className={sectionHeading}>Contact</h2>
              <p className="mb-6">Questions about this policy:</p>
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
