import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Logo } from "./logo"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Logo className="h-10 w-auto" />
            <p className="mt-4 text-muted-foreground max-w-sm">
              Marketing de performance, engenheirado.
            </p>
          </div>
          
          <div className="md:text-right">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Vamos falar sobre o Q3.
            </h3>
            <Button asChild>
              <Link href="/portfolio#contact">
                Agendar call de 30 min
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <span>&copy; 2026 Wisdom Agency</span>
          <span>São Paulo - Remote-first</span>
        </div>
      </div>
    </footer>
  )
}
