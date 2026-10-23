"use client";

import Link from "next/link";
import { 
  ArrowLeft, 
  ShieldCheck, 
  Users, 
  MapPin, 
  Award, 
  HeartHandshake, 
  PhoneCall,
  CheckCircle2
} from "lucide-react";
import { whatsappLink } from "@/lib/site";

export default function QuemSomos() {
  const whatsappUrl = whatsappLink("Olá, vim pelo site da Proseg e gostaria de saber mais sobre a empresa");

  return (
    <div className="bg-brand-blue text-white">
      
      {/* Cabeçalho Interno / Voltar */}
      <div className="bg-[#134074]/40 border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-medium text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para a Página Inicial</span>
          </Link>
          <div className="text-xs text-[#4da8da] font-semibold tracking-wider uppercase">
            Sobre a Proseg
          </div>
        </div>
      </div>

      {/* Seção Hero / Quem Somos */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0B2545] via-[#0d2e54] to-[#134074] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2.5 bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 backdrop-blur-sm">
            <Users className="w-5 h-5 text-[#4da8da]" />
            <span>Nossa História e Compromisso</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
            Especialistas em proteger o que é <span className="text-[#4da8da]">importante para você</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Baseada em Campina Grande - PB, a Proseg nasceu com o propósito de oferecer tranquilidade e segurança veicular sem burocracia.
          </p>
        </div>
      </section>

      {/* Seção de Valores e Missão */}
      <section className="py-24 bg-white text-[#0B2545]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Tradição e confiança em Campina Grande e região
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A Proseg se destaca no mercado de proteção veicular pela seriedade com que trata cada associado. Trabalhamos focado na agilidade de atendimento, sem consultas ao SPC/Serasa e sem burocracias desnecessárias na hora de contratar.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#134074]" />
                  <span className="font-semibold text-gray-800">Contratação rápida, prática e sem análise de perfil</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#134074]" />
                  <span className="font-semibold text-gray-800">Suporte humanizado e assistência 24 horas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#134074]" />
                  <span className="font-semibold text-gray-800">Compromisso total com a segurança do seu patrimônio</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-gray-50 p-8 sm:p-12 rounded-[2.5rem] border border-gray-200/80 space-y-6 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-[#EEF4F8] text-[#134074] flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Nossa Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Garantir que todo motorista tenha acesso a uma proteção veicular justa, de alta qualidade e com excelente custo-benefício, proporcionando total paz de espírito ao rodar pelas ruas e estradas.
              </p>
            </div>
          </div>

          {/* Pilares da Empresa */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200/80 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#EEF4F8] text-[#134074] flex items-center justify-center">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold">Segurança Garantida</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Coberturas completas contra roubo, furto, colisão, incêndio e muito mais para carros e motos.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200/80 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#EEF4F8] text-[#134074] flex items-center justify-center">
                <MapPin className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold">Atendimento Local</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Atendimento especializado estruturado para dar suporte ágil diretamente em Campina Grande-PB.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200/80 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#EEF4F8] text-[#134074] flex items-center justify-center">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold">Parceria de Confiança</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Relações transparentes e focadas na satisfação e fidelidade de cada associado da família Proseg.
              </p>
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-[#0B2545] text-white p-12 rounded-[2.5rem] shadow-2xl text-center space-y-6">
            <h3 className="text-3xl sm:text-4xl font-extrabold">
              Faça parte da nossa família de associados
            </h3>
            <p className="text-gray-300 text-lg max-w-xl mx-auto">
              Venha conhecer nossos planos e garanta a proteção que o seu veículo merece hoje mesmo.
            </p>
            <div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#EEF4F8] text-[#0B2545] hover:bg-white px-10 py-5 rounded-2xl font-bold shadow-xl transition-all duration-300 hover:scale-105 text-lg"
              >
                <PhoneCall className="w-6 h-6 text-[#134074]" />
                <span>Falar com a Proseg no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}