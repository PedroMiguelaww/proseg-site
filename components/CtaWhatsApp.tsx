import { PhoneCall } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import Reveal from "@/components/Reveal";

type Props = {
  title: string;
  text: string;
  buttonLabel: string;
  message: string;
};

// Bloco de chamada final com botão para o WhatsApp
export default function CtaWhatsApp({ title, text, buttonLabel, message }: Props) {
  return (
    <Reveal className="bg-brand-blue text-white p-12 rounded-[2.5rem] shadow-2xl text-center space-y-6">
      <h3 className="text-3xl sm:text-4xl font-extrabold">{title}</h3>
      <p className="text-gray-300 text-lg max-w-xl mx-auto">{text}</p>
      <div>
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-brand-light text-brand-blue hover:bg-white px-10 py-5 rounded-2xl font-bold shadow-xl transition-all duration-300 text-lg"
        >
          <PhoneCall className="w-6 h-6 text-brand-dark" aria-hidden="true" />
          <span>{buttonLabel}</span>
        </a>
      </div>
    </Reveal>
  );
}
