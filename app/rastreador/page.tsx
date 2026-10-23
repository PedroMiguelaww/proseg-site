"use client";

import Link from "next/link";
import { 
  ArrowLeft, 
  Smartphone, 
  Lock, 
  Share2, 
  Clock, 
  PhoneCall, 
  Navigation
} from "lucide-react";
import { whatsappLink } from "@/lib/site";

export default function Rastreador() {
  const whatsappUrl = whatsappLink("Olá, vim pelo site da Proseg e gostaria de saber mais sobre o rastreador");

  return (
    <div className="bg-brand-blue text-white">
      
      {/* Cabeçalho Interno / Voltar */}
      <div className="bg-[#134074]/40 border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-medium text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para a Página Inicial</span>
          </Link>
          <div className="text-xs text-[#4da8da] font-semibold tracking-wider uppercase">
            Proseg Tecnologia Veicular
          </div>
        </div>
      </div>

      {/* Seção Principal / Hero do Rastreador */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0B2545] via-[#0d2e54] to-[#134074] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 backdrop-blur-sm">
                <Smartphone className="w-5 h-5 text-[#4da8da]" />
                <span>Tecnologia e Monitoramento em Tempo Real</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                Rastreador Veicular <span className="text-[#4da8da]">Proseg</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl font-normal leading-relaxed">
                Um rastreador automotivo possui inúmeras vantagens para cuidar cada vez mais da sua segurança, do seu carro e da sua tranquilidade em Campina Grande e região.
              </p>

              <div className="pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#EEF4F8] text-[#0B2545] hover:bg-white px-9 py-5 rounded-2xl font-bold shadow-xl transition-all duration-300 hover:scale-105 text-lg"
                >
                  <PhoneCall className="w-6 h-6 text-[#134074]" />
                  <span>Quero Instalar o Rastreador</span>
                </a>
              </div>
            </div>

            {/* Bloco de Destaque Visual */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-md bg-white/5 p-6 rounded-[2.5rem] border border-white/15 shadow-2xl backdrop-blur-sm text-center space-y-6">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-[#4da8da]/20 text-[#4da8da] flex items-center justify-center border border-[#4da8da]/30">
                  <Navigation className="w-10 h-10 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Monitoramento 24/7</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Acompanhe rotas, histórico de trajetos e localização exata direto pela tela do seu celular.
                  </p>
                </div>
                <div className="bg-[#0B2545] text-[#4da8da] py-3.5 px-4 rounded-xl font-extrabold text-xs tracking-wider border border-[#134074]">
                  COBERTURA SATELITAL NACIONAL
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Seção de Vantagens Detalhadas */}
      <section className="py-24 bg-white text-[#0B2545]">
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
            
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200/80 space-y-6 hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-2xl bg-[#EEF4F8] text-[#134074] flex items-center justify-center shadow-sm">
                <Lock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">Recuperação em caso de roubo</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nos casos em que seu carro for roubado, é possível saber a localização imediatamente e iniciar o processo de recuperação. As chances de reaver o veículo chegam a cerca de 98%.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200/80 space-y-6 hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-2xl bg-[#EEF4F8] text-[#134074] flex items-center justify-center shadow-sm">
                <Share2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">Segurança contra sequestro</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Permite a localização ágil do veículo em situações de risco, tornando possível que o carro seja encontrado rapidamente pelas autoridades competentes.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200/80 space-y-6 hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-2xl bg-[#EEF4F8] text-[#134074] flex items-center justify-center shadow-sm">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">Preço acessível e App</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Instalação e monitoramento com excelente custo-benefício. Funciona 24 horas por dia e você acompanha tudo direto do seu smartphone.
              </p>
            </div>

          </div>

          {/* CTA de Fechamento */}
          <div className="bg-[#0B2545] text-white p-12 rounded-[2.5rem] shadow-2xl text-center space-y-6">
            <h3 className="text-3xl sm:text-4xl font-extrabold">
              Proteja seu veículo hoje mesmo com o rastreador
            </h3>
            <p className="text-gray-300 text-lg max-w-xl mx-auto">
              Fale com nossa equipe e tire suas dúvidas sobre prazos e instalação em Campina Grande.
            </p>
            <div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#EEF4F8] text-[#0B2545] hover:bg-white px-10 py-5 rounded-2xl font-bold shadow-xl transition-all duration-300 hover:scale-105 text-lg"
              >
                <PhoneCall className="w-6 h-6 text-[#134074]" />
                <span>Solicitar Cotação do Rastreador</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}