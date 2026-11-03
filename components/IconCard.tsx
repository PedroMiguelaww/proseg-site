import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

type Props = {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  // Atraso da animação de entrada, para cards em sequência
  delay?: number;
};

// Card com ícone, título e texto (pilares, vantagens etc.)
export default function IconCard({ icon: Icon, title, children, delay }: Props) {
  return (
    <Reveal delay={delay}>
      <div className="h-full bg-gray-50 p-8 rounded-3xl border border-gray-200/80 space-y-5 hover:border-brand-dark/40 transition-colors">
        <div className="w-16 h-16 rounded-2xl bg-brand-light text-brand-dark flex items-center justify-center shadow-sm">
          <Icon className="w-8 h-8" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{children}</p>
      </div>
    </Reveal>
  );
}
