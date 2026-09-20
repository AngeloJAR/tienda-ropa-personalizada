import { createWhatsAppUrl } from "@/data/site";

export function WhatsAppFloat() {
  const href = createWhatsAppUrl(
    "Hola, quiero información sobre ropa personalizada.",
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Consultar por WhatsApp"
      title="Consultar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white shadow-[0_16px_40px_rgba(239,35,60,0.35)] transition hover:-translate-y-1 hover:bg-brand-purple"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-current"
      >
        <path d="M12.04 2a9.83 9.83 0 0 0-8.4 14.93L2.2 22l5.2-1.36A9.98 9.98 0 1 0 12.04 2Zm0 17.96a8.05 8.05 0 0 1-4.1-1.12l-.3-.18-3.08.81.82-3-.2-.31a7.93 7.93 0 1 1 6.86 3.8Zm4.4-5.94c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.2a7.29 7.29 0 0 1-1.34-1.67c-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.43-.59 1.63-1.15.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    </a>
  );
}
