# DESIGN SYSTEM: Estudos de Caso & Autoridade Técnica
**Portfólio de Engenharia de Software & Produtos B2B**
**Fundador Técnico & Desenvolvedor Full-Stack: Mateus Assis**

---

## 1. Princípio & Propósito Visual

Este portfólio não vende serviços com chavões de marketing ou layouts genéricos gerados por inteligência artificial. Ele documenta **autoridade técnica real**, demonstrando como problemas complexos de negócio (normas regulatórias de SST, cálculos Likert invertidos, quóruns periciais, isolamento multi-tenant PostgreSQL RLS) são transformados em **produtos de software em produção**.

Cada projeto é um **Estudo de Caso Vivo**:
- **O Gargalo Operacional:** A dor manual e financeira que a empresa enfrentava.
- **A Solução de Engenharia:** Como o produto foi concebido e codificado.
- **Arquitetura Autoral:** Decisões técnicas intransigentes (Next.js App Router, Supabase RLS, Serverless Puppeteer).
- **Métricas Reais & Demonstração:** Dados concretos de tempo, precisão e eficiência.

---

## 2. Tokens de Design (Tailwind v4 / CSS Custom Properties)

```css
:root {
  /* Superfícies e Profundidade (Grafite Pericial Sóbrio) */
  --bg: #090a0d;
  --surface: #111318;
  --surface-raised: #161922;
  --surface-hover: #1c202c;
  
  /* Linhas e Contornos (Uso mínimo, foco em preenchimento) */
  --border-subtle: #1e222b;
  --border-strong: #2c3240;
  
  /* Tipografia & Contraste (Aderência estrita a WCAG AA >= 4.5:1) */
  --ink-primary: #f1f3f7;       /* 15:1 no fundo */
  --ink-secondary: #a3aab8;     /* 6.2:1 no fundo */
  --ink-tertiary: #717887;      /* 4.5:1 no fundo (mínimo legível) */
  
  /* Acentos de Domínio Regulatório e Funcional */
  --accent-tech: #38bdf8;        /* Azul técnico para ações primárias */
  --accent-warning: #f59e0b;     /* Âmbar de risco moderado / norma */
  --accent-success: #10b981;     /* Verde de quórum pericial / produção */
  
  /* Microinterações e Movimento (Emil Kowalski Framework) */
  --ease-out-spring: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-snap: 150ms;
  --duration-smooth: 250ms;
}
```

---

## 3. Diretrizes de Anti-Slop & Impeccable Craft Floor

1. **Sem Monospace Cosmético:** `Geist Mono` é restrito a dados tabulares, códigos e métricas computadas. Badges, botões e títulos usam `Geist Sans`.
2. **Sem Numeração Decorativa Vazia:** Proibido o uso de `01`, `02`, `03` soltos nos cards como adorno.
3. **Sem Eyebrows/Kickers:** Proibido o uso de pequenas palavras em caixa alta com espaçamento exagerado acima dos títulos principais. O título carrega seu próprio peso.
4. **Sem Cards Idênticos Repetitivos:** O showcase de projetos deve apresentar cada estudo de caso com ênfase na sua narrativa e visualização técnica individualizada.
5. **Sem Sombras Artificiais em Repouso:** Superfícies são definidas pela cor de fundo e contraste, não por brilhos ou sombras fantasmas.
6. **Legibilidade Móvel:** Nenhum texto de leitura pode ser menor que 13px no mobile (390px). Textos corridos mantêm 16px.

---

## 4. Microinterações & Física de Movimento (Emil Kowalski)

1. **Press Feedback:** Botões interativos reduzem levemente em `:active` (`scale(0.98)` com transição de 120ms).
2. **Hover Responsivo:** Transições de cor em 150ms com curva `ease-out`. Evitar transições globais lentas (`transition: all`).
3. **Respeito a Reduced Motion:**
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, ::before, ::after {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```

---

## 5. Roteiro de Implementação Seção por Seção

1. **Tokens Globais & Shell:** Atualizar `globals.css` com a nova escala de cores periciais, contraste acessível e reset limpo.
2. **Navbar & Cabeçalho:** Alinhamento preciso, tipografia refinada e sem linhas cortantes desnecessárias.
3. **Hero Section:** Reformular o título para um tom direto de Fundador Técnico e autor de soluções B2B, eliminando badges genéricas de IA.
4. **Showcase de Estudos de Caso:** Redesenhar cada um dos 4 projetos com diagramação narrativa (Gargalo → Arquitetura → Impacto), destacando as demos visuais reais.
5. **Seção de Trajetória & Visão Técnica ("Sobre"):** Apresentar a história real da clínica de SST com tipografia editorial e autoridade.
6. **Contato & Rodapé:** Ação imediata no WhatsApp/Email com estados de clique e foco impecáveis.
