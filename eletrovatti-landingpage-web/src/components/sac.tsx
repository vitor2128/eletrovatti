"use client";

import Image from "next/image";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { useParallax } from "@/hooks/use-parallax";
import { FaWhatsapp } from "react-icons/fa";

export function SacSection() {
  const scrollY = useParallax();

  return (
    <section
      id="sac"
      className="py-16 md:py-24 lg:py-32 bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.08}px)` }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <AnimatedSection animation="slide-left" delay={0}>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                SAC
              </span>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={100}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Serviço de Atendimento ao Cliente
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Estamos aqui para ajudar! Nosso time está de prontidão para
                tirar suas dúvidas, ouvir suas sugestões e garantir a melhor
                experiência possível. Entre em contato conosco.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={300}>
              <div className="space-y-6 pt-4">
                <a
                  href="https://wa.me/5516997126294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-4 rounded-2xl border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-green-500/20 group-hover:scale-110">
                    <FaWhatsapp className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      WhatsApp
                    </p>
                    <p className="text-xl font-bold text-foreground group-hover:text-green-600 transition-colors">
                      (16) 99712-6294
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:eletrovatti@eletrovatti.com.br"
                  className="flex items-center gap-4 group p-4 rounded-2xl border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      E-mail
                    </p>
                    <p className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      eletrovatti@eletrovatti.com.br
                    </p>
                  </div>
                </a>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection
            animation="scale"
            delay={200}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl" />
              <Image
                src="/images/vattinho_sac.png"
                alt="Vattinho SAC - Mascote Grupo Eletrovatti"
                width={500}
                height={500}
                className="w-full max-w-[450px] h-auto animate-float relative z-10 drop-shadow-2xl"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
