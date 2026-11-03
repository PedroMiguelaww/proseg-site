import type { Metadata } from "next";
import {
  ShieldCheck,
  Users,
  MapPin,
  Award,
  HeartHandshake,
  CheckCircle2
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import IconCard from "@/components/IconCard";
import CtaWhatsApp from "@/components/CtaWhatsApp";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça a Proseg, associação de proteção veicular de Campina Grande - PB: atendimento local, sem burocracia e assistência 24h.",
};

const DIFERENCIAIS = [
  "Contratação rápida, prática e sem análise de perfil",
  "Atendimento humano e assistência 24h",
  "Compromisso com a segurança do seu patrimônio",
];

const PILARES = [
  {
    title: "Coberturas completas",
    desc: "Coberturas completas contra roubo, furto, colisão, incêndio e muito mais para carros e motos.",
    icon: ShieldCheck,
  },
  {
    title: "Atendimento local",
    desc: "Atendimento rápido e especializado, direto de Campina Grande - PB.",
    icon: MapPin,
  },
  {
    title: "Parceria de confiança",
    desc: "Relações transparentes, focadas na satisfação de cada associado da família Proseg.",
    icon: HeartHandshake,
  },
];

export default function QuemSomos() {
  return (
    <div className="bg-brand-blue text-white">
      <PageHeader label="Sobre a Proseg" />

      {/* Seção Hero / Quem Somos */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-blue via-brand-mid to-brand-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2.5 bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 backdrop-blur-sm">
            <Users className="w-5 h-5 text-brand-accent" aria-hidden="true" />
            <span>Nosso compromisso</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
            Especialistas em proteger o que é <span className="text-brand-accent">importante para você</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Com sede em Campina Grande - PB, a Proseg nasceu para oferecer proteção veicular sem burocracia.
          </p>
        </div>
      </section>

      {/* Seção de Valores e Missão */}
      <section className="py-24 bg-white text-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Confiança e atendimento próximo
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A Proseg se destaca no mercado de proteção veicular pela seriedade com que trata cada associado. Trabalhamos com foco na agilidade do atendimento, sem consultas ao SPC/Serasa e sem burocracias desnecessárias na hora de contratar.
              </p>
              <ul className="space-y-3 pt-2">
                {DIFERENCIAIS.map((texto) => (
                  <li key={texto} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-dark shrink-0" aria-hidden="true" />
                    <span className="font-semibold text-gray-800">{texto}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 bg-gray-50 p-8 sm:p-12 rounded-[2.5rem] border border-gray-200/80 space-y-6 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-brand-light text-brand-dark flex items-center justify-center">
                <Award className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold">Nossa missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Garantir que todo motorista tenha acesso a uma proteção veicular justa, de qualidade e com bom custo-benefício, para dirigir tranquilo pelas ruas e estradas.
              </p>
            </div>
          </div>

          {/* Pilares da Empresa */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {PILARES.map((pilar) => (
              <IconCard key={pilar.title} icon={pilar.icon} title={pilar.title}>
                {pilar.desc}
              </IconCard>
            ))}
          </div>

          {/* CTA Final */}
          <CtaWhatsApp
            title="Faça parte da nossa família de associados"
            text="Conheça nossos planos e garanta hoje mesmo a proteção que o seu veículo merece."
            buttonLabel="Falar com a Proseg no WhatsApp"
            message="Olá, vim pelo site da Proseg e gostaria de saber mais sobre a empresa"
          />

        </div>
      </section>
    </div>
  );
}
