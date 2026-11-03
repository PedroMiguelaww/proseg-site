import type { Metadata } from "next";
import { Smartphone, PhoneCall, Navigation } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { VANTAGENS_RASTREADOR } from "@/lib/content";
import PageHeader from "@/components/PageHeader";
import IconCard from "@/components/IconCard";
import CtaWhatsApp from "@/components/CtaWhatsApp";

export const metadata: Metadata = {
  title: "Rastreador Veicular",
  description:
    "Rastreador veicular Proseg em Campina Grande: localização em tempo real pelo celular, monitoramento 24h e recuperação em caso de roubo.",
};

const MENSAGEM = "Olá, vim pelo site da Proseg e gostaria de saber mais sobre o rastreador";

export default function Rastreador() {
  return (
    <div className="bg-brand-blue text-white">
      <PageHeader label="Proseg Tecnologia Veicular" />

      {/* Seção Principal / Hero do Rastreador */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-blue via-brand-mid to-brand-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 backdrop-blur-sm">
                <Smartphone className="w-5 h-5 text-brand-accent" aria-hidden="true" />
                <span>Tecnologia e Monitoramento em Tempo Real</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                Rastreador Veicular <span className="text-brand-accent">Proseg</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl font-normal leading-relaxed">
                Um rastreador automotivo possui inúmeras vantagens para cuidar cada vez mais da sua segurança, do seu carro e da sua tranquilidade em Campina Grande e região.
              </p>

              <div className="pt-4">
                <a
                  href={whatsappLink(MENSAGEM)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-brand-light text-brand-blue hover:bg-white px-9 py-5 rounded-2xl font-bold shadow-xl transition-all duration-300 hover:scale-105 text-lg"
                >
                  <PhoneCall className="w-6 h-6 text-brand-dark" aria-hidden="true" />
                  <span>Quero Instalar o Rastreador</span>
                </a>
              </div>
            </div>

            {/* Bloco de Destaque Visual */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-md bg-white/5 p-6 rounded-[2.5rem] border border-white/15 shadow-2xl backdrop-blur-sm text-center space-y-6">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-brand-accent/20 text-brand-accent flex items-center justify-center border border-brand-accent/30">
                  <Navigation className="w-10 h-10 animate-pulse" aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white">Monitoramento 24/7</h2>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Acompanhe rotas, histórico de trajetos e localização exata direto pela tela do seu celular.
                  </p>
                </div>
                <div className="bg-brand-blue text-brand-accent py-3.5 px-4 rounded-xl font-extrabold text-xs tracking-wider border border-brand-dark">
                  COBERTURA SATELITAL NACIONAL
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Seção de Vantagens Detalhadas */}
      <section className="py-24 bg-white text-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Por que ter um rastreador Proseg?
            </h2>
            <p className="text-gray-600 text-lg">
              Vantagens essenciais que fazem toda a diferença para o seu patrimônio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {VANTAGENS_RASTREADOR.map((item) => (
              <IconCard key={item.title} icon={item.icon} title={item.title}>
                {item.desc}
              </IconCard>
            ))}
          </div>

          {/* CTA de Fechamento */}
          <CtaWhatsApp
            title="Proteja seu veículo hoje mesmo com o rastreador"
            text="Fale com nossa equipe e tire suas dúvidas sobre prazos e instalação em Campina Grande."
            buttonLabel="Solicitar Cotação do Rastreador"
            message={MENSAGEM}
          />

        </div>
      </section>
    </div>
  );
}
