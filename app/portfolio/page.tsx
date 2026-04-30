"use client"

import { useRef, useState } from "react"
import { ArrowRight, ChevronLeft, Target, Bot, Layers, Check, Mail } from "lucide-react"
import { Header } from "@/components/wisdom/header"
import { Footer } from "@/components/wisdom/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCursorSpotlight } from "@/hooks/use-cursor-spotlight"
import { useMagnetic } from "@/hooks/use-magnetic"

/* ── Data ── */

const CASES = [
  {
    id: "nonno-app",
    client: "App de cuidadores",
    tag: "App de cuidadores · Google Ads + Meta Ads",
    headline: "App de cuidadores: +329% de leads qualificados com -65% no CPL.",
    desc: "Reestruturação completa de campanhas com foco em qualificação mobile-first. Novo formulário multi-step aumentou de 34,8% para 60,8% a taxa de leads que viraram orçamentos. Operação escalada de R$8k para R$20k/mês mantendo CPL sob controle.",
    metrics: [["+329%", "Leads"], ["−65%", "CPL"], ["60,8%", "Taxa de orçamento"]],
    coverClass: "wa-case-cover-1",
    sparkline: "M0 78 L50 68 L100 60 L150 44 L200 28 L250 14 L300 5",
    gradId: "pg1",
    briefing: "Startup de cuidadores para idosos com campanhas no piloto automático. Alta taxa de leads desqualificados chegando ao time comercial — cuidadores se candidatando pelo mesmo formulário dos familiares. CPL alto, tracking incompleto e escala travada.",
    actions: [
      "Separamos os fluxos: novo formulário mobile-first para captação de famílias buscando cuidadores, com 5 etapas de qualificação e lead score calculado antes do envio.",
      "Implementamos tracking end-to-end via GTM e CAPI com Smart Bidding baseado em valor de conversão — cada lead passou a ter peso diferente para o algoritmo do Google e Meta.",
      "Reestruturamos campanhas segmentando por estado e cobertura de cidade, eliminando gasto em regiões fora de operação.",
    ],
    result: "Em 90 dias: taxa de leads que viraram orçamentos subiu de 34,8% para 60,8%. Taxa de cuidadores se candidatando caiu de 19,2% para 11,2% — o formulário passou a filtrar na origem. Operação escalada de R$8k para R$20k/mês sem incremento de CPL.",
  },
  {
    id: "qconcursos",
    client: "Plataforma de concursos",
    tag: "Edtech · Google + Meta + CRM",
    headline: "Plataforma de concursos: +85% de receita com -13% no CPA.",
    desc: "Oferta estruturada de ponta a ponta — da campanha ao lifecycle. Paid search e Meta integrados com CRM e ativação de base, levando o app a 2,3M de acessos mensais e 28,1% de market share no segmento de educação para concursos.",
    metrics: [["+85%", "Receita"], ["−13%", "CPA"], ["28,1%", "Market share"]],
    coverClass: "wa-case-cover-2",
    sparkline: "M0 80 L50 72 L100 58 L150 38 L200 22 L250 12 L300 5",
    gradId: "pg2",
    briefing: "Plataforma de estudos para concursos públicos com crescimento estagnado. Campanhas rodando de forma isolada — sem conexão entre oferta, criativo e o que acontecia depois do clique. Necessidade de resultado expressivo em janela curta.",
    actions: [
      "Construímos uma oferta consistente e atraente que casava com o momento do usuário em cada etapa do funil — da descoberta até a reativação de base inativa.",
      "Integramos paid search, Meta e campanhas de app com a operação de CRM: lifecycle de email acionado por comportamento de campanha, scoring de leads e régua de ativação.",
      "Implementamos atribuição fim-a-fim para visibilidade real de qual canal e qual mensagem gerava receita — não apenas cliques.",
    ],
    result: "+85% de crescimento de receita YoY com -13% no CPA. App escalado para 2,3M de acessos mensais e 28,1% de market share no segmento educacional. O modelo de oferta e lifecycle se tornou o padrão da operação.",
  },
  {
    id: "contabilidade-facilitada",
    client: "Instituição de ensino",
    tag: "Educação superior · Google + Meta + Organic",
    headline: "+30.000 leads/mês integrando paid, orgânico e lançamentos de pós-graduação.",
    desc: "Coordenação de aquisição no lançamento simultâneo de 3 novos cursos de pós-graduação. Números recordes de captação com integração entre mídia paga, tráfego orgânico e operação comercial — todos medindo e otimizando pelo mesmo funil.",
    metrics: [["+30k", "Leads/mês"], ["3", "Cursos lançados"], ["Recorde", "Captação"]],
    coverClass: "wa-case-cover-3",
    sparkline: "M0 78 L60 68 L110 55 L160 36 L210 20 L260 10 L300 4",
    gradId: "pg3",
    briefing: "Instituição de ensino com operação de marketing e comercial historicamente desconectadas. Lançamento de 3 novos cursos de pós-graduação exigia escala rápida, com times e canais diferentes puxando para direções distintas.",
    actions: [
      "Centralizamos a estratégia de aquisição: paid search, Meta e conteúdo orgânico passaram a trabalhar com o mesmo funil, o mesmo lead scoring e os mesmos critérios de qualificação.",
      "Estruturamos os lançamentos dos 3 cursos com campanhas dedicadas por segmento de público, evitando canibalização e garantindo volume em cada frente simultaneamente.",
      "Conectamos marketing e comercial via CRM com nutrição automatizada — leads de diferentes fontes chegavam ao time de vendas com contexto e prioridade definidos.",
    ],
    result: "Captação recorde nos 3 cursos lançados, com mais de 30.000 leads/mês em pico de campanha. Integração entre canais eliminou sobreposição de audiência e aumentou eficiência de budget. Operação escalável para novos lançamentos.",
  },
]

