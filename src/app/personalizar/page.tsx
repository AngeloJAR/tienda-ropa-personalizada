"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Suspense,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { products } from "@/data/products";
import { createWhatsAppUrl, siteConfig } from "@/data/site";

const colorNames: Record<string, string> = {
  "#111111": "Negro",
  "#f5f5f5": "Blanco",
  "#475569": "Gris azulado",
  "#7f1d1d": "Vino",
  "#1e3a8a": "Azul",
  "#166534": "Verde",
  "#172554": "Azul oscuro",
  "#881337": "Rojo vino",
  "#3f3f46": "Gris oscuro",
  "#78350f": "Marrón",
  "#dc2626": "Rojo",
  "#1d4ed8": "Azul deportivo",
  "#15803d": "Verde deportivo",
};

function getColorName(color: string) {
  return colorNames[color.toLowerCase()] ?? color;
}

type PersonalizationFormProps = {
  initialProductSlug: string;
};

function PersonalizationForm({
  initialProductSlug,
}: PersonalizationFormProps) {
  const initialProduct =
    products.find((product) => product.slug === initialProductSlug) ??
    products[0];

  const [selectedProductSlug, setSelectedProductSlug] = useState(
    initialProduct.slug,
  );
  const [selectedSize, setSelectedSize] = useState(initialProduct.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(
    initialProduct.colors[0],
  );
  const [designFileName, setDesignFileName] = useState("");

  const selectedProduct =
    products.find((product) => product.slug === selectedProductSlug) ??
    initialProduct;

  function handleProductChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextProduct =
      products.find((product) => product.slug === event.target.value) ??
      products[0];

    setSelectedProductSlug(nextProduct.slug);
    setSelectedSize(nextProduct.sizes[0]);
    setSelectedColor(nextProduct.colors[0]);
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    setDesignFileName(event.target.files?.[0]?.name ?? "");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();

    const entrega = value("entrega");
    const ubicacion = value("ubicacion");
    const detalles = value("detalles");

    const message = [
      "Hola, quiero solicitar una cotización para una prenda personalizada.",
      "",
      `Nombre: ${value("nombre")}`,
      `Teléfono de contacto: ${value("telefono")}`,
      `Producto: ${selectedProduct.name}`,
      `Talla: ${selectedSize}`,
      `Color: ${getColorName(selectedColor)}`,
      `Cantidad: ${value("cantidad")}`,
      `Tipo de personalización: ${value("personalizacion")}`,
      `Estado del diseño: ${value("diseno")}`,
      `Fecha solicitada: ${entrega || "Por coordinar"}`,
      `Ciudad o sector: ${ubicacion || "Por coordinar"}`,
      `Detalles: ${detalles || "Ninguno"}`,
      designFileName
        ? `Archivo seleccionado: ${designFileName}. Lo enviaré a continuación por este chat.`
        : "Archivo de diseño: No adjuntado por el momento.",
      "",
      "Quedo pendiente de la cotización y del tiempo de elaboración.",
    ].join("\n");

    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "h-12 w-full rounded-xl border border-black/15 bg-brand-paper px-4 outline-none transition placeholder:text-zinc-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-lilac/40";
  const labelClass = "mb-2 block text-sm font-black";

  return (
    <div className="min-h-screen bg-brand-paper text-brand-ink">
      <section className="relative overflow-hidden bg-brand-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(109,40,217,0.45),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(239,35,60,0.2),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-lilac">
            Solicitud personalizada
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <h1 className="max-w-4xl text-5xl font-black uppercase tracking-[-0.04em] sm:text-7xl">
              Crea una prenda a tu medida
              <span className="text-brand-red">.</span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-zinc-300">
              Completa el formulario. Al finalizar se abrirá WhatsApp con toda
              la solicitud lista para que tú decidas enviarla.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:py-20">
        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm sm:p-10"
        >
          <fieldset className="border-b border-black/10 pb-8">
            <legend className="text-sm font-black uppercase tracking-[0.2em] text-brand-purple">
              01 · Datos de contacto
            </legend>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="nombre" className={labelClass}>
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Escribe tu nombre"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="telefono" className={labelClass}>
                  Tu número de WhatsApp
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="Ejemplo: 0991234567"
                  className={inputClass}
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="border-b border-black/10 py-8">
            <legend className="text-sm font-black uppercase tracking-[0.2em] text-brand-purple">
              02 · Configura la prenda
            </legend>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="producto" className={labelClass}>
                  Producto
                </label>
                <select
                  id="producto"
                  name="producto"
                  value={selectedProductSlug}
                  onChange={handleProductChange}
                  className={inputClass}
                >
                  {products.map((product) => (
                    <option key={product.slug} value={product.slug}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="talla" className={labelClass}>
                  Talla
                </label>
                <select
                  id="talla"
                  name="talla"
                  value={selectedSize}
                  onChange={(event) => setSelectedSize(event.target.value)}
                  className={inputClass}
                >
                  {selectedProduct.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="cantidad" className={labelClass}>
                  Cantidad
                </label>
                <input
                  id="cantidad"
                  name="cantidad"
                  type="number"
                  required
                  min="1"
                  defaultValue="1"
                  className={inputClass}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="color" className={labelClass}>
                  Color
                </label>
                <select
                  id="color"
                  name="color"
                  value={selectedColor}
                  onChange={(event) => setSelectedColor(event.target.value)}
                  className={inputClass}
                >
                  {selectedProduct.colors.map((color) => (
                    <option key={color} value={color}>
                      {getColorName(color)}
                    </option>
                  ))}
                </select>
                <div className="mt-3 flex items-center gap-3 text-sm text-zinc-500">
                  <span
                    className="h-6 w-6 rounded-full border border-black/20"
                    style={{ backgroundColor: selectedColor }}
                  />
                  {getColorName(selectedColor)}
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset className="border-b border-black/10 py-8">
            <legend className="text-sm font-black uppercase tracking-[0.2em] text-brand-purple">
              03 · Personalización
            </legend>
            <div className="mt-7 grid gap-5">
              <div>
                <label htmlFor="personalizacion" className={labelClass}>
                  Técnica que necesitas
                </label>
                <select
                  id="personalizacion"
                  name="personalizacion"
                  required
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option value="Estampado">Estampado</option>
                  <option value="Bordado">Bordado</option>
                  <option value="Sublimación">Sublimación</option>
                  <option value="Confección a medida">
                    Confección a medida
                  </option>
                  <option value="Necesito asesoría">Necesito asesoría</option>
                </select>
              </div>

              <div>
                <label htmlFor="diseno" className={labelClass}>
                  Estado del diseño
                </label>
                <select
                  id="diseno"
                  name="diseno"
                  required
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option value="Tengo el diseño listo">
                    Tengo el diseño listo
                  </option>
                  <option value="Tengo una referencia">
                    Tengo una imagen de referencia
                  </option>
                  <option value="Necesito ayuda con el diseño">
                    Necesito ayuda para crear el diseño
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="archivo" className={labelClass}>
                  Archivo o referencia
                </label>
                <input
                  id="archivo"
                  name="archivo"
                  type="file"
                  accept=".jpg,.jpeg,.png,.webp,.pdf,.svg"
                  onChange={handleFileChange}
                  className="block w-full rounded-xl border border-dashed border-brand-purple/30 bg-brand-paper p-4 text-sm file:mr-4 file:rounded-full file:border-0 file:bg-brand-purple file:px-5 file:py-3 file:font-bold file:text-white hover:file:bg-brand-red"
                />
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  Por seguridad del navegador, el archivo no se adjunta solo.
                  Envíalo manualmente cuando se abra el chat.
                </p>
              </div>

              <div>
                <label htmlFor="detalles" className={labelClass}>
                  Detalles de tu idea
                </label>
                <textarea
                  id="detalles"
                  name="detalles"
                  rows={5}
                  placeholder="Ubicación del diseño, nombres, números, medidas especiales u otros detalles..."
                  className="w-full rounded-xl border border-black/15 bg-brand-paper px-4 py-3 outline-none transition placeholder:text-zinc-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-lilac/40"
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="pt-8">
            <legend className="text-sm font-black uppercase tracking-[0.2em] text-brand-purple">
              04 · Entrega
            </legend>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="entrega" className={labelClass}>
                  ¿Para cuándo lo necesitas?
                </label>
                <input
                  id="entrega"
                  name="entrega"
                  type="date"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="ubicacion" className={labelClass}>
                  Ciudad o sector
                </label>
                <input
                  id="ubicacion"
                  name="ubicacion"
                  type="text"
                  placeholder="Ejemplo: Quito"
                  className={inputClass}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 flex w-full items-center justify-center rounded-full bg-brand-red px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-brand-purple"
            >
              Preparar solicitud en WhatsApp
            </button>
            <p className="mt-4 text-center text-sm leading-6 text-zinc-500">
              El formulario no cobra ni envía nada automáticamente.
            </p>
          </fieldset>
        </form>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <div className="overflow-hidden rounded-[2rem] bg-brand-black text-white">
            <div className="relative flex min-h-64 items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(109,40,217,0.55),transparent_60%),linear-gradient(145deg,transparent,rgba(239,35,60,0.14))]" />
              <span className="relative text-9xl">{selectedProduct.icon}</span>
            </div>
            <div className="border-t border-white/10 p-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-lilac">
                Prenda seleccionada
              </p>
              <h2 className="mt-3 text-2xl font-black">
                {selectedProduct.name}
              </h2>
              <p className="mt-3 leading-6 text-zinc-400">
                {selectedProduct.description}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span
                  className="h-7 w-7 rounded-full border border-white/30"
                  style={{ backgroundColor: selectedColor }}
                />
                <span className="text-sm font-bold text-zinc-300">
                  {getColorName(selectedColor)} · Talla {selectedSize}
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-brand-purple p-7 text-white">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-lilac">
              ¿Qué sucede después?
            </p>
            <ol className="mt-6 space-y-5">
              {[
                "Se abre WhatsApp con tu solicitud.",
                "Tú revisas y envías el mensaje.",
                "Compartes el archivo dentro del chat.",
                "Recibes cotización y tiempo estimado.",
              ].map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-red text-xs font-black text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm font-bold leading-6">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-[2rem] border border-brand-purple/15 bg-white p-7">
            <p className="font-black">WhatsApp temporal</p>
            <p className="mt-2 text-lg font-black text-brand-purple">
              {siteConfig.whatsappDisplay}
            </p>
            <p className="mt-3 text-sm leading-6 text-zinc-500">
              El número está centralizado y puede reemplazarse posteriormente
              desde un solo archivo.
            </p>
          </div>

          <Link
            href="/como-funciona"
            className="block rounded-[2rem] border border-brand-red/20 bg-brand-red/5 p-7 text-sm font-black uppercase tracking-wider text-brand-red transition hover:bg-brand-red hover:text-white"
          >
            Revisar el proceso completo →
          </Link>
        </aside>
      </section>
    </div>
  );
}

function PersonalizationPageContent() {
  const searchParams = useSearchParams();
  const requestedProductSlug = searchParams.get("producto") ?? "";

  return (
    <PersonalizationForm
      key={requestedProductSlug || "producto-predeterminado"}
      initialProductSlug={requestedProductSlug}
    />
  );
}

function PersonalizationFallback() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-brand-black px-5 text-white">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-lilac">
        Cargando formulario...
      </p>
    </div>
  );
}

export default function PersonalizarPage() {
  return (
    <Suspense fallback={<PersonalizationFallback />}>
      <PersonalizationPageContent />
    </Suspense>
  );
}
