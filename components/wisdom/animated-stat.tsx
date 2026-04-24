"use client"

import { useAnimatedCounter } from "@/hooks/use-animated-counter"

interface AnimatedStatProps {
  prefix?: string
  value: number
  suffix?: string
  label: string
  context: string
  icon: React.ReactNode
}

export function AnimatedStat({ prefix = "", value, suffix = "", label, context, icon }: AnimatedStatProps) {
  const { value: animated, ref } = useAnimatedCounter(value, 1600)

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="flex items-center gap-4 px-6 py-8">
      <div className="text-primary opacity-70 flex-shrink-0">{icon}</div>
      <div>
        <div className="text-2xl font-bold text-foreground tracking-tight">
          {prefix}{animated}{suffix}
        </div>
        <div className="text-sm text-muted-foreground">{label}</div>
        <div className="text-xs mt-0.5" style={{ color: "var(--fg-4)" }}>{context}</div>
      </div>
    </div>
  )
}
