import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  findProductBySlug,
  formatProductPrice,
  products,
} from "@/data/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = findProductBySlug(slug);

  if (!product) {
    return {
      title: "Producto no encontrado",
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = findProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  const customizationUrl = `/personalizar?producto=${encodeURIComponent(
    product.slug,
  )}`;

  return (
    <div className="min-h-screen bg-[#f4f4ef] text-black">
      <header className="border-b border-white/10 bg-[#080808] text-white">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8">
          <Link
            href="/"
            className="text-xl font-black uppercase tracking-[0.18em]"
          >
            Tu<span className="text-lime-300">Marca</span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
            <Link className="transition hover:text-lime-300" href="/">
              Inicio
            </Link>

            <Link className="font-bold text-lime-300" href="/catalogo">
              Catálogo
            </Link>

            <Link
              className="transition hover:text-lime-300"
              href="/personalizar"
            >
              Personalizar
            </Link>

            <Link
              className="transition hover:text-lime-300"
              href="/seguimiento"
            >
              Seguimiento
            </Link>
          </nav>

          <Link
            href={customizationUrl}
            className="rounded-full bg-lime-300 px-5 py-3 text-sm font-bold text-black transition hover:bg-lime-200"
          >
            Crear mi prenda
          </Link>
        </div>
      </header>

      <main>
        <section className="bg-[#080808] text-white">
          <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
            <nav
              aria-label="Migas de pan"
              className="flex flex-wrap items-center gap-2 text-sm text-zinc-400"
            >
              <Link className="transition hover:text-white" href="/">
                Inicio
              </Link>

              <span aria-hidden="true">/</span>

              <Link
                className="transition hover:text-white"
                href="/catalogo"
              >
                Catálogo
              </Link>

              <span aria-hidden="true">/</span>

              <span className="text-lime-300">{product.name}</span>
            </nav>
          </div>
        </section>

        <section className="border-b border-black/10 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-20">
            <div className="relative flex min-h-[460px] items-center justify-center overflow-hidden rounded-[2rem] bg-zinc-900 sm:min-h-[600px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(190,242,100,0.25),transparent_55%)]" />

              <div className="absolute left-6 top-6 flex flex-wrap gap-3">
                {product.featured && (
                  <span className="rounded-full bg-lime-300 px-4 py-2 text-xs font-black uppercase tracking-wider text-black">
                    Destacado
                  </span>
                )}

                {product.customizable && (
                  <span className="rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-black uppercase tracking-wider text-white backdrop-blur">
                    Personalizable
                  </span>
                )}
              </div>

              <span className="relative text-[10rem] drop-shadow-2xl transition sm:text-[14rem]">
                {product.icon}
              </span>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-zinc-500">
                {product.categoryLabel}
              </p>

              <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] sm:text-6xl">
                {product.name}
              </h1>

              <p className="mt-6 text-lg leading-8 text-zinc-600">
                {product.longDescription}
              </p>

              <p className="mt-8 text-3xl font-black">
                {formatProductPrice(product.price)}
              </p>

              <div className="mt-9 border-t border-black/10 pt-8">
                <p className="text-sm font-black uppercase tracking-wider">
                  Colores disponibles
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <span
                      key={color}
                      className="h-10 w-10 rounded-full border-2 border-white shadow-[0_0_0_1px_rgba(0,0,0,0.2)]"
                      style={{ backgroundColor: color }}
                      aria-label={`Color ${color}`}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm font-black uppercase tracking-wider">
                  Tallas disponibles
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="flex h-11 min-w-11 items-center justify-center rounded-xl border border-black/15 bg-[#f7f7f3] px-3 text-sm font-black"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm font-black uppercase tracking-wider">
                  Materiales
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {product.materials.map((material) => (
                    <span
                      key={material}
                      className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-bold text-zinc-700"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <Link
                  href={customizationUrl}
                  className="rounded-full bg-black px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-white transition hover:bg-lime-300 hover:text-black"
                >
                  Personalizar esta prenda
                </Link>

                <Link
                  href="/catalogo"
                  className="rounded-full border border-black/20 px-7 py-4 text-center text-sm font-black uppercase tracking-wider transition hover:border-black hover:bg-zinc-100"
                >
                  Volver al catálogo
                </Link>
              </div>

              <p className="mt-5 text-sm leading-6 text-zinc-500">
                El precio final depende de la talla, el material, la técnica de
                personalización y la cantidad solicitada.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f4ef]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
            <div className="rounded-[2rem] bg-black p-8 text-white sm:p-10">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-lime-300">
                Características
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase">
                Diseñada para adaptarse a tu idea
              </h2>

              <ul className="mt-8 space-y-5">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-4 text-zinc-300"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-300 text-sm font-black text-black">
                      ✓
                    </span>

                    <span className="leading-6">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-black/10 bg-white p-8 sm:p-10">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-zinc-500">
                Cómo solicitarla
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase">
                De tu idea a una prenda real
              </h2>

              <ol className="mt-8 space-y-6">
                {[
                  {
                    number: "01",
                    title: "Configura tu prenda",
                    text: "Indica talla, color, material y cantidad.",
                  },
                  {
                    number: "02",
                    title: "Envíanos tu diseño",
                    text: "Adjunta tu archivo o solicita ayuda para crearlo.",
                  },
                  {
                    number: "03",
                    title: "Recibe la cotización",
                    text: "Revisamos los detalles y confirmamos precio y plazo.",
                  },
                  {
                    number: "04",
                    title: "Aprueba la producción",
                    text: "Con tu aprobación iniciamos la elaboración.",
                  },
                ].map((step) => (
                  <li key={step.number} className="flex gap-5">
                    <span className="text-lg font-black text-lime-600">
                      {step.number}
                    </span>

                    <div>
                      <h3 className="font-black">{step.title}</h3>
                      <p className="mt-1 leading-6 text-zinc-600">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-zinc-500">
                  También puede interesarte
                </p>

                <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
                  Otras prendas
                </h2>
              </div>

              <Link
                href="/catalogo"
                className="text-sm font-black uppercase tracking-wider underline decoration-2 underline-offset-4"
              >
                Ver catálogo completo
              </Link>
            </div>

            <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((relatedProduct) => (
                <article
                  key={relatedProduct.slug}
                  className="group overflow-hidden rounded-3xl bg-[#f4f4ef]"
                >
                  <Link
                    href={`/producto/${relatedProduct.slug}`}
                    className="relative flex min-h-64 items-center justify-center overflow-hidden bg-zinc-900"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(190,242,100,0.2),transparent_55%)]" />

                    <span className="relative text-8xl transition duration-300 group-hover:scale-110">
                      {relatedProduct.icon}
                    </span>
                  </Link>

                  <div className="p-6">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-500">
                      {relatedProduct.categoryLabel}
                    </p>

                    <h3 className="mt-3 text-2xl font-black">
                      {relatedProduct.name}
                    </h3>

                    <div className="mt-5 flex items-center justify-between gap-4 border-t border-black/10 pt-5">
                      <p className="font-black">
                        {formatProductPrice(relatedProduct.price)}
                      </p>

                      <Link
                        href={`/producto/${relatedProduct.slug}`}
                        className="rounded-full bg-black px-4 py-2 text-sm font-black text-white transition hover:bg-lime-300 hover:text-black"
                      >
                        Ver producto
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-lime-300 text-black">
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em]">
                ¿Tienes una idea diferente?
              </p>

              <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
                Cuéntanos qué quieres crear
              </h2>
            </div>

            <Link
              href={customizationUrl}
              className="rounded-full bg-black px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-white transition hover:bg-zinc-800"
            >
              Empezar personalización
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}