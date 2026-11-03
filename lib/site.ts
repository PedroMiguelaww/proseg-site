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

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
