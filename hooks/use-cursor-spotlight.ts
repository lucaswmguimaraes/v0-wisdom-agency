"use client"

import { useEffect, useRef } from "react"

export function useCursorSpotlight(elementRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    function handleMouseMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      el!.style.setProperty("--spotlight-x", `${x}%`)
      el!.style.setProperty("--spotlight-y", `${y}%`)
    }

    el.addEventListener("mousemove", handleMouseMove)
    return () => el.removeEventListener("mousemove", handleMouseMove)
  }, [elementRef])
}
