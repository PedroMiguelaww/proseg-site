// Faixa fina no topo com frases rolando devagar (só em temas que têm letreiro).
// O texto é repetido para a rolagem parecer infinita; leitores de tela
// recebem as frases uma vez só.
export default function Letreiro({ frases }: { frases: string[] }) {
  const texto = frases.join("   ✦   ") + "   ✦   ";
  const bloco = texto.repeat(4);

  return (
    <div className="bg-black text-brand-accent border-b border-brand-accent/35 overflow-hidden text-xs font-semibold uppercase tracking-[0.12em]">
      <p className="sr-only">{frases.join(" · ")}</p>
      <div className="letreiro-trilho" aria-hidden="true">
        <span className="py-2 whitespace-pre">{bloco}</span>
        <span className="py-2 whitespace-pre">{bloco}</span>
      </div>
    </div>
  );
}
