export const aboutPage = {
  title: "About Us",
  description:
    "An independent energy supply company serving residential and business customers since 2005, headquartered in Brooklyn, New York.",
} as const

export const aboutIntro = [
  "Energy was formed in 2005 to offer residential and small commercial customers a supply contract they could read in one sitting: a fixed energy charge, a defined term, and a fee schedule stated in full before enrollment.",
  "We supply electricity, natural gas, and renewable-matched electricity. Delivery, metering, and emergency response remain with the local utility in each service area. Our field equipment division separately supplies locating and inspection equipment to utility contractors.",
] as const

export const aboutFacts = [
  { label: "Founded", value: "2005" },
  { label: "Headquarters", value: "Brooklyn, NY" },
  { label: "Services", value: "Electricity, natural gas, renewable" },
  { label: "Customer service", value: "Phone, Mon–Sat" },
] as const

export const aboutValues = [
  {
    title: "What we do",
    description:
      "We purchase energy and sell it to customers under fixed-rate supply contracts. We do not own generation or distribution assets.",
  },
  {
    title: "How we bill",
    description:
      "One monthly statement shows our supply charges and your utility's delivery charges as separate line items, with the plan name and term end date printed on every bill.",
  },
  {
    title: "How we support customers",
    description:
      "Enrollment, transfers, billing questions, and cancellations are handled by phone during business hours. Outage calls are referred to the local utility with your account details.",
  },
] as const
