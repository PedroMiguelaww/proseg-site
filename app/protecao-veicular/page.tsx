import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import PlanosTabs from "@/components/PlanosTabs";
import CtaWhatsApp from "@/components/CtaWhatsApp";

export const metadata: Metadata = {
  title: "Planos de Proteção Veicular para Carros e Motos",
  description:
    "Planos Prata, Ouro e Diamante para carros e motos em Campina Grande. Até 100% da FIPE, assistência 24h, sem consulta ao SPC/Serasa.",
};

export default function ProtecaoVeicular() {
  return (
    <div className="bg-brand-blue text-white">

      <PlanosTabs
        intro={
          <>
            <div className="inline-flex items-center gap-2.5 bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 backdrop-blur-sm">
              <ShieldCheck className="w-5 h-5 text-brand-accent" aria-hidden="true" />
              <span>Planos sob medida para o seu veículo</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
              Escolha a proteção ideal para <span className="text-brand-accent">o seu veículo</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
              Trabalhamos sem consulta ao SPC/Serasa, sem análise de perfil e com contratação rápida e simples.
            </p>
          </>
        }
      >
        {/* CTA de Fechamento de Planos */}
        <CtaWhatsApp
          title="Ficou em dúvida sobre qual plano escolher?"
          text="Nossa equipe ajuda você a encontrar a melhor opção para o seu bolso, sem consulta ao SPC/Serasa."
          buttonLabel="Falar com um atendente no WhatsApp"
          message="Olá, vim pelo site da Proseg e gostaria de ver os planos"
        />
      </PlanosTabs>
    </div>
  );
}
