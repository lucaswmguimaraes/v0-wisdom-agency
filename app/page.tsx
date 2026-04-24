import Link from "next/link"
import { ArrowRight, TrendingUp, DollarSign, BarChart3, Target, Bot } from "lucide-react"
import { Header } from "@/components/wisdom/header"
import { Footer } from "@/components/wisdom/footer"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/wisdom/contact-form"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="aurora" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1200px] px-8 py-28 sm:py-36">
            <div className="max-w-3xl">
              <p className="eyebrow mb-5">Growth Marketing · Mídia Paga · IA Aplicada</p>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
                Mídia paga que você<br />
                consegue medir — e que<br />
                realmente converte.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Já gerenciei <strong className="text-foreground">R$1M+/mês</strong> em mídia paga para
                empresas B2B e DTC. Aqui você encontra gestão especializada — ou aprende o que realmente
                funciona, com dados reais.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                <Button asChild size="lg">
                  <a href="#contact">
                    Agendar call de 30 min
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/portfolio">Ver cases →</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1200px] px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
              {[
                {
                  icon: TrendingUp,
                  value: "+329%",
                  label: "Leads gerados",
                  context: "-65% CPL · Nonno App",
                },
                {
                  icon: DollarSign,
                  value: "R$1M+",
                  label: "Investimento/mês gerenciado",
                  context: "Google, Meta e LinkedIn",
                },
                {
                  icon: BarChart3,
                  value: "+85%",
                  label: "Receita YoY",
                  context: "-13% CPA no mesmo período",
                },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-4 px-6 py-8">
                  <stat.icon className="h-5 w-5 text-primary opacity-70 flex-shrink-0" />
                  <div>
                    <div className="text-2xl font-bold text-foreground tracking-tight">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                    <div className="text-xs mt-0.5" style={{ color: "var(--fg-4)" }}>{stat.context}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 border-t border-border">
          <div className="mx-auto max-w-[1200px] px-8">
            <div className="mb-12">
              <p className="eyebrow mb-3">O que faço</p>
              <h2 className="text-3xl font-bold text-foreground">Resultado medido, sem overhead de agência.</h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                Operação enxuta de um especialista sênior — sem camadas de aprovação, sem account
                manager júnior no telefone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-xl bg-card border border-border flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-1">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full border"
                    style={{
                      background: "rgba(59,130,246,0.1)",
                      color: "var(--wa-blue-300)",
                      borderColor: "rgba(59,130,246,0.3)"
                    }}>
                    B2B SaaS · DTC
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">Gestão de Mídia Paga</h3>
                  <p className="text-xs font-medium mb-3" style={{ color: "var(--fg-3)" }}>
                    Google Ads · Meta Ads · LinkedIn Ads
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Estratégia, criação e otimização de campanhas full-funnel. Da segmentação ao CPA.
                    Para quem tem budget R$50k+/mês e precisa de resultado rastreável.
                  </p>
                </div>
                <div className="mt-auto">
                  <Link href="/portfolio"
                    className="flex items-center text-primary text-sm font-medium hover:underline">
                    Ver cases
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="p-8 rounded-xl bg-card border border-border flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-1">
                  <Bot className="h-5 w-5 text-primary" />
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full border"
                    style={{
                      background: "rgba(59,130,246,0.1)",
                      color: "var(--wa-blue-300)",
                      borderColor: "rgba(59,130,246,0.3)"
                    }}>
                    GA4 · GTM · IA
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">Consultoria & IA Aplicada</h3>
                  <p className="text-xs font-medium mb-3" style={{ color: "var(--fg-3)" }}>
                    Workflows · Automação · Analytics
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Tracking (GA4, GTM), atribuição, criativos com IA e estratégia de funil. Para
                    operações que querem usar IA de verdade, não de vitrine.
                  </p>
                </div>
                <div className="mt-auto">
                  <Link href="/content"
                    className="flex items-center text-primary text-sm font-medium hover:underline">
                    Explorar conteúdo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 border-t border-border">
          <div className="mx-auto max-w-[1200px] px-8">
            <div className="max-w-xl">
              <p className="eyebrow mb-3">Próximo passo</p>
              <h2 className="text-3xl font-bold text-foreground">Vamos falar sobre o seu próximo trimestre.</h2>
              <p className="mt-3 text-muted-foreground">
                Aceitando novos projetos. Call de 30 min, sem pitch — só conversa direta sobre o que
                faz sentido para a sua operação.
              </p>
              <div className="mt-8">
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
