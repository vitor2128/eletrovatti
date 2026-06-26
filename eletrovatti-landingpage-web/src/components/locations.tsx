"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { useParallax } from "@/hooks/use-parallax";

const locations = [
  {
    city: "Matão-SP",
    type: "Matriz",
    address: "Rua São Lourenço, 2270 - Santa Cruz",
    phone: "(16) 3382-4034",
    hours: "Seg-Sex: 07:00h às 17:18h",
  },
  {
    city: "Marília-SP",
    type: "Filial",
    address: "Rua Carlos Tosin, 930 - Distrito Industrial",
    phone: "(14) 3425-3212",
    hours: "Seg-Sex: 07:00h às 17:18h",
  },
  {
    city: "Itumbiara-GO",
    type: "Filial",
    address: "Av. Modesto de Carvalho, 2317 - Jardim Bandeirantes",
    phone: "(64) 3404-8253",
    hours: "Seg-Sex: 07:00h às 17:18h",
  },
];

export function Locations() {
  const scrollY = useParallax();

  return (
    <section
      id="unidades"
      className="py-16 md:py-24 lg:py-32 bg-muted relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        />
        <div
          className="absolute bottom-20 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossas Unidades
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 text-balance">
            Presença em Todo o Brasil
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Com unidades estrategicamente localizadas, oferecemos atendimento
            rápido e eficiente em todo o território nacional.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <AnimatedSection
              key={index}
              animation="slide-up"
              delay={index * 150}
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 group h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {location.city}
                    </span>
                    <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {location.type}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 group/item">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-110" />
                      <span className="text-sm text-muted-foreground">
                        {location.address}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
                      <span className="text-sm text-muted-foreground">
                        {location.phone}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
                      <span className="text-sm text-muted-foreground">
                        {location.hours}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
