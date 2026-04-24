"use client"

import { useEffect, useRef, useState } from "react"

export function useAnimatedCounter(target: number, duration = 1800, startOnVisible = true) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLElement | null>(null)
  const started = useRef(false)

  useEffect(() => {
    if (!startOnVisible) {
      animate()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          animate()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()

    function animate() {
      const start = performance.now()
      function step(now: number) {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(Math.round(eased * target))
        if (progress < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }
  }, [target, duration, startOnVisible])

  return { value, ref }
}
