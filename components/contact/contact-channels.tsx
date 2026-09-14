import Link from "next/link"
import { ClockIcon, CreditCardIcon, MailIcon, PhoneIcon, TriangleAlertIcon } from "lucide-react"
import { InfoBarCell, InfoBarGrid, infoBarLinkClass, infoBarStaticClass } from "@/components/shared/info-bar-grid"
import { siteConfig } from "@/lib/site-nav"

const channels = [
  {
    icon: PhoneIcon,
    title: "Customer service",
    detail: siteConfig.phone,
    note: "Enrollment, transfers, plan changes",
    href: siteConfig.phoneTel,
    breakAll: false,
  },
  {
    icon: CreditCardIcon,
    title: "Billing and payments",
    detail: `${siteConfig.phone}, option 2`,
    note: "Pay by phone, autopay, disputes",
    href: "/contact?topic=billing",
    breakAll: false,
  },
  {
    icon: TriangleAlertIcon,
    title: "Outages and gas leaks",
    detail: "Call your local utility",
    note: "Option 1 on our line connects you",
    href: "/contact?topic=outage",
    breakAll: false,
  },
  {
    icon: MailIcon,
    title: "Email",
    detail: siteConfig.email,
    note: "Answered within one business day",
    href: siteConfig.emailMailto,
    breakAll: true,
  },
  {
    icon: ClockIcon,
    title: "Hours",
    detail: siteConfig.hours,
    note: "Including holidays",
    href: undefined,
    breakAll: false,
  },
]

function ChannelBody({
  icon: Icon,
  title,
  detail,
  note,
  breakAll,
}: {
  icon: typeof PhoneIcon
  title: string
  detail: string
  note: string
  breakAll: boolean
}) {
  return (
    <>
      <Icon className="mt-0.5 size-4 shrink-0 text-ink" aria-hidden />
      <span className="min-w-0 flex-1">
        <span className="block text-xs text-ink/60">{title}</span>
        <span className={breakAll ? "block break-all text-sm font-semibold text-ink" : "block text-sm font-semibold text-ink"}>
          {detail}
        </span>
        <span className="block text-xs leading-relaxed text-ink/60">{note}</span>
      </span>
    </>
  )
}

export function ContactChannels() {
  return (
    <InfoBarGrid columns={5} aria-label="Ways to reach us">
      {channels.map((channel) => (
        <InfoBarCell key={channel.title}>
          {channel.href ? (
            <Link href={channel.href} className={infoBarLinkClass}>
              <ChannelBody {...channel} />
            </Link>
          ) : (
            <div className={infoBarStaticClass}>
              <ChannelBody {...channel} />
            </div>
          )}
        </InfoBarCell>
      ))}
    </InfoBarGrid>
  )
}
