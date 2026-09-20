import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  applicationName: "Tu Marca",
  title: {
    default: "Tu Marca | Ropa personalizada y a medida",
    template: "%s | Tu Marca",
  },
  description:
    "Creamos camisetas, hoodies, calentadores, uniformes y prendas personalizadas a medida con tus diseños o ideas.",
  keywords: [
    "ropa personalizada",
    "ropa a medida",
    "camisetas personalizadas",
    "hoodies personalizados",
    "calentadores personalizados",
    "uniformes",
    "ropa deportiva",
    "confección de ropa",
  ],
  openGraph: {
    type: "website",
    locale: "es_EC",
    siteName: "Tu Marca",
    title: "Tu Marca | Ropa personalizada y a medida",
    description:
      "Elige una prenda, envía tu diseño o cuéntanos tu idea. Nosotros la confeccionamos para ti.",
  },
  category: "Moda y confección",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}