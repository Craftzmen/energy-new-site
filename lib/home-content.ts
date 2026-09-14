export const homeHero = {
  title: "Electricity and natural gas plans for your home or business",
  lead:
    "Fixed-rate supply plans with the energy charge, term, and fees stated up front. Enter your ZIP code to see the plans available in your delivery area.",
  facts: [
    { label: "Residential fixed rates", value: "12- and 24-month terms" },
    { label: "Early termination", value: "None on the 12-month plan" },
    { label: "Customer service", value: "By phone, Mon–Sat" },
  ],
} as const

export type QuickAction = {
  label: string
  description: string
  href: string
  icon: "start" | "transfer" | "outage" | "bill"
}

export const quickActions: QuickAction[] = [
  {
    label: "Start service",
    description: "Enroll a new address with an electricity or gas plan.",
    href: "/contact?topic=start",
    icon: "start",
  },
  {
    label: "Transfer service",
    description: "Move an existing plan to a new service address.",
    href: "/contact?topic=transfer",
    icon: "transfer",
  },
  {
    label: "Report an outage",
    description: "Outages are handled by your local utility. We will connect you.",
    href: "/contact?topic=outage",
    icon: "outage",
  },
  {
    label: "Pay a bill",
    description: "Pay by phone, set up autopay, or ask about a charge.",
    href: "/contact?topic=billing",
    icon: "bill",
  },
]

export const homeAudiences = [
  {
    title: "Residential",
    photo: "houseExterior",
    description:
      "Electricity supply for apartments and houses, with an optional natural gas bundle. Fixed energy charges for 12 or 24 months.",
    links: [
      { label: "Residential plans", href: "/plans?audience=residential" },
      { label: "How switching works", href: "/how-it-works" },
    ],
  },
  {
    title: "Business",
    photo: "retailCounter",
    description:
      "Fixed-rate supply for single or multi-meter commercial accounts, with a 100% renewable option and consolidated invoicing.",
    links: [
      { label: "Business plans", href: "/plans?audience=business" },
      { label: "Request a business quote", href: "/contact?topic=business" },
    ],
  },
  {
    title: "Contractors and utility crews",
    photo: "locators",
    description:
      "Our products division supplies pipe and cable locators, inspection cameras, and accessories to locating and inspection crews.",
    links: [
      { label: "Browse products", href: "/products" },
      { label: "Request an equipment quote", href: "/contact?topic=equipment" },
    ],
  },
] as const

export const homeRenewable = {
  title: "Renewable supply, documented",
  description:
    "Renewable plans match 100% of metered usage with renewable energy certificates retired on your behalf. Business accounts receive an annual retirement statement for sustainability reporting.",
  points: ["100% of usage matched with retired RECs", "Annual retirement statement each January", "Same fixed energy charge for the full term"],
  cta: { label: "See the renewable plan", href: "/plans#business-green-100" },
} as const

export const homeSwitchSteps = [
  { title: "Choose a plan", description: "Compare the energy charge, term, and fees on the plans page." },
  { title: "Enroll online or by phone", description: "We need the service address and the account number from your current bill." },
  { title: "We notify your utility", description: "Your local utility schedules the switch for your next meter read." },
  { title: "Service continues", description: "Nothing changes at the meter. Your first Energy bill arrives after the switch date." },
] as const

export const homeSwitchNeeds = [
  "Service address",
  "Utility account number (on your current bill)",
  "Meter or ESI number if shown on your bill",
  "Contact phone and email",
] as const
