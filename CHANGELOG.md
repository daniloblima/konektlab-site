# CHANGELOG — konekt.lab site

> Registra todos os problemas, bugs, decisões técnicas e soluções.
> Consultar obrigatoriamente após cada compactação de contexto.

---

## [2026-03-13] — Ajustes mobile, LinkedIn, CTAs unificados e acordeão polido

### OBJETIVO
Finalizar a página de palestras para publicação com domínio próprio (konektlab.com via GoDaddy): corrigir mobile, adicionar LinkedIn nas duas páginas, unificar comportamento de CTAs e polir o acordeão.

### O QUE FOI FEITO

**Mobile — menu e hero**
- CTA do menu mobile ficava invisível na página de palestras: `.header--light` aplicava fundo licorice ao `.cta-white`, idêntico ao fundo do dropdown. Solução: regra específica `header--light .mobile-menu .cta-btn` com fundo powder.
- Hero mobile sem imagem: substituído `<img>` simples por `<figure class="hero-mobile-foto">` com `<figcaption>`. Foto trocada de `ibramerc-03` para `ibramerc-05`. CSS: `min-height: 0`, `padding-bottom: var(--sp-8)` e `align-self: center` no CTA.

**Blocos .temas-nota e .contratar-nota no mobile**
- `display: flex; justify-content: space-between` quebrava no mobile estreito. Solução: `@media (max-width: 639px)` com `flex-direction: column; align-items: flex-start`.

**Footer da página de palestras**
- Fundo `var(--black-olive)` era escuro demais logo após o CTA final (licorice). Trocado para `var(--powder)` com texto `var(--black-olive)` opacity 0.6.

**LinkedIn — ambas as páginas**
- Bloco `.linkedin-teaser` adicionado no CTA final: inline-flex com ícone SVG e link para `linkedin.com/in/daniloblima`.
- Footer de ambas as páginas: adicionado `<p><a class="footer-linkedin">linkedin.com/in/daniloblima</a></p>`.
- Bug: `.linkedin-teaser` ficava invisível na página de palestras (herdava cor licorice do body sobre fundo licorice). Solução: `.cta-final--dark { color: #fff }` no palestras.css.

**CTAs unificados**
- `index.html`: todos os CTAs de navegação (`#cta-header`, `#cta-mobile`, `#cta-hero`, `#cta-servicos`) apontam para `#cta-final` (âncora interna), sem `target="_blank"`.
- `initCTAs()` simplificado para setar apenas `#cta-final-btn` com Google Calendar URL + UTM. A lógica de sobrescrita de todos os CTAs foi removida.

**Acordeão — label dos painéis colapsados**
- Problema original: label com `bottom: 20px; translateX(-50%); rotate(90deg)` — final da palavra ficava no meio do painel, não na borda inferior.
- Solução: `right: calc(50% + 8px); bottom: var(--sp-3); transform-origin: right bottom; rotate(90deg)`. O 8px compensa metade da altura do elemento para centralizar o texto no strip de 54px; o `bottom: var(--sp-3)` dá respiro sem colar o final na borda.
- Estado ativo (`--active`): `right: auto; left: 50%; bottom: 20px; transform-origin: center; translateX(-50%) rotate(0deg)`.

**Seções adjacentes com mesmo fundo**
- `.midia` e `.como-contratar` ambas usavam `var(--powder)`. Trocado `.como-contratar` para `var(--platinum)` para alternar a sequência de fundos.

**Publicação com domínio customizado**
- DNS GoDaddy configurado e sincronizado com GitHub Pages. Site acessível em konektlab.com.

### LIÇÕES APRENDIDAS
- `color: currentColor` herda do body, não do container imediato — em seções com fundo escuro, precisa de `color: #fff` explícito no container para que links e ícones fiquem visíveis.
- `transform-origin: right bottom` + `right: calc(50% + height/2)` é a fórmula correta para ancorar texto rotacionado 90° pelo seu final e centralizá-lo horizontalmente num strip de largura fixa. O `height/2` compensa o deslocamento geométrico da âncora.
- Ao simplificar `initCTAs()`, garantir que a lógica antiga de sobrescrita não afete a nova âncora interna.

---

