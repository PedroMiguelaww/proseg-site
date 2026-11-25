# Pendências de conteúdo

Perguntas que dependem de alguém da Proseg. O site já está com textos seguros em todos esses pontos; quando houver resposta, é só ajustar o local indicado.

## Para confirmar (o texto atual fica se estiver certo)

- [ ] **Moto reserva no Plano Diamante (carro)**: o plano de carro inclui mesmo "Moto reserva"?
  - Onde: página Proteção Veicular › aba Carros › card Plano Diamante — `lib/content.ts` (`PLANOS_CARROS`)
- [ ] **Plano Prata (carro) sem assistência 24h e reboque**: está correto? (O Prata Moto tem os dois.)
  - Onde: página Proteção Veicular › aba Carros › card Plano Prata — `lib/content.ts` (`PLANOS_CARROS`)
- [ ] **Reboque x assistência no Plano Ouro**: são serviços separados ou o reboque faz parte da assistência 24h?
  - Onde: cards Plano Ouro e Plano Ouro Moto — `lib/content.ts`
- [ ] **Número do socorro 24h**: o botão "Acionar assistência" liga para o 0800 200 1126. É esse o canal de socorro?
  - Onde: home › bloco Assistência 24h — `app/page.tsx`; número em `lib/site.ts`
- [ ] **Percentual da FIPE por plano**: quanto cobrem o Prata e o Ouro? Hoje só o Diamante diz "Até 100% da FIPE".
  - Onde: home › frase do topo — `app/page.tsx`; cards dos planos — `lib/content.ts`

## Apareceram na revisão de 24/11/2026

- [ ] **Assistência 24h x Plano Prata (carro)**: o topo da home e a seção "Assistência 24h" prometem assistência "em todo o Brasil", mas o Prata não lista assistência. Dizer que é só do Ouro em diante, ou incluir no Prata?
  - Onde: `app/page.tsx` (frase do topo e seção Assistência 24h), perguntas frequentes em `lib/institucional.ts`
- [ ] **"Transporte emergencial"**: aparece na lista de assistências da home, mas não está em nenhum plano. Em qual plano vale?
  - Onde: `app/page.tsx` (`ASSISTENCIAS`)
- [ ] **0800 só no Header**: hoje o número também aparece no rodapé e no botão "Acionar assistência" da home. Manter ou deixar só no topo?
  - Onde: `components/Footer.tsx`, `app/page.tsx`
- [ ] **Endereço e horário**: Av. Almirante Barroso, 100 (Google e Receita) ou Av. Floriano Peixoto, 1649 (site antigo)? A filial de Cabedelo existe? Fecha às 17h (Google) ou 18h (site antigo)?
  - Onde: `lib/site.ts`
- [ ] **Avaliação do "Edson Junior"**: ele é funcionário da Proseg? Se for, trocar por outra avaliação.
  - Onde: `lib/institucional.ts` (`DEPOIMENTOS`)
- [ ] **Regra do quiz** "Qual plano é para mim?": qual plano indicar em cada resposta.
  - Onde: `components/secoes/QuizPlano.tsx` (função `indicar`)
- [ ] **História, equipe, missão, visão e valores**: textos, anos, fotos e nomes.
  - Onde: `lib/institucional.ts` (`HISTORIA`), `app/quem-somos/page.tsx`
- [ ] **Perguntas frequentes sem resposta**: quando a proteção começa a valer e se dá para trocar de plano.
  - Onde: `lib/institucional.ts` (`PERGUNTAS`)
- [ ] **Política de privacidade**: o mapa do Google em Quem Somos carrega cookies do Google. É boa prática (LGPD) ter uma página de privacidade com a razão social, o contato e o que o site coleta (hoje: nada). Precisa do texto aprovado pela empresa.
- [ ] **Domínio**: sem ele não dá para criar `sitemap.xml`, link canônico e imagem de compartilhamento.

## Conteúdo que pode ser acrescentado

- [ ] **Produtos adicionais**: existem extras contratados à parte? Se sim, voltar a citar no passo 2 da home e, se quiser, listá-los.
  - Onde: home › "É muito fácil se associar" › 2º card — `app/page.tsx` (`PASSOS`)
- [ ] **Rastreador avulso**: é vendido separado ou só vem no Plano Diamante? Há preço/condição para mostrar?
  - Onde: página Rastreador — `app/rastreador/page.tsx`; seção Rastreador da home — `app/page.tsx`
- [ ] **História da empresa**: ano de fundação, tempo de mercado, número de associados. Com isso dá para voltar a usar "Nossa história".
  - Onde: página Quem Somos › topo e bloco "Confiança e atendimento próximo" — `app/quem-somos/page.tsx`

## Textos suavizados até haver confirmação

- [ ] **Taxa de recuperação do rastreador**: antes dizia "chegam a 98%". Foi trocado por "as chances de recuperação são muito maiores". Se houver fonte (ex.: dados do fornecedor), dá para voltar com o número citando a origem.
  - Onde: card "Recuperação em caso de roubo" (home e página Rastreador) — `lib/content.ts` (`VANTAGENS_RASTREADOR`)
- [ ] **Situação legal da associação**: antes dizia "100% Garantido" e "amparada pela lei e regulamentada". Foi trocado por "Transparência – regras claras e atendimento próximo". Se a Proseg estiver registrada conforme a Lei Complementar 213/2025, dá para voltar a citar a regulamentação.
  - Onde: rodapé (todas as páginas) › coluna Segurança — `components/Footer.tsx`
