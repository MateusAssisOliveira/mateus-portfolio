# Nexora Display (prototype)

Uma fonte display geométrica original criada como ponto de partida visual, inspirada em tendências futuristas e angulares — não é uma cópia da Ropames.

## Arquivos
- `NexoraDisplay-Regular.ttf`: fonte TrueType instalável.
- `nexora.css`: exemplo de uso no site.

## Uso no site
Coloque o arquivo `.ttf` na pasta `public/fonts/` do seu projeto e use:

```css
@font-face {
  font-family: "Nexora Display";
  src: url("/fonts/NexoraDisplay-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

h1, h2, .display-title {
  font-family: "Nexora Display", sans-serif;
}
```

## Observações
Esta é uma versão inicial/protótipo. Os glifos são geométricos e angulares, e alguns caracteres especiais/acentos ainda não estão incluídos. Revise a legibilidade em tamanhos reais antes de usar em produção. Para melhor desempenho web, converta para WOFF2 com uma ferramenta confiável.
