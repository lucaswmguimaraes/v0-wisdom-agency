"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TiltCardProps {
  children: React.ReactNode
  /** Rotation intensity in degrees. Default 8. */
  intensity?: number
  /** Show radial glow that follows the cursor. Default true. */
  glow?: boolean
  className?: string
}

/**
 * Wrapper 3D para qualquer card. Adiciona:
 *  - rotateX/rotateY que seguem o cursor (respeitando intensity)
 *  - translateZ sutil para profundidade
 *  - variáveis CSS --mx / --my para um glow radial opcional (controlado via CSS)
 *
 * Desabilitado automaticamente para prefers-reduced-motion e pointer: coarse.
 */
export function TiltCard({ children, intensity = 8, glow = true, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
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
      const rotateX = -dy * intensity
      const rotateY = dx * intensity
      el!.style.setProperty("--tilt-rx", `${rotateX}deg`)
      el!.style.setProperty("--tilt-ry", `${rotateY}deg`)
      el!.style.setProperty("--mx", `${e.clientX - rect.left}px`)
      el!.style.setProperty("--my", `${e.clientY - rect.top}px`)
    }

    function onLeave() {
      el!.style.setProperty("--tilt-rx", "0deg")
      el!.style.setProperty("--tilt-ry", "0deg")
    }

    function onEnter() {
      updateRect()
    }

    el.addEventListener("mouseenter", onEnter)
    el.addEventListener("mousemove", onMove)
    el.addEventListener("mouseleave", onLeave)
    window.addEventListener("scroll", updateRect, { passive: true })
    window.addEventListener("resize", updateRect)

    return () => {
      el.removeEventListener("mouseenter", onEnter)
      el.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseleave", onLeave)
      window.removeEventListener("scroll", updateRect)
      window.removeEventListener("resize", updateRect)
    }
  }, [intensity])

  return (
    <div ref={ref} className={cn("tilt-card", glow && "tilt-card--glow", className)}>
      <div className="tilt-card__inner">{children}</div>
    </div>
  )
}
