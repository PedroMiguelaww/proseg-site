import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Faixa "Voltar para a Página Inicial" usada no topo das páginas internas
export default function PageHeader({ label }: { label: string }) {
  return (
    <div className="bg-brand-dark/40 border-b border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Voltar para a Página Inicial</span>
        </Link>
        <div className="text-xs text-brand-accent font-semibold tracking-wider uppercase">
          {label}
        </div>
      </div>
    </div>
  );
}
