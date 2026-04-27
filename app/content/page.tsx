"use client"

import { useState } from "react"
import { ArrowRight, Clock, Target, Bot, BarChart3, BookOpen, Play, ChevronLeft, Sparkles, Check } from "lucide-react"
import { Header } from "@/components/wisdom/header"
import { Footer } from "@/components/wisdom/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const ARTICLES = [
  { id: 1, title: "Meta Advantage+ em 2026: o que mudou e o que estamos ajustando nas contas", excerpt: "O novo painel de controle de audience chegou. Três ajustes que fizemos esta semana — e os resultados que estamos vendo no CPL.", category: "Mídia Paga", hue: "blue", readTime: 6, date: "22 Abr" },
  { id: 2, title: "Como usamos Claude para automatizar a operação de campanhas", excerpt: "Relatórios de performance, alertas de anomalia e briefings de criativo — o que delegamos para IA e o que ainda fazemos na mão.", category: "IA para Marketing", hue: "ink", readTime: 5, date: "21 Abr" },
  { id: 3, title: "Performance Max em abril: novos controles e o que os dados estão dizendo", excerpt: "Google liberou novos search themes e brand exclusions. Testamos nas contas e os resultados surpreenderam.", category: "Mídia Paga", hue: "slate", readTime: 8, date: "20 Abr" },
  { id: 4, title: "Apps Script + Google Ads API: automatizamos 5h semanais de relatórios", excerpt: "O script que roda toda segunda e entrega um resumo de performance no Sheets — com alertas de CPL e ROAS fora da faixa.", category: "IA para Marketing", hue: "teal", readTime: 7, date: "19 Abr" },
  { id: 5, title: "Atribuição em 2026: o que ainda funciona depois do fim dos cookies", excerpt: "MMM leve, first-party data e o blend de modelos que estamos usando nas contas com R$200k+/mês.", category: "Funil e Analytics", hue: "deep", readTime: 9, date: "18 Abr" },
  { id: 6, title: "ROAS caindo? As três causas mais comuns em contas B2B e como corrigir", excerpt: "Fadiga de criativo, saturação de audiência ou problema de atribuição — como diferenciar e o que fazer.", category: "Fundamentos", hue: "navy", readTime: 6, date: "17 Abr" },
]

const TOPICS = [
  { name: "IA para profissionais de marketing", icon: Bot, desc: "Prompts, automações e stacks que realmente economizam tempo.", count: 42 },
  { name: "Mídia paga", icon: Target, desc: "Google Ads, Meta Ads, estrutura de conta, testes de criativos.", count: 68 },
  { name: "Funil e analytics", icon: BarChart3, desc: "Atribuição que sobrevive às atualizações do iOS.", count: 31 },
  { name: "Fundamentos", icon: BookOpen, desc: "O glossário em linguagem simples para quem está começando.", count: 24 },
]

function ArticleCard({ article, onClick }: { article: typeof ARTICLES[0]; onClick: () => void }) {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer bg-[var(--bg-2)] border border-[var(--wa-border)] rounded-xl overflow-hidden shadow-[var(--shadow-sm),var(--inset-hairline)] hover:border-[var(--wa-border-strong)] hover:shadow-[var(--shadow-md),var(--inset-hairline)] transition-all duration-200"
    >
      <div className="relative h-40 overflow-hidden">
        <div className={cn("absolute inset-0", `cover-${article.hue}`)} />
        <span style={{ position: "absolute", top: 12, left: 12, fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "rgba(255,255,255,0.9)", background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)", borderRadius: 6, padding: "3px 8px" }}>
          {article.category}
        </span>
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="text-[17px] font-semibold text-[var(--fg-1)] tracking-[-0.01em] leading-[1.35] line-clamp-2 group-hover:text-primary transition-colors">{article.title}</h3>
        <p className="text-[13px] leading-[1.55] text-[var(--fg-3)] line-clamp-2 flex-1">{article.excerpt}</p>
        <div className="flex items-center gap-1.5 text-xs text-[var(--fg-3)] mt-3">
          <Clock className="h-3.5 w-3.5" />
          <span>{article.readTime} min de leitura</span>
          <span className="text-[var(--fg-4)]">·</span>
          <span>{article.date}</span>
        </div>
      </div>
    </article>
  )
}

