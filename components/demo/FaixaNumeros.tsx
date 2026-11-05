import { NUMEROS } from "@/lib/demo";
import Reveal from "@/components/Reveal";

// Faixa de números logo abaixo do topo da página inicial
export default function FaixaNumeros() {
  return (
    <section className="bg-brand-deep border-y border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {NUMEROS.map(({ valor, rotulo }, i) => (
            <Reveal key={rotulo} delay={i * 100} className="text-center lg:border-l lg:first:border-l-0 border-white/10">
              <dt className="sr-only">{rotulo}</dt>
              <dd>
                <span className="block text-4xl sm:text-5xl font-extrabold text-brand-accent tracking-tight">
                  {valor}
                </span>
                <span className="block mt-2 text-sm text-gray-300 font-medium">{rotulo}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
