"use client"

import { useState } from "react"
import { ArrowRight, Clock, Target, Bot, BarChart3, BookOpen, ChevronLeft, Sparkles, Zap, TrendingUp } from "lucide-react"
import { Header } from "@/components/wisdom/header"
import { Footer } from "@/components/wisdom/footer"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const ARTICLES = [
  {
    id: 1,
    title: "Meta Advantage+: o targeting detalhado virou sugestão — e agora?",
    excerpt: "Em janeiro de 2026, o Meta removeu dezenas de categorias de interesse e transformou qualquer segmentação detalhada em sugestão. O que isso significa para quem gerencia contas de performance.",
    category: "Mídia Paga",
    hue: "blue",
    icon: Target,
    source: "Jon Loomer Digital · Central de Ajuda Meta",
    readTime: 6,
    date: "22 Abr",
    body: [
      {
        type: "lead",
        text: "Em 15 de janeiro de 2026, o Meta removeu dezenas de categorias de interesse detalhado das opções de targeting. Ao mesmo tempo, consolidou a lógica do Advantage+: qualquer segmentação que você configurar é tratada como sugestão — não como regra. Somente localização e idade mínima funcionam como restrições reais.",
      },
      {
        type: "h2",
        text: "O que mudou na prática",
      },
      {
        type: "p",
        text: "Antes, você podia combinar interesses e forçar o algoritmo a manter a entrega dentro de um público específico. Hoje, o Advantage+ Audience usa seus inputs como ponto de partida e expande para qualquer pessoa que o algoritmo considere mais propensa a converter — sem você saber quanto do budget foi para fora do seu targeting original.",
      },
      {
        type: "p",
        text: "O que não existe mais é transparência sobre essa expansão. Você não vê qual porcentagem do investimento foi para a audiência que você definiu versus a expansão automática. O Meta argumenta que isso é intencional: a divisão artificiria entre 'dentro' e 'fora' do público prejudicava o aprendizado.",
      },
      {
        type: "highlight",
        label: "Contexto de mercado",
        text: "O Meta afirma que Advantage+ reduz CPA em até 32% em verticais de e-commerce em relação ao targeting detalhado manual. Para contas com histórico sólido de conversão e orçamento acima de R$250/dia, os dados internos do Meta apontam performance consistentemente melhor com automação completa.",
      },
      {
        type: "h2",
        text: "Quando faz sentido resistir à automação",
      },
      {
        type: "p",
        text: "Para B2B com ICP muito específico (cargo, tamanho de empresa, setor), deixar o Meta expandir livremente pode gerar volume de leads incompatível com o processo comercial. O algoritmo otimiza para o evento de conversão — não para a qualidade do lead depois da conversão. Se o seu funil comercial tem rejeição alta, o problema pode estar aqui.",
      },
      {
        type: "ol",
        items: [
          { bold: "Use os controles de conta como linha de defesa.", text: " Localização e idade mínima são as únicas restrições que o Advantage+ respeita. Configure-as corretamente no nível da conta — elas se aplicam a todas as campanhas." },
          { bold: "Alimente o algoritmo com dados de qualidade, não de volume.", text: " Se você envia qualquer lead como evento de conversão, está treinando o algoritmo para encontrar mais pessoas assim. Envie apenas leads qualificados via CAPI." },
          { bold: "Teste a audiência de sugestão com budget controlado.", text: " Antes de abrir completamente, rode uma campanha com orçamento pequeno sem audiência de sugestão e compare CPL e qualidade de lead com a versão com sugestão restrita." },
        ],
      },
      {
        type: "h2",
        text: "A mudança de papel do gestor de mídia",
      },
      {
        type: "p",
        text: "A lógica que o Jon Loomer articulou bem: o seu papel mudou de seletor de audiência para provedor de sinal. O que você alimenta — criativos, eventos de conversão, dados de CRM via CAPI — define o que o algoritmo aprende. Quanto melhor o sinal, menor a dependência de controle manual.",
      },
    ],
  },
  {
    id: 2,
    title: "Claude Skills para PPC: de prompt avulso para sistema que roda sem você",
    excerpt: "A diferença entre usar IA e construir com IA. Como Claude Skills transforma tarefas repetitivas de paid media em sistemas previsíveis — com exemplo prático de análise de search terms.",
    category: "IA para Marketing",
    hue: "ink",
    icon: Bot,
    source: "Search Engine Land",
    readTime: 5,
    date: "21 Abr",
    body: [
      {
        type: "lead",
        text: "Usar o Claude para gerar um texto ou analisar uma planilha é útil. Mas ainda é trabalho manual: você abre, digita, recebe o resultado, fecha. Claude Skills é a camada acima disso — você define uma vez como a IA deve executar uma tarefa e ela passa a fazer isso de forma previsível, toda vez, sem precisar de instrução nova.",
      },
      {
        type: "h2",
        text: "O que é uma Claude Skill na prática",
      },
      {
        type: "p",
        text: "Uma Skill é um arquivo Markdown (.md) que contém o playbook completo de como o Claude deve executar uma tarefa específica: o contexto, o formato de input esperado, as regras de análise e o formato de output. Ao invés de escrever um prompt diferente toda vez, você chama a Skill e ela executa o mesmo processo, com a mesma lógica, independentemente de quem estiver na frente do computador.",
      },
      {
        type: "highlight",
        label: "Fonte",
        text: "Conceito documentado no Search Engine Land: 'By embracing Claude Skills, marketers are moving from doing PPC work to designing the PPC systems that perform that work with predictability and at scale.' Integração com dados ao vivo via MCP (Model Context Protocol) permite que a Skill puxe dados direto do Google Ads sem exportação manual.",
      },
      {
        type: "h2",
        text: "Exemplo: auditoria de search terms",
      },
      {
        type: "p",
        text: "Uma Skill de auditoria de search terms define: receber o relatório de termos de busca em CSV, identificar termos com gasto acima de X sem conversão, classificar por intenção (informacional / navegacional / transacional), sugerir negativação ou match type mais restrito, e formatar a saída como tabela pronta para revisão.",
      },
      {
        type: "p",
        text: "Com a integração via MCP conectada ao Optmyzr ou diretamente à Google Ads API, a Skill consegue puxar os dados em tempo real. Você chama a Skill, ela executa a auditoria e devolve o relatório formatado — sem precisar exportar nada manualmente.",
      },
      {
        type: "h2",
        text: "O que Skills não resolvem",
      },
      {
        type: "ol",
        items: [
          { bold: "Julgamento estratégico.", text: " A Skill executa o playbook que você definiu. Se o playbook estiver errado, a Skill vai errar de forma consistente. A qualidade do output depende da qualidade das instruções." },
          { bold: "Contexto de conta que muda rápido.", text: " Se você mudou de estratégia na semana passada, a Skill não sabe disso a menos que você atualize o arquivo. Skills precisam de manutenção periódica." },
          { bold: "Decisões de budget de alto impacto.", text: " Skills podem sugerir realocações, mas a aprovação final de movimentações significativas ainda precisa passar por revisão humana." },
        ],
      },
      {
        type: "h2",
        text: "Por onde começar",
      },
      {
        type: "p",
        text: "Identifique a tarefa repetitiva que consome mais tempo na sua semana — auditoria de termos, geração de relatório, briefing de criativo — e documente exatamente como você faz hoje. Esse documento é a base da Skill. Skills prontas também estão disponíveis no GitHub para adaptar ao seu contexto.",
      },
    ],
  },
  {
    id: 3,
    title: "Performance Max em 2026: 50 search themes, novas exclusões e o que o relatório revela",
    excerpt: "Google dobrou o limite de search themes por asset group, liberou exclusões por campanha e expandiu o relatório de search terms. O que mudou e como usar esses controles na prática.",
    category: "Mídia Paga",
    hue: "slate",
    icon: BarChart3,
    source: "Search Engine Journal · Search Engine Land",
    readTime: 8,
    date: "20 Abr",
    body: [
      {
        type: "lead",
        text: "O Performance Max passou por uma rodada significativa de atualizações de controle. O limite de search themes por asset group dobrou de 25 para 50. Exclusões de marca agora funcionam no nível da campanha. O relatório de search terms ganhou uma coluna que indica se a query veio de keywordless targeting ou de um search theme que você definiu. São mudanças que a comunidade de paid media pedia há anos.",
      },
      {
        type: "h2",
        text: "Search themes: o que o dobro do limite muda",
      },
      {
        type: "p",
        text: "Search themes não são palavras-chave — são sinais de intenção que você passa para o algoritmo. Com 50 por asset group, você consegue cobrir variações semânticas de forma muito mais granular sem precisar criar múltiplos asset groups artificiais. Para contas B2B com produtos complexos ou múltiplas personas, isso é relevante.",
      },
      {
        type: "p",
        text: "O novo relatório também mostra o impacto incremental de cada search theme: quanta tráfego adicional aquele tema gerou em relação ao keywordless puro. Isso permite identificar quais temas estão efetivamente influenciando o algoritmo e quais são redundantes com o que ele encontraria sozinho.",
      },
      {
        type: "highlight",
        label: "Contexto de mercado",
        text: "Segundo o Search Engine Journal, o Google também expandiu os limites de negative keywords e adicionou exclusões por faixa etária e dispositivo — ainda em rollout. Brand exclusions por campanha, uma das demandas mais antigas dos gestores, agora está disponível globalmente e resolve o problema de canibalização com campanhas de Search de marca.",
      },
      {
        type: "h2",
        text: "Como usar brand exclusions de forma correta",
      },
      {
        type: "p",
        text: "O problema clássico: o PMax captura queries de marca (usuários buscando o nome da sua empresa) que deveriam ir para a campanha de Search de marca — onde o CPC é menor, o ROAS histórico é mais alto e o controle de mensagem é maior. Com a exclusão por campanha, você consegue separar esses dois fluxos sem depender da exclusion list da conta, que historicamente tinha problemas de confiabilidade.",
      },
      {
        type: "ol",
        items: [
          { bold: "Ative brand exclusion no PMax se você já tem campanha de Search de marca.", text: " Monitore o volume da campanha de Search de marca por 14 dias após a ativação — ela deve crescer." },
          { bold: "Use os 50 search themes para cobrir intenção de fundo de funil.", text: " Termos que combinam problema + solução + categoria tendem a gerar queries mais próximas da conversão." },
          { bold: "Monitore o relatório de search terms por tema.", text: " Se um tema não está gerando tráfego incremental, ele é redundante. Substitua por variações que o algoritmo ainda não está alcançando." },
        ],
      },
      {
        type: "h2",
        text: "O que ainda falta",
      },
      {
        type: "p",
        text: "Controle de orçamento por asset group ainda não existe. Para e-commerces com catálogos grandes, o PMax continua alocando budget de forma opaca entre produtos e canais. O relatório de network segmentation (quanto foi para Search, Display, YouTube, Shopping) está em rollout mas ainda não chegou a todas as contas. Esses são os próximos pontos de pressão da comunidade.",
      },
    ],
  },
  {
    id: 4,
    title: "Google Ads Scripts + IA: como automatizar o relatório de segunda-feira",
    excerpt: "Google Ads Scripts conectam diretamente com a API do Google Ads via GAQL. Com IA no loop, o script não só puxa os dados — ele analisa, prioriza e formata o que precisa de atenção.",
    category: "IA para Marketing",
    hue: "teal",
    icon: Zap,
    source: "Search Engine Journal · Google Developers",
    readTime: 7,
    date: "19 Abr",
    body: [
      {
        type: "lead",
        text: "Google Ads Scripts são snippets de JavaScript que rodam dentro da plataforma e acessam a Google Ads API via GAQL (Google Ads Query Language) sem precisar de setup de developer credential. Você escreve uma vez, agenda para rodar toda segunda, e o script puxa, processa e exporta os dados direto para um Sheets. Com uma chamada à IA no final, o output vira análise — não só dado.",
      },
      {
        type: "h2",
        text: "Como Scripts e GAQL funcionam juntos",
      },
      {
        type: "p",
        text: "O AdsApp.report() aceita queries GAQL e retorna os dados em formato de dicionário, ideal para exportar para planilhas. O AdsApp.search() retorna objetos GoogleAdsRow, mais úteis para processar programaticamente. Para relatórios de performance, o report() é mais simples: você define as métricas, o período e os filtros em GAQL, e o script gera a tabela.",
      },
      {
        type: "highlight",
        label: "Workflow de IA",
        text: "A integração mais eficiente: o Script puxa os dados e os grava em um Sheets. Um segundo script (Apps Script) lê o Sheets e chama a API do Claude ou ChatGPT com o prompt de análise. O modelo recebe os dados estruturados e devolve um resumo com prioridades de ação. Esse resumo pode ser enviado por email, Slack ou salvo em outra aba do Sheets automaticamente.",
      },
      {
        type: "h2",
        text: "O que você consegue monitorar automaticamente",
      },
      {
        type: "ol",
        items: [
          { bold: "Variações de CPA e ROAS por campanha semana a semana.", text: " O script compara o período atual com o anterior e flagga qualquer variação acima do threshold que você definir." },
          { bold: "Search term report com gasto sem conversão.", text: " GAQL filtra termos acima de X de gasto e zero conversão no período. Output pronto para negativação." },
          { bold: "Impression share por campanha.", text: " Quedas abruptas de IS de marca geralmente indicam concorrente aumentando bid ou problema de budget — o script detecta antes de você abrir a plataforma." },
          { bold: "Underspend e overspend de budget diário.", text: " Campanhas que não estão gastando o budget definido e campanhas que aceleraram além do planejado." },
        ],
      },
      {
        type: "h2",
        text: "Requisitos para começar",
      },
      {
        type: "p",
        text: "Acesso de administrador à conta do Google Ads. Scripts básicos em JavaScript — a documentação do Google para desenvolvedores tem templates prontos de relatório. Um Sheets para receber os dados. Para a camada de IA, uma API key do modelo de sua escolha e uma segunda função em Apps Script que lê o Sheets e chama a API. O setup inicial leva entre 3 e 6 horas dependendo da complexidade dos relatórios que você quer gerar.",
      },
    ],
  },
  {
    id: 5,
    title: "Meridian aberto para todos: o que o MMM do Google entrega na prática",
    excerpt: "O Google abriu o Meridian — seu modelo open-source de Marketing Mix Modeling — para todos os anunciantes. O que ele faz, onde é melhor que alternativas e o que ainda exige trabalho técnico.",
    category: "Funil e Analytics",
    hue: "deep",
    icon: TrendingUp,
    source: "Search Engine Land · Adweek",
    readTime: 9,
    date: "18 Abr",
    body: [
      {
        type: "lead",
        text: "O Meridian, modelo open-source de Marketing Mix Modeling do Google, está disponível para todos os anunciantes e data scientists desde 2025. Em 2026, o Google foi além e lançou o Scenario Planner — uma interface no-code que usa o Meridian para simular cenários de alocação de budget sem precisar de código. A barreira de entrada para MMM caiu significativamente.",
      },
      {
        type: "h2",
        text: "O que o Meridian faz diferente",
      },
      {
        type: "p",
        text: "A maioria dos MMMs opera no nível nacional — você insere dados agregados de todo o país e recebe atribuição por canal. O Meridian usa modelagem hierárquica geo-level: consegue rodar para mais de 50 regiões geográficas simultaneamente, compartilhando informação entre elas via estrutura hierárquica bayesiana. Para marcas com operações regionais fortes, isso muda a qualidade dos insights.",
      },
      {
        type: "p",
        text: "A abordagem bayesiana também diferencia o Meridian de alternativas como o Robyn (Meta). Enquanto o Robyn prioriza otimização pragmática, o Meridian modela os mecanismos causais — decay, saturação, variáveis confundidoras. A pergunta que ele responde melhor: 'O que aconteceria se eu mudasse a alocação de budget?'",
      },
      {
        type: "highlight",
        label: "Fonte",
        text: "Segundo o Search Engine Land, o Google lançou o Scenario Planner como interface no-code sobre o Meridian — você simula diferentes alocações de budget e vê o impacto projetado em receita sem precisar rodar o modelo diretamente. Disponível dentro do Google Ads para anunciantes elegíveis.",
      },
      {
        type: "h2",
        text: "O que ainda exige trabalho técnico",
      },
      {
        type: "p",
        text: "O Meridian é open-source no GitHub e requer Python para configuração e rodada do modelo completo. Você precisa de no mínimo 12 a 18 meses de dados históricos de spend e resultado por canal para que o modelo produza estimativas confiáveis. Dados de canais offline (TV, OOH, eventos) precisam ser adicionados manualmente.",
      },
      {
        type: "ol",
        items: [
          { bold: "Scenario Planner (no-code).", text: " Para quem quer simulações rápidas de budget sem expertise técnica. Limitado aos dados que o Google já tem sobre sua conta." },
          { bold: "Meridian completo (Python).", text: " Para equipes com data scientist ou analista com Python. Permite incorporar dados offline, CRM e canais fora do ecossistema Google." },
          { bold: "Alternativas open-source.", text: " Robyn (Meta/Facebook), Orbit (Uber) e Prophet (Facebook) são outras opções com abordagens diferentes. A escolha depende do stack técnico e do tipo de questão que você quer responder." },
        ],
      },
      {
        type: "h2",
        text: "O ponto de atenção",
      },
      {
        type: "p",
        text: "MMM feito pelo Google usando dados do Google tem um viés inerente a considerar. O modelo é open-source e auditável, mas os dados de input que ele usa para calibrar podem favorecer canais Google. Para uma visão verdadeiramente independente, rodar o modelo com dados próprios — não via Scenario Planner — é o caminho mais confiável.",
      },
    ],
  },
  {
    id: 6,
    title: "ROAS alto, crescimento baixo: quando a automação cria ilusão de performance",
    excerpt: "Black-box automation como Performance Max e Advantage+ otimiza para o evento de conversão — não para crescimento incremental. Como identificar se o seu ROAS está medindo resultado real ou capturando conversões que já aconteceriam.",
    category: "Fundamentos",
    hue: "navy",
    icon: BookOpen,
    source: "Search Engine Land",
    readTime: 6,
    date: "17 Abr",
    body: [
      {
        type: "lead",
        text: "Tem um problema que está se tornando cada vez mais comum em contas que usam Performance Max e Advantage+ de forma extensiva: ROAS no dashboard da plataforma sobe enquanto o resultado de negócio fica flat ou cai. A automação encontrou o caminho de menor resistência — interceptar conversões que já estavam acontecendo — e está otimizando para isso.",
      },
      {
        type: "h2",
        text: "Como a automação cria ROAS inflado",
      },
      {
        type: "p",
        text: "O algoritmo do Performance Max e do Advantage+ tem um objetivo único: encontrar conversões. A forma mais eficiente de fazer isso é mostrar anúncios para pessoas que já têm alta propensão de converter — usuários que estão procurando sua marca, visitantes do site, clientes que compraram antes. O problema: essas conversões aconteceriam de qualquer forma. O anúncio não causou a conversão; ele apenas apareceu no caminho.",
      },
      {
        type: "p",
        text: "O Search Engine Land documentou esse padrão: 'Black-box automation is finding the path of least resistance to a conversion by becoming the most expensive touchpoint in journeys that were already destined to convert, rather than finding new customers.' O ROAS sobe porque a atribuição de plataforma credita a conversão ao anúncio. O incremento real é zero.",
      },
      {
        type: "highlight",
        label: "Como identificar",
        text: "Compare o crescimento de receita ou pipeline nos últimos 90 dias com o crescimento de gasto em mídia. Se o ROAS da plataforma subiu mas a receita não acompanhou, você provavelmente tem conversões não-incrementais sendo atribuídas. O teste mais limpo: pause o canal por 2 semanas e meça o impacto no resultado agregado.",
      },
      {
        type: "h2",
        text: "3 formas de medir ROAS incremental",
      },
      {
        type: "ol",
        items: [
          { bold: "Teste de holdout.", text: " Pause a campanha para um grupo de usuários (geo ou audiência) enquanto mantém para outro. Compara o resultado entre os dois grupos. É o método mais preciso, mas requer volume suficiente." },
          { bold: "Marginal ROAS (mROAS).", text: " Meça o que acontece com o resultado quando você aumenta o budget em margem. Se aumentar 20% de budget gera menos de 20% de resultado adicional, você está capturando retornos decrescentes — ou conversões não-incrementais." },
          { bold: "Meridian ou outro MMM.", text: " Modelos de mix de marketing separam o efeito dos anúncios de outros fatores (sazonalidade, busca orgânica, boca a boca). O coeficiente do canal te diz quanto do resultado é atribuível de fato à mídia paga." },
        ],
      },
      {
        type: "h2",
        text: "O que fazer quando você confirma o problema",
      },
      {
        type: "p",
        text: "Reconfigurar o evento de otimização é o primeiro passo. Se você está otimizando para visita ao site ou lead genérico, o algoritmo vai encontrar conversões baratas e não-incrementais. Mova a otimização para eventos mais próximos da receita real — lead qualificado, oportunidade criada no CRM, compra confirmada. O volume de conversões vai cair no dashboard; o resultado de negócio deve subir.",
      },
    ],
  },
  {
    id: 7,
    title: "Bid strategies em 2026: quando usar tCPA, tROAS e Maximize Conversions — e quando não usar",
    excerpt: "A escolha de bid strategy determina como o algoritmo aloca budget e quais usuários prioriza. Guia prático com os critérios de quando cada estratégia faz sentido — e os sinais de que ela está atrapalhando.",
    category: "Mídia Paga",
    hue: "blue",
    icon: Target,
    source: "Google Ads Help Center · Search Engine Journal",
    readTime: 7,
    date: "16 Abr",
    body: [
      {
        type: "lead",
        text: "Bid strategy não é só uma configuração técnica — é a instrução que você dá ao algoritmo sobre o que otimizar. tCPA diz: 'traga conversões ao menor custo possível dentro deste target'. tROAS diz: 'maximize receita mantendo esta proporção de retorno'. Maximize Conversions diz: 'gaste o orçamento gerando o máximo de conversões, sem restrição de custo'. A escolha errada desperdiça budget; a escolha certa é o que separa contas que escalam das que ficam travadas.",
      },
      {
        type: "h2",
        text: "tCPA: quando faz sentido e quando não faz",
      },
      {
        type: "p",
        text: "tCPA funciona melhor quando você tem um volume consistente de conversões — o Google recomenda pelo menos 30 por mês na campanha, mas na prática contas com menos de 50 conversões mensais têm learning phase prolongada e oscilação de CPA alta. A estratégia funciona bem para leads com valor relativamente homogêneo: geração de cadastros, downloads, agendamentos.",
      },
      {
        type: "p",
        text: "Onde o tCPA atrapalha: quando o target está muito abaixo do CPA histórico real da conta. O algoritmo vai restringir tanto a entrega que a campanha para de gastar o orçamento. O sinal: impression share caindo, budget não sendo gasto, volume de conversões em queda. Regra prática — defina o target com no máximo 20% abaixo do CPA dos últimos 30 dias e reduza gradualmente.",
      },
      {
        type: "highlight",
        label: "Learning phase",
        text: "Qualquer mudança de bid strategy, target ou estrutura de campanha reinicia a learning phase — que dura entre 1 e 2 semanas. Durante esse período, performance oscila e dados não são representativos. Evite fazer múltiplas mudanças simultâneas e não avalie resultado durante a learning phase.",
      },
      {
        type: "h2",
        text: "tROAS: para quem tem valor de conversão variável",
      },
      {
        type: "p",
        text: "tROAS é para e-commerce ou qualquer contexto onde diferentes conversões têm valores diferentes. Se um cliente compra R$50 e outro compra R$500, otimizar por CPA trata os dois igualmente. tROAS instrui o algoritmo a priorizar conversões de maior valor. Requisito mínimo: 50 conversões com valores distintos por mês. Abaixo disso, o algoritmo não tem dados suficientes para aprender a diferença.",
      },
      {
        type: "h2",
        text: "Maximize Conversions: a estratégia de warm-up",
      },
      {
        type: "p",
        text: "Maximize Conversions sem target é a estratégia correta para contas novas ou campanhas com pouco histórico. Sem um target definido, o algoritmo tem liberdade para explorar e acumular dados de conversão. Depois de 30 a 50 conversões, você migra para tCPA com um target baseado no CPA observado. Pular essa etapa e já começar com tCPA restritivo é o erro mais comum em contas novas.",
      },
      {
        type: "ol",
        items: [
          { bold: "Conta nova ou campanha sem histórico.", text: " Use Maximize Conversions sem target por 4 a 6 semanas para acumular dados." },
          { bold: "30-50 conversões mensais, valor homogêneo.", text: " Migre para tCPA com target baseado no CPA real dos últimos 30 dias." },
          { bold: "50+ conversões mensais, valor variável.", text: " tROAS com target baseado no ROAS histórico real, não na meta ideal." },
          { bold: "Sinal de problema em tCPA/tROAS.", text: " Budget não gasto + IS em queda = target irreal. Eleve o target em 15-20% e monitore por 7 dias antes de ajustar novamente." },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Landing page para mídia paga: os 5 elementos que mais impactam conversão",
    excerpt: "A landing page é onde o dinheiro da mídia vai — ou some. Análise dos 5 elementos com maior impacto comprovado em taxa de conversão, com exemplos práticos para B2B e DTC.",
    category: "Mídia Paga",
    hue: "slate",
    icon: BarChart3,
    source: "CXL Institute · Unbounce",
    readTime: 6,
    date: "15 Abr",
    body: [
      {
        type: "lead",
        text: "Uma landing page ruim desperdiça todo o trabalho de targeting, criativo e bid strategy. O tráfego chega, não converte, e o CPA sobe. A CXL Institute analisou centenas de testes A/B em landing pages de performance e identificou os elementos com maior impacto consistente em taxa de conversão. Não são os que você provavelmente imagina.",
      },
      {
        type: "h2",
        text: "1. Hero acima da dobra: clareza antes de criatividade",
      },
      {
        type: "p",
        text: "O teste que a CXL repete mais em auditorias: 'um estranho consegue entender o que você oferece em 5 segundos?' A maioria não passa. Headlines criativas que priorizam metáfora sobre clareza aumentam bounce rate. O hero precisa responder três perguntas sem scroll: o que é, para quem é, e o que acontece quando eu clicar. Criatividade vem depois que a proposta está clara.",
      },
      {
        type: "h2",
        text: "2. Social proof específico, não genérico",
      },
      {
        type: "p",
        text: "Depoimentos do tipo 'ótimo produto, recomendo!' não convertem. Depoimentos que descrevem o problema antes do produto, mencionam resultado específico e têm foto real do cliente são os que movem agulha. Para B2B: logos de clientes conhecidos acima da dobra têm impacto significativo em confiança. Para DTC: avaliações com fotos reais de uso superam estúdio profissional.",
      },
      {
        type: "highlight",
        label: "Dado do Unbounce",
        text: "Páginas com depoimentos específicos (resultado + contexto + pessoa real) convertem em média 34% mais do que páginas com depoimentos genéricos ou sem depoimento, segundo análise de 40.000 landing pages da Unbounce.",
      },
      {
        type: "h2",
        text: "3. CTA único e visível — sem opções paralelas",
      },
      {
        type: "p",
        text: "Cada CTA adicional na página divide a atenção e reduz a taxa de conversão do CTA principal. A regra é uma ação por página. Botões de redes sociais, links para outras páginas, menus de navegação completos — tudo isso aumenta taxa de saída sem aumentar conversão. Em landing pages de campanha, remova a navegação global.",
      },
      {
        type: "h2",
        text: "4. Velocidade: cada segundo conta literalmente",
      },
      {
        type: "p",
        text: "O Google documentou que cada segundo adicional de carregamento reduz conversão em 7% em mobile. Para tráfego pago, onde o usuário veio de um anúncio e tem expectativa de resposta imediata, a tolerância é ainda menor. Core Web Vitals abaixo de 2.5s de LCP é o piso mínimo. Use PageSpeed Insights para auditar e priorize: comprimir imagens, eliminar JavaScript desnecessário, usar CDN.",
      },
      {
        type: "h2",
        text: "5. Message match: a congruência entre anúncio e página",
      },
      {
        type: "p",
        text: "Message match é a consistência entre o que o anúncio promete e o que a landing page entrega. Se o anúncio diz 'Diagnóstico gratuito em 24h' e a landing page abre com um hero genérico sobre a empresa, há ruptura de expectativa — o usuário se pergunta se clicou no lugar certo. A headline da landing page deve espelhar a promessa do anúncio. Para campanhas com múltiplos criativos, landing pages dinâmicas ou versões separadas por mensagem aumentam conversão consistentemente.",
      },
    ],
  },
  {
    id: 9,
    title: "Automação com Claude e Apps Script: como construir um relatório de performance semanal em 4 horas",
    excerpt: "Passo a passo para criar um pipeline que lê dados do Google Ads, analisa com Claude e envia um resumo formatado toda segunda. Código real, sem atalho.",
    category: "IA para Marketing",
    hue: "teal",
    icon: Zap,
    source: "Anthropic Docs · Google Workspace Developers",
    readTime: 8,
    date: "14 Abr",
    body: [
      {
        type: "lead",
        text: "O pipeline completo: um Google Ads Script puxa dados da semana anterior via GAQL e grava em um Sheets. Um Apps Script lê esse Sheets, monta um prompt estruturado com os dados e chama a API do Claude. O Claude analisa, prioriza e formata um resumo com as principais movimentações e recomendações. Outro Apps Script envia o resultado por email toda segunda às 8h. Setup de 4 horas, economia de 2 a 3 horas toda semana.",
      },
      {
        type: "h2",
        text: "Passo 1: Google Ads Script para puxar os dados",
      },
      {
        type: "p",
        text: "No Google Ads, acesse Ferramentas > Scripts e crie um novo script. A query GAQL básica para performance por campanha: SELECT campaign.name, metrics.cost_micros, metrics.conversions, metrics.clicks, metrics.impressions FROM campaign WHERE segments.date DURING LAST_7_DAYS. O AdsApp.report() executa a query e retorna os dados. Use SpreadsheetApp.openById() para gravar no Sheets com o ID da planilha que você criou.",
      },
      {
        type: "highlight",
        label: "Dica de configuração",
        text: "Crie uma planilha dedicada para o pipeline com abas separadas: 'dados_brutos' (onde o Ads Script grava), 'análise' (onde o Apps Script escreve o output do Claude) e 'histórico' (arquivo das semanas anteriores). Isso facilita debug e permite comparações históricas.",
      },
      {
        type: "h2",
        text: "Passo 2: Apps Script para chamar a API do Claude",
      },
      {
        type: "p",
        text: "No Google Sheets, acesse Extensões > Apps Script. O script lê os dados da aba 'dados_brutos', monta um objeto JSON com as métricas por campanha e constrói o prompt: 'Você é um analista de mídia paga sênior. Analise os dados de performance da semana e identifique: 1) campanhas com maior variação positiva e negativa, 2) oportunidades de otimização imediata, 3) alertas que precisam de ação até amanhã. Seja direto e específico. Dados: [JSON dos dados]'.",
      },
      {
        type: "p",
        text: "A chamada para a API do Claude usa UrlFetchApp.fetch() com o endpoint da Anthropic (api.anthropic.com/v1/messages), headers com a API key armazenada nas propriedades do script (não hardcoded), e o body com modelo, max_tokens e messages. O response é parseado e o texto da análise é gravado na aba 'análise'.",
      },
      {
        type: "h2",
        text: "Passo 3: envio automático por email",
      },
      {
        type: "p",
        text: "GmailApp.sendEmail() é a função mais simples. Passe o destinatário, assunto com a data da semana, e o corpo com o texto da análise formatado em HTML básico para melhor legibilidade. Para times maiores, use um loop com array de destinatários. Configure um trigger em Editar > Gatilhos para rodar toda segunda às 8h — o Apps Script tem um scheduler nativo que não precisa de servidor externo.",
      },
      {
        type: "ol",
        items: [
          { bold: "Armazene a API key com segurança.", text: " Use PropertiesService.getScriptProperties().setProperty('CLAUDE_API_KEY', 'sua-key') — nunca hardcode credenciais no código." },
          { bold: "Adicione tratamento de erro.", text: " O pipeline pode falhar se o Sheets estiver vazio ou a API retornar erro. Use try/catch e envie um email de alerta em caso de falha." },
          { bold: "Itere no prompt.", text: " A primeira versão do prompt vai gerar análises genéricas. Refine adicionando contexto sobre a conta, metas do período e formato desejado do output." },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Creative testing no Meta: a metodologia que separa o que funciona do que parece funcionar",
    excerpt: "Testar criativos sem metodologia gera dados que confirmam o que você já queria acreditar. Como estruturar testes de criativo que produzem aprendizado real — e como escalar os vencedores sem quebrar a conta.",
    category: "Mídia Paga",
    hue: "deep",
    icon: Target,
    source: "Meta Business · Search Engine Journal",
    readTime: 7,
    date: "13 Abr",
    body: [
      {
        type: "lead",
        text: "A maioria dos testes de criativo no Meta não produz aprendizado — produz confirmação de viés. Você testa dois anúncios, um ganha, você escala. Mas o vencedor pode ter ganhado por variação estatística normal, não por diferença real de performance. Três semanas depois, o 'vencedor' está com CPA igual ao perdedor. Uma metodologia de teste correta é a diferença entre construir um sistema de criativo que aprende e rodar testes que não chegam a lugar nenhum.",
      },
      {
        type: "h2",
        text: "O princípio fundamental: isole uma variável por vez",
      },
      {
        type: "p",
        text: "Se você testa imagem diferente, copy diferente e CTA diferente ao mesmo tempo, você sabe qual variação ganhou — mas não sabe por quê. Na próxima iteração, você não tem hipótese testável. Teste uma variável de cada vez: só o hook visual, ou só o headline, ou só o formato. Leva mais tempo, mas gera hipóteses que se acumulam em conhecimento sobre o que funciona para a sua audiência específica.",
      },
      {
        type: "highlight",
        label: "Orçamento mínimo por criativo",
        text: "O Meta recomenda pelo menos R$50/dia por variação para que o algoritmo distribua impressões de forma equitativa. Abaixo disso, o algoritmo favorece um criativo cedo demais e o teste fica contaminado. Para contas menores, teste no máximo 2 a 3 variações simultaneamente.",
      },
      {
        type: "h2",
        text: "Duração mínima e sinais de vencedor real",
      },
      {
        type: "p",
        text: "Um teste de criativo precisa de pelo menos 7 dias e no mínimo 50 a 100 eventos do objetivo (cliques, leads ou compras) por variação para ter significância estatística mínima. Antes disso, qualquer diferença de performance pode ser ruído. O sinal de vencedor real: CTR ou taxa de conversão consistentemente superior por pelo menos 5 dias consecutivos, não apenas no agregado do período.",
      },
      {
        type: "h2",
        text: "Como escalar sem quebrar o vencedor",
      },
      {
        type: "p",
        text: "O erro clássico: o criativo vence, você duplica o adset e dobra o budget no mesmo dia. O Meta interpreta a duplicação como uma campanha nova e reinicia o aprendizado. O resultado vencedor some. A forma correta de escalar: aumente o budget do adset original em no máximo 20% por vez, com intervalo de pelo menos 3 dias entre aumentos. Se precisar de escala mais rápida, duplique o adset mas com públicos diferentes — não o mesmo público com budget maior.",
      },
      {
        type: "ol",
        items: [
          { bold: "Crie um banco de hipóteses antes de testar.", text: " Para cada teste, documente: o que você está testando, por que você acha que vai fazer diferença, e o critério de sucesso. Isso evita interpretar resultados de forma oportunista." },
          { bold: "Use Campaign Budget Optimization (CBO) com cautela em testes.", text: " O CBO distribui budget entre adsets automaticamente — o que pode concentrar em um criativo cedo demais. Para testes, use ABO (Ad Set Budget Optimization) para controle igual." },
          { bold: "Arquive, não delete.", text: " Criativos 'perdedores' hoje podem vencer com uma audiência diferente ou em outro momento do funil. Archive e documente o resultado em vez de deletar." },
        ],
      },
    ],
  },
  {
    id: 11,
    title: "Google Analytics 4: as 6 configurações que a maioria das contas ignora",
    excerpt: "GA4 instalado não é GA4 configurado. As 6 configurações que mais impactam a qualidade dos dados — da integração com Google Ads ao data stream correto para cross-domain tracking.",
    category: "Funil e Analytics",
    hue: "navy",
    icon: TrendingUp,
    source: "Google Analytics Help · Measure School",
    readTime: 6,
    date: "12 Abr",
    body: [
      {
        type: "lead",
        text: "A maioria das contas de GA4 tem o código instalado mas a configuração incompleta. O resultado: dados de atribuição incorretos, audiences de remarketing mal formadas, e decisões de mídia baseadas em números que não refletem o comportamento real do usuário. Seis configurações que fazem diferença real — e que a maioria das contas não tem feita corretamente.",
      },
      {
        type: "h2",
        text: "1. Integração com Google Ads para importação de conversões",
      },
      {
        type: "p",
        text: "A maioria das contas usa conversões nativas do Google Ads (tags de conversão) em vez de importar do GA4. O problema: as duas fontes medem de forma diferente e raramente batem. Definir o GA4 como fonte única de verdade para conversões — e importar para o Google Ads — garante consistência entre o que você vê no GA4 e o que o algoritmo do Google Ads está otimizando.",
      },
      {
        type: "h2",
        text: "2. Configuração correta de data streams",
      },
      {
        type: "p",
        text: "Um data stream por domínio. Se você tem site principal e subdomínio de checkout em domínios diferentes, precisa de cross-domain tracking configurado — caso contrário, GA4 conta uma nova sessão a cada cruzamento de domínio, inflando artificialmente o número de sessões e distorcendo o caminho de conversão.",
      },
      {
        type: "highlight",
        label: "Cross-domain tracking",
        text: "Configure em Admin > Data Streams > Enhanced Measurement > Cross-domain measurement. Adicione todos os domínios que fazem parte do mesmo fluxo do usuário. Sem isso, uma compra que passa por checkout.seusite.com aparece como se viesse de tráfego direto, sem atribuição ao canal original.",
      },
      {
        type: "h2",
        text: "3. Filtros de tráfego interno",
      },
      {
        type: "p",
        text: "Tráfego do seu próprio time contamina dados de comportamento e conversão. Configure filtros de IP interno em Admin > Data Streams > Configure Tag Settings > Define Internal Traffic. Para times remotos com IPs dinâmicos, use o parâmetro debug_mode via GTM para excluir tráfego de teste.",
      },
      {
        type: "h2",
        text: "4. Enhanced measurement: o que ativar e o que desativar",
      },
      {
        type: "p",
        text: "O enhanced measurement ativa automaticamente rastreamento de scrolls, cliques em links externos, buscas no site, vídeos do YouTube e downloads. Na maioria dos casos, ative tudo — mas revise 'form interactions': dependendo de como seus formulários são construídos, pode registrar eventos de form_submit sem conversão real, inflando o número de leads.",
      },
      {
        type: "h2",
        text: "5. Configuração de audiences para remarketing",
      },
      {
        type: "p",
        text: "Audiences no GA4 precisam de pelo menos 100 usuários para serem usadas no Google Ads. Configure audiences baseadas em comportamento de alto valor — usuários que visitaram a página de preços, assistiram mais de 75% de um vídeo, iniciaram um checkout sem completar. Audiences genéricas ('todos os visitantes dos últimos 30 dias') têm performance de remarketing significativamente inferior.",
      },
      {
        type: "h2",
        text: "6. Configuração do modelo de atribuição",
      },
      {
        type: "p",
        text: "O GA4 usa Data-Driven Attribution por padrão para contas com volume suficiente — o que é melhor que last-click na maioria dos casos. Mas verifique em Admin > Attribution Settings qual modelo está ativo e qual janela de conversão está configurada. A janela padrão de 30 dias pode não refletir seu ciclo de compra real: produtos de alta consideração se beneficiam de janelas mais longas; produtos de compra por impulso, de janelas menores.",
      },
    ],
  },
  {
    id: 12,
    title: "O que é CAPI e por que você deveria ter configurado há meses",
    excerpt: "Conversions API (CAPI) é a alternativa server-side ao pixel — e desde o iOS 14, é a diferença entre dados confiáveis e estimativas. Como funciona, o que recupera e como implementar.",
    category: "Fundamentos",
    hue: "ink",
    icon: BookOpen,
    source: "Meta Business · Search Engine Land",
    readTime: 5,
    date: "11 Abr",
    body: [
      {
        type: "lead",
        text: "O pixel do Meta é client-side: ele roda no navegador do usuário e envia dados de comportamento para o Meta. O problema: desde o iOS 14 e as mudanças de privacidade dos navegadores, uma parcela crescente desses eventos nunca chega. Safari bloqueia. Usuários optam por sair do rastreamento. Ad blockers interferem. A Conversions API (CAPI) resolve isso por outro caminho — direto do seu servidor para o servidor do Meta, sem depender do navegador.",
      },
      {
        type: "h2",
        text: "Client-side vs server-side: a diferença que importa",
      },
      {
        type: "p",
        text: "O pixel client-side dispara quando o JavaScript roda no navegador do usuário após uma ação (compra, lead, visualização de página). Se o navegador bloqueia ou o usuário fecha a página antes do disparo, o evento se perde. O CAPI dispara do seu servidor — quando a compra é confirmada no banco de dados, você envia o evento para a API do Meta independentemente do que aconteceu no navegador. O evento não pode ser bloqueado porque não passa pelo navegador.",
      },
      {
        type: "highlight",
        label: "O impacto do iOS 14",
        text: "O Meta estimou que o iOS 14 causou redução de 15% a 20% na mensuração de eventos de conversão para campanhas mobile. Para e-commerces com base significativa de usuários iOS (especialmente no segmento premium), a diferença entre dados com CAPI e sem CAPI pode ser a diferença entre uma campanha que aparece como lucrativa e uma que aparece como ineficiente.",
      },
      {
        type: "h2",
        text: "Event Match Quality Score: o que o Meta mede",
      },
      {
        type: "p",
        text: "O Meta usa o Event Match Quality (EMQ) Score para avaliar a qualidade dos dados do CAPI — de 0 a 10, mede o quanto os eventos enviados conseguem ser associados a um usuário real do Facebook. Quanto mais dados de identificação você envia junto com o evento (email com hash, telefone, nome, endereço), maior o score. Um EMQ acima de 7 é considerado bom; abaixo de 5 indica que os eventos estão chegando mas sem dados suficientes para match.",
      },
      {
        type: "h2",
        text: "Como implementar: as 3 formas principais",
      },
      {
        type: "ol",
        items: [
          { bold: "Integração direta via API.", text: " A forma mais robusta e flexível. Você controla exatamente quais dados enviar e quando. Requer desenvolvimento backend. A documentação da Meta Business tem SDKs em PHP, Python, Ruby e Node." },
          { bold: "Via Google Tag Manager (server-side container).", text: " Se você já usa GTM, um server-side container processa eventos no servidor antes de enviá-los para o Meta. Configuração mais rápida que integração direta, com menos controle granular." },
          { bold: "Via parceiros de plataforma (Shopify, WooCommerce).",  text: " Shopify tem integração nativa com CAPI no app oficial do Meta. Para a maioria dos e-commerces em Shopify, essa é a forma mais rápida e com menor risco de implementação incorreta." },
        ],
      },
      {
        type: "h2",
        text: "Pixel e CAPI juntos: como evitar deduplicação incorreta",
      },
      {
        type: "p",
        text: "O ideal é rodar pixel e CAPI simultaneamente — o pixel captura o que consegue no navegador, o CAPI captura o restante do servidor. Para evitar contagem duplicada do mesmo evento, inclua um event_id único em ambos os disparos. O Meta usa esse ID para deduplicar: se receber o mesmo event_id via pixel e via CAPI, conta como um evento só. Sem deduplicação correta, as conversões reportadas ficam infladas e o algoritmo otimiza com dados errados.",
      },
    ],
  },
]

const TOPICS = [
  { name: "IA para profissionais de marketing", icon: Bot, desc: "Prompts, automações e stacks que realmente economizam tempo.", count: 3, categoryFilter: "IA para Marketing" },
  { name: "Mídia paga", icon: Target, desc: "Google Ads, Meta Ads, estrutura de conta, testes de criativos.", count: 5, categoryFilter: "Mídia Paga" },
  { name: "Funil e analytics", icon: BarChart3, desc: "Atribuição que sobrevive às atualizações do iOS.", count: 2, categoryFilter: "Funil e Analytics" },
  { name: "Fundamentos", icon: BookOpen, desc: "O glossário em linguagem simples para quem está começando.", count: 2, categoryFilter: "Fundamentos" },
]

function ArticleCard({ article, onClick }: { article: typeof ARTICLES[0]; onClick: () => void }) {
  const Icon = article.icon
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer bg-[var(--bg-2)] border border-[var(--wa-border)] rounded-xl overflow-hidden shadow-[var(--shadow-sm),var(--inset-hairline)] hover:border-[var(--wa-border-strong)] hover:shadow-[var(--shadow-md),var(--inset-hairline)] transition-all duration-200"
    >
      <div className="relative h-40 overflow-hidden">
        <div className={cn("absolute inset-0", `cover-${article.hue}`)} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon style={{ width: 52, height: 52, color: "rgba(255,255,255,0.12)", strokeWidth: 1.25 }} />
        </div>
        <span style={{ position: "absolute", top: 12, left: 12, fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "rgba(255,255,255,0.9)", background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)", borderRadius: 6, padding: "3px 8px" }}>
          {article.category}
        </span>
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="text-[17px] font-semibold text-[var(--fg-1)] tracking-[-0.01em] leading-[1.35] line-clamp-2 group-hover:text-primary transition-colors">{article.title}</h3>
        <p className="text-[13px] leading-[1.55] text-[var(--fg-3)] line-clamp-3 flex-1">{article.excerpt}</p>
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
      <h1 style={{ fontSize: "clamp(32px,4vw,44px)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 20px" }}>
        <span className="wa-grad">{article.title}</span>
      </h1>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg,#1D4ED8,#3B82F6)", border: "1px solid var(--wa-border-strong)", flexShrink: 0 }} />
        <div>
          <strong style={{ display: "block", fontSize: 14, color: "var(--fg-1)" }}>Lucas Guimarães</strong>
          <span style={{ fontSize: 12, color: "var(--fg-3)" }}>{article.date} · {article.readTime} min de leitura</span>
        </div>
      </div>
      <div className={cn("h-[260px] rounded-xl mb-8 border border-[var(--wa-border)] relative overflow-hidden", `cover-${article.hue}`)}>
        {(() => { const Icon = article.icon; return <Icon style={{ position: "absolute", bottom: 24, right: 24, width: 80, height: 80, color: "rgba(255,255,255,0.1)", strokeWidth: 1 }} /> })()}
      </div>
      <ArticleBody body={article.body} />
      {article.source && (
        <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--wa-border)", fontSize: 13, color: "var(--fg-4)", lineHeight: 1.6 }}>
          <strong style={{ color: "var(--fg-3)" }}>Fontes:</strong> {article.source}
        </div>
      )}
    </article>
  )
}

export default function ContentPage() {
  const [selectedArticle, setSelectedArticle] = useState<typeof ARTICLES[0] | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredArticles = selectedCategory
    ? ARTICLES.filter((a) => a.category === selectedCategory)
    : ARTICLES

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
            <h1 className="hero-enter" style={{ animationDelay: "80ms", fontSize: "clamp(40px,5vw,68px)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0 }}>
              <span className="wa-grad">Simplifique IA e mídia paga —<br />sem perder as nuances.</span>
            </h1>
            <p className="hero-enter" style={{ animationDelay: "160ms", fontSize: 19, lineHeight: 1.6, color: "var(--fg-2)", maxWidth: 640, margin: 0 }}>
              Playbooks práticos, workflows de IA e análises de campanhas reais. Escrito por quem já gerenciou <strong style={{ color: "var(--fg-1)" }}>mais de R$20M</strong> em anúncios.
            </p>
            <div className="hero-enter" style={{ animationDelay: "240ms", display: "flex", gap: 12 }}>
              <Button className="magnetic-btn" onClick={() => setSelectedArticle(ARTICLES[0])}>
                Leia o último playbook <ArrowRight className="ml-2 h-4 w-4 arrow-slide" />
              </Button>
            </div>
            <div className="hero-enter" style={{ animationDelay: "320ms", display: "flex", alignItems: "center", marginTop: 16, paddingTop: 24, borderTop: "1px solid var(--wa-border)", width: "100%", maxWidth: 560 }}>
              {[["R$20M+", "Mídia gerenciada"], ["+329%", "Leads YoY"], ["+40", "Empresas atendidas"]].map(([val, lbl], i) => (
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
              <h2 className="wa-section-h2">
                {selectedCategory ? selectedCategory : "Novidades da semana"}
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  style={{ fontSize: 13, color: "var(--fg-3)", background: "var(--bg-2)", border: "1px solid var(--wa-border)", borderRadius: 8, padding: "6px 14px", cursor: "pointer", fontFamily: "inherit" }}
                >
                  Todos
                </button>
              )}
              <a href="#" style={{ color: "var(--wa-blue-500)", fontSize: 14, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 4 }}>
                Ver todos <ArrowRight style={{ width: 14, height: 14 }} />
              </a>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 24 }}>
            {filteredArticles.map((a) => <ArticleCard key={a.id} article={a} onClick={() => { setSelectedArticle(a); window.scrollTo(0, 0) }} />)}
          </div>
        </section>

        {/* Topics */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px 96px" }}>
          <div style={{ marginBottom: 32 }}>
            <div className="wa-section-eyebrow" style={{ marginBottom: 12 }}>
              <span className="wa-section-eyebrow-dot" /> Tópicos
            </div>
            <h2 className="wa-section-h2">Escolha seu caminho</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 20 }}>
            {TOPICS.map((t) => (
              <div
                key={t.name}
                onClick={() => setSelectedCategory(selectedCategory === t.categoryFilter ? null : t.categoryFilter)}
                style={{
                  background: "var(--bg-2)",
                  border: selectedCategory === t.categoryFilter ? "2px solid var(--wa-blue-500)" : "1px solid var(--wa-border)",
                  borderRadius: 12,
                  padding: 24,
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  transition: "border-color 0.15s",
                }}
              >
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
      </main>

      <Footer />
    </div>
  )
}
