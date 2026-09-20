import type { Metadata } from "next";
import Link from "next/link";
import {
  categories,
  formatProductPrice,
  products,
} from "@/data/products";

type CatalogPageProps = {
  searchParams: Promise<{
    buscar?: string | string[];
    categoria?: string | string[];
    orden?: string | string[];
  }>;
};

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "Explora camisetas, hoodies, calentadores, conjuntos, uniformes y ropa deportiva personalizable.",
};

function getStringValue(value: string | string[] | undefined) {
  return typeof value === "string" ? value : "";
}

export default async function CatalogPage({
  searchParams,
}: CatalogPageProps) {
  const params = await searchParams;
  const search = getStringValue(params.buscar).trim();
  const requestedCategory = getStringValue(params.categoria) || "todos";
  const category = categories.some((item) => item.id === requestedCategory)
    ? requestedCategory
    : "todos";
  const order = getStringValue(params.orden) || "destacados";
  const normalizedSearch = search.toLocaleLowerCase("es");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "todos" || product.category === category;
    const searchableText = [
      product.name,
      product.categoryLabel,
      product.description,
    ]
      .join(" ")
      .toLocaleLowerCase("es");

    return (
      matchesCategory &&
      (!normalizedSearch || searchableText.includes(normalizedSearch))
    );
  });

  const sortedProducts = [...filteredProducts].sort((first, second) => {
    if (order === "precio-menor") {
      return (
        (first.price ?? Number.MAX_SAFE_INTEGER) -
        (second.price ?? Number.MAX_SAFE_INTEGER)
      );
    }
    if (order === "precio-mayor") {
      return (second.price ?? -1) - (first.price ?? -1);
    }
    if (order === "nombre") {
      return first.name.localeCompare(second.name, "es");
    }
    return Number(Boolean(second.featured)) - Number(Boolean(first.featured));
  });

  return (
    <div className="min-h-screen bg-brand-paper text-brand-ink">
      <section className="relative overflow-hidden bg-brand-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(109,40,217,0.42),transparent_32%),radial-gradient(circle_at_15%_80%,rgba(239,35,60,0.2),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-lilac">
            Prendas para comprar y personalizar
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <h1 className="text-5xl font-black uppercase tracking-[-0.04em] sm:text-7xl">
              Catálogo
              <span className="text-brand-red">.</span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-zinc-300">
              Elige una prenda como punto de partida. Después podrás definir
              talla, color, cantidad, técnica y diseño.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8">
          <form
            action="/catalogo"
            className="grid gap-4 lg:grid-cols-[1fr_230px_auto]"
          >
            <div>
              <label
                htmlFor="buscar"
                className="mb-2 block text-xs font-black uppercase tracking-wider text-zinc-500"
              >
                Buscar producto
              </label>
              <input
                id="buscar"
                name="buscar"
                type="search"
                defaultValue={search}
                placeholder="Camiseta, hoodie, uniforme..."
                className="h-12 w-full rounded-xl border border-black/15 bg-brand-paper px-4 outline-none transition placeholder:text-zinc-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-lilac/50"
              />
            </div>

            <div>
              <label
                htmlFor="orden"
                className="mb-2 block text-xs font-black uppercase tracking-wider text-zinc-500"
              >
                Ordenar
              </label>
              <select
                id="orden"
                name="orden"
                defaultValue={order}
                className="h-12 w-full rounded-xl border border-black/15 bg-brand-paper px-4 outline-none focus:border-brand-purple"
              >
                <option value="destacados">Destacados</option>
                <option value="precio-menor">Menor precio</option>
                <option value="precio-mayor">Mayor precio</option>
                <option value="nombre">Nombre</option>
              </select>
            </div>

            {category !== "todos" && (
              <input type="hidden" name="categoria" value={category} />
            )}

            <button
              type="submit"
              className="mt-auto h-12 rounded-xl bg-brand-red px-7 text-sm font-black uppercase tracking-wider text-white transition hover:bg-brand-purple"
            >
              Buscar
            </button>
          </form>

          <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
            {categories.map((item) => {
              const active = item.id === category;
              return (
                <Link
                  key={item.id}
                  href={
                    item.id === "todos"
                      ? "/catalogo"
                      : `/catalogo?categoria=${item.id}`
                  }
                  className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                    active
                      ? "border-brand-purple bg-brand-purple text-white"
                      : "border-black/15 bg-white text-zinc-600 hover:border-brand-purple hover:text-brand-purple"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-purple">
              Resultados
            </p>
            <h2 className="mt-2 text-3xl font-black uppercase">
              {sortedProducts.length}{" "}
              {sortedProducts.length === 1 ? "producto" : "productos"}
            </h2>
          </div>

          {(search || category !== "todos") && (
            <Link
              href="/catalogo"
              className="text-sm font-black uppercase tracking-wider text-brand-red underline decoration-2 underline-offset-4"
            >
              Limpiar filtros
            </Link>
          )}
        </div>

        {sortedProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedProducts.map((product) => (
              <article
                key={product.slug}
                className="group overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:border-brand-lilac hover:shadow-xl"
              >
                <Link
                  href={`/producto/${product.slug}`}
                  className="relative flex min-h-80 items-center justify-center overflow-hidden bg-brand-black"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(109,40,217,0.45),transparent_55%),linear-gradient(145deg,transparent,rgba(239,35,60,0.14))]" />
                  {product.featured && (
                    <span className="absolute left-5 top-5 rounded-full bg-brand-red px-4 py-2 text-xs font-black uppercase tracking-wider text-white">
                      Destacado
                    </span>
                  )}
                  <span className="relative text-9xl transition duration-300 group-hover:scale-110">
                    {product.icon}
                  </span>
                </Link>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-purple">
                      {product.categoryLabel}
                    </p>
                    <span className="rounded-full bg-brand-lilac/40 px-3 py-1 text-xs font-bold text-brand-purple">
                      Personalizable
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-black">{product.name}</h3>
                  <p className="mt-3 min-h-18 leading-6 text-zinc-600">
                    {product.description}
                  </p>

                  <div className="mt-6 flex items-end justify-between gap-4 border-t border-black/10 pt-5">
                    <div>
                      <p className="font-black">
                        {formatProductPrice(product.price)}
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        {product.colors.map((color) => (
                          <span
                            key={color}
                            className="h-5 w-5 rounded-full border border-black/20"
                            style={{ backgroundColor: color }}
                            aria-label={`Color ${color}`}
                          />
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/producto/${product.slug}`}
                      className="rounded-full bg-brand-black px-5 py-3 text-sm font-black text-white transition hover:bg-brand-purple"
                    >
                      Ver producto
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-brand-purple/30 bg-white px-6 py-20 text-center">
            <p className="text-5xl">🔎</p>
            <h2 className="mt-6 text-2xl font-black uppercase">
              No encontramos productos
            </h2>
            <p className="mx-auto mt-3 max-w-md leading-7 text-zinc-600">
              Prueba con otro término o elimina los filtros para volver a ver
              todo el catálogo.
            </p>
            <Link
              href="/catalogo"
              className="mt-7 inline-flex rounded-full bg-brand-purple px-6 py-3 text-sm font-black uppercase tracking-wider text-white"
            >
              Ver todo el catálogo
            </Link>
          </div>
        )}
      </section>

      <section className="bg-brand-purple text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-lilac">
              ¿No encuentras lo que necesitas?
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
              Podemos fabricar otro tipo de prenda
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/75">
              Envíanos una referencia o explícanos tu idea para preparar una
              cotización personalizada.
            </p>
          </div>
          <Link
            href="/personalizar"
            className="rounded-full bg-brand-red px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-white transition hover:bg-brand-black"
          >
            Solicitar cotización
          </Link>
        </div>
      </section>
    </div>
  );
}
