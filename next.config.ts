import type { NextConfig } from "next";

const emDesenvolvimento = process.env.NODE_ENV === "development";

// De onde o navegador pode carregar cada coisa.
// - 'unsafe-inline': o Next precisa dele nos scripts que ele mesmo coloca na página
//   (sem isso o site pararia de funcionar). O resto é restrito ao próprio site.
// - frame-src: só o mapa do Google, na página Quem Somos.
// - 'unsafe-eval' e ws: só no modo de desenvolvimento (recarga automática).
const politicaDeConteudo = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${emDesenvolvimento ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self'${emDesenvolvimento ? " ws: wss:" : ""}`,
  "frame-src https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: politicaDeConteudo },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000" },
        ],
      },
    ];
  },
};

export default nextConfig;
