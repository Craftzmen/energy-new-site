import Link from "next/link"
import { ArrowRightIcon, ArrowRightLeftIcon, CreditCardIcon, PlugZapIcon, TriangleAlertIcon } from "lucide-react"
import { quickActions, type QuickAction } from "@/lib/home-content"
import { InfoBarCell, InfoBarGrid, infoBarLinkClass } from "@/components/shared/info-bar-grid"

const icons: Record<QuickAction["icon"], typeof PlugZapIcon> = {
  start: PlugZapIcon,
  transfer: ArrowRightLeftIcon,
  outage: TriangleAlertIcon,
  bill: CreditCardIcon,
}

export function QuickActions() {
  return (
    <InfoBarGrid columns={4} aria-label="Common tasks">
      {quickActions.map((action) => {
        const Icon = icons[action.icon]
        return (
          <InfoBarCell key={action.label}>
            <Link href={action.href} className={`${infoBarLinkClass} group`}>
              <Icon className="mt-0.5 size-5 shrink-0 text-ink" aria-hidden />
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-x-1 gap-y-0.5 text-sm font-semibold text-ink group-hover:underline">
                  {action.label}
                  <ArrowRightIcon className="size-3.5 shrink-0 text-ink/50" aria-hidden />
                </span>
                <span className="mt-0.5 block text-xs leading-relaxed text-ink/65">{action.description}</span>
              </span>
            </Link>
          </InfoBarCell>
        )
      })}
    </InfoBarGrid>
  )
}
