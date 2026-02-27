# Context — Phase 1: Implementação

> Decisões capturadas do HANDOFF.md (sessões anteriores de estratégia e copy).
> Copy completo aprovado em: ./COPY.md

---

## Decisões de Design

**Tom visual:** ultra-moderno, calmo, tátil. Micro-interações suaves. Tipografia limpa.
Sem excesso de cor ou elementos decorativos. Não deve parecer um site de agência.

**Referências de componentes (inspiração, não obrigatório):**
- https://21st.dev/community/components
- https://magicui.design/
- https://reactbits.dev/

**Animações:** suaves, não intrusivas. Preferencialmente scroll-triggered (fade-in, slide-up).
Sem animações de entrada automática que atrasem a leitura.

---

## Decisões Técnicas

- Stack: HTML5 semântico + CSS moderno + JavaScript vanilla. Sem frameworks.
- Caminhos relativos em tudo (./css/, ./js/, ./img/)
- Sem Node.js, PHP, backend de qualquer tipo
- Tamanho total abaixo de 1,5 MB

---

## CTA e Links

- Texto do CTA: "Agende uma conversa" (aparece 3x: Hero, após Serviços, CTA Final)
- Link base: https://calendar.app.google/y9kQeTfRk1hApJw78
- UTM por posição:
  - Hero: ?utm_source=konektlab&utm_medium=landing_page&utm_campaign=hero
  - CTA Final: ?utm_source=konektlab&utm_medium=landing_page&utm_campaign=cta_final
- Centralizar link em variável JS (uma única mudança afeta todos os CTAs)

---

## Seções e Estrutura

9 seções na ordem do COPY.md:
1. Hero — headline + subheadline + corpo + CTA
2. Problema amplificado — 4 situações em lista
3. Por que isso acontece — parágrafo explicativo
4. Quem é Danilo — bio + placeholder para foto (foto disponível, a ser integrada)
5. Serviços — 3 cards: Diagnóstico, Estratégia, Sustentação
6. Evidências — 3 cards: energia, biogás, solar
7. O custo da inação — parágrafo curto de urgência
8. Como funciona — 3 passos numerados
9. CTA Final — parágrafo + CTA

---

## Pendências Conhecidas

- Foto de Danilo: disponível mas não entregue ainda. Implementar com placeholder.
- Newsletter "Sinal e Ruído": não entra nesta página (reservada para futura página de palestras).
- Analytics: nenhum nesta fase.

---

## Público e Posicionamento

Donos de empresas de tecnologia aplicada (hardware, industrial, agritech, automação, biogás, solar).
Faturamento R$ 10M a R$ 200M+.
Danilo como guia, não herói. A dor do cliente abre a página.
