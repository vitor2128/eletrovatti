"use client";

import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  FileText,
  Flame,
  Layers,
  ShieldCheck,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatedSection } from "@/components/animated-section";
import { GlowCard } from "@/components/glow-card";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/use-parallax";

const protectionTypes = [
  {
    code: "Ex-d",
    name: "À Prova de Explosão",
    description:
      "Invólucro projetado para suportar a pressão interna de uma eventual explosão sem propagar chamas ou gases quentes ao ambiente externo.",
    application: "Zonas com gases e vapores inflamáveis de alto risco.",
  },
  {
    code: "Ex-e",
    name: "Segurança Aumentada",
    description:
      "Medidas construtivas e elétricas rigorosas para evitar temperaturas excessivas, faíscas e centelhas durante a operação.",
    application:
      "Motores elétricos operando em áreas classificadas com exigência elevada.",
  },
  {
    code: "Ex-n",
    name: "Não Acendível",
    description:
      "Equipamento concebido para que, em operação normal, não seja capaz de provocar a ignição da atmosfera potencialmente explosiva.",
    application: "Zonas 2 e ambientes com presença esporádica de vapores.",
  },
  {
    code: "Ex-t",
    name: "Proteção contra Poeiras",
    description:
      "Invólucro com estanqueidade mecânica comprovada e controle térmico superficial para impedir a penetração e ignição de poeiras combustíveis.",
    application:
      "Silos agrícolas, moagens, usinas de açúcar, farinhas e fertilizantes.",
  },
];

const riskAtmospheres = [
  {
    icon: Flame,
    title: "Gases Inflamáveis",
    desc: "Gases e combustíveis voláteis em plantas químicas, petroquímicas e destilarias.",
  },
  {
    icon: Wind,
    title: "Vapores e Névoas",
    desc: "Solventes, tintas, vapores hidrocarbonetos e lavagens industriais.",
  },
  {
    icon: Layers,
    title: "Poeiras Combustíveis",
    desc: "Partículas de grãos, açúcar, fibras e pós minerais em silos e armazéns.",
  },
];

const certDetails = [
  {
    icon: FileText,
    label: "Certificado",
    value: "Certificado de Conformidade para Oficinas de Serviços",
  },
  {
    icon: Award,
    label: "Organismo Certificador",
    value: "LMP Certificações (Acreditado INMETRO)",
  },
  {
    icon: ShieldCheck,
    label: "Norma Técnica",
    value: "ABNT NBR IEC 60079-19",
  },
  {
    icon: Wrench,
    label: "Escopo Certificado",
    value:
      "Reparo, revisão e recuperação de motores Ex de baixa tensão (até 760 V)",
  },
  {
    icon: Calendar,
    label: "Validade",
    value: "Válido até 29/10/2032",
  },
];

const targetIndustries = [
  "Usinas de Açúcar e Álcool",
  "Silos & Armazéns de Grãos",
  "Química e Petroquímica",
  "Fertilizantes & Mineração",
  "Indústria Farmacêutica",
  "Fábricas de Tintas e Vernizes",
];

