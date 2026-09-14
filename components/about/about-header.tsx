import { RouteHero } from "@/components/layout/route-hero"
import { aboutFacts, aboutPage } from "@/lib/about-content"
import { PHOTOS } from "@/lib/remote-images"

export function AboutHeader() {
  return (
    <RouteHero
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      title={aboutPage.title}
      description={aboutPage.description}
      image={PHOTOS.aboutHero}
      imageAlt="Transmission towers at dusk"
      aside={
        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-ink/12 pt-5 text-sm sm:grid-cols-4">
          {aboutFacts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs text-ink/55">{fact.label}</dt>
              <dd className="mt-0.5 font-semibold text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      }
    />
  )
}