const SERVICES = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Gestão de mídia paga",
    desc: "Google, Meta, LinkedIn e TikTok. Estrutura de conta, teste de criativo, estratégia de lance e pacing — com acompanhamento pelo WhatsApp com suporte a qualquer momento.",
    bullets: ["R$20M+ em mídia gerenciada", "ROAS médio 4x+", "Relatórios com insights, não planilhas"],
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Consultoria de IA",
    desc: "Integro Claude e Google Apps Script na sua operação — automação de relatórios, análise de performance e geração de criativo. Workflows que você possui e controla.",
    bullets: ["Playbooks prontos", "Automações de tarefas com Claude Code", "Manutenção e suporte dos fluxos"],
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Estratégia full-funnel",
    desc: "Anúncio é o último metro. Mapeamos oferta, landing, lifecycle e atribuição — para que mídia paga componha resultado.",
    bullets: ["Auditoria em 7 dias", "Roadmap trimestral", "Atribuição fim-a-fim"],
  },
]

const PROCESS = [
  { n: "01", title: "Auditoria", desc: "Diagnóstico completo de conta e funil em 7 dias. Você sai com um plano de 90 dias por escrito." },
  { n: "02", title: "Reconstrução", desc: "Estrutura de conta, sistema de criativo, medição. A gente não otimiza fundação quebrada." },
  { n: "03", title: "Escala", desc: "Experimentos semanais, revisão estratégica mensal. Critério claro de win/kill em cada teste." },
  { n: "04", title: "Composição", desc: "Roadmap trimestral atrelado à sua meta de receita. Cada real ou performa ou é cortado." },
]

/* ── Service card with cursor-reactive glow ── */

