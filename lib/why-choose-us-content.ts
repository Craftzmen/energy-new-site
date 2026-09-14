export const whyChooseUsPage = {
  title: "Why Choose Us",
  description:
    "We compete on the clarity of the offer: a stated energy charge, a stated term, a stated fee schedule, and a phone line that is answered.",
} as const

export const benefits = [
  {
    title: "Pricing stated before you enroll",
    description:
      "Every plan page lists the energy charge, monthly base charge, term length, and early termination fee. There are no introductory rates that reset after a few months.",
  },
  {
    title: "Phone support during business hours",
    description:
      "Customer service is staffed during business hours. Billing questions, plan changes, and transfers are handled on the call, not by ticket.",
  },
  {
    title: "Account tools that show the bill math",
    description:
      "Usage history, projected bills, and plan documents are available in your online account so you can check a statement against your plan terms.",
  },
  {
    title: "Renewable supply you can document",
    description:
      "Renewable plans match usage with renewable energy certificates that are retired on your behalf, with an annual statement for your records.",
  },
] as const

export const commitments = [
  {
    title: "Fixed means fixed",
    description: "The energy charge on a fixed-rate plan does not change during the term.",
  },
  {
    title: "Plain-language bills",
    description: "Supply charges and utility delivery charges are shown separately, with the plan name and term on every statement.",
  },
  {
    title: "Rescission period",
    description: "You may cancel an enrollment within three business days of receiving your confirmation without any fee.",
  },
  {
    title: "Notice before changes",
    description: "You receive written notice at least 30 days before a fixed term ends, with the options available to you.",
  },
] as const

export const customerProtections = [
  {
    title: "Disputing a charge",
    description:
      "Call customer service within 60 days of the bill date with your account number. We review the meter data, rate applied, and fees, and respond in writing.",
    href: "/refund-policy#disputes",
    linkLabel: "Billing and disputes terms",
  },
  {
    title: "Cancelling or switching away",
    description:
      "Residential 12-month plans have no early termination fee. Other plans list the fee on the plan details page and on your enrollment confirmation.",
    href: "/refund-policy#cancellation",
    linkLabel: "Cancellation terms",
  },
  {
    title: "Your documents",
    description:
      "Plan details, the Refund Policy, and the Privacy Policy are published on this site and included with your enrollment confirmation.",
    href: "/refund-policy",
    linkLabel: "Refund Policy",
  },
] as const
