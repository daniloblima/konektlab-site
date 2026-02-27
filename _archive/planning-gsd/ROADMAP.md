# Roadmap: konekt.lab Landing Page

## Overview

Implementação de landing page estática em duas fases seguindo Speed-to-Value. Primeiro construir a página completa e funcional localmente, depois fazer o deploy. Página publicada em konektlab.com ao final da Fase 2.

## Phases

- [ ] **Phase 1: Implementação** - Página completa: HTML, CSS, JS, conteúdo, design, animações, responsividade
- [ ] **Phase 2: Deploy** - Repositório GitHub, GitHub Pages, DNS GoDaddy, HTTPS

## Phase Details

### Phase 1: Implementação
**Goal**: Página completa e funcional localmente — todas as 9 seções com copy correto, design moderno, animações suaves, responsiva em mobile e tablet, CTAs funcionando com UTM, abaixo de 1,5 MB
**Depends on**: Nothing (first phase)
**Requirements**: STRUCT-01, STRUCT-02, STRUCT-03, STRUCT-04, STRUCT-05, DESIGN-01, DESIGN-02, DESIGN-03, DESIGN-04, DESIGN-05, INTER-01, INTER-02, INTER-03, INTER-04, INTER-05, INTER-06, RESP-01, RESP-02, RESP-03, RESP-04, PERF-01, PERF-02, PERF-03, PERF-04
**Success Criteria** (what must be TRUE):
  1. index.html abre no browser e exibe as 9 seções com o copy exato do COPY.md
  2. Layout é funcional e visualmente coerente em mobile (320px), tablet (768px) e desktop (1280px+)
  3. Todos os CTAs "Agende uma conversa" abrem o link do Google Calendar com UTM correto para cada posição
  4. Animações de scroll reveal funcionam sem travamentos ou flashes
  5. Tamanho total dos arquivos abaixo de 1,5 MB
**Plans**: 5 plans

Plans:
- [x] 01-01-PLAN.md — HTML semântico com as 9 seções e copy completo do COPY.md
- [x] 01-02-PLAN.md — Design system CSS: variáveis, reset, tipografia e layout base
- [ ] 01-03-PLAN.md — Cards de serviço/evidência + JS interativo (CTAs com UTM, scroll reveal)
- [ ] 01-04-PLAN.md — Responsividade mobile-first (320px, 768px, 1024px+)
- [ ] 01-05-PLAN.md — Auditoria de performance, CHANGELOG.md e verificação visual final

### Phase 2: Deploy
**Goal**: Página publicada e acessível em konektlab.com com HTTPS funcionando
**Depends on**: Phase 1
**Requirements**: DEPLOY-01, DEPLOY-02, DEPLOY-03, DEPLOY-04, DEPLOY-05
**Success Criteria** (what must be TRUE):
  1. Repositório github.com/daniloblima/konektlab-site criado e com código commitado
  2. GitHub Pages habilitado e página acessível via daniloblima.github.io/konektlab-site ou domínio customizado
  3. konektlab.com resolve para a página com HTTPS (após propagação DNS)
**Plans**: TBD

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Implementação | 2/5 | In progress | - |
| 2. Deploy | 0/? | Not started | - |
