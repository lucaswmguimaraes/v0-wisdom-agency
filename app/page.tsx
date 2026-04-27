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
      "Google, Meta, LinkedIn e TikTok. Estrutura de conta, teste de criativo, estratégia de lance e pacing — com sync semanal e Slack direto.",
    bullets: ["R$1M+/mês em gestão", "ROAS médio 4x+", "Relatórios com insights, não planilhas"],
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Consultoria de IA",
    desc:
      "Embedamos GPT-4 e Claude na sua operação — geração de criativo, análise de performance, outbound personalizado. Workflows que você dona.",
    bullets: ["Playbooks prontos", "Automações em n8n / Make", "Treinamento do time incluído"],
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Estratégia full-funnel",
    desc:
      "Anúncio é o último metro. Mapeamos oferta, landing, lifecycle e atribuição — pra que mídia paga componha, em vez de vazar.",
    bullets: ["Auditoria em 7 dias", "Roadmap trimestral", "Atribuição fim-a-fim"],
  },
]

const STATS = [
  { value: "+329%", label: "Leads ano a ano, cliente médio" },
  { value: "+85%", label: "Crescimento de receita em 2025" },
  { value: "R$1M+", label: "Em mídia gerenciada por mês" },
  { value: "27", label: "Clientes B2B + DTC ativos" },
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
                  Aceitando 3 novos clientes · Q2 2026
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
                  Gerenciamos{" "}
                  <strong style={{ color: "var(--fg-1)" }}>R$1M+ por mês</strong> em mídia paga para
                  marcas B2B e DTC. Sem hand-off de júnior, sem 40 slides de deck. Apenas retornos que
                  compõem.
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
                      Ver caso em vídeo
                    </Link>
                  </Button>
                </div>

                {/* Trust signal */}
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
                  <div>
                    <div style={{ color: "#FBBC05", fontSize: 12, letterSpacing: 2 }}>★★★★★</div>
                    <div style={{ fontSize: 13, color: "var(--fg-2)" }}>
                      <strong style={{ color: "var(--fg-1)" }}>4.9/5</strong> · 27+ clientes ativos
                    </div>
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
              <Link href="/portfolio#northwind" className="wa-case-card">
                <div className="wa-case-cover wa-case-cover-1">
                  <span className="wa-case-tag">B2B SaaS · LinkedIn + Google</span>
                  <div className="wa-case-cover-chart">
                    <svg
                      viewBox="0 0 300 90"
                      preserveAspectRatio="none"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <defs>
                        <linearGradient id="cg1" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 72 L40 64 L80 67 L120 50 L160 40 L200 28 L240 18 L300 8"
                        fill="none"
                        stroke="white"
                        strokeOpacity="0.9"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0 72 L40 64 L80 67 L120 50 L160 40 L200 28 L240 18 L300 8 L300 90 L0 90 Z"
                        fill="url(#cg1)"
                      />
                    </svg>
                  </div>
                </div>
                <div className="wa-case-body">
                  <h3>Northwind reduziu o CPL em 62% em 90 dias.</h3>
                  <p style={{ marginTop: 8, fontSize: 14, color: "var(--fg-3)", lineHeight: 1.6 }}>
                    LinkedIn e Google Search reestruturados, variantes de criativo geradas por GPT e
                    atribuição reconstruida. R$1,4M/mês em gestão.
                  </p>
                  <div className="wa-case-metrics">
                    <div>
                      <strong>−62%</strong>
                      <span>CPL</span>
                    </div>
                    <div>
                      <strong>+140%</strong>
                      <span>MQLs</span>
                    </div>
                    <div>
                      <strong>3.4x</strong>
                      <span>ROAS</span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/portfolio#fernhaus" className="wa-case-card">
                <div className="wa-case-cover wa-case-cover-2">
                  <span className="wa-case-tag">DTC · Meta + Performance Max</span>
                  <div className="wa-case-cover-chart">
                    <svg
                      viewBox="0 0 300 90"
                      preserveAspectRatio="none"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <defs>
                        <linearGradient id="cg2" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="white" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 80 L50 72 L100 58 L150 38 L200 22 L250 12 L300 5"
                        fill="none"
                        stroke="white"
                        strokeOpacity="0.85"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0 80 L50 72 L100 58 L150 38 L200 22 L250 12 L300 5 L300 90 L0 90 Z"
                        fill="url(#cg2)"
                      />
                    </svg>
                  </div>
                </div>
                <div className="wa-case-body">
                  <h3>Fernhaus +214% de receita em 6 meses.</h3>
                  <p style={{ marginTop: 8, fontSize: 14, color: "var(--fg-3)", lineHeight: 1.6 }}>
                    Refresh de criativo Meta + Google, rebuild de Performance Max, integração com
                    lifecycle.
                  </p>
                  <div className="wa-case-metrics">
                    <div>
                      <strong>+214%</strong>
                      <span>Receita</span>
                    </div>
                    <div>
                      <strong>4.2x</strong>
                      <span>ROAS</span>
                    </div>
                    <div>
                      <strong>−38%</strong>
                      <span>CAC</span>
                    </div>
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
              Vagas abertas · 3 novos clientes
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
              Conte sobre sua conta. Se fizer sentido, a gente manda uma proposta em até 48h. Se não,
              indicamos alguém que faz.
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
                <a href="mailto:oi@wisdom.agency">
                  <Mail className="mr-2 h-4 w-4" />
                  oi@wisdom.agency
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