export function ExCertification() {
  const scrollY = useParallax();

  return (
    <section
      id="certificacao-ex"
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50 to-slate-100 relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.08}px)` }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedSection animation="slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/20 backdrop-blur-sm mb-4">
              <ShieldCheck className="w-4 h-4 text-primary" />
              Certificação Homologada • ABNT NBR IEC 60079-19
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Motores Elétricos para{" "}
              <span className="text-primary">Atmosferas Explosivas</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={200}>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Segurança inegociável, conformidade normativa e credibilidade
              técnica para ambientes industriais de alto risco. O{" "}
              <strong className="text-slate-800">Grupo Eletrovatti</strong>{" "}
              possui oficina certificada para{" "}
              <span className="text-primary font-semibold">
                reparo, revisão e recuperação
              </span>{" "}
              de motores elétricos da{" "}
              <strong className="text-slate-800">Linha Ex</strong> em baixa
              tensão (até 760 V).
            </p>
          </AnimatedSection>
        </div>

        {/* Mascot & Certificate Details */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Mascot Column with Floating Trust Badges */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <AnimatedSection
              animation="scale"
              delay={150}
              className="w-full max-w-[420px]"
            >
              <div className="relative flex flex-col items-center">
                {/* Glow backdrop behind mascot */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-full blur-3xl scale-95" />

                {/* Floating Badge Top-Right */}
                <div className="absolute -top-3 right-0 sm:right-2 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-200/80 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-medium block leading-none">
                      Escopo Técnico
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      Até 760 V
                    </span>
                  </div>
                </div>

                {/* Floating Badge Bottom-Left */}

                {/* Mascot Image */}
                <Image
                  src="/images/watti-20fundo-20transp.webp"
                  alt="Watti - Mascote Eletrovatti com certificação para motores Ex"
                  width={380}
                  height={380}
                  className="relative z-10 w-full max-w-[340px] h-auto animate-float drop-shadow-2xl"
                  loading="lazy"
                />

                <div className="text-center">
                  <p className="text-xs text-slate-500 mt-1.5">
                    Qualidade, segurança e excelência técnica garantidas para o
                    seu motor
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Official Certificate Card */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden">
                {/* Decorative border highlight */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-primary/80 to-blue-400" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary block">
                        Certificação Conquistada
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        Eletrovatti Máquinas de Solda Ltda
                      </h3>
                    </div>
                  </div>

                  <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Oficina Certificada
                  </span>
                </div>

                {/* Scope & Details List */}
                <div className="space-y-3.5 mb-8">
                  {certDetails.map((detail) => (
                    <div
                      key={detail.label}
                      className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100 transition-all hover:bg-slate-100/70"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <detail.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs text-slate-500 font-medium block">
                          {detail.label}
                        </span>
                        <span className="text-sm font-semibold text-slate-800">
                          {detail.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Commitment Box */}
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 mb-8">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    Compromisso com soluções que movimentam a indústria
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Processos rigorosamente auditados asseguram que cada motor
                    revisado retorne à sua linha de produção mantendo 100% das
                    características originais de proteção contra ignição e
                    explosão.
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    variant="outline"
                    // className="border-slate-300 hover:border-emerald-600 hover:text-emerald-700 transition-colors font-medium"
                    className="flex-1 hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 font-semibold shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <a
                      href="https://wa.me/5516999934934?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20e%20or%C3%A7amento%20para%20motores%20el%C3%A9tricos%20em%20atmosfera%20explosiva%20(Linha%20Ex)."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp className="w-4 h-4 mr-2 text-emerald-600" />
                      Falar com Especialista
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Protection Types: Ex-d, Ex-e, Ex-n, Ex-t */}
        <div className="mb-16">
          <AnimatedSection animation="slide-up" className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider block mb-2">
              Tipos de Proteção Atendidos
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Linha Ex de Motores Elétricos Industriais
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
              A manutenção em motores para atmosferas explosivas exige precisão
              milimétrica. Nossas bancadas de teste e procedimentos seguem
              estritamente as tolerâncias mecânicas e elétricas de cada
              categoria.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {protectionTypes.map((type, idx) => (
              <AnimatedSection
                key={type.code}
                animation="slide-up"
                delay={idx * 100}
              >
                <GlowCard className="h-full rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block px-3 py-1 rounded-lg bg-primary/10 text-primary text-base font-black border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">
                        {type.code}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Proteção Ex
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors">
                      {type.name}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {type.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                      Aplicação Típica:
                    </span>
                    <span className="text-xs text-slate-700">
                      {type.application}
                    </span>
                  </div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Hazard Atmospheres & Sectors */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider block">
                Ambientes de Alto Risco
              </span>
              <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                Proteção máxima contra gases, vapores e poeiras
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Qualquer arco elétrico ou sobreaquecimento não monitorado pode
                desencadear uma explosão em áreas classificadas. Conte com a
                segurança de um laboratório homologado.
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                {targetIndustries.map((seg) => (
                  <span
                    key={seg}
                    className="text-xs px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-medium"
                  >
                    {seg}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
              {riskAtmospheres.map((risk) => (
                <div
                  key={risk.title}
                  className="rounded-xl p-5 bg-slate-50 border border-slate-200/80 hover:border-primary/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                      <risk.icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-800 mb-1.5">
                      {risk.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {risk.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
