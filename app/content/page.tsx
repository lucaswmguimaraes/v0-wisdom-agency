"use client"

import { useState } from "react"
import { ArrowRight, Clock, Mail, Target, Bot, BarChart3, BookOpen, Search, Play, ChevronLeft, Sparkles, Check } from "lucide-react"
import { Header } from "@/components/wisdom/header"
import { Footer } from "@/components/wisdom/footer"
import { Badge } from "@/components/wisdom/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const ARTICLES = [
  { 
    id: 1, 
    title: "As três alavancas que toda conta de mídia paga tem", 
    excerpt: "Estrutura, criativo, sinal — e por que novos profissionais sempre escolhem a errada primeiro.", 
    category: "Mídia Paga", 
    hue: "blue", 
    readTime: 6, 
    date: "18 Abr" 
  },
  { 
    id: 2, 
    title: "Um prompt de GPT-4 que classifica seus criativos do Meta", 
    excerpt: "Usamos isso semanalmente para filtrar mais de 40 variantes. Copie, ajuste e publique anúncios melhores.", 
    category: "IA para Marketing", 
    hue: "ink", 
    readTime: 4, 
    date: "15 Abr" 
  },
  { 
    id: 3, 
    title: "Atribuição pós-iOS — o que ainda funciona de verdade", 
    excerpt: "O debate MMM/MTA é uma distração. Veja o que rastreamos no Q2 2026 e por quê.", 
    category: "Funil e Analytics", 
    hue: "slate", 
    readTime: 8, 
    date: "11 Abr" 
  },
  { 
    id: 4, 
    title: "ROAS, CAC, LTV — os três números explicados de forma simples", 
    excerpt: "Para quem já concordou em uma reunião e pesquisou as definições depois. Sem vergonha.", 
    category: "Fundamentos", 
    hue: "deep", 
    readTime: 5, 
    date: "8 Abr" 
  },
  { 
    id: 5, 
    title: "Automatizando revisões semanais de campanhas com n8n + GPT", 
    excerpt: "Substitua seu ritual de relatórios de segunda-feira por um resumo no Slack que captura mais do que você.", 
    category: "IA para Marketing", 
    hue: "teal", 
    readTime: 7, 
    date: "4 Abr" 
  },
  { 
    id: 6, 
    title: "Estrutura de conta Google Ads para marcas DTC", 
    excerpt: "A combinação Performance Max + busca de marca que está carregando a maioria das contas silenciosamente.", 
    category: "Mídia Paga", 
    hue: "navy", 
    readTime: 9, 
    date: "1 Abr" 
  },
]

