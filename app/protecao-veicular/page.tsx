"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  PhoneCall, 
  CheckCircle, 
  Car, 
  ArrowLeft,
  Bike
} from "lucide-react";
import { whatsappLink } from "@/lib/site";

export default function ProtecaoVeicular() {
  const [activeTab, setActiveTab] = useState<"carros" | "motos">("carros");
  const whatsappUrl = whatsappLink("Olá, vim pelo site da Proseg e gostaria de ver os planos");

  const planosCarros = [
    {
      nome: "Plano Prata",
      tagline: "Proteção essencial com excelente custo-benefício",
      popular: false,
      recursos: [
        "Roubo | Furto",
        "Colisão",
        "Perda total",
        "Incêndio",
        "Sem perfil de condutor"
      ]
    },
    {
      nome: "Plano Ouro",
      tagline: "Cobertura completa com máxima proteção e assistência estendida",
      popular: true,
      recursos: [
        "Roubo | Furto",
        "Colisão",
        "Perda total",
        "Incêndio",
        "Sem perfil de condutor",
        "Borracheiro",
        "Reboque",
        "Chaveiro",
        "Danos a terceiro",
        "Hospedagem caso de batida",
        "Pane seca",
        "Pane elétrica, mecânica",
        "Assistência 24h 0800"
      ]
    },
    {
      nome: "Plano Diamante",
      tagline: "O nível máximo de segurança, comodidade e exclusividade",
      popular: false,
      recursos: [
        "Tudo do Plano Ouro",
        "Danos da natureza",
        "Carro reserva",
        "Moto reserva",
        "Até 100% da FIPE",
        "Rastreamento",
        "Vidros, faróis, retrovisores"
      ]
    }
  ];

  const planosMotos = [
    {
      nome: "Plano Prata (Moto)",
      tagline: "Proteção essencial e sob medida para sua motocicleta",
      popular: false,
      recursos: [
        "Roubo | Furto",
        "Colisão",
        "Perda total",
        "Incêndio",
        "Sem perfil de condutor",
        "Assistência 24h",
        "Reboque"
      ]
    },
    {
      nome: "Plano Ouro (Moto)",
      tagline: "Cobertura completa com assistência estendida para sua moto",
      popular: true,
      recursos: [
        "Roubo | Furto",
        "Colisão",
        "Perda total",
        "Incêndio",
        "Sem perfil de condutor",
        "Borracheiro",
        "Chaveiro",
        "Danos a terceiro",
        "Reboque",
        "Pane seca",
        "Pane elétrica / mecânica",
        "Assistência 24h 0800"
      ]
    }
  ];

  const planosAtuais = activeTab === "carros" ? planosCarros : planosMotos;

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
            Proseg Proteção Veicular
          </div>
        </div>
      </div>

      {/* Seção Principal da Página */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0B2545] via-[#0d2e54] to-[#134074] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2.5 bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 backdrop-blur-sm">
            <ShieldCheck className="w-5 h-5 text-[#4da8da]" />
            <span>Planos Sob Medida para o seu Veículo em Campina Grande</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
            Escolha a proteção ideal para <span className="text-[#4da8da]">o seu veículo</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Trabalhamos sem consulta ao SPC/Serasa, sem análise de perfil e com contratação rápida e desburocratizada.
          </p>

          {/* Abas de Navegação (Carros | Motos) */}
          <div className="pt-8 flex justify-center">
            <div className="bg-white/10 p-1.5 rounded-2xl backdrop-blur-md border border-white/15 flex gap-2">
              <button
                onClick={() => setActiveTab("carros")}
                className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 ${
                  activeTab === "carros" 
                    ? "bg-white text-[#0B2545] shadow-xl scale-105" 
                    : "text-white hover:bg-white/5"
                }`}
              >
                <Car className="w-5 h-5" />
                <span>Carros</span>
              </button>
              <button
                onClick={() => setActiveTab("motos")}
                className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 ${
                  activeTab === "motos" 
                    ? "bg-white text-[#0B2545] shadow-xl scale-105" 
                    : "text-white hover:bg-white/5"
                }`}
              >
                <Bike className="w-5 h-5" />
                <span>Motos</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Seção dos Planos */}
      <section className="py-24 bg-white text-[#0B2545]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight capitalize">
              Planos para {activeTab}
            </h2>
            <p className="text-gray-600 text-lg">
              Conheça as coberturas e benefícios exclusivos de cada categoria.
            </p>
          </div>

          <div className={`grid grid-cols-1 ${activeTab === 'carros' ? 'lg:grid-cols-3' : 'lg:grid-cols-2 max-w-4xl mx-auto'} gap-8 mb-20 items-stretch`}>
            {planosAtuais.map((plano, idx) => (
              <div 
                key={idx} 
                className={`relative bg-gray-50 p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  plano.popular 
                    ? "border-[#134074] shadow-xl ring-2 ring-[#134074]/20 bg-white" 
                    : "border-gray-200/80"
                }`}
              >
                {plano.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#134074] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">
                    Mais Popular
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#0B2545] mb-2">{plano.nome}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{plano.tagline}</p>
                  </div>

                  <div className="border-t border-gray-200 pt-6 space-y-3">
                    {plano.recursos.map((recurso, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#134074] shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm font-medium">{recurso}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-4 rounded-xl font-bold text-center text-sm shadow-md transition-all duration-300 ${
                      plano.popular
                        ? "bg-[#0B2545] text-white hover:bg-[#134074]"
                        : "bg-[#EEF4F8] text-[#0B2545] hover:bg-[#134074] hover:text-white"
                    }`}
                  >
                    Contratar {plano.nome}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA de Fechamento de Planos */}
          <div className="bg-[#0B2545] text-white p-12 rounded-[2.5rem] shadow-2xl text-center space-y-6">
            <h3 className="text-3xl sm:text-4xl font-extrabold">
              Ficou com dúvida de qual plano escolher?
            </h3>
            <p className="text-gray-300 text-lg max-w-xl mx-auto">
              Nossa equipe em Campina Grande ajuda você a encontrar a melhor opção para o seu bolso. Sem consulta ao SPC!
            </p>
            <div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#EEF4F8] text-[#0B2545] hover:bg-white px-10 py-5 rounded-2xl font-bold shadow-xl transition-all duration-300 hover:scale-105 text-lg"
              >
                <PhoneCall className="w-6 h-6 text-[#134074]" />
                <span>Falar com Atendente no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}