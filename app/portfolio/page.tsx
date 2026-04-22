"use client"

import { useState } from "react"
import { ArrowRight, TrendingUp, DollarSign, BarChart3, Star, Target, Bot, Layers, Check, Play } from "lucide-react"
import { Header } from "@/components/wisdom/header"
import { Footer } from "@/components/wisdom/footer"
import { Badge } from "@/components/wisdom/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const CASES = [
  { 
    id: 1, 
    client: "Northwind SaaS", 
    industry: "B2B SaaS", 
    headline: "Cut CPL 62% in 90 days", 
    desc: "Restructured LinkedIn and Google search accounts, layered in GPT-generated ad variants, rebuilt attribution. $280k/mo spend.", 
    metrics: [["−62%", "CPL"], ["+140%", "MQLs"], ["3.4x", "ROAS"]], 
    hue: "blue" 
  },
  { 
    id: 2, 
    client: "Fernhaus DTC", 
    industry: "Skincare", 
    headline: "+214% revenue in 6 months", 
    desc: "Meta + Google creative refresh, Performance Max rebuild, lifecycle email integration. $180k/mo spend.", 
    metrics: [["+214%", "Revenue"], ["4.2x", "ROAS"], ["−38%", "CAC"]], 
    hue: "ink" 
  },
  { 
    id: 3, 
    client: "Orbital Fintech", 
    industry: "Fintech", 
    headline: "Scaled from $50k to $400k/mo", 
    desc: "Paid search foundation, then layered Meta and LinkedIn. AI outbound workflow drove 40% of SQLs.", 
    metrics: [["8x", "Spend"], ["+329%", "Leads"], ["2.9x", "ROAS"]], 
    hue: "navy" 
  },
]

const SERVICES = [
  { 
    icon: Target, 
    title: "Paid media management", 
    desc: "Google Ads, Meta Ads, LinkedIn, TikTok. Account structure, creative testing, bid strategy, budget pacing. Weekly syncs, always-on Slack." 
  },
  { 
    icon: Bot, 
    title: "AI workflows", 
    desc: "We embed GPT-4 and Claude into your campaign ops — creative generation, performance summaries, outbound personalization. Workflows you own." 
  },
  { 
    icon: Layers, 
    title: "Full-funnel strategy", 
    desc: "Ads are the last mile. We map your offer, landing experience, lifecycle, and attribution so paid actually compounds instead of leaking." 
  },
]

const PROCESS = [
  { n: "01", title: "Audit week", desc: "Full account + funnel audit. By end of week 1, you have a written diagnosis and a 90-day plan." },
  { n: "02", title: "Rebuild", desc: "Account structure, creative system, measurement. We don't optimize broken foundations." },
  { n: "03", title: "Scale", desc: "Weekly experiments, monthly strategic reviews. Clear win/kill criteria on every test." },
  { n: "04", title: "Compound", desc: "Quarterly roadmap tied to your revenue targets. Every dollar either earns or gets cut." },
]

