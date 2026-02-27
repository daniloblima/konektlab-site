# Landing Page Master — Danilo Lima

> Documento de referência para todas as landing pages do Danilo.
> Criado em 2026-02-27 a partir do processo de construção do konektlab-site v3.4.
> Use como ponto de partida para novas páginas. Não substituir, apenas versionar.

---

## 1. Identidade visual

### Paleta de cores

| Nome         | Hex       | Uso principal |
|---|---|---|
| `licorice`   | `#1B1212` | Hero bg, texto principal, botões dark |
| `black-olive`| `#44423F` | Fundos alternativos escuros (secundário) |
| `mustard`    | `#E8AF58` | Acento, hover de CTAs, destaques, borda de blocos |
| `mustard-dark`| `#C4922A`| Textos dourados, números de evidência |
| `sky`        | `#7FAED1` | Ícones, CTA Final bg, hero glow |
| `platinum`   | `#E7E4DF` | Seções alternadas, intro bg, borda de cards |
| `powder`     | `#F9F7F5` | Seções principais, fundo do body |

**Regra de alternância de seções** (ordem usada no konektlab-site):
```
Hero (Licorice) → Intro (Platinum) → Problema (Powder) → Por que (Platinum) →
Sobre (Powder) → Serviços (Platinum) → Evidências (Powder) → Custo (Black Olive) →
Como funciona (Powder) → CTA Final (Sky) → Footer (Licorice)
```

A alternância entre Powder e Platinum cria ritmo visual sem nunca ser monótono.
Seções de impacto (hero, custo) usam fundos escuros para criar contraste.

### Tipografia

| Fonte | Uso | Google Fonts |
|---|---|---|
| Archivo Narrow | Títulos (h1, h2, h3), números grandes | `Archivo+Narrow:ital,wght@0,400..700;1,400` |
| Albert Sans | Corpo, CTAs, labels | `Albert+Sans:wght@300;400;500;600` |
| Nunito Bold | Logo apenas | `Nunito:wght@700` |

**Escala tipográfica** (rem → px):
```
0.75rem = 12px   0.875rem = 14px   1rem = 16px   1.125rem = 18px
1.25rem = 20px   1.375rem = 22px   1.5rem = 24px  1.75rem = 28px
2.25rem = 36px   3rem = 48px       3.75rem = 60px
```

**h1**: `clamp(2rem, 5vw, 3.75rem)` — responsivo automático
**h2**: `clamp(1.5rem, 3.5vw, 2.25rem)` — responsivo automático

### Logo

```html
<span class="logo">konekt<span class="logo-dot">.</span>lab</span>
```

Fonte Nunito Bold. O ponto recebe `color: var(--mustard)` separadamente.
Para outras marcas: manter o padrão `nome<span class="logo-dot">.</span>sufixo`.

---

## 2. Layout

### Container

Largura máxima única: `1100px`. Ambos `.container` e `.container--wide` usam o mesmo
valor (`--max-w: 1100px`). Padding lateral: `2rem` (32px).

Isso garante margens laterais idênticas em todas as seções em desktop.

### Breakpoints

| Tamanho | Regra | Comportamento |
|---|---|---|
| Default (mobile) | < 640px | 1 coluna, padding reduzido |
| Tablet | ≥ 640px | 2 colunas nos grids, foto ao lado da bio |
| Desktop | ≥ 1024px | 3 colunas em grids de cards |
| Mobile ajuste | < 480px | Seções com padding menor, hero shapes menores |

---

## 3. Estrutura de seções

Sequência validada para página de serviço B2B:

