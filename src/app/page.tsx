const categories = [
  {
    name: "Camisetas",
    description: "Diseños casuales, empresariales y personalizados.",
    icon: "👕",
  },
  {
    name: "Hoodies",
    description: "Prendas cómodas con estampado, bordado o diseño propio.",
    icon: "🧥",
  },
  {
    name: "Calentadores",
    description: "Conjuntos deportivos fabricados según tu estilo.",
    icon: "🏃",
  },
  {
    name: "Uniformes",
    description: "Soluciones para empresas, colegios y equipos.",
    icon: "🎽",
  },
  {
    name: "Conjuntos",
    description: "Prendas combinadas para uso diario o deportivo.",
    icon: "✨",
  },
  {
    name: "A medida",
    description: "Creamos la prenda basándonos en tus medidas.",
    icon: "📐",
  },
];

const steps = [
  {
    number: "01",
    title: "Elige",
    description:
      "Selecciona una prenda del catálogo o dinos qué tipo de ropa necesitas.",
  },
  {
    number: "02",
    title: "Personaliza",
    description:
      "Sube tu diseño, envíanos una referencia o cuéntanos tu idea.",
  },
  {
    number: "03",
    title: "Lo fabricamos",
    description:
      "Revisamos los detalles, cotizamos y confeccionamos tu pedido.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080808]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#inicio"
            className="text-xl font-black uppercase tracking-[0.18em]"
          >
            Tu<span className="text-lime-300">Marca</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-300 lg:flex">
            <a className="transition hover:text-lime-300" href="#categorias">
              Catálogo
            </a>
            <a className="transition hover:text-lime-300" href="#personalizar">
              Personalizar
            </a>
            <a className="transition hover:text-lime-300" href="#proceso">
              Cómo funciona
            </a>
            <a className="transition hover:text-lime-300" href="#empresas">
              Empresas
            </a>
          </nav>

          <a
            href="#personalizar"
            className="rounded-full bg-lime-300 px-5 py-3 text-sm font-bold text-black transition hover:bg-lime-200"
          >
            Crear mi prenda
          </a>
        </div>
      </header>

      <main>
        <section
          id="inicio"
          className="relative isolate overflow-hidden border-b border-white/10"
        >
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_75%_30%,rgba(190,242,100,0.18),transparent_34%),radial-gradient(circle_at_20%_70%,rgba(255,255,255,0.08),transparent_30%)]" />

          <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-lime-300/40 bg-lime-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-lime-300">
                Ropa personalizada y a medida
              </div>

              <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
                Viste lo que
                <span className="block text-lime-300">imaginas.</span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300 sm:text-xl">
                Creamos camisetas, hoodies, calentadores, uniformes y más.
                Puedes elegir una prenda, enviar tu diseño o pedirnos ayuda para
                convertir tu idea en algo real.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#personalizar"
                  className="rounded-full bg-lime-300 px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-black transition hover:-translate-y-1 hover:bg-lime-200"
                >
                  Personalizar prenda
                </a>

                <a
                  href="#categorias"
                  className="rounded-full border border-white/25 px-7 py-4 text-center text-sm font-black uppercase tracking-wider transition hover:border-white hover:bg-white hover:text-black"
                >
                  Ver catálogo
                </a>
              </div>

              <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
                <div>
                  <p className="text-2xl font-black text-lime-300">50%</p>
                  <p className="mt-1 text-xs text-zinc-400">Anticipo inicial</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-lime-300">A medida</p>
                  <p className="mt-1 text-xs text-zinc-400">Tallas y acabados</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-lime-300">Tu diseño</p>
                  <p className="mt-1 text-xs text-zinc-400">Tu estilo personal</p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-lime-300/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-zinc-900 shadow-2xl">
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),transparent_40%,rgba(190,242,100,0.12))]" />

                <div className="relative flex min-h-[560px] flex-col justify-between p-7 sm:p-10">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs font-bold uppercase tracking-widest text-zinc-300">
                      Diseño exclusivo
                    </span>
                    <span className="text-5xl">✦</span>
                  </div>

                  <div className="flex flex-1 items-center justify-center py-8">
                    <div className="relative">
                      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lime-300/20" />
                      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
                      <div className="relative text-[11rem] leading-none drop-shadow-2xl sm:text-[15rem]">
                        👕
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-black/45 p-6 backdrop-blur">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-300">
                      Hecho especialmente para ti
                    </p>
                    <p className="mt-3 text-2xl font-black">
                      Tu idea. Tu diseño. Tu prenda.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-4 rounded-2xl bg-white px-5 py-4 text-black shadow-xl sm:-left-8">
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Proceso de pago
                </p>
                <p className="mt-1 font-black">50% + 50%</p>
              </div>
            </div>
          </div>
        </section>

        <section id="proceso" className="border-b border-white/10 py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">
                Proceso sencillo
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">
                ¿Cómo funciona?
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-400">
                Desde tu primera idea hasta la entrega de la prenda terminada.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-lime-300/50 hover:bg-white/[0.05]"
                >
                  <p className="text-5xl font-black text-lime-300/30 transition group-hover:text-lime-300">
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

        <section id="categorias" className="bg-[#f4f4ef] py-24 text-black">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-zinc-500">
                  Nuestro catálogo
                </p>
                <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">
                  Elige tu prenda
                </h2>
              </div>

              <p className="max-w-md leading-7 text-zinc-600">
                Selecciona una categoría como punto de partida. Cada modelo
                podrá personalizarse según color, talla, tela y diseño.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category, index) => (
                <article
                  key={category.name}
                  className="group relative min-h-72 overflow-hidden rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="absolute right-5 top-4 text-8xl opacity-10 transition group-hover:scale-110 group-hover:opacity-20">
                    {category.icon}
                  </div>

                  <div className="relative flex h-full flex-col justify-between">
                    <span className="text-sm font-black text-zinc-400">
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
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider">
                        Ver opciones
                        <span className="transition group-hover:translate-x-2">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="personalizar"
          className="relative overflow-hidden border-y border-white/10 py-24"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(190,242,100,0.16),transparent_32%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">
                Personalización
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">
                ¿Tienes un diseño o solamente una idea?
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
                Puedes enviarnos tus archivos o explicarnos lo que imaginas.
                Revisaremos tu solicitud y prepararemos una cotización antes de
                pedirte cualquier pago.
              </p>

              <a
                href="#solicitud"
                className="mt-9 inline-flex rounded-full bg-lime-300 px-7 py-4 text-sm font-black uppercase tracking-wider text-black transition hover:-translate-y-1 hover:bg-lime-200"
              >
                Empezar mi diseño
              </a>
            </div>

            <div id="solicitud" className="grid gap-5 sm:grid-cols-2">
              <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <p className="text-4xl">📎</p>
                <h3 className="mt-6 text-xl font-black uppercase">
                  Ya tengo mi diseño
                </h3>
                <p className="mt-3 leading-7 text-zinc-400">
                  Sube tus archivos para el frente, espalda o mangas.
                </p>
              </article>

              <article className="rounded-3xl border border-lime-300/40 bg-lime-300/10 p-7">
                <p className="text-4xl">💡</p>
                <h3 className="mt-6 text-xl font-black uppercase">
                  Necesito ayuda
                </h3>
                <p className="mt-3 leading-7 text-zinc-300">
                  Cuéntanos tu idea y envía imágenes de referencia.
                </p>
              </article>

              <div className="rounded-3xl bg-white p-7 text-black sm:col-span-2">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                  Importante
                </p>
                <p className="mt-3 text-lg font-bold">
                  La solicitud no genera ningún cobro. Primero revisamos los
                  detalles y te enviamos la cotización.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="empresas" className="bg-lime-300 py-24 text-black">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-sm font-black uppercase tracking-[0.25em]">
                Pedidos por volumen
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">
                ¿Necesitas 20, 50 o 100 prendas?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70">
                Preparamos pedidos para empresas, equipos deportivos, colegios,
                eventos, emprendimientos y uniformes.
              </p>
            </div>

            <a
              href="#personalizar"
              className="rounded-full bg-black px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-white transition hover:-translate-y-1 hover:bg-zinc-800"
            >
              Solicitar cotización
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#080808]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-black uppercase tracking-[0.18em]">
              Tu<span className="text-lime-300">Marca</span>
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Ropa personalizada, confeccionada para ti.
            </p>
          </div>

          <p className="text-sm text-zinc-500">
            Elige. Personaliza. Nosotros lo hacemos realidad.
          </p>
        </div>
      </footer>
    </div>
  );
}