## [2026-03-12] — Redesign visual da página de palestras e implementação de 9 itens

### OBJETIVO
Dois objetivos: (1) redesign do hero split com acordeão de imagens, (2) revisão visual completa da página — 9 itens planejados e implementados em passagem única.

### O QUE FOI FEITO

**Hero split com acordeão de imagens**
- Substituiu imagem única por acordeão de 4 painéis, hover expande com transição CSS (`flex` + JS `mouseenter`).
- 4 fotos: `ibramerc-03`, `ibramerc-04`, `inova-niteroi-03`, `energyshow-01`. Labels rotacionados 90° nos colapsados, horizontais no ativo.
- `initAcordeon()` adicionado em `main.js`.

**Hero — fundo claro**
- Fundo mudado de licorice para powder. Header em modo `--header-light` (logo licorice, links escuros).
- Header scrolled sobrescrito em palestras.css para ficar licorice (não powder como no index).

**Prova social removida**
- `<section id="prova-social">` retirada — conteúdo coberto pela seção `#presenca`.

**Para quem é — hover nos cards**
- `.bloco-contratante` recebe `card-active` (mustard tint + translateY) via `initParaQuemHover()`.

**Temas — hierarquia visual**
- `<span class="tema-publico-label">Para quem</span>` em uppercase mustard-dark adicionado antes de `.tema-publico` em cada card.

**Temas / Como contratar — parágrafo final destacado**
- `<p class="temas-abertura">` substituído por `.temas-nota` / `.contratar-nota`: flex com borda esquerda mustard, texto atualizado, link âncora para `#cta-final`.

**Presença em palco — figcaptions descritivas**
- Fonte aumentada para `--text-sm`. Legendas expandidas com contexto de cada evento.

**Vídeo — proporção correta**
- `.video-wrapper` migrado de `padding-bottom: 56.25%` para `aspect-ratio: 16/9`.

**Footer diferenciado**
- Primeiro: fundo `var(--black-olive)` (escuro, para separar do CTA). Depois revisado para `var(--powder)` (ver sessão 13/03).

**Formulário de contato**
- Google Forms com 7 campos (Nome, E-mail obrigatório, Evento, Público, Tema, Como conheceu, Algo mais).
- `#cta-final-btn` aponta para o Forms com `target="_blank"`. `initCTAs()` retorna cedo em `palestras-page`.

**JS — v3.5**
- `initParaQuemHover()` adicionado. `initAcordeon()` adicionado (sessão 12/03 manhã).

### LIÇÕES APRENDIDAS
- Dimensões ideais para fotos do acordeão: 800×1200px, proporção 2:3 — sujeito centralizado horizontalmente para o painel colapsado mostrar o rosto.
- `aspect-ratio` é superior a `padding-bottom: 56.25%` para embed de vídeo — mais legível e funciona bem em todos os browsers modernos.

---

## [2026-03-11] — Navbar unificado, menu mobile e seção de palestras no index

### OBJETIVO
Equalizar o navbar das duas páginas, resolver problemas de layout no mobile e adicionar visibilidade às palestras no index principal.

### O QUE FOI FEITO

**Header layout**
- Problema: grid `1fr auto 1fr` adicionado anteriormente causava CTA com tamanho variável e quebra no mobile (logo e CTA disputavam espaço com o nav oculto)
- Solução: voltou para `flex + justify-content: space-between` com `.header-nav` absolutamente posicionado (`left: 50%; transform: translateX(-50%)`). Centralização matemática sem afetar os outros elementos.
- Removido: `grid-template-columns` e `justify-self: end`

**Unificação do navbar**
- index.html agora usa as mesmas classes do navbar de palestras (`header-nav`, `nav-link`, `nav-link--active`)
- index.html exibe "Consultoria" (ativo) + "Palestras"; palestras/index.html exibe "Consultoria" + "Palestras" (ativo)
- Fonte: Nunito 700 16px — mesma família da logo, ligeiramente menor
- Estilos do nav migrados para style.css (removido bloco duplicado do palestras.css)

