import { siteConfig } from "@/lib/site-nav"

export type FaqItem = { question: string; answer: string }

export const faqByPage: Record<string, FaqItem[]> = {
  services: [
    {
      question: "Who do I call if my power goes out?",
      answer:
        "Your local utility. Outages, downed lines, and gas leaks are handled by the utility that delivers to your address. If you call us first, we will transfer you and provide your account details.",
    },
    {
      question: "Does switching supplier change my meter or my delivery charges?",
      answer:
        "No. Your utility continues to own and read the meter and bills delivery charges at its regulated rates. We set only the supply portion of your bill.",
    },
    {
      question: "Can I add natural gas later?",
      answer:
        "Yes. Residential customers can move to the Home Electric + Gas 24 plan at any time. The per-therm rate is quoted at the time you add gas and fixed for the remaining term.",
    },
  ],
  plans: [
    {
      question: "What is included in the rate shown?",
      answer:
        "The rate is the supply energy charge per kilowatt-hour. It excludes the monthly base charge, your utility's delivery charges, taxes, and regulatory fees, which appear as separate lines on your bill.",
    },
    {
      question: "What happens when my fixed term ends?",
      answer:
        "You receive written notice at least 30 days before the term ends with the renewal options available. If you take no action, service continues month to month at the then-current rate until you choose a plan or switch.",
    },
    {
      question: "Is there a fee to cancel?",
      answer:
        "The Residential Fixed 12 plan has no early termination fee. The Home Electric + Gas 24 plan has a $75 fee and the Business 100% Renewable plan has a $150 fee per account if cancelled before the term ends. No fee applies if you move out of the service area.",
    },
    {
      question: "Can I change plans mid-term?",
      answer:
        `Yes. Moving to another ${siteConfig.name} plan is treated as a renewal and does not trigger the early termination fee. The new rate applies from your next meter read.`,
    },
  ],
  "how-it-works": [
    {
      question: "Will my service be interrupted during the switch?",
      answer:
        "No. The change happens in your utility's billing system on your meter read date. Nothing changes at the property.",
    },
    {
      question: "What if I change my mind after enrolling?",
      answer:
        "You may cancel within three business days of receiving your enrollment confirmation without any fee by calling customer service.",
    },
    {
      question: "How long until the switch takes effect?",
      answer:
        "Most switches take effect on the next scheduled meter read after the three-day rescission period, typically within 1 to 7 business days. Some utilities require a full billing cycle.",
    },
  ],
  contact: [
    {
      question: "How quickly is a quote or enrollment request answered?",
      answer:
        "Requests submitted through the form are answered by email within one business day. Phone enrollment is completed on the call.",
    },
    {
      question: "How do I report an outage?",
      answer:
        `Call your local utility's outage line, which is printed on your bill. If you call us at ${siteConfig.phone} and choose option 1, we will connect you.`,
    },
    {
      question: "Can I request a business or multi-site quote?",
      answer:
        "Yes. Select Business enrollment in the form and list the service addresses or attach a recent bill for each meter. A representative will prepare a consolidated quote.",
    },
  ],
}