function ServiceV3Card({ icon, title, desc, bullets }: { icon: React.ReactNode; title: string; desc: string; bullets: string[] }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    cardRef.current?.style.setProperty("--mx", `${e.clientX - rect.left}px`)
    cardRef.current?.style.setProperty("--my", `${e.clientY - rect.top}px`)
  }
  return (
    <div ref={cardRef} className="wa-service-v3" onMouseMove={handleMouseMove}>
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

/* ── Case detail view ── */

function CaseDetail({ c, onBack }: { c: (typeof CASES)[0]; onBack: () => void }) {
  return (
    <article style={{ maxWidth: 800, margin: "0 auto", padding: "48px 32px" }}>
      <button
        onClick={onBack}
        style={{
          display: "flex", alignItems: "center", gap: 4,
          fontSize: 13, color: "var(--fg-3)", background: "none",
          border: "none", cursor: "pointer", marginBottom: 32, fontFamily: "inherit",
        }}
      >
        <ChevronLeft style={{ width: 14, height: 14 }} />
        Voltar para cases
      </button>

      <div className="wa-section-eyebrow" style={{ marginBottom: 16 }}>
        <span className="wa-section-eyebrow-dot" />
        {c.tag}
      </div>
      <h1 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 16px" }}>
        <span className="wa-grad">{c.headline}</span>
      </h1>
      <p style={{ fontSize: 17, color: "var(--fg-2)", lineHeight: 1.65, marginBottom: 40 }}>{c.desc}</p>

      {/* Cover with sparkline */}
      <div className={`wa-case-cover ${c.coverClass}`} style={{ height: 240, borderRadius: 16, marginBottom: 32 }}>
        <div className="wa-case-cover-chart">
          <svg viewBox="0 0 300 90" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <defs>
              <linearGradient id={c.gradId} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={c.sparkline} fill="none" stroke="white" strokeOpacity="0.9" strokeWidth="2.5" strokeLinecap="round" />
            <path d={`${c.sparkline} L300 90 L0 90 Z`} fill={`url(#${c.gradId})`} />
          </svg>
        </div>
      </div>

      {/* Metrics */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 48 }}>
        {c.metrics.map(([val, lbl]) => (
          <div key={lbl} style={{ background: "var(--wa-surface-1)", border: "1px solid var(--wa-border)", borderRadius: 12, padding: "20px 16px", textAlign: "center" }}>
            <div className="wa-stat-value-big" style={{ fontSize: "clamp(28px,3vw,40px)" }}>{val}</div>
            <div style={{ fontSize: 13, color: "var(--fg-3)", marginTop: 6 }}>{lbl}</div>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 700, color: "var(--fg-1)", margin: "0 0 12px" }}>O briefing</h2>
      <p style={{ fontSize: 16, color: "var(--fg-2)", lineHeight: 1.7, marginBottom: 32 }}>
        {c.briefing}
      </p>

      <h2 style={{ fontSize: 22, fontWeight: 700, color: "var(--fg-1)", margin: "0 0 12px" }}>O que fizemos</h2>
      <ol style={{ paddingLeft: 20, color: "var(--fg-2)", fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
        {c.actions.map((action, i) => (
          <li key={i} style={{ marginBottom: 12 }}>{action}</li>
        ))}
      </ol>

      <h2 style={{ fontSize: 22, fontWeight: 700, color: "var(--fg-1)", margin: "0 0 12px" }}>Onde chegamos</h2>
      <p style={{ fontSize: 16, color: "var(--fg-2)", lineHeight: 1.7 }}>
        {c.result}
      </p>
    </article>
  )
}

/* ── Contact form ── */

function PortfolioContactForm() {
  const [form, setForm] = useState({ name: "", email: "", spend: "R$50k – R$250k", message: "" })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("Erro no envio")
      setSent(true)
    } catch {
      setErrorMsg("Algo deu errado. Tente novamente ou me chame no email.")
    } finally {
      setLoading(false)
    }
  }

  const selectStyle: React.CSSProperties = {
    width: "100%",
    height: 40,
    borderRadius: 6,
    border: "1px solid var(--wa-border)",
    background: "#10151C",
    color: "#F7F9FC",
    padding: "0 12px",
    fontSize: 14,
    cursor: "pointer",
    appearance: "auto" as const,
  }

  return (
    <div style={{ background: "var(--wa-surface-1)", border: "1px solid var(--wa-border)", borderRadius: 16, padding: 32 }}>
      {sent ? (
        <div style={{ textAlign: "center", padding: "32px 0" }}>
          <div style={{ display: "inline-flex", padding: 12, borderRadius: "50%", background: "rgba(34,197,94,0.1)", marginBottom: 16 }}>
            <Check style={{ width: 24, height: 24, color: "#22C55E" }} />
          </div>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--fg-1)", margin: "0 0 8px" }}>Recebido.</h3>
          <p style={{ color: "var(--fg-2)", margin: 0 }}>Você terá notícias em até 1 dia útil.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--fg-1)", marginBottom: 6 }}>Seu nome</label>
            <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Maria Silva" required />
          </div>
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--fg-1)", marginBottom: 6 }}>E-mail</label>
            <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="maria@empresa.com" required />
          </div>
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--fg-1)", marginBottom: 6 }}>Investimento mensal em anúncios</label>
            <select value={form.spend} onChange={(e) => setForm({ ...form, spend: e.target.value })} style={selectStyle}>
              <option value="Abaixo de R$20k" style={{ background: "#10151C", color: "#F7F9FC" }}>Abaixo de R$20k</option>
              <option value="R$20k – R$50k" style={{ background: "#10151C", color: "#F7F9FC" }}>R$20k – R$50k</option>
              <option value="R$50k – R$250k" style={{ background: "#10151C", color: "#F7F9FC" }}>R$50k – R$250k</option>
              <option value="R$250k – R$1M" style={{ background: "#10151C", color: "#F7F9FC" }}>R$250k – R$1M</option>
              <option value="R$1M+" style={{ background: "#10151C", color: "#F7F9FC" }}>R$1M+</option>
            </select>
          </div>
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--fg-1)", marginBottom: 6 }}>O que você está tentando resolver?</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="CPA subiu 40% desde a última atualização, Performance Max está comendo busca de marca..."
              style={{ width: "100%", borderRadius: 6, border: "1px solid var(--wa-border)", background: "var(--wa-bg)", color: "var(--fg-1)", padding: "8px 12px", fontSize: 14, lineHeight: 1.6, resize: "none" }}
            />
          </div>
          {errorMsg && (
            <p style={{ fontSize: 13, color: "var(--wa-danger)", margin: 0 }}>{errorMsg}</p>
          )}
          <Button type="submit" className="magnetic-btn" disabled={loading}>
            {loading ? "Enviando..." : "Agendar diagnóstico"}
            {!loading && <ArrowRight className="ml-2 h-4 w-4 arrow-slide" />}
          </Button>
        </form>
      )}
    </div>
  )
}

