"use client"

import { useRef, useState } from "react"
import { ArrowRight, TrendingUp, DollarSign, BarChart3, Star, Target, Bot, Layers, Check, ChevronLeft } from "lucide-react"
import { Header } from "@/components/wisdom/header"
import { Footer } from "@/components/wisdom/footer"
import { Badge } from "@/components/wisdom/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TiltCard } from "@/components/wisdom/tilt-card"
import { useCursorSpotlight } from "@/hooks/use-cursor-spotlight"
import { cn } from "@/lib/utils"

const CASES = [
  {
    id: 1,
    client: "Fintech B2B",
    industry: "Fintech",
    headline: "+329% de leads em 90 dias",
    desc: "Reestruturamos a conta Google com segmentação limpa entre marca, não-marca e Pmax. Automatizamos os relatórios de performance com Apps Script. R$1M+/mês de investimento.",
    metrics: [["+329%", "Leads"], ["-65%", "CPL"], ["2.9x", "ROAS"]],
    hue: "navy",
  },
  {
    id: 2,
    client: "App Educacional",
    industry: "Edtech",
    headline: "+85% de receita, 2.3M acessos/mês",
    desc: "Rebuild completo da estratégia de aquisição. Integração de canais pagos com orgânico. Escala para 2,3M de acessos mensais e 28% de market share educacional.",
    metrics: [["+85%", "Receita"], ["-13%", "CPA YoY"], ["28%", "Market share"]],
    hue: "blue",
  },
  {
    id: 3,
    client: "SaaS B2B",
    industry: "B2B SaaS",
    headline: "+30.000 leads/mês integrando paid + orgânico",
    desc: "Estrutura de funil completo: paid search, Meta, LinkedIn + email lifecycle. Workflows de IA para qualificação de leads e personalização de outbound.",
    metrics: [["+30k", "Leads/mês"], ["3 canais", "Integrados"], ["R$1M+", "Gerenciados"]],
    hue: "ink",
  },
]

const SERVICES = [
  {
    icon: Target,
    title: "Gestão de mídia paga",
    desc: "Google Ads, Meta Ads, LinkedIn, TikTok. Estrutura de conta, testes de criativos, estratégia de lances, pacing de budget. Syncs semanais, Slack sempre ativo.",
  },
  {
    icon: Bot,
    title: "Workflows de IA",
    desc: "Automatizo relatórios de campanhas e mídia com Apps Script e construo automações de operação com Claude — do report de performance ao outbound personalizado. Workflows que são seus.",
  },
  {
    icon: Layers,
    title: "Estratégia full-funnel",
    desc: "Anúncios são a última milha. Mapeio sua oferta, experiência de landing, lifecycle e atribuição para que paid realmente componha em vez de vazar.",
  },
]

const PROCESS = [
  { n: "01", title: "Semana de auditoria", desc: "Auditoria completa de conta + funil. Até o fim da semana 1, você tem um diagnóstico escrito e um plano de 90 dias." },
  { n: "02", title: "Reconstrução", desc: "Estrutura de conta, sistema de criativos, mensuração. Não otimizo fundações quebradas." },
  { n: "03", title: "Escala", desc: "Experimentos semanais, revisões estratégicas mensais. Critérios claros de win/kill em cada teste." },
  { n: "04", title: "Compor", desc: "Roadmap trimestral ligado às suas metas de receita. Cada real ou gera retorno ou é cortado." },
]

function CaseDetail({ caseItem, onBack }: { caseItem: typeof CASES[0]; onBack: () => void }) {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button
        onClick={onBack}
        className="flex items-center gap-1 text-[13px] text-[var(--fg-3)] hover:text-[var(--fg-1)] transition-colors mb-8 bg-transparent border-none cursor-pointer font-sans"
      >
        <ChevronLeft className="h-3.5 w-3.5" />
        Voltar para cases
      </button>

      <div className="flex items-center gap-3 mb-4">
        <Badge tone="neutral">{caseItem.industry}</Badge>
        <span className="text-muted-foreground">{caseItem.client}</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{caseItem.headline}</h1>
      <p className="text-lg text-muted-foreground mb-8">{caseItem.desc}</p>

      <div className={cn("aspect-[21/9] rounded-xl mb-8", `cover-${caseItem.hue}`)} />

      <div className="grid grid-cols-3 gap-4 mb-12">
        {caseItem.metrics.map(([value, label]) => (
          <div key={label} className="p-4 rounded-xl bg-card border border-border text-center">
            <div className="text-2xl font-bold text-primary">{value}</div>
            <div className="text-sm text-muted-foreground">{label}</div>
          </div>
        ))}
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">O briefing</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Uma conta de anúncios no piloto automático por mais de 1 ano. Performance Max canibalizando
          busca de marca; criativos do Meta sem atualização. Nenhuma segmentação clara entre
          campanhas.
        </p>
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">O que fizemos</h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
          <li>Reconstruimos a conta com segmentação limpa: marca / não-marca / Pmax com listas negativas entre elas.</li>
          <li>Lançamos sprint de criativos semanal com automações em Apps Script para geração e classificação de variantes.</li>
          <li>Substituímos atribuição last-click por blend de first-touch + position-based no GA4.</li>
        </ol>
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Onde chegamos</h2>
        <p className="text-muted-foreground leading-relaxed">
          Em 90 dias, o CPL caiu 65% e o volume de leads triplicou. Os resultados se mantiveram
          nos trimestres seguintes com experimentos semanais.
        </p>
      </div>
    </article>
  )
}

