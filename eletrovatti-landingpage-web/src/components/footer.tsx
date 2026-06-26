"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Linkedin, ArrowUp } from "lucide-react"
import { useParallax } from "@/hooks/use-parallax"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#unidades", label: "Unidades" },
  { href: "#orcamento", label: "Orçamento" },
  { href: "#contato", label: "Contato" },
]

export function Footer() {
  const scrollY = useParallax()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer id="contato" className="bg-accent relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-4">
            <Image
              src="/images/logo-preto.webp"
              alt="Grupo Eletrovatti"
              width={180}
              height={50}
              className="h-12 w-auto brightness-0 invert transition-transform hover:scale-105"
            />
            <p className="text-accent-muted max-w-md leading-relaxed">
              Há mais de 30 anos oferecendo soluções em motores elétricos para todo o Brasil. Assistência técnica
              autorizada ABB.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {[
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Navegação</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-muted hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-accent-muted">
              <li className="hover:text-primary transition-colors cursor-pointer">(16) 3382-4034</li>
              <li className="hover:text-primary transition-colors cursor-pointer">vendas@eletrovatti.com.br</li>
              <li className="hover:text-primary transition-colors cursor-pointer">eletrovatti.com.br</li>
              <li className="pt-2 text-white/80">
                Rua São Lourenço, 2270
                <br />
                Santa Cruz - Matão/SP
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-accent-muted">
            © {new Date().getFullYear()} Grupo Eletrovatti. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-sm text-accent-muted">Assistência Técnica Autorizada ABB</p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
