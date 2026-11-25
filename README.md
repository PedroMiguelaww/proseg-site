# Site Proseg

Site institucional da **Proseg - Associação de Proteção Veicular** (Campina Grande - PB).

Feito com Next.js 16 (App Router), React 19 e Tailwind CSS 4. Publicado na Cloudflare Workers via [OpenNext](https://opennext.js.org/cloudflare).

## Estrutura

```
app/
  layout.tsx              Layout raiz (fonte, Header, Footer, metadata padrão)
  page.tsx                Página inicial
  protecao-veicular/      Planos para carros e motos
  rastreador/             Rastreador veicular
  quem-somos/             Sobre a empresa
  globals.css             Tailwind + cores da marca (tokens brand-*)
components/
  Header.tsx, Footer.tsx  Cabeçalho (menu do celular fecha com Esc) e rodapé
  AnoAtual.tsx            Ano do rodapé (atualiza sozinho no navegador)
  Reveal.tsx              Animação de entrada ao rolar a página
  WhatsAppFloat.tsx       Botão flutuante de WhatsApp
  CtaWhatsApp.tsx         Bloco de chamada final para o WhatsApp
  IconCard.tsx            Card com ícone, título e texto
  PlanosTabs.tsx          Abas Carros | Motos (roda no navegador)
  secoes/                 Seções de cada página: números, avaliações, tabela de
                          planos, quiz, perguntas frequentes, celular do rastreador,
                          linhas do tempo. "Exemplo.tsx" é a etiqueta amarela de
                          dado ainda não confirmado
lib/
  site.ts                 Telefones, WhatsApp, endereço, CNPJ e links do menu
  content.ts              Planos e vantagens do rastreador
  institucional.ts        Números, avaliações do Google, história e perguntas frequentes
public/images/            Imagens (WebP, exceto o logo)
public/_headers           Cache dos arquivos do site (Cloudflare)
next.config.ts            Cabeçalhos de segurança (CSP, HSTS etc.)
```

### Onde alterar

- **Telefone / WhatsApp / menu:** `lib/site.ts`
- **Planos e coberturas:** `lib/content.ts` (as tabelas de comparação são montadas sozinhas a partir dele)
- **Nota do Google, números, história, perguntas frequentes:** `lib/institucional.ts`
- **Endereço, horário, CNPJ, redes sociais:** `lib/site.ts`
- **Segurança do navegador (CSP):** `next.config.ts`. Se um dia entrar um serviço externo (mapa novo, chat, analytics), ele precisa ser liberado ali
- **Cores da marca:** bloco `@theme` em `app/globals.css` (use as classes `bg-brand-blue`, `text-brand-accent` etc., nunca hex direto)

## Desenvolvimento

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Deploy (Cloudflare)

O deploy é automático: todo push na branch `main` faz a Cloudflare (Workers Builds, Worker `site-proseg`) montar e publicar o site. Outras branches não são publicadas.

Configuração do build no painel (**Workers & Pages › site-proseg › Settings › Builds**):

- Build command: `npx opennextjs-cloudflare build`
- Deploy command: `npx opennextjs-cloudflare deploy`

Para testar localmente no runtime da Cloudflare, ou publicar à mão em caso de emergência:

```bash
npx opennextjs-cloudflare build
npx opennextjs-cloudflare preview   # testa localmente
npx opennextjs-cloudflare deploy    # publica manualmente
```

Configuração em `wrangler.jsonc` e `open-next.config.ts`.
