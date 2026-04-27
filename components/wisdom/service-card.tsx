"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { TiltCard } from "@/components/wisdom/tilt-card"

interface ServiceCardProps {
  icon: React.ReactNode
  badge: string
  title: string
  subtitle: string
  description: string
  ctaLabel: string
  ctaHref: string
}

export function ServiceCard({ icon, badge, title, subtitle, description, ctaLabel, ctaHref }: ServiceCardProps) {
  return (
    <TiltCard intensity={5} className="h-full">
      <div
        className="service-card p-8 rounded-xl bg-card border border-border flex flex-col gap-4 relative z-[2]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flex items-center gap-3 mb-1" style={{ transform: "translateZ(20px)" }}>
          <div className="text-primary">{icon}</div>
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full border"
            style={{
              background: "rgba(59,130,246,0.1)",
              color: "var(--wa-blue-300)",
              borderColor: "rgba(59,130,246,0.3)",
            }}
          >
            {badge}
          </span>
        </div>
        <div style={{ transform: "translateZ(16px)" }}>
          <h3 className="text-xl font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-xs font-medium mb-3" style={{ color: "var(--fg-3)" }}>
            {subtitle}
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
        <div className="mt-auto" style={{ transform: "translateZ(24px)" }}>
          <Link
            href={ctaHref}
            className="flex items-center text-primary text-sm font-medium group/cta"
          >
            {ctaLabel}
            <ArrowRight className="ml-2 h-4 w-4 arrow-slide transition-transform duration-150 group-hover/cta:translate-x-1" />
          </Link>
        </div>
      </div>
    </TiltCard>
  )
}
