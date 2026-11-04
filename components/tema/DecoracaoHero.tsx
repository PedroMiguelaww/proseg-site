import { Car, ShieldCheck, MapPin, Handshake } from "lucide-react";

// Posição (em %) de cada pontinho de poeira dourada: [esquerda, topo]
const POEIRA = [
  [6, 90], [14, 70], [28, 95], [40, 80], [52, 92],
  [64, 75], [76, 96], [88, 82], [95, 60], [33, 60],
];

// Cada página tem um "mascote" diferente, que aparece uma vez na entrada,
// para a animação não ficar repetitiva ao navegar pelo site
export type Mascote = "carro" | "escudo" | "pino" | "aperto";

function MascoteAnimado({ tipo }: { tipo: Mascote }) {
  switch (tipo) {
    case "carro":
      // Carrinho atravessando o rodapé do topo
      return <Car className="tema-carro w-9 h-9" />;
    case "escudo":
      // Escudo que surge e dá um brilho
      return <ShieldCheck className="tema-mascote tema-escudo w-10 h-10" />;
    case "pino":
      // Pino de localização que cai, quica e solta ondas de radar
      return (
        <span className="tema-mascote tema-pino">
          <span className="tema-radar" />
          <span className="tema-radar" style={{ animationDelay: "1.9s" }} />
          <MapPin className="relative w-10 h-10" />
        </span>
      );
    case "aperto":
      // Aperto de mãos surgindo de leve
      return <Handshake className="tema-mascote tema-aperto w-10 h-10" />;
  }
}

// Enfeites do topo das páginas na Black Friday: fita no canto, poeira
// dourada, mascote da página e linha divisória. Ficam escondidos
// fora do tema (ver [data-so-tema] no globals.css).
// Precisa estar dentro de uma seção com "relative overflow-hidden".
export default function DecoracaoHero({ mascote }: { mascote: Mascote }) {
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
      <MascoteAnimado tipo={mascote} />
      <div className="tema-divisor" />
    </div>
  );
}
