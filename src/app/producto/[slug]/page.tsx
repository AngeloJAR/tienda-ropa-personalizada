import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  findProductBySlug,
  formatProductPrice,
  products,
} from "@/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = findProductBySlug(slug);

  if (!product) {
    return { title: "Producto no encontrado" };
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
    .sort((first, second) =>
      first.category === product.category &&
      second.category !== product.category
        ? -1
        : 0,
    )
    .slice(0, 3);

  const customizationUrl = `/personalizar?producto=${encodeURIComponent(
    product.slug,
  )}`;

  return (
    <div className="min-h-screen bg-brand-paper text-brand-ink">
      <section className="bg-brand-black text-white">
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
            <span className="text-brand-lilac">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-20">
          <div className="relative flex min-h-[460px] items-center justify-center overflow-hidden rounded-[2rem] bg-brand-black sm:min-h-[600px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(109,40,217,0.52),transparent_55%),linear-gradient(145deg,transparent,rgba(239,35,60,0.18))]" />

            <div className="absolute left-6 top-6 flex flex-wrap gap-3">
              {product.featured && (
                <span className="rounded-full bg-brand-red px-4 py-2 text-xs font-black uppercase tracking-wider text-white">
                  Destacado
                </span>
              )}
              <span className="rounded-full border border-brand-lilac/30 bg-black/35 px-4 py-2 text-xs font-black uppercase tracking-wider text-brand-lilac backdrop-blur">
                Personalizable
              </span>
            </div>

            <span className="relative text-[10rem] drop-shadow-2xl sm:text-[14rem]">
              {product.icon}
            </span>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-purple">
              {product.categoryLabel}
            </p>
            <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] sm:text-6xl">
              {product.name}
              <span className="text-brand-red">.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              {product.longDescription}
            </p>
            <p className="mt-8 text-3xl font-black text-brand-purple">
              {formatProductPrice(product.price)}
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Valor referencial. El precio final se confirma en la cotización.
            </p>

            <div className="mt-8 border-t border-black/10 pt-8">
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
                    className="flex h-11 min-w-11 items-center justify-center rounded-xl border border-brand-purple/20 bg-brand-lilac/20 px-3 text-sm font-black"
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
                className="rounded-full bg-brand-red px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-white transition hover:bg-brand-purple"
              >
                Personalizar esta prenda
              </Link>
              <Link
                href="/catalogo"
                className="rounded-full border border-brand-purple/30 px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-brand-purple transition hover:bg-brand-lilac/30"
              >
                Volver al catálogo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-paper">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div className="rounded-[2rem] bg-brand-black p-8 text-white sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-lilac">
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
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red text-sm font-black text-white">
                    ✓
                  </span>
                  <span className="leading-6">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] bg-brand-purple p-8 text-white sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-lilac">
              Cómo solicitarla
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase">
              De tu idea a una prenda real
            </h2>
            <ol className="mt-8 space-y-6">
              {[
                ["01", "Configura", "Indica talla, color, material y cantidad."],
                ["02", "Envía", "Comparte tu diseño o solicita ayuda."],
                ["03", "Aprueba", "Confirma la cotización y la propuesta."],
                ["04", "Recibe", "Coordinamos saldo y entrega final."],
              ].map(([number, title, text]) => (
                <li key={number} className="flex gap-5">
                  <span className="text-lg font-black text-brand-lilac">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-black">{title}</h3>
                    <p className="mt-1 leading-6 text-white/70">{text}</p>
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
              <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-purple">
                También puede interesarte
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
                Otras prendas
              </h2>
            </div>
            <Link
              href="/catalogo"
              className="text-sm font-black uppercase tracking-wider text-brand-red underline decoration-2 underline-offset-4"
            >
              Ver catálogo completo
            </Link>
          </div>

          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <article
                key={relatedProduct.slug}
                className="group overflow-hidden rounded-3xl border border-black/5 bg-brand-paper"
              >
                <Link
                  href={`/producto/${relatedProduct.slug}`}
                  className="relative flex min-h-64 items-center justify-center overflow-hidden bg-brand-black"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(109,40,217,0.5),transparent_58%)]" />
                  <span className="relative text-8xl transition group-hover:scale-110">
                    {relatedProduct.icon}
                  </span>
                </Link>
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-purple">
                    {relatedProduct.categoryLabel}
                  </p>
                  <h3 className="mt-3 text-2xl font-black">
                    {relatedProduct.name}
                  </h3>
                  <div className="mt-5 flex items-center justify-between gap-4 border-t border-black/10 pt-5">
                    <p className="text-sm font-black">
                      {formatProductPrice(relatedProduct.price)}
                    </p>
                    <Link
                      href={`/producto/${relatedProduct.slug}`}
                      className="rounded-full bg-brand-black px-4 py-2 text-sm font-black text-white transition hover:bg-brand-purple"
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
    </div>
  );
}