**Menu hambúrguer para mobile**
- Visível apenas em ≤479px; nav e CTA do header ocultos nesse breakpoint
- Dropdown com fundo licorice: links Consultoria, Palestras e CTA
- JS: `initMobileMenu()` — toggle ao clicar no hambúrguer, fechar ao clicar fora
- `cta-mobile` adicionado ao ctaMap com UTM `utm_campaign=mobile`

**Seção "Danilo Lima também é palestrante"**
- Inserida em index.html antes de `#custo` (Custo da Inação)
- Fundo sky — contrasta com o black-olive que vem logo depois
- CTA "Conheça as palestras" → `./palestras/`
- Espelha a seção "Além da palestra" que já existia em palestras/index.html apontando para a consultoria

### LIÇÕES APRENDIDAS
- Diferença de tamanho visual entre as páginas era zoom do browser, não CSS. Ambas têm viewport meta idêntico.
- Grid com colunas `1fr` e elementos de tamanho fixo (logo, botão) cria comportamento inesperado no mobile. Flexbox + posicionamento absoluto para elementos centralizados é mais previsível.

---

## [2026-03-10] — Página de Palestras: planejamento, copy e implementação inicial

### OBJETIVO
Criar a segunda página do site (palestras/index.html) com design system compartilhado, copy aprovado e assets organizados.

### O QUE FOI FEITO

**Etapa 1 — Levantamento de temas (conversa)**
- 4 temas definidos e nomeados: "Pequenos passos e grandes conquistas", "O método antes do produto", "O que move quem compra", "A inquietude de quem avança"
- Fio condutor de posicionamento: pragmático, sem teoria, participante sai sabendo o que fazer
- Público da página: organizadores de eventos, RH corporativo, lideranças

**Etapa 2 — Estrutura e copy (COPY-PALESTRAS.md)**
- 8 seções aprovadas: Hero, Para quem é, Temas, Presença em palco, Mídia, Como contratar, Além da palestra, CTA final
- Arquivo _docs/COPY-PALESTRAS.md com todo o conteúdo aprovado

**Etapa 3 — Reorganização da pasta**
- Criada pasta _docs/ para documentos de trabalho (gitignore)
- Removida pasta img/ vazia
- Documentos movidos: COPY.md, COPY-PALESTRAS.md, LEARNINGS.md, PLANO-PALESTRAS.md, LANDING-PAGE-MASTER.md, Handoff

**Etapa 4 — Assets**
- 6 fotos organizadas em palestras/images/ com nomenclatura padronizada
- Fotos do Ibramerc otimizadas via sips: 1.5MB → 132KB e 2.4MB → 124KB
- Formato quadrado 1:1 para uniformidade no grid

**Etapa 5 — Implementação**
- Criados: palestras/index.html e palestras/css/palestras.css
- CSS compartilhado (style.css) reutilizado; palestras.css apenas overrides e componentes novos
- Navbars atualizados com link cruzado entre as duas páginas
- Bug corrigido: links absolutos (/palestras/) substituídos por relativos (./palestras/) para funcionar no GitHub Pages sem domínio customizado

### PROBLEMAS IDENTIFICADOS (a resolver na próxima sessão)

**1. Navbar da landing page principal (index.html)**
- Problema: o link "Palestras" não está com cor branca quando o header está transparente (hero escuro). Na página de palestras funciona corretamente.
- Causa provável: seletores `.nav-link-main` vs `.nav-link` — classes diferentes entre as duas páginas. A palestras.css tem `.nav-link` com cor explícita para ambos os estados; o style.css tem `.nav-link-main` que pode não estar sendo aplicado corretamente.
- O que verificar: comparar seletores das duas páginas e unificar a lógica

**2. Tamanho de fonte do nav**
- "Consultoria" e "Palestras" estão com font-size var(--text-sm) = 14px, menor que o resto do header
- Aumentar para var(--text-base) = 16px na próxima revisão visual geral

**3. Hero da página de palestras idêntico ao da consultoria**
- Usuário quer diferenciação visual entre as duas páginas
- Sugestões a implementar (ver pendências abaixo)

**4. Seções "Como contratar", "Além da palestra" e "CTA final" iguais às da página principal**
- Estrutura e componentes reutilizados integralmente
- Usuário quer variações visuais

