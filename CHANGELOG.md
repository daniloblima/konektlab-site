# CHANGELOG — konekt.lab site

> Registra todos os problemas, bugs, decisões técnicas e soluções.
> Consultar obrigatoriamente após cada compactação de contexto.

---

## [2026-02-26] — v2: redesign completo com identidade visual da marca

### OBJETIVO
Reconstruir o site do zero aplicando o moodboard de Danilo Lima (criado por Victor Wendt): paleta da marca, tipografia correta, estrutura de seções com fundo diferenciado por seção, animações scroll-triggered e contadores animados.

### O QUE FOI IMPLEMENTADO

**Paleta aplicada**
- Licorice `#1B1212` — texto principal e footer
- Black Olive `#44423F` — hero e seção custo da inação
- Mustard `#E8AF58` — números em destaque nas evidências
- Sky `#7FAED1` — CTAs, ícones, eyebrow labels, seção por-que e cta-final
- Platinum `#E7E4DF` — fundo da seção serviços
- Powder `#F9F7F5` — fundo base das seções neutras

**Tipografia (Google Fonts)**
- Archivo Narrow: h1, h2, h3, números das evidências, botão de passo
- Albert Sans: corpo, subtítulos, eyebrow, CTAs

**Estrutura de seções (fundos alternados)**
- Hero: Black Olive, texto branco, eyebrow Sky
- Problema: Powder, 4 cards 2×2 com ícone Sky
- Por que: Sky, texto Licorice
- Sobre: Powder, foto + bio lado a lado, foto com border-radius generoso
- Serviços: Platinum, 3 cards com ícone Sky
- Evidências: Powder, número grande em Mustard, contador animado
- Custo: Black Olive, frase curta centralizada, texto branco
- Como funciona: Powder, 3 passos com número Sky em círculo + linha conectora
- CTA Final: Sky, CTA em Licorice
- Footer: Licorice, texto Platinum

**Novidades no JS**
- `initStickyHeader()`: header transparente → powder com sombra após 40px de scroll
- `initScrollReveal()`: stagger via `data-delay` por card
- `initCounters()`: animação ease-out cubic do 0 ao valor target nos números das evidências
- 4 CTAs com UTM: header, hero, servicos, cta-final

**Foto**
- Copiada de OneDrive para `images/danilo-lima.jpg`

### DECISÕES TÉCNICAS
- `cards-grid--2col`: modificador para os 4 cards do problema ficarem em 2×2 em vez de 3+1
- Linha conectora nos passos: pseudo-elemento `::before` com `background: linear-gradient(to bottom, sky, transparent)`, evita div extra
- `clamp()` nos h1 e h2: escala tipográfica fluida sem media queries extras
- Contadores animados: `requestAnimationFrame` com ease-out cubic — sem biblioteca

### ARQUIVOS MODIFICADOS
- `index.html` — reescrito completo (v1→v2)
- `css/style.css` — reescrito completo (v1→v2)
- `js/main.js` — reescrito completo (v1→v2)
- `images/danilo-lima.jpg` — foto adicionada

---

## [2026-02-26] — Fase 1 completa: cards, responsividade, scroll reveal, CTAs com UTM

### OBJETIVO
Concluir a Fase 1 da landing page konekt.lab. Partindo de index.html (135 linhas) e css/style.css (370 linhas) já existentes, implementar os componentes faltantes para publicação no GitHub Pages.

### O QUE FOI IMPLEMENTADO

**css/style.css — append após linha 370**

- `.cards-grid`: grid mobile-first (1 col base → 2 col em 640px → 3 col em 1024px)
- `.card-servico`: fundo branco, borda sutil, border-radius, hover com box-shadow + translateY(-2px)
- `.card-evidencia`: estrutura de duas partes — `.situacao` (texto muted, border-bottom) e `.resultado` (font-weight 600)
- `.servicos .cta-btn { margin-top: var(--space-6) }`: espaçamento entre grid e botão sem alterar o grid
- `.reveal` / `.reveal.is-visible`: fade-in via opacity 0→1 e translateY(20px→0), transition 0.5s
- `body { overflow-x: hidden }`: previne scroll horizontal em mobile
- `.foto-placeholder { margin: auto }`: centraliza foto em mobile, desfeito em 640px
- Media query 640px: grid 2 colunas, sobre-content row, foto 200px
- Media query 1024px: grid 3 colunas, foto 240px

**js/main.js — reescrito completo**

- `initCTAs()`: popula href dos 3 CTAs com UTMs distintos (utm_campaign=hero, servicos, cta-final). Link base centralizado em constante.
- `initScrollReveal()`: IntersectionObserver com threshold 0.1. unobserve após reveal — animação dispara uma vez, sem piscar ao rolar de volta.
- Smooth scroll NÃO implementado no JS — `html { scroll-behavior: smooth }` já está no CSS linha 68.

**index.html — 8 sections atualizadas**

Adicionado `class="reveal"` em todas as sections exceto `#hero`:
`#problema`, `#por-que`, `#sobre`, `#servicos`, `#evidencias`, `#custo`, `#como-funciona`, `#cta-final`

### DECISÕES TÉCNICAS

- Sem smooth scroll no JS: evita dead code duplicado com a regra CSS já existente.
- `unobserve` após reveal: mais performático que manter observer ativo; evita flash ao rolar de volta.
- `overflow-x: hidden` no body adicionado no bloco de responsividade para colocar junto ao contexto onde é necessário.
- `.foto-placeholder` centralizado com `margin: auto` em mobile e desfeito (`margin: 0`) em 640px quando fica lado a lado com a bio.
- `.servicos .cta-btn` com `margin-top` em vez de alterar padding do grid — mantém espaçamento semântico.
- Sem newsletter, analytics ou nav — explicitamente fora do escopo da Fase 1.

### PENDÊNCIAS DE NEGÓCIO (fora do escopo desta sessão)

- Foto de Danilo: quando entregue, substituir `div.foto-placeholder` por `<img loading="lazy" ...>`
- DNS GoDaddy: 4 registros A (185.199.108–111.153) + CNAME para domínio próprio
- Newsletter "Sinal e Ruído": reservada para futura página de palestras

---

## [2026-02-26] — Sessão inicial: estrutura base

### OBJETIVO
Criar estrutura inicial da landing page: HTML semântico com 9 seções, design system CSS, copy aprovado.

### O QUE FOI IMPLEMENTADO
- `index.html`: 9 seções (hero, problema, por-que, sobre, servicos, evidencias, custo, como-funciona, cta-final), 3 CTAs com IDs, copy final
- `css/style.css`: 35 variáveis CSS (:root), reset, layout container/container--wide, tipografia h1-h3, .cta-btn, estilos de todas as seções
- `js/main.js`: arquivo criado vazio (populado na sessão seguinte)
