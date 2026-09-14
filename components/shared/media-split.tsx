import Image, { type StaticImageData } from "next/image"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type MediaSplitProps = {
  image: StaticImageData
  imageAlt: string
  children: ReactNode
  reverse?: boolean
  imageClassName?: string
  className?: string
}

/**
 * Two-column editorial block: photo on one side, copy on the other. Stacks on
 * mobile with the photo first.
 */
export function MediaSplit({ image, imageAlt, children, reverse = false, imageClassName, className }: MediaSplitProps) {
  return (
    <div className={cn("grid items-center gap-8 lg:grid-cols-12 lg:gap-12", className)}>
      <div className={cn("relative aspect-[4/3] overflow-hidden rounded-sm bg-muted lg:col-span-5", reverse && "lg:order-2", imageClassName)}>
        <Image src={image} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 42vw" quality={70} className="object-cover" />
      </div>
      <div className={cn("lg:col-span-7", reverse && "lg:order-1")}>{children}</div>
    </div>
  )
}
