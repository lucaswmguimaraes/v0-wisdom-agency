"use client"

import { cn } from "@/lib/utils"

interface MarqueeProps {
  items: string[]
  className?: string
  /** Velocidade em segundos para uma volta completa. Default 40. */
  speed?: number
}

/**
 * Marquee infinito com pausa no hover. Usa CSS animation + duplicação do conteúdo.
 * Respeita prefers-reduced-motion via CSS.
 */
export function Marquee({ items, className, speed = 40 }: MarqueeProps) {
  return (
    <div className={cn("wa-marquee", className)}>
      <div className="wa-marquee__track" style={{ animationDuration: `${speed}s` }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className="wa-marquee__item">
            <span className="wa-marquee__dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
