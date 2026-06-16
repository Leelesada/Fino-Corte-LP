import React from "react";
import { motion } from "motion/react";
import { MessageCircle, Instagram, MapPin, Clock, Phone, ChevronRight } from "lucide-react";

export default function Hero() {
  const contactButtons = [
    {
      id: "whatsapp-button",
      icon: <MessageCircle className="w-5 h-5 md:w-6 md:h-6 shrink-0" />,
      label: "Falar no WhatsApp",
      subtitle: "(47) 3018-2555",
      url: "https://wa.me/554730182555",
      badge: "Mais Rápido"
    },
    {
      id: "instagram-button",
      icon: <Instagram className="w-5 h-5 md:w-6 md:h-6 shrink-0" />,
      label: "Seguir no Instagram",
      subtitle: "@finocortetecidos_",
      url: "https://www.instagram.com/finocortetecidos_/"
    },
    {
      id: "maps-button",
      icon: <MapPin className="w-5 h-5 md:w-6 md:h-6 shrink-0" />,
      label: "Como Chegar / Endereço",
      subtitle: "Rua São José, 196 - Centro, Gaspar/SC",
      url: "https://www.google.com/maps/place/R.+S%C3%A3o+Jos%C3%A9,+196+-+Sete+de+Setembro,+Gaspar+-+SC,+89110-010/@-26.9295801,-48.9585559,17z/data=!3m1!4b1!4m6!3m5!1s0x94df24a5bd2a1eef:0xca207c0ac8bdcc37!8m2!3d-26.9295802!4d-48.953685!16s%2Fg%2F11q2wm55c2?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D"
    }
  ];

  return (
    <section className="relative overflow-hidden pt-4 pb-16 md:pb-24 flex flex-col items-center justify-center px-4 max-w-5xl mx-auto">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-96 bg-[radial-gradient(circle_at_center,_rgba(187,139,53,0.08)_0%,_transparent_70%)] pointer-events-none -z-10" />

      <div className="w-full mx-auto text-center flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          id="hero-seo-description"
          className="text-stone-200 text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-loose text-justify md:text-center font-sans font-light tracking-wide max-w-3xl mb-12"
        >
          A <span className="text-gold font-bold">Fino Corte</span> oferece aviamentos em geral, tecidos e acessórios para costura e confecção. Contamos com <span className="text-gold font-bold">atendimento especializado</span> e estilista na loja no centro de Gaspar/SC para ajudar você a encontrar as melhores soluções para seus projetos de moda e artesanato.
        </motion.p>

        <div className="w-full max-w-2xl space-y-4 mb-16" id="contact-buttons-container">
          {contactButtons.map((btn, idx) => (
            <motion.a
              key={btn.id}
              id={btn.id}
              href={btn.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex items-center justify-between p-5 md:p-6 rounded-md bg-transparent border-2 border-gold text-gold font-bold tracking-widest text-sm uppercase group transition-all duration-300 hover:bg-gold hover:text-black hover:shadow-[0_0_25px_rgba(187,139,53,0.18)] cursor-pointer"
            >
              <div className="flex items-center gap-4 text-left">
                <div className="p-2 md:p-3 rounded bg-gold/5 border border-gold/25 group-hover:bg-black/10 group-hover:border-black/25 text-gold group-hover:text-black transition-all duration-300">
                  {btn.icon}
                </div>
                <div>
                  <span className="block text-sm md:text-base tracking-[0.1em] font-extrabold">
                    {btn.label}
                  </span>
                  <span className="block text-[11px] md:text-xs font-light text-zinc-400 group-hover:text-black/85 transition-colors duration-300 normal-case mt-0.5">
                    {btn.subtitle}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                {btn.badge && (
                  <span className="hidden sm:inline-block text-[9px] font-semibold tracking-wider bg-gold/10 group-hover:bg-black/10 border border-gold/30 group-hover:border-black/25 px-2 py-0.5 rounded mr-1">
                    {btn.badge}
                  </span>
                )}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full max-w-3xl bg-charcoal/40 border border-gold/15 rounded-lg p-6 md:p-8 text-left"
          id="visita-informacoes"
        >
          <div className="flex items-center gap-3 mb-6 border-b border-gold/20 pb-4">
            <Clock className="w-5 h-5 text-gold" />
            <h2 className="font-serif text-lg md:text-xl text-gold-light font-bold tracking-widest uppercase">
              Informações de Visita
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-stone-300 text-sm leading-relaxed">
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-xs uppercase tracking-wider text-zinc-400 block font-sans">
                    Horário de Atendimento
                  </span>
                  <span className="font-sans block mt-1 text-sm text-stone-200">
                    Segunda a Sexta: <strong className="text-white font-medium">08:30 às 18:00</strong><br />
                    <span className="text-xs text-zinc-400 italic block mt-1">(fechamos para almoço)</span>
                    Sábados: <strong className="text-white font-medium">08:30 às 12:00</strong>
                  </span>
                </div>
              </div>

              <div className="flex gap-3 items-start pt-3 border-t border-gold/5">
                <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-xs uppercase tracking-wider text-zinc-400 block font-sans">
                    Telefone Integrado
                  </span>
                  <a href="tel:+554730182555" className="font-sans block mt-1 text-sm text-gold hover:underline transition-all duration-200">
                    (47) 3018-2555
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-xs uppercase tracking-wider text-zinc-400 block font-sans">
                    Endereço da Loja
                  </span>
                  <span className="font-sans block mt-1 text-sm text-stone-200">
                    Rua São José, 196 - Centro<br />
                    Gaspar / SC — CEP 89110-010
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}