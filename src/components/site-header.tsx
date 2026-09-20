import Link from "next/link";

const navigation = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/personalizar", label: "Personalizar" },
  { href: "/como-funciona", label: "Cómo funciona" },
  { href: "/empresas", label: "Empresas" },
  { href: "/seguimiento", label: "Seguimiento" },
];

function Logo() {
  return (
    <span className="text-xl font-black uppercase tracking-[0.16em]">
      Tu<span className="text-brand-lilac">Marca</span>
      <span className="text-brand-red">.</span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-black/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8">
        <Link href="/" aria-label="Ir al inicio">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-zinc-300 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-brand-lilac"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/personalizar"
            className="hidden rounded-full bg-brand-red px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-red-500 sm:inline-flex"
          >
            Crear mi prenda
          </Link>

          <details className="relative lg:hidden">
            <summary className="rounded-full border border-white/20 px-4 py-2 text-sm font-black text-white transition hover:border-brand-lilac hover:text-brand-lilac">
              Menú
            </summary>

            <nav className="absolute right-0 top-14 flex w-64 flex-col gap-1 rounded-2xl border border-white/10 bg-brand-black p-3 shadow-2xl">
              <Link
                href="/"
                className="rounded-xl px-4 py-3 text-sm font-bold text-zinc-200 hover:bg-white/10"
              >
                Inicio
              </Link>

              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-sm font-bold text-zinc-200 hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/personalizar"
                className="mt-2 rounded-xl bg-brand-red px-4 py-3 text-center text-sm font-black text-white"
              >
                Crear mi prenda
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

