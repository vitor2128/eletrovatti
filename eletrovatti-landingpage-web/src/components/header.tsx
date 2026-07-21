"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MagneticWrapper } from "@/components/magnetic-wrapper";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#unidades", label: "Unidades" },
  { href: "#orcamento", label: "Orçamento" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-28">
          <Link
            href="/"
            className="flex-shrink-0 transition-transform hover:scale-105"
          >
            <Image
              src="/images/logo-preto.webp"
              alt="Grupo Eletrovatti"
              width={180}
              height={50}
              className={cn(
                "h-10 md:h-20 w-auto",
                !scrolled ? "brightness-0 invert" : "",
              )}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors relative group",
                  scrolled
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-white/90 hover:text-white",
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <MagneticWrapper>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                <Link href="#orcamento">Solicitar Orçamento</Link>
              </Button>
            </MagneticWrapper>
          </div>

          <button
            className={cn(
              "md:hidden p-2 transition-transform hover:scale-110",
              scrolled ? "text-slate-900" : "text-white",
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-background border-b border-border",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-all py-2 hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground mt-2"
          >
            <Link href="#orcamento" onClick={() => setMobileMenuOpen(false)}>
              Solicitar Orçamento
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