**5. Embed do YouTube**
- Está funcionando mas o corte do vídeo fica estranho por ser em proporção diferente do original
- Já é 16:9 (padding-bottom: 56.25%) — verificar se o problema é de outro tipo

### PENDÊNCIAS — PRÓXIMA SESSÃO

**A. Navbar**
- Unificar comportamento de cor do link entre index.html e palestras/index.html
- Aumentar tamanho da fonte dos links de navegação

**B. Hero diferenciado para página de palestras**
Sugestões a discutir:
- Fundo em gradiente diferente (ex: usar --mustard como cor de destaque em vez de --sky)
- Layout assimétrico: headline à esquerda + foto de evento à direita
- Headline em duas cores diferente do padrão atual
- Remover as hero-shapes e usar uma foto de fundo com overlay escuro

**C. Seção "Como contratar" — diferenciada visualmente**
Sugestões a discutir:
- Cards lado a lado em vez de lista vertical com linha conectora
- Numeração com estilo diferente (ex: números grandes em mustard no fundo)
- Menos passos (3 está bem, mas o visual pode mudar)

**D. Seção "Além da palestra" — diferenciada**
- A seção atual (black-olive) é idêntica à "Custo da inação" da landing principal
- Sugestões: usar platinum com borda mustard, ou powder com destaque lateral

**E. CTA Final — diferenciado**
- Atualmente usa exatamente o mesmo componente da landing principal (sky background)
- Sugestão: mudar a cor de fundo ou adicionar um elemento visual diferente

**F. Formulário de contato**
- CTAs da página de palestras ainda apontam para href="#"
- Criar formulário enxuto para substituir o extenso atual

### LIÇÕES APRENDIDAS
- Links de navegação em GitHub Pages sem domínio customizado devem ser sempre relativos (./palestras/, ../) nunca absolutos (/palestras/)
- Ao reutilizar componentes entre páginas, definir logo de início quais seções podem ser idênticas e quais precisam de variação visual

---

## [2026-02-27] — v3.2: polish visual, hierarquia e animação hero

### OBJETIVO
Dez correções identificadas via revisão com screenshots após v3.1: contraste do botão header, respiro no hero, hierarquia quebrada no hero, fonte dos cards problema, seção "Por que" sem hierarquia, seção Sobre com h2 fora do layout de 2 colunas, hover do ícone de serviço incompleto. Somam-se: largura inconsistente entre seções e animação de texto stagger no hero.

### O QUE FOI IMPLEMENTADO

**HTML — index.html**

- Header CTA: classe `cta-dark cta-sm` → `cta-white cta-sm`. Razão: `cta-dark` era outline Licorice sobre fundo transparente (hero escuro) = invisível.
- Hero: removido parágrafo `.body-text` ("Não importa o estágio..."). O texto migrou para a nova seção `#intro`.
- Nova seção `#intro`: inserida entre `</section>` do hero e `#problema`. Fundo powder, parágrafo centralizado com `max-width: 720px`. Cria transição suave entre hero escuro e seção problema.
- Seção Sobre: `<h2>Danilo Lima</h2>` movido de antes de `.sobre-content` para ser o primeiro filho de `.bio`. O h2 agora faz parte da coluna de texto no layout de 2 colunas (foto + bio).

**CSS — style.css**