function PortfolioContactForm() {
  const [form, setForm] = useState({ name: "", email: "", spend: "R$1k – R$20k", message: "" })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
    } catch {
      // silent fail
    } finally {
      setLoading(false)
      setSent(true)
    }
  }

  return (
    <section id="contact" className="py-20 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Vamos conversar</p>
            <h2 className="text-3xl font-bold text-foreground mb-4">Agende uma call de 30 min.</h2>
            <p className="text-muted-foreground mb-6">
              Conte-me sobre sua conta. Se formos um fit, envio uma proposta de auditoria escrita em
              48h. Se não, indico alguém que seja.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Atendo pessoalmente — sem hand-offs para juniores",
                "Sem decks de template",
                "Resposta em 1 dia útil",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground">
              Preferês email direto?{" "}
              <a
                href="mailto:lucaswmguimaraes@gmail.com"
                className="text-primary hover:text-[var(--wa-blue-300)] transition-colors"
              >
                lucaswmguimaraes@gmail.com
              </a>
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            {sent ? (
              <div className="text-center py-8">
                <div className="inline-flex p-3 rounded-full bg-green-500/10 mb-4">
                  <Check className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Recebido.</h3>
                <p className="text-muted-foreground">Você terá notícias em um dia útil.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Seu nome</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Maria Silva"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">E-mail</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="maria@empresa.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Investimento mensal em anúncios</label>
                  <select
                    value={form.spend}
                    onChange={(e) => setForm({ ...form, spend: e.target.value })}
                    className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option>R$1k – R$20k</option>
                    <option>R$20k – R$50k</option>
                    <option>R$50k – R$250k</option>
                    <option>R$250k – R$1M</option>
                    <option>R$1M – R$5M</option>
                    <option>R$5M+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">O que você está tentando resolver?</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="CPA subiu 40% desde a atualização do iOS, e Performance Max está comendo busca de marca..."
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Enviando..." : "Enviar"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function PortfolioPage() {
  const [selectedCase, setSelectedCase] = useState<(typeof CASES)[0] | null>(null)
  const heroRef = useRef<HTMLElement>(null)
  useCursorSpotlight(heroRef)

  if (selectedCase) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <CaseDetail caseItem={selectedCase} onBack={() => setSelectedCase(null)} />
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section ref={heroRef} className="relative overflow-hidden hero-spotlight">
          <div className="aurora-v2" aria-hidden="true" />
          <div className="dot-grid" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 z-10">
            <div className="max-w-3xl">
              <Badge tone="info">Aceitando novos clientes agora</Badge>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground hero-enter" style={{ animationDelay: "0ms" }}>
                Mídia paga, feita do <span className="text-gradient">jeito certo.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl hero-enter" style={{ animationDelay: "120ms" }}>
                Especialista sênior com experiência de{" "}
                <strong className="text-foreground">R$1M+/mês</strong> em investimento de anúncios
                para marcas B2B e DTC. Atendo cada conta pessoalmente — sem hand-offs, sem decks
                genéricos.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 hero-enter" style={{ animationDelay: "240ms" }}>
                <Button size="lg" asChild className="magnetic-btn">
                  <a href="#contact">
                    Agende uma call de 30 min
                    <ArrowRight className="ml-2 h-5 w-5 arrow-slide" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#cases">Ver cases de sucesso</a>
                </Button>
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 rounded-2xl border border-border bg-[var(--bg-2)] overflow-hidden shadow-[var(--shadow-md),var(--inset-hairline)]">
              {[
                { icon: TrendingUp, value: "+329%", label: "Leads YoY, resultado real de cliente" },
                { icon: DollarSign, value: "+85%", label: "Crescimento de receita YoY" },
                { icon: BarChart3, value: "R$1M+", label: "Investimento mensal gerenciado" },
                { icon: Star, value: "5+", label: "Anos em growth & performance" },
              ].map((metric, idx) => (
                <div
                  key={metric.label}
                  className={cn("flex items-center gap-3.5 p-6", idx < 3 && "border-r border-border")}
                >
                  <metric.icon className="h-5 w-5 text-[var(--wa-blue-300)] opacity-80 flex-shrink-0" />
                  <div>
                    <div className="text-2xl font-bold text-foreground tracking-tight">{metric.value}</div>
                    <div className="text-xs text-muted-foreground tracking-wide">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Serviços</p>
              <h2 className="text-3xl font-bold text-foreground">Três coisas. Feitas com alto padrão.</h2>
              <p className="mt-3 text-muted-foreground">
                Deliberadamente não faço SEO, gestão de redes sociais, influencer ou PR. Isso me
                mantém afiado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {SERVICES.map((service) => (
                <TiltCard key={service.title} intensity={5}>
                  <div
                    className="bg-[var(--bg-2)] border border-border rounded-xl p-7 shadow-[var(--shadow-sm),var(--inset-hairline)] hover:border-[var(--wa-border-strong)] transition-all flex flex-col gap-3 h-full relative z-[2]"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div
                      className="w-11 h-11 rounded-[10px] bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.25)] flex items-center justify-center mb-1"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      <service.icon className="h-5 w-5 text-[var(--wa-blue-300)]" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground tracking-tight" style={{ transform: "translateZ(16px)" }}>{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
                    <a
                      href="#contact"
                      className="inline-flex items-center text-sm text-primary font-medium hover:text-[var(--wa-blue-300)] transition-colors gap-1.5"
                      style={{ transform: "translateZ(24px)" }}
                    >
                      Saiba mais
                      <ArrowRight className="h-4 w-4 arrow-slide" />
                    </a>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="cases" className="py-20 border-t border-border bg-card/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Cases</p>
              <h2 className="text-3xl font-bold text-foreground">Provas, não promessas.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CASES.map((caseItem) => (
                <TiltCard key={caseItem.id} intensity={6}>
                  <div
                    className="group cursor-pointer bg-background rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all h-full relative z-[2]"
                    style={{ transformStyle: "preserve-3d" }}
                    onClick={() => {
                      setSelectedCase(caseItem)
                      window.scrollTo(0, 0)
                    }}
                  >
                    <div className={cn("aspect-[16/9] relative", `cover-${caseItem.hue}`)}>
                      <div className="absolute bottom-4 left-4 flex items-center gap-2" style={{ transform: "translateZ(30px)" }}>
                        <Badge tone="neutral">{caseItem.industry}</Badge>
                        <span className="text-sm text-white/80">{caseItem.client}</span>
                      </div>
                    </div>
                    <div className="p-5" style={{ transform: "translateZ(16px)" }}>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {caseItem.headline}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{caseItem.desc}</p>
                      <div className="mt-4 flex gap-4">
                        {caseItem.metrics.map(([value, label]) => (
                          <div key={label}>
                            <div className="text-sm font-bold text-primary">{value}</div>
                            <div className="text-xs text-muted-foreground">{label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center text-sm text-primary">
                        Ver o case completo
                        <ArrowRight className="ml-1 h-4 w-4 arrow-slide group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Processo</p>
              <h2 className="text-3xl font-bold text-foreground">Como trabalho.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {PROCESS.map((step) => (
                <TiltCard key={step.n} intensity={4} glow={false}>
                  <div className="bg-[var(--bg-2)] border border-border rounded-xl p-6 shadow-[var(--inset-hairline)] flex flex-col gap-2.5 h-full relative z-[2]">
                    <span className="font-mono text-sm text-[var(--wa-blue-300)] tracking-wide">{step.n}</span>
                    <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 border-t border-border bg-card/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="relative bg-[var(--bg-2)] border border-border rounded-2xl p-10 md:p-14 shadow-[var(--shadow-md),var(--inset-hairline)] overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(500px_260px_at_100%_0%,rgba(59,130,246,0.12),transparent_60%)]" />
              <blockquote className="relative text-xl md:text-2xl text-foreground leading-snug font-medium tracking-tight mb-8">
                {`"Reestruturou nossa conta de anúncios em duas semanas e dobrou nosso pipeline em dois meses. Toda pergunta respondida em menos de uma hora por quem realmente entende da operação."`}
              </blockquote>
              <div className="relative flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1D4ED8] to-[#3B82F6] border border-[var(--wa-border-strong)]" />
                <div>
                  <div className="text-sm font-semibold text-foreground">Cliente B2B SaaS</div>
                  <div className="text-xs text-muted-foreground">VP de Growth</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PortfolioContactForm />
      </main>

      <Footer />
    </div>
  )
}
