import { Star, Quote } from "lucide-react";
import { DEPOIMENTOS, NOTA_GOOGLE } from "@/lib/demo";
import { SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";

function Estrelas({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} de 5 estrelas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={`w-5 h-5 ${i < n ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

// Avaliações do Google: uma em destaque e duas menores ao lado
export default function Depoimentos() {
  const [destaque, ...outros] = DEPOIMENTOS;

  return (
    <section className="py-28 bg-brand-light text-brand-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Quem conhece, recomenda</h2>
            <p className="text-gray-600 text-lg">Avaliações reais de associados no Google.</p>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-sm shrink-0">
            <span className="text-3xl font-extrabold">{NOTA_GOOGLE.nota}</span>
            <div>
              <Estrelas n={5} />
              <span className="text-xs text-gray-500">{NOTA_GOOGLE.total} avaliações no Google</span>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-3">
            <figure className="h-full bg-brand-blue text-white rounded-[2rem] p-10 sm:p-12 flex flex-col justify-between gap-8 relative overflow-hidden">
              <Quote aria-hidden="true" className="absolute -top-4 -right-4 w-40 h-40 text-white/5" />
              <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed relative">
                “{destaque.texto}”
              </blockquote>
              <figcaption className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-accent text-brand-blue font-extrabold flex items-center justify-center">
                    {destaque.nome[0]}
                  </div>
                  <div>
                    <div className="font-bold">{destaque.nome}</div>
                    <div className="text-sm text-gray-300">{destaque.quando}</div>
                  </div>
                </div>
                <Estrelas n={destaque.estrelas} />
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-2 grid gap-8">
            {outros.map((d, i) => (
              <Reveal key={d.nome} delay={(i + 1) * 120}>
                <figure className="h-full bg-white rounded-[2rem] p-8 shadow-sm space-y-4">
                  <Estrelas n={d.estrelas} />
                  <blockquote className="text-gray-700 leading-relaxed">“{d.texto}”</blockquote>
                  <figcaption className="text-sm">
                    <span className="font-bold">{d.nome}</span>
                    <span className="text-gray-500"> · {d.quando}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href={SITE.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold text-brand-dark underline underline-offset-4 hover:text-brand-blue"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