- `--max-w`: 900px → 1100px. Efeito: todas as seções com `.container` passam a ter a mesma largura que `.container--wide` (1100px). Margens laterais uniformes em toda a página.
- `.hero h1`: `max-width` 700px → 860px (compensa o container mais largo).
- `.subheadline`: `max-width` 580px → 680px, `font-size` 2.0625rem → 1.375rem (var(--text-xl)). Reduz competição visual com o h1.
- `.hero`: `background-color` var(--black-olive) → var(--licorice). Fundo mais escuro e consistente com a marca. `padding-top` 80px → 160px. Mais respiro acima do h1.
- `.body-text`: bloco removido (classe não tem mais uso no HTML).
- `.cta-dark`: de outline transparente para sólido Licorice. `background-color: var(--licorice)`, `color: var(--powder)`, `border-color: var(--licorice)`. Hover: `background-color: #000`. Afeta `cta-servicos` e `cta-final-btn`.
- `.cta-white`: novo bloco. Fundo branco sólido, texto Licorice, sem borda por padrão. No estado `.scrolled`: borda platinum sutil para distinguir do fundo powder.
- `.intro` e `.intro-text`: novos estilos para a seção de transição.
- `.card-problema p`: `font-size` 1.5rem → 1.2rem (redução de 20%).
- `.por-que p`: `font-size` 1.875rem → var(--text-lg) (18px). Texto menor = mais respiro e hierarquia.
- `.por-que-destaque`: adicionados `background-color: rgba(232,175,88,0.12)`, `padding`, `border-radius`, `border-left: 4px solid var(--mustard)`. De apenas itálico+cor para bloco destacado com caixa.
- `.bio h2`: `margin-bottom: var(--sp-2)` para espaçamento justo dentro da coluna.
- `.sobre-content`: `margin-top: var(--sp-3)` → `0` (h2 não está mais acima do flexbox).
- `.card-icon`: `transition` adicionado `background-color`. Hover via `.card-servico:hover .card-icon`: `background-color: var(--mustard)`, `color: #fff`. O ícone muda o fundo de Sky para Mustard no hover, não apenas a cor do SVG.
- Keyframes `@keyframes wordIn` e classes `.hero-word`, `.hero-block-animate` para animação stagger do hero.
- Mobile (`<480px`): `padding-top` do hero ajustado para 100px (era 80px antes).

**JS — main.js**

- `initHeroStagger()`: nova função que quebra o h1 em `<span class="hero-word">` por palavra, aplica `animation-delay` em stagger de 55ms por palavra (base 300ms). Após o h1 completar, aplica `hero-block-animate` na subheadline (delay = fim do h1 + 150ms) e no CTA hero (+ 250ms). Fallback sem JS: sem as classes, todos os elementos permanecem visíveis normalmente.
- Chamada adicionada no `DOMContentLoaded` antes de `initScrollReveal`.
- Log atualizado para `[konekt.lab] v3.2 initialized`.

### LIÇÕES APRENDIDAS
- `--max-w` controla apenas o `.container`. As seções com `.container--wide` sempre usaram `--max-w-wide` (1100px). Igualar `--max-w` a `--max-w-wide` é o caminho mais simples para consistência de margens.
- Animação stagger por palavra em vanilla JS: iterar `childNodes` do h1 para encontrar o text node direto (linha 1) e processar o span `.h1-line2` (linha 2) separadamente preserva o `display: block` da linha 2.
- `.hero-word` com `opacity: 0` no CSS garante que o elemento começa invisível antes do JS rodar; após o JS adicionar o span, a animação CSS toma conta.

---

## [2026-02-27] — v3.1: tipografia, layout e interação

### OBJETIVO
Sete ajustes pós-v3 identificados em revisão: logo com nova fonte e ponto colorido, remoção de todos os eyebrows, container mais largo, botões unificados em Licorice preenchido, textos de corpo +50% nas seções principais, hover do "Como funciona" simplificado.

### O QUE FOI IMPLEMENTADO

**HTML — index.html**

- Logo: `<span class="logo">konekt<span class="logo-dot">.</span>lab</span>` — permite colorir o ponto independentemente do restante do texto.
- Google Fonts link: adicionado `family=Nunito:wght@700` ao link existente.
- Removidos todos os `<span class="eyebrow ...">` (8 instâncias: hero, problema, por-que, sobre, serviços, evidências, como-funciona). Os h2 de cada seção permanecem.
- Botões: removidos todos os `<span class="cta-arrow">→</span>` (4 instâncias). Classes alteradas:
  - `cta-header`: `cta-sky cta-sm` → `cta-dark cta-sm`
  - `cta-hero`: `cta-sky` → `cta-powder` (hero tem fundo escuro, Licorice seria invisível)
  - `cta-servicos`: `cta-sky` → `cta-dark`
  - `cta-final-btn`: mantido `cta-dark`

**CSS — style.css**

