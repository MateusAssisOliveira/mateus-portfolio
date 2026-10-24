---
description: Diretrizes de Design Engineering, Skills e MCPs para o portfólio de Mateus Assis
always_on: true
---

# Diretrizes Permanentes de Design Engineering

Este projeto utiliza uma infraestrutura profissional de Design Engineering integrada ao Google Antigravity para garantir que a aplicação mantenha uma identidade visual autoral, pericial e livre de padrões genéricos de inteligência artificial.

---

## 1. Ferramentas Instaladas & Funções

### Skills Especializadas (`.agents/skills/`)
1. **Taste (`design-taste-frontend`):**
   - **Função:** Direção de arte, pesquisa de referências em sites premiados e auditoria anti-slop no navegador real.
   - **Comandos:** `node .agents/skills/design-taste-frontend/scripts/draw.mjs` (concepção) e `node .agents/skills/design-taste-frontend/scripts/inspect.mjs <url>` (medição e screenshots).
2. **Impeccable (`impeccable`):**
   - **Função:** Auditoria técnica de interface, tipografia, contraste e acabamento profissional (*craft floor*).
   - **Regra:** Aplicar contraste estrito WCAG AA (>= 4.5:1), medidas confortáveis de leitura e eliminar caixas delineadas desnecessárias.
3. **Emil Design Engineering (`emil-design-eng`, `animate`, `review-animations`, `animation-performance`):**
   - **Função:** Microinterações, curvas de aceleração (`cubic-bezier(0.16, 1, 0.3, 1)`), feedback ao clique/toque (`.btn-press:active`) e respeito a `prefers-reduced-motion`.

### MCP Servers Configurados (`.agents/mcp_config.json`)
1. **Playwright MCP (`@playwright/mcp`):**
   - **Função:** Automação do navegador, captura de telas multi-viewport (1440px desktop, 768px tablet, 390px mobile) e validação funcional de fluxos.
2. **Figma MCP:**
   - **Função:** Extração de tokens e especificações visuais de designs aprovados quando conectado.

---

## 2. Fluxo de Trabalho Recomendado

Em qualquer nova alteração ou adição de página/componente:

```
[1. Taste: Direção de Arte] 
       ↓
[2. Figma MCP: Tokens/Referências] 
       ↓
[3. Impeccable: Refinamento & Craft Floor] 
       ↓
[4. Emil: Microinterações & Física de Movimento] 
       ↓
[5. Playwright MCP: Validação Multi-Viewport (Desktop, Tablet, Mobile)]
```

---

## 3. Diretrizes Visuais Aprovadas: "Estudos de Caso & Autoridade Técnica"

O portfólio documenta **a história de cada software**, destacando:
- **O Problema de Mercado / Gargalo Operacional:** A ineficiência real que motivou a criação do sistema.
- **A Solução de Engenharia:** Arquitetura autoral (Next.js App Router, PostgreSQL RLS, automação Playwright).
- **Métricas Comprovadas:** Impacto mensurável de redução de tempo, quórum pericial ou escalabilidade.

### Paleta Semântica Oficial (definida em `DESIGN.md` e `globals.css`)
- **Fundo Base:** `#090a0d` (grafite pericial profundo).
- **Superfície dos Cards:** `#111318`.
- **Superfície Elevada:** `#161922`.
- **Bordas Sutis:** `#1e222b`.
- **Texto Principal (Ink):** `#f1f3f7` (contraste > 12:1).
- **Texto Secundário (Muted):** `#a3aab8` (contraste >= 4.5:1, WCAG AA aprovado).
- **Acento Técnico (Primário):** `#38bdf8` (azul técnico).
- **Acento Regulatório:** `#f59e0b` (âmbar de problemas normativos).
- **Acento de Quórum / Sucesso:** `#10b981` (verde de validação).

---

## 4. Checklist de Qualidade (Anti-Slop)

Antes de aprovar qualquer mudança visual:
- [ ] **Sem Eyebrows/Kickers:** Não adicionar pequenos rótulos em caixa alta espaçada em cima dos títulos.
- [ ] **Sem Números Decorativos:** Não usar `01`, `02`, `03` soltos como adorno gráfico.
- [ ] **Sem Monospace Cosmético:** `Geist Mono` é exclusivo para dados tabulares, códigos e métricas numéricas.
- [ ] **Sem Sombras Falsas:** Superfícies são definidas pela cor de fundo e contraste, não por box-shadows artificiais em repouso.
- [ ] **Sem Cards Idênticos Repetitivos:** Cada estudo de caso destaca sua história específica.
- [ ] **Alvos de Toque Acessíveis:** Mínimo de 44px de altura para botões e links no mobile.
- [ ] **Acessibilidade:** Respeito absoluto a `prefers-reduced-motion`.

---

## 5. Procedimento de Validação com Playwright

Para rodar uma validação completa no navegador real:

1. Garantir que o servidor local está ativo:
   `npm run dev`
2. Executar a inspeção automatizada da Taste / Playwright:
   `node .agents/skills/design-taste-frontend/scripts/inspect.mjs http://localhost:3000`
3. Analisar as capturas geradas em `.taste-skill/inspect/`:
   - `desktop-fold.jpg` e `desktop-page-01.jpg` (1440px)
   - `tablet-fold.jpg` e `tablet-page-01.jpg` (768px)
   - `mobile-fold.jpg` e `mobile-page-01.jpg` (390px)
