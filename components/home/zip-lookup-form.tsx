"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

type ZipLookupFormProps = {
  className?: string
  audience?: "residential" | "business"
}

export function ZipLookupForm({ className, audience }: ZipLookupFormProps) {
  const router = useRouter()
  const [zip, setZip] = useState("")
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const trimmed = zip.trim()
    if (!/^\d{5}$/.test(trimmed)) {
      setError("Enter a 5-digit ZIP code.")
      return
    }
    setError(null)
    const params = new URLSearchParams({ zip: trimmed })
    if (audience) params.set("audience", audience)
    router.push(`/plans?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={cn("max-w-md", className)}>
      <label htmlFor="zip-lookup" className="block text-sm font-medium text-ink">
        ZIP code of the service address
      </label>
      <div className="mt-1.5 flex gap-2">
        <input
          id="zip-lookup"
          name="zip"
          inputMode="numeric"
          autoComplete="postal-code"
          pattern="\d{5}"
          maxLength={5}
          placeholder="11234"
          value={zip}
          onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "zip-lookup-error" : undefined}
          className="h-11 w-full rounded-sm border border-ink/25 bg-white px-3 text-base text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none focus:ring-2 focus:ring-signal/40"
        />
        <button
          type="submit"
          className="h-11 shrink-0 rounded-sm bg-signal px-5 text-sm font-semibold text-ink transition hover:bg-signal-light"
        >
          See plans
        </button>
      </div>
      {error ? (
        <p id="zip-lookup-error" className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </form>
  )
}
