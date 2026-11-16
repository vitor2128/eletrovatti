import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Preloader } from "@/components/preloader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eletrovatti.com.br"),
  title: {
    default: "Grupo Eletrovatti | Motores Elétricos e Assistência Técnica ABB",
    template: "%s | Grupo Eletrovatti",
  },
  description:
    "Assistência técnica autorizada ABB. Revenda e manutenção de motores elétricos para todo o Brasil. Qualidade e eficiência para sua indústria.",
  keywords: [
    "Motores Elétricos",
    "Assistência Técnica ABB",
    "Manutenção de Motores",
    "Rebobinagem",
    "Motores Industriais",
    "Grupo Eletrovatti",
    "WEG",
    "Siemens",
    "Venda de Motores",
    "Atmosferas Explosivas",
    "Motores Ex",
    "ABNT NBR IEC 60079-19",
    "Linha Ex",
    "Certificação Inmetro",
    "LMP Certificações",
    "Oficina de Serviços Ex",
  ],
  authors: [{ name: "Grupo Eletrovatti" }],
  creator: "Grupo Eletrovatti",
  publisher: "Grupo Eletrovatti",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "Grupo Eletrovatti | Especialistas em Motores Elétricos",
    description:
      "Referência em assistência técnica autorizada ABB e manutenção de motores elétricos industriais. Soluções de alta performance para sua indústria.",
    url: "https://eletrovatti.com.br",
    siteName: "Grupo Eletrovatti",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/frente-matriz.png",
        width: 1200,
        height: 630,
        alt: "Grupo Eletrovatti - Fachada e Frota",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo Eletrovatti | Motores Elétricos",
    description:
      "Assistência técnica autorizada ABB e manutenção de motores elétricos para todo o Brasil.",
    images: ["/images/frente-matriz.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://eletrovatti.com.br",
  },
  category: "Industrial, Manutenção e Revenda de Motores Elétricos",
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Matão",
    "geo.position": "-21.6033;-48.3644",
    ICBM: "-21.6033, -48.3644",
  },
  verification: {
    google: "google-site-verification-code", // Placeholder, user can update later
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Grupo Eletrovatti",
    url: "https://eletrovatti.com.br",
    logo: "https://eletrovatti.com.br/images/logo-preto.webp",
    image: "https://eletrovatti.com.br/images/frente-matriz.png",
    description:
      "Referência em assistência técnica autorizada ABB e manutenção de motores elétricos industriais.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+55-16-99712-6294",
        contactType: "customer service",
        email: "eletrovatti@eletrovatti.com.br",
        availableLanguage: "Portuguese",
      },
    ],
    sameAs: [
      "https://www.facebook.com/grupoeletrovatti",
      "https://www.instagram.com/grupoeletrovatti",
      "https://www.linkedin.com/company/eletrovatti-maquinas-de-solda",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Grupo Eletrovatti",
    url: "https://eletrovatti.com.br",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://eletrovatti.com.br/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Grupo Eletrovatti - Matriz Matão",
    image: "https://eletrovatti.com.br/images/frente-matriz.png",
    "@id": "https://eletrovatti.com.br/#matao",
    url: "https://eletrovatti.com.br",
    telephone: "+551633824034",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua São Lourenço, 2270 - Santa Cruz",
      addressLocality: "Matão",
      addressRegion: "SP",
      postalCode: "15990-300",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -21.6033,
      longitude: -48.3644,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:18",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Grupo Eletrovatti - Filial Marília",
    image: "https://eletrovatti.com.br/images/frente-matriz.png",
    "@id": "https://eletrovatti.com.br/#marilia",
    url: "https://eletrovatti.com.br",
    telephone: "+551434253212",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Carlos Tosin, 930 - Distrito Industrial",
      addressLocality: "Marília",
      addressRegion: "SP",
      postalCode: "17512-120",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -22.1932,
      longitude: -49.9575,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:18",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Grupo Eletrovatti - Filial Itumbiara",
    image: "https://eletrovatti.com.br/images/frente-matriz.png",
    "@id": "https://eletrovatti.com.br/#itumbiara",
    url: "https://eletrovatti.com.br",
    telephone: "+556434048253",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Modesto de Carvalho, 2317 - Jardim Bandeirantes",
      addressLocality: "Itumbiara",
      addressRegion: "GO",
      postalCode: "75520-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -18.4231,
      longitude: -49.2155,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:18",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preconnect to external origins for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://video.wixstatic.com" />
        {/* Preload LCP image */}
        <link
          rel="preload"
          as="image"
          href="/images/watti-20fundo-20transp.webp"
          fetchPriority="high"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Preloader />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
