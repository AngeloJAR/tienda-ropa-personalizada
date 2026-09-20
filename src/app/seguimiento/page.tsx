"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { createWhatsAppUrl, siteConfig } from "@/data/site";

const statuses = [
  "Solicitud recibida",
  "Cotización enviada",
  "Anticipo confirmado",
  "Diseño aprobado",
  "En producción",
  "Control de calidad",
  "Listo para entrega",
];

export default function TrackingPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();

    const message = [
      "Hola, quiero consultar el estado de una solicitud o pedido.",
      "",
      `Nombre: ${value("nombre")}`,
      `Teléfono usado en la solicitud: ${value("telefono")}`,
      `Referencia o producto: ${value("referencia") || "No indicada"}`,
      `Consulta: ${value("consulta") || "Quiero conocer el estado actual."}`,
    ].join("\n");

    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "h-12 w-full rounded-xl border border-black/15 bg-brand-paper px-4 outline-none transition placeholder:text-zinc-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-lilac/40";

  return (
    <div className="bg-brand-paper text-brand-ink">
      <section className="relative overflow-hidden bg-brand-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(109,40,217,0.5),transparent_35%),radial-gradient(circle_at_15%_80%,rgba(239,35,60,0.2),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-lilac">
            Consulta por WhatsApp
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.04em] sm:text-7xl">
            Revisa el estado de tu pedido
            <span className="text-brand-red">.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">
            Identifica tu solicitud con el nombre y teléfono utilizados. Se
            abrirá WhatsApp para que nuestro equipo confirme el estado real.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:py-24">
        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm sm:p-10"
        >
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-purple">
            Identifica tu solicitud
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase">
            Consultar por WhatsApp
          </h2>

          <div className="mt-8 grid gap-5">
            <label className="text-sm font-black">
              Nombre completo
              <input
                name="nombre"
                required
                autoComplete="name"
                placeholder="Nombre usado en la solicitud"
                className={`mt-2 ${inputClass}`}
              />
            </label>
            <label className="text-sm font-black">
              Número de contacto
              <input
                name="telefono"
                type="tel"
                required
                autoComplete="tel"
                placeholder="0991234567"
                className={`mt-2 ${inputClass}`}
              />
            </label>
            <label className="text-sm font-black">
              Referencia o producto
              <input
                name="referencia"
                placeholder="Ejemplo: Hoodie Oversize, pedido 0025"
                className={`mt-2 ${inputClass}`}
              />
            </label>
            <label className="text-sm font-black">
              Consulta adicional
              <textarea
                name="consulta"
                rows={4}
                placeholder="Escribe cualquier detalle que ayude a identificar el pedido..."
                className="mt-2 w-full rounded-xl border border-black/15 bg-brand-paper px-4 py-3 outline-none transition placeholder:text-zinc-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-lilac/40"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-7 w-full rounded-full bg-brand-red px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-brand-purple"
          >
            Consultar estado
          </button>

          <p className="mt-4 text-center text-sm text-zinc-500">
            Atención temporal: {siteConfig.whatsappDisplay}
          </p>
        </form>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-purple">
            Etapas posibles
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase">
            El recorrido de tu pedido
          </h2>
          <div className="mt-8 space-y-3">
            {statuses.map((status, index) => (
              <div
                key={status}
                className="flex items-center gap-4 rounded-2xl bg-white p-5"
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-black text-white ${
                    index % 2 === 0 ? "bg-brand-purple" : "bg-brand-red"
                  }`}
                >
                  {index + 1}
                </span>
                <p className="font-black">{status}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-zinc-500">
            Esta página prepara la consulta. La etapa actual siempre será
            confirmada por una persona en WhatsApp.
          </p>
        </div>
      </section>

      <section className="bg-brand-purple py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 sm:px-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-black uppercase">
              ¿Todavía no tienes un pedido?
            </h2>
            <p className="mt-3 text-white/70">
              Inicia una solicitud sin pagos ni compromisos automáticos.
            </p>
          </div>
          <Link
            href="/personalizar"
            className="rounded-full bg-brand-red px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-brand-black"
          >
            Crear una solicitud
          </Link>
        </div>
      </section>
    </div>
  );
}

