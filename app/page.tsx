import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/wisdom/header"
import { Footer } from "@/components/wisdom/footer"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="aurora" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
                Wisdom Agency
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Simplificando IA e Mídia Paga para marcas B2B e DTC que querem crescer de verdade.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/portfolio">
                    Comece Agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/content">
                    Ver Conteúdos
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link 
                href="/portfolio" 
                className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  Portfólio
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Veja nossos cases de sucesso, serviços e como trabalhamos com clientes B2B e DTC.
                </p>
                <div className="mt-4 flex items-center text-primary">
                  <span className="text-sm font-medium">Ver portfólio</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link 
                href="/content" 
                className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  Conteúdo
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Artigos, guias e insights sobre mídia paga, IA para marketing e estratégia de crescimento.
                </p>
                <div className="mt-4 flex items-center text-primary">
                  <span className="text-sm font-medium">Ver artigos</span>
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
