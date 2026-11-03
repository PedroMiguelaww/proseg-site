import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
};

// Card com ícone, título e texto (pilares, vantagens etc.)
export default function IconCard({ icon: Icon, title, children }: Props) {
  return (
    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200/80 space-y-5 hover:shadow-xl transition-all">
      <div className="w-16 h-16 rounded-2xl bg-brand-light text-brand-dark flex items-center justify-center shadow-sm">
        <Icon className="w-8 h-8" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{children}</p>
    </div>
  );
}
