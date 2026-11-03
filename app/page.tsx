import Link from "next/link";
import Image from "next/image";
import { SITE, whatsappLink } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { VANTAGENS_RASTREADOR } from "@/lib/content";
import bannerHero from "@/public/images/bannerHero.webp";
import reboque from "@/public/images/reboque.webp";
import celular from "@/public/images/celular.webp";
import {
  ShieldCheck,
  PhoneCall,
  CheckCircle,
  Car,
  FileText,
  CheckSquare,
  ClipboardCheck,
  Shield,
  AlertTriangle,
  Flame,
  CloudRain,
  Users,
  Wrench,
  Smartphone
} from "lucide-react";

const PASSOS = [
  {
    title: "Chame no WhatsApp e informe seu veículo",
    desc: "Em poucos minutos você recebe sua cotação, sem sair de casa.",
    icon: FileText
  },
  {
    title: "Escolha o seu plano",
    desc: "Com os dados do seu veículo, mostramos os planos disponíveis e você escolhe o que mais combina com você.",
    icon: CheckSquare
  },
  {
    title: "Faça a vistoria e assine o contrato",
    desc: "Nossa equipe agenda a vistoria e envia o contrato. Depois de assinar, é só rodar tranquilo.",
    icon: ClipboardCheck
  }
];

const COBERTURAS = [
  { title: "Roubo e furto", icon: Shield },
  { title: "Colisão", icon: Car },
  { title: "Perda total", icon: AlertTriangle },
  { title: "Incêndio", icon: Flame },
  { title: "Fenômenos da natureza", icon: CloudRain },
  { title: "Proteção a terceiros", icon: Users },
];

const ASSISTENCIAS = [
  "Reboque em todo o Brasil",
  "Auxílio na troca de pneu furado",
  "Auxílio em pane elétrica",
  "Chaveiro automotivo",
  "Auxílio em pane mecânica",
  "Transporte emergencial",
  "Auxílio na falta de combustível"
];

