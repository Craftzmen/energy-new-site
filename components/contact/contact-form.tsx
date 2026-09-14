import { Suspense } from "react"
import { ContactMessageForm } from "@/components/forms/contact-message-form"

export function ContactForm() {
  return (
    <div className="bg-white p-5 md:p-6 lg:col-span-7">
      <div className="mb-6 max-w-lg">
        <h2 className="text-section-title text-ink">Send a request</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink/70">
          Use this form for enrollment, transfers, billing questions, or an equipment quote. Requests are answered by
          email within one business day.
        </p>
      </div>
      <Suspense fallback={<div className="h-48 animate-pulse rounded-sm bg-muted" />}>
        <ContactMessageForm />
      </Suspense>
    </div>
  )
}
