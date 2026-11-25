import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Marca que o JS está ativo antes da pintura, para as animações de entrada (Reveal) */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className={`${montserrat.variable} antialiased min-h-screen flex flex-col`}>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-white focus:text-brand-blue focus:font-semibold focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" tabIndex={-1} className="flex-1 focus:outline-none">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}