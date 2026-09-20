"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { createWhatsAppUrl } from "@/data/site";

const benefits = [
  "Colores y acabados alineados con tu identidad",
  "Logotipos, nombres, cargos o numeración",
  "Opciones de estampado, bordado y sublimación",
  "Cotización de acuerdo con cantidad y materiales",
];

export default function CompaniesPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();

    const message = [
      "Hola, quiero solicitar una cotización empresarial.",
      "",
      `Empresa o grupo: ${value("empresa")}`,
      `Persona de contacto: ${value("contacto")}`,
      `WhatsApp: ${value("telefono")}`,
      `Correo: ${value("correo") || "No indicado"}`,
      `Tipo de prenda: ${value("prenda")}`,
      `Cantidad aproximada: ${value("cantidad")}`,
      `Personalización: ${value("personalizacion")}`,
      `Fecha solicitada: ${value("fecha") || "Por coordinar"}`,
      `Detalles: ${value("detalles") || "Ninguno"}`,
      "",
      "Quedo pendiente de la cotización y las opciones disponibles.",
    ].join("\n");

    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "h-12 w-full rounded-xl border border-black/15 bg-brand-paper px-4 outline-none transition placeholder:text-zinc-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-lilac/40";

  return (
    <div className="bg-brand-paper text-brand-ink">
      <section className="relative overflow-hidden bg-brand-purple text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(239,35,60,0.48),transparent_34%),linear-gradient(130deg,rgba(9,7,13,0.35),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-lilac">
            Pedidos por volumen
          </p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.04em] sm:text-7xl">
            Prendas para empresas, equipos y eventos
            <span className="text-brand-red">.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
            Cuéntanos qué necesita tu organización y prepararemos una propuesta
            según cantidades, materiales, diseño y fecha.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-purple">
            Una solución adaptable
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase">
            Identidad que también se viste
          </h2>
          <p className="mt-5 leading-8 text-zinc-600">
            Trabajamos solicitudes para uniformes, equipos deportivos,
            instituciones, campañas, eventos y marcas.
          </p>

          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-4 rounded-2xl bg-white p-5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-red text-sm font-black text-white">
                  ✓
                </span>
                <span className="font-bold leading-7">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 rounded-3xl bg-brand-black p-7 text-white">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-lilac">
              Importante
            </p>
            <p className="mt-3 leading-7 text-zinc-300">
              Enviar esta solicitud no confirma el pedido ni genera un cobro.
              Primero se revisan todos los requisitos.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm sm:p-10"
        >
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-purple">
            Solicitud empresarial
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase">
            Cuéntanos qué necesitas
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-black">
              Empresa o grupo
              <input
                name="empresa"
                required
                placeholder="Nombre de la organización"
                className={`mt-2 ${inputClass}`}
              />
            </label>
            <label className="text-sm font-black">
              Persona de contacto
              <input
                name="contacto"
                required
                placeholder="Nombre completo"
                className={`mt-2 ${inputClass}`}
              />
            </label>
            <label className="text-sm font-black">
              WhatsApp
              <input
                name="telefono"
                type="tel"
                required
                placeholder="0991234567"
                className={`mt-2 ${inputClass}`}
              />
            </label>
            <label className="text-sm font-black">
              Correo opcional
              <input
                name="correo"
                type="email"
                placeholder="contacto@empresa.com"
                className={`mt-2 ${inputClass}`}
              />
            </label>
            <label className="text-sm font-black">
              Tipo de prenda
              <select
                name="prenda"
                required
                defaultValue=""
                className={`mt-2 ${inputClass}`}
              >
                <option value="" disabled>
                  Selecciona
                </option>
                <option>Uniformes empresariales</option>
                <option>Camisetas</option>
                <option>Hoodies</option>
                <option>Ropa deportiva</option>
                <option>Conjuntos</option>
                <option>Otra prenda</option>
              </select>
            </label>
            <label className="text-sm font-black">
              Cantidad aproximada
              <input
                name="cantidad"
                type="number"
                min="1"
                required
                placeholder="20"
                className={`mt-2 ${inputClass}`}
              />
            </label>
            <label className="text-sm font-black">
              Personalización
              <select
                name="personalizacion"
                required
                defaultValue=""
                className={`mt-2 ${inputClass}`}
              >
                <option value="" disabled>
                  Selecciona
                </option>
                <option>Estampado</option>
                <option>Bordado</option>
                <option>Sublimación</option>
                <option>Necesito asesoría</option>
              </select>
            </label>
            <label className="text-sm font-black">
              Fecha aproximada
              <input
                name="fecha"
                type="date"
                className={`mt-2 ${inputClass}`}
              />
            </label>
            <label className="text-sm font-black sm:col-span-2">
              Detalles
              <textarea
                name="detalles"
                rows={5}
                placeholder="Colores, tallas, logotipo, nombres, entrega u otros requisitos..."
                className="mt-2 w-full rounded-xl border border-black/15 bg-brand-paper px-4 py-3 outline-none transition placeholder:text-zinc-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-lilac/40"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-7 w-full rounded-full bg-brand-red px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-brand-purple"
          >
            Preparar cotización en WhatsApp
          </button>
          <p className="mt-4 text-center text-sm text-zinc-500">
            Tú revisarás el mensaje antes de enviarlo.
          </p>
        </form>
      </section>

      <section className="bg-brand-lilac/45 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 sm:px-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-black uppercase">
              ¿Buscas pocas unidades?
            </h2>
            <p className="mt-3 text-zinc-600">
              Usa el formulario general para una prenda o un pedido pequeño.
            </p>
          </div>
          <Link
            href="/personalizar"
            className="rounded-full bg-brand-black px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-brand-purple"
          >
            Personalizar una prenda
          </Link>
        </div>
      </section>
    </div>
  );
}

