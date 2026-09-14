import Image from "next/image"
import { processSteps } from "@/lib/how-it-works-content"
import { PHOTOS } from "@/lib/remote-images"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function ProcessSteps() {
  return (
    <SectionWrapper background="white">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted lg:sticky lg:top-28">
            <Image
              src={PHOTOS.electricianPanel}
              alt="Utility technician at a residential service panel"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              quality={70}
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5 text-white">
              <p className="text-sm font-semibold">Nothing changes at the meter</p>
              <p className="text-xs text-white/80">Your utility keeps delivering power; only the supply charge on your bill changes.</p>
            </div>
          </div>
        </div>
        <ol className="lg:col-span-7">
          {processSteps.map((step) => (
            <li key={step.step} className="grid gap-3 border-t border-ink/12 py-6 first:border-t-0 first:pt-0 sm:grid-cols-12 sm:gap-6">
              <div className="sm:col-span-2">
                <span className="inline-flex size-9 items-center justify-center rounded-sm bg-ink text-sm font-semibold text-white">
                  {step.step}
                </span>
              </div>
              <div className="sm:col-span-10">
                <h2 className="text-lg font-semibold text-ink">{step.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/75 md:text-[15px]">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SectionWrapper>
  )
}
