"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  // Atraso em ms, para cards em sequência (efeito cascata)
  delay?: number;
  className?: string;
};

// Faz o bloco aparecer com fade + leve subida quando entra na tela (só uma vez).
// O estado inicial escondido só vale com a classe "js" no <html> (ver layout.tsx),
// então sem JavaScript o conteúdo aparece normalmente.
export default function Reveal({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