const TOPICS = [
  { name: "IA para profissionais de marketing", icon: Bot, desc: "Prompts, automações e stacks de ferramentas que realmente economizam tempo.", count: 42 },
  { name: "Mídia paga", icon: Target, desc: "Google Ads, Meta Ads, estrutura de conta, testes de criativos.", count: 68 },
  { name: "Funil e analytics", icon: BarChart3, desc: "Atribuição que sobrevive às atualizações do iOS. Modelagem de LTV.", count: 31 },
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
        <Badge tone="info" className="absolute top-3 left-3 backdrop-blur-lg">{article.category}</Badge>
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="text-[17px] font-semibold text-[var(--fg-1)] tracking-[-0.01em] leading-[1.35] line-clamp-2 group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        <p className="text-[13px] leading-[1.55] text-[var(--fg-3)] line-clamp-2 flex-1">
          {article.excerpt}
        </p>
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
    <article className="max-w-[720px] mx-auto px-8 py-12">
      <button 
        onClick={onBack}
        className="flex items-center gap-1 text-[13px] text-[var(--fg-3)] hover:text-[var(--fg-1)] transition-colors mb-8 bg-transparent border-none cursor-pointer font-sans"
      >
        <ChevronLeft className="h-3.5 w-3.5" />
        Voltar
      </button>
      
      <div className="flex flex-col gap-4 mb-8">
        <Badge tone="info">{article.category}</Badge>
        <h1 className="text-[44px] font-bold tracking-[-0.025em] leading-[1.1] text-[var(--fg-1)]">
          {article.title}
        </h1>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1D4ED8] to-[#3B82F6] border border-[var(--wa-border-strong)]" />
          <div>
            <strong className="block text-sm text-[var(--fg-1)]">Wisdom Agency</strong>
            <span className="text-xs text-[var(--fg-3)]">{article.date} · {article.readTime} min de leitura</span>
          </div>
        </div>
      </div>
      
      <div className={cn("h-[280px] rounded-xl mb-8 border border-[var(--wa-border)]", `cover-${article.hue}`)} />
      
      <div className="reader-body">
        <p className="text-[19px] leading-[1.6] text-[var(--fg-2)] mb-6">
          {article.excerpt}
        </p>
        
        <h2 className="text-2xl font-semibold tracking-[-0.015em] text-[var(--fg-1)] mt-8 mb-3">O framework das três alavancas</h2>
        <p className="text-base leading-[1.7] text-[var(--fg-2)] mb-4">
          Toda conta de mídia paga — Google, Meta, TikTok — tem as mesmas três alavancas. Quando o desempenho estagna, você quase sempre está super-indexando em uma e ignorando as outras duas.
        </p>
        <ol className="pl-6 text-[var(--fg-2)] text-base leading-[1.7] list-decimal">
          <li className="mb-2.5"><strong className="text-[var(--fg-1)] font-semibold">Estrutura.</strong> Como campanhas, conjuntos de anúncios e anúncios são organizados. A alavanca menos sexy e geralmente o maior ganho.</li>
          <li className="mb-2.5"><strong className="text-[var(--fg-1)] font-semibold">Criativo.</strong> Os anúncios reais — visual, copy, gancho. A IA ajuda mais aqui, não nos ajustes de lance.</li>
          <li className="mb-2.5"><strong className="text-[var(--fg-1)] font-semibold">Sinal.</strong> Quais dados você alimenta o algoritmo. Qualidade de conversão supera quantidade de conversão sempre.</li>
        </ol>
        
        <div className="flex gap-3 p-[18px] bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.25)] rounded-[10px] my-6 text-sm leading-[1.55] text-[var(--fg-2)]">
          <Sparkles className="h-[18px] w-[18px] text-[var(--wa-blue-300)] mt-0.5 flex-shrink-0" />
          <div>
            <strong className="text-[var(--fg-1)]">Workflow de IA.</strong> Use o GPT-4 para gerar 15 variantes de criativos, depois classifique-as com um prompt de pontuação ajustado à voz da sua marca. Publique as 3 melhores.
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold tracking-[-0.015em] text-[var(--fg-1)] mt-8 mb-3">Onde iniciantes travam</h2>
        <p className="text-base leading-[1.7] text-[var(--fg-2)]">
          A maioria dos novos profissionais de marketing gasta 80% do tempo ajustando lances e 20% em criativo. Inverta isso. O algoritmo de lance é melhor do que você; seu criativo não é.
        </p>
      </div>
    </article>
  )
}

