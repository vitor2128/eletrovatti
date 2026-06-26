import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
  verification: {
    google: "google-site-verification-code", // Placeholder, user can update later
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Grupo Eletrovatti",
  "image": "https://eletrovatti.com.br/images/frente-matriz.png",
  "@id": "https://eletrovatti.com.br",
  "url": "https://eletrovatti.com.br",
  "telephone": "+551633824034", // Placeholder
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua São Lourenço, 2270", // Placeholder
    "addressLocality": "Matão",
    "addressRegion": "SP",
    "postalCode": "15990-300",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.55052, // Placeholder
    "longitude": -46.633309
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/grupoeletrovatti",
    "https://www.instagram.com/grupoeletrovatti",
    "https://www.linkedin.com/company/grupoeletrovatti"
  ]
};

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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://video.wixstatic.com" />
        {/* Preload LCP image */}
        <link
          rel="preload"
          as="image"
          href="/images/watti-20fundo-20transp.webp"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${inter.className} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
