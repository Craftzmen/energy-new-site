import { cn } from "@/lib/utils"

type LogoMarkProps = {
  size?: number
  className?: string
}

/**
 * Corporate mark: a square split diagonally (navy / amber) with a negative-space
 * bolt cut through the seam. Reads cleanly from 20px up.
 */
export function LogoMark({ size = 28, className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <rect width="32" height="32" rx="2" fill="hsl(222 47% 11%)" />
      <path d="M32 0v32H0L32 0z" fill="hsl(38 92% 50%)" />
      <path d="M19 4l-9 15h6l-3 9 10-15h-6l2-9z" fill="#fff" />
    </svg>
  )
}