function ArticleReader({ article, onBack }: { article: typeof ARTICLES[0]; onBack: () => void }) {
  return (
    <article style={{ maxWidth: 720, margin: "0 auto", padding: "48px 32px" }}>
      <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, color: "var(--fg-3)", background: "none", border: "none", cursor: "pointer", marginBottom: 32, fontFamily: "inherit" }}>
        <ChevronLeft style={{ width: 14, height: 14 }} />
        Voltar
      </button>
      <div className="wa-section-eyebrow" style={{ marginBottom: 16 }}>
        <span className="wa-section-eyebrow-dot" />{article.category}
      </div>
      <h1 style={{ fontSize: "clamp(32px,4vw,44px)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.1, color: "var(--fg-1)", margin: "0 0 20px" }}>{article.title}</h1>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg,#1D4ED8,#3B82F6)", border: "1px solid var(--wa-border-strong)", flexShrink: 0 }} />
        <div>
          <strong style={{ display: "block", fontSize: 14, color: "var(--fg-1)" }}>Wisdom Agency</strong>
          <span style={{ fontSize: 12, color: "var(--fg-3)" }}>{article.date} · {article.readTime} min de leitura</span>
        </div>
      </div>
      <div className={cn("h-[260px] rounded-xl mb-8 border border-[var(--wa-border)]", `cover-${article.hue}`)} />
      <p style={{ fontSize: 19, lineHeight: 1.6, color: "var(--fg-2)", marginBottom: 24 }}>{article.excerpt}</p>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: "var(--fg-1)", margin: "28px 0 12px" }}>O framework das três alavancas</h2>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-2)", marginBottom: 16 }}>Toda conta de mídia paga tem as mesmas três alavancas. Quando o desempenho estagna, você quase sempre está super-indexando em uma e ignorando as outras duas.</p>
      <ol style={{ paddingLeft: 20, color: "var(--fg-2)", fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
        <li style={{ marginBottom: 8 }}><strong style={{ color: "var(--fg-1)" }}>Estrutura.</strong> Como campanhas e anúncios são organizados. A alavanca menos sexy e geralmente o maior ganho.</li>
        <li style={{ marginBottom: 8 }}><strong style={{ color: "var(--fg-1)" }}>Criativo.</strong> Os anúncios reais — visual, copy, gancho. A IA ajuda mais aqui, não nos ajustes de lance.</li>
        <li style={{ marginBottom: 8 }}><strong style={{ color: "var(--fg-1)" }}>Sinal.</strong> Quais dados você alimenta no algoritmo. Qualidade de conversão supera quantidade.</li>
      </ol>
      <div style={{ display: "flex", gap: 12, padding: 18, background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.25)", borderRadius: 10, margin: "24px 0", fontSize: 14, lineHeight: 1.55, color: "var(--fg-2)" }}>
        <Sparkles style={{ width: 18, height: 18, color: "var(--wa-blue-300)", marginTop: 2, flexShrink: 0 }} />
        <div><strong style={{ color: "var(--fg-1)" }}>Workflow de IA.</strong> Use o Claude para gerar variantes de criativos e classifique-as com um prompt ajustado à voz da sua marca.</div>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: "var(--fg-1)", margin: "28px 0 12px" }}>Onde iniciantes travam</h2>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-2)" }}>A maioria dos profissionais gasta 80% do tempo ajustando lances e 20% em criativo. Inverta isso. O algoritmo é melhor do que você; seu criativo não é.</p>
    </article>
  )
}

