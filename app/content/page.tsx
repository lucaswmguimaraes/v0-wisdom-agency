"use client"

import { useState } from "react"
import { ArrowRight, Clock, Target, Bot, BarChart3, BookOpen, Play, ChevronLeft, Sparkles, Check } from "lucide-react"
import { Header } from "@/components/wisdom/header"
import { Footer } from "@/components/wisdom/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const ARTICLES = [
  {
    id: 1,
    title: "Meta Advantage+ em 2026: o que mudou e o que estamos ajustando nas contas",
    excerpt: "O novo painel de controle de audience chegou. Três ajustes que fizemos esta semana — e os resultados que estamos vendo no CPL.",
    category: "Mídia Paga",
    hue: "blue",
    readTime: 6,
    date: "22 Abr",
    body: [
      {
        type: "lead",
        text: "O Meta lançou o painel de controle de audience do Advantage+ no início de abril. Na prática, você agora consegue ver — e limitar — o quanto o algoritmo está expandindo sua audiência além do targeting original. Testamos em 4 contas esta semana. Aqui está o que encontramos.",
      },
      {
        type: "h2",
        text: "O que mudou de fato",
      },
      {
        type: "p",
        text: "Antes do painel, Advantage+ era uma caixa-preta: você definia uma audiência de sugestão e o Meta fazia o que queria. Agora você vê um breakdown de quanto do investimento foi para a sua audiência definida vs. expansões do algoritmo. Em 2 das 4 contas que gerenciamos, mais de 60% do gasto estava indo para expansão — sem que soubéssemos.",
      },
      {
        type: "highlight",
        label: "Dado real",
        text: "Em uma conta de e-commerce DTC com R$80k/mês de investimento, a expansão automática estava consumindo 68% do budget. CPL dessa parcela: 3,4x maior que a audiência original. Pausamos a expansão e o CPL caiu 31% em 7 dias.",
      },
      {
        type: "h2",
        text: "3 ajustes que fizemos imediatamente",
      },
      {
        type: "ol",
        items: [
          { bold: "Mapear o breakdown por conta.", text: " Primeiro passo: abrir o painel e ver qual % do gasto vai para expansão. Se passar de 40%, você tem um problema de controle de audiência." },
          { bold: "Limitar a expansão em campanhas de conversão.", text: " Para contas com CPL apertado e audiências bem mapeadas, restringimos a expansão ao mínimo possível. Para contas de awareness, deixamos mais aberto." },
          { bold: "Criar conjuntos separados para testar a expansão.", text: " Em vez de misturar, isolamos a expansão em um ad set próprio com budget controlado. Assim conseguimos medir o custo real sem contaminar a campanha principal." },
        ],
      },
      {
        type: "h2",
        text: "O que ainda não temos resposta",
      },
      {
        type: "p",
        text: "A grande questão é: para contas com volume baixo de dados de conversão, a expansão pode ser positiva — o algoritmo precisa de espaço para aprender. Ainda estamos coletando dados em 2 contas menores para entender se o trade-off vale. Próxima atualização em duas semanas.",
      },
    ],
  },
  {
    id: 2,
    title: "Como usamos Claude para automatizar a operação de campanhas",
    excerpt: "Relatórios de performance, alertas de anomalia e briefings de criativo — o que delegamos para IA e o que ainda fazemos na mão.",
    category: "IA para Marketing",
    hue: "ink",
    readTime: 5,
    date: "21 Abr",
    body: [
      {
        type: "lead",
        text: "Depois de 6 meses usando Claude na operação de mídia paga, conseguimos mapear o que a IA faz melhor que nós, o que ela faz pior e onde a combinação humano + IA gera o maior ganho. Este é o mapa atual.",
      },
      {
        type: "h2",
        text: "O que delegamos completamente",
      },
      {
        type: "p",
        text: "Relatórios de performance semanal: o Claude recebe os dados do Google Sheets via Apps Script, identifica variações acima de 15% em qualquer KPI e gera um resumo em linguagem natural com prioridades de ação. Economizamos 3h por semana só nisso.",
      },
      {
        type: "p",
        text: "Briefings de criativo: quando um conjunto de anúncios começa a perder performance, o Claude analisa os dados históricos e gera um briefing estruturado para o time de criativo — com hipótese de por que o criativo atual está fadigando, referências de formato e 3 ângulos alternativos para testar.",
      },
      {
        type: "highlight",
        label: "Workflow de IA",
        text: "Prompt base que usamos: 'Você é um analista de mídia paga sênior. Aqui estão os dados de performance da última semana [dados]. Identifique as 3 anomalias mais relevantes, explique a causa provável de cada uma e sugira uma ação específica. Seja direto. Sem introdução.'",
      },
      {
        type: "h2",
        text: "O que ainda fazemos na mão",
      },
      {
        type: "ol",
        items: [
          { bold: "Decisões de budget acima de R$5k.", text: " A IA sugere, mas qualquer realocação significativa passa por revisão humana. Erro de contexto aqui tem custo alto." },
          { bold: "Leitura qualitativa de criativos.", text: " O algoritmo não sabe que aquele criativo com copy forte está usando um meme que envelheceu mal em 3 semanas. Isso requer contexto cultural." },
          { bold: "Negociação de posicionamento e formatos.", text: " Relacionamento com rep do Meta e Google ainda é humano — e vale muito em créditos de teste e acesso antecipado a features." },
        ],
      },
      {
        type: "h2",
        text: "O ganho real em 6 meses",
      },
      {
        type: "p",
        text: "Não cortamos headcount. Mas conseguimos gerenciar 40% mais contas com o mesmo time — porque as tarefas repetitivas de análise e formatação saíram do nosso radar. O foco humano foi para onde importa: estratégia, criativo e relacionamento com cliente.",
      },
    ],
  },
  {
    id: 3,
    title: "Performance Max em abril: novos controles e o que os dados estão dizendo",
    excerpt: "Google liberou novos search themes e brand exclusions. Testamos nas contas e os resultados surpreenderam.",
    category: "Mídia Paga",
    hue: "slate",
    readTime: 8,
    date: "20 Abr",
    body: [
      {
        type: "lead",
        text: "O Google entregou dois controles que a comunidade de paid media pediu por mais de dois anos: search themes com peso maior e brand exclusions no nível de campanha para Performance Max. Testamos em 6 contas durante 3 semanas. Os resultados são mais nuançados do que o anúncio sugere.",
      },
      {
        type: "h2",
        text: "Search themes: o que realmente mudou",
      },
      {
        type: "p",
        text: "Na versão anterior, os search themes eram pouco mais do que sinais fracos — o Google usava quando queria. Com a atualização de abril, eles passaram a funcionar como modificadores de intenção: você indica os temas prioritários e o algoritmo dá peso significativamente maior a queries relacionadas.",
      },
      {
        type: "p",
        text: "Em 3 contas de B2B SaaS onde o PMax estava capturando muita query de awareness (topo de funil), adicionar search themes voltados para termos de fundo de funil ('software de gestão financeira para PME', 'preço plataforma RH') reduziu o CPA médio em 22% em 21 dias.",
      },
      {
        type: "highlight",
        label: "Dado real",
        text: "Conta de SaaS B2B: R$45k/mês em PMax. Antes dos search themes: CPA R$380, mix de 70% awareness / 30% conversão. Após 3 semanas com themes de fundo de funil: CPA R$296, mix 45% awareness / 55% conversão. Volume caiu 15%, mas qualidade de lead subiu.",
      },
      {
        type: "h2",
        text: "Brand exclusions: finalmente funcionando",
      },
      {
        type: "p",
        text: "Antes, a única forma de excluir brand no PMax era via brand exclusion list no nível da conta — e não funcionava de forma confiável. A exclusão por campanha resolveu o problema de canibalização que muitas contas enfrentavam: o PMax capturando queries de marca que deveriam ir para a campanha de Search de marca (com ROAS histórico muito mais alto).",
      },
      {
        type: "ol",
        items: [
          { bold: "Ative imediatamente se você tem campanha de Search de marca.", text: " A canibalização provavelmente está acontecendo e você não está vendo porque o PMax agrega tudo." },
          { bold: "Monitore o volume da campanha de Search de marca por 2 semanas.", text: " Ela vai crescer. Se o CPA dessa campanha for menor que o PMax, você estava perdendo eficiência." },
          { bold: "Não exclua brand em contas sem histórico de marca.", text: " Para empresas novas, deixar o PMax capturar branded pode ajudar no aprendizado." },
        ],
      },
      {
        type: "h2",
        text: "O que ainda falta",
      },
      {
        type: "p",
        text: "Controle de asset group por produto ainda é rudimentar. Para e-commerces com catálogos grandes, o PMax continua direcionando budget desproporcional para os produtos com maior margem histórica — mesmo quando você quer testar novos itens. Esse ainda é o maior ponto cego da campanha.",
      },
    ],
  },
  {
    id: 4,
    title: "Apps Script + Google Ads API: automatizamos 5h semanais de relatórios",
    excerpt: "O script que roda toda segunda e entrega um resumo de performance no Sheets — com alertas de CPL e ROAS fora da faixa.",
    category: "IA para Marketing",
    hue: "teal",
    readTime: 7,
    date: "19 Abr",
    body: [
      {
        type: "lead",
        text: "Durante meses, toda segunda-feira começava da mesma forma: abrir o Google Ads, exportar dados de 8 contas, colar no Sheets, formatar, calcular variações, identificar alertas e montar o resumo para o cliente. 5 horas. Toda semana. Montamos um script que faz isso em 4 minutos.",
      },
      {
        type: "h2",
        text: "A estrutura do sistema",
      },
      {
        type: "p",
        text: "O sistema tem 3 partes: (1) um Apps Script que chama a Google Ads API e puxa métricas das últimas 2 semanas para cada conta, (2) uma aba de configuração no Sheets onde você define os limites de alerta por conta (CPL máximo, ROAS mínimo, budget diário), (3) uma função de geração de resumo que formata os dados e destaca o que está fora da faixa em vermelho.",
      },
      {
        type: "highlight",
        label: "Workflow de IA",
        text: "Depois que o script roda, passamos o resumo para o Claude com o prompt: 'Aqui está o relatório de performance desta semana [dados]. Liste as 3 contas que precisam de atenção prioritária, explique por que e sugira a primeira ação para cada uma. Máximo 5 linhas por conta.' O resultado vai direto para o canal do cliente no Slack.",
      },
      {
        type: "h2",
        text: "O que o script monitora",
      },
      {
        type: "ol",
        items: [
          { bold: "CPL vs. meta.", text: " Se o CPL da semana estiver mais de 20% acima da meta definida, gera alerta vermelho." },
          { bold: "ROAS vs. mínimo viável.", text: " Para contas de e-commerce, qualquer queda abaixo do ROAS de break-even gera notificação imediata." },
          { bold: "Impressions share de marca.", text: " Quedas acima de 10% em uma semana geralmente indicam concorrente investindo pesado ou problema de leilão." },
          { bold: "Variação de gasto diário.", text: " Detecta underspending (budget não sendo utilizado) e overspending (aceleração inesperada do algoritmo)." },
        ],
      },
      {
        type: "h2",
        text: "O que você precisa para replicar",
      },
      {
        type: "p",
        text: "Acesso de desenvolvedor à Google Ads API (gratuito, demora 2 dias para aprovar), conhecimento básico de JavaScript para adaptar o script às suas contas, e um Sheets configurado com as abas de dados e configuração. O tempo de setup é de 4 a 6 horas na primeira vez — e nunca mais.",
      },
    ],
  },
  {
    id: 5,
    title: "Atribuição em 2026: o que ainda funciona depois do fim dos cookies",
    excerpt: "MMM leve, first-party data e o blend de modelos que estamos usando nas contas com R$200k+/mês.",
    category: "Funil e Analytics",
    hue: "deep",
    readTime: 9,
    date: "18 Abr",
    body: [
      {
        type: "lead",
        text: "O last-click morreu há anos. O data-driven do Google é melhor, mas ainda é uma caixa-preta. Em contas com R$200k+/mês, nenhum modelo único de atribuição dá a resposta completa. O que funciona na prática é um blend de 3 abordagens — e saber quando usar cada uma.",
      },
      {
        type: "h2",
        text: "Os 3 modelos que usamos juntos",
      },
      {
        type: "p",
        text: "Modelo 1 — Data-driven do Google/Meta: bom para otimização de lances dentro de cada plataforma. O problema é que cada plataforma se atribui crédito em excesso. Usamos para decisões táticas dentro do canal.",
      },
      {
        type: "p",
        text: "Modelo 2 — First-party com GA4 + BigQuery: cruzamos o histórico de sessões com os dados de CRM. Conseguimos ver a jornada real do lead — quantos touchpoints antes da conversão, quais canais aparecem mais no início vs. fim do funil. Requer trabalho de engenharia, mas é o dado mais honesto que temos.",
      },
      {
        type: "p",
        text: "Modelo 3 — MMM leve (Marketing Mix Modeling): para contas acima de R$200k/mês, rodamos um modelo estatístico simples que correlaciona variações de investimento por canal com variações de resultado agregado. Não é o MMM de grandes empresas, mas com 12 meses de dados históricos já dá sinais confiáveis.",
      },
      {
        type: "highlight",
        label: "Dado real",
        text: "Em uma conta com R$280k/mês distribuídos entre Google, Meta e LinkedIn: o data-driven das plataformas atribuía 80% das conversões ao Google. O MMM leve mostrou que o LinkedIn estava gerando 35% do pipeline — mas com ciclo de 45 dias, não aparecia no last-click. Realocamos R$40k/mês para LinkedIn e o pipeline cresceu 28% em 90 dias.",
      },
      {
        type: "h2",
        text: "O que fazer se você não tem budget para MMM",
      },
      {
        type: "ol",
        items: [
          { bold: "Pesquisa pós-conversão.", text: " Pergunte ao cliente no formulário de obrigado: 'Como você nos encontrou?' É dado qualitativo, mas surpreendentemente preciso em B2B." },
          { bold: "Testes de incrementalidade.", text: " Pause um canal por 2 semanas e meça o impacto no resultado total. Trabalhoso, mas é o dado mais limpo que existe." },
          { bold: "Cohort analysis no GA4.", text: " Analise cohorts de usuários por canal de aquisição e compare LTV ao longo de 90 dias. Canais de topo de funil costumam se destacar aqui." },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "ROAS caindo? As três causas mais comuns em contas B2B e como corrigir",
    excerpt: "Fadiga de criativo, saturação de audiência ou problema de atribuição — como diferenciar e o que fazer.",
    category: "Fundamentos",
    hue: "navy",
    readTime: 6,
    date: "17 Abr",
    body: [
      {
        type: "lead",
        text: "ROAS caindo é o sintoma. A causa pode ser completamente diferente dependendo da conta — e o tratamento errado piora o problema. Depois de diagnosticar quedas de ROAS em dezenas de contas B2B, mapeamos as 3 causas mais comuns e como diferenciar cada uma.",
      },
      {
        type: "h2",
        text: "Causa 1: fadiga de criativo",
      },
      {
        type: "p",
        text: "Sinal: frequency acima de 3,5 em Meta ou CTR caindo semana a semana sem mudança de bid. O criativo foi visto vezes demais pela mesma pessoa. O algoritmo continua entregando porque é o que tem, mas a performance deteriora.",
      },
      {
        type: "p",
        text: "Correção: não é pausar o criativo — é substituir. Teste 3 novos criativos com ângulos diferentes (dado + resultado, before/after, objeção direta) e pause o fadigado só quando o novo tiver pelo menos 50 conversões.",
      },
      {
        type: "h2",
        text: "Causa 2: saturação de audiência",
      },
      {
        type: "p",
        text: "Sinal: reach estagnado mesmo com budget mantido, CPM subindo, e a audiência salva mostrando tamanho decrescente no Meta. Você esgotou as pessoas dentro do seu targeting que tinham probabilidade razoável de converter.",
      },
      {
        type: "highlight",
        label: "Como diagnosticar",
        text: "No Meta: compare o reach das últimas 4 semanas. Se o reach está flat ou caindo com budget constante, é saturação. No Google: olhe search impression share — se está acima de 80% em palavras-chave principais, você está capturando quase tudo que existe. É hora de expandir.",
      },
      {
        type: "h2",
        text: "Causa 3: problema de atribuição",
      },
      {
        type: "p",
        text: "Sinal: ROAS caindo nas plataformas, mas resultado de negócio (pipeline, receita) estável ou crescendo. O problema não é a campanha — é que você está perdendo visibilidade das conversões. Causas comuns: mudança de janela de atribuição, perda de pixel events por atualização de iOS/Android, ou quebra no GTM.",
      },
      {
        type: "ol",
        items: [
          { bold: "Verifique o GTM primeiro.", text: " Abra o Tag Assistant e confirme que os eventos de conversão estão disparando. 30% das quedas de ROAS que vemos são quebra de tracking silenciosa." },
          { bold: "Compare com dados do CRM.", text: " Se o pipeline do CRM está crescendo mas o ROAS da plataforma está caindo, é quase certamente atribuição." },
          { bold: "Ative Conversions API (CAPI) se ainda não tiver.", text: " No Meta, o CAPI resolve a maior parte da perda de sinal do iOS. Implementação leva 2 dias." },
        ],
      },
      {
        type: "h2",
        text: "O diagnóstico antes do remédio",
      },
      {
        type: "p",
        text: "A maioria dos gestores pula direto para 'vamos mudar o criativo' quando o ROAS cai. Mas se a causa for atribuição, novos criativos não resolvem nada. Reserve 30 minutos para o diagnóstico antes de qualquer mudança — evita muito trabalho desnecessário.",
      },
    ],
  },
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

function ArticleBody({ body }: { body: typeof ARTICLES[0]["body"] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {body.map((block, i) => {
        if (block.type === "lead") {
          return (
            <p key={i} style={{ fontSize: 19, lineHeight: 1.6, color: "var(--fg-2)", marginBottom: 28 }}>{block.text}</p>
          )
        }
        if (block.type === "h2") {
          return (
            <h2 key={i} style={{ fontSize: 22, fontWeight: 700, color: "var(--fg-1)", margin: "32px 0 12px" }}>{block.text}</h2>
          )
        }
        if (block.type === "p") {
          return (
            <p key={i} style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-2)", marginBottom: 16 }}>{block.text}</p>
          )
        }
        if (block.type === "highlight") {
          return (
            <div key={i} style={{ display: "flex", gap: 12, padding: 18, background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.25)", borderRadius: 10, margin: "8px 0 20px", fontSize: 14, lineHeight: 1.55, color: "var(--fg-2)" }}>
              <Sparkles style={{ width: 18, height: 18, color: "var(--wa-blue-300)", marginTop: 2, flexShrink: 0 }} />
              <div><strong style={{ color: "var(--fg-1)" }}>{block.label}.</strong> {block.text}</div>
            </div>
          )
        }
        if (block.type === "ol") {
          return (
            <ol key={i} style={{ paddingLeft: 20, color: "var(--fg-2)", fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
              {block.items!.map((item, j) => (
                <li key={j} style={{ marginBottom: 10 }}>
                  <strong style={{ color: "var(--fg-1)" }}>{item.bold}</strong>{item.text}
                </li>
              ))}
            </ol>
          )
        }
        return null
      })}
    </div>
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
          <strong style={{ display: "block", fontSize: 14, color: "var(--fg-1)" }}>Lucas Guimarães</strong>
          <span style={{ fontSize: 12, color: "var(--fg-3)" }}>{article.date} · {article.readTime} min de leitura</span>
        </div>
      </div>
      <div className={cn("h-[260px] rounded-xl mb-8 border border-[var(--wa-border)]", `cover-${article.hue}`)} />
      <ArticleBody body={article.body} />
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
              Playbooks práticos, workflows de IA e análises de campanhas reais. Escrito por quem gerencia <strong style={{ color: "var(--fg-1)" }}>R$1M+/mês</strong> em anúncios.
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
