export type Notice = {
  date: string
  title: string
  body: string
  href?: string
}

export const notices: Notice[] = [
  {
    date: "September 2, 2026",
    title: "Winter rate notice for variable-rate accounts",
    body:
      "Customers on legacy variable-rate plans will receive a written notice with their October bill describing seasonal pricing. Fixed-rate plans are not affected.",
    href: "/plans",
  },
  {
    date: "August 19, 2026",
    title: "Planned online account maintenance",
    body:
      "Account tools will be unavailable from 1:00 a.m. to 3:00 a.m. Eastern on Sunday, September 21. Phone service is not affected.",
  },
  {
    date: "July 30, 2026",
    title: "Paperless billing enabled for new enrollments",
    body:
      "New accounts are enrolled in paperless billing by default. Paper statements can be requested at any time by phone at no charge.",
    href: "/contact?topic=billing",
  },
]
