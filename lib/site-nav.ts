export const siteConfig = {
  name: "Energy",
  tagline: "Electricity, natural gas, and renewable supply for homes and businesses",
  description:
    "Energy supplies electricity, natural gas, and renewable energy plans to residential and business customers, with fixed-rate terms, plain-language billing, and phone support during business hours.",
  phone: "888 469 4219",
  phoneTel: "tel:+18884694219",
  email: "Energy@thefexus.com",
  emailMailto: "mailto:Energy@thefexus.com",
  addressLines: ["1916 E 51ST Street 2FL", "Brooklyn, NY 11234"],
  hqLabel: "Headquarters",
  hours: "Mon–Sat, 9am–7pm ET",
  founded: "2005",
  legalNotice:
    "Rates, terms, and fees shown on this site are examples for illustration and may vary by delivery area, usage, and enrollment date. Your enrollment confirmation and plan documents control. Fixed-rate plans hold the energy charge for the stated term; delivery charges from your local utility are passed through without markup. See plan details and the Refund Policy before enrolling.",
} as const

export type NavItem = { href: string; label: string; description?: string }

export const mainNav: NavItem[] = [
  { href: "/services", label: "Services" },
  { href: "/why-choose-us", label: "Why Us" },
  { href: "/plans", label: "Plans" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
]

export const audienceNav: NavItem[] = [
  { href: "/plans?audience=residential", label: "Residential" },
  { href: "/plans?audience=business", label: "Business" },
  { href: "/products", label: "Products" },
]

export const utilityNav: NavItem[] = [
  { href: "/contact?topic=outage", label: "Report an outage" },
  { href: "/contact?topic=billing", label: "Pay bill" },
  { href: "/contact?topic=account", label: "My account" },
]

export const policyNav: NavItem[] = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
]

export const footerResidentialLinks: NavItem[] = [
  { href: "/plans?audience=residential", label: "Residential plans" },
  { href: "/services#electricity", label: "Electricity Supply" },
  { href: "/services#natural-gas", label: "Natural Gas" },
  { href: "/services#renewable", label: "Renewable Energy" },
  { href: "/how-it-works", label: "How It Works" },
]

export const footerBusinessLinks: NavItem[] = [
  { href: "/plans?audience=business", label: "Business plans" },
  { href: "/plans#business-green-100", label: "100% renewable supply" },
  { href: "/products", label: "Products" },
  { href: "/contact?topic=business", label: "Business enrollment" },
]

export const footerCompanyLinks: NavItem[] = [
  { href: "/about", label: "About Us" },
  { href: "/why-choose-us", label: "Why Us" },
  { href: "/plans", label: "Plans" },
  { href: "/contact", label: "Contact" },
]

export const footerSupportLinks: NavItem[] = [
  { href: "/contact?topic=outage", label: "Report an outage" },
  { href: "/contact?topic=billing", label: "Billing and payments" },
  { href: "/contact?topic=account", label: "Account changes" },
  { href: "/contact", label: "Help center" },
]

export const footerLegalLinks: NavItem[] = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/contact?topic=accessibility", label: "Accessibility" },
]
