export const howItWorksPage = {
  title: "How It Works",
  description:
    "Switching supplier does not change who delivers your power or how you report an outage. It changes who sets the energy charge on your bill.",
} as const

export const processSteps = [
  {
    step: 1,
    title: "Choose a plan",
    description:
      "Compare the energy charge, base charge, term, and early termination fee on the plans page. Residential and business plans are listed separately.",
  },
  {
    step: 2,
    title: "Enroll online or by phone",
    description:
      "Provide the service address, the utility account number from your current bill, and a contact phone and email. Enrollment takes about five minutes.",
  },
  {
    step: 3,
    title: "We notify your utility",
    description:
      "Your local utility schedules the supplier change for your next scheduled meter read. Your service is not interrupted and no one needs to visit the property.",
  },
  {
    step: 4,
    title: "Your first bill arrives",
    description:
      "After the switch date, your statement shows Energy supply charges alongside your utility's delivery charges. Your plan name and term end date are printed on the bill.",
  },
] as const

export const checklist = [
  "Service address",
  "Utility account number from a recent bill",
  "Meter or ESI number if it appears on the bill",
  "Preferred contact phone and email",
] as const

export const switchTimeline = [
  { when: "Same day", what: "Enrollment confirmation sent by email with your plan documents." },
  { when: "3 business days", what: "Rescission period ends. You may cancel before then at no charge." },
  { when: "Next meter read", what: "Supplier change takes effect, typically 1 to 7 business days after the rescission period." },
  { when: "30 to 45 days", what: "First Energy bill issued for the period beginning on the switch date." },
] as const
