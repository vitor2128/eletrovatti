"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "slide-up" | "slide-left" | "slide-right" | "fade" | "scale"
  delay?: number
}

export function AnimatedSection({ children, className, animation = "slide-up", delay = 0 }: AnimatedSectionProps) {
  const { ref, isVisible } = useIntersection({ threshold: 0.1 })

  const animationClasses = {
    "slide-up": "translate-y-10",
    "slide-left": "-translate-x-10",
    "slide-right": "translate-x-10",
    fade: "",
    scale: "scale-95",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        !isVisible && `opacity-0 ${animationClasses[animation]}`,
        isVisible && "opacity-100 translate-x-0 translate-y-0 scale-100",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
