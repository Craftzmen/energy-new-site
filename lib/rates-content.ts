/**
 * Plan and rate data. Figures are illustrative placeholders and should be
 * replaced with filed rates before publishing. Everything rate-related lives
 * here so a single edit updates the home preview, the rate table, plan
 * details, and the contact form.
 */

export type PlanType = "fixed" | "variable" | "renewable"
export type PlanAudience = "residential" | "business"

export type Plan = {
  slug: string
  name: string
  type: PlanType
  audience: PlanAudience
  rateCentsPerKwh: number
  baseChargeMonthly: number
  termMonths: number
  earlyTerminationFee: number
  renewablePct: number
  gasIncluded: boolean
  summary: string
  bestFor: string
  details: string[]
  billing: string
}

export const plans: Plan[] = [
  {
    slug: "fixed-12",
    name: "Residential Fixed 12",
    type: "fixed",
    audience: "residential",
    rateCentsPerKwh: 11.9,
    baseChargeMonthly: 4.95,
    termMonths: 12,
    earlyTerminationFee: 0,
    renewablePct: 0,
    gasIncluded: false,
    summary: "Electricity supply at a fixed energy charge for 12 months.",
    bestFor: "Apartments and single-family homes that want a predictable energy charge without a long commitment.",
    details: [
      "Energy charge locked at 11.9¢ per kWh for 12 billing cycles",
      "Monthly base charge of $4.95 regardless of usage",
      "No early termination fee; cancel with 15 days notice",
      "Local utility delivery charges passed through at cost",
      "Online account, paperless billing, and autopay included",
    ],
    billing:
      "You receive one bill from Energy showing the fixed energy charge, the base charge, and your utility's delivery charges as separate line items.",
  },
  {
    slug: "home-bundle-24",
    name: "Home Electric + Gas 24",
    type: "fixed",
    audience: "residential",
    rateCentsPerKwh: 11.4,
    baseChargeMonthly: 6.95,
    termMonths: 24,
    earlyTerminationFee: 75,
    renewablePct: 0,
    gasIncluded: true,
    summary: "Electricity and natural gas supply on one bill with a 24-month fixed energy charge.",
    bestFor: "Homes with gas heat or cooking that want both commodities priced and billed together.",
    details: [
      "Energy charge locked at 11.4¢ per kWh for 24 billing cycles",
      "Natural gas supply at a fixed rate per therm, quoted at enrollment",
      "Monthly base charge of $6.95 covering both services",
      "Early termination fee of $75 if cancelled before month 24",
      "Usage history and budget alerts for electricity and gas",
    ],
    billing:
      "Electricity and gas appear on a single monthly statement. Gas is billed per therm at the fixed rate on your enrollment confirmation.",
  },
  {
    slug: "business-green-100",
    name: "Business 100% Renewable",
    type: "renewable",
    audience: "business",
    rateCentsPerKwh: 12.8,
    baseChargeMonthly: 14.95,
    termMonths: 36,
    earlyTerminationFee: 150,
    renewablePct: 100,
    gasIncluded: false,
    summary: "Fixed-rate business electricity matched 100% with renewable energy certificates.",
    bestFor: "Offices, retail, and light industrial accounts that report on sourcing or need a longer fixed term.",
    details: [
      "Energy charge locked at 12.8¢ per kWh for 36 billing cycles",
      "100% of usage matched with retired renewable energy certificates",
      "Annual REC retirement statement for sustainability reporting",
      "Named account representative for multi-meter accounts",
      "Early termination fee of $150 per account before month 36",
    ],
    billing:
      "Multi-site accounts can be consolidated to one invoice. REC retirement statements are issued each January for the prior calendar year.",
  },
]

export const rateDisclosure =
  "Rates shown are examples and exclude your local utility's delivery charges, taxes, and regulatory fees. Actual pricing depends on delivery area and enrollment date and is confirmed on your enrollment documents."

export const planTypeLabel: Record<PlanType, string> = {
  fixed: "Fixed rate",
  variable: "Variable rate",
  renewable: "Fixed rate, 100% renewable",
}

export const audienceLabel: Record<PlanAudience, string> = {
  residential: "Residential",
  business: "Business",
}

export function formatRate(cents: number) {
  return `${cents.toFixed(1)}¢/kWh`
}

export function formatFee(amount: number) {
  return amount === 0 ? "None" : `$${amount}`
}

export function formatCurrency(amount: number) {
  return `$${amount.toFixed(2)}`
}
