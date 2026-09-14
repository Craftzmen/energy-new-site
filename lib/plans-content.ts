export { plans, rateDisclosure, planTypeLabel, audienceLabel, formatRate, formatFee, formatCurrency } from "@/lib/rates-content"
export type { Plan, PlanAudience, PlanType } from "@/lib/rates-content"

export const plansPage = {
  title: "Plans",
  description:
    "Fixed-rate electricity and natural gas supply for homes and businesses. Every plan lists the energy charge, base charge, term, and any early termination fee before you enroll.",
} as const
