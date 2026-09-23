export const siteConfig = {
  name: "NUNA",
  shortName: "NUNA",
  description:
    "Ropa personalizada y a medida para personas, equipos, emprendimientos y empresas.",
  whatsappNumber: "593998113163",
  whatsappDisplay: "0998113163",
};

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;
}

