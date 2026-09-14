import { aboutIntro } from "@/lib/about-content"
import { PHOTOS } from "@/lib/remote-images"
import { MediaSplit } from "@/components/shared/media-split"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function AboutIntro() {
  return (
    <SectionWrapper background="white">
      <MediaSplit image={PHOTOS.team} imageAlt="Energy staff in a planning meeting">
        <h2 className="text-section-title text-ink">The company</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink/80">
          {aboutIntro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </MediaSplit>
    </SectionWrapper>
  )
}
