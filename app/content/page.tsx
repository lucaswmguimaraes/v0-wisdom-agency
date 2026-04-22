"use client"

import { useState } from "react"
import { ArrowRight, Clock, Mail, Target, Bot, BarChart3, BookOpen } from "lucide-react"
import { Header } from "@/components/wisdom/header"
import { Footer } from "@/components/wisdom/footer"
import { Badge } from "@/components/wisdom/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const ARTICLES = [
  { 
    id: 1, 
    title: "The three levers every paid account has", 
    excerpt: "Structure, creative, signal — and why new marketers always pick the wrong one first.", 
    category: "Paid media", 
    hue: "blue", 
    readTime: 6, 
    date: "Apr 18" 
  },
  { 
    id: 2, 
    title: "A GPT-4 prompt that ranks your Meta creatives", 
    excerpt: "We use this weekly to cut through 40+ variants. Copy it, tune it, ship better ads.", 
    category: "AI for marketers", 
    hue: "ink", 
    readTime: 4, 
    date: "Apr 15" 
  },
  { 
    id: 3, 
    title: "Attribution after iOS — what actually still works", 
    excerpt: "The MMM/MTA debate is a distraction. Here's what we track in Q2 2026 and why.", 
    category: "Funnel & analytics", 
    hue: "slate", 
    readTime: 8, 
    date: "Apr 11" 
  },
  { 
    id: 4, 
    title: "ROAS, CAC, LTV — the three numbers explained plainly", 
    excerpt: "For anyone who's nodded along in a meeting and Googled definitions later. No shame.", 
    category: "Fundamentals", 
    hue: "deep", 
    readTime: 5, 
    date: "Apr 8" 
  },
  { 
    id: 5, 
    title: "Automating weekly campaign reviews with n8n + GPT", 
    excerpt: "Replace your Monday reporting ritual with a Slack summary that catches more than you do.", 
    category: "AI for marketers", 
    hue: "teal", 
    readTime: 7, 
    date: "Apr 4" 
  },
  { 
    id: 6, 
    title: "Google Ads account structure for DTC brands", 
    excerpt: "The Performance Max + branded search combo that's quietly carrying most accounts.", 
    category: "Paid media", 
    hue: "navy", 
    readTime: 9, 
    date: "Apr 1" 
  },
]

const TOPICS = [
  { name: "Paid media", icon: Target, count: 12 },
  { name: "AI for marketers", icon: Bot, count: 8 },
  { name: "Funnel & analytics", icon: BarChart3, count: 6 },
  { name: "Fundamentals", icon: BookOpen, count: 4 },
]

function ArticleCard({ article, onClick }: { article: typeof ARTICLES[0]; onClick: () => void }) {
  return (
    <article 
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className={cn(
        "aspect-[16/9] rounded-xl mb-4 transition-transform group-hover:scale-[1.02]",
        `cover-${article.hue}`
      )} />
      <div className="flex items-center gap-3 mb-2">
        <Badge tone="neutral">{article.category}</Badge>
        <span className="text-xs text-muted-foreground flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {article.readTime} min read
        </span>
      </div>
      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
        {article.title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
        {article.excerpt}
      </p>
      <div className="mt-3 flex items-center text-primary text-sm font-medium">
        <span>Read more</span>
        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </article>
  )
}

function ArticleReader({ article, onBack }: { article: typeof ARTICLES[0]; onBack: () => void }) {
  return (
    <article className="max-w-3xl mx-auto">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowRight className="h-4 w-4 rotate-180" />
        Back to articles
      </button>
      
      <div className="flex items-center gap-3 mb-4">
        <Badge tone="neutral">{article.category}</Badge>
        <span className="text-sm text-muted-foreground">{article.date}</span>
        <span className="text-sm text-muted-foreground flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {article.readTime} min read
        </span>
      </div>
      
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
        {article.title}
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8">
        {article.excerpt}
      </p>
      
      <div className={cn("aspect-[21/9] rounded-xl mb-8", `cover-${article.hue}`)} />
      
      <div className="prose prose-invert max-w-none">
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Introduction</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {`Every paid account has exactly three levers you can pull to improve performance. Structure, creative, and signal. The problem isn't knowing this — it's knowing which one to pull first.`}
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Most marketers, especially those early in their careers, instinctively reach for creative. It feels tangible. You can see it. You can show it to your boss. But nine times out of ten, creative isn&apos;t the bottleneck.
        </p>
        
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">The Structure Problem</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Account structure is invisible to most stakeholders, which is why it gets ignored. But a poorly structured account is like a house built on sand. You can decorate it beautifully, but it will never be stable.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {`We've audited hundreds of accounts, and the pattern is consistent: the accounts that perform best have the simplest, cleanest structures. Fewer campaigns. Clearer segmentation. Proper negative keyword lists.`}
        </p>
        
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">When to Focus on Creative</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Creative becomes the lever when your structure is clean and your signal is strong. That means your conversion tracking is accurate, your audiences are properly segmented, and your bidding strategy makes sense.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Only then should you start testing headlines, images, and copy variations. And when you do, test systematically. One variable at a time. Document everything.
        </p>
        
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Conclusion</h2>
        <p className="text-muted-foreground leading-relaxed">
          The best marketers know which lever to pull. They start with structure, move to signal, and only then optimize creative. It&apos;s less glamorous than a viral ad, but it&apos;s what actually drives results.
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
        <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
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
        <section className="relative overflow-hidden">
          <div className="aurora" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="max-w-2xl">
              <Badge tone="info">Updated weekly</Badge>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                The Wisdom Playbook
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Tactical guides on paid media, AI workflows, and growth strategy. No fluff, just things that actually work.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-foreground mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </section>

        {/* Topics Section */}
        <section className="py-16 border-t border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-foreground mb-8">Browse by Topic</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {TOPICS.map((topic) => (
                <button 
                  key={topic.name}
                  className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors text-left"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <topic.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{topic.name}</div>
                    <div className="text-sm text-muted-foreground">{topic.count} articles</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center">
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                Get the weekly digest
              </h2>
              <p className="mt-3 text-muted-foreground">
                One email per week. Unsubscribe anytime.
              </p>
              
              {subscribed ? (
                <div className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <p className="text-green-400 font-medium">
                    {"You're in! Check your inbox for confirmation."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="mt-6 flex gap-3">
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                    required
                  />
                  <Button type="submit">
                    Subscribe
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
