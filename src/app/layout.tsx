import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  applicationName: "NUNA",
  title: {
    default: "NUNA | Ropa personalizada y a medida",
    template: "%s | NUNA",
  },
  description:
    "Camisetas, hoodies, calentadores, uniformes y prendas personalizadas con tus diseños o ideas.",
  keywords: [
    "ropa personalizada",
    "ropa a medida",
    "camisetas personalizadas",
    "hoodies personalizados",
    "uniformes empresariales",
    "ropa deportiva",
    "confección de ropa",
    "Ecuador",
  ],
  openGraph: {
    type: "website",
    locale: "es_EC",
    siteName: "NUNA",
    title: "NUNA | Ropa personalizada y a medida",
    description:
      "Elige una prenda, envía tu diseño o cuéntanos tu idea. Nosotros la confeccionamos para ti.",
  },
  category: "Moda y confección",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-brand-paper">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
