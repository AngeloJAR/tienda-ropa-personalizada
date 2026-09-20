import Link from "next/link";

const categories = [
  {
    name: "Camisetas",
    description: "Diseños personales, para marcas, eventos y emprendimientos.",
    icon: "👕",
    href: "/catalogo?categoria=camisetas",
  },
  {
    name: "Hoodies",
    description: "Prendas cómodas con estampado, bordado o diseño propio.",
    icon: "🧥",
    href: "/catalogo?categoria=hoodies",
  },
  {
    name: "Calentadores",
    description: "Conjuntos deportivos configurados según tu estilo.",
    icon: "🏃",
    href: "/catalogo?categoria=calentadores",
  },
  {
    name: "Uniformes",
    description: "Soluciones para empresas, instituciones y equipos.",
    icon: "👔",
    href: "/catalogo?categoria=uniformes",
  },
  {
    name: "Conjuntos",
    description: "Prendas combinadas para uso urbano o deportivo.",
    icon: "✨",
    href: "/catalogo?categoria=conjuntos",
  },
  {
    name: "A medida",
    description: "Cuéntanos qué necesitas y preparamos una cotización.",
    icon: "📐",
    href: "/personalizar",
  },
];

const steps = [
  {
    number: "01",
    title: "Elige",
    description: "Selecciona una prenda o explícanos qué necesitas fabricar.",
  },
  {
    number: "02",
    title: "Personaliza",
    description: "Define talla, color, cantidad y envía tu diseño o referencia.",
  },
  {
    number: "03",
    title: "Cotizamos",
    description: "Confirmamos precio, materiales, anticipo y fecha estimada.",
  },
  {
    number: "04",
    title: "Producimos",
    description: "Fabricamos, revisamos la calidad y coordinamos la entrega.",
  },
];

