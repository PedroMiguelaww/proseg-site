// "Cérebro" das skins sazonais: define o formato de um tema
// e escolhe qual tema está ativo pela data (horário de Brasília).
// As cores e decorações de cada tema ficam no app/globals.css,
// ligadas pelo atributo data-tema no <html>.

import padrao from "./padrao";
import blackFriday from "./black-friday";

// Nomes dos temas (os mesmos usados em NEXT_PUBLIC_TEMA_FORCADO e no data-tema)
export type TemaId = "padrao" | "black-friday";

// Um dia do calendário que se repete todo ano (ex.: 16 de novembro)
export type DiaDoAno = { mes: number; dia: number };

export type Tema = {
  id: TemaId;
  nome: string;
  // Trava de segurança: false = o tema NUNCA liga pela data (só no teste
  // forçado com NEXT_PUBLIC_TEMA_FORCADO). Mude para true quando for aprovado.
  ativo: boolean;
  // Período em que o tema fica ativo (incluindo o primeiro e o último dia).
  // null = tema padrão, que não tem período
  periodo: { inicio: DiaDoAno; fim: DiaDoAno } | null;
  // Frases do letreiro rolando no topo. null = sem letreiro
  letreiro: string[] | null;
  // Texto acrescentado às mensagens de WhatsApp, para saber de qual
  // campanha veio o contato. null = mensagem normal
  marcadorWhatsApp: string | null;
};

// Se dois períodos se sobrepuserem, vence o primeiro desta lista
const TEMAS_SAZONAIS: Tema[] = [blackFriday];

export const TEMAS: Tema[] = [padrao, ...TEMAS_SAZONAIS];

// Descobre o dia de hoje no fuso de São Paulo,
// não importa em que país o servidor esteja
export function dataEmSaoPaulo(agora: Date = new Date()) {
  const partes = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(agora);

  const pegar = (tipo: string) => Number(partes.find((p) => p.type === tipo)?.value);

  return { ano: pegar("year"), mes: pegar("month"), dia: pegar("day") };
}

// Transforma mês/dia em um número fácil de comparar:
// 16/nov → 1116, 25/dez → 1225, 10/jan → 110
function paraNumero({ mes, dia }: DiaDoAno) {
  return mes * 100 + dia;
}

// Diz se "hoje" está dentro do período do tema
export function estaNoPeriodo(hoje: DiaDoAno, periodo: { inicio: DiaDoAno; fim: DiaDoAno }) {
  const h = paraNumero(hoje);
  const inicio = paraNumero(periodo.inicio);
  const fim = paraNumero(periodo.fim);

  // Período normal, dentro do mesmo ano (ex.: 16/nov a 30/nov)
  if (inicio <= fim) return h >= inicio && h <= fim;

  // Período que atravessa a virada do ano (ex.: 26/dez a 10/jan)
  return h >= inicio || h <= fim;
}

export function getTemaPorId(id: string | undefined): Tema | undefined {
  return TEMAS.find((tema) => tema.id === id);
}

// Função principal: devolve o tema que deve aparecer agora
export function getTemaAtivo(agora: Date = new Date()): Tema {
  // 1. Se houver um tema forçado (para testes), ele ganha
  const forcado = getTemaPorId(process.env.NEXT_PUBLIC_TEMA_FORCADO);
  if (forcado) return forcado;

  // 2. Senão, procura um tema sazonal liberado cujo período inclua hoje
  const hoje = dataEmSaoPaulo(agora);
  const sazonal = TEMAS_SAZONAIS.find(
    (tema) => tema.ativo && tema.periodo !== null && estaNoPeriodo(hoje, tema.periodo)
  );

  // 3. Se nenhum combinar, usa o padrão
  return sazonal ?? padrao;
}