- `--max-w`: 760px → 900px. Efeito: seções com `.container` ganham 140px de largura. Sobre: 3 stats cabem na mesma linha sem wrap (3×~140px + 2×48px gap ≈ 516px < 576px disponíveis).
- `@import` Google Fonts: adicionado `family=Nunito:wght@700`.
- `.logo`: `font-family` alterado de `var(--font-heading)` para `'Nunito', sans-serif`.
- `.logo-dot`: novo seletor, `color: var(--mustard)`.
- `#site-header.scrolled .logo-dot`: `color: var(--mustard)` — preserva Mustard após scroll, sobrescreve herança de cor do `.logo` que muda para Licorice.
- Eyebrows removidos: excluídos os blocos `.eyebrow`, `.eyebrow--dark`, `.eyebrow--on-sky` (nenhum elemento usa mais essas classes).
- `.cta-btn`: removido `gap: 0.5rem` (era necessário apenas pela seta).
- `.cta-sky` e `.cta-sky:hover` e `.cta-sky:active`: removidos.
- `.cta-arrow` e `.cta-btn:hover .cta-arrow`: removidos.
- `.cta-dark:active`: adicionado `transform: translateY(0)`.
- `.cta-powder`: novo bloco — `background-color: var(--powder); color: var(--licorice)`. Hover: `background-color: #fff`, `translateY(-2px)`, shadow leve.
- `.subheadline`: `font-size` de `var(--text-xl)` (22px) para `2.0625rem` (33px, +50%).
- `.body-text`: `font-size` de `var(--text-lg)` (18px) para `1.6875rem` (27px, +50%).
- `.card-problema p`: `font-size` de `var(--text-base)` (16px) para `1.5rem` (24px, +50%).
- `.por-que p`: `font-size` de `1.25rem` (20px) para `1.875rem` (30px, +50%).
- `.sobre-stats`: removido `flex-wrap: wrap` (container maior garante que as 3 stats caibam; mobile mantido via media query `< 480px`).
- `.passo`: removidos `border-left: 3px solid transparent`, `padding-left: 0`, e `transition: border-color, padding-left`.
- `.passo:hover`: bloco removido.
- `.passo-content`: removido `transition: transform`.
- `.passo:hover .passo-content`: bloco removido.
- `.passo-numero`: adicionado `transition: background-color var(--t-base)`.
- `.passo:hover .passo-numero`: novo seletor, `background-color: var(--mustard)`.

### DECISÕES TÉCNICAS

