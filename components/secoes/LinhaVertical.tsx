import Reveal from "@/components/Reveal";

type Item = { marca: string; titulo: string; texto: string };

// Linha do tempo vertical: usada no "Roubaram meu carro, e agora?" (rastreador)
// e na história da empresa (quem somos). "marca" é o número ou o ano.
export default function LinhaVertical({ itens, escuro = false }: { itens: Item[]; escuro?: boolean }) {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div
        aria-hidden="true"
        className={`absolute left-7 top-4 bottom-4 w-0.5 ${escuro ? "bg-brand-accent/30" : "bg-brand-dark/20"}`}
      />
      {itens.map(({ marca, titulo, texto }, i) => (
        <Reveal key={i} delay={i * 120} className="pb-12 last:pb-0">
          <div className="relative flex gap-6">
            <div
              className={`relative shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-extrabold text-sm shadow-md ${
                escuro ? "bg-brand-accent text-brand-blue" : "bg-brand-blue text-white"
              }`}
            >
              {marca}
            </div>
            <div className="pt-2 space-y-1.5">
              <h3 className="text-xl font-bold">{titulo}</h3>
              <p className={`leading-relaxed ${escuro ? "text-gray-300" : "text-gray-600"}`}>{texto}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
