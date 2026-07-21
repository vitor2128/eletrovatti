"use client";

import {
  Settings,
  RefreshCw,
  Shield,
  Gauge,
  Package,
  Wrench,
} from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { GlowCard } from "./glow-card";
import Image from "next/image";

const services = [
  {
    icon: Settings,
    title: "Manutenção Corretiva",
    description:
      "Reparos emergenciais para motores com falhas ou que pararam de funcionar, minimizando o tempo de inatividade.",
    features: ["Diagnóstico preciso", "Reparo rápido", "Garantia de serviço"],
    image: "/images/services/49.jpeg",
  },
  {
    icon: RefreshCw,
    title: "Rebobinamento",
    description:
      "Serviço especializado de rebobinamento de motores elétricos com materiais de alta qualidade.",
    features: [
      "Fios de cobre de qualidade",
      "Isolamento térmico",
      "Testes de desempenho",
    ],
    image: "/images/services/30.jpg",
  },
  {
    icon: Shield,
    title: "Manutenção Preventiva",
    description:
      "Inspeções e manutenções programadas para evitar falhas e prolongar a vida útil dos motores.",
    features: [
      "Verificação periódica",
      "Lubrificação adequada",
      "Relatórios técnicos",
    ],
    image: "/images/services/31.jpg",
  },
  {
    icon: Gauge,
    title: "Balanceamento",
    description:
      "Balanceamento dinâmico de rotores para eliminar vibrações e aumentar a eficiência.",
    features: ["Redução de vibração", "Maior vida útil", "Economia de energia"],
    image: "/images/services/41.jpeg",
  },
  {
    icon: Package,
    title: "Venda de Motores",
    description:
      "Comercialização de motores elétricos novos e recondicionados das melhores marcas do mercado.",
    features: [
      "Diversas potências",
      "Marcas reconhecidas",
      "Garantia estendida",
    ],

    image: "/images/services/2.jpg",
  },
  {
    icon: Wrench,
    title: "Assistência Técnica",
    description:
      "Suporte técnico especializado para diagnóstico e solução de problemas em motores elétricos.",
    features: [
      "Atendimento in loco",
      "Consultoria técnica",
      "Soluções personalizadas",
    ],
    image: "/images/services/ELETROVATTI (13).jpg",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="slide-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Nossos Serviços
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços para atender todas as
            necessidades relacionadas a motores elétricos e geradores
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              animation="slide-up"
              delay={index * 100}
            >
              <GlowCard className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden h-full group">
                {/* Image Container */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors relative z-10">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-4 leading-relaxed relative z-10">
                    {service.description}
                  </p>

                  <ul className="space-y-2 relative z-10">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-700"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
