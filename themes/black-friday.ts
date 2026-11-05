import type { Tema } from "./index";

// Black Friday: preto e dourado, de 16 a 30 de novembro.
// Cores e decorações: bloco html[data-tema="black-friday"] no app/globals.css
const blackFriday: Tema = {
  id: "black-friday",
  nome: "Black Friday",
  // Protótipo: ainda não aprovado. Só aparece no teste forçado
  ativo: false,
  periodo: {
    inicio: { mes: 11, dia: 16 },
    fim: { mes: 11, dia: 30 },
  },
  letreiro: [
    "Black Friday Proseg",
    "Proteção veicular",
    "Assistência 24h",
    "Campina Grande - PB",
  ],
  marcadorWhatsApp: "(Black Friday)",
};

export default blackFriday;
