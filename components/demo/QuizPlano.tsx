"use client";

import { useState } from "react";
import { Car, Bike, RotateCcw, PhoneCall } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import Reveal from "@/components/Reveal";
import Exemplo from "./Exemplo";

type Respostas = { veiculo?: "carro" | "moto"; uso?: "diario" | "eventual"; reserva?: boolean };

type Pergunta = {
  chave: keyof Respostas;
  titulo: string;
  opcoes: { rotulo: string; valor: Respostas[keyof Respostas]; icone?: typeof Car }[];
};

const PERGUNTAS: Pergunta[] = [
  {
    chave: "veiculo",
    titulo: "Qual é o seu veículo?",
    opcoes: [
      { rotulo: "Carro", valor: "carro", icone: Car },
      { rotulo: "Moto", valor: "moto", icone: Bike },
    ],
  },
  {
    chave: "uso",
    titulo: "Com que frequência você usa?",
    opcoes: [
      { rotulo: "Todo dia", valor: "diario" },
      { rotulo: "De vez em quando", valor: "eventual" },
    ],
  },
  {
    chave: "reserva",
    titulo: "Se o carro parar, você precisa de um carro reserva?",
    opcoes: [
      { rotulo: "Sim, preciso", valor: true },
      { rotulo: "Não é essencial", valor: false },
    ],
  },
];

// ⚠️ Regra de exemplo: a empresa precisa confirmar qual plano indicar em cada caso
function indicar(r: Respostas): { plano: string; motivo: string } {
  if (r.veiculo === "moto") {
    return r.uso === "diario"
      ? { plano: "Plano Ouro Moto", motivo: "Quem roda todo dia precisa de assistência completa na rua." }
      : { plano: "Plano Prata Moto", motivo: "Proteção essencial para quem usa a moto de vez em quando." };
  }
  if (r.reserva) return { plano: "Plano Diamante", motivo: "É o único com carro reserva, para você não ficar a pé." };
  if (r.uso === "diario") return { plano: "Plano Ouro", motivo: "Tem a assistência 24h completa, ideal para o dia a dia." };
  return { plano: "Plano Prata", motivo: "Proteção essencial com ótimo custo-benefício." };
}

// "Qual plano é para mim?": 3 perguntas rápidas, sem pedir dados pessoais
export default function QuizPlano() {
  const [respostas, setRespostas] = useState<Respostas>({});

  // Moto não tem a pergunta do carro reserva
  const perguntas = respostas.veiculo === "moto" ? PERGUNTAS.slice(0, 2) : PERGUNTAS;
  const atual = perguntas.find((p) => respostas[p.chave] === undefined);
  const passo = atual ? perguntas.indexOf(atual) : perguntas.length;
  const resultado = !atual ? indicar(respostas) : null;

  return (
    <Reveal className="mb-24">
      <div className="bg-gradient-to-br from-brand-blue to-brand-dark text-white border border-line rounded-[2.5rem] p-8 sm:p-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <Exemplo />
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Qual plano é para mim?</h2>
          <p className="text-gray-300 text-lg">
            Responda {perguntas.length} perguntas rápidas e veja qual plano combina com você. Não pedimos nenhum dado pessoal.
          </p>
          {/* Barrinha de progresso */}
          <div className="flex gap-2 pt-2" aria-hidden="true">
            {perguntas.map((p, i) => (
              <span
                key={p.chave}
                className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${i < passo ? "bg-brand-accent" : "bg-white/15"}`}
              />
            ))}
          </div>
        </div>

        <div className="bg-surface-card text-ink rounded-3xl p-8 min-h-[260px] flex flex-col justify-center" aria-live="polite">
          {atual ? (
            <div key={atual.chave} className="space-y-6 animate-fade-up">
              <p className="text-xs font-bold uppercase tracking-wider text-ink-soft">
                Pergunta {passo + 1} de {perguntas.length}
              </p>
              <h3 className="text-2xl font-bold">{atual.titulo}</h3>
              <div className="grid grid-cols-2 gap-4">
                {atual.opcoes.map(({ rotulo, valor, icone: Icone }) => (
                  <button
                    key={rotulo}
                    type="button"
                    onClick={() => setRespostas({ ...respostas, [atual.chave]: valor })}
                    className="flex flex-col items-center justify-center gap-2 border-2 border-line hover:border-ink-accent rounded-2xl px-4 py-5 font-bold transition-colors"
                  >
                    {Icone && <Icone className="w-7 h-7 text-ink-accent" aria-hidden="true" />}
                    {rotulo}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            resultado && (
              <div className="space-y-5 animate-fade-up">
                <p className="text-xs font-bold uppercase tracking-wider text-ink-soft">Indicamos para você</p>
                <h3 className="text-3xl font-extrabold">{resultado.plano}</h3>
                <p className="text-ink-soft">{resultado.motivo}</p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={whatsappLink(`Olá, vim pelo site da Proseg. Fiz o teste e o indicado foi o ${resultado.plano}. Pode me passar mais detalhes?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-cta text-cta-ink hover:bg-cta-hover px-6 py-4 rounded-xl font-bold transition-colors"
                  >
                    <PhoneCall className="w-5 h-5" aria-hidden="true" />
                    Quero esse plano
                  </a>
                  <button
                    type="button"
                    onClick={() => setRespostas({})}
                    className="inline-flex items-center justify-center gap-2 text-ink-accent font-bold px-4 py-4"
                  >
                    <RotateCcw className="w-4 h-4" aria-hidden="true" />
                    Refazer
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </Reveal>
  );
}
