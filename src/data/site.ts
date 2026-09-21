export const siteConfig = {
  name: "NUNA",
  shortName: "TuMarca",
  description:
    "Ropa personalizada y a medida para personas, equipos, emprendimientos y empresas.",
  whatsappNumber: "593995303067",
  whatsappDisplay: "099 530 3067",
};

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;
}