```
1. HEADER        navbar fixo, transparente → powder ao rolar
2. HERO          headline problema + subheadline + CTA
3. INTRO         parágrafo de transição (quem é o cliente)
4. PROBLEMA      cards com situações de identificação
5. POR QUE       explicação + frase destaque (2 colunas)
6. SOBRE         foto + bio + stats
7. SERVIÇOS      cards com o que oferece
8. EVIDÊNCIAS    resultados numéricos com contador animado
9. CUSTO DA INAÇÃO  fundo escuro, frase de impacto
10. COMO FUNCIONA   passos numerados conectados
11. CTA FINAL    fechamento simples + botão
12. FOOTER       copyright
```

**Lógica narrativa**: StoryBrand (cliente é herói) + PAS no bloco hero.
O visitante se identifica no Problema, entende o Por Que, conhece o guia (Sobre),
vê o que ele oferece (Serviços), acredita nas evidências e age no CTA Final.

---

## 4. Sistema de variáveis editáveis (CSS)

A página usa um bloco de variáveis no topo do `:root` em `style.css`.
Permite edição de fontes e espaçamentos sem procurar no arquivo:

### Bloco de tipografia
```css
/* ── TIPOGRAFIA POR SEÇÃO ── */
--fs-hero-sub:     1.375rem;   /* hero — subheadline              */
--fs-intro:        1.35rem;    /* intro — parágrafo               */
--fs-card-prob:    1.2rem;     /* problema — texto dos cards      */
--fs-por-que:      1.125rem;   /* por que — parágrafo             */
--fs-por-que-dest: 1.375rem;   /* por que — frase destaque        */
--fs-bio:          1rem;       /* sobre — bio                     */
--fs-servico:      1rem;       /* serviços — texto dos cards      */
--fs-evidencia:    0.9375rem;  /* evidências — resultado          */
--fs-passos:       1rem;       /* como funciona — texto           */
--fs-cta-final:    1.125rem;   /* CTA final — parágrafo           */
```

### Bloco de espaçamentos
```css
/* ── ESPAÇAMENTOS EDITÁVEIS ── */
--pd-secao:    var(--sp-16);  /* padding vertical de todas as seções */
--pd-intro:    var(--sp-8);   /* padding vertical da intro           */
--gap-p:       var(--sp-3);   /* espaço entre parágrafos             */
--sp-hero-sub: var(--sp-6);   /* espaço entre h1 e subheadline       */
--sp-hero-cta: var(--sp-6);   /* espaço entre subheadline e CTA      */
```

**Regra de reuso**: toda nova página deve incluir esses dois blocos no topo do CSS.
Isso elimina a necessidade de buscar valores espalhados pelo arquivo.

---

## 5. Botões CTA

### Classes disponíveis

| Classe | Estado normal | Uso |
|---|---|---|
| `.cta-white` | Branco sólido + texto Licorice | NavBar transparente (hero escuro) |
| `.cta-powder` | Powder fill + texto Licorice | Hero (sobre fundo escuro) |
| `.cta-dark` | Licorice fill + texto Powder | Seções claras (serviços, CTA final) |

### Estados de hover (padrão Mustard)

**Todos os botões** mudam para `Mustard fill + texto Licorice` no hover.
Isso cria consistência: Mustard é sempre a cor de ação.

### Variação por contexto de navbar

```
NavBar transparente (hero):  branco (off) → Mustard (on)
NavBar scrolled (powder):    Licorice fill (off) → Mustard (on)
```

A troca de estado do NavBar é feita com `#site-header.scrolled .cta-white { }`.

### Anatomia do botão

```css
.cta-btn {
  padding: 0.875rem 2rem;
  border-radius: var(--r-full);   /* pílula */
  border: 2px solid transparent;
  min-height: 48px;               /* acessibilidade */
  font-weight: 500;
}
.cta-sm { padding: 0.6rem 1.25rem; min-height: 40px; }  /* versão header */
```

---

## 6. Hero

### Estrutura HTML

