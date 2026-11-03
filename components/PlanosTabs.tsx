"use client";

import { useState } from "react";
import { Car, Bike, CheckCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { PLANOS_CARROS, PLANOS_MOTOS } from "@/lib/content";

type Tab = "carros" | "motos";

const TABS: { id: Tab; label: string; icon: typeof Car }[] = [
  { id: "carros", label: "Carros", icon: Car },
  { id: "motos", label: "Motos", icon: Bike },
];

// Única parte interativa da página de planos: as abas Carros | Motos.
// `intro` é o conteúdo do hero (renderizado no servidor) e `children` vem abaixo dos planos.
export default function PlanosTabs({
  intro,
  children,
}: {
  intro: React.ReactNode;
  children?: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState<Tab>("carros");
  const planosAtuais = activeTab === "carros" ? PLANOS_CARROS : PLANOS_MOTOS;
  const whatsappUrl = whatsappLink("Olá, vim pelo site da Proseg e gostaria de ver os planos");

  return (
    <>
      {/* Seção Principal da Página */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-blue via-brand-mid to-brand-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {intro}

          {/* Abas de Navegação (Carros | Motos) */}
          <div className="pt-8 flex justify-center">
            <div
              role="tablist"
              aria-label="Tipo de veículo"
              className="bg-white/10 p-1.5 rounded-2xl backdrop-blur-md border border-white/15 flex gap-2"
            >
              {TABS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  role="tab"
                  aria-selected={activeTab === id}
                  aria-controls="planos"
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 ${
                    activeTab === id
                      ? "bg-white text-brand-blue shadow-xl scale-105"
                      : "text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção dos Planos */}
      <section className="py-24 bg-white text-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight capitalize">
              Planos para {activeTab}
            </h2>
            <p className="text-gray-600 text-lg">
              Conheça as coberturas e benefícios exclusivos de cada categoria.
            </p>
          </div>

          <div
            id="planos"
            role="tabpanel"
            className={`grid grid-cols-1 ${activeTab === "carros" ? "lg:grid-cols-3" : "lg:grid-cols-2 max-w-4xl mx-auto"} gap-8 mb-20 items-stretch`}
          >
            {planosAtuais.map((plano) => (
              <div
                key={plano.nome}
                className={`relative bg-gray-50 p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  plano.popular
                    ? "border-brand-dark shadow-xl ring-2 ring-brand-dark/20 bg-white"
                    : "border-gray-200/80"
                }`}
              >
                {plano.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-dark text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">
                    Mais Popular
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-extrabold text-brand-blue mb-2">{plano.nome}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{plano.tagline}</p>
                  </div>

                  <ul className="border-t border-gray-200 pt-6 space-y-3">
                    {plano.recursos.map((recurso) => (
                      <li key={recurso} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-dark shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-gray-700 text-sm font-medium">{recurso}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-4 rounded-xl font-bold text-center text-sm shadow-md transition-all duration-300 ${
                      plano.popular
                        ? "bg-brand-blue text-white hover:bg-brand-dark"
                        : "bg-brand-light text-brand-blue hover:bg-brand-dark hover:text-white"
                    }`}
                  >
                    Contratar {plano.nome}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {children}
        </div>
      </section>
    </>
  );
}
