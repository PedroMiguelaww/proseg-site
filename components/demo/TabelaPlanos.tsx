import { Check, Minus } from "lucide-react";
import { PLANOS_CARROS } from "@/lib/content";
import Reveal from "@/components/Reveal";

// Monta a lista de recursos de cada plano de carro. O Diamante diz
// "Tudo do Plano Ouro", então ele recebe os recursos do Ouro + os dele.
function recursosPorPlano() {
  const mapa = new Map<string, Set<string>>();
  for (const plano of PLANOS_CARROS) {
    const proprios = plano.recursos.filter((r) => !r.startsWith("Tudo do "));
    const herdado = plano.recursos.find((r) => r.startsWith("Tudo do "));
    const base = herdado ? mapa.get(herdado.replace("Tudo do ", "")) : undefined;
    mapa.set(plano.nome, new Set([...(base ?? []), ...proprios]));
  }
  return mapa;
}

// Tabela comparando os planos de carro lado a lado
export default function TabelaPlanos() {
  const mapa = recursosPorPlano();
  const linhas = [...new Set([...mapa.values()].flatMap((s) => [...s]))];

  return (
    <Reveal className="mb-24">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Compare os planos de carro</h2>
        <p className="text-ink-soft text-lg">Veja lado a lado o que cada plano inclui.</p>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-line shadow-sm">
        <table className="w-full min-w-[560px] text-sm">
          <thead>
            <tr className="bg-brand-blue text-white">
              <th scope="col" className="text-left font-semibold px-5 py-5 sticky left-0 bg-brand-blue">
                Cobertura
              </th>
              {PLANOS_CARROS.map((p) => (
                <th
                  key={p.nome}
                  scope="col"
                  className={`px-4 py-5 font-extrabold text-base ${p.popular ? "bg-brand-dark" : ""}`}
                >
                  {p.nome.replace("Plano ", "")}
                  {p.popular && (
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-brand-accent">
                      Mais popular
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {linhas.map((linha, i) => (
              <tr key={linha} className={i % 2 ? "bg-surface-alt" : "bg-surface-card"}>
                <th
                  scope="row"
                  className={`text-left font-medium text-ink-strong px-5 py-3.5 sticky left-0 ${i % 2 ? "bg-surface-alt" : "bg-surface-card"}`}
                >
                  {linha}
                </th>
                {PLANOS_CARROS.map((p) => {
                  const tem = mapa.get(p.nome)?.has(linha);
                  return (
                    <td key={p.nome} className={`text-center px-4 py-3.5 ${p.popular ? "bg-ink-accent/5" : ""}`}>
                      {tem ? (
                        <Check className="w-5 h-5 mx-auto text-ink-accent" aria-label="Incluso" />
                      ) : (
                        <Minus className="w-5 h-5 mx-auto text-ink-soft opacity-40" aria-label="Não incluso" />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  );
}
