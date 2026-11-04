import { getTemaAtivo } from "@/themes";

export const SITE = {
  name: "Proseg",
  whatsapp: "5583921450783",
  whatsappDisplay: "(83) 92145-0783",
  tollFree: "08002001126",
  tollFreeDisplay: "0800 200 1126",
};

export const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/protecao-veicular", label: "Proteção Veicular" },
  { href: "/rastreador", label: "Rastreador" },
  { href: "/quem-somos", label: "Quem Somos" },
];

// Durante uma campanha, a mensagem ganha o marcador do tema
// (ex.: "... (Black Friday)") para saber de onde veio o contato
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  if (!message) return base;

  const marcador = getTemaAtivo().marcadorWhatsApp;
  const texto = marcador ? `${message} ${marcador}` : message;
  return `${base}?text=${encodeURIComponent(texto)}`;
}
