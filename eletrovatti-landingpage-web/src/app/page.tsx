import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

// Dynamic imports for below-the-fold components to reduce initial JS bundle
const Services = dynamic(() => import("@/components/services").then(mod => mod.Services), {
  loading: () => <div className="py-20 bg-slate-50" />,
})
const UrgentBanner = dynamic(() => import("@/components/urgent-banner").then(mod => mod.UrgentBanner))
const Locations = dynamic(() => import("@/components/locations").then(mod => mod.Locations), {
  loading: () => <div className="py-20" />,
})
const ABBPartner = dynamic(() => import("@/components/abb-partner").then(mod => mod.ABBPartner), {
  loading: () => <div className="py-20 bg-accent" />,
})
const ContactForm = dynamic(() => import("@/components/contact-form").then(mod => mod.ContactForm), {
  loading: () => <div className="py-20" />,
})
const SacSection = dynamic(() => import("@/components/sac").then(mod => mod.SacSection), {
  loading: () => <div className="py-20 bg-slate-50" />,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <UrgentBanner />
      <Locations />
      <ABBPartner />
      <SacSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
