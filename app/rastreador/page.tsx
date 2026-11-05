import type { Metadata } from "next";
import { Smartphone, PhoneCall } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { VANTAGENS_RASTREADOR } from "@/lib/content";
import IconCard from "@/components/IconCard";
import Reveal from "@/components/Reveal";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import CelularMapa from "@/components/demo/CelularMapa";
import LinhaVertical from "@/components/demo/LinhaVertical";
import Exemplo from "@/components/demo/Exemplo";

export const metadata: Metadata = {
  title: "Rastreador Veicular",
  description:
    "Rastreador veicular Proseg em Campina Grande: localização em tempo real pelo celular, monitoramento 24h e recuperação em caso de roubo.",
};

// Passos 1 a 3: orientação do site antigo da Proseg. Passos 4 e 5: confirmar com a empresa.
const PASSOS_ROUBO = [
  { marca: "1", titulo: "Ligue para a central 24h", texto: "Assim que perceber o roubo ou furto, ligue para a central de assistência (o número fica no topo do site)." },
  { marca: "2", titulo: "Acione a polícia", texto: "Ligue para o 190 e informe o que aconteceu." },
  { marca: "3", titulo: "Registre o boletim de ocorrência", texto: "O B.O. é necessário para dar andamento ao atendimento." },
  { marca: "4", titulo: "Localização pelo rastreador", texto: "Com o rastreador, o veículo é localizado em tempo real e a informação é passada às autoridades." },
  { marca: "5", titulo: "Recuperação", texto: "A busca começa na hora, o que aumenta muito as chances de recuperar o veículo." },
];

const MENSAGEM = "Olá, vim pelo site da Proseg e gostaria de saber mais sobre o rastreador";

export default function Rastreador() {
  return (
    <div className="bg-brand-blue text-white">

      {/* Seção Principal / Hero do Rastreador */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-blue via-brand-mid to-brand-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-7 space-y-6 animate-fade-up">
              <div className="inline-flex items-center gap-2.5 bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 backdrop-blur-sm">
                <Smartphone className="w-5 h-5 text-brand-accent" aria-hidden="true" />
                <span>Tecnologia e monitoramento em tempo real</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                Rastreador Veicular <span className="text-brand-accent">Proseg</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl font-normal leading-relaxed">
                Mais segurança para você e seu veículo, com localização em tempo real pelo celular e monitoramento 24h.
              </p>

              <div className="pt-4">
                <a
                  href={whatsappLink(MENSAGEM)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-brand-light text-brand-blue hover:bg-white px-9 py-5 rounded-2xl font-bold shadow-xl transition-all duration-300 text-lg"
                >
                  <PhoneCall className="w-6 h-6 text-brand-dark" aria-hidden="true" />
                  <span>Quero instalar o rastreador</span>
                </a>
              </div>
            </div>

            {/* Celular mostrando o carro no mapa */}
            <div className="lg:col-span-5 animate-fade-up [animation-delay:150ms]">
              <CelularMapa />
            </div>

          </div>
        </div>
      </section>

      {/* Roubaram meu carro, e agora? */}
      <section className="py-24 bg-brand-deep text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <Exemplo />
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Roubaram meu carro. <span className="text-brand-accent">E agora?</span>
            </h2>
            <p className="text-gray-300 text-lg">Veja o que acontece, passo a passo, quando o veículo tem rastreador.</p>
          </Reveal>
          <LinhaVertical escuro itens={PASSOS_ROUBO} />
        </div>
      </section>

      {/* Seção de Vantagens Detalhadas */}
      <section className="py-24 bg-white text-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Por que ter um rastreador Proseg?
            </h2>
            <p className="text-gray-600 text-lg">
              Vantagens essenciais que fazem toda a diferença para o seu patrimônio.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {VANTAGENS_RASTREADOR.map((item, i) => (
              <IconCard key={item.title} icon={item.icon} title={item.title} delay={i * 120}>
                {item.desc}
              </IconCard>
            ))}
          </div>

          {/* CTA de Fechamento */}
          <CtaWhatsApp
            title="Proteja seu veículo hoje mesmo com o rastreador"
            text="Fale com nossa equipe e tire suas dúvidas sobre prazos e instalação em Campina Grande."
            buttonLabel="Solicitar cotação do rastreador"
            message={MENSAGEM}
          />

        </div>
      </section>
    </div>
  );
}
