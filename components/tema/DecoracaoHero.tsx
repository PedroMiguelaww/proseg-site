import { Car } from "lucide-react";

// Posição (em %) de cada pontinho de poeira dourada: [esquerda, topo]
const POEIRA = [
  [6, 90], [14, 70], [28, 95], [40, 80], [52, 92],
  [64, 75], [76, 96], [88, 82], [95, 60], [33, 60],
];

// Enfeites do topo das páginas na Black Friday: fita no canto, poeira
// dourada, carrinho atravessando e linha divisória. Ficam escondidos
// fora do tema (ver [data-so-tema] no globals.css).
// Precisa estar dentro de uma seção com "relative overflow-hidden".
export default function DecoracaoHero() {
  return (
    <div data-so-tema="black-friday" aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="tema-fita z-20">BLACK FRIDAY</div>
      {POEIRA.map(([x, y], i) => (
        <span
          key={i}
          className="tema-poeira"
          style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.7}s` }}
        />
      ))}
      <Car className="tema-carro w-9 h-9" />
      <div className="tema-divisor" />
    </div>
  );
}