export default function Home() {
  const whatsappUrl = whatsappLink("Olá, vim pelo site da Proseg e gostaria de ver os planos");
  const rastreadorUrl = whatsappLink("Olá, vim pelo site da Proseg e gostaria de saber mais sobre o rastreador");

  return (
    <div className="bg-brand-blue text-white">
      
      {/* 1. Seção Hero (Banner Principal) */}
      <section className="bg-gradient-to-br from-brand-blue via-brand-mid to-brand-dark text-white py-24 lg:py-36 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Texto Principal */}
            <div className="lg:col-span-7 space-y-8 animate-fade-up">
              <div className="inline-flex items-center gap-2.5 bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium tracking-wide border border-white/10 backdrop-blur-sm">
                <ShieldCheck className="w-5 h-5 text-brand-accent" />
                <span>Proteção veicular em Campina Grande</span>
              </div>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1]">
                Fique tranquilo com seu veículo <span className="text-brand-accent">bem protegido.</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl font-normal leading-relaxed">
                Cobertura de até 100% da tabela FIPE e assistência 24h em todo o Brasil, para você rodar sem preocupação.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-light text-brand-blue hover:bg-white px-9 py-5 rounded-2xl font-bold text-center flex items-center justify-center gap-3 transition-all duration-300 shadow-xl text-lg"
                >
                  <PhoneCall className="w-6 h-6 text-brand-dark" />
                  <span>Falar no WhatsApp</span>
                </a>
                
                <Link
                  href="/protecao-veicular"
                  className="border-2 border-white/20 hover:border-white hover:bg-white/10 text-white px-9 py-5 rounded-2xl font-bold text-center transition-all duration-300 flex items-center justify-center text-lg backdrop-blur-sm"
                >
                  Conhecer planos
                </Link>
              </div>

              {/* Benefícios Rápidos */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-base text-gray-300 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-accent shrink-0" />
                  <span className="font-medium">Assistência 24h</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-accent shrink-0" />
                  <span className="font-medium">Sem consulta ao SPC/Serasa</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-accent shrink-0" />
                  <span className="font-medium">Cobertura nacional</span>
                </div>
              </div>
            </div>

            {/* Imagem do Hero */}
            <div className="lg:col-span-5 flex flex-col items-center animate-fade-up [animation-delay:150ms]">
              <div className="w-full max-w-md bg-white/5 p-4 rounded-[2.5rem] border border-white/15 shadow-2xl backdrop-blur-sm">
                <div className="relative w-full h-[420px] rounded-[2rem] overflow-hidden shadow-inner">
                  <Image
                    src={bannerHero}
                    alt="Motorista sorrindo ao volante"
                    fill
                    preload
                    sizes="(min-width: 1024px) 448px, 90vw"
                    className="object-cover"
                    placeholder="blur"
                  />
                </div>
                <div className="mt-4 text-center px-2 pb-2">
                  <h3 className="text-xl font-bold text-white mb-1">Proteção sem complicação</h3>
                  <p className="text-sm text-gray-300">Atendimento ágil e sem burocracia em Campina Grande - PB</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Seção: Se associar é muito fácil */}
      <section className="py-28 bg-gray-50 text-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              É muito fácil se associar
            </h2>
            <p className="text-gray-600 text-xl font-normal">
              Sem análise de perfil, sem consulta ao SPC/Serasa, sem burocracia.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {PASSOS.map(({ title, desc, icon: Icon }, i) => (
              <Reveal key={title} delay={i * 120}>
                <div className="h-full bg-white p-10 rounded-3xl shadow-sm border border-gray-200/80 flex flex-col items-center text-center space-y-6 transition-colors duration-300 hover:border-brand-dark/40">
                  <div className="w-20 h-20 rounded-2xl bg-brand-light text-brand-dark flex items-center justify-center shadow-md">
                    <Icon className="w-10 h-10" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Seção: Proteção Veicular Completa */}
      <section className="py-28 bg-white text-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Proteção veicular completa
            </h2>
            <p className="text-gray-600 text-xl font-normal">
              Seu veículo protegido contra os imprevistos do dia a dia. As coberturas variam conforme o plano escolhido.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {COBERTURAS.map((item, i) => {
              const IconComp = item.icon;
              return (
                <Reveal key={item.title} delay={(i % 3) * 100}>
                  <div className="h-full bg-gray-50/80 p-8 rounded-3xl border border-gray-200/80 flex items-center gap-6 transition-colors duration-300 hover:border-brand-dark/40">
                    <div className="w-16 h-16 rounded-2xl bg-brand-light text-brand-dark flex items-center justify-center shrink-0 shadow-sm">
                      <IconComp className="w-8 h-8" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-xl">{item.title}</h3>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Sub-bloco: Assistência 24 horas */}
          <Reveal>
          <div className="bg-brand-blue text-white p-10 sm:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-brand-dark">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-2.5 bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-semibold border border-white/10">
                  <Wrench className="w-5 h-5 text-brand-accent" />
                  <span>Suporte contínuo</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold">Assistência 24h</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-base text-gray-200">
                  {ASSISTENCIAS.map((text, i) => (
                    <div key={text} className={`flex items-center gap-3 ${i === ASSISTENCIAS.length - 1 ? 'sm:col-span-2' : ''}`}>
                      <CheckCircle className="w-5 h-5 text-brand-accent shrink-0" />
                      <span className="font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coluna da Imagem do Reboque */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="w-full max-w-md bg-white/5 p-4 rounded-3xl border border-white/15 shadow-2xl backdrop-blur-sm">
                  <div className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-inner bg-brand-deep">
                    <Image
                      src={reboque}
                      alt="Guincho da assistência 24h"
                      fill
                      sizes="(min-width: 1024px) 448px, 90vw"
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="mt-4 text-center px-2">
                    <h4 className="font-bold text-lg text-white mb-1">Socorro rápido</h4>
                    <p className="text-xs text-gray-300 mb-4">
                      Guincho e suporte 24h à sua disposição.
                    </p>
                    <a
                      href={`tel:${SITE.tollFree}`}
                      className="block w-full bg-brand-light text-brand-blue py-3.5 rounded-xl font-bold text-sm text-center hover:bg-white transition-all duration-300 shadow-lg"
                    >
                      Acionar assistência: {SITE.tollFreeDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Reveal>

        </div>
      </section>

      {/* 4. Seção: Rastreador */}
      <section className="py-28 bg-gray-50 text-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Textos e Vantagens */}
            <Reveal className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2.5 bg-brand-dark/10 text-brand-dark px-5 py-2.5 rounded-full text-sm font-semibold border border-brand-dark/10">
                  <Smartphone className="w-5 h-5 text-brand-dark" />
                  <span>Tecnologia e monitoramento</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                  Rastreador veicular
                </h2>
                <p className="text-gray-600 text-xl leading-relaxed font-normal">
                  Mais segurança para você e seu veículo, com localização em tempo real pelo celular.
                </p>
              </div>

              <div className="space-y-6">
                {VANTAGENS_RASTREADOR.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <div key={item.title} className="flex gap-6 items-start p-6 rounded-3xl">
                      <div className="w-16 h-16 rounded-2xl bg-white text-brand-dark shadow-md border border-gray-100 flex items-center justify-center shrink-0 mt-1">
                        <IconComp className="w-8 h-8" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-bold text-xl">{item.title}</h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-6">
                <a
                  href={rastreadorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-brand-blue text-white hover:bg-brand-dark px-10 py-5 rounded-2xl font-bold shadow-xl transition-all duration-300 text-lg"
                >
                  <PhoneCall className="w-6 h-6" />
                  <span>Quero instalar o rastreador</span>
                </a>
              </div>
            </Reveal>

            {/* Coluna da Imagem do Celular */}
            <Reveal delay={150} className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-md bg-white p-6 rounded-[2.5rem] border border-gray-200 shadow-2xl flex flex-col items-center">
                <div className="relative w-full h-[520px] my-2">
                  <Image
                    src={celular}
                    alt="Aplicativo de rastreamento no celular"
                    fill
                    sizes="(min-width: 1024px) 400px, 90vw"
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 text-center w-full">
                  <h3 className="text-xl font-bold text-brand-blue mb-1">App no seu celular</h3>
                  <p className="text-sm text-gray-600 mb-5">
                    Acompanhe a rota, o histórico de trajetos e a localização em tempo real, na palma da sua mão.
                  </p>
                  <div className="bg-brand-blue text-white py-3.5 px-4 rounded-xl font-bold text-xs tracking-wider shadow-md w-full text-center">
                    MONITORAMENTO 24H
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

    </div>
  );
}