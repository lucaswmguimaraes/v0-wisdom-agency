import Link from "next/link"
import { ArrowRight, Linkedin, Instagram } from "lucide-react"
import { Logo } from "./logo"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-border" style={{ background: "var(--bg-0, #07090D)" }}>
      <div className="mx-auto max-w-[1200px] px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <Logo className="h-10 w-auto" />
            <p className="mt-4 text-muted-foreground max-w-sm text-sm leading-relaxed">
              Performance marketing com precisão analítica e IA aplicada.
              Mídia paga que gera resultado medido.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/wisdom-agency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn da Wisdom Agency"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/wisdom.agc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram @wisdom.agc"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <h3 className="text-base font-semibold text-foreground mb-2">
              Vamos falar sobre o Q3.
            </h3>
            <p className="text-sm text-muted-foreground mb-4">Aceitando novos clientes.</p>
            <Button asChild>
              <a href="/#contact">
                Agendar call de 30 min
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <span>&copy; 2026 Wisdom Agency &middot; Lucas Guimarães</span>
          <span>Sorocaba, SP &middot; Remote-first</span>
        </div>
      </div>
    </footer>
  )
}
