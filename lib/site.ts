import { getTemaAtivo } from "@/themes";

export const SITE = {
  name: "Proseg",
  whatsapp: "5583921450783",
  whatsappDisplay: "(83) 92145-0783",
  tollFree: "08002001126",
  tollFreeDisplay: "0800 200 1126",
  telefoneFixo: "558333391109",
  telefoneFixoDisplay: "(83) 3339-1109",
  razaoSocial: "Proseg - Associação de Proteção Patrimonial Mutualista",
  cnpj: "31.455.851/0001-52",
  endereco: "Av. Almirante Barroso, 100 - Jardim Quarenta",
  cidade: "Campina Grande - PB, 58416-180",
  horario: "Segunda a sexta, das 8h às 17h",
  instagram: "https://www.instagram.com/prosegassociados/",
  instagramDisplay: "@prosegassociados",
  facebook: "https://www.facebook.com/prosegassociadoscg/",
  // Ficha da Proseg no Google Maps (avaliações, rotas)
  googleMaps: "https://maps.google.com/?cid=8290537347645895284",
  // Mapa incorporado na página Quem Somos (coordenadas da ficha no Google)
  googleMapsEmbed: "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s-7.2304761,-35.8939256!6i17",
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
