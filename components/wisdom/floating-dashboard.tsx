"use client"

import { useEffect, useRef } from "react"
import { TrendingUp, Sparkles, BarChart3 } from "lucide-react"

/**
 * Visual decorativo do hero — três camadas "flutuantes" que sugerem
 * um dashboard de mídia paga + um chip de IA.
 *
 * Reage ao mouse (parallax) e tem uma respiração sutil em idle.
 * Conteúdo é puramente ilustrativo (não carrega dados reais).
 */
export function FloatingDashboard() {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!canHover || reduced) return

    let rect = el.getBoundingClientRect()
    const updateRect = () => { rect = el.getBoundingClientRect() }

    function onMove(e: MouseEvent) {
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (rect.width / 2)
      const dy = (e.clientY - cy) / (rect.height / 2)
      el!.style.setProperty("--fd-x", `${dx}`)
      el!.style.setProperty("--fd-y", `${dy}`)
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("scroll", updateRect, { passive: true })
    window.addEventListener("resize", updateRect)

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("scroll", updateRect)
      window.removeEventListener("resize", updateRect)
    }
  }, [])

  return (
    <div ref={wrapRef} className="floating-dashboard" aria-hidden="true">
      {/* Main dashboard card */}
      <div className="fd-main">
        <div className="fd-main__head">
          <div className="fd-dot" />
          <div className="fd-dot" />
          <div className="fd-dot" />
          <span className="fd-main__title">wisdom · performance</span>
        </div>
        <div className="fd-main__body">
          <div className="fd-metric">
            <span className="fd-metric__label">ROAS · últimos 30d</span>
            <span className="fd-metric__value">
              2.94<span className="fd-metric__suffix">x</span>
            </span>
            <span className="fd-metric__delta">
              <TrendingUp className="h-3 w-3" />
              +38% MoM
            </span>
          </div>
          <div className="fd-chart">
            {/* SVG sparkline — static, puramente decorativo */}
            <svg viewBox="0 0 220 60" preserveAspectRatio="none" className="fd-chart__svg">
              <defs>
                <linearGradient id="fd-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,45 L20,42 L40,38 L60,40 L80,30 L100,32 L120,22 L140,26 L160,14 L180,18 L200,8 L220,10 L220,60 L0,60 Z"
                fill="url(#fd-grad)"
              />
              <path
                d="M0,45 L20,42 L40,38 L60,40 L80,30 L100,32 L120,22 L140,26 L160,14 L180,18 L200,8 L220,10"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="fd-legend">
            <span className="fd-legend__item">
              <BarChart3 className="h-3 w-3" />
              Google · Meta · LinkedIn
            </span>
            <span className="fd-legend__ok">live</span>
          </div>
        </div>
      </div>

      {/* Floating metric card */}
      <div className="fd-metric-card">
        <span className="fd-mc__label">CPL · Fintech B2B</span>
        <span className="fd-mc__value">
          -65<span className="fd-mc__suffix">%</span>
        </span>
        <span className="fd-mc__context">vs. baseline · 90d</span>
      </div>

      {/* AI chip */}
      <div className="fd-ai">
        <Sparkles className="h-3.5 w-3.5" />
        <div className="fd-ai__lines">
          <span className="fd-ai__line" />
          <span className="fd-ai__line" />
          <span className="fd-ai__line" />
        </div>
        <span className="fd-ai__label">AI · otimizando</span>
      </div>
    </div>
  )
}
