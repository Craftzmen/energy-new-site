"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { formatRate, plans } from "@/lib/rates-content"
import { siteConfig } from "@/lib/site-nav"

const topics = [
  { value: "start", label: "Start service" },
  { value: "transfer", label: "Transfer service to a new address" },
  { value: "billing", label: "Billing or payment question" },
  { value: "account", label: "Account or plan change" },
  { value: "business", label: "Business enrollment or multi-site quote" },
  { value: "equipment", label: "Field equipment quote" },
  { value: "outage", label: "Outage referral" },
  { value: "accessibility", label: "Accessibility request" },
  { value: "general", label: "General inquiry" },
] as const

type TopicValue = (typeof topics)[number]["value"]

function isTopic(value: string): value is TopicValue {
  return topics.some((t) => t.value === value)
}

function topicFromSearchParams(searchParams: URLSearchParams) {
  const topic = searchParams.get("topic") ?? ""
  if (isTopic(topic)) return topic
  if (searchParams.get("plan")) return "start"
  return ""
}

function planFromSearchParams(searchParams: URLSearchParams) {
  const planParam = searchParams.get("plan") ?? ""
  return plans.some((p) => p.slug === planParam) ? planParam : ""
}

const fieldClass = "h-10 rounded-sm border-ink/25 bg-white px-3 text-sm"

export function ContactMessageForm() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<"idle" | "sent">("idle")
  const [selectedTopic, setSelectedTopic] = useState("")
  const [selectedPlan, setSelectedPlan] = useState("")
  const topic = selectedTopic || topicFromSearchParams(searchParams)
  const plan = selectedPlan || planFromSearchParams(searchParams)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const phone = String(data.get("phone") ?? "").trim()
    const address = String(data.get("address") ?? "").trim()
    const accountNumber = String(data.get("accountNumber") ?? "").trim()
    const topicValue = String(data.get("topic") ?? "").trim()
    const planValue = String(data.get("plan") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()
    if (!name || !email || !message) return

    const topicLabel = topics.find((t) => t.value === topicValue)?.label ?? "Not specified"
    const planLabel = plans.find((p) => p.slug === planValue)?.name ?? "Not specified"
    const subject = encodeURIComponent(`[${siteConfig.name}] ${topicLabel} from ${name}`)
    const lines = [
      message,
      "",
      `Topic: ${topicLabel}`,
      `Plan: ${planLabel}`,
      `Service address: ${address || "Not provided"}`,
      `Account number: ${accountNumber || "Not provided"}`,
    ]
    const contactLine = phone ? `${name}\n${email}\n${phone}` : `${name}\n${email}`
    const body = encodeURIComponent(`${lines.join("\n")}\n\n${contactLine}`)
    window.location.href = `${siteConfig.emailMailto}?subject=${subject}&body=${body}`
    setStatus("sent")
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="topic">Request type</Label>
          <select
            id="topic"
            name="topic"
            value={topic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className={`flex w-full border text-ink ${fieldClass}`}
          >
            <option value="">Select a request type</option>
            {topics.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="plan">Plan (if enrolling)</Label>
          <select
            id="plan"
            name="plan"
            value={plan}
            onChange={(e) => setSelectedPlan(e.target.value)}
            className={`flex w-full border text-ink ${fieldClass}`}
          >
            <option value="">Not sure yet</option>
            {plans.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name} — {formatRate(p.rateCentsPerKwh)}, {p.termMonths}-month term
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" autoComplete="name" required className={fieldClass} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required className={fieldClass} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="accountNumber">Utility account number (optional)</Label>
          <Input id="accountNumber" name="accountNumber" inputMode="numeric" autoComplete="off" className={fieldClass} />
        </div>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="address">Service address</Label>
        <Input id="address" name="address" autoComplete="street-address" placeholder="Street, city, state, ZIP" className={fieldClass} />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="message">Details</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe the request. For enrollments, include your preferred start date and current supplier."
          className="min-h-28 rounded-sm border-ink/25 bg-white px-3 text-sm"
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" className="h-10 rounded-sm bg-signal px-6 text-sm font-semibold text-ink hover:bg-signal-light sm:w-auto">
          Send request
        </Button>
        {status === "sent" ? (
          <p className="text-xs text-ink/65">
            If your mail app did not open, email{" "}
            <a className="font-medium text-ink underline underline-offset-4" href={siteConfig.emailMailto}>
              {siteConfig.email}
            </a>
            .
          </p>
        ) : (
          <p className="text-xs text-ink/65">Submitting opens your email client with this request prefilled.</p>
        )}
      </div>
    </form>
  )
}
