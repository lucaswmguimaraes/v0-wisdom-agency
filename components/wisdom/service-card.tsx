"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useTilt } from "@/hooks/use-tilt"

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
  const cardRef = useRef<HTMLDivElement>(null)
  useTilt(cardRef, 6)

  return (
    <div
      ref={cardRef}
      className="service-card p-8 rounded-xl bg-card border border-border flex flex-col gap-4"
      style={{ transition: "transform 120ms cubic-bezier(0.2,0,0,1)", willChange: "transform" }}
    >
      <div className="flex items-center gap-3 mb-1">
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
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-xs font-medium mb-3" style={{ color: "var(--fg-3)" }}>
          {subtitle}
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
      <div className="mt-auto">
        <Link
          href={ctaHref}
          className="flex items-center text-primary text-sm font-medium group/cta"
        >
          {ctaLabel}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-150 group-hover/cta:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