```html
<section id="hero" class="hero">
  <!-- 5 shapes animadas de fundo -->
  <div class="hero-shape hero-shape--1"></div>
  ...
  <div class="container">
    <h1>
      Headline linha 1.
      <span class="h1-line2">Headline linha 2 em Mustard.</span>
    </h1>
    <p class="subheadline">Subheadline aqui.</p>
    <a href="#" class="cta-btn cta-powder" id="cta-hero">CTA</a>
  </div>
</section>
```

O `h1` tem sempre duas linhas: linha 1 em branco, linha 2 (`.h1-line2`) em Mustard.
`display: block` na linha 2 garante quebra obrigatória.

### Gradiente de fundo

```css
.hero {
  background: radial-gradient(ellipse 80% 55% at 50% -5%, var(--hero-glow), transparent 68%),
              var(--licorice);
}
--hero-glow: rgba(127, 174, 209, 0.22);  /* editável no :root */
```

Glow sai do topo central e desaparece no meio da tela.
Para variar: troque `--hero-glow` por cor Mustard (`rgba(232, 175, 88, 0.18)`) para tom mais quente.

### Animação stagger do hero

Palavras do h1 aparecem em sequência (55ms por palavra) usando `@keyframes wordIn`.
Subheadline e CTA aparecem como blocos depois que o h1 termina.

Implementado em vanilla JS (`initHeroStagger()` em `main.js`).
Funciona sem build step — compatível com GitHub Pages.

**Fallback**: sem JS, todos os elementos ficam visíveis normalmente.

### Shapes decorativas

5 elipses com `radial-gradient` nas cores Mustard e Sky (opacidade 5–8%).
Animação `float` de 12s com `heroShapeIn` para entrada suave.
Em mobile < 480px, shapes 1 e 2 ficam menores e shape 5 some.

---

## 7. Seção Intro

**Papel**: parágrafo de transição entre hero e problema. Qualifica o público antes
de apresentar os cards de dor.

```html
<section id="intro" class="intro">
  <div class="container container--wide">
    <p class="intro-text">Texto de transição aqui.</p>
  </div>
</section>
```

**Background**: `var(--platinum)` — cria separação visual clara do hero escuro.
**Fonte**: `var(--fs-intro)` ≈ 1.35rem. Centralizado, `max-width: 720px`.
**Padding**: `var(--pd-intro)` (menor que as seções padrão).

---

## 8. Cards de problema

4 cards em grid 2×2 (tablet/desktop), 1 coluna (mobile).
Cada card tem: ícone SVG em box Sky + parágrafo de situação.

O hover do card ativa `.card-active` via JS (background Mustard 8% no card).

**Fonte**: `var(--fs-card-prob)` ≈ 1.2rem. Deliberadamente menor que corpo padrão
para dar leveza e permitir leitura rápida.

---

## 9. Seção "Por que" — layout 2 colunas

```html
<section id="por-que" class="por-que reveal">
  <div class="container">
    <h2>Por que isso acontece</h2>  <!-- fora do grid, largura total -->
    <div class="por-que-grid">
      <div class="por-que-esq">
        <p>Parágrafo explicativo...</p>
      </div>
      <div class="por-que-dir">
        <p class="por-que-destaque">Frase destaque...</p>
      </div>
    </div>
  </div>
</section>
```

**Regra**: h2 sempre fora do grid (acima, largura total).
O grid tem `1fr 1fr` em tablet+ e `1fr` em mobile.

**Bloco destaque** (`.por-que-destaque`):
- Fundo `rgba(232, 175, 88, 0.12)` (Mustard suave)
- `border-left: 4px solid var(--mustard)`
- Itálico, font-weight 500
- Font-size `var(--fs-por-que-dest)` — maior que o parágrafo ao lado

---

## 10. Seção Sobre

Layout 2 colunas (foto + bio) a partir de 640px.
A foto tem uma shape rotacionada de Mustard 12% como fundo decorativo.

**h2 dentro da coluna `.bio`**, não acima do flex:
```html
<div class="bio">
  <h2>Nome aqui</h2>
  <p>Bio...</p>
  <div class="sobre-stats">...</div>
</div>
```

