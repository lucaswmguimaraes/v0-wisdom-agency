"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, Play, Mail, Target, Bot, Layers } from "lucide-react"
import { Header } from "@/components/wisdom/header"
import { Footer } from "@/components/wisdom/footer"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/wisdom/contact-form"
import { FloatingDashboard } from "@/components/wisdom/floating-dashboard"
import { IsoGrid } from "@/components/wisdom/iso-grid"
import { Marquee } from "@/components/wisdom/marquee"
import { useCursorSpotlight } from "@/hooks/use-cursor-spotlight"
import { useMagnetic } from "@/hooks/use-magnetic"

/* ── Data ── */

const SERVICES = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Gestão de mídia paga",
    desc:
      "Google, Meta, LinkedIn e TikTok. Estrutura de conta, teste de criativo, estratégia de lance e pacing — com acompanhamento pelo WhatsApp com suporte a qualquer momento.",
    bullets: ["R$20M+ em mídia gerenciada", "ROAS médio 4x+", "Relatórios com insights, não planilhas"],
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Consultoria de IA",
    desc:
      "Integro Claude e Google Apps Script na sua operação — automação de relatórios, análise de performance e geração de criativo. Workflows que você possui e controla.",
    bullets: ["Playbooks prontos", "Automações de tarefas com Claude Code", "Manutenção e suporte dos fluxos"],
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Estratégia full-funnel",
    desc:
      "Anúncio é o último metro. Mapeamos oferta, landing, lifecycle e atribuição — para que mídia paga componha resultado.",
    bullets: ["Auditoria em 7 dias", "Roadmap trimestral", "Atribuição fim-a-fim"],
  },
]

const STATS = [
  { value: "+329%", label: "Volume de leads com -65% no CPL" },
  { value: "+85%", label: "Crescimento de receita ano a ano" },
  { value: "R$20M+", label: "Em mídia gerenciada ao longo da carreira" },
  { value: "+40", label: "Empresas B2B e DTC atendidas" },
]

const PROCESS = [
  {
    n: "01",
    title: "Auditoria",
    desc: "Diagnóstico completo de conta e funil em 7 dias. Você sai com um plano de 90 dias por escrito.",
  },
  {
    n: "02",
    title: "Reconstrução",
    desc: "Estrutura de conta, sistema de criativo, medição. A gente não otimiza fundação quebrada.",
  },
  {
    n: "03",
    title: "Escala",
    desc: "Experimentos semanais, revisão estratégica mensal. Critério claro de win/kill em cada teste.",
  },
  {
    n: "04",
    title: "Composição",
    desc: "Roadmap trimestral atrelado à sua meta de receita. Cada real ou performa ou é cortado.",
  },
]

/* ── Service card with cursor-reactive glow ── */

