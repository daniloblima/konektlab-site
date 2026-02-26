# Requirements — konekt.lab Landing Page

## ESTRUTURA — HTML e Conteúdo

- [x] **STRUCT-01**: index.html com as 9 seções semânticas (header, main com sections, footer)
- [x] **STRUCT-02**: Copy das 9 seções exatamente conforme COPY.md (sem alterações de conteúdo)
- [x] **STRUCT-03**: Estrutura de pastas correta: index.html na raiz, /css/, /js/, /img/
- [x] **STRUCT-04**: Todos os caminhos relativos (./css/style.css, não /css/style.css)
- [x] **STRUCT-05**: HTML5 semântico com meta tags (title, description, og:tags)

## DESIGN — Visual e Tipografia

- [x] **DESIGN-01**: Sistema de design em CSS: variáveis para cores, tipografia, espaçamento
- [x] **DESIGN-02**: Tom visual ultra-moderno, calmo, tátil — sem excesso de cor ou elementos decorativos
- [x] **DESIGN-03**: Tipografia limpa e legível — hierarquia clara entre headline, subheadline, corpo
- [ ] **DESIGN-04**: Cards de serviço com estrutura visual que destaca nome + descrição
- [ ] **DESIGN-05**: Cards de evidência com estrutura "situação → resultado" visualmente clara

## INTERAÇÃO — Animações e CTA

- [ ] **INTER-01**: CTA "Agende uma conversa" em 3 posições: Hero, Serviços (implícito), CTA Final
- [ ] **INTER-02**: Link do CTA centralizado em variável JS: https://calendar.app.google/y9kQeTfRk1hApJw78
- [ ] **INTER-03**: UTM diferenciado por posição do CTA (utm_campaign=hero / cta_final)
- [ ] **INTER-04**: Animações de scroll reveal suaves (fade-in) nas seções
- [ ] **INTER-05**: Hover states nos CTAs e cards de serviço
- [ ] **INTER-06**: Navegação suave (smooth scroll) se houver âncoras

## RESPONSIVIDADE — Mobile e Tablet

- [ ] **RESP-01**: Layout mobile-first, funcional em telas a partir de 320px
- [ ] **RESP-02**: Revisão em tablet (768px) — especialmente grid de serviços e evidências
- [ ] **RESP-03**: Tipografia responsiva (fluid type ou breakpoints explícitos)
- [ ] **RESP-04**: CTAs com área de toque adequada no mobile (min 44px)

## PERFORMANCE — Otimização

- [ ] **PERF-01**: Tamanho total da página abaixo de 1,5 MB
- [ ] **PERF-02**: Imagens em .webp ou .jpg otimizado com atributo loading="lazy"
- [x] **PERF-03**: CSS e JS mínimos, sem dependências desnecessárias
- [ ] **PERF-04**: Placeholder visual para foto de Danilo (seção 4) caso imagem não esteja disponível

## DEPLOY — GitHub Pages e DNS

- [ ] **DEPLOY-01**: Repositório GitHub criado: github.com/daniloblima/konektlab-site
- [ ] **DEPLOY-02**: GitHub Pages habilitado (branch main, pasta raiz)
- [ ] **DEPLOY-03**: Arquivo CNAME com valor konektlab.com
- [ ] **DEPLOY-04**: DNS configurado no GoDaddy (A records para IPs do GitHub Pages)
- [ ] **DEPLOY-05**: HTTPS funcionando após propagação DNS

## Traceability

| REQ-ID | Phase | Status |
|--------|-------|--------|
| STRUCT-01 | Phase 1 | complete |
| STRUCT-02 | Phase 1 | complete |
| STRUCT-03 | Phase 1 | complete |
| STRUCT-04 | Phase 1 | complete |
| STRUCT-05 | Phase 1 | complete |
| DESIGN-01 | Phase 1 | complete |
| DESIGN-02 | Phase 1 | complete |
| DESIGN-03 | Phase 1 | complete |
| DESIGN-04 | Phase 1 | pending |
| DESIGN-05 | Phase 1 | pending |
| INTER-01 | Phase 1 | pending |
| INTER-02 | Phase 1 | pending |
| INTER-03 | Phase 1 | pending |
| INTER-04 | Phase 1 | pending |
| INTER-05 | Phase 1 | pending |
| INTER-06 | Phase 1 | pending |
| RESP-01 | Phase 1 | pending |
| RESP-02 | Phase 1 | pending |
| RESP-03 | Phase 1 | pending |
| RESP-04 | Phase 1 | pending |
| PERF-01 | Phase 1 | pending |
| PERF-02 | Phase 1 | pending |
| PERF-03 | Phase 1 | complete |
| PERF-04 | Phase 1 | pending |
| DEPLOY-01 | Phase 2 | pending |
| DEPLOY-02 | Phase 2 | pending |
| DEPLOY-03 | Phase 2 | pending |
| DEPLOY-04 | Phase 2 | pending |
| DEPLOY-05 | Phase 2 | pending |
