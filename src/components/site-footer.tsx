import Link from "next/link";
import { siteConfig } from "@/data/site";

const footerLinks = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/personalizar", label: "Personalizar" },
  { href: "/como-funciona", label: "Cómo funciona" },
  { href: "/empresas", label: "Empresas" },
  { href: "/seguimiento", label: "Seguimiento" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-xl font-black uppercase tracking-[0.16em]">
            NU<span className="text-brand-lilac">NA</span>
            <span className="text-brand-red">.</span>
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-zinc-400">
            {siteConfig.description}
          </p>
          <p className="mt-4 text-sm font-bold text-brand-lilac">
            WhatsApp temporal: {siteConfig.whatsappDisplay}
          </p>
        </div>

        <nav className="flex max-w-xl flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-zinc-400">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-zinc-500">
        Elige. Personaliza. Nosotros lo hacemos realidad.
      </div>
    </footer>
  );
}

