import { Navigation, Route } from "lucide-react";

// Celular desenhado mostrando o carro no mapa: a rota se desenha e o ponto
// do veículo pulsa. Tudo em SVG/CSS, sem imagem. Animações em globals.css.
export default function CelularMapa() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-[270px] sm:w-[300px]">
      {/* Corpo do celular */}
      <div className="rounded-[2.75rem] bg-brand-deep p-3 shadow-2xl ring-1 ring-white/15">
        <div className="relative rounded-[2.1rem] overflow-hidden bg-[#e8eef3] aspect-[9/18]">
          {/* Barra superior do app */}
          <div className="absolute top-0 inset-x-0 z-10 bg-brand-blue text-white px-4 pt-6 pb-3 flex items-center gap-2">
            <Navigation className="w-4 h-4 text-brand-accent" />
            <span className="text-xs font-bold tracking-wide">Proseg Rastreador</span>
          </div>

          {/* Mapa */}
          <svg viewBox="0 0 200 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
            {/* Quarteirões */}
            <g fill="#d5dee6">
              {[60, 130, 200, 270, 340].flatMap((y) =>
                [10, 75, 140].map((x) => <rect key={`${x}-${y}`} x={x} y={y} width="50" height="52" rx="4" />)
              )}
            </g>
            {/* Praça */}
            <rect x="75" y="200" width="50" height="52" rx="4" fill="#bfe0c4" />
            {/* Rota percorrida */}
            <path
              className="mapa-rota"
              d="M35 390 L35 322 L100 322 L100 186 L165 186 L165 120"
              fill="none"
              stroke="#134074"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Veículo no fim da rota (165,120 do mapa ≈ 82,5% / 30%) */}
          <div className="absolute left-[82.5%] top-[30%] -translate-x-1/2 -translate-y-1/2">
            <span className="mapa-pulso absolute inset-0 rounded-full bg-brand-accent" />
            <span className="relative block w-5 h-5 rounded-full bg-brand-accent border-[3px] border-white shadow-md" />
          </div>

          {/* Cartão de informações embaixo */}
          <div className="absolute bottom-3 inset-x-3 bg-white rounded-2xl p-4 shadow-lg space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] text-gray-500">Seu veículo</div>
                <div className="text-sm font-bold text-brand-blue">Parado · agora</div>
              </div>
              <span className="flex items-center gap-1 text-[11px] font-bold text-green-700 bg-green-100 px-2 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600" /> Online
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-brand-blue text-white rounded-xl py-2.5 text-xs font-bold">
              <Route className="w-3.5 h-3.5" /> Ver trajeto
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
