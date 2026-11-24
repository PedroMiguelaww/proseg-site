// Conteúdo das seções novas (protótipo da nova estrutura).
// Fontes, conferidas em 05/11/2026:
//  - Google Maps: ficha "Proseg Proteção - Campina Grande" (nota, avaliações, horário, endereço)
//  - Receita Federal (CNPJ 31.455.851/0001-52): início das atividades em 18/06/2018
//  - Site antigo prosegassociados.com.br: o que fazer em caso de roubo, app, valores
// O que ainda é exemplo está marcado com "[A confirmar]" ou com a etiqueta amarela.

export const NOTA_GOOGLE = { nota: "4,9", total: 72 };

export const NUMEROS = [
  { valor: "4,9", rotulo: "de nota no Google" },
  { valor: "72", rotulo: "avaliações de clientes" },
  { valor: "2018", rotulo: "ano de fundação, em Campina Grande" },
  { valor: "24h", rotulo: "de assistência, todos os dias" },
];

// Avaliações copiadas do Google sem alterar o texto (inclusive a escrita original)
export const DEPOIMENTOS = [
  {
    nome: "Thomas Robson",
    texto:
      "O time da Proseg eleva o padrão de qualidade no atendimento. Mais do que oferecer segurança para o seu veiculo, proporciona tranquilidade, conforto e proteção para toda família, garantindo confiança em todo o momento. Parabéns a todos os envolvidos.",
    estrelas: 5,
    quando: "Avaliação no Google",
  },
  {
    nome: "Anderson Freitas",
    texto:
      "Aconselho,excelente atendimento, equipe solicita e comprometida em resolver a questão do cliente. Indico,vem conhecer as instalações da Proseg.",
    estrelas: 5,
    quando: "Avaliação no Google",
  },
  {
    nome: "Edson Junior",
    texto:
      "Tenho meus 2 veículos protegidos a 4 anos , e sempre que precisei fui muito bem atendido pela assistência 24 horas.",
    estrelas: 5,
    quando: "Avaliação no Google",
  },
];

export const HISTORIA = [
  { ano: "2018", titulo: "Fundação", texto: "A Proseg nasce em Campina Grande para oferecer proteção veicular sem burocracia." },
  { ano: "20XX", titulo: "[A confirmar]", texto: "Ex.: chegada aos primeiros mil associados." },
  { ano: "20XX", titulo: "[A confirmar]", texto: "Ex.: lançamento do aplicativo Proseg Associados ou do rastreador." },
  { ano: "Hoje", titulo: "Nota 4,9 no Google", texto: "Mais de 70 avaliações de associados, com atendimento de segunda a sexta e assistência 24h." },
];

export const PERGUNTAS = [
  {
    pergunta: "Precisa de consulta ao SPC/Serasa para se associar?",
    resposta: "Não. A Proseg não faz consulta ao SPC/Serasa nem análise de perfil do motorista.",
  },
  {
    pergunta: "O que faço se meu veículo for roubado ou furtado?",
    resposta:
      "Ligue para a central de assistência 24h (o número fica no topo do site), acione a polícia pelo 190 e registre o boletim de ocorrência.",
  },
  {
    pergunta: "Como faço para acionar a assistência 24h?",
    resposta: "Ligue para o número da assistência, que fica no topo do site. O atendimento funciona 24 horas, todos os dias, em todo o Brasil.",
  },
  {
    pergunta: "A Proseg tem aplicativo?",
    resposta: "Sim. O aplicativo Proseg Associados está disponível para Android e iPhone.",
  },
  {
    pergunta: "A partir de quando a proteção começa a valer?",
    resposta: "[A confirmar com a empresa]",
  },
  {
    pergunta: "Posso trocar de plano depois?",
    resposta: "[A confirmar com a empresa]",
  },
];