function ServiceV3Card({
  icon,
  title,
  desc,
  bullets,
}: {
  icon: React.ReactNode
  title: string
  desc: string
  bullets: string[]
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    cardRef.current?.style.setProperty("--mx", `${e.clientX - rect.left}px`)
    cardRef.current?.style.setProperty("--my", `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={cardRef}
      className="wa-service-v3"
      onMouseMove={handleMouseMove}
    >
      <div className="wa-service-icon-v3">{icon}</div>
      <h3 style={{ marginTop: 20, fontSize: 18, fontWeight: 700, color: "var(--fg-1)" }}>{title}</h3>
      <p style={{ marginTop: 10, fontSize: 15, color: "var(--fg-2)", lineHeight: 1.65 }}>{desc}</p>
      <ul className="wa-service-bullets">
        {bullets.map((b) => (
          <li key={b} className="wa-service-bullet">
            <span className="wa-service-bullet-check" aria-hidden="true">✓</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ── Page ── */

export default function LandingPage() {
  const heroRef = useRef<HTMLElement>(null)
  useCursorSpotlight(heroRef)

  const ctaRef = useRef<HTMLAnchorElement>(null)
  useMagnetic(ctaRef, 0.2, 100)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* ── Hero ── */}
        <section ref={heroRef} className="relative overflow-hidden hero-spotlight">
          <IsoGrid />
          <div className="aurora-v2" aria-hidden="true" />
          <div className="dot-grid" aria-hidden="true" />

          <div className="relative mx-auto max-w-[1200px] px-8 py-28 sm:py-36 z-10">
            <div className="hero-grid">
              <div>
                {/* Eyebrow */}
                <div className="wa-section-eyebrow hero-enter" style={{ animationDelay: "0ms" }}>
                  <span className="wa-section-eyebrow-dot" />
                  Disponível para novos projetos
                </div>

                {/* Headline */}
                <h1
                  className="hero-enter"
                  style={{
                    animationDelay: "80ms",
                    fontSize: "clamp(48px, 6.2vw, 84px)",
                    fontWeight: 800,
                    lineHeight: 1.04,
                    letterSpacing: "-0.025em",
                    color: "var(--fg-1)",
                    marginTop: 20,
                  }}
                >
                  Mídia paga e{" "}
                  <em style={{ fontStyle: "italic", color: "var(--fg-2)" }}>IA aplicada</em>,
                  <br />
                  <span className="wa-grad">feitas para crescer.</span>
                </h1>

                {/* Lead */}
                <p
                  className="hero-enter"
                  style={{
                    animationDelay: "160ms",
                    marginTop: 24,
                    fontSize: 18,
                    lineHeight: 1.65,
                    color: "var(--fg-2)",
                    maxWidth: 520,
                  }}
                >
                  Já gerenciei mais de{" "}
                  <strong style={{ color: "var(--fg-1)" }}>R$20M em mídia paga</strong> para marcas B2B e DTC.
                  Sem hand-off de júnior, sem 40 slides de deck. Apenas retornos que compõem.
                </p>

                {/* CTAs */}
                <div
                  className="hero-enter"
                  style={{
                    animationDelay: "240ms",
                    marginTop: 40,
                    display: "flex",
                    gap: 16,
                    flexWrap: "wrap",
                  }}
                >
                  <Button asChild size="lg" className="magnetic-btn">
                    <a ref={ctaRef} href="#contact">
                      Agendar diagnóstico
                      <ArrowRight className="ml-2 h-5 w-5 arrow-slide" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/portfolio">
                      <Play className="mr-2 h-4 w-4" />
                      Ver casos
                    </Link>
                  </Button>
                </div>

                {/* Social proof — companies count */}
                <div
                  className="hero-enter"
                  style={{
                    animationDelay: "320ms",
                    marginTop: 32,
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <div style={{ display: "flex" }}>
                    {["#4f7ef7", "#7c3aed", "#0ea5e9", "#10b981"].map((color, i) => (
                      <div
                        key={i}
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          background: color,
                          border: "2.5px solid var(--wa-bg, #0B0F14)",
                          marginLeft: i > 0 ? -10 : 0,
                        }}
                      />
                    ))}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--fg-2)" }}>
                    <strong style={{ color: "var(--fg-1)" }}>+40 empresas</strong> atendidas ao longo da carreira
                  </div>
                </div>
              </div>

              {/* Hero visual */}
              <div className="hero-enter" style={{ animationDelay: "200ms" }}>
                <FloatingDashboard />
              </div>
            </div>
          </div>

          {/* Stack marquee */}
          <div className="relative z-10 border-t border-border">
            <Marquee speed={50} />
          </div>
        </section>

        {/* ── Services ── */}
        <section className="py-24 border-t border-border" id="servicos">
          <div className="mx-auto max-w-[1200px] px-8">
            <div style={{ marginBottom: 56 }}>
              <div className="wa-section-eyebrow">
                <span className="wa-section-eyebrow-dot" />
                Serviços
              </div>
              <h2 className="wa-section-h2" style={{ marginTop: 16 }}>
                Três coisas. <span className="wa-grad">Feitas muito bem.</span>
              </h2>
              <p style={{ marginTop: 16, fontSize: 17, color: "var(--fg-2)", maxWidth: 520 }}>
                A gente não faz SEO, social media, influencer ou PR — de propósito. É o que mantém
                nosso time afiado.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 24,
              }}
            >
              {SERVICES.map((s) => (
                <ServiceV3Card key={s.title} {...s} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats band ── */}
        <section className="wa-stats-band" id="resultados">
          <div className="wa-stats-grid">
            {STATS.map((s) => (
              <div key={s.value} style={{ textAlign: "center", padding: "8px 0" }}>
                <div className="wa-stat-value-big">{s.value}</div>
                <div
                  style={{
                    marginTop: 8,
                    fontSize: 14,
                    color: "var(--fg-3)",
                    letterSpacing: "0.01em",
                    lineHeight: 1.4,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Process ── */}
        <section className="py-24 border-t border-border" id="processo">
          <div className="mx-auto max-w-[1200px] px-8">
            <div style={{ marginBottom: 56 }}>
              <div className="wa-section-eyebrow">
                <span className="wa-section-eyebrow-dot" />
                Processo
              </div>
              <h2 className="wa-section-h2" style={{ marginTop: 16 }}>
                Como a gente <span className="wa-grad">trabalha.</span>
              </h2>
            </div>

            <div className="wa-process-grid">
              {PROCESS.map((step) => (
                <div key={step.n} className="wa-process-step">
                  <div className="wa-process-badge">{step.n}</div>
                  <h3
                    style={{
                      marginTop: 20,
                      fontSize: 18,
                      fontWeight: 700,
                      color: "var(--fg-1)",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      marginTop: 10,
                      fontSize: 15,
                      color: "var(--fg-2)",
                      lineHeight: 1.65,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cases ── */}
        <section className="py-24 border-t border-border" id="cases">
          <div className="mx-auto max-w-[1200px] px-8">
            <div style={{ marginBottom: 56 }}>
              <div className="wa-section-eyebrow">
                <span className="wa-section-eyebrow-dot" />
                Cases
              </div>
              <h2 className="wa-section-h2" style={{ marginTop: 16 }}>
                Prova, <span className="wa-grad">não promessa.</span>
              </h2>
              <p style={{ marginTop: 16, fontSize: 17, color: "var(--fg-2)", maxWidth: 520 }}>
                Recortes de campanhas reais. Números auditáveis, com permissão dos clientes.
              </p>
            </div>

            <div className="wa-cases-grid">
              {/* Case 1 — App de cuidadores */}
              <Link href="/portfolio" className="wa-case-card">
                <div className="wa-case-cover wa-case-cover-1" style={{ position: "relative" }}>
                  <span className="wa-case-tag">App de cuidadores · Google + Meta</span>
                  <div style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-60%)", opacity: 0.25, pointerEvents: "none" }}>
                    <svg width="72" height="90" viewBox="0 0 72 90" fill="none">
                      <rect x="8" y="0" width="56" height="90" rx="10" stroke="white" strokeWidth="2" />
                      <rect x="20" y="7" width="32" height="4" rx="2" fill="white" fillOpacity="0.7" />
                      <polyline points="12,70 24,56 36,63 50,42 60,28" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      <circle cx="60" cy="28" r="3.5" fill="white" />
                    </svg>
                  </div>
                  <div className="wa-case-cover-chart">
                    <svg viewBox="0 0 300 90" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
                      <defs>
                        <linearGradient id="cg1" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 78 L50 68 L100 60 L150 44 L200 28 L250 14 L300 5" fill="none" stroke="white" strokeOpacity="0.9" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M0 78 L50 68 L100 60 L150 44 L200 28 L250 14 L300 5 L300 90 L0 90 Z" fill="url(#cg1)" />
                    </svg>
                  </div>
                </div>
                <div className="wa-case-body">
                  <h3>App de cuidadores: +329% de leads qualificados com -65% no CPL.</h3>
                  <p style={{ marginTop: 8, fontSize: 14, color: "var(--fg-3)", lineHeight: 1.6 }}>
                    Reformulamos o formulário de captação com foco em qualificação mobile-first, aumentando de 34,8% para 60,8% a taxa de leads que viraram orçamentos. Operação escalada de R$8k para R$20k/mês mantendo CPL.
                  </p>
                  <div className="wa-case-metrics">
                    <div><strong>+329%</strong><span>Leads</span></div>
                    <div><strong>−65%</strong><span>CPL</span></div>
                    <div><strong>60,8%</strong><span>Taxa de orçamento</span></div>
                  </div>
                </div>
              </Link>

              {/* Case 2 — Plataforma de concursos */}
              <Link href="/portfolio" className="wa-case-card">
                <div className="wa-case-cover wa-case-cover-2" style={{ position: "relative" }}>
                  <span className="wa-case-tag">Edtech · Google + Meta + CRM</span>
                  <div style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-60%)", opacity: 0.25, pointerEvents: "none" }}>
                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                      <rect x="4" y="48" width="12" height="20" rx="2" fill="white" />
                      <rect x="20" y="34" width="12" height="34" rx="2" fill="white" />
                      <rect x="36" y="18" width="12" height="50" rx="2" fill="white" />
                      <rect x="52" y="4" width="12" height="64" rx="2" fill="white" />
                      <path d="M4 48 L64 4" stroke="white" strokeWidth="1.5" strokeDasharray="3 2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="wa-case-cover-chart">
                    <svg viewBox="0 0 300 90" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
                      <defs>
                        <linearGradient id="cg2" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="white" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 80 L50 72 L100 58 L150 38 L200 22 L250 12 L300 5" fill="none" stroke="white" strokeOpacity="0.85" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M0 80 L50 72 L100 58 L150 38 L200 22 L250 12 L300 5 L300 90 L0 90 Z" fill="url(#cg2)" />
                    </svg>
                  </div>
                </div>
                <div className="wa-case-body">
                  <h3>Plataforma de concursos: +85% de receita com -13% no CPA.</h3>
                  <p style={{ marginTop: 8, fontSize: 14, color: "var(--fg-3)", lineHeight: 1.6 }}>
                    Oferta estruturada de ponta a ponta — da campanha ao lifecycle. Paid search e Meta integrados com CRM e ativação de base, levando o app a 2,3M de acessos mensais e 28,1% de market share no segmento.
                  </p>
                  <div className="wa-case-metrics">
                    <div><strong>+85%</strong><span>Receita</span></div>
                    <div><strong>−13%</strong><span>CPA</span></div>
                    <div><strong>28,1%</strong><span>Market share</span></div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Pre-contact CTA ── */}
        <section className="wa-cta-section">
          <div className="wa-cta-inner">
            <div className="wa-section-eyebrow" style={{ justifyContent: "center" }}>
              <span className="wa-section-eyebrow-dot" />
              Disponível para novos projetos
            </div>
            <h2 style={{ marginTop: 24 }}>
              Pronto pra parar de{" "}
              <em style={{ fontStyle: "italic", color: "var(--fg-2)" }}>achar</em>
              <br />
              e começar a{" "}
              <em style={{ fontStyle: "italic", color: "var(--fg-2)" }}>saber?</em>
            </h2>
            <p
              style={{
                marginTop: 20,
                color: "var(--fg-2)",
                maxWidth: 460,
                margin: "20px auto 0",
                lineHeight: 1.65,
              }}
            >
              Conte sobre sua conta. Se fizer sentido, mando uma proposta em até 48h. Se não,
              indico alguém que faz.
            </p>
            <div
              style={{
                marginTop: 40,
                display: "flex",
                gap: 16,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button asChild size="lg" className="magnetic-btn">
                <a href="#contact">
                  Agendar diagnóstico gratuito
                  <ArrowRight className="ml-2 h-5 w-5 arrow-slide" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:lucaswmguimaraes@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  lucaswmguimaraes@gmail.com
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ── Contact form ── */}
        <section id="contact" className="py-20 border-t border-border">
          <div className="mx-auto max-w-[1200px] px-8">
            <div className="max-w-xl">
              <div className="wa-section-eyebrow">
                <span className="wa-section-eyebrow-dot" />
                Próximo passo
              </div>
              <h2 className="wa-section-h2" style={{ marginTop: 16 }}>
                Vamos falar sobre o seu próximo trimestre.
              </h2>
              <p style={{ marginTop: 12, color: "var(--fg-2)" }}>
                Call de 30 min, sem pitch — só conversa direta sobre o que faz sentido para a sua
                operação.
              </p>
              <div style={{ marginTop: 32 }}>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
