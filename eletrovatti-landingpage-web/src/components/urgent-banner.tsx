"use client";

import { Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./animated-section";
import { FaWhatsapp } from "react-icons/fa";

export function UrgentBanner() {
  return (
    <section className="bg-primary py-10 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/20 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="slide-up">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Precisa de um serviço urgente?
              </h3>
              <p className="text-white/90 text-sm md:text-base">
                Entre em contato agora mesmo para um atendimento rápido
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 font-semibold gap-2 px-6"
                asChild
              >
                <a href="tel:+5516999934934">
                  <Phone className="w-5 h-5" />
                  (16) 99993-4934
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-primary bg-white hover:bg-white/90 hover:text-primary font-semibold gap-2 px-6"
                asChild
              >
                <a
                  href="https://wa.me/5516999934934"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Fale pelo WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