- `cta-powder` no hero (em vez de `cta-dark`): fundo Black Olive (#44423F) tornaria Licorice fill quase invisível. Powder fill mantém contraste alto e é visualmente distinto dos demais CTAs do site.
- Remoção do `flex-wrap` no `.sobre-stats`: com container em 900px, as 3 stats cabem sem wrap. A media query `< 480px` com `flex-direction: column` cobre mobile. Manter wrap em desktop era defensivo mas desnecessário.
- Hover "Como funciona" simplificado: o deslocamento de border + padding + translateX criava micro-jank em alguns browsers. Trocar por mudança de cor no círculo é mais limpo e suficiente como feedback visual.

---

## [2026-02-27] — v3: mescla v2 + protótipo Lovable

### OBJETIVO
Mesclar o melhor do site v2 (vanilla HTML/CSS/JS) com o protótipo Lovable (React/Vite/Tailwind), mantendo base vanilla compatível com GitHub Pages sem build step.

### O QUE FOI IMPLEMENTADO

**CSS — style.css (reescrito)**

- Adicionada variável `--mustard-dark: #C4922A` para numerais de evidências
- Botão CTA: migrado de fill sólido para pílula outline unificada (`border-radius: 999px`, `border: 2px solid`, fundo transparente). Hover: preenche com a cor da variante. `.cta-arrow` (span `→`) com `opacity: 0 → 1` no hover via transition.
- Hero: adicionado `min-height: 100vh`, `display: flex; align-items: center`, layout centralizado (`text-align: center`), `position: relative; overflow: hidden` para shapes. `.h1-line2` com `color: var(--mustard); display: block`.
- Hero shapes: 5 divs `.hero-shape--N` com radial-gradient Mustard/Sky em opacidade muito baixa (0.05–0.08). Animação `heroShapeIn` (fade-in, 1.2s, delays escalonados 0/0.2/0.4/0.6/0.8s) + `float` (translateY 0→15px, 12s, delays negativos para phase offset: 0/-2/-4/-6/-8s).
- Por que: fundo alterado de Sky para Platinum (`#E7E4DF`). Pseudo-elemento `::before` com aspa tipográfica (`"`) em Archivo Narrow 20rem, Mustard opacity 0.07, position absolute top-right. Fonte do parágrafo: 1.25rem. Classe `.por-que-destaque` (frase-chave): itálico + `color: var(--mustard-dark)`.
- Sobre: `.foto-wrapper` com `position: relative`. `.foto-bg-shape` absoluto, `inset: -12px`, Mustard 12% opacity, `rotate(-3deg)`, z-index 0. `.foto-danilo` com `position: relative; z-index: 1`. `.sobre-stats` flex com gap 3rem. `.stat-value` em Archivo Narrow 2.5rem weight 600 Mustard.
- Serviços: `.card-servico p` de `--text-sm` para `--text-base` (16px). `.card-servico:hover .card-icon`: color Mustard via transition.
- Evidências: removidos `background-color`, `border-radius`, `box-shadow`, `border` lateral. Adicionado `border-top: 3px solid var(--mustard-dark)`. `.evidencia-numero` de 3rem para 3.5rem e cor `--mustard-dark`. `.caso-titulo`: Archivo Narrow 18px weight 600.
- Custo: `.custo-text` de 18px para 1.25rem (20px).
- Como funciona: `.passo` com `border-left: 3px solid transparent` e `padding-left: 0`. Hover: `border-left-color: Mustard`, `padding-left: 3px`. `.passo-content` com `transition: transform`. `.passo:hover .passo-content`: `translateX(4px)`.
- Problema: `.card-problema.card-active { background-color: rgba(232,175,88,0.08) }` para JS animated background.

**HTML — index.html (reescrito)**

- Header CTA: adicionado `<span class="cta-arrow">→</span>`
- Hero: 5 `<div class="hero-shape hero-shape--N">`, h1 com `<span class="h1-line2">` na segunda linha
- Por que: eyebrow mudado de `eyebrow--on-sky` para `eyebrow--dark`. Parágrafo dividido: texto principal + `<p class="por-que-destaque">` com frase-chave em itálico/Mustard
- Sobre: `<div class="foto-bg-shape">` inserido dentro de `.foto-wrapper`. `<strong>` nos marcos da bio. `<div class="sobre-stats">` com 3 stat-items (15 anos, 4 anos, R$20M)
- Evidências: `<h3 class="caso-titulo">` adicionado em cada card (energia/biogás/P&D solar)
- Todos os CTAs de serviços e CTA Final: `.cta-arrow` adicionado

**JS — main.js**

- `initAnimatedBackground()`: mouseenter em cada `.card-problema` adiciona `.card-active` e remove dos demais. mouseleave no grid remove de todos.

### DECISÕES TÉCNICAS

- Botão pílula unificado: decisão de manter outline em vez de fill para ser mais leve visualmente. O fill no hover cria contraste claro de estado ativo.
- Por que Platinum em vez de Sky: diferencia visualmente as seções claras (Powder e Platinum alternadas), que é mais correto do que ter Por que e CTA Final ambos em Sky.
- Hero shapes: opacity extremamente baixa (gradiente 0.05–0.08) para efeito sutil. Não interferem na legibilidade do texto.
- `heroShapeIn` controla apenas opacity (não transform) para não conflitar com `float` que controla apenas transform. Animações rodando em paralelo sem conflito de propriedades.
- `foto-bg-shape` com inset: -12px em vez de padding no wrapper: mantém o wrapper no tamanho exato da imagem, shape estoura levemente para fora (efeito decorativo intencional).
- Stats R$20M: placeholder identificado no plano como "a ser revisado".

### ARQUIVOS MODIFICADOS
- `css/style.css` — reescrito completo (v2→v3)
- `index.html` — reescrito completo (v2→v3)
- `js/main.js` — adicionado `initAnimatedBackground()`

### VERIFICAÇÃO NECESSÁRIA
- Confirmar que a aspa decorativa `"` está visível no canto superior direito da seção Por Que
- Confirmar que o R$20M das stats precisa ser revisado pelo usuário (é um placeholder)

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
