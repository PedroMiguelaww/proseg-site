import Link from "next/link";
import Image from "next/image";
import { 
  PhoneCall, 
  MapPin, 
  ShieldCheck, 
  Clock 
} from "lucide-react";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[#0B2545] text-white pt-16 pb-12 border-t border-[#134074]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Principal do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Coluna 1: Sobre a Empresa / Logo */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-70 h-24">
                <Image 
                  src="/images/logoBranca.png" 
                  alt="Logo Proseg" 
                  fill 
                  className="object-contain object-left" 
                />
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Proteção veicular completa e assistência 24h para você rodar com total tranquilidade em Campina Grande e região.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white border-b border-[#134074] pb-2">Navegação</h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#EEF4F8] transition-colors flex items-center gap-2">
                  <span>›</span> Início
                </Link>
              </li>
              <li>
                <Link href="/protecao-veicular" className="hover:text-[#EEF4F8] transition-colors flex items-center gap-2">
                  <span>›</span> Proteção Veicular
                </Link>
              </li>
              <li>
                <Link href="/rastreador" className="hover:text-[#EEF4F8] transition-colors flex items-center gap-2">
                  <span>›</span> Rastreador
                </Link>
              </li>
              <li>
                <Link href="/quem-somos" className="hover:text-[#EEF4F8] transition-colors flex items-center gap-2">
                  <span>›</span> Quem Somos
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white border-b border-[#134074] pb-2">Atendimento</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#EEF4F8] shrink-0 mt-0.5" />
                <span>Campina Grande - PB</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-[#EEF4F8] shrink-0" />
                <span>{SITE.whatsappDisplay}</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#EEF4F8] shrink-0 mt-0.5" />
                <span>Suporte e Assistência: 24h por dia</span>
              </div>
            </div>
          </div>

          {/* Coluna 4: Selo de Segurança */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white border-b border-[#134074] pb-2">Segurança</h3>
            <div className="bg-[#134074]/40 border border-[#EEF4F8]/10 p-4 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-[#EEF4F8] font-semibold text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>100% Garantido</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Associação de proteção veicular amparada pela lei e regulamentada para sua total segurança.
              </p>
            </div>
          </div>

        </div>

        {/* Linha Inferior / Direitos Reservados */}
        <div className="border-t border-[#134074] pt-8 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Proseg. Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
}