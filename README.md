# Dra. Ana Clara · Pediatra em Passos, MG

Landing page com um objetivo: levar a pessoa a tocar no WhatsApp para agendar.

Feita em Astro, com saída estática e CSS próprio. Sem Tailwind, sem biblioteca de componentes, sem React.

## Ver no computador
Dê dois cliques em **`abrir-site.bat`**. Ele sobe o site e abre no navegador.

Pelo terminal é a mesma coisa:
```
npm install
npm run dev
```
O endereço é `http://localhost:4321`. Para ver no celular, use o endereço de rede que o terminal mostra (o celular precisa estar no mesmo Wi-Fi).

- `/` usa a composição de topo definida em `site.ts`
- `/topo-a/` e `/topo-b/` mostram as duas composições, para comparar

## Onde mexer
| Quero mudar | Arquivo |
|---|---|
| Qualquer texto, serviço, pergunta, foto, número do WhatsApp | `src/data/site.ts` |
| Cores, fontes, espaçamentos | `src/styles/global.css` (os valores vêm do `DESIGN.md`) |
| Ordem e estrutura das seções | `src/components/Pagina.astro` |
| Fotos | `src/assets/fotos/` |

O que ainda falta preencher está em **`PENDENCIAS.md`**.

## Fotos do topo
Em `site.ts`, cada foto tem `src`, `alt` e `foco`. O `foco` é o ponto da foto que nunca pode ser cortado, no formato `"horizontal vertical"`. Por exemplo, `"58% 30%"` segura o rosto um pouco à direita e no terço de cima.

## Publicar um preview
**Vercel:** importe o repositório em vercel.com. Ele reconhece o Astro sozinho (comando `npm run build`, pasta `dist`).

**Cloudflare Pages:** crie um projeto, conecte o repositório e use o preset Astro (comando `npm run build`, pasta `dist`).

Nos dois, o GTM só entra se você criar a variável de ambiente `PUBLIC_GTM_ID`.

**GitHub Pages:** também funciona, mas precisa publicar a pasta `dist` (o resultado do `npm run build`), e não o código-fonte.

## Conferências
Estes scripts usam Playwright, axe e Lighthouse, que não estão instalados neste projeto. Aponte o `NODE_PATH` para uma pasta que já tenha os três.
```
npm run build
node tools/conferir.cjs      # telas em 5 larguras, scroll horizontal, erros e acessibilidade
npm run preview              # em outro terminal
node tools/lighthouse.cjs    # performance no celular
node tools/gerar-icones.cjs  # refaz favicon e imagem de compartilhamento
```
