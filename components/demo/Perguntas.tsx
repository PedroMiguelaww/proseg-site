import { ChevronDown } from "lucide-react";
import { PERGUNTAS } from "@/lib/demo";
import Reveal from "@/components/Reveal";
import Exemplo from "./Exemplo";

// Perguntas frequentes que abrem e fecham (sem JavaScript: usa <details>)
export default function Perguntas() {
  return (
    <Reveal className="max-w-3xl mx-auto mb-24">
      <div className="text-center mb-10 space-y-3">
        <Exemplo />
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Perguntas frequentes</h2>
      </div>
      <div className="divide-y divide-line border-y border-line">
        {PERGUNTAS.map(({ pergunta, resposta }) => (
          <details key={pergunta} className="group py-2">
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-4 font-bold text-lg [&::-webkit-details-marker]:hidden">
              {pergunta}
              <ChevronDown
                aria-hidden="true"
                className="w-5 h-5 shrink-0 text-ink-accent transition-transform duration-300 group-open:rotate-180"
              />
            </summary>
            <p className="pb-5 text-ink-soft leading-relaxed">{resposta}</p>
          </details>
        ))}
      </div>
    </Reveal>
  );
}