export default function ContentPage() {
  const [selectedArticle, setSelectedArticle] = useState<typeof ARTICLES[0] | null>(null)
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setSubscribed(true); setEmail("") }
  }

  if (selectedArticle) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1"><ArticleReader article={selectedArticle} onBack={() => setSelectedArticle(null)} /></main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 px-8 hero-spotlight">
          <div className="aurora-v2" aria-hidden="true" />
          <div className="dot-grid" aria-hidden="true" />
          <div className="relative max-w-[960px] mx-auto flex flex-col gap-6 items-start z-10">
            <div className="wa-section-eyebrow hero-enter" style={{ animationDelay: "0ms" }}>
              <span className="wa-section-eyebrow-dot" />
              Novo · Playbook semanal
            </div>
            <h1 className="hero-enter" style={{ animationDelay: "80ms", fontSize: "clamp(40px,5vw,68px)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.05, color: "var(--fg-1)", margin: 0 }}>
              Simplifique IA e mídia paga —<br />
              <span className="wa-grad">sem perder as nuances.</span>
            </h1>
            <p className="hero-enter" style={{ animationDelay: "160ms", fontSize: 19, lineHeight: 1.6, color: "var(--fg-2)", maxWidth: 640, margin: 0 }}>
              Playbooks práticos, workflows de IA e análises de campanhas reais. Escrito por operadores gerenciando <strong style={{ color: "var(--fg-1)" }}>R$1M+/mês</strong> em anúncios.
            </p>
            <div className="hero-enter" style={{ animationDelay: "240ms", display: "flex", gap: 12 }}>
              <Button className="magnetic-btn" onClick={() => setSelectedArticle(ARTICLES[0])}>
                Leia o último playbook <ArrowRight className="ml-2 h-4 w-4 arrow-slide" />
              </Button>
              <Button variant="outline">
                <Play className="mr-2 h-4 w-4" /> Assistir intro de 2 min
              </Button>
            </div>
            <div className="hero-enter" style={{ animationDelay: "320ms", display: "flex", alignItems: "center", marginTop: 16, paddingTop: 24, borderTop: "1px solid var(--wa-border)", width: "100%", maxWidth: 560 }}>
              {[["R$1M+", "Investimento/mês"], ["+329%", "Leads YoY"], ["27", "Clientes ativos"]].map(([val, lbl], i) => (
                <div key={lbl} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                  {i > 0 && <div style={{ width: 1, height: 32, background: "var(--wa-border)", marginRight: 20 }} />}
                  <div>
                    <strong style={{ display: "block", fontSize: 22, fontWeight: 800, color: "var(--fg-1)", letterSpacing: "-0.02em" }}>{val}</strong>
                    <span style={{ fontSize: 11, color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{lbl}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Articles */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32 }}>
            <div>
              <div className="wa-section-eyebrow" style={{ marginBottom: 12 }}>
                <span className="wa-section-eyebrow-dot" /> Últimos playbooks
              </div>
              <h2 className="wa-section-h2">Novidades da semana</h2>
            </div>
            <a href="#" style={{ color: "var(--wa-blue-500)", fontSize: 14, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 4 }}>
              Ver todos <ArrowRight style={{ width: 14, height: 14 }} />
            </a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 24 }}>
            {ARTICLES.map((a) => <ArticleCard key={a.id} article={a} onClick={() => { setSelectedArticle(a); window.scrollTo(0, 0) }} />)}
          </div>
        </section>

        {/* Topics */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px 64px" }}>
          <div style={{ marginBottom: 32 }}>
            <div className="wa-section-eyebrow" style={{ marginBottom: 12 }}>
              <span className="wa-section-eyebrow-dot" /> Tópicos
            </div>
            <h2 className="wa-section-h2">Escolha seu caminho</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 20 }}>
            {TOPICS.map((t) => (
              <div key={t.name} style={{ background: "var(--bg-2)", border: "1px solid var(--wa-border)", borderRadius: 12, padding: 24, cursor: "pointer", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ width: 40, height: 40, background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--wa-blue-300)" }}>
                  <t.icon style={{ width: 20, height: 20 }} />
                </div>
                <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--fg-1)", margin: 0 }}>{t.name}</h4>
                <p style={{ fontSize: 13, lineHeight: 1.55, color: "var(--fg-3)", margin: 0, flex: 1 }}>{t.desc}</p>
                <div style={{ fontSize: 12, color: "var(--fg-4)", fontFamily: "var(--font-mono)" }}>{t.count} artigos</div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section style={{ padding: "0 32px 96px" }}>
          <div style={{ position: "relative", background: "var(--bg-2)", border: "1px solid var(--wa-border)", borderRadius: 20, padding: "56px 48px", maxWidth: 900, margin: "0 auto", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(600px 300px at 100% 0%,rgba(59,130,246,0.15),transparent 60%)", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <div className="wa-section-eyebrow" style={{ marginBottom: 12 }}>
                <span className="wa-section-eyebrow-dot" /> The Wisdom Letter
              </div>
              <h2 className="wa-section-h2" style={{ marginBottom: 8 }}>Um playbook. Toda terça. Sem enrolação.</h2>
              <p style={{ fontSize: 15, color: "var(--fg-3)", lineHeight: 1.5, marginBottom: 24 }}>
                Receba um playbook prático de IA + mídia paga toda terça-feira. Cancele em um clique.
              </p>
              {subscribed ? (
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "#86EFAC" }}>
                  <Check style={{ width: 14, height: 14 }} /> Você está dentro. Confira sua caixa de entrada.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: "flex", gap: 8, maxWidth: 480 }}>
                  <Input type="email" placeholder="voce@empresa.com" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1" required />
                  <Button type="submit" className="magnetic-btn">
                    Assinar <ArrowRight className="ml-2 h-4 w-4 arrow-slide" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
