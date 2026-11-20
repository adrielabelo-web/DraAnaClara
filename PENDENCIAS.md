# PENDÊNCIAS · Dra. Ana Clara, Pediatra

O site está em modo rascunho (`rascunho: true` em `src/data/site.ts`). Enquanto estiver assim, todo dado provisório aparece na página com um sublinhado pontilhado amarelo, e a página fica fora do Google.

Tudo abaixo se resolve editando `src/data/site.ts`, a não ser quando a linha diz outra coisa.

## 1. Dados que a médica precisa mandar
| O quê | Onde fica | Valor provisório |
|---|---|---|
| Sobrenome | `medica.sobrenome` | vazio (a página mostra só "Dra. Ana Clara") |
| CRM-MG | `medica.crm` | `CRM-MG 00000` |
| RQE de Pediatria | `medica.rqe` | `RQE 00000` |
| WhatsApp do consultório | `whatsapp.numero` | `5535000000000` (os botões ainda não levam a um número real) |
| Endereço do consultório | `local.endereco` | "Rua a preencher, 000" |
| Horário de atendimento | `local.horario` | "Segunda a sexta, horário a preencher" |
| Link do perfil no Google Maps | `local.mapsUrl` | busca genérica por "Passos MG" |
| Formação, residência e título | `confianca` | três linhas marcadas como "a preencher" |
| Serviços que ela de fato oferece | `ajuda.fases` | lista provisória do briefing |
| Faixa etária que atende | `duvidas` (segunda pergunta) e `hero.apoio` | "Faixa etária a preencher" |
| Nota e número de avaliações no Google | `google` | `null` (não aparece) |
| Avaliações reais de famílias | `depoimentos.itens` e `depoimentos.mostrar` | seção oculta |

## 2. Imagens que faltam
- **Fotos profissionais.** As quatro fotos atuais são quadros tirados de um vídeo, com 720 px de largura. Servem para o rascunho, mas ficam no limite da nitidez no desktop. O ideal é uma sessão curta no consultório: um retrato, uma foto atendendo (sem criança identificável) e uma do ambiente.
- **Foto da seção "Sobre mim".** A atual pega ela no meio de uma fala. Vale trocar por uma mais serena assim que houver.
- **Posts do Instagram.** A grade mostra seis blocos de cor com o rótulo "post 1" a "post 6". Faltam 4 a 6 imagens de posts reais, em `src/assets/fotos/`, ligadas em `insta.posts`.
- **Mapa.** O desenho atual é provisório e não representa as ruas de Passos. Falta uma imagem estática do mapa com o ponto do consultório, ligada em `local.mapa`.
- **Assinatura.** O nome aparece em letra cursiva da própria fonte. Se ela quiser, dá para trocar pela assinatura dela desenhada, em SVG.

Depois de trocar a primeira foto ou o nome, rode `node tools/gerar-icones.cjs` para refazer o favicon e a imagem de compartilhamento.

## 3. Texto: tudo é rascunho
Toda a copy foi escrita por mim para ela ter um ponto de partida. **A médica precisa ler e reescrever com as palavras dela**, principalmente:
- o texto de "Sobre mim", que fala de motivação pessoal ("escolhi cuidar de criança porque...");
- os quatro passos de "Como é a consulta", que descrevem o jeito dela de atender (conversa primeiro, exame no tempo da criança, orientações por escrito, retorno combinado);
- as respostas das dúvidas, em especial sobre recém-nascido e primeira consulta;
- a frase do bilhete no topo B ("Seja bem-vinda. Senta que eu te escuto.").

Nada disso foi dito por ela. Se algum ponto não corresponder à prática do consultório, tem que sair.

## 4. Decisões que são suas
- **Composição do topo:** A (arco) ou B (carta). Compare em `/topo-a/` e `/topo-b/` e defina em `topo`.
- **Domínio:** quando existir, trocar `seo.url` em `site.ts` e `site` em `astro.config.mjs`.
- **Google Tag Manager:** criar o contêiner e colocar o ID em `PUBLIC_GTM_ID` (arquivo `.env` ou variável na hospedagem). Sem o ID, nada de rastreamento é carregado. O evento `whatsapp_click` já sai pronto para virar conversão no Google Ads, com `posicao`, `gclid`, `gbraid`, `wbraid`, `fbclid` e os `utm`.
- **Aviso de cookies:** hoje ele só informa e o GTM carrega mesmo sem o clique em "Entendi". Se a médica ou o jurídico preferirem pedir consentimento antes, é uma mudança pequena no script de `Base.astro`.

## 5. Antes de publicar
1. Preencher tudo do item 1 e trocar `rascunho` para `false`. Isso tira os sublinhados, tira o aviso do rodapé e libera a página para o Google.
2. Apagar as páginas de comparação `src/pages/topo-a.astro` e `src/pages/topo-b.astro`.
3. **A médica deve conferir a página inteira com o Manual de Publicidade Médica do CFM (Resolução CFM 2.336/2023) antes de ir ao ar.** O rascunho já segue os pontos principais: nome, a palavra "Médica", CRM e RQE no topo e no rodapé, sem promessa de resultado, sem superlativo, sem preço, sem antes e depois e sem imagem de paciente. A conferência final é dela.
4. Conferir a política de privacidade (`src/pages/privacidade.astro`), que também é um texto de partida e não passou por advogado.
5. Rodar `npm run build`, `node tools/conferir.cjs` e `node tools/lighthouse.cjs` uma última vez.

## 6. O que eu medi neste rascunho
- Sem scroll horizontal em 360, 390, 768, 1024 e 1440 px, nas duas composições.
- Botão de WhatsApp visível sem rolar em todas essas larguras, inclusive em 360 x 640.
- Acessibilidade (axe, WCAG 2.1 AA): nenhuma violação.
- Lighthouse no celular: performance 99 (topo A) e 98 (topo B), acessibilidade 100, boas práticas 100, CLS 0.
- **LCP de 2,2 a 2,3 s**, um pouco acima da meta de 2 s do briefing. A medição foi no servidor local, que não comprime os arquivos. Numa hospedagem com compressão o número tende a cair, mas isso só se confirma medindo no endereço de preview.
- SEO do Lighthouse aparece em 66 só porque o rascunho está marcado para não entrar no Google. Sai sozinho quando `rascunho` virar `false`.
