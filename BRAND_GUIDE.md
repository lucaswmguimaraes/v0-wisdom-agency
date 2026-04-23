# Wisdom Agency — Brand Guide

> Leia antes de criar posts para Instagram ou modificar o site.

---

## Identidade

**Wisdom Agency** é a marca pessoal de **Lucas Guimarães** — especialista em Growth Marketing com 5+ anos gerenciando R$1M+/mês em campanhas de performance.

**Duplo objetivo:**
1. Captação de clientes para gestão de mídia paga (B2B/DTC)
2. Educação em IA aplicada ao marketing no Instagram

**Diferencial vs. mercado:** enquanto o mercado de "IA no Instagram" usa néon, emojis e claims vagos, Wisdom usa dados reais, estética dark/minimal e voz de praticante (não de influencer).

---

## Tom de Voz

| ✅ On-brand | ❌ Off-brand |
|-----------|------------|
| Números reais: "+329% leads" | Claims vagos: "escale seu negócio" |
| Direto: "veja como fizemos" | Buzzwords: "sinergia, disruptivo" |
| Humano: colega sênior numa reunião | Performativo: "ei pessoal! 🚀" |
| CTAs com verbo: "Agendar call" | "Clique aqui" / "Saiba mais" |

---

## Cores

| Token | Hex | Uso |
|-------|-----|-----|
| `--background` | `#0B0F14` | Background padrão |
| `--foreground` / `--fg-1` | `#F7F9FC` | Texto principal |
| `--primary` | `#3B82F6` | Ações, CTAs, destaques |
| `--card` | `#10151C` | Card padrão |
| `--border` | `#1F2732` | Bordas |
| `--wa-border-strong` | `#2A3340` | Bordas hover |
| `--muted-foreground` / `--fg-3` | `#8A94A6` | Corpo de texto |
| `--wa-blue-300` | `#93C5FD` | Ícones decorativos, ênfase |
| `--wa-success` | `#22C55E` | Métricas positivas |
| `--bg-0` | `#07090D` | Footer (mais profundo) |

---

## Tipografia

- **Inter** (400/500/600/700/800) — tudo
- **JetBrains Mono** (400/500) — código e stats grandes

| Contexto | Tamanho | Peso | Letter-spacing |
|---------|---------|------|----------------|
| Display/Hero | 48–72px | 700 | -0.025em |
| H1 | 36–48px | 700 | -0.02em |
| H2 | 32px | 600 | -0.02em |
| Body | 16px | 400 | 0 |
| Eyebrow | 11px | 600 | +0.08em (uppercase) |
| Stat | 40px mono | 500 | -0.02em |

---

## Logo

- **viewBox:** `0 0 260 48` (importante — 260px evita o "y" cortado em Agency)
- **Mark:** W estilizado, última perna em azul `#3B82F6`
- **Lockup:** mark + "Wisdom" (Inter 700, #F7F9FC) + "Agency" (Inter 400, #8A94A6)
- **Componente React:** `components/wisdom/logo.tsx` (SVG inline)

---

## Componentes

### Card (spec canônica)
```css
background: var(--card);           /* #10151C */
border: 1px solid var(--border);   /* #1F2732 */
border-radius: 12px;
padding: 24px;
box-shadow: var(--shadow-sm), var(--inset-hairline);
/* Hover: border → #2A3340, shadow → shadow-md */
```

### Botões
| Variante | Uso |
|----------|-----|
| Primary (azul + glow) | CTA principal |
| Secondary (surface-2) | Ações secundárias |
| Outline | Terciário |

Spec: `padding: 10px 18px`, `border-radius: 8px`, `font: Inter 500 14px`, `transition: 120ms`

---

## Ícones

- **Set:** Lucide Icons
- **Stroke-width:** 1.75 (não 2)
- **Tamanhos:** 16 / 20 / 24px
- Mais usados: `arrow-right`, `bar-chart-3`, `trending-up`, `target`, `bot`, `layers`, `check`, `zap`

---

## Espaçamento

- Base: 4px
- Padding de seção: **96px** vertical (desktop)
- Padding de card: **24px**
- Max-width: **1200px**

---

## Instagram — Guia Visual

### Princípio
Feed parece **dashboard de analytics**, não feed de influencer.

### Tipos de post
1. **Stat Post** — número grande + contexto breve
2. **Lista Tática** — how-to numerado com checks azuis
3. **Case Summary** — antes/depois com 3 KPIs
4. **Opinião / Take** — H2 grande + dado que fundamenta
5. **Ferramenta / IA** — avaliação real sem hype

### Paleta Instagram
| Elemento | Hex |
|---------|-----|
| Background | `#0B0F14` ou `#10151C` |
| Texto | `#F7F9FC` |
| Destaque | `#3B82F6` |
| Secundário | `#C7D0DC` |

### Não fazer
❌ Gradientes néon | ❌ Emojis em excesso | ❌ Claims vagos | ❌ Fundo branco | ❌ CAPS LOCK + emoji

---

## Dados do Lucas (para copy)

| Campo | Valor |
|-------|-------|
| Nome | Lucas Guimarães |
| Cargo | Especialista em Growth Marketing |
| Email | lucaswmguimaraes@gmail.com |
| LinkedIn | linkedin.com/in/lucas-william-martins-guimaraes |

### Resultados âncora
| Resultado | Contexto |
|-----------|----------|
| **+329% leads** | -65% CPL (Nonno App) |
| **+85% receita** | -13% CPA YoY (GrupoQ) |
| **R$1M+/mês** | Gerenciados (Brasil Monks) |
| **+30k leads/mês** | Paid + orgânico (Contabilidade Facilitada) |

---

## Arquivos

| Asset | Caminho |
|-------|---------|
| Brand Guide completo | `clientes/_minha-empresa/brand-guide.md` |
| Design System local | `wisdom-design-system/` |
| Tokens CSS | `app/globals.css` |
| Componente Logo | `components/wisdom/logo.tsx` |
| Landing page | `app/page.tsx` |
| Portfólio | `app/portfolio/page.tsx` |
| Conteúdo | `app/content/page.tsx` |
