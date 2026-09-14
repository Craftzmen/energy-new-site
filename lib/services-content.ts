export const servicesPage = {
  title: "Services",
  description:
    "Energy is a supply company. We set the price of the energy you use; your local utility continues to deliver it, maintain the lines, and respond to outages.",
} as const

export type Service = {
  slug: string
  photo: "electricianPanel" | "commercialKitchen" | "solarPanels"
  title: string
  bestFor: string
  description: string
  included: string[]
  cta: string
  href: string
}

export const services: Service[] = [
  {
    slug: "electricity",
    photo: "electricianPanel",
    title: "Electricity supply",
    bestFor: "Residential and business accounts served by a utility that allows customer choice of supplier.",
    description:
      "We purchase electricity on your behalf and bill a fixed energy charge per kilowatt-hour for the length of your term. Your utility's delivery charges appear on the same bill as separate line items, without markup.",
    included: [
      "Fixed energy charge for 12, 24, or 36 months",
      "Single monthly bill including utility delivery charges",
      "Online usage history by billing period",
      "Autopay and paperless billing",
    ],
    cta: "See electricity plans",
    href: "/plans",
  },
  {
    slug: "natural-gas",
    photo: "commercialKitchen",
    title: "Natural gas supply",
    bestFor: "Homes with gas heating, water heating, or cooking that want gas and electricity priced together.",
    description:
      "Natural gas supply is offered as a bundle with residential electricity. The per-therm rate is fixed for the same term as your electricity plan and quoted on your enrollment confirmation.",
    included: [
      "Fixed per-therm supply rate for the plan term",
      "Both commodities on one statement",
      "Gas delivery and emergency response remain with your utility",
      "Budget alerts covering electricity and gas",
    ],
    cta: "See the electric and gas bundle",
    href: "/plans#home-bundle-24",
  },
  {
    slug: "renewable",
    photo: "solarPanels",
    title: "Renewable energy supply",
    bestFor: "Businesses and households that want usage matched with renewable energy certificates.",
    description:
      "Renewable plans match 100% of your metered usage with renewable energy certificates (RECs) retired on your behalf. Business accounts receive an annual retirement statement for reporting.",
    included: [
      "100% of usage matched with retired RECs",
      "Annual REC retirement statement",
      "Fixed energy charge for the plan term",
      "Consolidated invoicing for multi-site accounts",
    ],
    cta: "See the renewable plan",
    href: "/plans#business-green-100",
  },
]

export const accountTools = [
  { title: "Online account", description: "View bills, payment history, and plan documents." },
  { title: "Autopay", description: "Pay from a bank account or card on the bill due date." },
  { title: "Paperless billing", description: "Statements by email with a PDF copy kept in your account." },
  { title: "Usage history", description: "Kilowatt-hours and therms by billing period, exportable as CSV." },
  { title: "Budget alerts", description: "Email or text when a bill is projected to exceed an amount you set." },
  { title: "Outage referral", description: "One call connects you to your utility's outage line with your account details." },
] as const

export const audienceComparison = {
  columns: ["Residential", "Business"],
  rows: [
    { label: "Available terms", values: ["12 or 24 months", "36 months"] },
    { label: "Natural gas bundle", values: ["Optional", "On request"] },
    { label: "Renewable matching", values: ["Available on request", "100% included"] },
    { label: "Early termination fee", values: ["None on 12-month; $75 on 24-month", "$150 per account"] },
    { label: "Invoicing", values: ["Single statement", "Consolidated multi-site invoice"] },
    { label: "Support", values: ["Phone, Mon–Sat", "Phone, Mon–Sat, plus named representative"] },
  ],
} as const
