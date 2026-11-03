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
  Header.tsx, Footer.tsx  Cabeçalho e rodapé
  PageHeader.tsx          Faixa "Voltar" das páginas internas
  CtaWhatsApp.tsx         Bloco de chamada final para o WhatsApp
  IconCard.tsx            Card com ícone, título e texto
  PlanosTabs.tsx          Abas Carros | Motos (único componente client)
lib/
  site.ts                 Telefones, WhatsApp e links do menu
  content.ts              Planos e vantagens do rastreador
public/images/            Imagens (WebP, exceto o logo)
```

### Onde alterar

- **Telefone / WhatsApp / menu:** `lib/site.ts`
- **Planos e coberturas:** `lib/content.ts`
- **Cores da marca:** bloco `@theme` em `app/globals.css` (use as classes `bg-brand-blue`, `text-brand-accent` etc., nunca hex direto)

## Desenvolvimento

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Deploy (Cloudflare)

```bash
npx opennextjs-cloudflare build
npx opennextjs-cloudflare preview   # testa localmente no runtime da Cloudflare
npx opennextjs-cloudflare deploy
```

Configuração em `wrangler.jsonc` e `open-next.config.ts`.
