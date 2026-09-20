import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo funciona",
  description:
    "Conoce el proceso de solicitud, cotización, aprobación, producción, pago y entrega de tu prenda personalizada.",
};

const processSteps = [
  {
    number: "01",
    title: "Solicitud",
    text: "Elige una prenda y completa el formulario con talla, color, cantidad, técnica y fecha aproximada.",
  },
  {
    number: "02",
    title: "Revisión",
    text: "Revisamos tu idea, el archivo, los materiales y cualquier medida o acabado especial.",
  },
  {
    number: "03",
    title: "Cotización",
    text: "Recibes el valor final, tiempo estimado, alcance del trabajo y condiciones de entrega.",
  },
  {
    number: "04",
    title: "Anticipo",
    text: "Si apruebas la cotización, realizas el 50% para confirmar el pedido e iniciar el diseño.",
  },
  {
    number: "05",
    title: "Producción",
    text: "Aprobamos contigo la propuesta visual, confeccionamos y realizamos el control de calidad.",
  },
  {
    number: "06",
    title: "Entrega",
    text: "Coordinamos el 50% restante y la entrega o envío de las prendas terminadas.",
  },
];

const questions = [
  {
    question: "¿Enviar el formulario genera algún cobro?",
    answer:
      "No. El formulario únicamente prepara una solicitud por WhatsApp. El anticipo se solicita después de que apruebes la cotización.",
  },
  {
    question: "¿Puedo pedir ayuda con el diseño?",
    answer:
      "Sí. Puedes describir la idea y enviar referencias. Antes de producir recibirás una propuesta para revisión.",
  },
  {
    question: "¿Se aceptan pedidos por volumen?",
    answer:
      "Sí. Empresas, equipos, instituciones, eventos y emprendimientos pueden solicitar una cotización especial.",
  },
  {
    question: "¿Puedo solicitar una prenda que no aparece en el catálogo?",
    answer:
      "Sí. Selecciona una opción aproximada y explica lo que necesitas en el campo de detalles.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-brand-paper text-brand-ink">
      <section className="relative overflow-hidden bg-brand-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(109,40,217,0.5),transparent_35%),radial-gradient(circle_at_12%_78%,rgba(239,35,60,0.22),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-lilac">
            Transparencia en cada etapa
          </p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.04em] sm:text-7xl">
            Así convertimos tu idea en una prenda
            <span className="text-brand-red">.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">
            Nada se produce ni se cobra automáticamente. Primero revisamos,
            cotizamos y confirmamos cada detalle contigo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <article
              key={step.number}
              className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm"
            >
              <p className="text-5xl font-black text-brand-purple/30">
                {step.number}
              </p>
              <h2 className="mt-8 text-2xl font-black uppercase">
                {step.title}
              </h2>
              <p className="mt-4 leading-7 text-zinc-600">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-black py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-lilac">
              Pago protegido por etapas
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase sm:text-5xl">
              50% para iniciar y 50% antes de entregar
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              El primer pago ocurre solo cuando aceptas la cotización. Antes de
              producir confirmamos el diseño; antes de entregar verificamos el
              pedido terminado.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-brand-purple p-7">
              <p className="text-5xl font-black text-brand-lilac">50%</p>
              <h3 className="mt-5 text-xl font-black uppercase">Anticipo</h3>
              <p className="mt-3 leading-7 text-white/70">
                Reserva materiales, diseño y espacio de producción.
              </p>
            </div>
            <div className="rounded-3xl bg-brand-red p-7">
              <p className="text-5xl font-black">50%</p>
              <h3 className="mt-5 text-xl font-black uppercase">Saldo</h3>
              <p className="mt-3 leading-7 text-white/75">
                Se coordina cuando el pedido está terminado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-purple">
            Preguntas frecuentes
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase sm:text-5xl">
            Lo que necesitas saber
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {questions.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-black/10 bg-white p-6 open:border-brand-purple/40"
            >
              <summary className="flex items-center justify-between gap-5 font-black">
                {item.question}
                <span className="text-2xl text-brand-red transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl leading-7 text-zinc-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/personalizar"
            className="rounded-full bg-brand-red px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-white transition hover:bg-brand-purple"
          >
            Iniciar solicitud
          </Link>
          <Link
            href="/seguimiento"
            className="rounded-full border border-brand-purple/30 px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-brand-purple transition hover:bg-brand-lilac/30"
          >
            Consultar un pedido
          </Link>
        </div>
      </section>
    </div>
  );
}

