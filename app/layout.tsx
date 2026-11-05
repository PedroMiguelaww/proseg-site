import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Letreiro from "@/components/tema/Letreiro";
import { connection } from "next/server";
import { getTemaAtivo } from "@/themes";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const description = "Proteção veicular completa e assistência 24h em Campina Grande e região.";

export const metadata: Metadata = {
  title: {
    default: "Proseg - Associação de Proteção Veicular",
    template: "%s | Proseg",
  },
  description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Proseg",
    title: "Proseg - Associação de Proteção Veicular",
    description,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // O tema depende da data, então é escolhido a cada visita (e não só no build)
  await connection();
  const tema = getTemaAtivo();

  return (
    <html lang="pt-BR" data-tema={tema.id} suppressHydrationWarning>
      <head>
        {/* Marca que o JS está ativo antes da pintura, para as animações de entrada (Reveal) */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className={`${montserrat.variable} antialiased min-h-screen flex flex-col`}>
        {tema.letreiro && <Letreiro frases={tema.letreiro} />}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}