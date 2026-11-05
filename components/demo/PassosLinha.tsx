import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

type Passo = { title: string; desc: string; icon: LucideIcon };

// "Como funciona" como linha do tempo: etapas numeradas ligadas por uma linha.
// No celular a linha fica na vertical; no computador, na horizontal.
export default function PassosLinha({ passos }: { passos: Passo[] }) {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
      {/* Linha horizontal (computador) */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-brand-dark/20 via-brand-dark/50 to-brand-dark/20"
      />
      {/* Linha vertical (celular) */}
      <div aria-hidden="true" className="md:hidden absolute top-10 bottom-10 left-10 w-0.5 bg-brand-dark/25" />

      {passos.map(({ title, desc, icon: Icon }, i) => (
        <Reveal key={title} delay={i * 150}>
          <div className="relative flex md:flex-col items-start md:items-center gap-6 md:text-center">
            <div className="relative shrink-0 w-20 h-20 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg ring-8 ring-gray-50">
              <Icon className="w-9 h-9" aria-hidden="true" />
              <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-brand-accent text-brand-blue text-sm font-extrabold flex items-center justify-center">
                {i + 1}
              </span>
            </div>
            <div className="space-y-2 pt-2 md:pt-0 md:px-4">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{desc}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
