"use client"

import { useEffect } from "react"

/**
 * Efeito magnético: o elemento segue sutilmente o cursor quando ele se aproxima.
 * Ideal em CTAs primários. Respeita prefers-reduced-motion.
 */
export function useMagnetic(
  ref: React.RefObject<HTMLElement | null>,
  strength = 0.25,
  radius = 120
) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!canHover || reduced) return

    function onMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.hypot(dx, dy)
      if (dist < radius) {
        el!.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`
      } else {
        el!.style.transform = "translate(0, 0)"
      }
    }

    function onLeave() {
      el!.style.transform = "translate(0, 0)"
    }

    window.addEventListener("mousemove", onMove)
    el.addEventListener("mouseleave", onLeave)
    return () => {
      window.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseleave", onLeave)
    }
  }, [ref, strength, radius])
}
