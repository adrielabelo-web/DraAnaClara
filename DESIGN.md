# DESIGN · Dra. Ana Clara, Pediatra

## Conceito
Consultório que parece casa. A página usa o que já existe na sala dela: a parede creme, a pintura de folhas verdes em aquarela, o marrom da roupa e o dourado dos acessórios. O papel tem um grão leve, as fotos ficam em molduras de arco e de cantos desiguais, e dois traços feitos à mão (um sublinhado e um raminho de folhas) assinam a página. Nada de hospital e nada de berçário de desenho animado. O verde do WhatsApp é um verde de folha escura, da própria paleta.

## O que veio do site de referência (draarleteprimo.com.br)
Só a estrutura: barra de registro no topo, nome e foto logo de cara, uma etiqueta pequena acima de cada seção, bloco de Instagram e avaliações do Google. Ficaram de fora o rosa com lilás, os contadores de números, a fonte Montserrat e os blocos centralizados.

## Cores
Ajustadas depois de ver as fotos: o verde de apoio puxou para o tom das folhas da parede, e entrou um cacau, tirado da blusa, para o bloco de fechamento.

| Token | Valor | Uso |
|---|---|---|
| `--creme` | `#FBF6EF` | fundo da página |
| `--areia` | `#F1E6D8` | superfície secundária, faixas |
| `--areia-forte` | `#E6D5C0` | linhas, bordas, fundo de moldura |
| `--tinta` | `#2E2520` | texto principal (nunca preto puro) |
| `--tinta-suave` | `#5E5048` | texto de apoio (7,2:1 no creme) |
| `--terracota` | `#C9745A` | cor principal em áreas e traços |
| `--terracota-texto` | `#9C4A33` | terracota para texto pequeno e links (5,6:1 no creme) |
| `--salvia` | `#8FA08A` | apoio, molduras |
| `--folha` | `#A9B87A` | verde das folhas da parede, só decoração |
| `--folha-escura` | `#2F6B4F` | botão do WhatsApp (6,4:1 com texto creme) |
| `--folha-escura-hover` | `#275B43` | botão do WhatsApp ao passar o mouse |
| `--mel` | `#E3B45C` | destaque pontual, marcador de dado pendente |
| `--cacau` | `#4A322B` | bloco de fechamento (texto creme, 11:1) |

## Tipografia
Fontes hospedadas no próprio site, via Fontsource, com `font-display: swap`.

| Papel | Fonte | Detalhe |
|---|---|---|
| Títulos | Fraunces Variable | peso 400 a 600, eixo `SOFT` em 100, `opsz` automático |
| Assinatura e destaques | Fraunces Variable itálico | peso 400 |
| Texto | Figtree Variable | peso 400 a 700 |

Escala fluida com `clamp()`, pensada primeiro em 360 px:

| Token | Valor |
|---|---|
| `--t-h1` | `clamp(2rem, 1.35rem + 3.1vw, 3.75rem)` |
| `--t-h2` | `clamp(1.65rem, 1.25rem + 1.9vw, 2.75rem)` |
| `--t-h3` | `clamp(1.15rem, 1.05rem + 0.5vw, 1.4rem)` |
| `--t-texto` | `clamp(1rem, 0.96rem + 0.2vw, 1.125rem)` |
| `--t-pequeno` | `0.875rem` |
| `--t-etiqueta` | `0.78rem`, caixa alta, espaçamento `0.14em` |

## Espaçamento
| Token | Valor |
|---|---|
| `--e-1` a `--e-6` | `4, 8, 12, 16, 24, 32 px` |
| `--e-secao` | `clamp(3.5rem, 2rem + 7vw, 7.5rem)` |
| `--margem` | `clamp(1.125rem, 0.4rem + 3.6vw, 3rem)` |
| `--largura` | `1140px` |
| `--largura-texto` | `34rem` |

## Raios e molduras
Nenhum raio é igual em tudo. Cada tipo de bloco tem a sua forma.

| Token | Valor | Uso |
|---|---|---|
| `--r-arco` | `999px 999px 28px 28px` | moldura de foto em arco |
| `--r-folha` | `58% 42% 46% 54% / 44% 52% 48% 56%` | moldura de cantos desiguais |
| `--r-papel` | `26px 8px 26px 8px` | cartões de papel, bilhete |
| `--r-botao` | `999px` | botões |
| `--r-pequeno` | `10px` | detalhes |

## Sombras
Sempre quentes, puxadas do marrom do texto. Nunca cinza.

| Token | Valor |
|---|---|
| `--s-papel` | `0 1px 0 rgba(255,255,255,.7) inset, 0 14px 30px -18px rgba(74,50,43,.45)` |
| `--s-foto` | `0 26px 50px -28px rgba(74,50,43,.55)` |
| `--s-botao` | `0 10px 22px -12px rgba(47,107,79,.75)` |

## Textura e traços
- Grão de papel: ruído em SVG, a 5% de opacidade, repetido no fundo.
- Sublinhado à mão: traço em terracota, embaixo do nome no título.
- Raminho de folhas: desenho próprio em SVG, no tom `--folha`, inspirado na pintura da parede do consultório.
- Etiqueta de seção: texto pequeno em caixa alta com uma folhinha antes.

## Movimento
| Token | Valor |
|---|---|
| `--m-rapido` | `180ms ease` |
| `--m-entrada` | `700ms cubic-bezier(.2,.7,.2,1)` |
| Troca das fotos | crossfade de 1,2 s, 5 s por foto |
| Ken Burns | escala de 1 para 1,04 enquanto a foto aparece |
| Entrada no scroll | fade com 14 px de deslocamento, em cascata de 80 ms |

Com `prefers-reduced-motion`, as fotos não trocam, não há Ken Burns e nada desliza.

## Duas composições de topo
As duas usam a mesma paleta e as mesmas fotos. Troque em `src/data/site.ts` (`topo: "A"` ou `"B"`) ou compare pelos endereços `/topo-a/` e `/topo-b/`.

**A · Arco.** A foto fica em moldura de arco, com o raminho de folhas saindo por trás. No celular a foto vem primeiro, estreita e alinhada à direita, e o título encosta nela pela esquerda. No desktop o texto fica à esquerda e o arco à direita.

**B · Carta.** O texto vem primeiro, como o começo de uma carta, e o botão já aparece na primeira tela. A foto vem logo abaixo em moldura de cantos desiguais, levemente inclinada, com um bilhete de papel preso no canto. No desktop a foto vai para a esquerda e o texto para a direita.

## Fotos
- Nenhuma foto passa de 560 px de largura na tela, porque as originais têm cerca de 720 a 1080 px.
- Cada foto tem o seu `foco` (`object-position`) em `site.ts`, para o rosto não ser cortado.
- AVIF e WebP gerados no build, com `srcset` e `sizes`.

## Lista do que não entra
Degradê roxo, azul ou rosa. Azul bebê com rosa bebê. Ícone de estetoscópio, cruz, coração com batimento, ursinho ou chupeta. Emoji como ícone. Grade de três cards iguais. Tudo centralizado. Glassmorphism. Sombra cinza. Raio igual em tudo. Foto de banco de imagem. Contador com número inventado.
