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
  const category = getStringValue(params.categoria) || "todos";
  const order = getStringValue(params.orden) || "recientes";
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

    const matchesSearch =
      normalizedSearch.length === 0 ||
      searchableText.includes(normalizedSearch);

    return matchesCategory && matchesSearch;
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
    <div className="min-h-screen bg-[#f4f4ef] text-black">
      <header className="border-b border-black/10 bg-[#080808] text-white">
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
            href="/personalizar"
            className="rounded-full bg-lime-300 px-5 py-3 text-sm font-bold text-black transition hover:bg-lime-200"
          >
            Crear mi prenda
          </Link>
        </div>
      </header>

      <main>
        <section className="border-b border-black/10 bg-[#080808] text-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">
              Prendas para comprar y personalizar
            </p>

            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
              <h1 className="text-5xl font-black uppercase tracking-[-0.04em] sm:text-7xl">
                Catálogo
              </h1>

              <p className="max-w-xl text-lg leading-8 text-zinc-300">
                Elige una prenda como punto de partida. Podrás seleccionar
                talla, color y tela, o enviarnos tu propio diseño.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-black/10 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
            <form
              action="/catalogo"
              className="grid gap-4 lg:grid-cols-[1fr_230px_auto]"
            >
              <div>
                <label
                  className="mb-2 block text-xs font-black uppercase tracking-wider text-zinc-500"
                  htmlFor="buscar"
                >
                  Buscar producto
                </label>

                <input
                  id="buscar"
                  name="buscar"
                  type="search"
                  defaultValue={search}
                  placeholder="Camiseta, hoodie, uniforme..."
                  className="h-12 w-full rounded-xl border border-black/15 bg-[#f7f7f3] px-4 outline-none transition placeholder:text-zinc-400 focus:border-black"
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-xs font-black uppercase tracking-wider text-zinc-500"
                  htmlFor="orden"
                >
                  Ordenar
                </label>

                <select
                  id="orden"
                  name="orden"
                  defaultValue={order}
                  className="h-12 w-full rounded-xl border border-black/15 bg-[#f7f7f3] px-4 outline-none focus:border-black"
                >
                  <option value="recientes">Destacados</option>
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
                className="mt-auto h-12 rounded-xl bg-black px-7 text-sm font-black uppercase tracking-wider text-white transition hover:bg-zinc-800"
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
                        ? "border-black bg-black text-white"
                        : "border-black/15 bg-white text-zinc-600 hover:border-black hover:text-black"
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
              <p className="text-sm font-black uppercase tracking-[0.2em] text-zinc-500">
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
                className="text-sm font-black uppercase tracking-wider underline decoration-2 underline-offset-4"
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
                  className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Link
                    href={`/producto/${product.slug}`}
                    className="relative flex min-h-80 items-center justify-center overflow-hidden bg-zinc-900"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(190,242,100,0.2),transparent_55%)]" />

                    {product.featured && (
                      <span className="absolute left-5 top-5 rounded-full bg-lime-300 px-4 py-2 text-xs font-black uppercase tracking-wider text-black">
                        Destacado
                      </span>
                    )}

                    <span className="relative text-9xl transition duration-300 group-hover:scale-110">
                      {product.icon}
                    </span>
                  </Link>

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-500">
                        {product.categoryLabel}
                      </p>

                      {product.customizable && (
                        <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-bold text-lime-900">
                          Personalizable
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 text-2xl font-black">
                      {product.name}
                    </h3>

                    <p className="mt-3 min-h-18 leading-6 text-zinc-600">
                      {product.description}
                    </p>

                    <div className="mt-6 flex items-end justify-between gap-4 border-t border-black/10 pt-5">
                      <div>
                        <p className="text-lg font-black">
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
                        className="rounded-full bg-black px-5 py-3 text-sm font-black text-white transition hover:bg-lime-300 hover:text-black"
                      >
                        Ver producto
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-black/20 bg-white px-6 py-20 text-center">
              <p className="text-5xl">🔍</p>

              <h2 className="mt-6 text-2xl font-black uppercase">
                No encontramos productos
              </h2>

              <p className="mx-auto mt-3 max-w-md leading-7 text-zinc-600">
                Prueba con otro término o elimina los filtros para volver a ver
                todo el catálogo.
              </p>

              <Link
                href="/catalogo"
                className="mt-7 inline-flex rounded-full bg-black px-6 py-3 text-sm font-black uppercase tracking-wider text-white"
              >
                Ver todo el catálogo
              </Link>
            </div>
          )}
        </section>

        <section className="bg-lime-300 text-black">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em]">
                ¿No encuentras lo que necesitas?
              </p>

              <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
                Podemos fabricar otro tipo de prenda
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-black/70">
                Envíanos una referencia o explícanos tu idea para preparar una
                cotización personalizada.
              </p>
            </div>

            <Link
              href="/personalizar"
              className="rounded-full bg-black px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-white transition hover:bg-zinc-800"
            >
              Solicitar cotización
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}