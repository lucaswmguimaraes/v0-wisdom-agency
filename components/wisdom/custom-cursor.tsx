"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Custom cursor com dot + ring de lag natural + spotlight azul global.
 *
 * - Escondido em dispositivos touch e para usuários com prefers-reduced-motion.
 * - Ring cresce quando hover em elementos interativos (a, button, [role=button], [data-cursor=link]).
 * - Spotlight azul sutil segue o mouse numa camada fixa (z-index 1 abaixo do conteúdo).
 *
 * Montado uma única vez no root layout. Não altera DOM do resto da página.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const spotRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Só ativa em pointer fino e sem reduced-motion
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!canHover || reduced) return

    setEnabled(true)
    document.documentElement.classList.add("wa-custom-cursor")

    const state = { mx: -100, my: -100, rx: -100, ry: -100 }
    let raf = 0

    function onMove(e: MouseEvent) {
      state.mx = e.clientX
      state.my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${state.mx}px, ${state.my}px, 0) translate(-50%, -50%)`
      }
      if (spotRef.current) {
        spotRef.current.style.background = `radial-gradient(520px circle at ${state.mx}px ${state.my}px, rgba(59,130,246,0.08), transparent 55%)`
      }
    }

    function tick() {
      state.rx += (state.mx - state.rx) * 0.18
      state.ry += (state.my - state.ry) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${state.rx}px, ${state.ry}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(tick)
    }

    function onOver(e: MouseEvent) {
      const t = e.target as HTMLElement
      if (!t) return
      const interactive = t.closest("a, button, [role='button'], [data-cursor='link'], input, textarea, select, label")
      if (interactive) ringRef.current?.classList.add("is-hover")
      else ringRef.current?.classList.remove("is-hover")
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseover", onOver)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseover", onOver)
      cancelAnimationFrame(raf)
      document.documentElement.classList.remove("wa-custom-cursor")
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div ref={spotRef} className="wa-cursor-spot" aria-hidden="true" />
      <div ref={ringRef} className="wa-cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="wa-cursor-dot" aria-hidden="true" />
    </>
  )
}
