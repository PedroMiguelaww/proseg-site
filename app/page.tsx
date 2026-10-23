import Link from "next/link";
import { whatsappLink } from "@/lib/site";
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
  Lock,
  Share2,
  Clock,
  Smartphone
} from "lucide-react";

export default function Home() {
  const whatsappUrl = whatsappLink("Olá, vim pelo site da Proseg e gostaria de ver os planos");

  return (
    <div className="bg-brand-blue text-white">
      
      {/* 1. Seção Hero (Banner Principal) */}
      <section className="bg-gradient-to-br from-[#0B2545] via-[#0d2e54] to-[#134074] text-white py-24 lg:py-36 relative overflow-hidden">
        <div className="max-w-[90%] xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Texto Principal */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2.5 bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium tracking-wide border border-white/10 backdrop-blur-sm">
                <ShieldCheck className="w-5 h-5 text-[#4da8da]" />
                <span>Proteção Veicular em Campina Grande</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1]">
                Fique tranquilo com seu veículo <span className="text-[#4da8da]">bem protegido.</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl font-normal leading-relaxed">
                Cobertura de até 100% FIPE e assistência 24H em todo Brasil para você rodar com total tranquilidade.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#EEF4F8] text-[#0B2545] hover:bg-white px-9 py-5 rounded-2xl font-bold text-center flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:scale-105 text-lg"
                >
                  <PhoneCall className="w-6 h-6 animate-pulse text-[#134074]" />
                  <span>Falar no WhatsApp</span>
                </a>
                
                <Link
                  href="/protecao-veicular"
                  className="border-2 border-white/20 hover:border-white hover:bg-white/10 text-white px-9 py-5 rounded-2xl font-bold text-center transition-all duration-300 flex items-center justify-center hover:scale-105 text-lg backdrop-blur-sm"
                >
                  Conhecer Planos
                </Link>
              </div>

              {/* Benefícios Rápidos */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-base text-gray-300 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#4da8da] shrink-0" />
                  <span className="font-medium">Assistência 24h</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#4da8da] shrink-0" />
                  <span className="font-medium">Sem Consulta SPC</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#4da8da] shrink-0" />
                  <span className="font-medium">Cobertura Nacional</span>
                </div>
              </div>
            </div>

            {/* Imagem do Hero */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-md bg-white/5 p-4 rounded-[2.5rem] border border-white/15 shadow-2xl backdrop-blur-sm">
                <div className="w-full h-[420px] rounded-[2rem] overflow-hidden shadow-inner">
                  <img 
                    src="/images/bannerHero.jpeg" 
                    alt="Sua Proteção Garantida" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 text-center px-2 pb-2">
                  <h3 className="text-xl font-bold text-white mb-1">Sua Proteção Garantida</h3>
                  <p className="text-sm text-gray-300">Atendimento ágil e desburocratizado em Campina Grande - PB</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Seção: Se associar é muito fácil */}
      <section className="py-28 bg-gray-50 text-[#0B2545]">
        <div className="max-w-[90%] xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Se associar é muito fácil
            </h2>
            <p className="text-gray-600 text-xl font-normal">
              Sem avaliação de perfil, sem consulta ao SPC, sem burocracia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group bg-white p-10 rounded-3xl shadow-sm border border-gray-200/80 flex flex-col items-center text-center space-y-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#134074]/40">
              <div className="w-20 h-20 rounded-2xl bg-[#EEF4F8] text-[#134074] flex items-center justify-center transition-all duration-300 group-hover:bg-[#134074] group-hover:text-white group-hover:scale-110 shadow-md">
                <FileText className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[#134074]">Chame no WhatsApp e informe seu veículo</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Você não gasta nem um minutinho para fazer sua cotação aqui. Chame no WhatsApp.
              </p>
            </div>

            <div className="group bg-white p-10 rounded-3xl shadow-sm border border-gray-200/80 flex flex-col items-center text-center space-y-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#134074]/40">
              <div className="w-20 h-20 rounded-2xl bg-[#EEF4F8] text-[#134074] flex items-center justify-center transition-all duration-300 group-hover:bg-[#134074] group-hover:text-white group-hover:scale-110 shadow-md">
                <CheckSquare className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[#134074]">Escolha seu plano e produtos adicionais</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Agora que a gente sabe qual veículo você tem, escolha o melhor plano para ele.
              </p>
            </div>

            <div className="group bg-white p-10 rounded-3xl shadow-sm border border-gray-200/80 flex flex-col items-center text-center space-y-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#134074]/40">
              <div className="w-20 h-20 rounded-2xl bg-[#EEF4F8] text-[#134074] flex items-center justify-center transition-all duration-300 group-hover:bg-[#134074] group-hover:text-white group-hover:scale-110 shadow-md">
                <ClipboardCheck className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[#134074]">Faça sua vistoria e assine seu contrato</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Pronto! Agora vamos entrar em contato com você para finalizar sua proteção.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Seção: Proteção Veicular Completa */}
      <section className="py-28 bg-white text-[#0B2545]">
        <div className="max-w-[90%] xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Proteção veicular completa
            </h2>
            <p className="text-gray-600 text-xl font-normal">
              Seu veículo fica bem protegido se algo ruim acontecer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              { title: "Roubo e Furto", icon: Shield },
              { title: "Colisão", icon: Car },
              { title: "Perda total", icon: AlertTriangle },
              { title: "Incêndio", icon: Flame },
              { title: "Fenômenos da natureza", icon: CloudRain },
              { title: "Proteção a terceiros", icon: Users },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="group bg-gray-50/80 p-8 rounded-3xl border border-gray-200/80 flex items-center gap-6 transition-all duration-300 hover:bg-white hover:border-[#134074] hover:shadow-xl hover:-translate-y-1.5">
                  <div className="w-16 h-16 rounded-2xl bg-[#EEF4F8] text-[#134074] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#134074] group-hover:text-white shadow-sm">
                    <IconComp className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl transition-colors duration-300 group-hover:text-[#134074]">{item.title}</h3>
                </div>
              );
            })}
          </div>

          {/* Sub-bloco: Assistência 24 horas */}
          <div className="bg-[#0B2545] text-white p-10 sm:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-[#134074]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-2.5 bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-semibold border border-white/10">
                  <Wrench className="w-5 h-5 text-[#4da8da]" />
                  <span>Suporte Contínuo</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold">Assistência 24 horas</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-base text-gray-200">
                  {[
                    "Reboque em todo Brasil",
                    "Auxílio na troca de pneu furado",
                    "Auxílio em pane elétrica",
                    "Chaveiro auto",
                    "Auxílio em pane mecânica",
                    "Transporte emergencial",
                    "Auxílio na falta de combustível"
                  ].map((text, i) => (
                    <div key={i} className={`flex items-center gap-3 transition-transform hover:translate-x-1 duration-200 ${i === 6 ? 'sm:col-span-2' : ''}`}>
                      <CheckCircle className="w-5 h-5 text-[#4da8da] shrink-0" />
                      <span className="font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coluna da Imagem do Reboque */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="w-full max-w-md bg-white/5 p-4 rounded-3xl border border-white/15 shadow-2xl backdrop-blur-sm">
                  <div className="w-full h-[320px] rounded-2xl overflow-hidden shadow-inner bg-[#071930]">
                    <img 
                      src="/images/reboque.png" 
                      alt="Assistência e Reboque 24h" 
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="mt-4 text-center px-2">
                    <h4 className="font-bold text-lg text-white mb-1">Socorro Rápido</h4>
                    <p className="text-xs text-gray-300 mb-4">
                      Guincho e suporte 24 horas por dia à sua disposição.
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#EEF4F8] text-[#0B2545] py-3.5 rounded-xl font-bold text-sm text-center hover:bg-white transition-all duration-300 shadow-lg"
                    >
                      Acionar Assistência
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Seção: Rastreador */}
      <section className="py-28 bg-gray-50 text-[#0B2545]">
        <div className="max-w-[90%] xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Textos e Vantagens */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2.5 bg-[#134074]/10 text-[#134074] px-5 py-2.5 rounded-full text-sm font-semibold border border-[#134074]/10">
                  <Smartphone className="w-5 h-5 text-[#134074]" />
                  <span>Tecnologia e Monitoramento</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                  Rastreador
                </h2>
                <p className="text-gray-600 text-xl leading-relaxed font-normal">
                  Um rastreador automotivo possui inúmeras vantagens e vale a pena conhecê-las para cuidar cada vez mais de sua segurança e do seu carro.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Recuperação em caso de roubo",
                    desc: "Nos casos em que seu carro for roubado é possível saber a localização do veículo imediatamente e iniciar o processo de recuperação. As chances de não achar seu carro são quase nulas, cerca de 98%.",
                    icon: Lock
                  },
                  {
                    title: "Segurança contra sequestro",
                    desc: "Um rastreador para carros permite a localização do veículo, em caso de sequestro, sendo possível que o carro seja localizado e o resgate da vítima seja rápido.",
                    icon: Share2
                  },
                  {
                    title: "Preço acessível e monitoramento 24h",
                    desc: "Rastreador possui um preço acessível de instalação e monitoramento. Além disso funciona 24 horas por dia e você acompanha direto do seu celular.",
                    icon: Clock
                  }
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div key={idx} className="group flex gap-6 items-start p-6 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:border hover:border-gray-200/80">
                      <div className="w-16 h-16 rounded-2xl bg-white text-[#134074] shadow-md border border-gray-100 flex items-center justify-center shrink-0 mt-1 transition-all duration-300 group-hover:bg-[#134074] group-hover:text-white group-hover:scale-110">
                        <IconComp className="w-8 h-8" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-bold text-xl transition-colors duration-300 group-hover:text-[#134074]">{item.title}</h3>
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
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#0B2545] text-white hover:bg-[#134074] px-10 py-5 rounded-2xl font-bold shadow-xl transition-all duration-300 hover:scale-105 text-lg"
                >
                  <PhoneCall className="w-6 h-6" />
                  <span>Quero instalar o rastreador</span>
                </a>
              </div>
            </div>

            {/* Coluna da Imagem do Celular */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-md bg-white p-6 rounded-[2.5rem] border border-gray-200 shadow-2xl flex flex-col items-center">
                <div className="w-full h-[520px] flex justify-center items-center my-2">
                  <img 
                    src="/images/celular.png" 
                    alt="Aplicativo de Rastreamento no Celular" 
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <div className="mt-4 text-center w-full">
                  <h3 className="text-xl font-bold text-[#0B2545] mb-1">App no seu Celular</h3>
                  <p className="text-sm text-gray-600 mb-5">
                    Acompanhe a rota, histórico de trajeto e localização em tempo real na palma da sua mão.
                  </p>
                  <div className="bg-[#0B2545] text-white py-3.5 px-4 rounded-xl font-bold text-xs tracking-wider shadow-md w-full text-center">
                    MONITORAMENTO SATELITAL 24/7
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}