### Stats

3 colunas iguais (`flex: 1`) com dois textos por coluna:
- `stat-value`: fonte grande (2.5rem), cor Mustard. Até 2 palavras / ~12 caracteres.
- `stat-label`: fonte pequena (0.875rem), cinza. Até 4 palavras / ~25 caracteres.

```html
<div class="stat-item">
  <span class="stat-value">Texto curto</span>
  <span class="stat-label">descrição em até quatro palavras</span>
</div>
```

**Gostos do Danilo**: preferência por palavras/qualificadores em vez de números.
Os números estão na seção de Evidências; os stats do Sobre devem remeter
a competência e posicionamento, não duplicar métricas.

---

## 11. Cards de serviço

Grid 3 colunas (desktop), 2 (tablet), 1 (mobile).
Cada card: ícone SVG + h3 + parágrafo.

**Hover do ícone**: `background-color: var(--mustard)` + `color: #fff` (o ícone SVG
inverte para branco). Não muda apenas a cor do SVG — muda o fundo do box inteiro.

---

## 12. Scroll reveal

Classe `.reveal` em qualquer elemento ativa fade-in + translateY(24px) → 0.
`data-delay="150"` em ms para stagger manual entre cards.

```html
<article class="card-servico reveal" data-delay="100">
```

IntersectionObserver com threshold 0.12. Dispara uma vez (unobserve após visível).

---

## 13. Contadores animados

Cards de evidência com `data-target`, `data-prefix`, `data-suffix`:
```html
<div class="evidencia-numero" data-target="20" data-prefix="R$" data-suffix="M">R$0M</div>
```

Animação ease-out cúbico em 1400ms. Dispara quando 50% do card está visível.

---

## 14. JavaScript — estrutura

Sem dependências. Compatível com GitHub Pages.

```
initCTAs()          — aplica UTM nos hrefs dos botões
initStickyHeader()  — navbar transparente → powder ao rolar 40px
initHeroStagger()   — animação de palavras do h1
initScrollReveal()  — IntersectionObserver nos .reveal
initCounters()      — contadores animados nas evidências
initAnimatedBackground() — hover nos cards de problema
```

**CTA Base URL** (Google Calendar):
```
https://calendar.app.google/y9kQeTfRk1hApJw78
```

UTM pattern: `?utm_source=site&utm_medium=cta&utm_campaign={seção}`

---

## 15. Infraestrutura

| Item | Configuração |
|---|---|
| Hospedagem | GitHub Pages |
| Domínio | konektlab.com (GoDaddy → CNAME para daniloblima.github.io) |
| Repositório | github.com/daniloblima/konektlab-site (público) |
| Build | Nenhum. Arquivos estáticos direto. |
| Fontes | Google Fonts via CDN (preconnect configurado) |
| Analytics | Nenhum ainda — adicionar GA4 quando subir |

---

## 16. Processo de revisão — o que aprendemos

### Sequência de polonimento (Speed to Value)

1. Fazer funcionar (HTML + copy + estrutura)
2. Fazer funcionar bem (design system, variáveis, responsividade)
3. Fazer bonito (polish visual, hierarquia, animações)

Não pular etapas. Cada iteração é uma versão (`v3.1`, `v3.2`...).

### Problemas que vão aparecer (e como resolver)

**Hierarquia tipográfica quebrada**: subheadline competindo com h1.
Solução: subheadline nunca ultrapassa 1.375rem (22px). h1 é `clamp(2rem, 5vw, 3.75rem)`.

**Cards com texto grande demais**: texto de card deve ser ~20% menor que corpo.
Solução: `--fs-card-prob: 1.2rem` enquanto o corpo padrão é 1rem.

**Ícone hover incompleto**: mudar só a cor do SVG (`color`) deixa o box background visível.
Solução: mudar `background-color` do `.card-icon` também no hover.

