"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, TrendingUp, DollarSign, BarChart3, Target, Bot } from "lucide-react"
import { Header } from "@/components/wisdom/header"
import { Footer } from "@/components/wisdom/footer"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/wisdom/contact-form"
import { ServiceCard } from "@/components/wisdom/service-card"
import { AnimatedStat } from "@/components/wisdom/animated-stat"
import { FloatingDashboard } from "@/components/wisdom/floating-dashboard"
import { IsoGrid } from "@/components/wisdom/iso-grid"
import { Marquee } from "@/components/wisdom/marquee"
import { useCursorSpotlight } from "@/hooks/use-cursor-spotlight"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useMagnetic } from "@/hooks/use-magnetic"

export default function LandingPage() {
  const heroRef = useRef<HTMLElement>(null)
  useCursorSpotlight(heroRef)

  const ctaRef = useRef<HTMLAnchorElement>(null)
  useMagnetic(ctaRef, 0.2, 100)

  const servicesReveal = useScrollReveal()
  const contactReveal = useScrollReveal()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section
          ref={heroRef}
          className="relative overflow-hidden hero-spotlight"
        >
          <IsoGrid />
          <div className="aurora-v2" aria-hidden="true" />
          <div className="dot-grid" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1200px] px-8 py-28 sm:py-36 z-10">
            <div className="hero-grid">
              <div>
                <p className="eyebrow mb-5 hero-enter" style={{ animationDelay: "0ms" }}>
                  Growth Marketing · Mídia Paga · IA Aplicada
                </p>
                <h1
                  className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground leading-[1.05] hero-enter"
                  style={{ animationDelay: "80ms" }}
                >
                  Mídia paga que você<br />
                  consegue medir — e que<br />
                  <span className="text-gradient">realmente converte.</span>
                </h1>
                <p
                  className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed hero-enter"
                  style={{ animationDelay: "160ms" }}
                >
                  Já gerenciei <strong className="text-foreground">R$1M+/mês</strong> em mídia paga para
                  empresas B2B e DTC. Aqui você encontra gestão especializada — ou aprende o que realmente
                  funciona, com dados reais.
                </p>
                <div
                  className="mt-10 flex flex-col sm:flex-row items-start gap-4 hero-enter"
                  style={{ animationDelay: "240ms" }}
                >
                  <Button asChild size="lg" className="magnetic-btn">
                    <a ref={ctaRef} href="#contact">
                      Agendar call de 30 min
                      <ArrowRight className="ml-2 h-5 w-5 arrow-slide" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/portfolio">Ver cases →</Link>
                  </Button>
                </div>
              </div>

              <div className="hero-enter" style={{ animationDelay: "320ms" }}>
                <FloatingDashboard />
              </div>
            </div>
          </div>

          {/* Stack marquee */}
          <div className="relative z-10 border-t border-border">
            <Marquee
              items={[
                "Google Ads",
                "Meta Ads",
                "LinkedIn Ads",
                "GA4",
                "GTM",
                "Looker Studio",
                "Apps Script",
                "Supabase",
                "Claude",
                "n8n",
              ]}
              speed={50}
            />
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1200px] px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
              <AnimatedStat
                prefix="+"
                value={329}
                suffix="%"
                label="Leads gerados"
                context="-65% CPL · Nonno App"
                icon={<TrendingUp className="h-5 w-5" />}
              />
              <AnimatedStat
                prefix="R$"
                value={1}
                suffix="M+/mês"
                label="Investimento gerenciado"
                context="Google, Meta e LinkedIn"
                icon={<DollarSign className="h-5 w-5" />}
              />
              <AnimatedStat
                prefix="+"
                value={85}
                suffix="%"
                label="Receita YoY"
                context="-13% CPA no mesmo período"
                icon={<BarChart3 className="h-5 w-5" />}
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          ref={servicesReveal.ref as React.RefObject<HTMLElement>}
          className="py-20 border-t border-border section-reveal"
          style={{
            opacity: servicesReveal.visible ? 1 : 0,
            transform: servicesReveal.visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 600ms cubic-bezier(0.2,0,0,1), transform 600ms cubic-bezier(0.2,0,0,1)",
          }}
        >
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
              <ServiceCard
                icon={<Target className="h-5 w-5" />}
                badge="B2B SaaS · DTC"
                title="Gestão de Mídia Paga"
                subtitle="Google Ads · Meta Ads · LinkedIn Ads"
                description="Estratégia, criação e otimização de campanhas full-funnel. Da segmentação ao CPA. Para quem tem budget R$50k+/mês e precisa de resultado rastreavel."
                ctaLabel="Ver cases"
                ctaHref="/portfolio"
              />
              <ServiceCard
                icon={<Bot className="h-5 w-5" />}
                badge="GA4 · GTM · IA"
                title="Consultoria & IA Aplicada"
                subtitle="Workflows · Automação · Analytics"
                description="Tracking (GA4, GTM), atribuição, criativos com IA e estratégia de funil. Para operações que querem usar IA de verdade, não de vitrine."
                ctaLabel="Explorar conteúdo"
                ctaHref="/content"
              />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          ref={contactReveal.ref as React.RefObject<HTMLElement>}
          className="py-20 border-t border-border section-reveal"
          style={{
            opacity: contactReveal.visible ? 1 : 0,
            transform: contactReveal.visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 600ms 100ms cubic-bezier(0.2,0,0,1), transform 600ms 100ms cubic-bezier(0.2,0,0,1)",
          }}
        >
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
