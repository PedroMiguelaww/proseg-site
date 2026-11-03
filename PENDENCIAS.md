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