**Seção intro solta**: parágrafo flutuando sem contexto visual.
Solução: background diferente do que veio antes (Platinum após Licorice cria separação clara).

**Botão header invisível sobre hero escuro**: outline Licorice em fundo escuro = zero contraste.
Solução: `.cta-white` com fill branco sólido para estado transparente do header.

**Largura inconsistente entre seções**: `.container` (900px) vs `.container--wide` (1100px).
Solução: igualar `--max-w` e `--max-w-wide`. Uma variável, margens uniformes em toda a página.

**Stats com números duplicando evidências**: números nas duas seções confunde e dilui o impacto.
Solução: stats do Sobre = posicionamento/qualificação. Evidências = métricas concretas.

### Gostos do Danilo

- Hover de CTA **muda de cor** (Mustard), não apenas sombra e movimento
- Hero com gradiente de glow central sutil (não fundo sólido)
- Frase destaque do "Por que" em caixa Mustard — mais impacto que itálico sozinho
- Seção "Sobre" com h2 dentro da coluna da bio (foto e nome na mesma estrutura)
- Stats como qualificadores textuais, não duplicação de números
- Layout 2 colunas para h2 + texto + destaque lado a lado
- Sem `.body-text` no hero: hero = apenas h1 + subheadline + CTA
- Parágrafo introdutório do público em seção separada (Intro) entre hero e problema
- Seção Intro em Platinum (não Powder) para criar transição visual do hero escuro
- Animação stagger de palavras no hero (vanillaJS, sem build)

---

## 17. Para criar uma nova página

### Checklist de início

1. Copiar `konektlab-site/` inteiro para nova pasta (`konektlab-palestras/`, por ex.)
2. Trocar o conteúdo em `index.html` — manter a estrutura de seções
3. Ajustar as cores da paleta se necessário (apenas 1–2 cores mudam)
4. Ajustar `--hero-glow` para a nova tonalidade
5. Configurar o `CTA_BASE` em `main.js` com o link de calendário correto
6. Criar `CHANGELOG.md` novo antes de começar
7. Criar repositório GitHub e configurar Pages
8. Configurar CNAME no GoDaddy para o novo domínio/subdomínio

### O que pode variar entre páginas

- Copy completo (nova página = novo público, novo serviço)
- Cor de destaque secundária (manter Licorice + Mustard como base)
- `--hero-glow`: Mustard para mais quente, Sky para mais frio
- Seção "Serviços" → adaptar para "Palestras" ou "Formatos"
- Stats: adaptar para credenciais relevantes ao contexto (palestras vs. consultoria)
- Evidências: casos específicos do contexto

### O que NÃO mudar

- Paleta base (Licorice, Mustard, Powder, Platinum)
- Tipografia (Archivo Narrow + Albert Sans)
- Sistema de variáveis no topo do CSS
- Lógica de alternância de fundos entre seções
- Comportamento dos CTAs (hover Mustard)
- Estrutura de navegação (NavBar fixo + CTA único)

---

## 18. Arquivos do projeto konektlab-site

| Arquivo | Status | Observação |
|---|---|---|
| `index.html` | Ativo | Fonte da verdade do conteúdo |
| `css/style.css` | Ativo | Design system completo com variáveis editáveis |
| `js/main.js` | Ativo | v3.2, sem dependências |
| `CHANGELOG.md` | Ativo | Consultar antes de qualquer trabalho |
| `COPY.md` | Referência | Copy aprovado — ainda válido como referência de texto |
| `HANDOFF.md` | Arquivável | Descreve fases 0–2; projeto está em v3.4 funcional |
| `RETOMADA.md` | Arquivável | Estado de 2026-02-26 completamente superado |
| `.planning/` | Arquivável | Planos GSD de fases já executadas |
| `konektlab-backup-wix/` | Referência | Backup do site Wix original |
