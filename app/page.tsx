import Link from "next/link"
import { ArrowRight, TrendingUp, DollarSign, BarChart3 } from "lucide-react"
import { Header } from "@/components/wisdom/header"
import { Footer } from "@/components/wisdom/footer"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="aurora" />
          <div className="relative mx-auto max-w-[1200px] px-8 py-28 sm:py-36">
            <div className="max-w-3xl">
              <p className="eyebrow mb-5">Growth Marketing + IA Aplicada</p>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
                Marketing que você<br />
                consegue medir.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Já gerenciei <strong className="text-foreground">R$1M+/mês</strong> em mídia paga e
                compartilho o que realmente funciona — com dados, sem enrolação.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                <Button asChild size="lg">
                  <Link href="/portfolio">
                    Ver serviços e cases
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/content">Explorar conteúdo</Link>
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
                { icon: TrendingUp, value: "+329%", label: "Leads gerados para clientes" },
                { icon: DollarSign, value: "R$1M+", label: "Investimento mensal gerenciado" },
                { icon: BarChart3, value: "+85%", label: "Crescimento de receita YoY" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-4 px-6 py-8">
                  <stat.icon className="h-5 w-5 text-primary opacity-70 flex-shrink-0" />
                  <div>
                    <div className="text-2xl font-bold text-foreground tracking-tight">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Two paths */}
        <section className="py-20 border-t border-border">
          <div className="mx-auto max-w-[1200px] px-8">
            <div className="mb-12">
              <p className="eyebrow mb-3">Dois caminhos</p>
              <h2 className="text-3xl font-bold text-foreground">Contrate. Ou aprenda.</h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                Empresa que precisa de resultados em paid media, ou profissional querendo aprender com
                quem faz — tem espaço aqui para você.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/portfolio"
                className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col gap-4"
              >
                <div>
                  <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    Portfólio & Serviços
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Gestão de mídia paga, estratégia full-funnel e workflows de IA para B2B e DTC.
                    Cases com números reais.
                  </p>
                </div>
                <div className="flex items-center text-primary text-sm font-medium mt-auto">
                  Ver portfólio
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="/content"
                className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col gap-4"
              >
                <div>
                  <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    Conteúdo
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Guias práticos sobre IA no marketing e mídia paga. Para profissionais que querem
                    aprender o que realmente funciona.
                  </p>
                </div>
                <div className="flex items-center text-primary text-sm font-medium mt-auto">
                  Ver artigos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
