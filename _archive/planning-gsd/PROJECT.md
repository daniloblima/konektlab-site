# konekt.lab — Landing Page Institucional

## What This Is

Landing page estática do konekt.lab para substituir o site atual (Wix).
Hospedagem: GitHub Pages. Domínio: konektlab.com (GoDaddy).
Site de uma única página (index.html) com 9 seções de copy aprovado.

## Core Value

Converter visitantes qualificados (donos de empresas de tecnologia aplicada, R$ 10M–200M+ faturamento) em agendamentos de conversa com Danilo Lima.

## Requirements

### Active

- [ ] HTML5 semântico com as 9 seções de copy aprovado
- [ ] Design visual ultra-moderno, calmo, tátil. Micro-interações suaves. Tipografia limpa.
- [ ] CTA único "Agende uma conversa" com link Google Calendar + parâmetros UTM
- [ ] Responsividade obrigatória (mobile-first)
- [ ] Animações suaves, scroll-triggered, não intrusivas
- [ ] Performance: página abaixo de 1,5 MB total
- [ ] Estrutura de pastas correta para GitHub Pages (caminhos relativos)
- [ ] Deploy funcional em konektlab.com via GitHub Pages + DNS GoDaddy

### Out of Scope

- Analytics (decidido: sem rastreamento por ora)
- Backend, formulários, banco de dados
- Frameworks com build server (Next.js, React, etc.)
- Página de palestras (fase futura)

## Context

Copy completo e aprovado em: ./COPY.md
Contexto estratégico e restrições técnicas em: ./HANDOFF.md

Stack: HTML5 + CSS moderno (variáveis, grid, flexbox) + JavaScript vanilla

CTA link: https://calendar.app.google/y9kQeTfRk1hApJw78
UTM pattern: ?utm_source=konektlab&utm_medium=landing_page&utm_campaign={cta_position}

Seções da página:
1. Hero
2. Problema amplificado
3. Por que isso acontece
4. Quem é Danilo
5. Serviços (3 blocos)
6. Evidências (3 casos)
7. O custo da inação
8. Como funciona
9. CTA Final

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| HTML + CSS + JS vanilla | GitHub Pages estático, sem build step, performance máxima | ✓ Definido |
| Copy aprovado antes do código | Evitar retrabalho de conteúdo após implementação | ✓ Concluído |
| CTA único (Google Calendar) | Simplicidade, sem analytics por ora | ✓ Definido |
| GitHub Pages + GoDaddy | Hospedagem gratuita, domínio já existente | ✓ Definido |

---
*Inicializado: 2026-02-26*
