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
      "Roubo | Furto",
      "Colisão",
      "Perda total",
      "Incêndio",
      "Sem perfil de condutor"
    ]
  },
  {
    nome: "Plano Ouro",
    tagline: "Cobertura completa com máxima proteção e assistência estendida",
    popular: true,
    recursos: [
      "Roubo | Furto",
      "Colisão",
      "Perda total",
      "Incêndio",
      "Sem perfil de condutor",
      "Borracheiro",
      "Reboque",
      "Chaveiro",
      "Danos a terceiro",
      "Hospedagem caso de batida",
      "Pane seca",
      "Pane elétrica, mecânica",
      "Assistência 24h 0800"
    ]
  },
  {
    nome: "Plano Diamante",
    tagline: "O nível máximo de segurança, comodidade e exclusividade",
    popular: false,
    recursos: [
      "Tudo do Plano Ouro",
      "Danos da natureza",
      "Carro reserva",
      "Moto reserva",
      "Até 100% da FIPE",
      "Rastreamento",
      "Vidros, faróis, retrovisores"
    ]
  }
];

export const PLANOS_MOTOS: Plano[] = [
  {
    nome: "Plano Prata (Moto)",
    tagline: "Proteção essencial e sob medida para sua motocicleta",
    popular: false,
    recursos: [
      "Roubo | Furto",
      "Colisão",
      "Perda total",
      "Incêndio",
      "Sem perfil de condutor",
      "Assistência 24h",
      "Reboque"
    ]
  },
  {
    nome: "Plano Ouro (Moto)",
    tagline: "Cobertura completa com assistência estendida para sua moto",
    popular: true,
    recursos: [
      "Roubo | Furto",
      "Colisão",
      "Perda total",
      "Incêndio",
      "Sem perfil de condutor",
      "Borracheiro",
      "Chaveiro",
      "Danos a terceiro",
      "Reboque",
      "Pane seca",
      "Pane elétrica / mecânica",
      "Assistência 24h 0800"
    ]
  }
];

// Usado na home e na página /rastreador
export const VANTAGENS_RASTREADOR: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: "Recuperação em caso de roubo",
    desc: "Nos casos em que seu carro for roubado, é possível saber a localização imediatamente e iniciar o processo de recuperação. As chances de reaver o veículo chegam a cerca de 98%.",
    icon: Lock
  },
  {
    title: "Segurança contra sequestro",
    desc: "Permite a localização ágil do veículo em situações de risco, tornando possível que o carro seja encontrado rapidamente pelas autoridades competentes.",
    icon: Share2
  },
  {
    title: "Preço acessível e monitoramento 24h",
    desc: "Instalação e monitoramento com excelente custo-benefício. Funciona 24 horas por dia e você acompanha tudo direto do seu smartphone.",
    icon: Clock
  }
];
