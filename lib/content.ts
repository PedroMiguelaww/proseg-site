import { Lock, Share2, Clock, type LucideIcon } from "lucide-react";

export type Plano = {
  nome: string;
  tagline: string;
  popular: boolean;
  recursos: string[];
};

export const PLANOS_CARROS: Plano[] = [
  {
    nome: "Plano Prata",
    tagline: "Proteção essencial com excelente custo-benefício",
    popular: false,
    recursos: [
      "Roubo e furto",
      "Colisão",
      "Perda total",
      "Incêndio",
      "Sem análise de perfil do motorista"
    ]
  },
  {
    nome: "Plano Ouro",
    tagline: "Proteção ampla com assistência 24h",
    popular: true,
    recursos: [
      "Roubo e furto",
      "Colisão",
      "Perda total",
      "Incêndio",
      "Sem análise de perfil do motorista",
      "Troca de pneu",
      "Reboque",
      "Chaveiro",
      "Danos a terceiros",
      "Hospedagem em caso de colisão",
      "Pane seca",
      "Pane elétrica ou mecânica",
      "Assistência 24h"
    ]
  },
  {
    nome: "Plano Diamante",
    tagline: "Nosso plano mais completo, com carro reserva e até 100% da FIPE",
    popular: false,
    recursos: [
      "Roubo e furto",
      "Colisão",
      "Perda total",
      "Incêndio",
      "Sem análise de perfil do motorista",
      "Troca de pneu",
      "Reboque",
      "Chaveiro",
      "Danos a terceiros",
      "Hospedagem em caso de colisão",
      "Pane seca",
      "Pane elétrica ou mecânica",
      "Assistência 24h",
      "Fenômenos da natureza",
      "Carro reserva",
      "Moto reserva",
      "Até 100% da FIPE",
      "Rastreamento",
      "Vidros, faróis e retrovisores"
    ]
  }
];

export const PLANOS_MOTOS: Plano[] = [
  {
    nome: "Plano Prata Moto",
    tagline: "Proteção essencial e sob medida para sua motocicleta",
    popular: false,
    recursos: [
      "Roubo e furto",
      "Colisão",
      "Perda total",
      "Incêndio",
      "Sem análise de perfil do motorista",
      "Assistência 24h",
      "Reboque"
    ]
  },
  {
    nome: "Plano Ouro Moto",
    tagline: "Cobertura completa com assistência estendida para sua moto",
    popular: true,
    recursos: [
      "Roubo e furto",
      "Colisão",
      "Perda total",
      "Incêndio",
      "Sem análise de perfil do motorista",
      "Troca de pneu",
      "Chaveiro",
      "Danos a terceiros",
      "Reboque",
      "Pane seca",
      "Pane elétrica ou mecânica",
      "Assistência 24h"
    ]
  }
];

// Usado na home e na página /rastreador
export const VANTAGENS_RASTREADOR: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: "Recuperação em caso de roubo",
    desc: "Se o seu veículo for roubado, você sabe na hora onde ele está e a busca começa imediatamente. Com o rastreador, as chances de recuperação são muito maiores.",
    icon: Lock
  },
  {
    title: "Histórico de trajetos",
    desc: "Consulte as rotas que o veículo fez e por onde ele passou, direto no celular.",
    icon: Share2
  },
  {
    title: "Preço acessível e monitoramento 24h",
    desc: "Instalação e monitoramento com excelente custo-benefício. Funciona 24h e você acompanha tudo pelo celular.",
    icon: Clock
  }
];
