"use client";

// Mostra o ano atual. O HTML pronto traz o ano do dia da publicação; no
// navegador o React troca pelo ano de hoje, então o rodapé não fica parado.
export default function AnoAtual() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
