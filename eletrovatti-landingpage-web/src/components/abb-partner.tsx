"use client"

import { Shield, Award, CheckCircle2 } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { useParallax } from "@/hooks/use-parallax"
import Image from "next/image"

const features = [
  "Revenda autorizada de motores ABB",
  "Peças originais com garantia de fábrica",
  "Assistência técnica especializada",
  "Suporte técnico qualificado",
]

export function ABBPartner() {
  const scrollY = useParallax()

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <AnimatedSection animation="slide-left" delay={0}>
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-primary/30">
                <Award className="w-4 h-4" />
                Parceiro Oficial
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={100}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance text-white">
                Assistência Técnica Autorizada <span className="text-primary">ABB</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={200}>
              <p className="text-lg text-accent-muted leading-relaxed">
                Somos revenda e assistência técnica autorizada ABB de motores elétricos, oferecendo soluções de alta
                qualidade para sua empresa. Trabalhamos com a tecnologia de ponta da ABB, garantindo equipamentos
                robustos e eficientes para atender às mais diversas demandas industriais.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={300}>
              <ul className="space-y-3 pt-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-white/90 transition-colors group-hover:text-primary">{feature}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="slide-right" delay={200}>
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-primary/20 hover:-translate-y-2">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-white p-8 rounded-xl shadow-inner">
                    <div className="text-5xl md:text-6xl font-bold text-[#FF000F] tracking-tight">
                      <Image src="/images/logo-abb.png" alt="ABB" width={100} height={100} className="w-full h-full" />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                    <span className="text-lg font-semibold text-white">Certificação Oficial</span>
                  </div>
                  <p className="text-accent-muted">
                    Empresa certificada pela ABB para comercialização e manutenção de motores elétricos em todo o
                    território brasileiro.
                  </p>
                </div>
              </div>

              <div
                className="absolute -left-12 -bottom-8 w-28 h-28 hidden lg:block"
                style={{ transform: `translateY(${scrollY * -0.03}px)` }}
              >
                <Image
                  src="/images/watti-20fundo-20transp.webp"
                  alt="Watti"
                  width={112}
                  height={112}
                  className="w-full h-full object-contain animate-float-slow drop-shadow-lg scale-x-[-1]"
                  loading="lazy"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
