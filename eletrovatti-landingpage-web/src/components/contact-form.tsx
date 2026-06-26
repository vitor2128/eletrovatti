"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { useParallax } from "@/hooks/use-parallax"

export function ContactForm() {
  const scrollY = useParallax()
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    mensagem: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ nome: "", email: "", telefone: "", empresa: "", mensagem: "" })
    }, 3000)
  }

  return (
    <section id="orcamento" className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            <AnimatedSection animation="slide-left" delay={0}>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contato</span>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={100}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Solicite seu Orçamento
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Entre em contato conosco para solicitar um orçamento personalizado. Nossa equipe está pronta para
                atender suas necessidades.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={300}>
              <div className="space-y-4 pt-4">
                {[
                  { icon: Phone, label: "Telefone", value: "(16) 3382-4034" },
                  { icon: Mail, label: "E-mail", value: "vendas@eletrovatti.com.br" },
                  { icon: MapPin, label: "Endereço", value: "Rua São Lourenço, 2270 - Matão/SP" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale" delay={400} className="hidden lg:block">
              <div className="relative mt-8">
                <Image
                  src="/images/watti-20fundo-20transp.webp"
                  alt="Watti"
                  width={192}
                  height={192}
                  className="w-48 h-auto animate-float drop-shadow-xl"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* <AnimatedSection animation="slide-right" delay={200}>
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 space-y-4 animate-scale-in">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Mensagem Enviada!</h3>
                  <p className="text-muted-foreground text-center">Entraremos em contato em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome *</Label>
                      <Input
                        id="nome"
                        placeholder="Seu nome"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        required
                        className="bg-background transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/10"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-background transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/10"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone *</Label>
                      <Input
                        id="telefone"
                        placeholder="(00) 00000-0000"
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        required
                        className="bg-background transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/10"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="empresa">Empresa</Label>
                      <Input
                        id="empresa"
                        placeholder="Nome da empresa"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        className="bg-background transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Mensagem *</Label>
                    <Textarea
                      id="mensagem"
                      placeholder="Descreva sua necessidade ou solicite um orçamento..."
                      rows={5}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      required
                      className="bg-background resize-none transition-all duration-300 focus:scale-[1.01] focus:shadow-lg focus:shadow-primary/10"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30"
                  >
                    Enviar Mensagem
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection> */}
        </div>
      </div>
    </section>
  )
}