export default function ContentPage() {
  const [selectedArticle, setSelectedArticle] = useState<typeof ARTICLES[0] | null>(null)
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
    }
  }

  if (selectedArticle) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <ArticleReader 
            article={selectedArticle} 
            onBack={() => setSelectedArticle(null)} 
          />
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 px-8">
          <div className="aurora" />
          <div className="relative max-w-[900px] mx-auto flex flex-col gap-6 items-start">
            <Badge tone="info" dot>Novo · Playbook semanal</Badge>
            <h1 className="text-[68px] font-bold tracking-[-0.025em] leading-[1.02] text-[var(--fg-1)] m-0">
              Simplifique IA e mídia paga —<br />
              <span className="text-[var(--fg-3)] font-semibold">sem perder as nuances.</span>
            </h1>
            <p className="text-[19px] leading-[1.6] text-[var(--fg-2)] max-w-[640px] m-0">
              Playbooks práticos, workflows de IA e análises de campanhas para profissionais de marketing que preferem entregar do que teorizar. Escrito por operadores gerenciando +R$5M/mês em investimento em anúncios.
            </p>
            <div className="flex gap-3">
              <Button 
                className="bg-[var(--wa-blue-500)] hover:bg-[var(--wa-blue-600)] text-white shadow-[0_0_0_1px_#2A3340,0_6px_20px_rgba(59,130,246,0.3),var(--inset-hairline-strong)]"
                onClick={() => setSelectedArticle(ARTICLES[0])}
              >
                Leia o último playbook
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="ghost" className="text-[var(--fg-2)] hover:text-[var(--fg-1)] hover:bg-[var(--wa-surface-1)]">
                <Play className="mr-2 h-4 w-4" />
                Assistir intro de 2 min
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-4 pt-6 border-t border-[var(--wa-border)] w-full max-w-[640px]">
              <div className="flex flex-col gap-0.5">
                <strong className="text-[22px] font-bold text-[var(--fg-1)] tracking-[-0.02em]">+329%</strong>
                <span className="text-xs text-[var(--fg-3)] tracking-[0.04em] uppercase">Leads YoY</span>
              </div>
              <div className="w-px h-8 bg-[var(--wa-border)]" />
              <div className="flex flex-col gap-0.5">
                <strong className="text-[22px] font-bold text-[var(--fg-1)] tracking-[-0.02em]">R$5M+</strong>
                <span className="text-xs text-[var(--fg-3)] tracking-[0.04em] uppercase">Investimento mensal</span>
              </div>
              <div className="w-px h-8 bg-[var(--wa-border)]" />
              <div className="flex flex-col gap-0.5">
                <strong className="text-[22px] font-bold text-[var(--fg-1)] tracking-[-0.02em]">14</strong>
                <span className="text-xs text-[var(--fg-3)] tracking-[0.04em] uppercase">Clientes B2B</span>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="max-w-[1200px] mx-auto py-16 px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--fg-accent)] mb-3">Últimos playbooks</div>
              <h2 className="text-[32px] font-bold tracking-[-0.02em] text-[var(--fg-1)] m-0">Novidades da semana</h2>
            </div>
            <a href="#" className="text-[var(--fg-accent)] text-sm font-medium inline-flex items-center gap-1.5 hover:text-[var(--wa-blue-300)]">
              Ver todos <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map((article) => (
              <ArticleCard 
                key={article.id} 
                article={article} 
                onClick={() => {
                  setSelectedArticle(article)
                  window.scrollTo(0, 0)
                }}
              />
            ))}
          </div>
        </section>

        {/* Topics Section */}
        <section className="max-w-[1200px] mx-auto py-16 px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--fg-accent)] mb-3">Tópicos</div>
              <h2 className="text-[32px] font-bold tracking-[-0.02em] text-[var(--fg-1)] m-0">Escolha seu caminho</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TOPICS.map((topic) => (
              <div 
                key={topic.name}
                className="bg-[var(--bg-2)] border border-[var(--wa-border)] rounded-xl p-6 shadow-[var(--shadow-sm),var(--inset-hairline)] hover:border-[var(--wa-border-strong)] hover:shadow-[var(--shadow-md),var(--inset-hairline)] transition-all cursor-pointer flex flex-col gap-3"
              >
                <div className="w-10 h-10 bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.25)] rounded-[10px] flex items-center justify-center text-[var(--wa-blue-300)]">
                  <topic.icon className="h-[22px] w-[22px]" />
                </div>
                <h4 className="text-base font-semibold text-[var(--fg-1)] m-0">{topic.name}</h4>
                <p className="text-[13px] leading-[1.55] text-[var(--fg-3)] m-0 flex-1">{topic.desc}</p>
                <div className="text-xs text-[var(--fg-4)] font-mono">{topic.count} artigos</div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-10 px-8 pb-24">
          <div className="relative bg-[var(--bg-2)] border border-[var(--wa-border)] rounded-2xl p-12 shadow-[var(--shadow-md),var(--inset-hairline)] max-w-[900px] mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_100%_0%,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none" />
            <div className="relative">
              <div className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--fg-accent)] mb-2">The Wisdom Letter</div>
              <h2 className="text-[30px] font-bold tracking-[-0.02em] text-[var(--fg-1)] mb-2">Um playbook. Toda terça. Sem enrolação.</h2>
              <p className="text-[15px] text-[var(--fg-3)] leading-[1.5] mb-5">
                Junte-se a mais de 12.400 profissionais de marketing recebendo um playbook prático de IA + mídia paga na caixa de entrada. Cancele em um clique.
              </p>
              
              {subscribed ? (
                <div className="inline-flex items-center gap-1.5 text-[13px] text-[#86EFAC]">
                  <Check className="h-3.5 w-3.5" />
                  Você está dentro. Confira sua caixa de entrada.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-[480px]">
                  <Input
                    type="email"
                    placeholder="voce@empresa.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-[var(--wa-surface-1)] border-[var(--wa-border)] text-[var(--fg-1)] placeholder:text-[var(--fg-4)] focus:border-[var(--wa-blue-500)] focus:ring-[3px] focus:ring-[rgba(59,130,246,0.35)]"
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-[var(--wa-blue-500)] hover:bg-[var(--wa-blue-600)] text-white shadow-[0_0_0_1px_#2A3340,0_6px_20px_rgba(59,130,246,0.3),var(--inset-hairline-strong)]"
                  >
                    Assinar
                    <ArrowRight className="ml-2 h-4 w-4" />
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
