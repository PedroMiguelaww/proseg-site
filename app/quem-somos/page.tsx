import type { Metadata } from "next";
import { Users, MapPin, Target, Eye, Gem, CheckCircle2, Clock, UserRound, AtSign, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import LinhaVertical from "@/components/secoes/LinhaVertical";
import Exemplo from "@/components/secoes/Exemplo";
import { HISTORIA } from "@/lib/institucional";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça a Proseg, associação de proteção veicular de Campina Grande - PB: atendimento local, sem burocracia e assistência 24h.",
};

const INSTITUCIONAL = [
  { titulo: "Missão", icon: Target },
  { titulo: "Visão", icon: Eye },
  { titulo: "Valores", icon: Gem },
];

const DIFERENCIAIS = [
  "Contratação rápida, prática e sem análise de perfil",
  "Atendimento humano e assistência 24h",
  "Compromisso com a segurança do seu patrimônio",
];


export default function QuemSomos() {
  return (
    <div className="bg-brand-blue text-white">

      {/* Seção Hero / Quem Somos */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-blue via-brand-mid to-brand-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-2.5 bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 backdrop-blur-sm">
            <Users className="w-5 h-5 text-brand-accent" aria-hidden="true" />
            <span>Nosso compromisso</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
            Especialistas em proteger o que é <span className="text-brand-accent">importante para você</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Com sede em Campina Grande - PB desde 2018, a Proseg nasceu para oferecer proteção veicular sem burocracia.
          </p>
        </div>
      </section>

      {/* Apresentação, missão, visão e valores */}
      <section className="py-24 bg-white text-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto mb-20">
            <Reveal className="space-y-6">
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
            </Reveal>
          </div>

          {/* Missão, visão e valores: textos ainda a definir com a empresa */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {INSTITUCIONAL.map(({ titulo, icon: Icon }, i) => (
              <Reveal key={titulo} delay={i * 120} className="bg-gray-50 border border-gray-200/80 p-8 rounded-[2rem] space-y-4 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-brand-light text-brand-dark flex items-center justify-center">
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold">{titulo}</h3>
                <p className="text-gray-600 italic">Em definição com a empresa.</p>
              </Reveal>
            ))}
          </div>

          {/* Nossa história (linha do tempo) */}
          <div className="mb-24">
            <Reveal className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <Exemplo />
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Nossa história</h2>
              <p className="text-gray-600 text-lg">Como a Proseg chegou até aqui.</p>
            </Reveal>
            <LinhaVertical itens={HISTORIA.map((h) => ({ marca: h.ano, titulo: h.titulo, texto: h.texto }))} />
          </div>

          {/* Equipe */}
          <Reveal className="mb-24 text-center">
            <Exemplo className="mb-3" />
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">Quem cuida de você</h2>
            <p className="text-gray-600 text-lg mb-12">As pessoas que atendem você aqui em Campina Grande.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {["Nome", "Nome", "Nome", "Nome"].map((nome, i) => (
                <div key={i} className="space-y-3">
                  <div className="aspect-square rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                    <UserRound className="w-1/3 h-1/3" aria-hidden="true" />
                  </div>
                  <div className="font-bold">{nome}</div>
                  <div className="text-sm text-gray-500">Função</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Onde estamos */}
          <Reveal className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-5 rounded-[2.5rem] overflow-hidden border border-gray-200 shadow-sm">
              <div className="lg:col-span-3 min-h-[320px] bg-[#e8eef3] relative">
                <iframe
                  title="Mapa: localização da Proseg em Campina Grande"
                  src={SITE.googleMapsEmbed}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="lg:col-span-2 bg-brand-blue text-white p-10 space-y-6">
                <h2 className="text-3xl font-extrabold">Onde estamos</h2>
                <ul className="space-y-5">
                  <li className="flex gap-4">
                    <MapPin className="w-6 h-6 text-brand-accent shrink-0" aria-hidden="true" />
                    <span>{SITE.endereco}<br />{SITE.cidade}</span>
                  </li>
                  <li className="flex gap-4">
                    <Clock className="w-6 h-6 text-brand-accent shrink-0" aria-hidden="true" />
                    <span>{SITE.horario}</span>
                  </li>
                  <li className="flex gap-4">
                    <Phone className="w-6 h-6 text-brand-accent shrink-0" aria-hidden="true" />
                    <a href={`tel:+${SITE.telefoneFixo}`} className="hover:text-brand-accent">{SITE.telefoneFixoDisplay}</a>
                  </li>
                  <li className="flex gap-4">
                    <AtSign className="w-6 h-6 text-brand-accent shrink-0" aria-hidden="true" />
                    <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent">{SITE.instagramDisplay}</a>
                  </li>
                </ul>
                <a
                  href={SITE.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-light text-brand-blue hover:bg-white px-6 py-3.5 rounded-xl font-bold transition-colors"
                >
                  Como chegar
                </a>
              </div>
            </div>
          </Reveal>

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
