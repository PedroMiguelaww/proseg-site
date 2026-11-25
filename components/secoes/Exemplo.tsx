// Etiqueta "dados de exemplo" do protótipo. Sai quando os dados reais entrarem.
export default function Exemplo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block bg-amber-300 text-amber-950 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${className}`}
    >
      Exemplo · dados fictícios
    </span>
  );
}
