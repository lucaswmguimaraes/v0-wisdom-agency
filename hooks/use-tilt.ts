"use client"

import { useEffect, useRef } from "react"

export function useTilt(elementRef: React.RefObject<HTMLElement | null>, intensity = 8) {
  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    function handleMouseMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (rect.width / 2)
      const dy = (e.clientY - cy) / (rect.height / 2)
      const rotateX = -dy * intensity
      const rotateY = dx * intensity
      el!.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(4px)`
    }

    function handleMouseLeave() {
      el!.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)"
    }

    el.addEventListener("mousemove", handleMouseMove)
    el.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      el.removeEventListener("mousemove", handleMouseMove)
      el.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [elementRef, intensity])
}
