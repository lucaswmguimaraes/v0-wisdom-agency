"use client"

import { cn } from "@/lib/utils"

interface MarqueeProps {
  className?: string
  /** Duration in seconds for one full loop. Default 50. */
  speed?: number
}

const PLATFORMS = [
  { name: "Google Ads", color: "#4285F4" },
  { name: "Meta Ads", color: "#0866FF" },
  { name: "LinkedIn Ads", color: "#0A66C2" },
  { name: "TikTok Ads", color: "#69C9D0" },
  { name: "GA4", color: "#E37400" },
  { name: "GTM", color: "#8AB4F8" },
  { name: "Looker Studio", color: "#4285F4" },
  { name: "Apps Script", color: "#34A853" },
  { name: "Claude", color: "#CC785C" },
]

const LOOP = [...PLATFORMS, ...PLATFORMS]

export function Marquee({ className, speed = 50 }: MarqueeProps) {
  return (
    <div className={cn("wa-marquee", className)} aria-hidden="true">
      <div className="wa-marquee__track" style={{ animationDuration: `${speed}s` }}>
        {LOOP.map(({ name, color }, i) => (
          <span key={i} className="wa-marquee__logo-item">
            <span className="wa-marquee__dot" />
            <span style={{ color }}>{name}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
