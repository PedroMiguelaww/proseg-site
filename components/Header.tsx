"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/protecao-veicular", label: "Proteção Veicular" },
  { href: "/rastreador", label: "Rastreador" },
  { href: "/quem-somos", label: "Quem Somos" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const whatsappUrl = whatsappLink("Olá, vim pelo site da Proseg e gostaria de mais informações");

  return (
    <header className="bg-brand-blue text-white sticky top-0 z-50 border-b border-brand-dark shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Proseg - página inicial">
            <div className="relative w-48 h-14">
              <Image
                src="/images/logoBranca.png"
                alt="Logo Proseg"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8 font-medium text-sm" aria-label="Principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`transition-colors ${
                  pathname === link.href
                    ? "text-white font-semibold border-b-2 border-brand-accent pb-1"
                    : "text-gray-200 hover:text-brand-light"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contatos Desktop: 0800 + WhatsApp */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${SITE.tollFree}`}
              className="flex items-center gap-2 text-sm font-semibold text-gray-200 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>{SITE.tollFreeDisplay}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-dark hover:bg-brand-light hover:text-brand-blue text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 border border-brand-light/10 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Botão do Menu Mobile */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              className="p-2 rounded-xl bg-brand-dark text-white hover:bg-brand-dark/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-brand-blue border-t border-brand-dark px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`block px-3 py-2 rounded-lg text-base font-medium ${
                pathname === link.href
                  ? "bg-brand-dark text-white"
                  : "text-gray-200 hover:bg-brand-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-3 grid grid-cols-2 gap-3">
            <a
              href={`tel:${SITE.tollFree}`}
              className="flex items-center justify-center gap-2 border border-white/20 text-white py-3 rounded-xl font-semibold text-sm"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>{SITE.tollFreeDisplay}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-dark text-white py-3 rounded-xl font-semibold text-sm border border-brand-light/10"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}