export default function Home() {
  return (
    <div className="bg-brand-black text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_22%,rgba(109,40,217,0.42),transparent_32%),radial-gradient(circle_at_18%_72%,rgba(239,35,60,0.24),transparent_30%)]" />
        <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div>
            <div className="inline-flex rounded-full border border-brand-lilac/40 bg-brand-lilac/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-lilac">
              Ropa personalizada y a medida
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Viste lo que
              <span className="block text-brand-red">imaginas.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300 sm:text-xl">
              Creamos camisetas, hoodies, calentadores, conjuntos y uniformes.
              Elige una prenda, envía tu diseño o pide ayuda para convertir tu
              idea en algo real.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/personalizar"
                className="rounded-full bg-brand-red px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-white transition hover:-translate-y-1 hover:bg-red-500"
              >
                Personalizar prenda
              </Link>

              <Link
                href="/catalogo"
                className="rounded-full border border-brand-lilac/50 px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-brand-lilac transition hover:-translate-y-1 hover:bg-brand-lilac hover:text-brand-black"
              >
                Ver catálogo
              </Link>
            </div>

            <div className="mt-12 grid max-w-2xl gap-5 border-t border-white/10 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-black text-brand-lilac">50%</p>
                <p className="mt-1 text-xs leading-5 text-zinc-400">
                  Anticipo después de aprobar la cotización
                </p>
              </div>
              <div>
                <p className="text-2xl font-black text-brand-lilac">A medida</p>
                <p className="mt-1 text-xs leading-5 text-zinc-400">
                  Tallas, telas, colores y acabados
                </p>
              </div>
              <div>
                <p className="text-2xl font-black text-brand-lilac">
                  Desde 1 unidad
                </p>
                <p className="mt-1 text-xs leading-5 text-zinc-400">
                  Pedidos personales o por volumen
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-7 rounded-[3rem] bg-brand-purple/35 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-[#15111c] shadow-2xl">
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(196,181,253,0.18),transparent_40%,rgba(239,35,60,0.16))]" />

              <div className="relative flex min-h-[540px] flex-col justify-between p-7 sm:p-10">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-brand-lilac/30 bg-black/25 px-4 py-2 text-xs font-black uppercase tracking-widest text-brand-lilac">
                    Diseño exclusivo
                  </span>
                  <span className="text-4xl text-brand-red">✦</span>
                </div>

                <div className="relative flex flex-1 items-center justify-center py-8">
                  <div className="absolute h-72 w-72 rounded-full border border-brand-purple/70 bg-brand-purple/10" />
                  <div className="absolute h-96 w-96 rounded-full border border-brand-lilac/10" />
                  <span className="relative text-[11rem] leading-none drop-shadow-2xl sm:text-[14rem]">
                    👕
                  </span>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/45 p-6 backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-lilac">
                    Hecho especialmente para ti
                  </p>
                  <p className="mt-3 text-2xl font-black">
                    Tu idea. Tu diseño. Tu prenda.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 rounded-2xl bg-brand-red px-5 py-4 text-white shadow-xl sm:-left-8">
              <p className="text-xs font-black uppercase tracking-wider text-white/70">
                Proceso de pago
              </p>
              <p className="mt-1 font-black">50% + 50%</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-lilac">
                Proceso claro
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">
                De la idea a la entrega
              </h2>
            </div>

            <Link
              href="/como-funciona"
              className="text-sm font-black uppercase tracking-wider text-brand-lilac underline decoration-2 underline-offset-4"
            >
              Conocer todo el proceso
            </Link>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-brand-purple/70 hover:bg-brand-purple/10"
              >
                <p className="text-5xl font-black text-brand-purple transition group-hover:text-brand-lilac">
                  {step.number}
                </p>
                <h3 className="mt-8 text-2xl font-black uppercase">
                  {step.title}
                </h3>
                <p className="mt-4 leading-7 text-zinc-400">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-paper py-24 text-brand-ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-purple">
                Nuestro catálogo
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">
                Elige tu prenda
              </h2>
            </div>
            <p className="max-w-md leading-7 text-zinc-600">
              Cada modelo puede personalizarse por talla, color, tela, técnica
              y cantidad.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                href={category.href}
                className="group relative min-h-72 overflow-hidden rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-brand-lilac hover:shadow-xl"
              >
                <div className="absolute right-5 top-4 text-8xl opacity-10 transition group-hover:scale-110 group-hover:opacity-20">
                  {category.icon}
                </div>
                <div className="relative flex h-full flex-col justify-between">
                  <span className="text-sm font-black text-brand-red">
                    0{index + 1}
                  </span>
                  <div>
                    <div className="mb-5 text-5xl">{category.icon}</div>
                    <h3 className="text-2xl font-black uppercase">
                      {category.name}
                    </h3>
                    <p className="mt-3 max-w-xs leading-6 text-zinc-600">
                      {category.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-brand-purple">
                      Ver opciones
                      <span className="transition group-hover:translate-x-2">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(109,40,217,0.32),transparent_35%),radial-gradient(circle_at_80%_50%,rgba(239,35,60,0.18),transparent_28%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-lilac">
              Personalización
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">
              ¿Tienes un diseño o solamente una idea?
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              Completa el formulario y WhatsApp abrirá una solicitud organizada
              con todos los datos. Después podrás enviar el archivo en el mismo
              chat.
            </p>
            <Link
              href="/personalizar"
              className="mt-9 inline-flex rounded-full bg-brand-red px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:-translate-y-1 hover:bg-red-500"
            >
              Empezar mi solicitud
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <p className="text-4xl">📎</p>
              <h3 className="mt-6 text-xl font-black uppercase">
                Ya tengo mi diseño
              </h3>
              <p className="mt-3 leading-7 text-zinc-400">
                Selecciona el archivo y envíalo al abrirse WhatsApp.
              </p>
            </article>

            <article className="rounded-3xl border border-brand-lilac/40 bg-brand-purple/20 p-7">
              <p className="text-4xl">💡</p>
              <h3 className="mt-6 text-xl font-black uppercase">
                Necesito ayuda
              </h3>
              <p className="mt-3 leading-7 text-zinc-300">
                Describe tu idea y comparte imágenes de referencia.
              </p>
            </article>

            <div className="rounded-3xl bg-brand-lilac p-7 text-brand-black sm:col-span-2">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-purple">
                Sin cobros automáticos
              </p>
              <p className="mt-3 text-lg font-bold">
                Primero revisamos tu solicitud y enviamos la cotización. El
                anticipo se solicita únicamente después de tu aprobación.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-purple py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-lilac">
              Pedidos por volumen
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">
              Uniformes y prendas para tu equipo
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Preparamos pedidos para empresas, equipos deportivos,
              instituciones, eventos y emprendimientos.
            </p>
          </div>

          <Link
            href="/empresas"
            className="rounded-full bg-brand-black px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-white transition hover:-translate-y-1 hover:bg-brand-red"
          >
            Cotización empresarial
          </Link>
        </div>
      </section>
    </div>
  );
}
