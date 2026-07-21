"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Wrench } from "lucide-react";
import { useParallax } from "@/hooks/use-parallax";
import { AnimatedSection } from "@/components/animated-section";
import { MagneticWrapper } from "@/components/magnetic-wrapper";

export function Hero() {
  const scrollY = useParallax();

  return (
    <section
      id="home"
      className="relative pt-20 md:pt-24 text-accent-foreground overflow-hidden min-h-screen flex items-center"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{ backgroundImage: "url('/images/frente-matriz.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/90 via-accent/80 to-accent/95 mix-blend-multiply" />
      </div>

      <div className="absolute inset-0 overflow-hidden z-0">
        <div
          className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute bottom-40 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-2xl"
          style={{ transform: `translateY(${scrollY * -0.08}px)` }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <AnimatedSection animation="slide-up" delay={0}>
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-primary/30">
                <Shield className="w-4 h-4" />
                Assistência Técnica Autorizada ABB
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-white">
                Motores Elétricos de{" "}
                <span className="text-primary">Alta Performance</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <p className="text-lg md:text-xl text-accent-muted max-w-xl leading-relaxed">
                Há mais de 30 anos atendendo todo o Brasil com excelência em
                revenda e manutenção de motores elétricos industriais.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticWrapper>
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
                  >
                    <Link href="#orcamento">
                      Solicitar Orçamento
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </MagneticWrapper>
                <MagneticWrapper intensity={0.2}>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    <Link href="#sobre">Conheça Nossa História</Link>
                  </Button>
                </MagneticWrapper>
              </div>
            </AnimatedSection>
          </div>

          <div className="relative">
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"
                style={{ transform: `translateY(${scrollY * -0.05}px)` }}
              />
              <Image
                src="/images/watti-20fundo-20transp.webp"
                alt="Watti - Mascote Eletrovatti"
                width={400}
                height={400}
                className="relative z-10 w-full h-auto animate-float drop-shadow-2xl"
                priority
                fetchPriority="high"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-24">
          {[
            {
              icon: Zap,
              title: "Alta Eficiência",
              desc: "Motores com máxima eficiência energética",
            },
            {
              icon: Shield,
              title: "Garantia ABB",
              desc: "Produtos originais com garantia de fábrica",
            },
            {
              icon: Wrench,
              title: "Suporte Técnico",
              desc: "Equipe especializada à sua disposição",
            },
          ].map((item, index) => (
            <AnimatedSection
              key={item.title}
              animation="slide-up"
              delay={400 + index * 100}
            >
              <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group">
                <div className="p-3 bg-primary/20 rounded-lg transition-all duration-300 group-hover:bg-primary/30 group-hover:scale-110">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-accent-muted mt-1">{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