/* ── Page ── */

export default function PortfolioPage() {
  const [selectedCase, setSelectedCase] = useState<(typeof CASES)[0] | null>(null)
  const heroRef = useRef<HTMLElement>(null)
  useCursorSpotlight(heroRef)

  const ctaRef = useRef<HTMLAnchorElement>(null)
  useMagnetic(ctaRef, 0.2, 100)

  if (selectedCase) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <CaseDetail c={selectedCase} onBack={() => setSelectedCase(null)} />
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* ── Hero ── */}
        <section ref={heroRef} className="relative overflow-hidden hero-spotlight">
          <div className="aurora-v2" aria-hidden="true" />
          <div className="dot-grid" aria-hidden="true" />

          <div className="relative mx-auto max-w-[1200px] px-8 py-24 sm:py-32 z-10">
            <div className="wa-section-eyebrow hero-enter" style={{ animationDelay: "0ms" }}>
              <span className="wa-section-eyebrow-dot" />
              Prova, não promessa
            </div>

            <h1
              className="hero-enter"
              style={{
                animationDelay: "80ms",
                fontSize: "clamp(44px, 5.5vw, 76px)",
                fontWeight: 800,
                lineHeight: 1.06,
                letterSpacing: "-0.025em",
                marginTop: 20,
                maxWidth: 800,
              }}
            >
              <span className="wa-grad">Campanhas reais. Resultados auditáveis.</span>
            </h1>

            <p
              className="hero-enter"
              style={{
                animationDelay: "160ms",
                marginTop: 24,
                fontSize: 18,
                lineHeight: 1.65,
                color: "var(--fg-2)",
                maxWidth: 540,
              }}
            >
              Já gerenciei mais de{" "}
              <strong style={{ color: "var(--fg-1)" }}>R$20M em mídia paga</strong> para marcas
              B2B e DTC. Cada case abaixo tem números reais, com permissão dos clientes.
            </p>

            <div
              className="hero-enter"
              style={{ animationDelay: "240ms", marginTop: 36, display: "flex", gap: 16, flexWrap: "wrap" }}
            >
              <Button asChild size="lg" className="magnetic-btn">
                <a ref={ctaRef} href="#contact">
                  Agendar diagnóstico
                  <ArrowRight className="ml-2 h-5 w-5 arrow-slide" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#cases">Ver os cases</a>
              </Button>
            </div>
          </div>
        </section>

        {/* ── Stats band ── */}
        <section className="wa-stats-band">
          <div className="wa-stats-grid">
            {[
              { value: "+329%", label: "Volume de leads com -65% no CPL" },
              { value: "+85%", label: "Crescimento de receita ano a ano" },
              { value: "R$20M+", label: "Em mídia gerenciada ao longo da carreira" },
              { value: "+40", label: "Empresas B2B e DTC atendidas" },
            ].map((s) => (
              <div key={s.value} style={{ textAlign: "center", padding: "8px 0" }}>
                <div className="wa-stat-value-big">{s.value}</div>
                <div style={{ marginTop: 8, fontSize: 14, color: "var(--fg-3)", lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Cases ── */}
        <section id="cases" className="py-24 border-t border-border">
          <div className="mx-auto max-w-[1200px] px-8">
            <div style={{ marginBottom: 56 }}>
              <div className="wa-section-eyebrow">
                <span className="wa-section-eyebrow-dot" />
                Cases
              </div>
              <h2 className="wa-section-h2" style={{ marginTop: 16 }}>
                Clique para ver o case completo.
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                gap: 24,
              }}
            >
              {CASES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => { setSelectedCase(c); window.scrollTo(0, 0) }}
                  className="wa-case-card"
                  style={{ textAlign: "left", background: "none", border: "none", padding: 0, cursor: "pointer" }}
                >
                  <div className={`wa-case-cover ${c.coverClass}`}>
                    <span className="wa-case-tag">{c.tag}</span>
                    <div className="wa-case-cover-chart">
                      <svg viewBox="0 0 300 90" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
                        <defs>
                          <linearGradient id={`btn-${c.gradId}`} x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d={c.sparkline} fill="none" stroke="white" strokeOpacity="0.9" strokeWidth="2.5" strokeLinecap="round" />
                        <path d={`${c.sparkline} L300 90 L0 90 Z`} fill={`url(#btn-${c.gradId})`} />
                      </svg>
                    </div>
                  </div>
                  <div className="wa-case-body">
                    <h3>{c.headline}</h3>
                    <p style={{ marginTop: 8, fontSize: 14, color: "var(--fg-3)", lineHeight: 1.6 }}>{c.desc}</p>
                    <div className="wa-case-metrics">
                      {c.metrics.map(([val, lbl]) => (
                        <div key={lbl}><strong>{val}</strong><span>{lbl}</span></div>
                      ))}
                    </div>
                  </div>
                </button>
              ))}
            </div>
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
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
              {SERVICES.map((s) => <ServiceV3Card key={s.title} {...s} />)}
            </div>
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
                  <h3 style={{ marginTop: 20, fontSize: 18, fontWeight: 700, color: "var(--fg-1)" }}>{step.title}</h3>
                  <p style={{ marginTop: 10, fontSize: 15, color: "var(--fg-2)", lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              ))}
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
              <br />e começar a{" "}
              <em style={{ fontStyle: "italic", color: "var(--fg-2)" }}>saber?</em>
            </h2>
            <p style={{ marginTop: 20, color: "var(--fg-2)", maxWidth: 460, margin: "20px auto 0", lineHeight: 1.65 }}>
              Conte sobre sua conta. Se fizer sentido, mando uma proposta em até 48h.
            </p>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-20 border-t border-border">
          <div className="mx-auto max-w-[1200px] px-8">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
              <div>
                <div className="wa-section-eyebrow">
                  <span className="wa-section-eyebrow-dot" />
                  Próximo passo
                </div>
                <h2 className="wa-section-h2" style={{ marginTop: 16 }}>
                  Vamos falar sobre o seu próximo trimestre.
                </h2>
                <p style={{ marginTop: 12, color: "var(--fg-2)", lineHeight: 1.65 }}>
                  Call de 30 min, sem pitch — só conversa direta sobre o que faz sentido para a sua operação.
                </p>
                <ul style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Atendimento direto — sem hand-off para juniores", "Sem decks de template", "Resposta em 1 dia útil"].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, color: "var(--fg-2)" }}>
                      <Check style={{ width: 16, height: 16, color: "var(--wa-blue-500)", flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: 24, fontSize: 14, color: "var(--fg-3)" }}>
                  Prefere email direto?{" "}
                  <a href="mailto:lucaswmguimaraes@gmail.com" style={{ color: "var(--wa-blue-500)" }}>
                    <Mail style={{ width: 13, height: 13, display: "inline", marginRight: 4 }} />
                    lucaswmguimaraes@gmail.com
                  </a>
                </p>
              </div>
              <PortfolioContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
