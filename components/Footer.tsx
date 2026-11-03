import Link from "next/link";
import Image from "next/image";
import {
  PhoneCall,
  Phone,
  MapPin,
  ShieldCheck,
  Clock
} from "lucide-react";
import { SITE, NAV_LINKS, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white pt-16 pb-12 border-t border-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Grid Principal do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Coluna 1: Sobre a Empresa / Logo */}
          <div className="space-y-4">
            <Link href="/" className="inline-block" aria-label="Proseg - página inicial">
              <div className="relative w-70 h-24">
                <Image
                  src="/images/logoBranca.png"
                  alt="Logo Proseg"
                  fill
                  sizes="280px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Proteção veicular completa e assistência 24h para você rodar com total tranquilidade em Campina Grande e região.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <nav className="space-y-4" aria-label="Rodapé">
            <h3 className="text-lg font-bold text-white border-b border-brand-dark pb-2">Navegação</h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand-light transition-colors flex items-center gap-2">
                    <span aria-hidden="true">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Coluna 3: Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white border-b border-brand-dark pb-2">Atendimento</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-light shrink-0 mt-0.5" aria-hidden="true" />
                <span>Campina Grande - PB</span>
              </div>
              <a
                href={whatsappLink("Olá, vim pelo site da Proseg e gostaria de mais informações")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <PhoneCall className="w-5 h-5 text-brand-light shrink-0" aria-hidden="true" />
                <span>WhatsApp: {SITE.whatsappDisplay}</span>
              </a>
              <a
                href={`tel:${SITE.tollFree}`}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-brand-light shrink-0" aria-hidden="true" />
                <span>{SITE.tollFreeDisplay}</span>
              </a>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-light shrink-0 mt-0.5" aria-hidden="true" />
                <span>Suporte e Assistência: 24h por dia</span>
              </div>
            </div>
          </div>

          {/* Coluna 4: Selo de Segurança */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white border-b border-brand-dark pb-2">Segurança</h3>
            <div className="bg-brand-dark/40 border border-brand-light/10 p-4 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-brand-light font-semibold text-sm">
                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                <span>100% Garantido</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Associação de proteção veicular amparada pela lei e regulamentada para sua total segurança.
              </p>
            </div>
          </div>

        </div>

        {/* Linha Inferior / Direitos Reservados */}
        <div className="border-t border-brand-dark pt-8 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Proseg. Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
}
