import type { Metadata } from "next";
import { Users, MapPin, Award, CheckCircle2, Clock, UserRound, AtSign, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import DecoracaoHero from "@/components/tema/DecoracaoHero";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import LinhaVertical from "@/components/demo/LinhaVertical";
import Exemplo from "@/components/demo/Exemplo";
import { HISTORIA, VALORES } from "@/lib/demo";
import { SITE } from "@/lib/site";

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


export default function QuemSomos() {
  return (
    <div className="bg-brand-blue text-white">

      {/* Seção Hero / Quem Somos */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-blue via-brand-mid to-brand-dark relative overflow-hidden">
        <DecoracaoHero mascote="aperto" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-2.5 bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 backdrop-blur-sm">
            <Users className="w-5 h-5 text-brand-accent" aria-hidden="true" />
            <span>Nosso compromisso</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
            Especialistas em proteger o que é <span className="text-brand-accent destaque-tema">importante para você</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Com sede em Campina Grande - PB desde 2018, a Proseg nasceu para oferecer proteção veicular sem burocracia.
          </p>
        </div>
      </section>

      {/* Seção de Valores e Missão */}
      <section className="py-24 bg-surface text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <Reveal className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Confiança e atendimento próximo
              </h2>
              <p className="text-ink-soft text-lg leading-relaxed">
                A Proseg se destaca no mercado de proteção veicular pela seriedade com que trata cada associado. Trabalhamos com foco na agilidade do atendimento, sem consultas ao SPC/Serasa e sem burocracias desnecessárias na hora de contratar.
              </p>
              <ul className="space-y-3 pt-2">
                {DIFERENCIAIS.map((texto) => (
                  <li key={texto} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-ink-accent shrink-0" aria-hidden="true" />
                    <span className="font-semibold text-ink-strong">{texto}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-6 bg-surface-alt p-8 sm:p-12 rounded-[2.5rem] border border-line space-y-6 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-brand-light text-brand-dark flex items-center justify-center">
                <Award className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold">Nossa missão</h3>
              <p className="text-ink-soft leading-relaxed">
                Garantir que todo motorista tenha acesso a uma proteção veicular justa, de qualidade e com bom custo-benefício, para dirigir tranquilo pelas ruas e estradas.
              </p>
              <div className="pt-2">
                <h4 className="text-sm font-bold uppercase tracking-wider text-ink-soft mb-3">Nossos valores</h4>
                <ul className="flex flex-wrap gap-2">
                  {VALORES.map((v) => (
                    <li key={v} className="bg-surface-card border border-line px-4 py-2 rounded-full text-sm font-semibold">
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Nossa história (linha do tempo) */}
          <div className="mb-24">
            <Reveal className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <Exemplo />
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Nossa história</h2>
              <p className="text-ink-soft text-lg">Como a Proseg chegou até aqui.</p>
            </Reveal>
            <LinhaVertical itens={HISTORIA.map((h) => ({ marca: h.ano, titulo: h.titulo, texto: h.texto }))} />
          </div>

          {/* Equipe */}
          <Reveal className="mb-24 text-center">
            <Exemplo className="mb-3" />
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">Quem cuida de você</h2>
            <p className="text-ink-soft text-lg mb-12">As pessoas que atendem você aqui em Campina Grande.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {["Nome", "Nome", "Nome", "Nome"].map((nome, i) => (
                <div key={i} className="space-y-3">
                  <div className="aspect-square rounded-full bg-surface-alt border-2 border-dashed border-line flex items-center justify-center text-ink-soft">
                    <UserRound className="w-1/3 h-1/3" aria-hidden="true" />
                  </div>
                  <div className="font-bold">{nome}</div>
                  <div className="text-sm text-ink-soft">Função</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Onde estamos */}
          <Reveal className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-5 rounded-[2.5rem] overflow-hidden border border-line shadow-sm">
              <div className="lg:col-span-3 min-h-[320px] bg-surface-alt relative">
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