function CaseDetail({ caseItem, onBack }: { caseItem: typeof CASES[0]; onBack: () => void }) {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowRight className="h-4 w-4 rotate-180" />
        Back to case studies
      </button>
      
      <div className="flex items-center gap-3 mb-4">
        <Badge tone="neutral">{caseItem.industry}</Badge>
        <span className="text-muted-foreground">{caseItem.client}</span>
      </div>
      
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
        {caseItem.headline}
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8">
        {caseItem.desc}
      </p>
      
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
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">The brief</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          A Series B team with strong organic growth but a paid account that had been on auto-pilot for 18 months. Performance Max was cannibalizing branded search; Meta creative hadn&apos;t been refreshed since H1.
        </p>
        
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">What we did</h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
          <li>Rebuilt Google account into a clean brand / non-brand / Pmax split with negative lists between them.</li>
          <li>Launched a weekly creative sprint powered by a GPT-4 variant-ranking prompt tuned to their voice.</li>
          <li>Replaced last-click attribution with a simple first-touch + position-based blend in GA4 + BigQuery.</li>
        </ol>
        
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Where we landed</h2>
        <p className="text-muted-foreground leading-relaxed">
          90 days in, CPL was down 62% and MQL volume more than doubled. We&apos;ve been on retainer for 14 months.
        </p>
      </div>
    </article>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", spend: "$50k – $250k", message: "" })
  const [sent, setSent] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-20 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">{"Let's talk"}</p>
            <h2 className="text-3xl font-bold text-foreground mb-4">Book a 30-min intro.</h2>
            <p className="text-muted-foreground mb-6">
              Tell us about your account. If we&apos;re a fit, we&apos;ll send a written audit proposal within 48 hours. If we&apos;re not, we&apos;ll point you to someone who is.
            </p>
            <ul className="space-y-3">
              {[
                "Senior operator on every call",
                "No templated decks",
                "Response within 1 business day"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <Check className="h-4 w-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6">
            {sent ? (
              <div className="text-center py-8">
                <div className="inline-flex p-3 rounded-full bg-green-500/10 mb-4">
                  <Check className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Got it.</h3>
                <p className="text-muted-foreground">You&apos;ll hear from us within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Your name</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Sarah Patel"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Work email</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="sarah@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Monthly ad spend</label>
                  <select
                    value={form.spend}
                    onChange={(e) => setForm({ ...form, spend: e.target.value })}
                    className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option>$10k – $50k</option>
                    <option>$50k – $250k</option>
                    <option>$250k – $1M</option>
                    <option>$1M+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">What are you trying to solve?</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="CPA is up 40% since the iOS update, and Performance Max is eating branded search..."
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send it
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
  const [selectedCase, setSelectedCase] = useState<typeof CASES[0] | null>(null)

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
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="aurora" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
            <div className="max-w-3xl">
              <Badge tone="info">Accepting 3 new clients - Q3 2026</Badge>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Paid media, done right.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
                {"We're a small, senior team managing "}<strong className="text-foreground">$1M+/month</strong>{" in ad spend for B2B and DTC brands. No junior hand-offs. No 40-slide decks. Just compounding returns."}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#contact">
                    Book a 30-min intro
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg">
                  <Play className="mr-2 h-4 w-4" />
                  Watch a case study
                </Button>
              </div>
            </div>
            
            {/* Metrics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 rounded-2xl border border-border bg-[var(--bg-2)] overflow-hidden shadow-[var(--shadow-md),var(--inset-hairline)]">
              {[
                { icon: TrendingUp, value: "+329%", label: "Leads YoY, median client" },
                { icon: DollarSign, value: "+85%", label: "Revenue growth, FY25" },
                { icon: BarChart3, value: "$1M+", label: "Managed monthly spend" },
                { icon: Star, value: "14", label: "Active B2B + DTC clients" },
              ].map((metric, idx) => (
                <div key={metric.label} className={cn("flex items-center gap-3.5 p-6", idx < 3 && "border-r border-border")}>
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

        {/* Services Section */}
        <section className="py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Services</p>
              <h2 className="text-3xl font-bold text-foreground">Three things. Done to a high standard.</h2>
              <p className="mt-3 text-muted-foreground">
                {"We deliberately don't do SEO, social media management, influencer, or PR. It keeps us sharp."}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {SERVICES.map((service) => (
                <div key={service.title} className="bg-[var(--bg-2)] border border-border rounded-xl p-7 shadow-[var(--shadow-sm),var(--inset-hairline)] hover:border-[var(--wa-border-strong)] transition-all flex flex-col gap-3">
                  <div className="w-11 h-11 rounded-[10px] bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.25)] flex items-center justify-center mb-1">
                    <service.icon className="h-5 w-5 text-[var(--wa-blue-300)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground tracking-tight">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
                  <a href="#" className="inline-flex items-center text-sm text-primary font-medium hover:text-[var(--wa-blue-300)] transition-colors gap-1.5">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="cases" className="py-20 border-t border-border bg-card/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Case studies</p>
              <h2 className="text-3xl font-bold text-foreground">Proof, not promises.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CASES.map((caseItem) => (
                <div 
                  key={caseItem.id} 
                  className="group cursor-pointer bg-background rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all"
                  onClick={() => {
                    setSelectedCase(caseItem)
                    window.scrollTo(0, 0)
                  }}
                >
                  <div className={cn("aspect-[16/9] relative", `cover-${caseItem.hue}`)}>
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <Badge tone="neutral">{caseItem.industry}</Badge>
                      <span className="text-sm text-white/80">{caseItem.client}</span>
                    </div>
                  </div>
                  <div className="p-5">
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
                      Read the case study
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Process</p>
              <h2 className="text-3xl font-bold text-foreground">How we work.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {PROCESS.map((step) => (
                <div key={step.n} className="bg-[var(--bg-2)] border border-border rounded-xl p-6 shadow-[var(--inset-hairline)] flex flex-col gap-2.5">
                  <span className="font-mono text-sm text-[var(--wa-blue-300)] tracking-wide">{step.n}</span>
                  <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 border-t border-border bg-card/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="relative bg-[var(--bg-2)] border border-border rounded-2xl p-10 md:p-14 shadow-[var(--shadow-md),var(--inset-hairline)] overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(500px_260px_at_100%_0%,rgba(59,130,246,0.12),transparent_60%)]" />
              <blockquote className="relative text-xl md:text-2xl text-foreground leading-snug font-medium tracking-tight mb-8">
                {`"They rebuilt our ad account in two weeks and doubled our pipeline in two months. The Slack channel alone is worth the retainer — every question answered within the hour by someone senior."`}
              </blockquote>
              <div className="relative flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1D4ED8] to-[#3B82F6] border border-[var(--wa-border-strong)]" />
                <div>
                  <div className="text-sm font-semibold text-foreground">Maya Chen</div>
                  <div className="text-xs text-muted-foreground">VP Growth - Northwind SaaS</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}
